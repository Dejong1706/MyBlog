"use client";

import Link from "next/link";
import React from "react";
import TabMenu from "./TabMenu";

export default function Header() {
  const headerClass =
    "flex justify-between items-center p-4 text-white bg-violet-800 mb-12";

  return (
    <header className={headerClass}>
      <Link href="/">
        <h1>{`Byeong Geun Blog`}</h1>
      </Link>
      <TabMenu />
    </header>
  );
}
