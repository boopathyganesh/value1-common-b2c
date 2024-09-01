"use client"
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import axios, { AxiosResponse } from 'axios';

export interface Merchant {
    payout: string;
    status: string;
    category: string;
    logo: string;
    id: number;
    url: string;
    merchant: string;
    type: string;
    description:string;
    conversion_flow:string;
}

interface INRDealsContextType {
    merchants: Merchant[] | null;
    loading: boolean;
    error: string | null;
    refetch: () => Promise<void>;
}

const INRDealsContext = createContext<INRDealsContextType | undefined>(undefined);

export const useINRDeals = (): INRDealsContextType => {
    const context = useContext(INRDealsContext);
    if (!context) {
        throw new Error('useINRDeals must be used within a INRDealsProvider');
    }
    return context;
};

export const INRDealsProvider = ({ children }: { children: ReactNode }) => {
    const [merchants, setMerchants] = useState<Merchant[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchMerchants = async () => {
        try {
            setLoading(true);
            setError(null);
            const response: AxiosResponse<Merchant[]> = await axios.get(
                "https://z8whkg86fe.execute-api.ap-south-1.amazonaws.com/Prod/fetch"
            );
            setMerchants(response.data);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                setError(`Failed to fetch data: ${error.message}`);
            } else {
                setError('An unexpected error occurred');
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMerchants();
    }, []);

    return (
        <INRDealsContext.Provider value={{ merchants, loading, error, refetch: fetchMerchants }}>
            {children}
        </INRDealsContext.Provider>
    );
};
