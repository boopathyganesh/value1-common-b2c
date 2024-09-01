import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import jwkToPem from 'jwk-to-pem';
import jwt from 'jsonwebtoken';

const AuthEndpoint = process.env.AUTH_ENDPOINT;
const COGNITO_REGION = "ap-south-1";
const USER_POOL_ID = "ap-south-1_q7IN1GTsy";

let _cognitoJwk = null;

async function getCognitoJwk() {
    if (!_cognitoJwk) {
        const jwksUrl = `https://cognito-idp.${COGNITO_REGION}.amazonaws.com/${USER_POOL_ID}/.well-known/jwks.json`;
        const response = await axios.get(jwksUrl);
        _cognitoJwk = response.data;
    }
    return _cognitoJwk;
}

async function isValidToken(token) {
    try {
        const jwk = await getCognitoJwk();
        const unverifiedHeader = jwt.decode(token, { complete: true })?.header;
        let rsaKey = null;

        if (!unverifiedHeader) {
            return false;
        }

        for (const key of jwk.keys) {
            if (key.kid === unverifiedHeader.kid) {
                rsaKey = jwkToPem(key);
                break;
            }
        }

        if (rsaKey) {
            const payload = jwt.verify(token, rsaKey, {
                algorithms: ['RS256'],
                issuer: `https://cognito-idp.${COGNITO_REGION}.amazonaws.com/${USER_POOL_ID}`
            });
            return true;
        } else {
            return false;
        }
    } catch (error) {
        return false;
    }
}

function decodeAccessToken(token) {
    try {
        return jwtDecode(token);
    } catch (error) {
        return null;
    }
}

function decodeIdToken(token) {
    try {
        return jwtDecode(token);
    } catch (error) {
        return null;
    }
}

export const options = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            async authorize(credentials) {
                try {
                    const contact = "+91" + credentials.phone_number;

                    if (!credentials.session) {
                        throw new Error("Session ID is required for OTP verification.");
                    }

                    const response = await axios.post(`${AuthEndpoint}/verify`, {
                        phone_number: contact,
                        otp: credentials.otp,
                        session: credentials.session,
                    });

                    const otpData = response.data;

                    const isAccessTokenValid = await isValidToken(otpData.AuthenticationResult.AccessToken);
                    const isIdTokenValid = await isValidToken(otpData.AuthenticationResult.IdToken);

                    if (!isAccessTokenValid || !isIdTokenValid) {
                        throw new Error("Invalid tokens received from OTP verification.");
                    }

                    const Payload = decodeIdToken(otpData.AuthenticationResult.IdToken);
                    
                    const subId = Payload?.sub;
                    const profileResponse = await axios.get(`https://tazgxc1q7j.execute-api.ap-south-1.amazonaws.com/Prod/userprofile/fetch?subID=${subId}`)
                    const profileData = profileResponse.data[0]

                    if (otpData && profileData) {
                        //console.log("Authorization successful:", otpData);
                        return {
                            ...otpData,
                            role: "User",
                            Payload,
                            profileData
                        };
                    } else {
                        console.error("OTP Verification failed.");
                        return null;
                    }
                } catch (error) {
                    console.error("Error during authorization:", error);
                    return null;
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.role = user.role;
                token.Payload = user.Payload;
                token.profileData = user.profileData
            }
            return token;
        },
        async session({ session, token }) {
            if (session?.user) {
                session.user.role = token.role;
                session.user.Payload = token.Payload;
                session.user.profileData = token.profileData;
            }
            return session;
        },
        async redirect({ url, baseUrl }) {
            const urlObject = new URL(url, baseUrl);
            const callbackUrl = urlObject.searchParams.get("callbackUrl") || "/reward-store";

            return callbackUrl.startsWith(baseUrl)
                ? callbackUrl
                : baseUrl+callbackUrl;
        }

    },
    pages: {
        signIn: '/auth', // Custom sign-in page
    },
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60, // 30 days
        updateAge: 24 * 60 * 60, // every 24 hours
      },
    secret: process.env.NEXTAUTH_SECRET,
    //debug:true

};

export default NextAuth(options);
