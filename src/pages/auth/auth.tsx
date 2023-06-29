import React, { ChangeEvent, useRef, useState } from "react";
import "./auth.scss";
import Logo from "@assets/images/logo.png";
import { Layout } from "@common";
import { Col, Container, Row } from "react-bootstrap";
import { Button } from "@components";
import { RoundLoader } from "@utils";

const Auth: React.FC = () => {
  const [otp, setOtp] = useState<number>();
  const [loading, setLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [authCredential, setAuthCredential] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const otpRef = useRef<Array<React.RefObject<HTMLInputElement>>>(
    [...Array(4)].map(() => React.createRef())
  );
  const generateOtp = () => {
    setLoading(true);
    setTimeout(() => {
      if (authCredential) {
        const otp = Number(Math.random().toFixed(4).substring(2)) + 1000;
        setOtp(otp);
        setLoading(false);
        alert(`Your OTP: ${otp}`);
      }
    }, 1000);
  };
  const onEnteringOtp = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target;
    if (/^[0-9]+$/.test(value)) {
      if (value.length === 1) {
        if (otpRef.current[index + 1]) {
          otpRef?.current[index + 1]?.current?.focus();
        }
      } else if (value.length == 0) {
        if (otpRef.current[index - 1]) {
          otpRef?.current[index - 1]?.current?.focus();
        }
      }
      return;
    }
    if (otpRef.current[index]?.current) {
      otpRef.current[index]!.current!.value = "";
    }
  };
  const handleOtpPasting = (e: React.ClipboardEvent<HTMLInputElement>) => {
    otpRef?.current?.forEach((refs, index) => {
      if (refs.current) {
        refs.current.value = e.clipboardData.getData("text/plain")[index];
      }
    });
    e.preventDefault();
  };
  const submitOtp = () => {
    let enteredOtp = "";
    for (let i of otpRef.current) {
      enteredOtp = enteredOtp + i.current?.value;
    }
    if (Number(enteredOtp) === otp) {
      localStorage.setItem("verified", "true");
    }
  };
  return (
    <Layout>
      <Container className="logo_wrap mt-5 p-0">
        <Row className="w-100 h-100 m-0">
          <Col
            lg={6}
            md={12}
            className="d-flex justify-content-center align-items-center logoC"
          >
            <img src={Logo} className="logo" alt="logo" />
          </Col>
          <Col
            lg={6}
            md={12}
            className="position-relative d-flex flex-column px-4 py-5"
          >
            {!otp ? (
              <React.Fragment>
                <label
                  className={`fontRubik position-absolute label cursor-text ${
                    !isFocused && "transit"
                  } `}
                  htmlFor="login"
                  onClick={() => {
                    if (inputRef.current) {
                      inputRef.current.focus();
                    }
                  }}
                >
                  Enter Email/Mobile Number
                </label>
                <input
                  id="login"
                  ref={inputRef}
                  type="text"
                  value={authCredential}
                  // placeholder={isFocused ? "" : "Enter Email/Mobile Number"}
                  className="ip w-100 bg-transparent "
                  onFocus={() => setIsFocused(true)}
                  onBlur={() =>
                    authCredential.length == 0 && setIsFocused(false)
                  }
                  onChange={(e) => setAuthCredential(e.target.value)}
                />
                <div className="t3 my-4 text-center">
                  By continuing, you agree to Joya Collections's's
                  <a>Terms of Use</a> and <a>Privacy Policy</a>.
                </div>

                <Button
                  type="submit"
                  onClick={generateOtp}
                  className="btnPrimary w-100 mb-2"
                >
                  {loading ? <RoundLoader /> : "Request OTP"}
                </Button>
              </React.Fragment>
            ) : (
              <div className="d-flex flex-column gap20">
                <span className="txt-p2 text-center">
                  Enter your one time password here
                </span>
                <div className="d-flex align-items-center gap20 justify-content-center">
                  {[...Array(4)].map((_, i) => (
                    <input
                      type="text"
                      key={i}
                      className="otpBox borderBlack rounded text-center"
                      onChange={(e) => onEnteringOtp(e, i)}
                      ref={otpRef.current[i]}
                      onPaste={(e) => handleOtpPasting(e)}
                      maxLength={1}
                    />
                  ))}
                </div>
                <Button
                  type="submit"
                  onClick={submitOtp}
                  className="btnPrimary w-100 mb-2"
                >
                  Submit OTP
                </Button>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Auth;
