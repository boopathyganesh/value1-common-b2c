"use client"
import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
    endDate: string; // Format: dd-mm-yyyy
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ endDate }) => {
    const dateEnd = "07-09-2024"
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const [day, month, year] = dateEnd.split('-').map(Number);
            const endTime = new Date(year, month - 1, day).getTime();
            const now = new Date().getTime();
            const difference = endTime - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        const timer = setInterval(calculateTimeLeft, 1000);
        return () => clearInterval(timer);
    }, [dateEnd]);

    return (
        <div className='flex flex-col items-center justify-center gap-5'>
            <h1 className='text-5xl font-medium text-white'>Live In</h1>
            <div className="flex items-center justify-center space-x-4 bg-gold-200 text-white p-6 rounded-lg shadow-lg">
                <div className="flex flex-col items-center pl-2">
                    <span className="text-4xl font-bold">{timeLeft.days}</span>
                    <span className="text-secondary font-medium uppercase tracking-widest">Days</span>
                </div>
                <div className="flex flex-col items-center border-x border-black px-4">
                    <span className="text-4xl font-bold">{timeLeft.hours}</span>
                    <span className="text-secondary font-medium uppercase tracking-widest">Hours</span>
                </div>
                <div className="flex flex-col items-center border-r border-black pr-4">
                    <span className="text-4xl font-bold">{timeLeft.minutes}</span>
                    <span className="text-secondary font-medium uppercase tracking-widest">Minutes</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-4xl font-bold">{timeLeft.seconds}</span>
                    <span className="text-secondary font-medium uppercase tracking-widest">Seconds</span>
                </div>
            </div>
        </div>
    );
};

export default CountdownTimer;
