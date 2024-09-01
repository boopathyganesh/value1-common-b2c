import Link from "next/link"
import { CircleUser, Menu, Package2, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import ProfileForm from "../Forms/ProfileForm"
import { useEffect, useState } from "react"
import KYCForm from "../Forms/KYCForm"
import PdfViewer from "./PdfViewer"
import { useSession } from "next-auth/react"


export function ProfileComponent() {
    const [block, setBlock] = useState<boolean>(true);
    const { data: session } = useSession();
    const [panVerified, setPanVerified] = useState<boolean>(false);
    const [profileData, setProfileData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    async function fetchUserProfile(subID: string) {
        try {
            const response = await fetch(
                `https://tazgxc1q7j.execute-api.ap-south-1.amazonaws.com/Prod/userprofile/fetch?subID=${encodeURIComponent(subID)}`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            if (!response.ok) {
                throw new Error(`Failed to update user profile: ${response.statusText}`);
            }

            const result = await response.json();
            return result;
        } catch (error:any) {
            setError(error.message || 'An unknown error occurred');
            setLoading(false);
            throw error;
        }
    }

    useEffect(() => {
        if (session && session.user) {
            const userData = session.user?.Payload;
            const subID = userData?.sub;
            
            if (subID) {
                const getProfileData = async () => {
                    try {
                        const profile = await fetchUserProfile(subID);
                        setProfileData(profile[0]);
                    } catch (error) {
                        console.error(error);
                    } finally {
                        setLoading(false);
                    }
                };

                getProfileData();
            }
        } else {
            setLoading(false); // If session is not available, stop loading
        }
    }, [session]);

    function handleEditBtn() {
        setBlock(prevBlock => !prevBlock);
    }

    if (loading) return <div>Loading profile...</div>;

    if (error) return <div>Error: {error}</div>;

    if (!session) return <div>No session available</div>;

    const userData = session.user?.Payload;
    const data = {
        firstName: userData?.given_name,
        lastName: userData?.family_name,
        email: userData?.email,
        contact: userData?.phone_number,
        organization: userData?.['custom:custom:organization'],
        sub: userData?.sub,
        ...userData
    };

    //console.log("profileData:::::: from DB:",profileData)

    return (
        <div className="flex min-h-screen w-full flex-col">
            <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8">
                <div className="mx-auto grid w-full max-w-6xl gap-2">
                    <h1 className="text-3xl font-semibold">Profile Space</h1>
                </div>
                <div className="flex items-center justify-center">
                    <Tabs defaultValue="profile" className="flex flex-col items-center justify-center w-full">
                        <TabsList className="max-w-4xl mx-auto">
                            <TabsTrigger value="profile">
                                <span>Profile</span>
                            </TabsTrigger>
                            <TabsTrigger value="kyc">
                                <span>KYC Details</span>
                            </TabsTrigger>
                            <TabsTrigger value="grantletter" disabled>
                                <span>GrantLetter</span>
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="profile" className="w-full">
                            <div className="w-full flex items-center justify-center gap-5 text-secondary h-[550px] rounded p-2">
                                <div className="w-1/3 h-full flex flex-col items-center justify-center gap-5">
                                    <div className="w-32 h-32 p-2 rounded-full border-2 border-primary overflow-hidden">
                                        <Image src={"/images/mr.dummy.png"} alt={""} height={500} width={500} className="w-full" />
                                    </div>
                                    <div className="flex flex-col items-center justify-center">
                                        <h1 className="text-2xl font-medium">{data.firstName + " " + data.lastName}</h1>
                                        <p className="text-lg">{data.email}</p>
                                        <span className="text-primary text-xl font-medium">{data.organization}</span>
                                        <span className="text-secondary text-base font-medium">Membership type: <span className="text-primary">{"Co-Own"}</span></span>
                                    </div>
                                    <Button onClick={handleEditBtn} disabled={profileData && profileData.isUpdated}  className='bg-primary text-secondary font-semibold w-max'>Edit Profile</Button>
                                </div>
                                <div className="w-2/3 h-[500px] flex items-start justify-center overflow-scroll pt-5">
                                    <ProfileForm disabled={block || profileData.isUpdated} data={profileData} subID={data.sub} organization={data.organization} />
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value="kyc" className="w-full">
                            <div className="w-full flex items-center justify-center gap-5 text-secondary h-[550px] rounded p-2">
                                <KYCForm disabled={profileData.isVerified} PAN={profileData.PAN_number} DOB={"2001-08-29"} Name={data.firstName + " " + data.lastName} subID={data.sub} Organization={data.organization} />
                            </div>
                        </TabsContent>
                        <TabsContent value="grantletter" className="w-full">
                            <div className="w-full flex items-center justify-center gap-5 text-secondary h-[600px] rounded p-2">
                                <PdfViewer link="/pdf/GrantLetter-sample.pdf" />
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </main>
        </div>
    )
}
