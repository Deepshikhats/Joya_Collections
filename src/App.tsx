import React from "react";
import "./App.scss";
import {
  HomePage,
  EmptyCart,
  AuthPage,
  ProductDetails,
  Cart,
  Checkout,
  PaymentPage,
  AdminPanel,
} from "@pages";
import { AuthLayout } from "@common";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { OtpRoutes, PrivateRoutes } from "@router";
import { AuthCredential, OtpBox } from "@components";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: (
      <AuthLayout>
        <AuthCredential />
      </AuthLayout>
    ),
    // children: [
    //   {
    //     path: "otp",
    //     element: (
    //       <AuthLayout>
    //         <OtpBox />
    //       </AuthLayout>
    //     ),
    //   },
    // ],
  },
  {
    path: "/viewProduct",
    element: <ProductDetails />,
  },
  {
    path: "/cart",
    element: (
      <PrivateRoutes>
        <Cart />
      </PrivateRoutes>
    ),
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/payment",
    element: <PaymentPage />,
  },
  {
    path: "/adminpanel",
    element: (
      <PrivateRoutes>
        <AdminPanel />
      </PrivateRoutes>
    ),
  },
  {
    path: "/login/otp",
    element: (
      <OtpRoutes>
        <AuthLayout>
          <OtpBox />
        </AuthLayout>
      </OtpRoutes>
    ),
  },
]);
const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
