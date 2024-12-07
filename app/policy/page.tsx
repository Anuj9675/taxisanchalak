import React from "react";
import Link from "next/link";

const Policies = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Our Policies</h1>
      <p className="text-gray-700 mb-6 leading-relaxed">
        Welcome to the Policies section of <strong>Taxi Chalak</strong>. Here, you will find important information about our terms and conditions, including our commitment to protecting your privacy and ensuring a fair refund process.
      </p>

      {/* Introduction to Privacy Policy */}
      <div className="p-4 border-l-4 border-blue-600 bg-gray-50 mb-8">
        <h2 className="text-2xl font-semibold">Why Privacy Matters</h2>
        <p className="text-gray-700 leading-relaxed">
          Your privacy is important to us. We want you to feel safe and confident while using our services. Learn about how we collect, use, and protect your personal data to ensure a safe experience.
        </p>
      </div>

      {/* Privacy Policy Card */}
      <div className="p-4 border rounded-lg hover:shadow-md transition mb-6">
        <h2 className="text-2xl font-semibold mb-2">Privacy Policy</h2>
        <p className="text-gray-700 leading-relaxed mb-2">
          Learn how we collect, use, and protect your personal information while using our services.
        </p>
        <Link href="/privacy-policy" className="text-blue-600 hover:underline">
          Read our Privacy Policy
        </Link>
      </div>

      {/* Introduction to Refund Policy */}
      <div className="p-4 border-l-4 border-green-600 bg-gray-50 mb-8">
        <h2 className="text-2xl font-semibold">Understanding Refunds</h2>
        <p className="text-gray-700 leading-relaxed">
          We believe in providing clear and fair refund terms for our customers. Understand the situations under which you may request a refund and how we handle such requests.
        </p>
      </div>

      {/* Refund Policy Card */}
      <div className="p-4 border rounded-lg hover:shadow-md transition mb-6">
        <h2 className="text-2xl font-semibold mb-2">Refund Policy</h2>
        <p className="text-gray-700 leading-relaxed mb-2">
          Understand the terms and conditions under which refunds are processed for our services.
        </p>
        <Link href="/refund-policy" className="text-blue-600 hover:underline">
          Read our Refund Policy
        </Link>
      </div>
    </div>
  );
};

export default Policies;
