// src/pages/service-details/Workflow.js
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer"; // <-- ADDED

const Workflow = () => {
  return (
    <>
      <Navbar />

      {/* Banner */}
      <div
        style={{
          height: "40vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200')",
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
            Workflow Automation & AI RPA
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
          style={{
            fontSize: "2rem",
            marginBottom: "25px",
            color: "#E0B3FF",
          }}
        >
          Automate Repetitive Tasks. Scale Operations Effortlessly.
        </h2>

        <p
          className="service-text"
          style={{
            fontSize: "1.25rem",
            lineHeight: "1.8",
            color: "#E2D9FF",
          }}
        >
          Modern businesses lose countless hours to repetitive, rule-based tasks.
          SIFERNEX AI builds intelligent workflow automation systems powered by
          AI + RPA that execute processes faster, cheaper, and with zero errors.
          <br /><br />
          Our automation solutions streamline customer support flows, lead
          management, backend processes, HR workflows, invoice cycles,
          documentation procedures, and more — freeing your team to focus on
          activities that truly matter.
        </p>

        <h3 style={{ color: "#C4B5FD", marginTop: "40px" }}>
          Workflows We Automate
        </h3>
        <ul className="service-text" style={{ fontSize: "1.2rem", lineHeight: "2" }}>
          <li>Customer support ticket triaging & responses</li>
          <li>Lead qualification, scoring & CRM updates</li>
          <li>Invoice extraction, validation & approval routing</li>
          <li>Employee onboarding & HR documentation workflows</li>
          <li>Automated reminders & approval notifications</li>
          <li>Email sorting, filtering & smart routing</li>
        </ul>

        <h3 style={{ color: "#C4B5FD", marginTop: "40px" }}>
          Our Automation Stack
        </h3>
        <ul className="service-text" style={{ fontSize: "1.2rem", lineHeight: "2" }}>
          <li>Python automation scripts & task runners</li>
          <li>RPA tools (Selenium, Puppeteer, API automation)</li>
          <li>AI decision engines built on LLMs</li>
          <li>Workflow builders with human-in-the-loop options</li>
          <li>Real-time integrations with third-party tools</li>
        </ul>

        <h3 style={{ color: "#C4B5FD", marginTop: "40px" }}>
          Why Companies Choose Us
        </h3>
        <ul className="service-text" style={{ fontSize: "1.2rem", lineHeight: "2" }}>
          <li>80–90% reduction in manual repetitive work</li>
          <li>24/7 continuous automation with no downtime</li>
          <li>Reduced operational cost & resource load</li>
          <li>Better accuracy and reliability than manual execution</li>
          <li>Faster cycle times → more output with same team size</li>
        </ul>
      </div>

      <Footer /> {/* <-- FOOTER ADDED */}
    </>
  );
};

export default Workflow;
