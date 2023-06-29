import { AuthLayout } from "@common";
import { AuthCredential } from "@components";
import { EmptyCart } from "@pages";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
interface propsTypes {
  children: React.ReactNode;
}
export const PrivateRoutes: React.FC<propsTypes> = (props) => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("verified");
  useEffect(() => {
    if (window.location.pathname === "/adminpanel") {
      navigate("/");
    }
  }, []);

  return (
    <React.Fragment>
      {isAuthenticated ? props.children : <EmptyCart />}
    </React.Fragment>
  );
};
export const OtpRoutes: React.FC<propsTypes> = (props) => {
  const navigate = useNavigate();

  const isOtpSend = localStorage.getItem("otpSend");

  useEffect(() => {
    if (isOtpSend !== "true") {
      navigate("/login");
    }
  }, []);

  return <React.Fragment>{props.children}</React.Fragment>;
};
