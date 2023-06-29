import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="mt-auto bg-black px-5 py-4">
      <div className="d-flex flex-column flex-md-row hContainer align-items-center fs16 gap-lg-5 gap-3  text-white">
        <small className="text-center">
          Copyright©JoyaCollections, 2023 | All rights reserevd
        </small>
        <span>Privacy Policy</span>
        <span>Terms & Conditions</span>
      </div>
    </footer>
  );
};

export default Footer;
