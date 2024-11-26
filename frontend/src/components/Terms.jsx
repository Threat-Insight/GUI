import React from "react";
import "../css/components-css/Terms.css";
import { IoIosArrowRoundForward } from "react-icons/io";

const Terms = () => {
  return (
    <>
      <div className="scan-logs">
        <h2 className="logs-header" style={{ marginBottom: "12px" }}>
          Terms of use
        </h2>
      </div>
      <div className="terms-content">
        <p className="effective-date" style={{ marginBottom: "24px" }}>
          Effective Date: <span> 25 July 2024</span>
        </p>
        <p className="welcome" style={{ marginBottom: "24px" }}>
          Welcome to Threat Insight ("we," "us," or "our"). By accessing or
          using our online phishing URL detection system (the "Service"), you
          agree to comply with and be bound by the following Terms of Use (the
          "Terms"). Please read these Terms carefully before using our Service.
        </p>
        <p className="terms-header">1. Acceptance of Terms</p>
        <p className="term-margin">
          By using our Service, you acknowledge that you have read, understood,
          and agree to be bound by these Terms. If you do not agree with any
          part of these Terms, you must not use our Service.
        </p>
        <p className="terms-header">2. Use of Service</p>
        <p className="term-margin">
          You may use our Service solely for lawful purposes and in accordance
          with these Terms. You agree not to:
          <ul className="use-service">
            <li>
              <IoIosArrowRoundForward className="service-icon" />
              Use the Service in any way that violates applicable laws or
              regulations.
            </li>
            <li>
              <IoIosArrowRoundForward className="service-icon" />
              Disrupt or interfere with the operation of the Service or its
              security features.
            </li>
            <li>
              <IoIosArrowRoundForward className="service-icon" />
              Use the Service to engage in any fraudulent, deceptive, or
              malicious activities.
            </li>
          </ul>
        </p>
        <p className="terms-header">4. Intellectual Property</p>
        <p className="term-margin">
          All content and materials provided through the Service, including but
          not limited to text, graphics, logos, and software, are the property
          of Threat Insight or its licensors and are protected by copyright,
          trademark, and other intellectual property laws. You may not use,
          reproduce, or distribute any content from the Service without our
          prior written permission.
        </p>
        <p className="terms-header">5. Limitation of Liability</p>
        <p className="term-margin">
          Our Service is provided "as is" and "as available" without any
          warranties of any kind, either express or implied. We do not warrant
          that the Service will be uninterrupted, error-free, or free of viruses
          or other harmful components. To the maximum extent permitted by law,
          we disclaim all liability for any damages arising from the use or
          inability to use the Service.
        </p>
        <p className="terms-header">6. Indemnification</p>
        <p className="term-margin">
          You agree to indemnify, defend, and hold harmless Threat Insight and
          its affiliates, officers, directors, employees, and agents from and
          against any claims, liabilities, damages, losses, and expenses
          (including reasonable attorneys' fees) arising out of or in connection
          with your use of the Service or violation of these Terms.
        </p>
        <p className="terms-header">7. Modification of Terms</p>
        <p className="term-margin">
          We reserve the right to modify these Terms at any time. Any changes
          will be effective immediately upon posting on our website. Your
          continued use of the Service after any modifications constitutes your
          acceptance of the revised Terms.
        </p>
        <p className="terms-header">8. Termination</p>
        <p className="term-margin">
          We may terminate or suspend your access to the Service at our sole
          discretion, without prior notice or liability, if you breach these
          Terms or if we believe such action is necessary to protect the Service
          or our users.
        </p>
        <p className="terms-header">9. Governing Law</p>
        <p className="term-margin">
          These Terms are governed by and construed in accordance with the laws
          of India, without regard to its conflict of law principles. Any
          disputes arising out of or in connection with these Terms will be
          subject to the exclusive jurisdiction of the courts located in
          Mathura, India.
        </p>
      </div>
    </>
  );
};

export default Terms;
