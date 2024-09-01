import { FeatureUniv, topUniversities } from '@/context/ies'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"


import React from 'react'
import Image from 'next/image';
import IESUnivCard from '@/components/ui/IESUnivCard';

const intake = [
    {
        intake: "January",
        admission: "June-September"
    },
    {
        intake: "September",
        admission: "April-June"
    },
]


const Universities = ({ params }: { params: { slug: string } }) => {
    function getLastWord(input: string): string {
        const words = input.trim().split('-');
        const lastWord = words.pop() || '';
        const capitalizedLastWord = lastWord.charAt(0).toUpperCase() + lastWord.slice(1).toLowerCase();
        return capitalizedLastWord;
    }
    //Utility Fn
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

    const country = getLastWord(params.slug)

    return (
        <main className='max-w-sm md:max-w-full mx-auto w-full flex flex-col items-center justify-center overflow-hidden py-10 gap-5 bg-light_bg text-secondary'>
            <div className='max-w-7xl pl-5 pb-5 w-full flex items-center justify-start'>
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">IES</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/components">Countries</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>{country}</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            {/* Hero */}
            <section className='relative max-w-sm md:max-w-7xl w-full h-[450px] flex items-center justify-center rounded-2xl bg-light_bg/10 overflow-hidden bg-[url("/images/ies/countries/uk.jpg")] bg-center bg-cover'>
                {/* <Image src={'/images/ies/countries/uk.jpg'} alt={''} height={1000} width={1000} className='w-full' /> */}
            </section>
            <section className='max-w-sm md:max-w-7xl w-full h-max flex items-center justify-center rounded-2xl bg-dark_bg/5 overflow-hidden p-5'>
                <div className='w-2/3 flex flex-col items-center justify-center'>
                    <div className='w-full flex items-center justify-start gap-5'>
                        <h1 className='text-2xl font-medium flex items-center justify-start gap-3'><span>FG</span>Study in {country}</h1>
                        <span className='text-sm font-medium bg-yellow-200 text-secondary px-3 py-1 text-center rounded-3xl'>Hot Destination</span>
                    </div>
                    <div className='text-base text-secondary py-5'>
                        <ul className='list-none list-inside flex flex-col items-center justify-start gap-4 '>
                            {listMaker("University College Dublin is ranked in the top 1% of higher education institutions in the world. Dublin has also been named Conde Nast’s friendliest city in Europe. With facts like these it’s easy to see why people from around the globe come to study in Ireland. Beyond the bustling capital lies a land of remarkable history and breathtaking rugged landscapes. The culture is also renowned for its joviality and entertainment, known as ‘craic’ in Irish. With a lively cultural scene and warm hospitality, Ireland offers a home away from home for those seeking to study abroad. As well as that it consistently ranks among the top 20 countries in the world for quality of life, peace, and human development.Studying in Ireland for international students offers a diverse range of academic programs across colleges and universities throughout the country, making it the ideal destination to carve out your academic and personal future.")
                                .map((sentence, index) => (
                                    <li key={index}>{sentence}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className='w-1/3 flex items-center justify-center'>
                    <div className='flex flex-col items-end justify-center gap-5 w-full'>
                        <div className='bg-solid/30 flex items-center justify-start gap-4 px-4 py-2 w-64 rounded-xl'>
                            <span className='w-8 h-8'>
                                <Image src={'/images/ies/icons/calender.svg'} alt={''} height={100} width={100} />
                            </span>
                            <div className='flex flex-col items-start justify-center'>
                                <h1 className='text-secondary font-medium'>{"Jan/Sep"}</h1>
                                <p className='text-secondary/50 font-normal'>Intakes</p>
                            </div>
                        </div>
                        <div className='bg-solid/30 flex items-center justify-start gap-4 px-4 py-2 w-64 rounded-xl'>
                            <span className='w-8 h-8'>
                                <Image src={'/images/ies/icons/calender.svg'} alt={''} height={100} width={100} />
                            </span>
                            <div className='flex flex-col items-start justify-center'>
                                <h1 className='text-secondary font-medium'>{"5"}+</h1>
                                <p className='text-secondary/50 font-normal'>Partner Universities</p>
                            </div>
                        </div>
                        <div className='bg-solid/30 flex items-center justify-start gap-4 px-4 py-2 w-64 rounded-xl'>
                            <span className='w-8 h-8'>
                                <Image src={'/images/ies/icons/calender.svg'} alt={''} height={100} width={100} />
                            </span>
                            <div className='flex flex-col items-start justify-center'>
                                <h1 className='text-secondary font-medium'>{"€3,000-€30,000"}</h1>
                                <p className='text-secondary/50 font-normal'>Annual Tuition Fees</p>
                            </div>
                        </div>
                        <div className='bg-solid/30 flex items-center justify-start gap-4 px-4 py-2 w-64 rounded-xl'>
                            <span className='w-8 h-8'>
                                <Image src={'/images/ies/icons/calender.svg'} alt={''} height={100} width={100} />
                            </span>
                            <div className='flex flex-col items-start justify-center'>
                                <h1 className='text-secondary font-medium'>{"32,000"}</h1>
                                <p className='text-secondary/50 font-normal'>International Students</p>
                            </div>
                        </div>
                        <div className='bg-solid/30 flex items-center justify-start gap-4 px-4 py-2 w-64 rounded-xl'>
                            <span className='w-8 h-8'>
                                <Image src={'/images/ies/icons/calender.svg'} alt={''} height={100} width={100} />
                            </span>
                            <div className='flex flex-col items-start justify-center'>
                                <h1 className='text-secondary font-medium'>{"€2,270.56"}</h1>
                                <p className='text-secondary/50 font-normal'>Monthly Living Costs</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Intake */}
            <section className='max-w-sm md:max-w-7xl w-full h-max flex items-start justify-center gap-5'>
                <div className='w-1/3 h-full flex flex-col items-start justify-center rounded-2xl bg-dark_bg/5 text-secondary overflow-hidden p-5 gap-3'>
                    <h1 className='text-xl font-medium text-secondary'>Intakes in {country}</h1>
                    <div className='flex flex-col items-center justify-center gap-5'>
                        <p>There are two main intakes in Irish universities and colleges. The main one takes place in autumn for the start of the traditional academic year, while the other happens in January.</p>
                        <div className='flex items-center justify-start w-full'>
                            <Table className='text-center'>
                                <TableHeader>
                                    <TableRow >
                                        <TableHead className='text-secondary text-lg border border-secondary text-center'>Intake</TableHead>
                                        <TableHead className='text-secondary text-lg border border-secondary text-center'>Admissions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody className='text-secondary'>
                                    {intake.map((item, index) => (
                                        <TableRow key={index}>
                                            <TableCell className='border border-secondary'>{item.intake}</TableCell>
                                            <TableCell className='border border-secondary'>{item.admission}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>

                        </div>
                    </div>
                </div>
                <div className='w-2/3 h-full flex flex-col items-start justify-center rounded-2xl bg-dark_bg/5 overflow-hidden p-5 gap-5'>
                    <h1 className='text-xl font-medium text-secondary'>Cost to study in {country}</h1>
                    <p>The costs of studying in Ireland can vary depending on both which institution/course you are studying and where you are living, with living costs higher if you are based in Dublin than in other cities and towns.</p>
                    <ul className='list-inside list-disc px-5 text-secondary'>
                        <li>Visa fees - The cost of an Irish student visa (Stamp 2 permission) is typically €300.</li>
                        <li>Course fees - Students outside of the EU, EEA, Swiss State or UK have to pay the cost of their education in Ireland in full. These can vary depending on the course, but the cost of an undergraduate course in Ireland can range between €9,850 and €55,000.</li>
                        <li>Living costs - On average, the cost of living for a student in Ireland ranges from €7,000 to €12,000 per year, depending on which university you go to.</li>
                    </ul>
                </div>
            </section>
            <section className='max-w-sm md:max-w-7xl w-full h-max flex flex-col items-start justify-center gap-5'>
                <h1 className='text-xl font-medium text-secondary'>Top Universities in {country}</h1>
                <div className='flex flex-wrap flex-col md:flex-row items-center justify-center gap-5'>
                    <Carousel>
                        <CarouselContent className='max-w-7xl flex items-center justify-between px-4'>
                            {FeatureUniv.map((card, index) => (
                                <CarouselItem key={index} className='basis-auto'>
                                    <IESUnivCard key={index} name={card.name} country={card.country} image={card.image} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className='bg-gold-300 text-black-800' />
                        <CarouselNext className='bg-gold-300 text-black-800' />
                    </Carousel>
                </div>

            </section>

        </main >
    )
}

export default Universities
