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
import { useForm } from "react-hook-form"
import * as z from "zod"
import Datepicker from "react-tailwindcss-datepicker";

interface ProfileFormProps {
    disabled: boolean;
    subID: string;
    organization: string;
    data?: any; // Optional data prop to initialize form
}

const formSchema = z.object({
    firstName: z.string().min(1, "First Name is required"),
    lastName: z.string().min(1, "Last Name is required"),
    email: z.string().email("Invalid email address"),
    contact: z.string().min(10, "Contact number should be at least 10 digits"),
    dob: z.string().nonempty("Date of Birth is required"),
    // dob: z.date().refine((date) => date instanceof Date, {
    //     message: "Invalid date",
    // }),
    address: z.string().min(1, "Address is required"),
    city: z.string().min(1, "City is required"),
    state: z.string().min(1, "State is required"),
    country: z.string().min(1, "Country is required"),
    pincode: z.string().min(6, "Pincode is required").max(6, "Invalid Pincode"),

});

type FormData = z.infer<typeof formSchema>;

const ProfileForm = ({ disabled, data, subID, organization }: ProfileFormProps) => {

    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: data.FirstName || "",
            lastName: data.LastName || "",
            email: data.Email || "",
            contact: data.PhoneNumber || "",
            dob: data.DOB || "",
            address: data.Address || "",
            city: data.City || "",
            state: data.State || "",
            country: data.Country || "",
            pincode: data.Pincode || "",
        },
    });

    async function updateUserProfile(subID: string, orgname: string, profileData: FormData, modifyState: boolean) {
        const response = await fetch('https://tazgxc1q7j.execute-api.ap-south-1.amazonaws.com/Prod/userprofile/update', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                subID: subID, // Include subID in the request body
                orgname: orgname, // Include orgname in the request body
                FirstName: profileData.firstName,
                LastName: profileData.lastName,
                Email: profileData.email,
                PhoneNumber: profileData.contact,
                DOB: profileData.dob,
                Address: profileData.address,
                City: profileData.city,
                State: profileData.state,
                Country: profileData.country,
                Pincode: profileData.pincode,
                isUpdated: modifyState
            }),
        });

        if (!response.ok) {
            throw new Error('Failed to update user profile');
        }

        return response.json();
    }


    async function onSubmit(values: FormData) {

        if (!values.dob) {
            // Handle the case where dob is not provided
            console.error("Date of Birth is required");
            form.setError("dob", {
                type: "manual",
                message: "Date of Birth is required",
            });
            return;
        }

        //console.log(values)
        try {
            const sub = subID;
            const orgname = organization;
            //console.log(sub + ":" + orgname)
            await updateUserProfile(sub, orgname, values, true);
            

            console.log("Profile updated successfully");
        } catch (error) {
            // Handle errors (e.g., show an error message)
            console.error("Error updating profile:", error);
        }
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
                                        <Input placeholder="Last Name" {...field} className='w-full' disabled={disabled} />
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
                                        <Input placeholder="Contact" {...field} className='w-full' disabled={disabled} />
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
                                    <Input placeholder="abc@domain.com" {...field} className='w-full' disabled={disabled} />
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
                                    <Input placeholder="Your Address" {...field} type='text' className='w-full' disabled={disabled} />
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
                                        <Input placeholder="Enter your City" {...field} className='w-full' disabled={disabled} />
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
                                        <Input placeholder="Enter the State" {...field} className='w-full' disabled={disabled} />
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
                                        <Input placeholder="6**1**" {...field} className='w-full' disabled={disabled} />
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
                                        <Input placeholder="Enter your Country" {...field} className='w-full' disabled={disabled} />
                                    </FormControl>
                                    {fieldState.error && <FormMessage>{fieldState.error.message}</FormMessage>}
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className='flex items-center justify-center '>
                        <Button disabled={disabled} type="submit" className='bg-gold-200 text-black font-semibold w-max'>Update</Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}

export default ProfileForm;


