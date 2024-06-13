import React, { useEffect, useState } from "react";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { LoadingPage } from "../../Elements/LoadingPage";
import CardsStats from "./CardsStats";
import MangeProducts from "./ManageProducts";
import Navbar from "../../Elements/header/Navbar";
import Footer from "../../Elements/footer/Footer";
import ScrollToTop from "../../Elements/ScrollToTop";
import AuthChecker from "../../authentification/AuthChecker";

export default function Dashboard() {
  const localhost = process.env.REACT_APP_LOCALHOST;
  const userID = localStorage.getItem('userID');
  const token = localStorage.getItem('token');
  const [isLoading, setIsLoading] = useState(true);
  const [cardData, setCardData] = useState([]);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    axios.get(`${localhost}/cardstats/${userID}`, { headers: { 'Authorization': `Bearer ${token}` } })
      .then((res) => {
        setCardData(res.data);
      })
      .catch((err) => console.error(err));
    axios.get(`${localhost}/vendorstats/${userID}`, { headers: { 'Authorization': `Bearer ${token}` } })
      .then((res) => {
        setTableData(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);


  if (isLoading) {
    return <LoadingPage />
  }
  return (
    <section className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-poppins">
      <AuthChecker/>
      <Toaster />
      <div className="min-h-screen">
        <Navbar />
        <ScrollToTop />
        <CardsStats dataCard={cardData} />
        <MangeProducts dataTable={tableData} />
      </div>
      <Footer />
    </section>
  );
}
