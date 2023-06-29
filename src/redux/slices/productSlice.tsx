import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ProductState {
  choosedProduct: {
    id: string;
    name: string;
    code: string;
    mrp: string;
    discount: string;
    sellingPrice: string;
    ratings: {
      score: string;
      reviews: number;
      total: number;
    };
    addedDate: string;
    sizes: Array<string>;
    colors: Array<string>;
    availableStock: number;
    details: {
      description: string;
      productStory: string;
      sub: { [key: string]: string[] };
    };
    images: Array<string>;
    src: string;
  };
  stages: Array<string>;
}

const initialState: ProductState = {
  choosedProduct: {
    id: "",
    name: "",
    code: "",
    mrp: "",
    discount: "",
    sellingPrice: "",
    ratings: {
      score: "",
      reviews: 0,
      total: 0,
    },
    sizes: [],
    colors: [],
    availableStock: 0,
    details: { description: "", productStory: "", sub: {} },
    images: [],
    src: "",
    addedDate: "",
  },
  stages: ["CART"],
};

export const productSlice = createSlice({
  name: "productDetails",
  initialState,
  reducers: {
    setProductDetails: (state, action) => {
      state.choosedProduct = action.payload;
    },
    setStages: (state, action) => {
      state.stages = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setProductDetails, setStages } = productSlice.actions;

export default productSlice.reducer;
