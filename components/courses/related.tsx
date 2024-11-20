"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function Related() {
  const [position, setPosition] = useState(0); // State for drag position
  const maxPosition = 100; // Maximum draggable distance

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    const newPosition = Math.max(
      0,
      Math.min(maxPosition, position + e.movementX)
    );
    setPosition(newPosition);
  };

  const handleDrop = () => {
    // Snap to nearest position
    setPosition(position > maxPosition / 2 ? maxPosition : 0);
  };

  const isApplyNow = position > maxPosition / 2;
  return (
    <div className="container xl:mx-auto px-5 xl:px-12 py-10 xl:py-14">
      <div className="w-full py-8">
        <div className="w-full border  border-gray-200 my-8"></div>
      </div>

      <div className=" flex flex-col md:flex-row justify-evenly mt-4 ">
        <div className="w-full  ">
        <div className="flex justify-between items-start ">
        <div className=" ">
          <h1 className="font-bold text-5xl mb-8">Related Courses</h1>
          
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


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-100 rounded-lg p-4 flex flex-col items-start text-start xl:mt-4">
              <div className="relative w-full h-40">
                <Image
                  src="/images/services/uk.jpg"
                  width={300}
                  height={300}
                  alt="Services images"
                  className="w-full h-full rounded-lg object-cover"
                />

                <div className="text-center absolute h-12 w-14 top-2 right-2 bg-white px-1 text-sm rounded-md">
                  <span className="font-bold text-xl">2</span>
                  <span className="font-semibold"> YEAR</span>
                </div>
              </div>

              <h2 className="text-xl font-semibold mt-4">
                Learning to Write as a Professional Author
              </h2>
              <div className="border-t-2 border-dotted border-gray-300 w-full mt-2"></div>

              <div className="flex flex-col sm:flex-row items-center mt-2 w-full">
                <div className="sm:w-3/4 w-full pr-4 sm:border-r border-dotted border-gray-400">
                  <p className="text-gray-500">
                    University of Aberdeen, Scotland, UK
                  </p>
                </div>

                <div className="sm:w-1/4 w-full mt-2 sm:mt-0 sm:pl-4">
                  <Image
                    src="/images/services/uk.jpg"
                    width={300}
                    height={300}
                    alt="Example"
                    className="w-10 h-10 rounded-full shadow-md object-cover"
                  />
                </div>
              </div>

              <div className="border-t-2 border-dotted border-gray-300 w-full mt-2"></div>

              <h2 className="text-xl font-semibold mt-3">$11,400 - $38,000.</h2>
              <p className="mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>

              <div className="border-t-2 border-dotted border-gray-300 w-full mt-2"></div>

              <div className="w-full sm:w-56 h-12 mt-4 bg-white rounded-full flex items-center justify-between p-2 relative">
                <span className="absolute left-4 text-sm font-bold text-primary">
                  VIEW DETAILS
                </span>

                <span className="absolute right-4 text-sm font-bold text-primary">
                  APPLY NOW
                </span>

                <div
                  draggable
                  onDrag={handleDrag}
                  onDragEnd={handleDrop}
                  style={{ transform: `translateX(${position}px)` }}
                  className="h-12 w-28
       bg-primary rounded-full shadow-lg flex items-center justify-center cursor-pointer"
                >
                  <span className="text-white font-bold text-sm">
                    {isApplyNow ? "APPLY NOW" : "VIEW DETAILS"}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg p-4 flex flex-col items-start text-start xl:mt-4">
              <div className="relative w-full h-40">
                <Image
                  src="/images/services/uk.jpg"
                  width={300}
                  height={300}
                  alt="Services images"
                  className="w-full h-full rounded-lg object-cover"
                />

                <div className="text-center absolute h-12 w-14 top-2 right-2 bg-white px-1 text-sm rounded-md">
                  <span className="font-bold text-xl">2</span>
                  <span className="font-semibold"> YEAR</span>
                </div>
              </div>

              <h2 className="text-xl font-semibold mt-4">
                Learning to Write as a Professional Author
              </h2>
              <div className="border-t-2 border-dotted border-gray-300 w-full mt-2"></div>

              <div className="flex flex-col sm:flex-row items-center mt-2 w-full">
                <div className="sm:w-3/4 w-full pr-4 sm:border-r border-dotted border-gray-400">
                  <p className="text-gray-500">
                    University of Aberdeen, Scotland, UK
                  </p>
                </div>

                <div className="sm:w-1/4 w-full mt-2 sm:mt-0 sm:pl-4">
                  <Image
                    src="/images/services/uk.jpg"
                    width={300}
                    height={300}
                    alt="Example"
                    className="w-10 h-10 rounded-full shadow-md object-cover"
                  />
                </div>
              </div>

              <div className="border-t-2 border-dotted border-gray-300 w-full mt-2"></div>

              <h2 className="text-xl font-semibold mt-3">$11,400 - $38,000.</h2>
              <p className="mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>

              <div className="border-t-2 border-dotted border-gray-300 w-full mt-2"></div>

              <div className="w-full sm:w-56 h-12 mt-4 bg-white rounded-full flex items-center justify-between p-2 relative">
                <span className="absolute left-4 text-sm font-bold text-primary">
                  VIEW DETAILS
                </span>

                <span className="absolute right-4 text-sm font-bold text-primary">
                  APPLY NOW
                </span>

                <div
                  draggable
                  onDrag={handleDrag}
                  onDragEnd={handleDrop}
                  style={{ transform: `translateX(${position}px)` }}
                  className="h-12 w-28
       bg-primary rounded-full shadow-lg flex items-center justify-center cursor-pointer"
                >
                  <span className="text-white font-bold text-sm">
                    {isApplyNow ? "APPLY NOW" : "VIEW DETAILS"}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg p-4 flex flex-col items-start text-start xl:mt-4">
              <div className="relative w-full h-40">
                <Image
                  src="/images/services/uk.jpg"
                  width={300}
                  height={300}
                  alt="Services images"
                  className="w-full h-full rounded-lg object-cover"
                />

                <div className="text-center absolute h-12 w-14 top-2 right-2 bg-white px-1 text-sm rounded-md">
                  <span className="font-bold text-xl">2</span>
                  <span className="font-semibold"> YEAR</span>
                </div>
              </div>

              <h2 className="text-xl font-semibold mt-4">
                Learning to Write as a Professional Author
              </h2>
              <div className="border-t-2 border-dotted border-gray-300 w-full mt-2"></div>

              <div className="flex flex-col sm:flex-row items-center mt-2 w-full">
                <div className="sm:w-3/4 w-full pr-4 sm:border-r border-dotted border-gray-400">
                  <p className="text-gray-500">
                    University of Aberdeen, Scotland, UK
                  </p>
                </div>

                <div className="sm:w-1/4 w-full mt-2 sm:mt-0 sm:pl-4">
                  <Image
                    src="/images/services/uk.jpg"
                    width={300}
                    height={300}
                    alt="Example"
                    className="w-10 h-10 rounded-full shadow-md object-cover"
                  />
                </div>
              </div>

              <div className="border-t-2 border-dotted border-gray-300 w-full mt-2"></div>

              <h2 className="text-xl font-semibold mt-3">$11,400 - $38,000.</h2>
              <p className="mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>

              <div className="border-t-2 border-dotted border-gray-300 w-full mt-2"></div>

              <div className="w-full sm:w-56 h-12 mt-4 bg-white rounded-full flex items-center justify-between p-2 relative">
                <span className="absolute left-4 text-sm font-bold text-primary">
                  VIEW DETAILS
                </span>

                <span className="absolute right-4 text-sm font-bold text-primary">
                  APPLY NOW
                </span>

                <div
                  draggable
                  onDrag={handleDrag}
                  onDragEnd={handleDrop}
                  style={{ transform: `translateX(${position}px)` }}
                  className="h-12 w-28
       bg-primary rounded-full shadow-lg flex items-center justify-center cursor-pointer"
                >
                  <span className="text-white font-bold text-sm">
                    {isApplyNow ? "APPLY NOW" : "VIEW DETAILS"}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg p-4 flex flex-col items-start text-start xl:mt-4">
              <div className="relative w-full h-40">
                <Image
                  src="/images/services/uk.jpg"
                  width={300}
                  height={300}
                  alt="Services images"
                  className="w-full h-full rounded-lg object-cover"
                />

                <div className="text-center absolute h-12 w-14 top-2 right-2 bg-white px-1 text-sm rounded-md">
                  <span className="font-bold text-xl">2</span>
                  <span className="font-semibold"> YEAR</span>
                </div>
              </div>

              <h2 className="text-xl font-semibold mt-4">
                Learning to Write as a Professional Author
              </h2>
              <div className="border-t-2 border-dotted border-gray-300 w-full mt-2"></div>

              <div className="flex flex-col sm:flex-row items-center mt-2 w-full">
                <div className="sm:w-3/4 w-full pr-4 sm:border-r border-dotted border-gray-400">
                  <p className="text-gray-500">
                    University of Aberdeen, Scotland, UK
                  </p>
                </div>

                <div className="sm:w-1/4 w-full mt-2 sm:mt-0 sm:pl-4">
                  <Image
                    src="/images/services/uk.jpg"
                    width={300}
                    height={300}
                    alt="Example"
                    className="w-10 h-10 rounded-full shadow-md object-cover"
                  />
                </div>
              </div>

              <div className="border-t-2 border-dotted border-gray-300 w-full mt-2"></div>

              <h2 className="text-xl font-semibold mt-3">$11,400 - $38,000.</h2>
              <p className="mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>

              <div className="border-t-2 border-dotted border-gray-300 w-full mt-2"></div>

              <div className="w-full sm:w-56 h-12 mt-4 bg-white rounded-full flex items-center justify-between p-2 relative">
                <span className="absolute left-4 text-sm font-bold text-primary">
                  VIEW DETAILS
                </span>

                <span className="absolute right-4 text-sm font-bold text-primary">
                  APPLY NOW
                </span>

                <div
                  draggable
                  onDrag={handleDrag}
                  onDragEnd={handleDrop}
                  style={{ transform: `translateX(${position}px)` }}
                  className="h-12 w-28
       bg-primary rounded-full shadow-lg flex items-center justify-center cursor-pointer"
                >
                  <span className="text-white font-bold text-sm">
                    {isApplyNow ? "APPLY NOW" : "VIEW DETAILS"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
