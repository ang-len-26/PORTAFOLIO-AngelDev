import React from "react";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
