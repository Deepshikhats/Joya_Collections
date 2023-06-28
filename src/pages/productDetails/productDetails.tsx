import React, { useEffect, useState } from "react";
import { Layout } from "@common";
import { Row, Col, Container } from "react-bootstrap";
import Star from "@assets/icons/star.svg";
import {
  Select,
  Button,
  ProductStory,
  ProductList,
  ProductDescriptionSkeleton,
  BasicSkeleton,
} from "@components";
import { baseStyles } from "@utils";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "src/redux/store/store";
import { addItemToCart } from "@redux/slices/cartSlice";
import { toast } from "react-toastify";
const Product: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setloading] = useState(true);
  const [choosedColor, setColor] = useState("");
  const [choosedSize, setChoosedSize] = useState("");
  const [count, setCount] = useState({ label: "1", value: 1 });
  const { choosedProduct } = useSelector((state: RootState) => state.product);
  const handleAddToCart = () => {
    const { id, src: image, name: title, code, sellingPrice } = choosedProduct;
    if (choosedColor && choosedSize) {
      dispatch(
        addItemToCart({
          id,
          title,
          image,
          code,
          sellingPrice,
          Size: choosedSize,
          Color: choosedColor,
        })
      );
      navigate("/cart");
      return;
    }
    choosedColor == ""
      ? toast.warn("Choose a color", {
          toastId: 1,
          autoClose: 500,
          hideProgressBar: true,
        })
      : toast.warn("Choose a size", {
          toastId: 2,
          autoClose: 500,
          hideProgressBar: true,
        });
  };
  const handleBuyNow = () => {
    // dispatch(addItemToCart(choosedProduct));
    navigate("/checkout");
  };
  const handleSizeSelection = (size: string) => {
    setChoosedSize(size);
  };
  const handleColorSelection = (color: string) => {
    setColor(color);
  };

  useEffect(() => {
    if (Object.keys(choosedProduct).length) {
      setTimeout(() => {
        setloading(false);
      }, 3000);
    }
  }, [choosedProduct]);

  return (
    <Layout>
      <Container className="hContainer px-lg-5 my-5 px-3">
        <Row className="justify-content-between mb-5">
          <Col xs={12} lg={5}>
            {loading ? (
              <BasicSkeleton height={600} />
            ) : (
              <img
                src={choosedProduct.images[0]}
                alt=""
                className="w-100"
                style={{ maxHeight: "600px" }}
              />
            )}
            <div className="d-flex gap20 mt-3">
              {loading ? (
                <BasicSkeleton
                  height={400}
                  width={"100%"}
                  containerClassName="flex-grow-1"
                />
              ) : (
                <img
                  src={choosedProduct.images[1]}
                  alt=""
                  className="w-50"
                  style={{ maxHeight: "600px" }}
                />
              )}
              {loading ? (
                <BasicSkeleton
                  height={400}
                  width={"100%"}
                  containerClassName="flex-grow-1"
                />
              ) : (
                <img
                  src={choosedProduct.images[2]}
                  alt=""
                  className="w-50"
                  style={{ maxHeight: "600px" }}
                />
              )}
            </div>
          </Col>
          <Col xs={12} lg={6} className="pt-lg-0 pt-5">
            {loading ? (
              <ProductDescriptionSkeleton />
            ) : (
              <>
                <h4>{choosedProduct?.code}</h4>
                <h2 className="fs-2">{choosedProduct?.name}</h2>
                <div>
                  <div className="d-flex fw-bold fs-4">
                    <span className="txt-p1">
                      Rs. {choosedProduct?.sellingPrice}
                    </span>
                    <span className="text-danger mx-2">
                      {choosedProduct?.mrp}
                    </span>
                    <span className="text-success ">
                      {choosedProduct?.discount}% discount
                    </span>
                  </div>
                  <span className="txt-p2">*GST Included</span>
                </div>
                <div className="d-flex gap20 align-items-center my-3">
                  <div className="bg-success d-flex justify-content-center align-items-center wFit rounded p-2">
                    <span className="text-white">
                      {choosedProduct?.ratings?.score}
                    </span>
                    <img src={Star} alt="rating_star" className="ms-1" />
                  </div>
                  <p className="fs-6 txt-p2 fw-semibold m-0">
                    {choosedProduct?.ratings?.total} ratings and{" "}
                    {choosedProduct?.ratings?.reviews} reviews
                  </p>
                </div>
                <div>
                  <span className="txt-p2 fs-6">Sizes</span>
                  <ul className="d-flex sizeList gap20 pointer mt-1 p-0">
                    {choosedProduct?.sizes?.map((size, index) => (
                      <li
                        key={index}
                        className={`${
                          choosedSize == size ? "borderBlack" : ""
                        } d-flex justify-content-center align-items-center`}
                        onClick={() => handleSizeSelection(size)}
                      >
                        {size}
                      </li>
                    ))}
                  </ul>
                  <span className="txt-p2 fs-6">Colors</span>
                  <ul className="d-flex colorList mt-1 p-0">
                    {choosedProduct?.colors?.map((color, index) => {
                      return (
                        <li
                          key={index}
                          onClick={() => handleColorSelection(color)}
                          style={{ background: color }}
                          className={`${
                            choosedColor === color ? "borderBlack" : ""
                          } d-flex justify-content-center align-items-center pointer rounded`}
                        ></li>
                      );
                    })}
                  </ul>
                </div>
                <div style={{ width: "70px" }}>
                  <Select
                    options={[
                      { label: "1", value: 1 },
                      { label: "2", value: 2 },
                      { label: "3", value: 3 },
                    ]}
                    value={count}
                    onChange={(e) => setCount(e)}
                    styles={baseStyles}
                    placeholder=""
                    isSearchable={false}
                  />
                </div>
                <div className="d-flex gap20  mt-3">
                  <Button
                    type="button"
                    onClick={handleAddToCart}
                    className="btnSecondary"
                  >
                    Add to Cart
                  </Button>
                  <Button
                    type="button"
                    className="bz1 btnPrimary"
                    onClick={handleBuyNow}
                  >
                    Buy Now
                  </Button>
                </div>

                <div className="mt-5">
                  <h4 className="fs-5">Description</h4>
                  <p className="txt-p2 fs-6">
                    {choosedProduct?.details?.description}
                  </p>
                  <ul>
                    <li>Style: 392758_02</li>
                    <li>Color: Nitro Blue-PUMA White</li>
                  </ul>
                  <a href="#product_story">Read More</a>
                </div>
                <div className="mt-3">
                  <h4>Shipping and Returns</h4>
                  <p className="fs-6 txt-p2">
                    Free standard delivery on all orders and free return for all
                    qualifying orders within 14 days of your order delivery
                    date. Visit our Return Policy for more information. For any
                    queries, please contact Customer Service at 080-999 or via
                    customercareindia.com .
                  </p>
                </div>
              </>
            )}
          </Col>
        </Row>
        <ProductStory story={choosedProduct.details} />
        <ProductList />
      </Container>
    </Layout>
  );
};

export default Product;
