import Image from "next/image";
import React from "react";

export default function Cards() {
  return (
    <div className="container xl:mx-auto px-5 xl:px-24 py-10 xl:py-14">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="bg-gray-100 rounded-lg p-6 flex flex-col h-36 xl:mt-4">
          {/* Image Section */}
          <div className="relative">
            <div className="absolute top-0 left-[20px] transform -translate-y-1/2">
              <Image
                src="/images/services/uk.jpg"
                width={100}
                height={100}
                alt="Services images"
                className="w-20 h-20 rounded-lg object-cover"
              />
            </div>
          </div>

          {/* Text Section */}
          <h2 className="text-2xl font-semibold mt-16">+91590 088 55</h2>
        </div>

        <div className="bg-gray-100 rounded-lg p-6 flex flex-col h-36 xl:mt-4">
          {/* Image Section */}
          <div className="relative">
            <div className="absolute top-0 left-[20px] transform -translate-y-1/2">
              <Image
                src="/images/services/uk.jpg"
                width={100}
                height={100}
                alt="Services images"
                className="w-20 h-20 rounded-lg object-cover"
              />
            </div>
          </div>

          {/* Text Section */}
          <h2 className="text-2xl font-semibold mt-16">info@lumo.com</h2>
        </div>

        <div className="bg-gray-100 rounded-lg p-6 flex flex-col h-36 xl:mt-4">
  {/* Image Section */}
  <div className="relative">
    <div className="absolute top-0 left-[20px] transform -translate-y-1/2">
      <Image
        src="/images/services/uk.jpg"
        width={100}
        height={100}
        alt="Services images"
        className="w-20 h-20 rounded-lg object-cover"
      />
    </div>
  </div>

  {/* Button Section */}
  <button className="mt-16 w-[120px] py-2 bg-primary hover:bg-transparent transition-all hover:text-primary border-2 border-primary text-[12px] text-white font-bold rounded-full">
    GET DIRECTION
  </button>
</div>

      </div>
    </div>
  );
}
