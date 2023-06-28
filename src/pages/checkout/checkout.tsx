import { AddressForm, Layout, OrderSummary } from "@common";
import { BreadCrumb, Button } from "@components";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import DownArrow from "@assets/icons/downSign.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setStages } from "@redux/slices/productSlice";
import { RootState } from "src/redux/store/store";
const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [price, setPrice] = useState(0);
  const [shippingData, setShippingData] = useState(false);
  const [billingData, setBillingData] = useState(false);
  const [incompleteData, setIncompleteData] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [isAddressSame, setIsAddressSame] = useState(false);

  const handleOrderSummary = () => {
    setShowSummary(!showSummary);
  };
  const handleCheckBox = (e: ChangeEvent<HTMLInputElement>) => {
    setIsAddressSame(e.target.checked);
  };
  const proceedToPayment = () => {
    isAddressSame
      ? shippingData
        ? navigate("/payment")
        : billingData && shippingData
        ? navigate("/payment")
        : setIncompleteData(true)
      : setIncompleteData(true);
  };
  useEffect(() => {
    dispatch(setStages(["CART", "SHIPPING"]));
  }, []);

  return (
    <Layout>
      <Container className="hContainer px-lg-5 my-5 px-3 ">
        <h4 className="fs-2">CHECKOUT</h4>
        <BreadCrumb />
        <Row className="justify-content-between  my-5">
          <Col xs={12} lg={6} xl={5}>
            {localStorage.getItem("verified")?.length == 0 && (
              <Button
                type="button"
                onClick={() => navigate("/login")}
                className="btnGreen"
              >
                Sign In
              </Button>
            )}
            <div className="d-flex flex-column mt-5">
              <div className="bg-grey3 px-5 py-3">ADDRESSES</div>
              <span className="txt-p3 mt-4">Enter a shipping address</span>
              <div className="my-4">
                <AddressForm
                  type="shipping"
                  isSaved={shippingData}
                  setIsSaved={setShippingData}
                />
              </div>
              <div className="d-flex align-items-center">
                <input
                  type="checkbox"
                  id="address"
                  className="checkBox me-2"
                  onChange={handleCheckBox}
                />

                <label htmlFor="address" className="txt-p1">
                  Billing and Shipping address are same
                </label>
              </div>

              {!isAddressSame ? (
                <div className="my-4">
                  <AddressForm
                    type="billing"
                    isSaved={billingData}
                    setIsSaved={setBillingData}
                  />
                </div>
              ) : (
                ""
              )}
              <Button
                onClick={proceedToPayment}
                type="button"
                className={`btnPrimary w-100 mt-4`}
              >
                Continue to payment
              </Button>
              {incompleteData ? (
                <span className="text-danger">Enter Address</span>
              ) : (
                ""
              )}
            </div>
          </Col>
          <Col xs={12} lg={6} xl={5}>
            <div
              className="bg-grey3 d-flex justify-content-between mt-lg-0 mt-5 px-5 py-3"
              onClick={handleOrderSummary}
            >
              <span>Order Summary</span>
              <img src={DownArrow} className={showSummary ? "rotate" : ""} />
            </div>
            <OrderSummary show={showSummary} getTotalPrice={setPrice} />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Checkout;
