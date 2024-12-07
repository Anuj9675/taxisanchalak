import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-gray-700 mb-6 leading-relaxed">
        At <strong>Taxi Chalak</strong>, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our services.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">1. Information We Collect</h2>
        <p className="text-gray-700 leading-relaxed">
          We collect the following types of information:
        </p>
        <ul className="list-disc pl-6 text-gray-700 leading-relaxed">
          <li><strong>Personal Information:</strong> Name, contact details, and payment information provided during registration or booking.</li>
          <li><strong>Usage Data:</strong> Information about how you interact with our website and services, such as IP address, browser type, and access times.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">2. How We Use Your Information</h2>
        <p className="text-gray-700 leading-relaxed">
          Your data is used to:
        </p>
        <ul className="list-disc pl-6 text-gray-700 leading-relaxed">
          <li>Facilitate bookings and provide our services.</li>
          <li>Communicate with you regarding your bookings, updates, and offers.</li>
          <li>Improve our platform and user experience.</li>
          <li>Ensure the security and integrity of our services.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">3. Sharing of Information</h2>
        <p className="text-gray-700 leading-relaxed">
          We do not sell or rent your personal information to third parties. However, we may share your data with:
        </p>
        <ul className="list-disc pl-6 text-gray-700 leading-relaxed">
          <li>Drivers or service providers for booking purposes.</li>
          <li>Third-party vendors that assist with payment processing or analytics.</li>
          <li>Legal authorities, if required by law or to protect our rights.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">4. Data Security</h2>
        <p className="text-gray-700 leading-relaxed">
          We use appropriate technical and organizational measures to safeguard your personal data against unauthorized access, loss, or misuse.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">5. Your Rights</h2>
        <p className="text-gray-700 leading-relaxed">
          You have the right to:
        </p>
        <ul className="list-disc pl-6 text-gray-700 leading-relaxed">
          <li>Access and request a copy of your personal data.</li>
          <li>Request corrections to your data if it is inaccurate.</li>
          <li>Request deletion of your personal data, subject to legal obligations.</li>
        </ul>
      </section>

      
    </div>
  );
};

export default PrivacyPolicy;
