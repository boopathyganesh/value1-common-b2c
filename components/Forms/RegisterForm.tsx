"use client";
import { signIn } from "next-auth/react";
import React, { useEffect, useState } from 'react';
import { Input } from "@/components/ui/input";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { useRouter } from 'next/navigation';
import axios from "axios";
import Datepicker from "react-tailwindcss-datepicker";
import { ComboboxDemo } from "./Combobox";

const SignInFormSchema = z.object({
    contact: z.string().min(10, "Contact number should be at least 10 digits")
        .refine(value => /^\d+$/.test(value), {
            message: "Contact number must be numeric",
        }),
});

const SignUpFormSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    //organization: z.string().min(1, "Organization  is required"),
    email: z.string().email("Invalid email address"),
    contact: z.string().min(10, "Contact number should be at least 10 digits")
        .refine(value => /^\d+$/.test(value), {
            message: "Contact number must be numeric",
        }),
    state: z.string().min(1, "State is required"),
    dob: z.string().min(1, "Date of Birth is required"),
    pincode: z.string().regex(/^[1-9][0-9]{5}$/, {
        message: "Invalid pincode. A valid Indian pincode is a 6-digit number.",
    })
});

const OTPSchema = z.object({
    otp: z.string().length(6, "OTP should be 6 digits").refine(value => /^\d+$/.test(value), {
        message: "OTP must be numeric",
    }),
});

type SignInFormData = z.infer<typeof SignInFormSchema>;
type SignUpFormData = z.infer<typeof SignUpFormSchema>;
type OTPFormData = z.infer<typeof OTPSchema>;

