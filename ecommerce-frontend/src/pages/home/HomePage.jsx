import axios from "axios";
import { Header } from "../../components/Header";
import "../home/HomePage.css";
import { useEffect, useState } from "react";

import { ProductsGrid } from "./ProductsGrid";

export function HomePage({ cart }) {
  // fetch("http://localhost:3000/api/products").then((response) => {
  //   response.json().then((data) => {
  //     console.log(data);
  //   });
  // });
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getHomeData = async () => {
      const response = await axios.get("/api/products");
      setProducts(response.data);
    };
    getHomeData();
  }, []);

  return (
    <>
      <title>Ecommerce Project</title>
      <link rel="icon" type="image/svg+xml" href="home-favicon.png" />

      <Header cart={cart} />

      <div className="home-page">
        <ProductsGrid products={products} />
      </div>
    </>
  );
}
