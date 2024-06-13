import HeaderTop from "../../Elements/header/HeaderTop";
import Navbar from "../../Elements/header/Navbar";
import Hero from "./hero/hero";
import Qualities from "./middle/qualities";
import HomeProducts from "./middle/homeproducts";
import JoinUs from "./middle/JoinUs";
import StoryAroundUs from "./middle/StoryAroundUs";
import Footer from "../../Elements/footer/Footer";
import ContactUs from "./middle/ContactUs";
import { Toaster } from "react-hot-toast";
import AuthChecker from "../../authentification/AuthChecker";

export default function CustomerHome(){
  return(
    <section className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <AuthChecker/>
      <HeaderTop/>
      <Navbar/>
      <Toaster/>
      <Hero/>
      <Qualities/>
      <HomeProducts/>
      <JoinUs/>
      <StoryAroundUs/>
      <ContactUs/>
      <Footer/>
    </section>
  )
}