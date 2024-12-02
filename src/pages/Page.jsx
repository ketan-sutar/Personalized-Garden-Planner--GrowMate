import React from "react";
import Homemain from "../components/Homemain";
import Tipsec from "../components/Tipsec";
import Featuresec from "../components/Featuresec";
import Toolsec from "../components/Toolsec";
import Footer from "../components/Footer";

const Page = () => {
  return (
    <>
      <section id="page1-sec" className="min-h-screen h-auto w-full overflow-y-auto">
        <Homemain />
        <Tipsec/>
        <Featuresec/>
        <Toolsec/>
        <Footer/>
      </section>
    </>
  );
};

export default Page;
