import Image from "next/image";
import React from "react";
import { CircleArrowRight } from "lucide-react";

export default function Application() {
  return (
    <section className="  container xl:mx-auto px-5 xl:px-12  xl:py-8 py-4">
      <div className=" flex flex-col md:flex-row justify-evenly mt-14 ">
        <div className="w-full md:w-[26%] ">
          <div className="w-full ">
            <div className="rounded-3xl p-4 bg-gray-100 ">
              <div className="grid grid-cols-1 gap-6">
                <div className="group hover:bg-primary hover:text-white transition-colors text-start xl:px-5 px-3 py-2 h-14 rounded-[50px] bg-white text-black cursor-pointer xl:mt-3">
                  <div className="flex items-center justify-between">
                    <h1 className="text-md xl:text-md font-bold leading-loose">
                      Application Assistance
                    </h1>
                    <div className="text-primary group-hover:text-white transition-colors">
                      <CircleArrowRight size={34} />
                    </div>
                  </div>
                </div>
                <div className="group hover:bg-primary hover:text-white transition-colors text-start xl:px-5 px-3 py-2 h-14 rounded-[50px] bg-white text-black cursor-pointer">
                  <div className="flex items-center justify-between">
                    <h1 className="text-md xl:text-md font-bold leading-loose">
                      Application Assistance
                    </h1>
                    <div className="text-primary group-hover:text-white transition-colors">
                      <CircleArrowRight size={34} />
                    </div>
                  </div>
                </div>
                <div className="group hover:bg-primary hover:text-white transition-colors text-start xl:px-5 px-3 py-2 h-14 rounded-[50px] bg-white text-black cursor-pointer">
                  <div className="flex items-center justify-between">
                    <h1 className="text-md xl:text-md font-bold leading-loose">
                      Visa and Immigration
                    </h1>
                    <div className="text-primary group-hover:text-white transition-colors">
                      <CircleArrowRight size={34} />
                    </div>
                  </div>
                </div>
                <div className="group hover:bg-primary hover:text-white transition-colors text-start xl:px-5 px-3 py-2 h-14 rounded-[50px] bg-white text-black cursor-pointer">
                  <div className="flex items-center justify-between">
                    <h1 className="text-md xl:text-md font-bold leading-loose">
                      Career Guidance
                    </h1>
                    <div className="text-primary group-hover:text-white transition-colors">
                      <CircleArrowRight size={34} />
                    </div>
                  </div>
                </div>
                <div className="group hover:bg-primary hover:text-white transition-colors text-start xl:px-5 px-3 py-2 h-14 rounded-[50px] bg-white text-black cursor-pointer">
                  <div className="flex items-center justify-between">
                    <h1 className="text-md xl:text-md font-bold leading-loose">
                      Accommodation
                    </h1>
                    <div className="text-primary group-hover:text-white transition-colors">
                      <CircleArrowRight size={34} />
                    </div>
                  </div>
                </div>
                <div className="group hover:bg-primary hover:text-white transition-colors text-start xl:px-5 px-3 py-2 h-14 rounded-[50px] bg-white text-black cursor-pointer">
                  <div className="flex items-center justify-between">
                    <h1 className="text-md xl:text-md font-bold leading-loose">
                      Resume Writing
                    </h1>
                    <div className="text-primary group-hover:text-white transition-colors">
                      <CircleArrowRight size={34} />
                    </div>
                  </div>
                </div>
                <div className="group hover:bg-primary hover:text-white transition-colors text-start xl:px-5 px-3 py-2 h-14 rounded-[50px] bg-white text-black cursor-pointer">
                  <div className="flex items-center justify-between">
                    <h1 className="text-md xl:text-md font-bold leading-loose">
                      Interview Coaching
                    </h1>
                    <div className="text-primary group-hover:text-white transition-colors">
                      <CircleArrowRight size={34} />
                    </div>
                  </div>
                </div>
                <div className="group hover:bg-primary hover:text-white transition-colors text-start xl:px-5 px-3 py-2 h-14 rounded-[50px] bg-white text-black cursor-pointer">
                  <div className="flex items-center justify-between">
                    <h1 className="text-md xl:text-md font-bold leading-loose">
                      Job placement assistance
                    </h1>
                    <div className="text-primary group-hover:text-white transition-colors">
                      <CircleArrowRight size={34} />
                    </div>
                  </div>
                </div>
                <div className="group hover:bg-primary hover:text-white transition-colors text-start xl:px-5 px-3 py-2 h-14 rounded-[50px] bg-white text-black cursor-pointer">
                  <div className="flex items-center justify-between">
                    <h1 className="text-md xl:text-md font-bold leading-loose">
                      Resume Writing
                    </h1>
                    <div className="text-primary group-hover:text-white transition-colors">
                      <CircleArrowRight size={34} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl p-8 bg-gray-100 my-28">
              <div className="grid grid-cols-1 gap-6 ">
                <div className="hover:text-white h-14 rounded-[50px] bg-white hover:bg-primary text-primary bg-gray-100 cursor-pointer flex items-center justify-center">
                  <h1 className="text-md xl:text-md font-bold leading-loose">
                    TRACK YOUR APPLICATION
                  </h1>
                </div>
                <div className="hover:text-white h-14 rounded-[50px] bg-white hover:bg-primary text-primary bg-gray-100 cursor-pointer flex items-center justify-center">
                  <h1 className="text-md xl:text-md font-bold leading-loose">
                    LIVE CHAT WITH EXPERTS
                  </h1>
                </div>
                <div className="hover:text-white h-14 rounded-[50px] bg-white hover:bg-primary text-primary bg-gray-100 cursor-pointer flex items-center justify-center">
                  <h1 className="text-md xl:text-md font-bold leading-loose">
                    PARENTS SUPPORT
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[60%] ">
          <h1 className=" text-2xl md:text-5xl font-bold leading-loose ">
            About Application Assistance
          </h1>
          <p className=" leading-relaxed text-lg py-10">
            freestar freestar freestar freestar What is Lorem Ipsum? Lorem Ipsum
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.
          </p>
          <p className=" leading-relaxed text-lg">
            freestar freestar freestar freestar What is Lorem Ipsum? Lorem Ipsum
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.
          </p>
          <div className="py-12">
            <Image
              src="/images/services/uk.jpg"
              width={500}
              height={500}
              alt="Services images"
              className="h-96 w-96 md:h-[50vh] md:w-[128vh] rounded-[50px] object-cover xl:block"
            />
          </div>
          <p className=" leading-relaxed text-lg">
            freestar freestar freestar freestar What is Lorem Ipsum? Lorem Ipsum
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.
          </p>
        </div>
      </div>

    </section>
  );
}
