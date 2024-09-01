"use client"

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
import { useForm, Controller  } from "react-hook-form"
import * as z from "zod"

const formSchema = z.object({
    name: z.string().nonempty("Name is required"),
    email: z.string().email("Invalid email address"),
    contact: z.string().min(10, "Contact number should be at least 10 digits"),
    otp: z.string().length(6, "OTP should be 6 digits").optional(),  // Optional in the initial step
});

type FormData = z.infer<typeof formSchema>;

export const RegisterForm = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} method='post' className="space-y-4 w-full flex flex-col items-center justify-center">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Your Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your Full Name" {...field} className='w-96' />
                                </FormControl>
                                <FormDescription>
                                    This name will be used as your public display name.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email Address</FormLabel>
                                <FormControl>
                                    <Input placeholder="abc@domain.com" {...field} className='w-96' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="contact"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Contact Number</FormLabel>
                                <FormControl>
                                    <Input placeholder="9**8**7**0" {...field} type='number' className='w-96' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="button" className='bg-gold-500 font-semibold w-max'>Next</Button>
                </form>
            </Form>
        </div>
    )
}

export const CorporateRegisterForm = () => {

    const [slide, setSlide] = useState(false);

    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            contact: "",
            otp: "",
        },
    })

    async function onNext() {
        setSlide(true);
        const isValid = await form.trigger(["name", "email", "contact"]);
        if (isValid) {
            setSlide(true);
        }
    }

    function onSubmit(values: FormData) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8" method='post'>
                    {!slide && (
                        <>
                            <Controller
                                control={form.control}
                                name="name"
                                render={({ field,fieldState  }) => (
                                    <FormItem>
                                        <FormLabel>Organization&apos;s Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your Full Name" {...field} className='w-96' />
                                        </FormControl>
                                        <FormDescription>
                                            This name will be used as your public display name.
                                        </FormDescription>
                                        {fieldState.error && <FormMessage>{fieldState.error.message}</FormMessage>}
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field,fieldState }) => (
                                    <FormItem>
                                        <FormLabel>Organization&apos;s Email Address</FormLabel>
                                        <FormControl>
                                            <Input placeholder="abc@domain.com" {...field} className='w-96' />
                                        </FormControl>
                                        {fieldState.error && <FormMessage>{fieldState.error.message}</FormMessage>}
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="contact"
                                render={({ field,fieldState }) => (
                                    <FormItem>
                                        <FormLabel>Official Contact Number</FormLabel>
                                        <FormControl>
                                            <Input placeholder="7**8**7**0" {...field} type='number' className='w-96' />
                                        </FormControl>
                                        {fieldState.error && <FormMessage>{fieldState.error.message}</FormMessage>}
                                    </FormItem>
                                )}
                            />
                            <Button type="button" onClick={() => onNext} className='bg-gold-500 font-semibold w-max'>Next</Button>
                        </>
                    )}
                        <div className="space-y-4">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Enter the OTP:</FormLabel>
                                        <FormControl>
                                            <div className='w-96 flex items-center justify-center py-4'>
                                                <InputOTP maxLength={6}>
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
                            <Button type="submit" className='bg-gold-500 font-semibold w-max'>verify</Button>
                        </div>
                </form>
            </Form>
        </div>
    )
}

