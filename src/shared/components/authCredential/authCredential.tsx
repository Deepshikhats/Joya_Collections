import React, { useRef, useState } from "react";
import Button from "../button/button";
import { RoundLoader } from "@utils";
import { useDispatch } from "react-redux";
import { setOtp } from "@redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
const AuthCredential: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [authCredential, setAuthCredential] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const generateOtp = () => {
    if (authCredential) {
      setLoading(true);
      setTimeout(() => {
        const otp = Number(Math.random().toFixed(4).substring(2)) + 1000;
        dispatch(setOtp(otp));
        setLoading(false);
        localStorage.setItem("otpSend", "true");
        alert(`Your OTP: ${otp}`);
        navigate("/login/otp");
      }, 1000);
    } else {
      alert("Enter valid email/number");
    }
  };

  return (
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
        className="ip w-100 bg-transparent "
        onFocus={() => setIsFocused(true)}
        onBlur={() => authCredential.length == 0 && setIsFocused(false)}
        onChange={(e) => setAuthCredential(e.target.value)}
      />
      <div className="t3 my-4 text-center">
        By continuing, you agree to Joya Collections's <a>Terms of Use</a> and{" "}
        <a>Privacy Policy</a>.
      </div>

      <Button
        type="submit"
        onClick={generateOtp}
        className="btnPrimary w-100 mb-2"
      >
        {loading ? <RoundLoader /> : "Request OTP"}
      </Button>
    </React.Fragment>
  );
};

export default AuthCredential;
