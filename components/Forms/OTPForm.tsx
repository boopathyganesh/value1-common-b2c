"use client"
import { signIn } from "next-auth/react";
import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, Controller } from "react-hook-form"
import * as z from "zod"
import { useRouter } from 'next/navigation'

const formSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    organization: z.string().min(1, "Organization  is required"),
    email: z.string().email("Invalid email address"),
    contact: z.string().min(10, "Contact number should be at least 10 digits")
        .refine(value => /^\d+$/.test(value), {
            message: "Contact number must be numeric",
        }),
    otp: z.string().length(6, "OTP should be 6 digits"),
});

type FormData = z.infer<typeof formSchema>;

export const LoginForm = () => {
    const [verify, setVerify] = useState<boolean>(false);
    const [userFound, setUserFound] = useState<boolean | null>(null);
    const router = useRouter();

    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            organization: "",
            email: "",
            contact: "",
            otp: "",
        },
    });

    const verifyContact = async () => {
        const contact = form.getValues('contact');
        if (contact && /^\d+$/.test(contact) && contact.length >= 10) {
            try {
                const result = await signIn("credentials", {
                    redirect: false,
                    phone_number: contact,
                });

                if (result?.error) {
                    setUserFound(false);
                } else {
                    setUserFound(true);
                    // setVerify(true);
                }
            } catch (error) {
                console.error(error);
            }
        } else {
            form.setError('contact', {
                type: 'manual',
                message: "Invalid contact number",
            });
        }
    };

    const verifyOtp = async (otp?: string) => {
        if (otp) {
            const contact = form.getValues('contact');
            try {
                const result = await signIn("credentials", {
                    redirect: false,
                    phone_number: contact,
                    otp,
                });

                if (result?.error) {
                    console.error("OTP Verification failed");
                } else {
                    router.push("/reward-store");
                }
            } catch (error) {
                console.error(error);
            }
        } else {
            console.error("OTP is undefined");
        }
    };

    const onSubmit = (values: FormData) => {
        console.log(values);
        router.push("/reward-store")
    };

    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} method='post' className="w-full flex flex-col items-start justify-start max-h-[320px] overflow-scroll">
                    <div className='flex flex-col items-center justify-center gap-5 px-4'>
                        <FormField
                            control={form.control}
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
                        {userFound === null && (
                            <Button type="button" onClick={verifyContact} className='bg-solid font-semibold w-max text-secondary'>Next</Button>
                        )}
                    </div>
                    {userFound === false && (
                        <div className='flex flex-col items-center justify-start gap-5 px-4'>
                            <FormField
                                control={form.control}
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
                                control={form.control}
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
                            <FormField
                                control={form.control}
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
                            />
                            <FormField
                                control={form.control}
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
                            <Button type="button" onClick={() => setVerify(true)} className='bg-solid font-semibold w-max text-secondary'>Next</Button>
                        </div>
                    )}
                    {verify && (
                        <div className='flex flex-col items-center justify-center gap-5 px-4'>
                            <FormField
                                control={form.control}
                                name="otp"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>OTP</FormLabel>
                                        <FormControl>
                                            <div className='w-96 flex items-center justify-center'>
                                                <InputOTP maxLength={6} {...field}>
                                                    <InputOTPGroup {...field}>
                                                        <InputOTPSlot index={0} />
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
                            <Button type="submit" onClick={() => verifyOtp(form.getValues('otp'))} className='bg-solid font-semibold w-max text-secondary'>Verify</Button>
                        </div>
                    )}
                </form>
            </Form>
        </div>
    );
};