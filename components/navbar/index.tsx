import React from "react";
import MainNavbar from "./lgNavbar";
import MobileNav from "./smNavbar";

export default function Navbar() {
  return (
    <>
      <div className=" hidden xl:block">
        <MainNavbar />
      </div>

      <div className=" block xl:hidden">
        <MobileNav />
      </div>
    </>
  );
}
