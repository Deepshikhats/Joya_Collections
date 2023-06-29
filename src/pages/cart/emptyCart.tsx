import React from "react";
import { Container, Row } from "react-bootstrap";
import { Button, Header, Input } from "@components";
import CartIcon from "@assets/images/cart.png";
import { useNavigate } from "react-router-dom";
import "./cart.scss";
import { SecondaryLayout } from "@common";
const Cart: React.FC = () => {
  const navigate = useNavigate();
  return (
    <SecondaryLayout>
      <Container className="d-flex flex-column justify-content-center align-items-center mt-5 bg-white py-5">
        <div className="justify-content-center ">
          <img src={CartIcon} alt="empty_cart" className="cartIcon" />
        </div>
        <p className="txt-p2 m-0">Missing Cart Items?</p>
        <p className="txt-p2 m-0">
          Login to see the items you added previously
        </p>

        <Button
          type="button"
          onClick={() => navigate("/login")}
          className="fs-5 btnPrimary mt-3"
        >
          Login
        </Button>
      </Container>
    </SecondaryLayout>
  );
};

export default Cart;
