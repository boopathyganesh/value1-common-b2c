'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'


interface CardProps {
    index: number;
    image: string;
    title: string;
    subTitle: string;
    content: string;
}

const ExplainCard = ({ index, image, title, subTitle, content }: CardProps) => {

    const [step, setStep] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setStep((prevStep) => (prevStep + 1) % 5); // Adjust the modulo value based on the number of steps
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const scale = index === step ? 'scale-125' : 'scale-100';
    const text = index === step ? 'text-primary' : 'text-secondary';

    return (
        <div className={`flex flex-col items-center justify-center gap-3 group p-1.5 rounded-xl smooth`}>
            <h1 className='text-secondary text-2xl font-medium mb-2'>{index + 1}. {title}</h1>
            <div className={`flex flex-col h-96 w-96 items-center justify-center gap-5 rounded-3xl py-2 px-3`}>
                <div className='w-40 h-32 flex items-center justify-center'>
                    <Image src={image} alt={''} height={500} width={500} className={`w-full ${scale} smooth`} />
                </div>
                <div className='w-full px-4'>
                    <h1 className={`text-2xl font-medium mb-2 text-center ${text}`}>{subTitle}</h1>
                    <p className='text-secondary text-center'>{content}</p>
                </div>
            </div>
        </div>
    )
}

const data = [
    {
        title: "Application Process",
        subTitle: "Your Gateway to Innovation",
        content: "Apply to join Value1 Labs and take the first step towards realizing your entrepreneurial dreams. We welcome all students with a passion for innovation and a desire to make an impact. Your journey starts here!",
        image: "/images/value-labs/application.png"
    },
    {
        title: "Problem Selection",
        subTitle: "Tackle Real-World Challenges",
        content: "Dive into a selection of real-world problems waiting for creative solutions. Choose a challenge that resonates with you and use your unique perspective to develop groundbreaking solutions that could change lives.",
        image: "/images/value-labs/problem.png"
    },
    {
        title: "Team Formation",
        subTitle: "Build Your Dream Team",
        content: "Collaborate with fellow students to form a dynamic team. Select co-founders, share your vision, and work together to bring your ideas to life. At Value1 Labs, teamwork and collaboration are at the heart of every successful venture.",
        image: "/images/value-labs/team.png"
    },
    {
        title: "Product Management",
        subTitle: "Transform Your Vision",
        content: "Turn your idea into a tangible product with the support of our expert mentors. From refining your concept to developing prototypes, we provide the tools and guidance you need to bring your innovation to fruition.",
        image: "/images/value-labs/product-mgmt.png"
    },
    {
        title: "Go-to-Market Strategy",
        subTitle: "Launch with Confidence",
        content: "Prepare to make your mark with a strategic go-to-market plan. Our program equips you with the skills to craft compelling marketing strategies and launch your product with the confidence and impact it deserves.",
        image: "/images/value-labs/strategy.png"
    },
]

