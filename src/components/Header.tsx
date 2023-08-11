"use client";

import React from "react";
import TabMenu from "./TabMenu";

export default function Header() {
  const headerClass =
    "flex justify-between items-center p-4 text-white bg-violet-800 mb-12";

  return (
    <header className={headerClass}>
      <h1>My Website</h1>
      <TabMenu />
    </header>
  );
}
