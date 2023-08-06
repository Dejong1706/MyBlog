import Link from "next/link";
import React from "react";

const NAV_CLASS = "text-xl hover:text-2xl hover:text-semi-bold";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4">
      <Link href="/">
        <h1 className="text-3xl font-bold">{"병근's Blog"}</h1>
      </Link>
      <nav className="flex gap-4">
        <Link href="/">
          <p className={NAV_CLASS}>home</p>
        </Link>
        <Link href="/about">
          <p className={NAV_CLASS}>about</p>
        </Link>
        <Link href="/posts">
          <p className={NAV_CLASS}>posts</p>
        </Link>
        <Link href="/contact">
          <p className={NAV_CLASS}>contact</p>
        </Link>
      </nav>
    </header>
  );
}