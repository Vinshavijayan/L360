import React from "react";
import { ChevronDown, ArrowDown, Search } from "lucide-react";
import Image from "next/image";

export default function LandingSec() {
  return (
    <section
      className="bg-cover bg-right bg-no-repeat "
      style={{
        backgroundImage: "url('/images/home/landing.webp')",
      }}
    >
      <div className="container  xl:mx-auto px-5 xl:px-12  ">
        <div className="h-full  flex justify-evenly items-center">
          <div className="  gap-3 h-full flex flex-col justify-center relative">
            <div className="text-4xl lg:text-[60px] font-extrabold text-center lg:leading-[75px] w-full  text-primary-dark">
              <h1>
                Your Gateway
                <br />
                to
                <span className="text-primary"> Global Education</span>
              </h1>
            </div>
            <h2 className=" text-center  text-[28px] font-bold leading-[5px] pt-3  pb-5 ">
              Discover, Learn, Succeed
            </h2>
            <p className=" text-center  text-[28px] font-thin leading-[5px] py-2 ">
              Wherever You Are
            </p>
            <div className="w-full bg-white  shadow-xl rounded-xl p-3 flex my-8">
              <input
                type="text"
                placeholder="Search by Course, University, or Destination"
                className="w-full px-3 py-2"
              />
              <div className=" border-l px-6 py-2 flex items-center">
                <span className=" font-[500] ">USA</span>
                <ChevronDown className="ml-3 text-gray-300" size={20} />
              </div>
              <button className="bg-primary text-white px-6 py-2 rounded-lg">
                <Search size={20} />
              </button>
            </div>
            <div className=" flex justify-center items-center gap-5">
              <button className="bg-primary hover:bg-transparent transition-all hover:text-primary border-2 border-primary   text-white font-bold px-6 py-4 rounded-full">
                Explore Opportunities{" "}
              </button>
              <button className=" bg-transparent hover:bg-primary transition-all hover:text-white  text-primary border-2 border-primary font-bold px-6 py-4 rounded-full">
                Get Personalized Advice
              </button>
            </div>
          </div>
          <div className="mt-36">
            <Image
              src="/images/home/landing-side.webp"
              alt="logo"
              width={500}
              height={500}
              className=" h-96 w-96 md:h-[85vh] md:w-[85vh]   object-contain hidden xl:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
