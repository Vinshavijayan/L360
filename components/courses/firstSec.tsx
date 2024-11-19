import Link from "next/link";
import React from "react";
import { ChevronDown, ArrowDown, Search } from "lucide-react";
import Image from "next/image";

export default function FirstSec() {
  return (
    <section
      className="bg-cover bg-right bg-no-repeat py-12"
      style={{
        backgroundImage: "url('/images/home/landing.webp')",
      }}
    >
      <div className="container xl:mx-auto px-5 py-12 xl:px-12">
        <div className="flex justify-center items-center flex-col">
          <div>
            <Image
              src="/images/services/uk.jpg"
              width={500}
              height={500}
              alt="Services images"
              className="h-96 w-96 md:h-[50vh] md:w-[138vh] rounded-[50px] object-cover xl:block"
            />
          </div>

          <h1 className="text-center text-4xl font-bold xl:px-48 py-16">
            Courses to develop necessary skills for real-world business
            situations
          </h1>

          <div className="flex w-full gap-2 p-4">
            <div className="flex-1 bg-gray-100 h-20 flex items-center justify-center rounded-tl-[20px] rounded-bl-[20px] text-white p-4">
              <p className="text-2xl text-gray-500 font-bold">
                University of Aberdeen
              </p>
            </div>

            <div className="flex-1 bg-gray-100 h-20 flex items-center justify-center rounded-tr-[20px] rounded-br-[20px] text-white p-4">
              <Image
                src="/images/services/uk.jpg"
                width={300}
                height={300}
                alt="Services images"
                className="w-10 h-10 rounded-full mr-4 shadow-md"
              />
              <p className="text-2xl text-gray-500 font-bold">Scotland, UK</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
