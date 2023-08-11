import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

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
            {/* 메뉴 아이템을 여기에 추가하세요 */}
            <nav className="space-y-4 p-4">
              <Link href="/">
                <p className="block text-lg text-white py-2">home</p>
              </Link>
              <Link href="/about">
                <p className="block text-lg text-white py-2">about</p>
              </Link>
              <Link href="/posts">
                <p className="block text-lg text-white py-2">posts</p>
              </Link>
              <Link href="/contact">
                <p className="block text-lg text-white py-2">contact</p>
              </Link>
            </nav>
          </div>
        </>
      )}
    </>
  );
}
