"use client"

import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

interface KYCFormProps {
    subID: string;
    Organization: string;
    DOB: string;
    Name: string;
    disabled: boolean;
    PAN: string;

}

const formSchema = z.object({
    pan: z.string().length(10, "Invalid PAN Number"), // Adjusted validation for exact length
});

type FormData = z.infer<typeof formSchema>;

const KYCForm = ({ disabled, Name, DOB, Organization, subID, PAN }: KYCFormProps) => {
    const [panSts, setPanSts] = useState<string>("Verify");
    const [isVerified, setisVerified] = useState<boolean>(disabled);
    const [loading, setLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    //console.log("isVerified init:", isVerified)

    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            pan: PAN || ""
        },
    });

    const isValidPanCardNo = (panCardNo: string) => {
        const regex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
        return regex.test(panCardNo);
    };

    async function updateUserProfile(subID: string, orgname: string, pan: string, LegalName: string, modifyState: boolean, PanDetails: any) {
        const response = await fetch('https://tazgxc1q7j.execute-api.ap-south-1.amazonaws.com/Prod/userprofile/update', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                subID: subID,
                orgname: orgname,
                PAN_number: pan,
                LegalName: LegalName,
                isVerified: modifyState,
                PanDetails: {
                    ...PanDetails,
                    aadhaarSeeding: PanDetails.aadhaarSeeding.toString() // Convert Decimal to string
                }
            }),
        });

        if (!response.ok) {
            throw new Error('Failed to update user profile');
        }

        return response.json();
    }

    const verifyPanNumber = async (panNumber: string, DOB: string, Name: string) => {
        const apiUrl = 'http://api.value1.in/pan-verification/verifyPan';

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    panNumber,
                    dateOfBirth: DOB, // Replace with actual DOB
                    name: Name   // Replace with actual name
                }),
            });

            if (!response.ok) {
                throw new Error(`Verification failed: ${response.statusText}`);
            }

            const data = await response.json();
            return data; // Return the response data for further processing if needed
        } catch (error) {
            console.error('Error:', error);
            setErrorMessage('PAN verification failed. Please try again.');
            throw error;
        }
    };

    const onSubmit = async (values: FormData) => {
        if (!isValidPanCardNo(values.pan)) {
            setPanSts("Verify");
            return;
        }

        setErrorMessage(null);

        try {
            const response = await verifyPanNumber(values.pan, DOB, Name);
            if (response && response.data && response.data.panDetails) {
                const PanData = response.data.panDetails
                //console.log("panDetails::::::", PanData)
                setPanSts("Verifying");
                setLoading(true);
                if (PanData.status === "VALID") {
                    setPanSts("Verified");
                    console.log("PAN Verified Successfully");
                    const LegalName = PanData.nameOnCard
                    setisVerified(true)
                    //console.log("isVerified check:", isVerified)
                    const profileUpdate = await updateUserProfile(subID, Organization, values.pan, LegalName, true, PanData);
                    //console.log("UserUpdate Response:", profileUpdate);
                    console.log("Pan Data Updated on DB")
                }
                else {
                    setPanSts("Retry");
                    console.log("PAN Verification Failed!");
                }
            }

        } catch (error) {
            setPanSts("Verify");
            console.error("PAN Verification Failed:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-96 flex flex-col items-center justify-center" method='post'>
                    <FormField
                        control={form.control}
                        name="pan"
                        render={({ field, fieldState }) => (
                            <FormItem>
                                <FormLabel>PAN Number</FormLabel>
                                <FormControl>
                                    <Input placeholder="GO**C9**1H" {...field} className='w-96' disabled={disabled || panSts === "Verified" || loading} maxLength={10} />
                                </FormControl>
                                <FormDescription>Your PAN Data will be verified as per NSDL Guidelines</FormDescription>
                                {fieldState.error && <FormMessage>{fieldState.error.message}</FormMessage>}
                            </FormItem>
                        )}
                    />
                    {errorMessage && <div className="text-red-500">{errorMessage}</div>}
                    <Button
                        disabled={disabled || panSts === "Verified" || loading}
                        type="submit"
                        className='bg-gold-200 text-black font-semibold w-max'>
                        {loading ? "Verifying..." : disabled ? "Verified!" : panSts}
                    </Button>
                </form>
            </Form>
        </div>
    );
};

export default KYCForm;
