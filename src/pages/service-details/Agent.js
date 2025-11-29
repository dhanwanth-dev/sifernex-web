// src/pages/service-details/Agent.js
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer"; // <-- ADDED

const Agent = () => {
  return (
    <>
      <Navbar />

      {/* Banner */}
      <div
        style={{
          height: "40vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200')",
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
            Custom AI Agents for Business
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
          AI Agents That Think, Act & Execute Tasks Autonomously.
        </h2>

        <p
          className="service-text"
          style={{
            fontSize: "1.25rem",
            lineHeight: "1.8",
            color: "#E2D9FF",
          }}
        >
          AI Agents are the next evolution of business automation. Unlike
          traditional chatbots, our agents can perform actions, connect with
          APIs, analyze data, make decisions, schedule tasks, generate reports,
          and function like digital employees who never sleep.
          <br /><br />
          They handle structured and unstructured tasks, integrate with existing
          business systems, and execute multi-step workflows without human input.
        </p>

        <h3 style={{ color: "#C4B5FD", marginTop: "40px" }}>What Our AI Agents Can Do</h3>
        <ul className="service-text" style={{ fontSize: "1.2rem", lineHeight: "2" }}>
          <li>Understand complex natural language instructions</li>
          <li>Perform tasks in CRM, email, spreadsheets & internal apps</li>
          <li>Schedule reminders, follow-ups and generate reports</li>
          <li>Fetch or update business data using APIs</li>
          <li>Monitor metrics and alert teams instantly</li>
          <li>Assist in operations, sales & support workflows</li>
        </ul>

        <h3 style={{ color: "#C4B5FD", marginTop: "40px" }}>Technology Behind Our Agents</h3>
        <ul className="service-text" style={{ fontSize: "1.2rem", lineHeight: "2" }}>
          <li>LLM-based decision engines (GPT, Llama, Mistral)</li>
          <li>Python automation frameworks</li>
          <li>API orchestration layers</li>
          <li>Vector memory for long-term context</li>
          <li>Real-time task execution modules</li>
        </ul>

        <h3 style={{ color: "#C4B5FD", marginTop: "40px" }}>Business Impact</h3>
        <ul className="service-text" style={{ fontSize: "1.2rem", lineHeight: "2" }}>
          <li>Save hundreds of work hours per month</li>
          <li>Reduce dependency on manual operations</li>
          <li>24/7 task execution without downtime</li>
          <li>Improve speed, accuracy & reliability</li>
          <li>Boost productivity across multiple departments</li>
        </ul>
      </div>

      <Footer /> {/* <-- FOOTER ADDED */}
    </>
  );
};

export default Agent;
