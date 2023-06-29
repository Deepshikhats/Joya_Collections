import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "src/redux/store/store";

const navigations = [
  { name: "CART", link: "/cart" },
  { name: "SHIPPING", link: "/checkout" },
  { name: "PAYMENT", link: "/payment" },
  { name: "SUMMARY", link: "/summary" },
];
const CheckoutBreadCrumbs: React.FC = () => {
  const navigate = useNavigate();
  const { stages } = useSelector((state: RootState) => state.product);
  const handleNavigation = (nav: { name: string; link: string }) => {
    if (stages.includes(nav?.name)) {
      navigate(nav.link);
    }
  };

  return (
    <ul className="d-flex gap20 list-unstyled breadcrumbs">
      {navigations.map((nav, index) => (
        <li key={index}>
          <a
            onClick={() => handleNavigation(nav)}
            className={`txt-p1 fw-semibold border-3 border-dark pointer px-2 ${
              stages.includes(nav?.name) ? "border-bottom" : ""
            }`}
          >
            {nav.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default CheckoutBreadCrumbs;
