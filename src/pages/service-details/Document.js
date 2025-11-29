// src/pages/service-details/Document.js
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer"; // <-- ADDED

const Document = () => {
  return (
    <>
      <Navbar />

      {/* Banner */}
      <div
        style={{
          height: "40vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200')",
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
            Intelligent Document Processing (IDP)
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
          Transform Documents Into Actionable Data — Instantly.
        </h2>

        <p
          className="service-text"
          style={{ fontSize: "1.25rem", lineHeight: "1.8", color: "#E2D9FF" }}
        >
          Manual document processing slows down businesses. SIFERNEX AI builds
          fully automated Intelligent Document Processing (IDP) systems that read,
          extract, validate, and structure information from any document with
          near-human accuracy.
          <br /><br />
          Whether you handle invoices, forms, contracts, identity proofs, medical
          reports, handwritten content, or multi-page PDFs — our machine learning
          systems convert them into clean, usable, structured digital data in
          seconds.
        </p>

        <h3 style={{ color: "#C4B5FD", marginTop: "40px" }}>What Our IDP System Can Do</h3>
        <ul className="service-text" style={{ fontSize: "1.2rem", lineHeight: "2" }}>
          <li>Extract text, tables, signatures, checkboxes & handwriting</li>
          <li>Auto-validate data using AI business rules</li>
          <li>Process invoices, KYC docs, forms, contracts & receipts</li>
          <li>Enhance poor-quality scans (blur, noise, shadows)</li>
          <li>Detect document fraud or tampering</li>
        </ul>

        <h3 style={{ color: "#C4B5FD", marginTop: "40px" }}>Technologies We Use</h3>
        <ul className="service-text" style={{ fontSize: "1.2rem", lineHeight: "2" }}>
          <li>OCR Engines (Tesseract, EasyOCR)</li>
          <li>Deep Learning (LayoutLM, Donut, Document Transformers)</li>
          <li>Custom ML Pipelines for extraction</li>
          <li>Computer Vision for layout understanding</li>
          <li>LLMs for semantic interpretation</li>
        </ul>

        <h3 style={{ color: "#C4B5FD", marginTop: "40px" }}>Business Benefits</h3>
        <ul className="service-text" style={{ fontSize: "1.2rem", lineHeight: "2" }}>
          <li>Reduce manual work by 85%+</li>
          <li>Eliminate human errors and delays</li>
          <li>Process large batches instantly</li>
          <li>Automate compliance and verification</li>
          <li>Speed up onboarding and workflows</li>
        </ul>
      </div>

      <Footer /> {/* <-- FOOTER PLACED */}
    </>
  );
};

export default Document;
