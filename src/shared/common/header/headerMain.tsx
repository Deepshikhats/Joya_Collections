import React, { ReactElement, useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import { Header, Input } from "@components";
import Cart from "@assets/icons/cart.svg";
import search from "@assets/images/search.png";
import Account from "@assets/images/account.png";
import { useSelector } from "react-redux";
import "./header.scss";
import { RootState } from "src/redux/store/store";
import { useNavigate } from "react-router-dom";
const HeaderMain: React.FC = (): ReactElement => {
  const navigate = useNavigate();
  const [toggleSearch, setToggleSearch] = useState(false);
  const { cartList } = useSelector((state: RootState) => state.cart);
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <Header>
      <Container>
        <Navbar.Brand href="/">Joya Collections</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />

        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-lg"
          aria-labelledby="offcanvasNavbarLabel-expand-lg"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="w-100 d-flex me-auto">
              <NavDropdown title="All Collection" id="collection-dropdown">
                <NavDropdown.Item href="#action/3.2" disabled>
                  Western Wear
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" disabled>
                  Trending
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.4" disabled>
                  Ethnic Wears
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Shop by Category"
                id="category-dropdown"
                className="lg:w-100 lg:position-absolute"
              >
                <NavDropdown.Item href="#action/3.1" disabled>
                  Sarees
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" disabled>
                  Kurthi
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" disabled>
                  Pants and palazo
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#">Order Tracking</Nav.Link>
              <Nav.Link href="#">Contact Us</Nav.Link>
            </Nav>
            <Nav className="d-flex align-items-lg-center">
              {!toggleSearch ? (
                <button
                  onClick={() => setToggleSearch(!toggleSearch)}
                  className="border-0 bg-transparent p-0"
                  style={{ width: "min-content" }}
                >
                  <img src={search} alt="search" className="images" />
                </button>
              ) : (
                <Input
                  type="text"
                  onChange={(e) => console.log(e)}
                  placeholder="Search here"
                  onBlur={() => setToggleSearch(false)}
                  autoFocus={true}
                  Righticon={true}
                />
              )}
              <Nav.Link href="/cart" className="position-relative">
                {localStorage.getItem("verified") ? (
                  <span className="bg-danger position-absolute  rounded-circle cartListNumber h-auto w-auto px-2 text-white">
                    {cartList.length}
                  </span>
                ) : (
                  ""
                )}
                <img src={Cart} alt="cart" className="images" />
              </Nav.Link>
              <NavDropdown
                title={<img src={Account} alt="account" className="images" />}
                id="profile_menu"
                className="lg:w-100 lg:position-absolute profile ms-2"
              >
                <NavDropdown.Item href="#action/3.1" disabled={true}>
                  Account
                </NavDropdown.Item>
                <NavDropdown.Item href="#disabled" disabled={true}>
                  Your Orders
                </NavDropdown.Item>
                <NavDropdown.Item href="/adminpanel">
                  Admin Panel
                </NavDropdown.Item>
                <NavDropdown.Item onClick={handleLogout}>
                  Logout
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.4"></NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Header>
  );
};

export default HeaderMain;
