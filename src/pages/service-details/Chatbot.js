// src/pages/service-details/Chatbot.js
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer"; // <-- ADDED

const Chatbot = () => {
  return (
    <>
      <Navbar />

      {/* Banner */}
      <div
        style={{
          height: "40vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1200')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.55)",
            backdropFilter: "blur(2px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1
            className="banner-title"
            style={{
              fontSize: "4rem",
              color: "white",
              fontWeight: "900",
              letterSpacing: "-2px",
            }}
          >
            AI Chatbot Development
          </h1>
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          padding: "80px 10%",
          color: "white",
          background: "linear-gradient(135deg, #0F0F19, #1A0F2E)",
          minHeight: "60vh",
        }}
      >
        <h2
          className="banner-title"
          style={{ fontSize: "2rem", color: "#E0B3FF", marginBottom: "25px" }}
        >
          Smart, Conversational, and Business-Ready AI Assistants
        </h2>

        <p
          className="service-text"
          style={{
            fontSize: "1.25rem",
            lineHeight: "1.8",
            color: "#E2D9FF",
          }}
        >
          Modern customers expect instant responses and seamless support.
          Our AI Chatbots are built to understand natural language, engage
          meaningfully, provide solutions instantly, and automate your support
          and sales conversations — 24/7 without human intervention.
          <br /><br />
          These chatbots are trained specifically for your business, ensuring
          accurate, contextual, and professional responses across web, mobile,
          WhatsApp, CRM, and internal tools.
        </p>

        <h3 style={{ color: "#C4B5FD", marginTop: "40px" }}>
          What Our AI Chatbots Can Do
        </h3>
        <ul
          className="service-text"
          style={{ fontSize: "1.2rem", lineHeight: "2" }}
        >
          <li>Understand and reply to customer queries naturally</li>
          <li>Work 24/7 without breaks</li>
          <li>Integrate with CRM, WhatsApp, websites, and apps</li>
          <li>Perform business actions — bookings, updates, lead capture</li>
          <li>Learn from your business documents and product data</li>
        </ul>

        <h3 style={{ color: "#C4B5FD", marginTop: "40px" }}>
          Technologies Behind Our Chatbots
        </h3>
        <ul
          className="service-text"
          style={{ fontSize: "1.2rem", lineHeight: "2" }}
        >
          <li>GPT, Llama, Mistral-based conversational intelligence</li>
          <li>Custom NLP training for accuracy</li>
          <li>Vector memory for long-term understanding</li>
          <li>Real-time API integration for workflows</li>
        </ul>

        <h3 style={{ color: "#C4B5FD", marginTop: "40px" }}>
          Business Impact
        </h3>
        <ul
          className="service-text"
          style={{ fontSize: "1.2rem", lineHeight: "2" }}
        >
          <li>Reduce support costs by 60–80%</li>
          <li>Increase lead conversions</li>
          <li>Automate FAQs & process queries instantly</li>
          <li>Boost customer satisfaction</li>
        </ul>
      </div>

      <Footer /> {/* <-- FOOTER PLACED */}
    </>
  );
};

export default Chatbot;
