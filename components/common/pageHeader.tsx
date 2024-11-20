import React from "react";
import Link from "next/link";
import { MoveRight } from "lucide-react";
type PageHeaderProps = {
  title: string;
  description: string;
  linkText: string;
  link: string;
};

export default function PageHeader({
  title,
  description,
  linkText,
  link,
}: PageHeaderProps) {
  return (
    <section
      className="h-[60vh] grid place-items-center relative bg-cover bg-top bg-no-repeat "
      style={{
        backgroundImage: `url('/images/bg-elements/bg-image.webp') `,
      }}
    >
      <div className="text-center w-full lg:w-2/5 grid place-items-center gap-2">
        <h1 className="text-4xl md:text-[42px] font-bold text-[#18181B] leading-[65px]">
          {title}
        </h1>
        <p className=" text-[#697487] font-[400] leading-[24px]">
          {description}
        </p>
        <Link
          href={link}
          className="bg-primary text-white rounded-lg px-[26px] py-[14px] w-fit   font-[500] text-[15px] flex  items-center gap-2 justify-center mt-4 hover:bg-primary-dark transition-all"
        >
          {linkText}
          <MoveRight size={20} />
        </Link>
      </div>
      {/* <Image
        src="/images/bg-elements/dot-grid.svg"
        alt="logo"
        width={50}
        height={50}
        className="absolute bottom-32 left-[60%] "
      />
      <Image
        src="/images/bg-elements/yellow-ellipse.svg"
        alt="logo"
        width={400}
        height={500}
        className="absolute top-0 object-contain right-0 "
      /> */}
    </section>
  );
}
