"use client"

import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, Controller } from "react-hook-form"
import * as z from "zod"
import DatePicker from '../ui/date-picker'

interface HolidayFormProps {
    disabled: boolean;
  }

const formSchema = z.object({
    firstName: z.string().min(1, "First Name is required"),
    lastName: z.string().min(1, "Last Name is required"),
    email: z.string().email("Invalid email address"),
    contact: z.string().min(10, "Contact number should be at least 10 digits"),
    dob: z.date().refine((date) => date instanceof Date, {
        message: "Invalid date",
    }),
    address: z.string().min(1, "Address is required"),
    city: z.string().min(1, "City is required"),
    state: z.string().min(1, "State is required"),
    country: z.string().min(1, "Country is required"),
    pincode: z.string().min(6, "Pincode is required").max(6, "Invalid Pincode"),
});

type FormData = z.infer<typeof formSchema>;

const HolidayForm = ({disabled}:HolidayFormProps) => {
    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            contact: "",
            dob: new Date(),
            address: "",
            city: "",
            state: "",
            country: "",
            pincode: "",
        },
    })

    function onSubmit(values: FormData) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" method='post'>
                    <div className='w-[450px] h-max flex items-start justify-start gap-3'>
                        <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field, fieldState }) => (
                                <FormItem className='w-1/2'>
                                    <FormLabel>First Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="First Name" {...field} className='w-full' disabled={disabled} />
                                    </FormControl>
                                    {fieldState.error && <FormMessage>{fieldState.error.message}</FormMessage>}
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field, fieldState }) => (
                                <FormItem className='w-1/2'>
                                    <FormLabel>Last Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Last Name" {...field} className='w-full'  disabled={disabled} />
                                    </FormControl>
                                    {fieldState.error && <FormMessage>{fieldState.error.message}</FormMessage>}
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className='w-[450px] h-max  flex items-start justify-start gap-3'>
                        <FormField
                            control={form.control}
                            name="contact"
                            render={({ field, fieldState }) => (
                                <FormItem className='w-1/2'>
                                    <FormLabel>Contact</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Contact" {...field} className='w-full'  disabled={disabled} />
                                    </FormControl>
                                    {fieldState.error && <FormMessage>{fieldState.error.message}</FormMessage>}
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="dob"
                            render={({ field, fieldState }) => (
                                <FormItem className="w-1/2">
                                    <FormLabel>Date of Birth</FormLabel>
                                    <FormControl>
                                        <DatePicker
                                            date={field.value}
                                            setDate={(date) => field.onChange(date)}
                                            disabled={disabled}
                                        />
                                    </FormControl>
                                    {fieldState.error && (
                                        <FormMessage>{fieldState.error.message}</FormMessage>
                                    )}
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field, fieldState }) => (
                            <FormItem>
                                <FormLabel>Email Address</FormLabel>
                                <FormControl>
                                    <Input placeholder="abc@domain.com" {...field} className='w-full'  disabled={disabled} />
                                </FormControl>
                                {fieldState.error && <FormMessage>{fieldState.error.message}</FormMessage>}
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="address"
                        render={({ field, fieldState }) => (
                            <FormItem>
                                <FormLabel>Address</FormLabel>
                                <FormControl>
                                    <Input placeholder="Your Address" {...field} type='text' className='w-full'  disabled={disabled} />
                                </FormControl>
                                {fieldState.error && <FormMessage>{fieldState.error.message}</FormMessage>}
                            </FormItem>
                        )}
                    />
                    <div className='w-[450px] h-max flex items-start justify-start gap-3'>
                        <FormField
                            control={form.control}
                            name="city"
                            render={({ field, fieldState }) => (
                                <FormItem className='w-1/2'>
                                    <FormLabel>City</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter your City" {...field} className='w-full'  disabled={disabled} />
                                    </FormControl>
                                    {fieldState.error && <FormMessage>{fieldState.error.message}</FormMessage>}
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="state"
                            render={({ field, fieldState }) => (
                                <FormItem className='w-1/2'>
                                    <FormLabel>State</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter the State" {...field} className='w-full'  disabled={disabled} />
                                    </FormControl>
                                    {fieldState.error && <FormMessage>{fieldState.error.message}</FormMessage>}
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className='w-[450px] flex items-center justify-start gap-3'>
                        <FormField
                            control={form.control}
                            name="pincode"
                            render={({ field, fieldState }) => (
                                <FormItem className='w-1/2'>
                                    <FormLabel>Pincode</FormLabel>
                                    <FormControl>
                                        <Input placeholder="6**1**" {...field} className='w-full'  disabled={disabled} />
                                    </FormControl>
                                    {fieldState.error && <FormMessage>{fieldState.error.message}</FormMessage>}
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="country"
                            render={({ field, fieldState }) => (
                                <FormItem className='w-1/2'>
                                    <FormLabel>Country</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter your Country" {...field} className='w-full'  disabled={disabled} />
                                    </FormControl>
                                    {fieldState.error && <FormMessage>{fieldState.error.message}</FormMessage>}
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className='flex items-center justify-center gap-5'>
                        <Button disabled={disabled} type="button" className='bg-light_bg border border-primary text-black font-semibold w-max'>Cancel</Button>
                        <Button disabled={disabled} type="submit" className='bg-gold-200 text-black font-semibold w-max'>Save</Button>
                    </div>
                </form>
            </Form>
        </div >
    )
}

export default HolidayForm;
