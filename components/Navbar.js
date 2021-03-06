import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import truckLogo from "../public/logos/Truck-Signs-logo.png";

import {
  Nav,
  Navbar,
  NavDropdown,
  Container,
  Form,
  FormControl,
  FormGroup,
  InputGroup,
  Button,
  Col,
  Row,
  ControlLabel,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import router from "next/router";

const NextNavbar = () => {
  return (

    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      className={styles.navbar}
    >
      <Container>

        <Navbar.Brand
          className={`navbar-brand d-lg-none ${styles.smallBrand}`}
          href="/"
        >
          {/* Truck Sings */}
          <Image
            src={truckLogo}
            alt="Logo not available"
            height="100px"
            width="150px"
            className={styles.brand_img}
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className={`m-auto ${styles.navbar_nav}`}>
            <Nav.Link className={styles.linkItem} href="/how-to">
              HOW TO
            </Nav.Link>
            <Nav.Link className={styles.linkItem} href="/">
              GET A SIGN
            </Nav.Link>
            <Navbar.Brand
              className={`d-none d-lg-block ${styles.brand}`}
              href="/"
            >
              <Image
                src={truckLogo}
                alt="Logo not available"
                height="150px"
                width="200px"
                className={styles.brand_img}
              />
            </Navbar.Brand>
            <Nav.Link className={styles.linkItem} href="/prices">
              PRICES
            </Nav.Link>
            <Nav.Link className={styles.linkItem} href="#footer">
              CONTACT US
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NextNavbar;
