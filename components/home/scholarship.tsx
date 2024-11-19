import Image from "next/image";
import React from "react";

export default function Scholarship() {
  return (
    <div
      className=" bg-top bg-no-repeat "
      style={{
        backgroundImage: "url('/images/home/sec3bg.png')",
        backgroundSize: "100%",
      }}
    >
      <section className="  container xl:max-w-screen-xl  xl:mx-auto px-5 xl:px-12 py-12">
        <div className=" flex justify-evenly mt-24">
          <div className="w-full md:w-[40%]  ">
            <Image
              src="/images/home/ai.png"
              width={550}
              height={450}
              alt="ai "
            />
          </div>
          <div className="w-full md:w-[45%]    ">
            <h1 className=" text-2x md:text-4xl font-bold leading-loose ">
              AI-powered <br />
              Matching Tool Makes <br /> Your Education Easy
            </h1>
            <div className="w-full ">
              <div>{/* form section counts */}</div>
              <div className=" bg-white shadow-lg rounded-3xl p-5 my-8">
                <h2 className=" text-xl text-center font-bold leading-loose mb-4">
                  Personal Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="px-3 py-2 border border-gray-300 rounded-lg"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="px-3 py-2 border border-gray-300 rounded-lg"
                  />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="px-3 py-2 border border-gray-300 rounded-lg"
                  />
                  <input
                    type="text"
                    placeholder="Country"
                    className="px-3 py-2 border border-gray-300 rounded-lg"
                  />
                  <input
                    type="text"
                    placeholder="City"
                    className="px-3 py-2 border border-gray-300 rounded-lg"
                  />
                  <input
                    type="text"
                    placeholder="Address"
                    className="px-3 py-2 border border-gray-300 rounded-lg"
                  />
                  <textarea
                    placeholder="Adittional Information"
                    className="px-3 py-2 border border-gray-300 rounded-lg col-span-2"
                    rows={5}
                  />
                </div>
                <div className=" flex gap-4 justify-center items-center mt-5">
                  <button className="bg-white text-primary border border-primary hover:bg-primary hover:text-white transition-all px-6 py-2 rounded-full text-sm">
                    BACK
                  </button>
                  <button className="bg-primary text-white  border border-primary hover:bg-white hover:text-primary transition-all px-6 py-2 rounded-full text-sm">
                    NEXT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col md:flex-row justify-evenly items-center mt-24">
          <div className="w-full md:w-[40%]   ">
            <h1 className=" text-2xl md:text-4xl font-bold !leading-[50px] mb-8">
              AI-Scholarship
              <br />
              Opportunities
            </h1>
            <p className=" leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
            <button className="bg-primary text-white px-6 py-2 rounded-full mt-5 text-sm hover:bg-white hover:text-primary border border-primary transition-all">
              READ MORE
            </button>
          </div>

          <div className="w-full md:w-[40%] grid place-items-center  relative ">
            <Image
              src="/images/home/scholarship.png"
              width={550}
              height={450}
              alt="ai "
              className=" absolute -top-36 right-0"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
