import React, { useEffect, useState } from "react";
import Delete from "@assets/icons/delete.svg";
import { OrderSummarySkeleton, Select } from "@components";
import { baseStyles } from "@utils";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "src/redux/store/store";
import { removeItemFromCart } from "@redux/slices/cartSlice";
interface propTypes {
  show: boolean;
  getTotalPrice: (fun: () => number) => void;
}
const OrderSummary: React.FC<propTypes> = (props) => {
  const { show, getTotalPrice } = props;
  const dispatch = useDispatch();
  const [loader, setloader] = useState(false);
  const { cartList } = useSelector((state: RootState) => state.cart);
  const [count, setCount] = useState({ label: "1", value: "1" });

  const handleDeleteProduct = (item: object) => {
    dispatch(removeItemFromCart(item));
  };
  //calculates the total amount of products in cartlist
  const calculateTotalAmount = () => {
    let totalPrice = 0;
    cartList.forEach((i) => {
      totalPrice = totalPrice + Number(i.sellingPrice);
    });
    return totalPrice;
  };
  useEffect(() => {
    getTotalPrice(calculateTotalAmount);
  }, [cartList]);

  return (
    <ul className={`orderSummary p-0 ${show && "d-block h-auto"}`}>
      {cartList.map((item, index) =>
        loader ? (
          <OrderSummarySkeleton />
        ) : (
          <li className="d-flex gap20 border1  mt-2 p-3" key={index}>
            <img
              src={item.image}
              alt="img1"
              style={{ width: "150px", height: "150px" }}
            />
            <div className="d-flex gap20 justify-content-between flex-grow-1">
              <div className="d-flex flex-column">
                <h4>{item.title}</h4>

                <p className="fs-6 txt-p2 m-0">
                  <span>Color:- </span>
                  <span>{item.Color}</span>
                </p>
                <p className="fs-6 txt-p2 m-0">
                  <span>Size:- </span>
                  <span>{item.Size}</span>
                </p>
                <p className="fs-6 txt-p2 m-0">
                  <span>code:- </span>
                  <span>{item.code}</span>
                </p>
                <div style={{ width: "70px" }} className="mt-2">
                  <Select
                    options={[
                      { label: "1", value: 1 },
                      { label: "2", value: 1 },
                      { label: "3", value: 3 },
                    ]}
                    value={count}
                    onChange={(e) => setCount(e)}
                    styles={baseStyles}
                    placeholder=""
                    isSearchable={false}
                  />
                </div>
              </div>
              <div className="d-flex flex-column align-items-end">
                <span className="text-danger fs-6 fw-bold mb-3">
                  Rs&nbsp;{item.sellingPrice}
                </span>
                <img
                  src={Delete}
                  alt="delete"
                  style={{ width: "20px", height: "20px" }}
                  onClick={() => handleDeleteProduct(item)}
                  className="pointer"
                />
              </div>
            </div>
          </li>
        )
      )}
    </ul>
  );
};

export default OrderSummary;
