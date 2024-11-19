"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import navItems from "./navItems";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import AppInfo from "@/utils/config";
import Image from "next/image";
export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const SubMenu = () => {
    return (
      <div>
        <ul className=" font-semibold">
          {navItems.map((item, index) => (
            <li key={index} className="py-2 border-b border-gray-200 ">
              <Link
                href={item.path}
                className={` transition-all text-[14px] ${
                  pathname === item.path
                    ? "text-primary hover:text-primary-dark font-[700]"
                    : "text-primary-dark hover:text-primary font-[500] "
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className=" shadow-xl  p-5 flex justify-between items-center">
      <Link href="/" className="font-extrabold text-3xl">
        <Image src={AppInfo.logo} alt="logo" width={150} height={50} />
      </Link>
      <button
        className="bg-primary text-white rounded-lg p-2 font-semibold   transition-all "
        onClick={toggleMenu}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -90 }}
            className=" absolute bg-white  shadow-xl top-20 left-0 w-full z-10 p-8"
          >
            <SubMenu />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
