import React from "react";
import { GlobalStyles } from "../styles/global";

const Layout = ({ children }) => {
  return (
    <main>
      <GlobalStyles />
      {children}
    </main>
  );
};

export default Layout;
