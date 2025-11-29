// src/pages/legal/Terms.js
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Terms = () => {
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
          Terms of Service
        </h1>

        <p className="service-text" style={{ lineHeight: "1.7", fontSize: "1.2rem" }}>
          By accessing SIFERNEX AI’s website, you agree to the following basic terms.
          These terms ensure safe use of our content and protect both the user and
          our platform.
        </p>

        <h3 style={{ color: "#C4B5FD", marginTop: "40px" }}>Use of Our Website</h3>
        <p className="service-text" style={{ lineHeight: "1.7" }}>
          The content on this website is for informational purposes only. You agree
          not to misuse, copy, or redistribute any content without permission.
        </p>

        <h3 style={{ color: "#C4B5FD", marginTop: "40px" }}>Service Information</h3>
        <p className="service-text" style={{ lineHeight: "1.7" }}>
          Descriptions of our services are subject to improvement or change. Using
          the information on this site does not guarantee outcomes, results, or
          service availability.
        </p>

        <h3 style={{ color: "#C4B5FD", marginTop: "40px" }}>Limitation of Liability</h3>
        <p className="service-text" style={{ lineHeight: "1.7" }}>
          SIFERNEX AI is not responsible for any losses or damages resulting from
          the use of our website, reliance on information, or technical issues.
        </p>

        <h3 style={{ color: "#C4B5FD", marginTop: "40px" }}>Changes to Terms</h3>
        <p className="service-text" style={{ lineHeight: "1.7" }}>
          We may update these Terms occasionally. Continued use of the website
          means you accept any updated version.
        </p>
      </div>

      <Footer />
    </>
  );
};

export default Terms;
