import React from "react";
import HomeContent from "../components/home_content/HomeContent";
import Footer from "../components/footer/Footer";
import HomeNavbar from "../components/navbar/home_navbar/HomeNavbar";
function Home() {
  return (
    <>
      <HomeNavbar />
      <HomeContent />
      <Footer/>
    </>
  );
}

export default Home;
