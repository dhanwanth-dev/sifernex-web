// src/pages/Home.js
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer"; // <-- ADDED

const Home = () => {
  const section2Ref = useRef(null);

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section
        className="hero-section"
        style={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #0F0F19 0%, #1A0F2E 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '0 10%',
          position: 'relative',
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          style={{ marginTop: '80px' }}
        >
          <motion.h1
            className="hero-title"
            style={{
              fontSize: '5rem',
              fontWeight: '900',
              letterSpacing: '-3px',
              margin: 0,
              background: 'linear-gradient(90deg, #A78BFA, #C4B5FD, #ECBDFF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: '1.1',
            }}
          >
            {'SIFERNEX AI'.split('').map((l, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.7 }}
              >
                {l === ' ' ? '\u00A0' : l}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            style={{
              fontSize: '1.8rem',
              color: '#FFFFFF',
              margin: '25px 0 15px',
              fontWeight: '400'
            }}
          >
            Intelligent Automation. Future-Ready AI Solutions.
          </motion.p>

          <motion.p
            className="hero-main-text"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            style={{
              fontSize: '3rem',
              fontWeight: '800',
              background: 'linear-gradient(90deg, #C4B5FD, #ECBDFF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            We make your <span style={{ fontStyle: 'italic', color: 'white' }}>work</span> easier
            with intelligent <span style={{ fontStyle: 'italic', color: 'white' }}>Automation</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2 }}
          >
            <Link to="/services">
              <motion.button
                className="hero-button"
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: 'linear-gradient(90deg, #6D28D9, #A78BFA)',
                  color: 'white',
                  padding: '28px 80px',
                  fontSize: '1.9rem',
                  fontWeight: '700',
                  border: 'none',
                  borderRadius: '80px',
                  cursor: 'pointer',
                  boxShadow: '0 25px 70px rgba(109, 40, 217, 0.7)',
                  marginTop: '70px',
                }}
              >
                Explore Services
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* 3D SECTION */}
      <section
        ref={section2Ref}
        className="spline-section"
        style={{ height: '100vh', position: 'relative', overflow: 'hidden' }}
      >
        <Spline
          scene="https://prod.spline.design/475k08U9mDaI1fLF/scene.splinecode"
          style={{ width: '100%', height: '100%', transform: 'scale(1.1)' }}
        />
      </section>

      <Footer />  {/* <-- ADDED */}
    </>
  );
};

export default Home;
