// src/components/Footer.js
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      style={{
        background: "rgba(15, 15, 25, 0.96)",
        padding: "30px 10%",
        textAlign: "center",
        color: "white",
        borderTop: "1px solid rgba(167, 139, 250, 0.3)",
      }}
    >
      <h3
        style={{
          fontSize: "1.8rem",
          marginBottom: "12px",
          background: "linear-gradient(90deg, #A78BFA, #ECBDFF)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        SIFERNEX AI
      </h3>

      <div style={{ marginBottom: "18px", fontSize: "1.1rem" }}>
        <Link
          to="/legal/privacy"
          style={{ color: "#C4B5FD", marginRight: "16px", textDecoration: "none" }}
        >
          Privacy Policy
        </Link>

        <Link
          to="/legal/terms"
          style={{ color: "#C4B5FD", marginRight: "16px", textDecoration: "none" }}
        >
          Terms of Service
        </Link>

        <Link
          to="/legal/disclaimer"
          style={{ color: "#C4B5FD", textDecoration: "none" }}
        >
          Disclaimer
        </Link>
      </div>

      <p style={{ color: "#A78BFA", fontSize: "0.9rem" }}>
        © 2025 SIFERNEX AI. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
