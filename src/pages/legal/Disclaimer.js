// src/pages/legal/Disclaimer.js
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Disclaimer = () => {
  return (
    <>
      <Navbar />

      <div
        style={{
          minHeight: "100vh",
          padding: "120px 10% 80px",
          background: "linear-gradient(135deg, #0F0F19, #1A0F2E)",
          color: "white",
        }}
      >
        <h1
          className="banner-title"
          style={{
            fontSize: "3.4rem",
            marginBottom: "30px",
            background: "linear-gradient(90deg, #A78BFA, #ECBDFF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Disclaimer
        </h1>

        <p className="service-text" style={{ lineHeight: "1.7", fontSize: "1.2rem" }}>
          The information provided on SIFERNEX AI’s website is for general purposes
          only. While we aim to keep all content accurate and up-to-date, we make
          no guarantees regarding completeness, reliability, or accuracy.
        </p>

        <h3 style={{ color: "#C4B5FD", marginTop: "40px" }}>
          No Professional Advice
        </h3>
        <p className="service-text" style={{ lineHeight: "1.7" }}>
          Nothing on this website constitutes professional, legal, business, or
          technical advice. Any decisions you make based on our content are solely
          your responsibility.
        </p>

        <h3 style={{ color: "#C4B5FD", marginTop: "40px" }}>
          External Links
        </h3>
        <p className="service-text" style={{ lineHeight: "1.7" }}>
          Our website may include links to third-party sites. We are not responsible
          for their content, security, or privacy practices.
        </p>
      </div>

      <Footer />
    </>
  );
};

export default Disclaimer;
