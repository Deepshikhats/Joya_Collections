import * as Yup from "yup";
const EN = {
  PASSWORD_REQUIRED: "Password is required",
  REQUIRED: "This field is mandatory",
  NAME_REQUIRED: "Only alphanumeric characters are allowed",
  NAME_LENGTH: "Characters should not exceed 24",
  ZIP_LENGTH: "Enter a valid Zip Code",
  ADDRESS: "Must be 2-42 characters",
  DESCRIPTION_LENGTH: "Characters should not exceed 1000",
  NUMBER_LENGTH: "Enter a valid number",
};

export const personSchema = Yup.object().shape({
  firstName: Yup.string()
    .required(EN.REQUIRED)
    .matches(/^[A-Za-z]+$/, EN.NAME_REQUIRED),
  lastName: Yup.string().required(EN.REQUIRED),
  contactNumber: Yup.string()
    .required(EN.REQUIRED)
    .matches(/^\d{10}$/, EN.NUMBER_LENGTH),
  pincode: Yup.string().length(6, EN.ZIP_LENGTH).required(EN.REQUIRED),
  street: Yup.string().required(EN.REQUIRED),
  building: Yup.string().required(EN.REQUIRED),
  city: Yup.string().required(EN.REQUIRED),
  country: Yup.string().required(EN.REQUIRED),
  //   state: Yup.string().required(EN.REQUIRED),
});

interface Person extends Yup.InferType<typeof personSchema> {
  // using interface instead of type generally gives nicer editor feedback
}
