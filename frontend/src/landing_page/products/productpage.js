import React from "react";
import Hero from "./hero";
import Leftimage from "./leftimage";
import Rightimage from "./rightimage";
import Universe from "./universe";
import Footer from '../footer';
import Navbar from '../Navbar';
function productpage() {
    return ( 
        <>
        <Hero/>
        <Leftimage imageURL="media\images\kite.png"
  productname="Kite"
  productdescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
  trydemo=""
  learnMore=""
  googlePlay=""
  appStore=""/>


  <Rightimage productname="Console"
  imageURL="media\images\console.png"
  productdescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations"
  learnMore=""
   />


  <Leftimage imageURL="media\images\coin.png"
  productname="Coin"
  productdescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
  trydemo=""
  learnMore=""
  googlePlay=""
  appStore=""/>

 <Rightimage productname="Kite Connect API"
  imageURL="media\images\kiteconnect.png"
  productdescription="TBuild powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
  learnMore=""
   />

  <Leftimage imageURL="media\images\varsity.png"
  productname="Varsity mobile"
  productdescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go"
  trydemo=""
  learnMore=""
  googlePlay=""
  appStore=""/>
       <p className="text-center mt-5 mb-5">Want to know more about our technology stack? Check out the TradeNest.tech blog.</p>
        <Universe/>
        </>
     );
}

export default productpage;