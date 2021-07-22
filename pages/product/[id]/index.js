import Head from "next/head";
import Image from "next/image";
import styles from "../../../styles/Home.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductDetailComponent from "../../../components/ProductDetailComponent"
import router from "next/router";
import { useRouter } from "next/router";


const domain = "http://127.0.0.1:8000/";


export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);
  const [arr, setArr] = useState(null);

  // NOTE Init
  useEffect(async () => {
    // LINK product variation details


    var product_id = null;
    if (id != undefined && id != null) {
      window.localStorage.setItem("product_id", id);
      product_id = id;
    } else {
      product_id = window.localStorage.getItem("product_id");
    }

    await getProduct(
      product_id,
      setProduct,
    );

    // LINK Array for amount of product this is a fix for bug
    var temp_arr = Array(100).fill(1);
    setArr(temp_arr);
  }, []);




  // NOTE Components
 
  return product == undefined || product == null ? (
    <div></div>
  ) : (
    <div className={styles.container}>
      <Head>
        <title>Truck Signs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
       <ProductDetailComponent product={product}/>
      </main>
    </div>
  );
}

// NOTE Helpers

const getProduct = async (
  id,
  setProduct
) => {

    const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

  const product_url = domain + `truck-signs/product-detail/${id}/`;
  axios
    .get(product_url, config)
    .then(async (res) => {
      const product = await res.data
      setProduct(product);
    })
    .catch((error) => {
      console.log(error);
    });
};