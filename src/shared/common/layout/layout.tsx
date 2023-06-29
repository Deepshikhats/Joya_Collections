import { HeaderMain } from "@common";
import { Footer } from "@components";
import React from "react";
interface propsTypes {
  children: React.ReactNode;
}
const Layout: React.FC<propsTypes> = (props) => {
  return (
    <div className="d-flex flex-column h-100">
      <HeaderMain />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
