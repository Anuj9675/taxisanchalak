import React from "react";

const RefundPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Refund Policy</h1>
      <p className="text-gray-700 mb-6 leading-relaxed">
        Thank you for using <strong>Taxi Chalak</strong>. This Refund Policy outlines the conditions under which refunds may be issued for our services. Please read it carefully.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">1. Eligibility for Refund</h2>
        <p className="text-gray-700 leading-relaxed">
          Refunds may be issued under the following circumstances:
        </p>
        <ul className="list-disc pl-6 text-gray-700 leading-relaxed">
          <li>If the driver fails to arrive at the scheduled pickup location without prior notification.</li>
          <li>If a booking is canceled by the driver.</li>
          <li>If technical issues on our platform prevent successful booking or payment processing.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">2. Non-Refundable Situations</h2>
        <p className="text-gray-700 leading-relaxed">
          Refunds will not be issued in the following scenarios:
        </p>
        <ul className="list-disc pl-6 text-gray-700 leading-relaxed">
          <li>If the cancellation is made by the user after the allowed cancellation window.</li>
          <li>If the user provides incorrect booking details, such as an incorrect pickup location.</li>
          <li>If the user is absent at the scheduled pickup time.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">3. Refund Process</h2>
        <p className="text-gray-700 leading-relaxed">
          To request a refund, please contact our support team within 7 days of the booking date. You must provide the following details:
        </p>
        <ul className="list-disc pl-6 text-gray-700 leading-relaxed">
          <li>Booking reference number.</li>
          <li>A description of the issue that qualifies for a refund.</li>
          <li>Proof of payment.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">4. Processing Time</h2>
        <p className="text-gray-700 leading-relaxed">
          Refunds will be processed within 5-10 business days upon approval. Refunds will be issued to the original payment method used during the booking.
        </p>
      </section>

      
    </div>
  );
};

export default RefundPolicy;
