import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

import { resolve } from 'path';
import dotenv from 'dotenv';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Formats a number into a specified currency format.
 * @param {number} amount - The amount to format.
 * @param {string} currency - The currency code (e.g., 'USD', 'EUR').
 * @param {string} locale - The locale code (e.g., 'en-US', 'de-DE').
 * @returns {string} - The formatted currency string.
 */
export function formatCurrency(amount?: number, currency: string ='INR', locale: string = 'en-IN'): string {
  if(amount){
    return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(amount);
  }
  return '0'
}


// Load environment variables from .env file
dotenv.config({ path: resolve(__dirname, '.env') });

// Function to get environment variables or use default values
export const getEnvVar = (key: string, defaultValue: string): string => {
  const value = process.env[key];
  if (!value) {
    console.warn(`Environment variable ${key} is not set. Using default value: ${defaultValue}`);
    return defaultValue;
  }
  return value;
};