import axios from 'axios';

export async function CustomSignIn(phoneNumber: string): Promise<any> {
    const endpoint = process.env.AUTH_ENDPOINT+'/signin';

    try {
        const response = await axios.post(endpoint, {
            phone_number: phoneNumber,
        });

        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error(`Axios error: ${error.message}`);
        } else {
            console.error(`Unexpected error: ${error}`);
        }
        throw error;
    }
}