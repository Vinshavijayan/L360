import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function LandingSec() {
  return (
    <section
      className="bg-cover bg-right bg-no-repeat py-12 xl:py-36"
      style={{
        backgroundImage: "url('/images/home/landing.webp')",
      }}
    >
      
      <div className="container xl:mx-auto px-5 xl:px-12 ">
      <div className="flex justify-center items-center ">
        <div className="">
        <Image
          src="/images/services/uk.jpg"
          width={500}
          height={500}
          alt="Services images"
          className="h-96 w-96 md:h-[50vh] md:w-[138vh] rounded-[50px] object-cover xl:block"
        />
        </div>
      
      </div>
      </div>
     
    </section>
  );
}
