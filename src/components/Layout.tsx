"use client";

import React from "react";
import Header from "./Header";
import HomePage from "./home";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {/* <main>{children}</main> */}
      <HomePage />
    </div>
  );
};

export default Layout;
