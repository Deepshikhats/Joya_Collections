import React, { useState } from "react";
import { Button, Offcanvas, OffcanvasProps } from "react-bootstrap";
import { FilterContainer } from "@components";

// type placement  = '
interface propsTypes {
  placement: "start" | "end" | "bottom" | undefined;
  show: boolean;
  name: string;
  handleShow: () => void;
  handleClose: () => void;
}

const FilterOffcanvas: React.FC<propsTypes> = ({
  handleClose,
  handleShow,
  show,
  ...props
}) => {
  return (
    <>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Body>
          <FilterContainer />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default FilterOffcanvas;
