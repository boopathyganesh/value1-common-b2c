"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import DealsCard from './ui/DealsCard'
import Banner from './Banner';
import { brand } from '@/context/data';
import { useINRDeals } from '@/context/INRDealsContext';


const OnlineDeals = () => {
    const [visibleItems, setVisibleItems] = useState(3); // Initial number of items to display
    //const [activeTab, setActiveTab] = useState('top-brands'); // Initial active tab
    //const [merchants, setMerchants] = useState<Merchant[]>([]);
    const { merchants, loading, error, refetch } = useINRDeals();
    //const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    if (loading) return <p>Loading merchants...</p>;
    if (error) return <p>Error: {error}</p>;
    
    //console.log("INRDeals Data::::::::",merchants)

    const handleViewMore = () => {
        if (visibleItems > 3) {
            router.push("/reward-store/online-deals")
        }
        else {
            setVisibleItems((prevVisibleItems) => prevVisibleItems + 3); // Show 3 more items on each click
        }
    };

    return (
        <section className='w-full bg-black text-white py-2'>
            <div className='max-w-sm md:max-w-8xl mx-auto p-5 md:p-10 rounded-2xl'>
                <div className='flex flex-col items-center md:items-start justify-center gap-4'>
                    <h2 className="md:ml-10 text-3xl text-center md:text-left font-bold">Online Deals</h2>
                </div>
                <div className='flex items-center justify-center'>
                    <Banner />
                </div>
                <div className='mt-10 mb-5 md:mb-0'>
                    <div className="relative flex max-w-6xl w-full flex-col mx-auto">
                        <div className='flex flex-wrap items-center justify-center gap-5 py-4'>
                            {merchants && merchants.slice(0, visibleItems).map((store, index) => (
                                <DealsCard
                                    key={store.id}
                                    id={store.id.toString()}
                                    title={store.merchant}
                                    content={store.payout}
                                    image={store.logo}
                                />
                            ))}
                        </div>
                        {/* <button className='absolute -bottom-8 lg:top-0 lg:bottom-auto right-5 bg-gold-500 px-3 py-2 rounded-2xl'>View More</button> */}
                        {(visibleItems < brand.length) ? (
                            <div className='w-full flex items-center justify-end'>
                                <button
                                    onClick={handleViewMore}
                                    className=' w-max bg-gold-200 text-black px-3 py-2 rounded-2xl'
                                >
                                    View More
                                </button>
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>

        </section>
    )
}

export default OnlineDeals
