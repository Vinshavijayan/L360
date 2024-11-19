"use client";
import React from "react";
import Image from "next/image";
import AppInfo from "@/utils/config";
import Link from "next/link";
import navItems from "./navItems";
import { usePathname } from "next/navigation";

export default function MainNavbar() {
  const pathname = usePathname();

  return (
    <div
      className=" absolute z-100 w-full py-5"
      style={{
        zIndex: 100,
      }}
    >
      <div className="container  xl:mx-auto md:px-5 xl:px-12  flex items-center justify-between ">
        <Link href="/" className="font-extrabold text-3xl">
          <Image src={AppInfo.logo} alt="logo" width={150} height={50} />
        </Link>
        <div>
          <ul className="flex  items-center gap-5 ">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.path}
                  className={` transition-all text-[16px] ${
                    pathname === item.path
                      ? "text-primary hover:text-primary-dark font-semibold"
                      : "text-primary-dark hover:text-primary font-semibold "
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
