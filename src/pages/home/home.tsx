import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  Select,
  FilterContainer,
  Footer,
  Pagination,
  FilterOffcanvas,
  HomeProductListSkeleton,
} from "@components";
import { sortStyle } from "@utils";
import "./home.scss";
import { Layout } from "@common";
import { useNavigate } from "react-router-dom";
import Frock1 from "@assets/collections/frock1.png";
import Frock2 from "@assets/collections/frock2.png";
import Frock3 from "@assets/collections/frock3.png";
import Frock4 from "@assets/collections/frock4.png";
import { useDispatch } from "react-redux";
import { setProductDetails } from "@redux/slices/productSlice";
import Filter from "@assets/icons/filter.svg";
const allCollections = [
  {
    id: "1",
    name: "stylish Frock",
    code: "A100",
    mrp: "1500",
    discount: 20,
    sellingPrice: 800,
    ratings: {
      score: "4.5",
      reviews: 10,
      total: 20,
    },
    sizes: ["xl", "m"],
    colors: ["red", "green"],
    availableStock: 100,
    addedDate: "Thu Jun 22 2023 23:41:05 GMT+0530",
    details: {
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ",
      productStory:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",

      sub: {
        "Features & benefits": [
          "dryCELL: Performance technology designed to wick moisture from the body and keep you free of sweat during exercise",
          "Recycled Content: Made with at least 20% recycled material as a step toward a better future",
        ],
        details: [
          "Regular fit",
          "Crew neck",
          "Shirt-tail hem finish",
          " graphic print on chest",
          " Cat Logo on back neck",
        ],
        materialInfo: ["Shell: 50% polyester, 25% viscose, 25% cotton"],
        careInstructions: [
          "Do not iron print",
          "Do not use fabric softener",
          "Wash with similar colours",
          "Wash garment inside out",
          "Use only mild detergent",
        ],
      },
    },
    images: [Frock1, Frock2, Frock3, Frock4],
    src: Frock1,
  },
];

const Home: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [loading, setLoading] = useState(true);
  const [sortOption, setSortOption] = useState({
    label: "Best seller",
    value: "b",
  });
  const onProductView = (product: object) => {
    dispatch(setProductDetails(product));
    navigate("/viewProduct");
  };
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });
  return (
    <React.Fragment>
      <Layout>
        <section
          id="home"
          className="bg-img1 d-flex justify-content-center flex-column align-items-center px-lg-5 px-4 text-white"
        >
          <h1 className="text-center font-bold">
            Find your fit, find your style, <br /> find it here!
          </h1>
        </section>
        <Container className="hContainer px-lg-5 px-3 py-80">
          <Row className="justify-content-center align-items-center txt-p1">
            <h2 className="text-center">Collection Title</h2>
          </Row>
          <Row className="align-items-center mt-3">
            <Col xs="6" className="d-xl-none" onClick={handleShow}>
              <img src={Filter} alt="filter" />
            </Col>
            <Col
              xs="6"
              lg="12"
              className="d-flex justify-content-end align-items-center"
            >
              <span className="w-fit-content txt-p2">Sort By |</span>
              <Select
                options={[
                  { label: "Best Seller", value: "b" },
                  { label: "Latest", value: "a" },
                ]}
                value={sortOption}
                onChange={(e) => setSortOption(e)}
                styles={sortStyle}
                // isSearchable={false}
              />
            </Col>
          </Row>
          <Row className="b2 mb-5 mt-5 pb-5">
            <Col xl="3" className="d-none d-xl-block px-0">
              <FilterContainer />
            </Col>
            <Col xl="8" xs="12" className="px-0">
              <Container className="hContainer">
                <Row className="justify-content-evenly ">
                  {allCollections.map((product, i) =>
                    loading ? (
                      [...Array(9)].map(() => <HomeProductListSkeleton />)
                    ) : (
                      <div
                        className="wFit d-flex flex-column align-items-center mb-4"
                        key={i}
                        onClick={() => onProductView(product)}
                      >
                        <img
                          alt="img"
                          src={product.src}
                          style={{ width: "269px", height: "400px" }}
                          className="img"
                        />

                        <p className="txt-p1 fw-bold m-0 mt-2">
                          {product.name}
                        </p>
                        <span className="txt-p1 fw-bold font-bold">
                          {product.sellingPrice} Rs
                        </span>
                      </div>
                    )
                  )}
                </Row>
              </Container>
            </Col>
          </Row>
          <Pagination totalCount={50} showCount={7} />
        </Container>
      </Layout>
      <FilterOffcanvas
        placement="start"
        name="start"
        handleShow={handleShow}
        handleClose={handleClose}
        show={show}
      />
    </React.Fragment>
  );
};

export default Home;
