"use client";

import React from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import ImageSmCard from "@/components/cards/imageSmCard";

import "swiper/css";

const dataArr = [
  {
    image: "/images/home/uk.jpeg",
    title: "Study in UK",
    href: "/study/uk",
  },
  {
    image: "/images/home/us.jpg",
    title: "Study in USA",
    href: "/study/usa",
  },
  {
    image: "/images/home/aus.jpeg",
    title: "Study in Australia",
    href: "/study/australia",
  },
  {
    image: "/images/home/uk.jpeg",
    title: "Study in UK",
    href: "/study/uk",
  },
  {
    image: "/images/home/us.jpg",
    title: "Study in USA",
    href: "/study/usa",
  },
  {
    image: "/images/home/aus.jpeg",
    title: "Study in Australia",
    href: "/study/australia",
  },
  {
    image: "/images/home/uk.jpeg",
    title: "Study in UK",
    href: "/study/uk",
  },
  {
    image: "/images/home/us.jpg",
    title: "Study in USA",
    href: "/study/usa",
  },
  {
    image: "/images/home/aus.jpeg",
    title: "Study in Australia",
    href: "/study/australia",
  },
];

export default function Destination() {
  // const sliderRef = useRef<any>(null);


  // const handlePrev = useCallback(() => {
  //   if (!sliderRef.current) return;
  //   sliderRef?.current?.swiper.slidePrev();
  // }, []);

  // const handleNext = useCallback(() => {
  //   if (!sliderRef.current) return;
  //   sliderRef?.current?.swiper.slideNext();
  // }, []);

  return (
    <section className="py-28 container  xl:mx-auto px-5 xl:px-12">
      <div className="flex justify-between items-start ">
        <div className=" ">
          <h1 className="font-bold text-5xl mb-4">Discover Your Destination</h1>
          <h2 className=" font-thin text-5xl tracking-wider	">
            across various countries
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <button
            className="bg-primary hover:bg-transparent transition-all hover:text-primary border-2 border-primary   text-white font-bold p-2 rounded-full"
            // onClick={handlePrev}
          >
            <ArrowLeft size={20} />
          </button>

          <button
            className="bg-primary hover:bg-transparent transition-all hover:text-primary border-2 border-primary   text-white font-bold p-2 rounded-full"
            // onClick={handleNext}
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
      <div className="mt-10 w-full lg:w-[100vw] xl:[90vw] ">
        <Swiper
          // ref={sliderRef}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1600: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {dataArr.map((data, index) => (
            <SwiperSlide key={index}>
              <ImageSmCard {...data} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
