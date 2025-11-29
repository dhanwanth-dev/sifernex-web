// src/pages/legal/Privacy.js
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Privacy = () => {
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
          Privacy Policy
        </h1>

        <p className="service-text" style={{ lineHeight: "1.7", fontSize: "1.2rem" }}>
          At SIFERNEX AI, we respect your privacy and are committed to protecting
          any information you choose to share with us. This Privacy Policy explains
          how we handle basic information collected through our website.
        </p>

        <h3 style={{ color: "#C4B5FD", marginTop: "40px" }}>Information We Collect</h3>
        <p className="service-text" style={{ lineHeight: "1.7" }}>
          Our website is currently informational. We do not collect personal data
          unless you choose to contact us directly via email or phone. In that case,
          we only receive the information you voluntarily provide.
        </p>

        <h3 style={{ color: "#C4B5FD", marginTop: "40px" }}>How We Use Your Information</h3>
        <p className="service-text" style={{ lineHeight: "1.7" }}>
          Any information you share with us is used solely to communicate with you,
          respond to inquiries, or provide requested service details.  
          We do not sell, share, or rent your data to third parties.
        </p>

        <h3 style={{ color: "#C4B5FD", marginTop: "40px" }}>Cookies & Tracking</h3>
        <p className="service-text" style={{ lineHeight: "1.7" }}>
          Our website does not use cookies or tracking tools at this time. If this
          changes in the future, this policy will be updated.
        </p>

        <h3 style={{ color: "#C4B5FD", marginTop: "40px" }}>External Links</h3>
        <p className="service-text" style={{ lineHeight: "1.7" }}>
          Our site may contain links to external websites. We are not responsible
          for the content or privacy practices of those websites.
        </p>

        <h3 style={{ color: "#C4B5FD", marginTop: "40px" }}>Contact Us</h3>
        <p className="service-text" style={{ lineHeight: "1.7" }}>
          For any privacy concerns, you can contact us at:
          <br />
          <a href="mailto:dhanwanth@sifernex.com" style={{ color: "#C4B5FD" }}>
            dhanwanth@sifernex.com
          </a>
        </p>
      </div>

      <Footer />
    </>
  );
};

export default Privacy;
