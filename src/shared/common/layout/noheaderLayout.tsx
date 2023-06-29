import { Footer, Header, Input } from "@components";
import React from "react";
import { Row } from "react-bootstrap";
interface propsTypes {
  children: React.ReactNode;
}
const SecondaryLayout: React.FC<propsTypes> = (props) => {
  return (
    <div className="d-flex flex-column h-100">
      <Header>
        <Row className="justify-content-center w-100">
          <Input
            type="text"
            placeholder="Search Here"
            wrapperClass="search"
            disabled={false}
            Righticon={true}
            // onChange={onChange}
            // onFocus={onFocus}
            // onBlur={onBlur}
            // autoFocus={autoFocus}
          />
        </Row>
      </Header>
      {props.children}
      <Footer />
    </div>
  );
};

export default SecondaryLayout;
