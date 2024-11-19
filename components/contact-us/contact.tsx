import Image from "next/image";
import React from "react";

export default function ContactForm() {
  return (
    <div className="container xl:mx-auto px-5 xl:px-24 py-10 xl:py-14">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        <div className="bg-primary rounded-[40px] p-6 flex flex-col xl:mt-4 w-full max-w-lg mx-auto shadow-lg">
          <h2 className="text-2xl font-bold text-white text-center mb-6">
            Contact Form
          </h2>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder=" Name"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="email"
                placeholder="Email "
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <textarea
              placeholder="Additional Information"
              rows={4}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>

        
            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className="w-28 py-2 bg-black text-white font-bold rounded-[50px] hover:bg-primary transition"
              >
                SEND
              </button>
            </div>
          </form>
        </div>

        <div className="relative rounded-[40px] p-6 flex flex-col xl:mt-4 w-full max-w-lg mx-auto">
          <div
            className="absolute inset-0 rounded-[40px] bg-cover bg-center object-contain hidden md:block"
            style={{
              backgroundImage: "url('/images/services/uk.jpg')",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
