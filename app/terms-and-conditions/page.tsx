import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Terms and Conditions</h1>
      <p className="text-gray-700 mb-6 leading-relaxed">
        Welcome to <strong>Taxi Chalak</strong>. By accessing and using our platform, you agree to adhere to the following Terms and Conditions. These terms govern your use of our services and website. If you do not agree to any part of these terms, we kindly ask you to discontinue using our services immediately.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">1. Acceptance of Terms</h2>
        <p className="text-gray-700 leading-relaxed">
          By accessing our platform, you confirm that you have read, understood, and agree to be bound by these Terms and Conditions. You are also agreeing to abide by any additional policies, such as our Privacy Policy, which collectively govern your relationship with <strong>Taxi Chalak</strong>.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">2. Eligibility</h2>
        <p className="text-gray-700 leading-relaxed">
          To use our services, you must be at least 18 years of age. By registering or booking through our platform, you warrant that you meet this age requirement and possess the legal capacity to enter into binding agreements.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">3. Services Provided</h2>
        <p className="text-gray-700 leading-relaxed">
          <strong>Taxi Chalak</strong> is a digital platform designed to connect passengers with independent taxi service providers. Please note that we do not directly operate or own any taxis. Our role is limited to facilitating these connections and enhancing your booking experience.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">4. Bookings and Cancellations</h2>
        <h3 className="text-xl font-medium mb-2">Bookings</h3>
        <p className="text-gray-700 leading-relaxed">
          Bookings made through our platform are subject to availability. While we strive to ensure accurate and timely confirmations, we cannot guarantee the availability of drivers or vehicles under all circumstances.
        </p>

        <h3 className="text-xl font-medium mt-4 mb-2">Cancellations</h3>
        <p className="text-gray-700 leading-relaxed">
          Cancellation policies vary based on the specific terms outlined by the service provider or driver. Please review these policies prior to completing your booking to avoid any misunderstandings or penalties.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">5. Pricing and Payment</h2>
        <p className="text-gray-700 leading-relaxed">
          The pricing displayed on our platform is determined by various factors, including distance, time, and local tariffs. Payments may be made via cash, online methods, or other approved channels, depending on the driver’s terms and availability.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">6. User Responsibilities</h2>
        <p className="text-gray-700 leading-relaxed">
          As a user of <strong>Taxi Chalak</strong>, you are expected to:
        </p>
        <ul className="list-disc pl-6 text-gray-700 leading-relaxed">
          <li>Provide accurate and up-to-date personal and payment information.</li>
          <li>Behave respectfully towards drivers and other passengers.</li>
          <li>Comply with all applicable traffic, safety, and legal regulations during your ride.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">7. Driver Responsibilities</h2>
        <p className="text-gray-700 leading-relaxed">
          Drivers are required to maintain all necessary licenses, permits, and certifications to provide taxi services. They are also responsible for ensuring the safety and comfort of passengers during the trip.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">8. Limitation of Liability</h2>
        <p className="text-gray-700 leading-relaxed">
          <strong>Taxi Chalak</strong> acts solely as a facilitator and is not liable for any losses, damages, or injuries arising from services provided by third-party drivers. Additionally, we are not responsible for delays, disruptions, or errors beyond our reasonable control.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">9. Privacy Policy</h2>
        <p className="text-gray-700 leading-relaxed">
          All personal information provided by users is processed in accordance with our Privacy Policy. By using our services, you consent to the collection and use of your data as outlined in the policy.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">10. Governing Law</h2>
        <p className="text-gray-700 leading-relaxed">
          These Terms and Conditions are governed by the laws of [Your Jurisdiction], and any disputes arising from their interpretation or enforcement shall be subject to the exclusive jurisdiction of the courts in [Your Jurisdiction].
        </p>
      </section>

      
    </div>
  );
};

export default TermsAndConditions;