const ValueLabs = () => {

    const router = useRouter()

    function handleBtn() {
        router.push('/reward-store/value-labs')
    }

    return (
        <main className='max-w-sm md:max-w-full mx-auto w-full flex flex-col items-center justify-center overflow-hidden bg-light_bg'>
            {/* Hero */}
            <section className='flex items-center justify-center bg-secondary_bg w-full h-[500px] overflow-hidden relative text-secondary'>
                <div className='flex items-center justify-center gap-5 max-w-7xl h-full'>
                    <div className='w-1/2 flex flex-col items-start justify-center gap-5'>
                        <h1 className='text-5xl font-semibold leading-tight mb-2'>Welcome to Value1 Labs</h1>
                        <h1 className='text-3xl font-semibold leading-tight mb-5'>Ignite Your Entrepreneurial Spirit</h1>
                        <a href='#apply' className='mt-5 px-5 py-3 text-secondary font-medium bg-primary rounded-xl'>Apply Now!</a>
                    </div>
                    <div className='relative w-1/2 h-full flex items-end justify-center'>
                        <Image src={"/images/stock/man-point-left.png"} alt='' height={800} width={600} />
                        {/* <div className='absolute top-32 left-5 -rotate-12 text-center p-5 rounded-xl bg-dark_bg text-primary w-64'>
                            <h1 className='text-xl font-medium'>Incubation Support!</h1>
                        </div>
                        <div className='absolute top-32 right-5 rotate-12 text-center p-5 rounded-xl bg-dark_bg text-primary w-64'>
                            <h1 className='text-xl font-medium'>Market Support!</h1>
                        </div>
                        <div className='absolute bottom-0 text-center p-5 rounded-xl bg-dark_bg text-primary w-64'>
                            <h1 className='text-xl font-medium'>Financial Support!</h1>
                        </div> */}
                    </div>
                </div>
            </section>
            <section className='max-w-8xl flex flex-col items-center justify-center gap-10 bg-light_bg w-full overflow-hidden relative text-secondary pt-10'>
                <h1 className='text-4xl font-semibold text-secondary'>Are you ready to transform your ideas into reality? </h1>
                <div className='max-w-5xl w-full text-center flex flex-col items-center justify-center gap-5'>
                    <p className='text-xl mb-2'>At Value1 Labs, we believe that every student has the potential to make a difference. Our entrepreneurial program is designed to empower and inspire you to take bold steps towards building your own venture.</p>
                    <p className='text-xl mb-10'>Whether you’re brimming with innovative ideas or just starting to explore the world of entrepreneurship, Value1 Labs is here to support and guide you on your journey.</p>
                </div>
            </section>
            <section className='max-w-8xl flex flex-col items-center justify-center gap-10 bg-light_bg w-full overflow-hidden relative text-secondary py-10'>
                <h1 className='text-4xl font-semibold text-secondary'>What Awaits You at Value1 Labs?</h1>
                <div className='max-w-7xl mx-auto w-full flex flex-wrap items-center justify-center gap-10'>
                    {data.map((item, index) => (
                        <ExplainCard key={index} index={index} image={item.image} title={item.title} subTitle={item.subTitle} content={item.content} />
                    ))}
                </div>
            </section>
            <section className='max-w-8xl flex flex-col items-center justify-center gap-10 bg-light_bg w-full overflow-hidden relative text-secondary py-10'>
                <h1 className='text-4xl font-semibold text-secondary'>Value1&apos;s Unmatched Support</h1>
                <div className='max-w-7xl mx-auto w-full flex items-center justify-center p-3 rounded-3xl'>
                    <div className='flex items-center justify-center gap-5'>
                        <div className='flex flex-col items-center justify-center gap-2 w-96 h-72 group rounded-2xl'>
                            <div className='w-32 flex items-center justify-center'>
                                <Image src={'/images/value-labs/incubation.png'} alt={''} height={200} width={200} className='w-full group-hover:scale-110 smooth' />
                            </div>
                            <div className='flex flex-col items-center justify-center text-center gap-2'>
                                <h1 className='text-secondary font-medium text-lg group-hover:text-solid smooth'>Incubation</h1>
                                <p>Enjoy a nurturing environment that fosters growth and innovation. Our incubation services provide the resources and space you need to thrive.</p>
                            </div>
                        </div>
                        <div className='flex flex-col items-center justify-center gap-2 w-96 h-72 group'>
                            <div className='w-32 flex items-center justify-center'>
                                <Image src={'/images/value-labs/mentor.png'} alt={''} height={200} width={200} className='w-full group-hover:scale-110 smooth' />
                            </div>
                            <div className='flex flex-col items-center justify-center text-center gap-2'>
                                <h1 className='text-secondary font-medium text-lg group-hover:text-solid smooth'>Mentoring</h1>
                                <p>Learn from seasoned entrepreneurs and industry experts who are dedicated to helping you succeed.</p>
                            </div>
                        </div>
                        <div className='flex flex-col items-center justify-center gap-2 w-96 h-72 group'>
                            <div className='w-32 flex items-center justify-center'>
                                <Image src={'/images/value-labs/funding.png'} alt={''} height={200} width={200} className='w-full group-hover:scale-110 smooth' />
                            </div>
                            <div className='flex flex-col items-center justify-center text-center gap-2'>
                                <h1 className='text-secondary font-medium text-lg group-hover:text-solid smooth'>Funding Opportunities</h1>
                                <p>Access potential funding to fuel your venture and take it to new heights.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id='apply' className='max-w-sm md:max-w-7xl w-full h-max flex flex-col items-center justify-center gap-3 p-5 mb-10 bg-dark_bg/10 rounded-3xl'>
                <h1 className='max-w-6xl text-4xl font-semibold text-center'>Join Us and Build your future with Value1 Labs</h1>
                <p className='max-w-5xl text-center'>Embrace the opportunity to turn your ideas into impactful ventures. Value1 Labs is your launchpad for entrepreneurial success, offering inspiration, support, and resources every step of the way.
                    Ready to start your entrepreneurial adventure? Apply now and let Value1 Labs be the catalyst for your success.</p>
                <button onClick={handleBtn} className='bg-primary hover:scale-105 hover:bg-solid text-secondary font-medium px-5 py-3 mt-5 rounded-2xl smooth'>Apply Now!</button>
            </section>
        </main>
    )
}

export default ValueLabs
