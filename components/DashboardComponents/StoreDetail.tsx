import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { BsArrowsExpand } from "react-icons/bs";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useRouter } from 'next/navigation';
import HtmlContent from '../ui/HtmlEncoder';


const payout = [
    {
        category: "OnePlus Nord Buds, OnePlus Nord Buds CE, OnePlus 11, OnePlus 11R, OnePlus Nord CE4, Nord CE 3 Lite, OnePlus 12R",
        payout: "0.68% / Sale",
    },
    {
        category: "Audios: Buds Series, Audios: Bullets Wireless Series, OnePlus Buds Z2, Wearables: Watch, Wearables: Band, Nord Wired, Nord Watch, Buds Pro 2, Buds Pro 2R,   Pad, OnePlus Keyboard, Nord CE 2 5G, Nord 3, Others",
        payout: "0.33% / Sale",
    },
    {
        category: "OnePlus 12",
        payout: "0.84% / Sale",
    },
    {
        category: "Nord CE 3",
        payout: "1.01% / Sale",
    },
    {
        category: "All Other",
        payout: "0.16% / Sale",
    },
    {
        category: "Nord CE4 Lite",
        payout: "0.84% / Sale",
    },

]
const terms = [
    {
        title: "Reporting ",
        data: "Real Time",
    },
    {
        title: "Cookie Duration",
        data: "30 Days",
    },
    {
        title: "Mobile App",
        data: "NO",
    },
    {
        title: "Mobile Web",
        data: "YES",
    },
    {
        title: "Desktop",
        data: "YES",
    },
    {
        title: "Payment Time",
        data: "45 - 60 Days",
    },
]


interface StoreProps {
    id: string;
    title: string;
    content: string;
    image: string;
    //category: any;
    description: string;
    conversion_flow: string;
    trackingUrl: string;
}

const StoreDetail = ({ id, title, image, content,  description, conversion_flow, trackingUrl }: StoreProps) => { //category,
    const [isExpanded, setIsExpanded] = useState<boolean>(false)
    const router = useRouter()
    function handleReadMore() {
        setIsExpanded(!isExpanded);
    }
    console.log("before sanity::::",conversion_flow)
    return (
        <div className='w-full flex flex-col items-center justify-center text-secondary gap-5 px-4'>
            <div className='w-full flex items-center justify-center rounded-xl p-4 gap-5 bg-dark_bg/10'>
                <div className='flex items-center justify-end'>
                    <div className='w-44 h-28 flex items-center justify-center bg-light_bg/95 rounded-xl'>
                        <Image src={image} alt={title} height={300} width={300} className='w-32' />
                    </div>
                </div>
                <div className='flex flex-col items-start justify-center gap-2 text-secondary p-5'>
                    <h1 className='text-xl font-semibold'>{title}</h1>
                    <h2 className='text-lg font-medium'>Earn 24k Gold upto {content} per Transaction on your Orders</h2>
                    <button onClick={() => router.push(trackingUrl)} className='px-5 py-3 text-base bg-primary text-black rounded-2xl'>Activate Rewards</button>
                </div>
            </div>
            <div className='w-full flex items-start justify-center gap-4'>
                <div className='w-1/4 h-full flex flex-col items-center justify-start gap-5'>
                    <div className='w-full h-full flex flex-col items-center justify-start gap-5'>
                        <div className='p-4 flex flex-col items-center justify-center gap-2 bg-dark_bg/10 text-secondary rounded w-full'>
                            <h1 className='w-full text-xl font-semibold text-primary'>How to get this offer?</h1>
                            <ul className='list-disc list-inside text-sm flex flex-col gap-1'>
                                <li>Click on this Activate Rewards Button and Visit {title} Store</li>
                                <li>Make a purchase by Paying Online or via COD.</li>
                                <li>Purchase is tracked within 48 hours.</li>
                            </ul>
                        </div>
                    </div>
                    <div className='w-full h-full flex flex-col items-center justify-start gap-5'>

                        <HtmlContent htmlString={conversion_flow} />
                        {/* <div className='p-4 flex flex-col items-center justify-center gap-2 bg-dark_bg/10 rounded w-full'>
                            <h1 className='w-full text-xl font-semibold text-primary'>Conversion Flow</h1>
                            <ol className='list-decimal list-inside text-sm flex flex-col gap-1'>
                                <li>Member visits the store via the Value1 tracking link.</li>
                                <li>Member makes a purchase by Paying Online or via COD.</li>
                                <li>Purchase is tracked within 24 to 48 hours and is added to their Value1 account with status as “Pending”.</li>
                                <li>Sale is validated within 45 to 60 days & status is changed from “Pending” to “Verified”.</li>
                                <li>In case the item is returned/cancelled, the transaction becomes invalid and the transaction status changes to “Rejected”.</li>
                            </ol>
                            <p className='text-sm'><span className='font-semibold text-solid text-base'>Note: </span>In some cases, the sale tracking only works after the shipment has been dispatched & it can take up-to 48 hours for the transaction to be visible in your Value1 Dashboard.</p>
                        </div> */}
                    </div>
                    <div className='w-full h-full flex flex-col items-center justify-start gap-5'>
                        <div className='p-4 flex flex-col items-center justify-center gap-2 bg-dark_bg/10 rounded w-full'>
                            <h1 className='w-full text-xl font-semibold text-primary'>Terms & Conditions:</h1>
                            <div>
                                <Table>
                                    <TableBody>
                                        {terms.map((track, index) => (
                                            <TableRow key={index}>
                                                <TableCell className="font-medium text-center">{track.title}</TableCell>
                                                <TableCell className="text-center">{track.data}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-3/4 flex flex-col items-center justify-center gap-5'>
                    <div className='flex flex-col items-start justify-center gap-4 p-4 bg-dark_bg/10 rounded w-full'>
                        <h1 className='w-full text-xl font-semibold text-primary'>About Store</h1>
                        <p className={`${isExpanded ? "line-clamp-none max-h-40" : "line-clamp-3 max-h-20"} smooth`}>{description}</p>
                        {/* <span className='text-gray-500 text-sm'>Category: {category}</span> */}
                        <button className='text-base text-solid font-medium flex items-center gap-2' onClick={() => handleReadMore()}>
                            <span><BsArrowsExpand /></span> Read More
                        </button>
                    </div>
                    {/* <div className='w-full flex flex-col items-start justify-center gap-2 p-4 bg-dark_bg/10 rounded'>
                        <h1 className='w-full text-xl font-semibold text-primary mb-2'>Rewards Details</h1>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className='text-lg font-semibold text-primary'>Category</TableHead>
                                    <TableHead className="w-[150px] text-lg font-semibold text-primary">Rewards</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {payout.map((category, index) => (
                                    <TableRow key={index}>
                                        <TableCell className="font-medium">{category.category}</TableCell>
                                        <TableCell>{category.payout}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div> */}
                    <div className='w-full flex flex-col items-start justify-center gap-2 p-4 bg-dark_bg/10 rounded'>
                        <h1 className='w-full text-xl font-semibold text-primary'>Also Remember</h1>
                        <ol className='list-decimal list-inside text-base flex flex-col gap-1'>
                            <li>Use only coupon code mentioned on the website or shared by Value1</li>
                            <li>Do not visit any other coupon or deal site after clicking-out from Value1</li>
                            <li>No Rewards is applicable if you cancel the order</li>
                            <li>If your Rewards does not track, raise a Missing Reward ticket within 10 Days from the order date</li>
                            <li>Please send Rewards related queries to Value1 only, not to {title}</li>
                        </ol>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default StoreDetail
