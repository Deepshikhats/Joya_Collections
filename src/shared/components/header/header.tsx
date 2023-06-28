import React, { ReactElement, ReactNode } from "react";
import { Navbar, Row } from "react-bootstrap";
import "./header.scss";
interface AuxProps {
  children: ReactNode;
}

const Header: React.FC<AuxProps> = ({ children }): ReactElement => {
  return (
    <Row className="bx-shadow h80 position-sticky top-0 m-0">
      <Navbar className="bg w-100" expand="lg" key="lg">
        {children}
      </Navbar>
    </Row>
  );
};

export default Header;
