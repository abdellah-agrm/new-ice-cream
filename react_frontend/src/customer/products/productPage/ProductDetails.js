import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { ChatFill, EyeFill } from "react-bootstrap-icons";
import { LoadingPage } from "../../../Elements/LoadingPage";
import Navbar from "../../../Elements/header/Navbar";
import Footer from "../../../Elements/footer/Footer";
import AddToCart from "./AddToCart";
import FavoriteBtn from "./FavoriteBtn";
import Reviews from "./reviews/Reviews";
import RatingStars from "../../../Elements/RatingStars";
import ViewsCounter from "../../../Elements/ViewsCounter";
import AuthChecker from "../../../authentification/AuthChecker";

export default function ProductDetails() {
  const { id } = useParams();
  const imglink = process.env.REACT_APP_LOCALHOST_IMG;
  const localhost = process.env.REACT_APP_LOCALHOST;
  const token = localStorage.getItem('token');
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(`${localhost}/vendor/products/${id}`, { headers: { 'Authorization': `Bearer ${token}` } })
      .then((res) => {
        setProduct(res.data[0]);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <section className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-poppins overflow-hidden">
      <AuthChecker/>
      <Navbar />
      <div className="container px-5 py-12 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="flex justify-center items-center lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded bg-cream-300">
            {
              product.Image ?
                (<img className="h-48 lg:h-60 sm:h-52 w-auto mx-auto" src={imglink + product.Image} alt={product.ProductName} />)
                : (<p className="text-white dark:text-gray-900 text-2xl font-medium">Not Found</p>)
            }
          </div>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 dark:text-gray-300 tracking-widest">Product Name</h2>
            <h1 className="text-3xl title-font capitalize font-medium mb-1">{product.ProductName}</h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <RatingStars rating={product.ProductRating} size={4} />
                <span className="text-gray-500 dark:text-gray-300 ml-2 mt-1">{product.ReviewsNb} Reviews</span>
              </span>
              <span className="flex ml-3 pl-3 py-2 space-x-2s">
                <EyeFill className="h-5 w-auto" /> <p className="text-sm leading-5 px-1 mr-3"> <ViewsCounter productID={product.ProductID} /></p>
                <ChatFill className="h-5 w-auto" /> <p className="text-sm leading-5 px-1"> {product.ReviewsNb}</p>
              </span>
            </div>
            <p className="leading-relaxed" style={{ minHeight: "10rem" }}>{product.ProductDetails}</p>

            <div className="flex justify-between w-full my-4 items-center pb-3 border-b-2 border-gray-100">
              <div className="flex items-center">
                <span className="mr-3 text-base font-normal">Stock</span>
                <div className="relative">
                  <p className={`font-semibold text-xl ${product.ProductStock < 1 ? "text-cream-600" : "text-green-500"}`}>{product.ProductStock < 1 ? "Sold out" : product.ProductStock}</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="mr-3 text-base font-normal">Size</span>
                <div className="relative">
                  <p className="font-semibold text-xl">{product.ProductSize}</p>
                </div>
              </div>
            </div>

            <div className="flex">
              <span className="title-font font-semibold text-2xl">${product.ProductPrice}</span>
              <AddToCart order={product} />
              <FavoriteBtn productID={product.ProductID} />
            </div>
          </div>
        </div>
      </div>
      <Reviews productID={product.ProductID} />
      <Footer />
    </section>
  )
}