export const LoginForm = () => {
    const [verify, setVerify] = useState<boolean>(false);
    const [userFound, setUserFound] = useState<boolean | null>(null);
    const [signInContact, setSignInContact] = useState<string>("");
    const [session, setSession] = useState<string | null>(null);
    const [signInInit, setSignInInit] = useState<boolean>(false);
    const [signUpSts, setSignUpSts] = useState<boolean>(false);
    const router = useRouter();


    const SignInform = useForm<SignInFormData>({
        resolver: zodResolver(SignInFormSchema),
        defaultValues: {
            contact: "",
        },
    });

    const SignUpform = useForm<SignUpFormData>({
        resolver: zodResolver(SignUpFormSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            //organization: "",
            email: "",
            contact: signInContact,
            state: "",
            dob: "",
            pincode: ""
        },
    });

    const OTPform = useForm<OTPFormData>({
        resolver: zodResolver(OTPSchema),
        defaultValues: {
            otp: "",
        },
    });

    useEffect(() => {
        SignUpform.reset({
            ...SignUpform.getValues(),
            contact: signInContact,
        });
    }, [SignUpform, signInContact]);

    interface Response {
        session?: string;
        message?: string;
        error?: string;
        // Include any other fields that may be returned by the API
    }

    async function CustomSignIn(phone_number: string): Promise<Response | null> {
        try {
            const response = await axios.post<Response>(
                `https://w63goktni6.execute-api.ap-south-1.amazonaws.com/Prod/auth/signin`,
                {
                    phone_number: `+91${phone_number}`,
                }
            );

            // Assuming the API returns a session if the sign-in is successful
            if (response.data && response.data.session) {
                return response.data;  // Return the session data or other relevant data
            } else if (response.data && response.data.error) {
                console.error("Sign-In Error:", response.data.error);
                return null;
            } else {
                console.error("Unexpected Response:", response.data);
                return null;
            }
        }
        catch (error: any) {
            // Check if the error response is a UserNotFoundException
            if (error.response && error.response.data && error.response.data.error) {
                const errorMessage = error.response.data.error;

                if (errorMessage.includes("UserNotFoundException")) {
                    console.error("User does not exist.");
                    // Handle UserNotFoundException specifically
                    // You might want to show a specific error message to the user
                    return null;
                } else {
                    console.error("Sign-In Request Failed:", errorMessage);
                }
            } else {
                console.error("Sign-In Request Failed:", error.message || error);
            }

            return null;
        }
    }


    async function CustomSignUp(phone_number: string, firstname: string, lastname: string, email: string, state: string, dob: string, pincode: string): Promise<Response | any | null> {  //organization: string,
        try {
            const response = await axios.post<Response>(`https://w63goktni6.execute-api.ap-south-1.amazonaws.com/Prod/auth/signup`, {
                phone_number: `+91${phone_number}`,
                firstname: firstname,
                lastname: lastname,
                email: email,
                organization: "Veltech",  //Default for Veltech Users #organization
                DOB: dob,
                State: state,
                Pincode: pincode
            });

            // Assuming the API returns a session or success message if sign-up is successful
            if (response.data && response.data.message) {
                console.log(response.data.message)
                return response.data; // Return session data or other relevant info
            }

        } catch (error) {
            console.error("Sign-Up Request Failed:", error);
            return error;
        }
    }

    const onSubmit = async (values: SignInFormData) => {
        const { contact } = values;
        setSignInContact(contact);

        // Sign in with NextAuth.js
        const result = await CustomSignIn(contact)

        if (result?.session) {
            setSession(result.session)
            setUserFound(true);
            setSignInInit(true)
        } else {
            setSignInInit(true)
            setUserFound(false);
        }
    };

    const onSignUpSubmit = async (values: SignUpFormData) => {
        if (!values.dob) {
            console.error("Date of Birth is required");
            SignUpform.setError("dob", {
                type: "manual",
                message: "Date of Birth is required",
            });
            return;
        }

        const { contact, firstName, lastName, email, pincode, dob, state } = values; //organization,

        try {
            // First, sign up with NextAuth.js
            const result = await CustomSignUp(contact, firstName, lastName, email, state, dob, pincode); //organization,

            if (result?.message) {
                console.log(result?.message);

                // Extract the unique ID from the result
                const uniqueId:string = result?.memID;

                const response = await fetch(`https://api.value1.in/augmont/create-user`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        mobileNumber: contact,
                        emailId: email,
                        uniqueId: uniqueId,
                        userName: `${firstName} ${lastName}`,
                        userPincode: pincode,
                        dateOfBirth: dob,
                    }),
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log("User created successfully in Augmont DB:", data);

                    // Complete the sign-in process
                    setSignUpSts(true);
                    signIn('credentials', { callbackUrl: '/reward-store' });
                } else {
                    // Handle errors from the API call
                    const errorData = await response.json();
                    console.error("Error while creating user  in Augmont DB:", errorData);
                    alert("Error while creating user. Please try again.");
                    setUserFound(false);
                }
            } else {
                console.error("Error while registering your data");
                alert(result?.response.data.error || "Unknown error");
                setUserFound(false);
            }
        } catch (error) {
            console.error("Unexpected error", error);
            alert("An unexpected error occurred");
            setUserFound(false);
        }
    };


    const onOTPSubmit = async (values: OTPFormData) => {
        const { otp } = values;

        const result = await signIn('credentials', {
            redirect: false,
            otp,
            phone_number: signInContact,
            session: session
        });

        if (result?.ok) {
            setVerify(true)
            router.push(result?.url || "/reward-store");
            console.log("OTP verification Success!");

        } else {
            setVerify(false)
            console.log("OTP verification failed");
        }
    };

    return (
        <div className="w-full flex flex-col items-start justify-start max-h-[320px] overflow-scroll">
            {userFound === null && (
                <Form {...SignInform}>
                    <form onSubmit={SignInform.handleSubmit(onSubmit)} method='post' className="w-full flex flex-col items-center justify-start gap-4">
                        <FormField
                            control={SignInform.control}
                            name="contact"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Mobile Number</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter your Registered Mobile No." {...field} type='number' maxLength={10} className='w-96' />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button disabled={signInInit} type="submit" className='bg-solid font-semibold w-max text-secondary'>Next</Button>
                    </form>
                </Form>
            )}

            {userFound === false && (
                <Form {...SignUpform}>
                    <form onSubmit={SignUpform.handleSubmit(onSignUpSubmit)} method='post' className="w-full flex flex-col items-center justify-start gap-4">
                        <div className='flex flex-col items-center justify-start gap-5 px-4'>
                            <FormField
                                control={SignUpform.control}
                                name="contact"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Mobile Number</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your Mobile Number" {...field} className='w-96' />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={SignUpform.control}
                                name="firstName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>First Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your First Name" {...field} className='w-96' />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={SignUpform.control}
                                name="lastName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Last Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your Last Name" {...field} className='w-96' />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {/* <FormField
                                control={SignUpform.control}
                                name="organization"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Organization</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your Organization Name" {...field} className='w-96' />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            /> */}
                            <FormField
                                control={SignUpform.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your Email" {...field} className='w-96' />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={SignUpform.control}
                                name="dob"
                                render={({ field, fieldState }) => (
                                    <FormItem className="w-full">
                                        <FormLabel>Date of Birth</FormLabel>
                                        <FormControl>
                                            <Datepicker
                                                inputClassName={"text-sm h-max text-secondary border border-primary px-2 w-full rounded-md focus:ring-primary focus:outline-none disabled:border-primary/50 disabled:text-gray-600"}
                                                asSingle={true}
                                                useRange={false}
                                                popoverDirection='down'
                                                value={field.value ? {
                                                    startDate: new Date(field.value),
                                                    endDate: new Date(field.value)
                                                } : {
                                                    startDate: new Date(),
                                                    endDate: new Date()
                                                }} // Provide both startDate and endDate
                                                onChange={(date) => {
                                                    if (date?.startDate) {
                                                        field.onChange(date.startDate.toString().split('T')[0]); // Convert Date to string
                                                    } else {
                                                        field.onChange(null); // Handle case where date is null
                                                    }
                                                }}
                                            />
                                        </FormControl>
                                        {fieldState.error && (
                                            <FormMessage>{fieldState.error.message}</FormMessage>
                                        )}
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={SignUpform.control}
                                name="state"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col items-start justify-start w-full">
                                        <FormLabel>State</FormLabel>
                                        <FormControl>
                                            <ComboboxDemo
                                                value={field.value}
                                                onChange={(value) => field.onChange(value)}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={SignUpform.control}
                                name="pincode"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Pincode</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your Pincode" {...field} className='w-96' />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button disabled={signUpSts} type="submit" className='bg-solid font-semibold w-max text-secondary'>Sign Up</Button>
                        </div>
                    </form>
                </Form>
            )}

            {userFound && (
                <Form {...OTPform}>
                    <form onSubmit={OTPform.handleSubmit(onOTPSubmit)} method='post' className="w-full flex flex-col items-center justify-center">
                        <div className='flex flex-col items-center justify-center gap-5 px-4'>
                            <FormField
                                control={OTPform.control}
                                name="otp"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>OTP</FormLabel>
                                        <FormControl>
                                            <div className='w-96 flex items-center justify-center'>
                                                <InputOTP maxLength={6} {...field} autoFocus={true}>
                                                    <InputOTPGroup {...field}>
                                                        <InputOTPSlot index={0} autoFocus/>
                                                        <InputOTPSlot index={1} />
                                                        <InputOTPSlot index={2} />
                                                        <InputOTPSlot index={3} />
                                                        <InputOTPSlot index={4} />
                                                        <InputOTPSlot index={5} />
                                                    </InputOTPGroup>
                                                </InputOTP>
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button disabled={verify} type="submit" className='bg-solid font-semibold w-max text-secondary'>Verify</Button>
                        </div>
                    </form>
                </Form>
            )}
        </div>
    );
};
