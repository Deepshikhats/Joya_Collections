import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Formik, Form } from "formik";
import { Button, Input, Select } from "@components";
import { baseStyles, personSchema, RoundLoader } from "@utils";
import { useDispatch, useSelector } from "react-redux";
import { MyFormValues, setAddress } from "@redux/slices/detailsSlice";
import { RootState } from "src/redux/store/store";

interface AddressFormProps {
  type: "shipping" | "billing";
  isSaved: boolean;
  setIsSaved: (value: boolean) => void;
}
let initialValues: MyFormValues = {
  firstName: "",
  lastName: "",
  pincode: undefined,
  street: "",
  building: "",
  city: "",
  state: { label: "", value: "" },
  country: "India",
  contactNumber: "",
};

const AddressForm: React.FC<AddressFormProps> = ({
  type,
  isSaved,
  setIsSaved,
}) => {
  const dispatch = useDispatch();
  const [btnLoader, setBtnLoader] = useState(false);
  const { address } = useSelector((state: RootState) => state.userDetails);
  const handleFormSubmit = (values: MyFormValues) => {
    setBtnLoader(true);
    let data = { ...address, [type]: values };
    dispatch(setAddress(data));
    setTimeout(() => {
      setIsSaved(true);
      setBtnLoader(false);
    }, 1000);
  };
  useEffect(() => {
    initialValues = address?.shipping;
  }, []);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => handleFormSubmit(values)}
      validationSchema={personSchema}
      enableReinitialize={true}
    >
      {({
        setFieldValue,
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => {
        return (
          <Form>
            <div className="d-flex my-5">
              <div className="w-50 me-2">
                <Input
                  label="First Name*"
                  name="firstName"
                  wrapperClass="w-100 h40"
                  placeholder="first name"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.firstName && errors.firstName ? (
                  <span className="text-danger">{errors.firstName}</span>
                ) : (
                  ""
                )}
              </div>
              <div className="w-50">
                <Input
                  label="Last Name"
                  name="lastName"
                  placeholder="last name"
                  wrapperClass="w-100 h40"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.lastName && errors.lastName ? (
                  <span className="text-danger">{errors.lastName}</span>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="w-100 my-5 ">
              <Input
                label="House/Building Name*"
                name="building"
                placeholder="house/building name"
                wrapperClass="h40"
                value={values.building}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.building && errors.building ? (
                <span className="text-danger">{errors.building}</span>
              ) : (
                ""
              )}
            </div>
            <div className="w-100 my-5">
              <Input
                label="Area/Street Name*"
                name="street"
                placeholder="area/street name"
                wrapperClass="h40"
                value={values.street}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.street && errors.street ? (
                <span className="text-danger">{errors.street}</span>
              ) : (
                ""
              )}
            </div>
            <div className="w-100 my-5">
              <Input
                label="Pincode*"
                name="pincode"
                wrapperClass="h40"
                placeholder="pincode"
                value={values.pincode}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.pincode && errors.pincode ? (
                <span className="text-danger">{errors.pincode}</span>
              ) : (
                ""
              )}
            </div>
            <div className="w-100 my-5">
              <Input
                label="Town/City*"
                name="city"
                wrapperClass="h40"
                placeholder="town/city"
                value={values.city}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.city && errors.city ? (
                <span className="text-danger">{errors.city}</span>
              ) : (
                ""
              )}
            </div>
            <div>
              <Input
                label="Phone Number*"
                name="contactNumber"
                wrapperClass="w-100 h40"
                placeholder="Phone Number"
                value={values.contactNumber}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.contactNumber && errors.contactNumber ? (
                <span className="text-danger">{errors.contactNumber}</span>
              ) : (
                ""
              )}
            </div>

            <div className="d-flex align-items-end gap20 my-4">
              <div className="w-50">
                <label className="inputLabel fw-semibold">State*</label>
                <Select
                  options={[{ label: "Kerala", value: "kerala" }]}
                  value={values.state}
                  onChange={(e) => {
                    setFieldValue("state", e);
                  }}
                  onBlur={handleBlur}
                  styles={baseStyles}
                  name={"state"}
                />
              </div>
              <div className="w-50 h40">
                <span className="d-block rounded-1 bg-grey3 h-100 w-100 px-3 py-2">
                  India
                </span>
              </div>
            </div>

            <Button className="btnGreen" onClick={handleSubmit} type="submit">
              {btnLoader ? <RoundLoader /> : isSaved ? "Done" : "Save"}
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default AddressForm;
