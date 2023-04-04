import React from "react";
import { Link } from "react-router-dom";
import Banner from "../../assets/banner.png";

const Home = () => {
  return (
    <>
      <div className="banne">
        <div className="container">
          <div className="main-banner h-[90vh] md:grid grid-cols-2 content-center">
            <div className="text grid place-content-center">
              <p className="offer-info mb-12 text-[#FF9900]">
                Sale up to 70% off
              </p>
              <div className="hero-text">
                <h1 className="text-[60px] font-extrabold leading-none">
                  New Collection For Fall
                </h1>
                <p className="slogan text-[20px] mb-12">
                  Discover all the new arrivals of ready-to-wear collection.
                </p>
              </div>
              <div className="btn-primary">
                <Link to={"/shop"}>
                  {" "}
                  <button className="py-3 px-3 bg-amber-500 text-white rounded-md hover:bg-amber-600">
                    SHOP NOW
                  </button>
                </Link>
              </div>
            </div>
            <div className="banner grid place-content-end">
              <div className="images relative">
                <img src={Banner} alt="" />
                <div className="shadow absolute z-[-1] top-4 right-4 bg-[#FFE0B3] w-full h-full rounded-lg "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
