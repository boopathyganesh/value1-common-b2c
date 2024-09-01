import { profData } from '@/context/data';
import Abilities from './Abilities';
import Image from 'next/image'
import React from 'react'
import { FaBolt, FaHeart, } from "react-icons/fa6";
import { GiChatBubble } from "react-icons/gi";

function listMaker(input: string): string[] {
    const sentences = input.trim().split('.').filter(sentence => sentence.trim() !== '');
    const segments: string[] = [];
    for (let i = 0; i < sentences.length; i += 2) {
        const segment = sentences.slice(i, i + 2).join('. ').trim();
        if (segment) {
            segments.push(segment + '.'); // Add the period back
        }
    }

    return segments;
}

const Professionals = ({ params }: { params: { id: string } }) => {

    const data = profData.find((card) => card.id === params.id);

    if(!data){
        return(
            <main>
                <h1>Searched professional data is not Available</h1>
            </main>
        )
    }

    return (
        <main className="flex text-secondary items-start justify-center gap-10 mt-2 w-full bg-light_bg py-10">
            <div className='flex flex-col items-center justify-center gap-5'>
                <div className='max-w-3xl w-full flex items-start justify-center gap-5'>
                    <div className='flex items-start justify-center w-56 max-h-56 h-max rounded-2xl overflow-hidden'>
                        <Image src={data?.imageUrl || '/images/mr.dummy.png'} alt={''} height={500} width={500} className='w-full h-auto' />
                    </div>
                    <div className='flex flex-col items-start justify-center gap-3'>
                        <h1 className='text-3xl'>{data?.title || "Name"}</h1>
                        <p className='text-lg'>This is The BEST Method For Learning English</p>
                        <div className='flex flex-col items-start justify-center gap-3'>
                            <div className='flex items-center justify-start gap-4'>
                                <span className='w-10 h-10 flex items-center justify-center'><Image src={'/images/svgs/award.svg'} alt={''} height={100} width={100} /></span>
                                <div className='flex flex-col items-start justify-center'>
                                    <h1 className='font-medium'>Super Tutor</h1>
                                    <p>Yuri S. is a highly rated and experienced tutor.</p>
                                </div>
                            </div>
                            <div className='flex items-center justify-start gap-4'>
                                <span className='w-10 h-10 flex items-center justify-center'><Image src={'/images/svgs/award.svg'} alt={''} height={100} width={100} /></span>
                                <div className='flex flex-col items-start justify-center'>
                                    <h1 className='font-medium'>Trials are 100% refundable</h1>
                                    <p>Try another tutor for free or get a refund</p>
                                </div>
                            </div>
                            <div className='flex items-center justify-start gap-4'>
                                <span className='w-10 h-10 flex items-center justify-center'><Image src={'/images/svgs/award.svg'} alt={''} height={100} width={100} /></span>
                                <div className='flex flex-col items-start justify-center'>
                                    <h1 className='font-medium'>Teaches</h1>
                                    <p>English lessons</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='max-w-3xl w-full flex flex-col items-start justify-center gap-3'>
                    <h1 className='text-secondary font-medium text-2xl'>About Me</h1>
                    <p className='text-secondary line-clamp-6'>{listMaker("A lot of people have tried to learn English by studying grammar, reading books, watching movies or TV shows, but still lack confidence and fluency when speaking English. I have worked with students every day for the past 20 years, and most of my students initially felt that reaching fluency was impossible. When they came to me, they thought they were doing everything they could, but fluency always seemed beyond their reach. You see, language is a skill. You need some knowledge, of course, but mostly it is a skill, like learning to play the piano. It needs to be systematically trained, not just learned, or taught. You cannot learn to play the piano if you just sit around and watch someone else play it, but you can be trained to play the piano. During a lecture, the person who is learning the most is the person giving the lecture. It is not enough to hear information, but we need to be systemically trained on how to implement that information. My approach is built around practicing correct speech patterns in a progressive fashion so that when you’re ready to have those conversations in a new language, those patterns will naturally express themselves since you have used them so many times before, and you will be able to express yourself fluently in no time. This program is geared towards students whose native language is Russian. I guarantee that my language coaching will get you from zero to hero within the next 6 to 12 months.")}</p>
                </div>
                <div className='flex flex-col items-start justify-center gap-3 max-w-3xl w-full'>
                    <h1 className='text-secondary font-medium text-2xl'>I speak</h1>
                    <div className='flex items-center justify-center gap-4'>
                        <div className='flex items-center justify-center gap-1'>
                            <span className='text-secondary'>{"English"}</span><span className='bg-secondary_bg px-2 py-0.5 text-secondary font-medium rounded-md'>Proficient C2</span>
                        </div>
                        <div className='flex items-center justify-center gap-1'>
                            <span className='text-secondary'>{"Russian"}</span><span className='bg-secondary_bg px-2 py-0.5 text-secondary font-medium rounded-md'>Proficient C2</span>
                        </div>
                        <div className='flex items-center justify-center gap-1'>
                            <span className='text-secondary'>{"Ukrainian"}</span><span className='bg-secondary_bg px-2 py-0.5 text-secondary font-medium rounded-md'>Advanced C1</span>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-start justify-center gap-3 max-w-3xl w-full'>
                    <Abilities />
                </div>
            </div>
            <div className='sticky top-0 z-10 flex flex-col items-center justify-center p-4 rounded-xl bg-dark_bg/10'>
                <div className='w-full h-auto flex items-center justify-center rounded-lg overflow-hidden'>
                    <Image src={'/images/card2.jpg'} alt={''} height={500} width={500} className='w-96' />
                </div>
                <div className='flex items-center justify-center gap-5 py-4'>
                    <div className='flex flex-col items-center justify-center '>
                        <span className='text-xl font-bold text-secondary'><span className='text-solid text-2xl'>&#9733;</span> {"4.9"}</span>
                        <span className='text-sm text-secondary/60'>{"266"} reviews</span>
                    </div>
                    <div className='flex flex-col items-center justify-center '>
                        <span className='text-xl font-bold text-secondary'>19175</span>
                        <span className='text-sm text-secondary/60'>lessons</span>
                    </div>
                    <div className='flex flex-col items-center justify-center '>
                        <span className='text-xl font-bold text-secondary'>&#8377; {"5,023"}</span>
                        <span className='text-sm text-secondary/60'>{"50"}-min lesson</span>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center gap-3 w-full'>
                    <button className='flex items-center justify-center gap-5 py-3 w-full rounded-xl bg-primary text-secondary font-medium hover:scale-105'><span><FaBolt className='text-xl' /></span>Book trial Session</button>
                    <button className='flex items-center justify-center gap-5 py-3 w-full rounded-xl bg-light_bg border-2 border-solid text-secondary font-medium hover:scale-105'><span><GiChatBubble className='text-xl' /></span>Send Message</button>
                    <button className='flex items-center justify-center gap-5 py-3 w-full rounded-xl bg-light_bg border-2 border-solid text-secondary font-medium hover:scale-105'><span><FaHeart className='text-xl' /></span>Add to favorites</button>
                </div>
            </div>
        </main>
    )
}

export default Professionals
