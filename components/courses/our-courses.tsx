"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Courses() {
  const [activeTab, setActiveTab] = useState(0);

  // Headlines and corresponding content
  const tabs = [
    {
      title: "Overview",
      content: " Personal Finance: Financial Security",
    },
    { title: "Syllabus", content: "This is the content for Tab 2." },
    {
      title: "Eligibility Criteria",
      content: "This is the content for Tab 3.",
    },
    {
      title: "University Information",
      content: "This is the content for Tab 4.",
    },
    { title: "Location Details", content: "This is the content for Tab 5." },
    { title: "Career", content: "This is the content for Tab 6." },
  ];

  return (
    <div className="container xl:mx-auto px-12 py-24 xl:px-12">
  <div className="flex flex-col lg:flex-row w-full">
    {/* Left Div: 60% Width */}
    <div className="w-full lg:w-[75%] h-40 flex items-center justify-center text-white">
      <div className="w-full max-w-screen-xl mx-auto p-4">
        {/* Tab Wrapper */}
        <div className="w-full px-4">
          {/* Tab Headers */}
          <div className="flex border-b border-gray-300">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex-1 text-center py-3 text-lg font-bold ${
                  activeTab === index
                    ? "border-b-4 border-primary text-primary"
                    : "text-black hover:text-primary"
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-8">
            <p className="text-black text-lg leading-relaxed">
              {tabs[activeTab].content}
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Right Div: 40% Width */}
    <div className="w-full lg:w-[36%] h-40 flex items-center justify-center text-white p-4">
      {/* Card Container */}
      <div className="bg-primary p-6 rounded-[20px] shadow-lg w-full">
  <table className="w-full border-collapse">
    <tbody>
      <tr>
        <td className="px-4 py-4 font-bold border-dotted border-white border-2">Duration</td>
        <td className="px-4 py-4 font-bold border-dotted border-white border-2">2 Year</td>
      </tr>
      <tr>
        <td className="px-4 py-4 font-bold border-dotted border-white border-2">Tuition Fees</td>
        <td className="px-4 py-4 font-bold border-dotted border-white border-2">$11,400 - $38,000</td>
      </tr>
      <tr>
        <td className="px-4 py-4 font-bold border-dotted border-white border-2">Eligibility</td>
        <td className="px-4 py-4 font-bold border-dotted border-white border-2">Postgraduate</td>
      </tr>
    </tbody>
  </table>

  <div className="mt-8 text-center">
    <button className="text-sm bg-white w-60 h-12 font-bold text-primary px-6 py-2 rounded-[20px] hover:bg-primary hover:text-white focus:outline-none">
      APPLY NOW
    </button>
  </div>
</div>



    </div>
  </div>






</div>

  );
}
