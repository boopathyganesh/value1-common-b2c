'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './testimonial-slider.css'
import VideoBlock from '@/components/VideoBlock';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

interface SliderProp {
    videos: {
        description: string;
        embedId: string;
    }[];
}

export default function VideoSlider({ videos }: SliderProp) {
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            simulateTouch
            slidesPerView={'auto'}
            speed={1000}
            // autoplay={{
            //     delay: 0,
            //     disableOnInteraction: true,
            //     reverseDirection: true
            // }}
            navigation={true}
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
            {videos.map((video, index) => (
                <SwiperSlide key={index} className='px-4'>
                    <div className="flex items-center justify-center">
                        <VideoBlock embedId={video.embedId} description={video.description} className="w-96 h-64" />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}