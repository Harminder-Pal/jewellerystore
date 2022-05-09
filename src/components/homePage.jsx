import React from "react";
import HeaderSlider from "./headerSlider";
import Blogs from "./blogs";
import FeaturedProduct from "./featuredProducts";
import OurCollections from "./ourCollections";
import SaleBanner from "./saleBanner";
import WeddingRings from "./weddingandEngagments";
import BuyGifts from "./buyGifts";
import JewellryFooter from "./jewellryFooter";
import BuyNeckWear from "./buyNeck";
import OurPromises from "./ourPromises";
import LuxuryItem from "./luxuryItem";
import OurHappyCustomer from "./happyCustomer";
import Header from "./header";
export default function HomePage() {
  //console.log(process.env)
  return (

    <>
      <div>
    
        {/* <Header /> */}
        <HeaderSlider />
        <OurCollections />
        <FeaturedProduct />
        <SaleBanner />
        <LuxuryItem />
        <WeddingRings />
        <BuyGifts />
        <Blogs />
        <OurPromises />
        <BuyNeckWear />
        <OurHappyCustomer />
        {/* <JewellryFooter /> */}
        <script src="js/jquery-3.2.1.slim.min.js"></script>
        <script src="js/popper.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/custom.js"></script>
      </div>
    </>
  )
}