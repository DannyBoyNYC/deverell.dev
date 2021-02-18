import React from "react";
import { Header } from "./header";

const Layout = ({ title, children }) => {
  return (
    <main>
      <Header title={title} />
      <main>{children}</main>
    </main>
  );
};

export default Layout;
