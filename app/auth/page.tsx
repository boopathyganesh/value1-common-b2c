"use client"
import Image from 'next/image';
import React from 'react'
import { LoginForm } from '@/components/Forms/RegisterForm';

const Brand = process.env.NEXT_PUBLIC_BRAND_LOGO || "/images/logo-big.png"

const LoginPage = () => {
    return (
        <section className='flex items-center justify-center h-full w-full bg-transparent'>
            <div className="lg:max-w-6xl mx-auto m-0 md:m-10 bg-light_bg text-secondary shadow sm:rounded-3xl flex justify-center flex-1 overflow-hidden">
                <div className="lg:w-1/2 xl:w-7/12 p-6 sm:p-12 h-[600px] flex flex-col items-center justify-start">
                    <div className='max-w-48 h-36 flex items-center justify-center'>
                        <Image src={Brand} alt={''} className='w-full h-auto' height={500} width={500} />
                    </div>
                    <div className="mt-5 flex flex-col items-center">
                        <div className="w-full flex-1 mt-2">
                            <div className='flex flex-col items-center justify-center'>
                                <h1 className="text-2xl xl:text-3xl font-bold">
                                    Let&apos;s Get started
                                </h1>
                                <div className='flex flex-col items-center justify-center py-5'>
                                    <p className='font-bold text-xl mb-4'>Enter your mobile number to Login or SignUp</p>
                                    <LoginForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 bg-dark_bg/5 text-center hidden lg:flex" >
                    <div className="m-12 xl:m-16 w-full bg-cover bg-center bg-no-repeat flex items-center justify-center">
                        <Image src={'/images/the-common-man.png'} alt={''} height={500} width={500} className='w-[600px] filter ' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoginPage;