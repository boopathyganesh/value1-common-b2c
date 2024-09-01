import axios, { AxiosResponse } from 'axios';
import dotenv from "dotenv";
import { resolve } from 'path'
dotenv.config({ path: resolve(__dirname, '.env') });

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

const getApiEndpoint = (): string => {
    const endpoint = process.env.INR_DEALS_API; // Ensure this matches your .env variable
    console.log('API Endpoint:', endpoint); // Log the endpoint for debugging
    if (!endpoint) {
        throw new Error('Environment variable INR_DEALS_API is not defined');
    }
    return endpoint;
};


export const fetchMerchants = async (): Promise<Merchant[]> => {
    try {
        const response: AxiosResponse<Merchant[]> = await axios.get(
            "https://z8whkg86fe.execute-api.ap-south-1.amazonaws.com/Prod/fetch"
        );
        //console.log("INR Deals :::::::: ",response.data)
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Axios error:', error);
            throw new Error(`Failed to fetch data: ${error.message}`);
        } else {
            console.error('Unexpected error:', error);
            throw new Error('An unexpected error occurred');
        }
    }
};
