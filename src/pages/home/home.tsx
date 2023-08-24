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
import { allCollections } from "@utils";
import { useDispatch } from "react-redux";
import { setProductDetails } from "@redux/slices/productSlice";
import Filter from "@assets/icons/filter.svg";

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
