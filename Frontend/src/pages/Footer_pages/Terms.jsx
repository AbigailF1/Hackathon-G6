import React from 'react';
import './terms.css';

export default function Terms() {
  return (
    <div className="terms-container">
      <header>
        <h1>Terms and Conditions for Academate</h1>
      </header>
      <div className="content">
        <h2>Terms and Conditions</h2>
        <p>Please read these terms and conditions carefully before using our service.</p>

        <h3>Interpretations and Definitions</h3>
        <p>While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</p>
        
        <ul>
          <li>Email address</li>
          <li>First name and last name</li>
          <li>Usage data</li>
        </ul>

        <h4>Usage Data</h4>
        <p>Usage Data is collected automatically when using the Service...</p>

        <h4>Tracking Technologies and Cookies</h4>
        <p>We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information...</p>

        <h4>Use of Your Personal Data</h4>
        <p>The Company may use Personal Data for the following purposes:</p>
        <ul>
          <li>To provide and maintain our Service.</li>
          <li>To manage Your Account.</li>
          <li>For the performance of a contract.</li>
          <li>...</li>
        </ul>
       
      </div>
    </div>
  );
}
