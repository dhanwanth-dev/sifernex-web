// src/pages/Contact.js
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <>
      <Navbar />

      <div
        style={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #0F0F19 0%, #1A0F2E 100%)',
          paddingTop: '180px',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h1
            className="banner-title"
            style={{
              fontSize: '6rem',
              fontWeight: '900',
              background: 'linear-gradient(90deg, #A78BFA, #ECBDFF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Let's Build Together
          </h1>

          {/* CLICKABLE EMAIL */}
          <p
            style={{
              fontSize: '2.4rem',
              margin: '50px 0 20px',
            }}
          >
            <a
              href="mailto:dhanwanth@sifernex.com"
              style={{
                color: '#C4B5FD',
                textDecoration: 'none',
                fontWeight: '500'
              }}
            >
              dhanwanth@sifernex.com
            </a>
          </p>

          {/* CLICKABLE PHONE NUMBER */}
          <p
            style={{
              fontSize: '2.2rem',
              marginBottom: '40px',
            }}
          >
            <a
              href="tel:+918111030284"
              style={{
                color: '#C4B5FD',
                textDecoration: 'none',
                fontWeight: '500'
              }}
            >
              +91 81110 30284
            </a>
          </p>

          <p
            style={{
              fontSize: '1.6rem',
              color: '#A78BFA'
            }}
          >
            We reply within 24 hours — usually much faster
          </p>
        </motion.div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
