// src/pages/NotFound.js
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <>
      <Navbar />

      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #0F0F19 0%, #1A0F2E 100%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "20px",
          color: "white",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            fontSize: "8rem",
            fontWeight: "900",
            marginBottom: "10px",
            background: "linear-gradient(90deg, #A78BFA, #ECBDFF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          404
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          style={{
            fontSize: "2.5rem",
            color: "#C4B5FD",
            marginBottom: "20px",
          }}
        >
          Page Not Found
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          style={{
            fontSize: "1.3rem",
            color: "#E2D9FF",
            maxWidth: "600px",
            marginBottom: "40px",
          }}
        >
          The page you’re looking for doesn’t exist or has been moved.  
          Let’s get you back on track.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <Link to="/">
            <button
              style={{
                background: "linear-gradient(90deg, #6D28D9, #A78BFA)",
                color: "white",
                padding: "18px 50px",
                fontSize: "1.4rem",
                border: "none",
                borderRadius: "40px",
                cursor: "pointer",
                boxShadow: "0 15px 40px rgba(109, 40, 217, 0.6)",
              }}
            >
              Back to Home
            </button>
          </Link>
        </motion.div>
      </div>

      <Footer />
    </>
  );
};

export default NotFound;
