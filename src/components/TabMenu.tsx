"use client";

import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

const MENU_CLASS = "block text-lg text-white py-4 hover:bg-pink-400";

export default function TabMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={handleToggle} className="text-white">
        <AiOutlineMenu />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={handleToggle}
          ></div>
          <div className="fixed w-64 h-full bg-violet-800 text-center right-0 top-0 z-10 overflow-y-auto">
            <button
              className="absolute pt-3 pr-2 pl-4 text-white right-0 top-0"
              onClick={handleToggle}
            >
              <AiOutlineClose />
            </button>
            <nav className="space-y-4 mt-8 p-4">
              <Link href="/" onClick={handleToggle}>
                <p className={MENU_CLASS}>home</p>
              </Link>
              <Link href="/about" onClick={handleToggle}>
                <p className={MENU_CLASS}>about</p>
              </Link>
              <Link href="/posts" onClick={handleToggle}>
                <p className={MENU_CLASS}>posts</p>
              </Link>
              <Link href="/contact" onClick={handleToggle}>
                <p className={MENU_CLASS}>contact</p>
              </Link>
            </nav>
          </div>
        </>
      )}
    </>
  );
}
