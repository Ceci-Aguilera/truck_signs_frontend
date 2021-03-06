import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Footer.module.css";
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

const Footer = () => {
  return (
    <footer id="footer" className={styles.footer}>
        <Row className={styles.footerWrapper}>
      <Container className={styles.footerWrapper}>
          <p className={styles.p}>
            Copyright &copy; 2021 Signs for Trucks All Rights Reserved
          </p>
          <Link href="/">
            <a className={styles.footerLink}>Privacy Policy</a>
          </Link>{" "}
          <Link href="/">
            <a className={styles.footerLink}>Terms</a>
          </Link>{" "}
      </Container>
        </Row>
        <Row className={styles.contactUsRow}>
          <p className={styles.contactUsP}>
            Contact us at Signsfortrucks@gmail.com
          </p>
        </Row>

        <Row className={styles.developer_row}>
          <p className={styles.p}>
            Developed by Cecilia Fernandez Aguilera
          </p>
        </Row>
    </footer>
  );
};

export default Footer;
