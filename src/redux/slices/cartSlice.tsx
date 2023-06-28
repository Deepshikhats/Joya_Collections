import { createSlice } from "@reduxjs/toolkit";
import Img1 from "@assets/images/img1.jpg";
import Img2 from "@assets/images/img2.jpg";
import Img3 from "@assets/images/img3.jpg";

export interface CartSlice {
  cartList: {
    id: string;
    title: string;
    image: string;
    Color: string;
    Size: string;
    code: string;
    sellingPrice: string;
  }[];
}

const initialState: CartSlice = {
  cartList: [
    {
      id: "1",
      image: Img1,
      title: "PUMA FIT Logo Training Women's T-Shirt",
      Color: "red",
      Size: "M",
      code: "AE1200",
      sellingPrice: "1000",
    },
    {
      id: "2",
      image: Img2,
      title: "PUMA FIT Logo Training Women's T-Shirt",
      Color: "red",
      Size: "M",
      code: "AE1200",
      sellingPrice: "1000",
    },
    {
      id: "3",
      image: Img3,
      title: "PUMA FIT Logo Training Women's T-Shirt",
      Color: "red",
      Size: "M",
      code: "AE1200",
      sellingPrice: "1000",
    },
  ],
};

export const productSlice = createSlice({
  name: "cartList",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const { id, src: image, name: title } = action.payload;
      state.cartList = [action.payload, ...state.cartList];
    },
    removeItemFromCart: (state, action) => {
      state.cartList = state.cartList.filter(
        (item) => item.id != action.payload.id
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItemToCart, removeItemFromCart } = productSlice.actions;

export default productSlice.reducer;
