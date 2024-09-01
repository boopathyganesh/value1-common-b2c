'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './testimonial-slider.css'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

interface SliderProp {
    testimonials: {
        title: string;
        name: string;
        content: string;
    }[];
}

export default function TestimonialSlider({ testimonials }: SliderProp) {
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            speed={5000}
            autoplay={{
                delay: 0,
                disableOnInteraction: true,
            }}
            pagination={{
                clickable: true
            }}
            loop={true}
            breakpoints={{
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
            }}

            modules={[Autoplay, Pagination, Navigation]}
        >
            {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index} className='px-4'>
                    <div className="flex items-center justify-center">
                        <blockquote className="group rounded-3xl border-2 border-gold-500 bg-gold-100 py-4 px-3 shadow-sm md:p-8 w-[450px] h-[350px] flex flex-col justify-center">
                            <div className="flex flex-row items-center justify-center">
                                <div className='flex flex-col-reverse items-center justify-between'>
                                    <div className="flex justify-center gap-1 group-hover:animate-ping text-gold-500 mt-2">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="text-sm font-normal text-black-800 ">{testimonial.title}</p>
                                    <p className="mt-0.5 text-xl font-medium text-black-800 ">{testimonial.name}</p>
                                </div>
                            </div>
                            <p className="mt-6 text-black-700 text-center ">{testimonial.content}</p>
                        </blockquote>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}