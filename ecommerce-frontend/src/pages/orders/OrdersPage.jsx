import axios from "axios";

import { Header } from "../../components/Header";
import "./OrdersPage.css";
import { useEffect, useState } from "react";
import { OrdersGrid } from "./OrdersGrid";

export function OrdersPage({ cart, loadCart }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrdersData = async () => {
      const response = await axios.get("api/orders?expand=products");
      setOrders(response.data);
    };
    fetchOrdersData();
  }, []);

  // useEffect(() => {
  //   axios.get("api/orders?expand=products").then((response) => {
  //     setOrders(response.data);
  //   });
  // }, []);
  return (
    <>
      <title>Orders</title>
      <link rel="icon" type="image/svg+xml" href="orders-favicon.png" />
      <Header cart={cart} loadCart={loadCart} />
      <div className="orders-page">
        <div className="page-title">Your Orders</div>
        <OrdersGrid orders={orders} loadCart={loadCart} />
      </div>
    </>
  );
}
