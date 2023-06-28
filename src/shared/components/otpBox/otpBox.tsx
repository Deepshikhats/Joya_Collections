import React, { useRef } from "react";
import Button from "../button/button";
import { useSelector } from "react-redux";
import { RootState } from "src/redux/store/store";
import { useNavigate } from "react-router-dom";
const OtpBox = () => {
  const navigate = useNavigate();
  const { otp } = useSelector((state: RootState) => state.auth);
  const otpRef = useRef<Array<React.RefObject<HTMLInputElement>>>(
    [...Array(4)].map(() => React.createRef())
  );
  const submitOtp = () => {
    let enteredOtp = "";
    for (let i of otpRef.current) {
      enteredOtp = enteredOtp + i.current?.value;
    }
    if (Number(enteredOtp) === otp) {
      localStorage.setItem("verified", "true");
      navigate("/");
    } else {
      alert("Invalid OTP");
      //   navigate("/login");
    }
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

  return (
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
  );
};

export default OtpBox;
