// src/pages/Services.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer"; // <-- ADDED

const services = [
  {
    title: "AI Chatbot & Virtual Assistant Development",
    tagline: "24/7 Customer Engagement on Autopilot",
    path: "/service/chatbot",
    icon: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600"
  },
  {
    title: "Intelligent Document Processing & Automation",
    tagline: "Turn Paperwork into Data in Seconds",
    path: "/service/document",
    icon: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600"
  },
  {
    title: "AI-Powered Business Workflow Automation",
    tagline: "Automate Repetitive Tasks, Multiply Your Output",
    path: "/service/workflow",
    icon: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600"
  },
  {
    title: "Custom AI Agent Development for Sales & Operations",
    tagline: "Your Digital Workforce That Never Sleeps",
    path: "/service/agent",
    icon: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600"
  }
];

const Services = () => {
  return (
    <>
      <Navbar />

      <div
        style={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #0F0F19 0%, #1A0F2E 100%)',
          paddingTop: '140px',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1
            className="banner-title"
            style={{ fontSize: '5.8rem', fontWeight: '900', marginBottom: '20px' }}
          >
            Our AI Services
          </h1>

          <p style={{ fontSize: '2.1rem', color: '#E0B3FF' }}>
            We build the future of intelligent automation
          </p>
        </motion.div>

        <div
          className="services-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '60px',
            padding: '100px 8%',
            maxWidth: '1700px',
            margin: '0 auto',
          }}
        >
          {services.map((s, i) => (
            <Link key={i} to={s.path} style={{ textDecoration: 'none' }}>
              <motion.div
                className="service-card"
                whileHover={{ y: -25, boxShadow: '0 40px 80px rgba(109, 40, 217, 0.6)' }}
                style={{
                  background: 'rgba(26, 15, 46, 0.75)',
                  borderRadius: '32px',
                  padding: '60px 40px',
                  textAlign: 'center',
                  border: '1px solid rgba(109, 40, 217, 0.5)',
                  backdropFilter: 'blur(15px)',
                }}
              >
                <motion.div
                  whileHover={{ rotateY: 180 }}
                  transition={{ duration: 0.7 }}
                  style={{
                    width: '140px',
                    height: '140px',
                    borderRadius: '50%',
                    margin: '0 auto 35px',
                    backgroundImage: `url(${s.icon})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    border: '5px solid #A78BFA',
                    boxShadow: '0 0 40px rgba(167, 139, 250, 0.5)',
                  }}
                />

                <h3 style={{ fontSize: '2rem', margin: '25px 0', color: 'white' }}>
                  {s.title}
                </h3>

                <p
                  className="service-text"
                  style={{ color: '#C4B5FD', fontSize: '1.3rem', fontStyle: 'italic' }}
                >
                  {s.tagline}
                </p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />  {/* <-- ADDED */}
    </>
  );
};

export default Services;
