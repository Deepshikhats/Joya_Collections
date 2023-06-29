import React, { useEffect, useState } from "react";
import { ProductFeaturesLoader } from "@components";
import Img1 from "@assets/images/img1.jpg";
import Img2 from "@assets/images/img2.jpg";
import Img3 from "@assets/images/img3.jpg";
import Img4 from "@assets/images/models.jpg";

const products = [
  { image: Img1, title: "Quick Dry Unisex Running Cap", price: "Rs 400" },
  { image: Img2, title: "Quick Dry Unisex Running Cap", price: "Rs 400" },
  { image: Img3, title: "Quick Dry Unisex Running Cap", price: "Rs 400" },
  { image: Img4, title: "Quick Dry Unisex Running Cap", price: "Rs 400" },
  { image: Img1, title: "Quick Dry Unisex Running Cap", price: "Rs 400" },
  { image: Img2, title: "Quick Dry Unisex Running Cap", price: "Rs 400" },
  { image: Img3, title: "Quick Dry Unisex Running Cap", price: "Rs 400" },
  { image: Img4, title: "Quick Dry Unisex Running Cap", price: "Rs 400" },
];
const ProductList: React.FC = () => {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 6000);
  });
  return (
    <div className="mt-5">
      <h3>Recommented For You</h3>
      <div className="d-flex gap20 overflow-scroll py-3">
        {products.map((item, index) =>
          loading ? (
            <ProductFeaturesLoader />
          ) : (
            <div key={index}>
              <img
                src={item.image}
                alt=""
                style={{ height: "400px", width: "400px" }}
              />
              <div className="justify-content-between d-flex p-3">
                <h5 className="fs-6 txt-p1">{item.title}</h5>
                <span className="fs-6 fw-bold text-danger">{item.price}</span>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ProductList;
