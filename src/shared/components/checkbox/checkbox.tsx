import React from "react";
import Form from "react-bootstrap/Form";

interface propsTypes {
  key?: number;
  label?: string;
  className?: string;
  name?: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const CheckBox: React.FC<propsTypes> = (props) => {
  return (
    <Form.Check key={props.key}>
      <Form.Check.Input
        type="checkbox"
        onChange={props.onChange}
        checked={props.checked}
        className="me-2 p-2"
        //   ref={props?.ref}
      />
      <Form.Check.Label>{props.label}</Form.Check.Label>
    </Form.Check>
  );
};

export default CheckBox;
