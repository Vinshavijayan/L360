"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, ArrowLeft, Search } from "lucide-react";

export default function Cards() {
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 py-4">
        <button className="min-w-[200px] bg-primary hover:bg-transparent transition-all hover:text-primary border-2 border-primary text-white font-bold px-6 py-2 rounded-full">
          Business
        </button>
        <button className="min-w-[200px] bg-transparent hover:bg-primary transition-all hover:text-white text-primary border-2 border-primary font-bold px-6 py-2 rounded-full">
          Engineering
        </button>
        <button className="min-w-[200px] bg-transparent hover:bg-primary transition-all hover:text-white text-primary border-2 border-primary font-bold px-6 py-2 rounded-full">
          Computer Science
        </button>
        <button className="min-w-[200px] bg-transparent hover:bg-primary transition-all hover:text-white text-primary border-2 border-primary font-bold px-6 py-2 rounded-full">
          Arts & Humanities
        </button>
        <button className="min-w-[200px] bg-transparent hover:bg-primary transition-all hover:text-white text-primary border-2 border-primary font-bold px-6 py-2 rounded-full">
          More +
        </button>
      </div>

      <div className=" flex flex-col md:flex-row justify-evenly mt-4 ">
        <div className="w-full md:w-[25%] ">
          <div className=" px-4">
            <div className="bg-gray-100 rounded-lg p-4 flex flex-col xl:mt-4">
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
                <h1 className="px-4 text-xl font-bold">Graduate Level</h1>

                <div className="px-4 flex flex-col space-y-4 py-4">
                  <label className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name="options"
                      value="option1"
                      className="form-radio w-6 h-6 text-primary focus:bg-primary"
                    />
                    <span className="text-gray-500 text-xl font-medium">
                      Undergraduate
                    </span>
                  </label>

                  <label className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name="options"
                      value="option1"
                      className="form-radio w-6 h-6 text-primary focus:bg-primary"
                    />
                    <span className="text-gray-500 text-xl font-medium">
                      Postgraduate
                    </span>
                  </label>

                  <label className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name="options"
                      value="option1"
                      className="form-radio w-6 h-6 text-primary focus:bg-primary"
                    />
                    <span className="text-gray-500 text-xl font-medium">
                      Diploma
                    </span>
                  </label>
                  <div className="mt-4"></div>
                  <div className=" border-t-2 border-dotted flex items-center"></div>
                </div>

                <h1 className="px-4 text-xl font-bold">Subjects</h1>

                <div className="px-4 flex flex-col space-y-4 py-4">
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      value="option1"
                      className="form-checkbox w-6 h-6 text-primary focus:bg-primary"
                    />
                    <span className="text-gray-500 text-xl font-medium">
                      Engineering
                    </span>
                  </label>

                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      value="option2"
                      className="form-checkbox w-6 h-6 text-primary focus:bg-primary"
                    />
                    <span className="text-gray-500 text-xl font-medium">
                      Business
                    </span>
                  </label>

                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      value="option3"
                      className="form-checkbox w-6 h-6 text-primary focus:bg-primary"
                    />
                    <span className="text-gray-500 text-xl font-medium">
                      MBA
                    </span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      value="option1"
                      className="form-checkbox w-6 h-6 text-primary focus:bg-primary"
                    />
                    <span className="text-gray-500 text-xl font-medium">
                      LAW
                    </span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      value="option1"
                      className="form-checkbox w-6 h-6 text-primary focus:bg-primary"
                    />
                    <span className="text-gray-500 text-xl font-medium">
                      Computer Science
                    </span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      value="option1"
                      className="form-checkbox w-6 h-6 text-primary focus:bg-primary"
                    />
                    <span className="text-gray-500 text-xl font-medium">
                      Economics
                    </span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      value="option1"
                      className="form-checkbox w-6 h-6 text-primary focus:bg-primary"
                    />
                    <span className="text-gray-500 text-xl font-medium">
                      Finance
                    </span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      value="option1"
                      className="form-checkbox w-6 h-6 text-primary focus:bg-primary"
                    />
                    <span className="text-gray-500 text-xl font-medium">
                      Marketing
                    </span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      value="option1"
                      className="form-checkbox w-6 h-6 text-primary focus:bg-primary"
                    />
                    <span className="text-gray-500 text-xl font-medium">
                      Chemistry
                    </span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      value="option1"
                      className="form-checkbox w-6 h-6 text-primary focus:bg-primary"
                    />
                    <span className="text-gray-500 text-xl font-medium">
                      Architecture
                    </span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      value="option1"
                      className="form-checkbox w-6 h-6 text-primary focus:bg-primary"
                    />
                    <span className="text-gray-500 text-xl font-medium">
                      Health Science
                    </span>
                  </label>

                  <div className="mt-4"></div>
                  <div className="border-t-2 border-dotted flex items-center"></div>
                </div>

                <h1 className="px-4 text-xl font-bold">Location</h1>

                <div className="px-4 flex flex-col space-y-4 py-4">
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      value="option1"
                      className="form-checkbox w-6 h-6 text-primary focus:bg-primary"
                    />
                    <span className="text-gray-500 text-xl font-medium">
                      United Kingdom
                    </span>
                  </label>

                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      value="option2"
                      className="form-checkbox w-6 h-6 text-primary focus:bg-primary"
                    />
                    <span className="text-gray-500 text-xl font-medium">
                      United State of America
                    </span>
                  </label>

                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      value="option3"
                      className="form-checkbox w-6 h-6 text-primary focus:bg-primary"
                    />
                    <span className="text-gray-500 text-xl font-medium">
                      Canada
                    </span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      value="option1"
                      className="form-checkbox w-6 h-6 text-primary focus:bg-primary"
                    />
                    <span className="text-gray-500 text-xl font-medium">
                      Australia
                    </span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      value="option1"
                      className="form-checkbox w-6 h-6 text-primary focus:bg-primary"
                    />
                    <span className="text-gray-500 text-xl font-medium">
                      France
                    </span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      value="option1"
                      className="form-checkbox w-6 h-6 text-primary focus:bg-primary"
                    />
                    <span className="text-gray-500 text-xl font-medium">
                      Belgium
                    </span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      value="option1"
                      className="form-checkbox w-6 h-6 text-primary focus:bg-primary"
                    />
                    <span className="text-gray-500 text-xl font-medium">
                      Germany{" "}
                    </span>
                  </label>

                  <div className="mt-4"></div>
                  <div className="border-t-2 border-dotted flex items-center"></div>
                </div>

                <h1 className="px-4 text-xl font-bold">Tuition Cost</h1>

                <div className="px-4 flex flex-col space-y-4 py-4">
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      value="option1"
                      className="form-checkbox w-6 h-6 text-primary focus:bg-primary"
                    />
                    <span className="text-gray-500 text-xl font-medium">
                      $ 1000
                    </span>
                  </label>

                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      value="option2"
                      className="form-checkbox w-6 h-6 text-primary focus:bg-primary"
                    />
                    <span className="text-gray-500 text-xl font-medium">
                      $ 1500
                    </span>
                  </label>

                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      value="option3"
                      className="form-checkbox w-6 h-6 text-primary focus:bg-primary"
                    />
                    <span className="text-gray-500 text-xl font-medium">
                      $ 2000
                    </span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      value="option1"
                      className="form-checkbox w-6 h-6 text-primary focus:bg-primary"
                    />
                    <span className="text-gray-500 text-xl font-medium">
                      $ 2400
                    </span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      value="option1"
                      className="form-checkbox w-6 h-6 text-primary focus:bg-primary"
                    />
                    <span className="text-gray-500 text-xl font-medium">
                      $ 3000
                    </span>
                  </label>

                  <div className="mt-4"></div>
                  <div className="border-t-2 border-dotted flex items-center"></div>
                </div>

                <h1 className="px-4 text-xl font-bold">IELTS Score</h1>

                <div className="px-4 flex flex-col space-y-4 py-4">
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      value="option1"
                      className="form-checkbox w-6 h-6 text-primary focus:bg-primary"
                    />
                    <span className="text-gray-500 text-xl font-medium">9</span>
                  </label>

                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      value="option2"
                      className="form-checkbox w-6 h-6 text-primary focus:bg-primary"
                    />
                    <span className="text-gray-500 text-xl font-medium">
                      8.5
                    </span>
                  </label>

                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      value="option3"
                      className="form-checkbox w-6 h-6 text-primary focus:bg-primary"
                    />
                    <span className="text-gray-500 text-xl font-medium">8</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      value="option1"
                      className="form-checkbox w-6 h-6 text-primary focus:bg-primary"
                    />
                    <span className="text-gray-500 text-xl font-medium">
                      7.5
                    </span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      value="option1"
                      className="form-checkbox w-6 h-6 text-primary focus:bg-primary"
                    />
                    <span className="text-gray-500 text-xl font-medium">7</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      value="option1"
                      className="form-checkbox w-6 h-6 text-primary focus:bg-primary"
                    />
                    <span className="text-gray-500 text-xl font-medium">
                      6.5
                    </span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      value="option1"
                      className="form-checkbox w-6 h-6 text-primary focus:bg-primary"
                    />
                    <span className="text-gray-500 text-xl font-medium">6</span>
                  </label>

                  <div className="mt-4"></div>
                  <div className="border-t-2 border-dotted flex items-center"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[75%] ">
          <div className=" ">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

                <h2 className="text-xl font-semibold mt-3">
                  $11,400 - $38,000.
                </h2>
                <p className="mt-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
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

                <h2 className="text-xl font-semibold mt-3">
                  $11,400 - $38,000.
                </h2>
                <p className="mt-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
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

                <h2 className="text-xl font-semibold mt-3">
                  $11,400 - $38,000.
                </h2>
                <p className="mt-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
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

                <h2 className="text-xl font-semibold mt-3">
                  $11,400 - $38,000.
                </h2>
                <p className="mt-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
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

                <h2 className="text-xl font-semibold mt-3">
                  $11,400 - $38,000.
                </h2>
                <p className="mt-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
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

                <h2 className="text-xl font-semibold mt-3">
                  $11,400 - $38,000.
                </h2>
                <p className="mt-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
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

                <h2 className="text-xl font-semibold mt-3">
                  $11,400 - $38,000.
                </h2>
                <p className="mt-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
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

                <h2 className="text-xl font-semibold mt-3">
                  $11,400 - $38,000.
                </h2>
                <p className="mt-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
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

                <h2 className="text-xl font-semibold mt-3">
                  $11,400 - $38,000.
                </h2>
                <p className="mt-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
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

                <h2 className="text-xl font-semibold mt-3">
                  $11,400 - $38,000.
                </h2>
                <p className="mt-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
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

                <h2 className="text-xl font-semibold mt-3">
                  $11,400 - $38,000.
                </h2>
                <p className="mt-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
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

                <h2 className="text-xl font-semibold mt-3">
                  $11,400 - $38,000.
                </h2>
                <p className="mt-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
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

            <div className="flex items-center justify-start mt-16 space-x-2 sm:space-x-4 md:space-x-6">
              {/* Left Arrow */}
              <button
                className="text-primary font-bold p-2"
                aria-label="Previous Page"
              >
                <ArrowLeft size={24} className="sm:size-30 md:size-8" />
              </button>

              {/* Page Numbers */}
              <div className="flex flex-wrap justify-start space-x-2 sm:space-x-4 md:space-x-8">
                <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-primary bg-gray-400 text-white">
                  1
                </button>
                <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-primary bg-white text-primary hover:bg-primary hover:text-white transition">
                  2
                </button>
                <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-primary bg-white text-primary hover:bg-primary hover:text-white transition">
                  3
                </button>
                <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-primary bg-white text-primary hover:bg-primary hover:text-white transition">
                  4
                </button>
                <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-primary bg-white text-primary hover:bg-primary hover:text-white transition">
                  5
                </button>
                <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-primary bg-white text-primary hover:bg-primary hover:text-white transition">
                  10
                </button>
              </div>

              {/* Right Arrow */}
              <button
                className="text-primary font-bold p-2"
                aria-label="Next Page"
              >
                <ArrowRight size={24} className="sm:size-30 md:size-8" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
