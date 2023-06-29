import { Footer, Input } from "@components";
import React, { useState } from "react";
import { Row, Nav, Col } from "react-bootstrap";
import Logo from "@assets/images/lg.png";
import Hamburger from "@assets/icons/hamburger.svg";
interface propsTypes {
  children: React.ReactNode;
}
const AdminPanel: React.FC<propsTypes> = (props) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleHamburger = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <div className="d-flex flex-column h-100">
      <div className="bg-black1">
        <Row className="d-flex justify-content-around align-items-center hContainer">
          <Col xs={2} className="text-white">
            <img src={Logo} style={{ height: 68, width: "100%" }} />
          </Col>
          <Col md={6} xs={8} className="px-2">
            <Input
              type="text"
              placeholder="Search Here"
              wrapperClass="search h40"
              disabled={false}
              Righticon={true}
              // onChange={onChange}
              // onFocus={onFocus}
              // onBlur={onBlur}
              // autoFocus={autoFocus}
            />
          </Col>
          <Col md={4} xs={2}>
            <Nav
              activeKey="/home"
              onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
              className="adminOptions d-none d-md-flex"
            >
              <Nav.Item>
                <Nav.Link eventKey="link-2">Cart</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                  Logout
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <button className="d-md-none position-relative border-0 bg-transparent">
              <img
                src={Hamburger}
                alt=""
                className="w-100"
                onClick={() => handleHamburger()}
              />
              {showDropdown ? (
                <ul
                  className="d-md-none position-absolute list-unstyled z-100 d-flex flex-column justify-content-start right-0 rounded bg-black p-3 text-start text-white "
                  style={{ right: 0 }}
                >
                  <li>Cart</li>
                  <li>Logout</li>
                </ul>
              ) : null}
            </button>
          </Col>
        </Row>
      </div>

      {props.children}
      <Footer />
    </div>
  );
};

export default AdminPanel;
