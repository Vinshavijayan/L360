import React from "react";
import AppInfo from "@/utils/config";
import Image from "next/image";
import { Twitter, Facebook, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className=" bg-primary-dark ">
        <div className="max-w-screen-xl  xl:mx-auto mx-5 py-24  md:py-12 grid grid-cols-1 lg:grid-cols-2 ">
          <div className=" flex items-center ">
            <div className="grid  gap-5 md:w-2/3">
              <Image src={AppInfo.logo} alt="logo" width={100} height={100} />
              {/* <h1 className="font-extrabold text-3xl text-white">Lumo360</h1> */}
              <p className=" text-gray-400">
                Welcome to Lumo360, your ultimate partner in global education.
                Our innovative platform, available as a website and mobile
                application (iOS and Android), revolutionises the study abroad
                experience. We simplify the application process, enhance
                communication, and offer robust support to ensure academic and
                career success for both students and universities.
              </p>
              <div className="flex gap-5 ">
                <Twitter size={20} className=" text-white" />
                <Facebook size={20} className=" text-white" />
                <Linkedin size={20} className=" text-white" />
                <Instagram size={20} className=" text-white" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
            <div className=" text-gray-200 flex flex-col gap-1 text-sm">
              <h4 className=" text-gray-400 font-semibold text-base mb-1">
                Services
              </h4>
              <Link
                className="hover:text-white hover:underline underline-offset-2 transition-all"
                href="/study-aboard"
              >
                Study Aboard
              </Link>
              <Link
                className="hover:text-white hover:underline underline-offset-2 transition-all"
                href="/cources"
              >
                Courses
              </Link>
              <Link
                className="hover:text-white hover:underline underline-offset-2 transition-all"
                href="/about-us"
              >
                About Us
              </Link>
              <Link
                className="hover:text-white hover:underline underline-offset-2 transition-all"
                href="/IELTS"
              >
                IELTS
              </Link>
              <Link
                className="hover:text-white hover:underline underline-offset-2 transition-all"
                href="/essential-services"
              >
                Essential Services
              </Link>
            </div>
            <div className=" text-gray-200 flex flex-col gap-1 text-sm">
              <h4 className=" text-gray-400 font-semibold text-base mb-1">
                Services
              </h4>
              <Link
                className="hover:text-white hover:underline underline-offset-2 transition-all"
                href="/study-aboard"
              >
                Study Aboard
              </Link>
              <Link
                className="hover:text-white hover:underline underline-offset-2 transition-all"
                href="/cources"
              >
                Courses
              </Link>
              <Link
                className="hover:text-white hover:underline underline-offset-2 transition-all"
                href="/about-us"
              >
                About Us
              </Link>
              <Link
                className="hover:text-white hover:underline underline-offset-2 transition-all"
                href="/IELTS"
              >
                IELTS
              </Link>
            </div>
            <div className=" text-gray-200 flex flex-col gap-1 text-sm">
              <h4 className=" text-gray-400 font-semibold text-base mb-1">
                Services
              </h4>
              <Link
                className="hover:text-white hover:underline underline-offset-2 transition-all"
                href="/study-aboard"
              >
                Study Aboard
              </Link>
              <Link
                className="hover:text-white hover:underline underline-offset-2 transition-all"
                href="/cources"
              >
                Courses
              </Link>
              <Link
                className="hover:text-white hover:underline underline-offset-2 transition-all"
                href="/about-us"
              >
                About Us
              </Link>
              <Link
                className="hover:text-white hover:underline underline-offset-2 transition-all"
                href="/IELTS"
              >
                IELTS
              </Link>
              <Link
                className="hover:text-white hover:underline underline-offset-2 transition-all"
                href="/essential-services"
              >
                Essential Services
              </Link>
              <Link
                className="hover:text-white hover:underline underline-offset-2 transition-all"
                href="/IELTS"
              >
                IELTS
              </Link>
              <Link
                className="hover:text-white hover:underline underline-offset-2 transition-all"
                href="/essential-services"
              >
                Essential Services
              </Link>
              <Link
                className="hover:text-white hover:underline underline-offset-2 transition-all"
                href="/IELTS"
              >
                IELTS
              </Link>
              <Link
                className="hover:text-white hover:underline underline-offset-2 transition-all"
                href="/essential-services"
              >
                Essential Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black text-gray-500 p-4">
        <div className="max-w-screen-xl  xl:mx-auto mx-5 text-sm  flex flex-col md:flex-row  justify-between gap-5 ">
          <div>copyrigth &copy; {currentYear} L360</div>
          <div className="flex gap-5 flex-col md:flex-row">
            <Link href="/disclaimer" className="hover:text-white">
              Disclaimer
            </Link>

            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-white">
              Terms and Conditions
            </Link>
            {/* Investors */}
            <Link href="/investors" className="hover:text-white">
              Investors
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
