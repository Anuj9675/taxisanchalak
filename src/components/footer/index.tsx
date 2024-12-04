import { ContactForm } from "../contactform";

export function Footer() {
  return (
    <footer className="w-full bg-[#084200] py-12 px-4 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Form Component */}
        <div className="order-1 md:order-3">
          <ContactForm />
        </div>

        {/* What We Do Section */}
        <div className="space-y-4 order-2 md:order-1">
          <h3 className="font-bold text-xl">WHAT WE DO</h3>
          <p className="text-white text-md">
            Creating tech enabled tools and services to cater the needs of taxi service market in India. For which we have developed &quot;Taxi Chalak&quot; App as a start and will continue to add products and services for the unorganised taxi market in the coming future.
          </p>
          <div className="space-y-2">
            <a href="#" className="block text-md hover:underline">TERMS & CONDITIONS</a>
            <a href="#" className="block text-md hover:underline">PRIVACY POLICY</a>
            <a href="#" className="block text-md hover:underline">REFUND POLICY</a>
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-4 text-center order-3 md:order-2">
          <div>
            <p className="text-white text-sm">Cont no.</p>
            <a href="tel:+918929506233" className="text-lg hover:underline">+91-8929-506-233</a>
          </div>
          <div>
            <p className="text-white text-sm">Email id</p>
            <a href="mailto:info@taxiChalak.com" className="text-lg hover:underline">info@taxiChalak.com</a>
          </div>
          <div>
            <p className="text-white text-sm">Address</p>
            <p className="text-lg">Kotdwara, Pauri</p>
            <p className="text-lg">Garhwal, Uttarakhand-246149</p>
          </div>
          <p className="text-xl font-medium pt-8">Made With in India</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-white mt-8">
        © 2024 | TSP Technologies Pvt Ltd | All Rights Reserved
      </div>
    </footer>
  );
}
