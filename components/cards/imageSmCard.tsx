import Link from "next/link";
import React from "react";

type ImageSmCardProps = {
  image: string;
  title: string;
  href: string;
};

export default function ImageSmCard({ image, title, href }: ImageSmCardProps) {
  return (
    <Link href={href}>
      <div
        className="h-[330px] w-full bg-cover bg-center relative cursor-pointer rounded-xl flex justify-center items-end text-center p-5 "
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <h2 className="bg-white/20 text-white text-[20px] font-semibold w-full p-2 rounded-xl">
          {title}
        </h2>
      </div>
    </Link>
  );
}
