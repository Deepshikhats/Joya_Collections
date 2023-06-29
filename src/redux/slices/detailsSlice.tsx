import { PayloadAction, createSlice } from "@reduxjs/toolkit";
export interface MyFormValues {
  firstName: string;
  lastName: string;
  pincode: string | undefined;
  street: string;
  building: string;
  city: string;
  state: object;
  country: string;
  contactNumber: string;
}
export interface addressType {
  address: {
    shipping: MyFormValues;
    billing?: MyFormValues;
  };
}
const initialState: addressType = {
  address: {
    shipping: {
      firstName: "",
      lastName: "",
      pincode: undefined,
      street: "",
      building: "",
      city: "",
      state: { label: "", value: "" },
      country: "India",
      contactNumber: "",
    },
    billing: {
      firstName: "",
      lastName: "",
      pincode: undefined,
      street: "",
      building: "",
      city: "",
      state: { label: "", value: "" },
      country: "India",
      contactNumber: "",
    },
  },
};

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    setAddress: (state, { payload }: PayloadAction<addressType["address"]>) => {
      state.address = payload;
    },
  },
});

export const { setAddress } = addressSlice.actions;

export default addressSlice.reducer;
