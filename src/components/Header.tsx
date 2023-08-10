"use client";

import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const HEADER_CLASS =
  "flex justify-between items-center p-4 text-white bg-violet-800";
const NAV_CLASS = "text-sm lg:text-xl hover:font-semibold";

export default function Header() {
  const [button, setButton] = useState(false);
  const onClick: any = (e: any) => {
    e.preventDefault();
    setButton(!button);
  };

  const header = button
    ? HEADER_CLASS
    : "flex justify-between items-center p-4 text-white bg-violet-800 mb-12";
  const Tab = button ? "bg-violet-900 text-white mb-12" : "hidden";
  return (
    <>
      <header className={header}>
        <Link href="/">
          <h1 className="text-sm lg:text-3xl font-bold">
            {"ByeongGeun's Blog"}
          </h1>
        </Link>
        <button className="text-2xl cursor-pointer">
          <AiOutlineMenu onClick={onClick}></AiOutlineMenu>
        </button>
      </header>
      <nav className={Tab}>
        <ul className="flex justify-evenly flex-col gap-10 p-6 md:flex-row md:gap-4">
          <Link href="/">
            <li className={NAV_CLASS}>home</li>
          </Link>
          <Link href="/about">
            <li className={NAV_CLASS}>about</li>
          </Link>
          <Link href="/posts">
            <li className={NAV_CLASS}>posts</li>
          </Link>
          <Link href="/contact">
            <li className={NAV_CLASS}>contact</li>
          </Link>
        </ul>
      </nav>
    </>
  );
}
