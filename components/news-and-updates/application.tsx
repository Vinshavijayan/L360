import Image from "next/image";
import React from "react";
import {  CircleArrowRight, Search } from "lucide-react";

export default function Application() {
  return (
    <section className="  container xl:mx-auto px-5 xl:px-12  xl:py-8 py-4">
      <div className=" flex flex-col md:flex-row justify-evenly mt-20">
        <div className="w-full md:w-[60%] ">
          <h1 className=" text-2xl md:text-4xl font-bold leading-loose ">
            Application Arsenal: Your Essential Toolkit Successful
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
          <div className="py-10">
            <Image
              src="/images/services/uk.jpg"
              width={500}
              height={500}
              alt="Services images"
              className="h-96 w-96 md:h-[50vh] md:w-[128vh] rounded-[50px] object-cover xl:block"
            />
          </div>
          <p className=" leading-relaxed text-lg ">
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
          <p className=" leading-relaxed text-lg py-8">
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
          <p className=" leading-relaxed text-lg ">
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

        <div className="w-full md:w-[26%]">
          <div className="rounded-3xl p-4 bg-gray-100">
            <div className="grid grid-cols-1 ">
              <h1 className="px-4 xl:mt-4 text-3xl font-bold">Filter</h1>
              <div className="px-4 py-6">
                <div className="w-full bg-white  shadow-xl rounded-xl p-2 flex ">
                  <input
                    type="text"
                    placeholder="Search "
                    className="w-full px-3 "
                  />
                  <div className=" border-l px-2 flex items-center"></div>
                  <button className="bg-primary text-white px-2 py-2 rounded-lg">
                    <Search size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="py-10">
            <div className="rounded-3xl p-4 bg-gray-100 ">
              <div className="grid grid-cols-1 gap-6 ">
                <h1 className="px-4 xl:mt-4 text-3xl font-bold">Recent Post</h1>
                <div className="px-6">
                  <div className="flex flex-row py-2">
                    <div className="w-1/3 flex-shrink-0">
                      <Image
                        src="/images/services/uk.jpg"
                        width={100}
                        height={100}
                        alt="Services images"
                        className="rounded-[10px] object-cover h-16 w-16"
                      />
                    </div>
                    <div className="flex flex-col justify-center w-2/3">
                      <p className="text-gray-400 mb-2 text-sm">
                        March 20, 2024
                      </p>
                      <p className="text-sm mb-2 font-bold">
                        This is a short description of the card.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row py-2">
                    <div className="w-1/3 flex-shrink-0">
                      <Image
                        src="/images/services/uk.jpg"
                        width={100}
                        height={100}
                        alt="Services images"
                        className="rounded-[10px] object-cover h-16 w-16"
                      />
                    </div>
                    <div className="flex flex-col justify-center w-2/3">
                      <p className="text-gray-400 mb-2 text-sm">
                        March 20, 2024
                      </p>
                      <p className="text-sm mb-2 font-bold">
                        This is a short description of the card.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row py-2">
                    <div className="w-1/3 flex-shrink-0">
                      <Image
                        src="/images/services/uk.jpg"
                        width={100}
                        height={100}
                        alt="Services images"
                        className="rounded-[10px] object-cover h-16 w-16"
                      />
                    </div>
                    <div className="flex flex-col justify-center w-2/3">
                      <p className="text-gray-400 mb-2 text-sm">
                        March 20, 2024
                      </p>
                      <p className="text-sm mb-2 font-bold">
                        This is a short description of the card.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row py-2">
                    <div className="w-1/3 flex-shrink-0">
                      <Image
                        src="/images/services/uk.jpg"
                        width={100}
                        height={100}
                        alt="Services images"
                        className="rounded-[10px] object-cover h-16 w-16"
                      />
                    </div>
                    <div className="flex flex-col justify-center w-2/3">
                      <p className="text-gray-400 mb-2 text-sm">
                        March 20, 2024
                      </p>
                      <p className="text-sm mb-2 font-bold">
                        This is a short description of the card.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl p-4 bg-gray-100 ">
            <div className="grid grid-cols-1 gap-6">
              <h1 className="px-3 xl:mt-4 text-3xl font-bold">Categories</h1>
              <div className="group hover:bg-primary hover:text-white transition-colors text-start xl:px-5 px-3 py-2 h-14 rounded-[50px] bg-white text-black cursor-pointer ">
                <div className="flex items-center justify-between">
                  <h1 className="text-md xl:text-md font-bold leading-loose">
                    Blog
                  </h1>
                  <div className="text-primary group-hover:text-white transition-colors">
                    <CircleArrowRight size={34} />
                  </div>
                </div>
              </div>
              <div className="group hover:bg-primary hover:text-white transition-colors text-start xl:px-5 px-3 py-2 h-14 rounded-[50px] bg-white text-black cursor-pointer">
                <div className="flex items-center justify-between">
                  <h1 className="text-md xl:text-md font-bold leading-loose">
                    Consulting
                  </h1>
                  <div className="text-primary group-hover:text-white transition-colors">
                    <CircleArrowRight size={34} />
                  </div>
                </div>
              </div>
              <div className="group hover:bg-primary hover:text-white transition-colors text-start xl:px-5 px-3 py-2 h-14 rounded-[50px] bg-white text-black cursor-pointer">
                <div className="flex items-center justify-between">
                  <h1 className="text-md xl:text-md font-bold leading-loose">
                    Student
                  </h1>
                  <div className="text-primary group-hover:text-white transition-colors">
                    <CircleArrowRight size={34} />
                  </div>
                </div>
              </div>
              <div className="group hover:bg-primary hover:text-white transition-colors text-start xl:px-5 px-3 py-2 h-14 rounded-[50px] bg-white text-black cursor-pointer">
                <div className="flex items-center justify-between">
                  <h1 className="text-md xl:text-md font-bold leading-loose">
                    Visa quotas
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
