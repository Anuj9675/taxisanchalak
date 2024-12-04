import { ContactForm } from "../contactform";


export function Footer() {
  return (
    <footer className="w-full bg-[#084200] py-12 px-4 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* What We Do Section */}
        <div className="space-y-4">
          <h3 className="font-bold text-lg">WHAT WE DO</h3>
          <p className="text-white text-sm">
            Creating tech enabled tools and services to cater the needs of taxi service market in India. For which we have developed &quotTaxi Sanchalak&quot App as a start and will continue to add products and services for the unorganised taxi market in the coming future.
          </p>
          <div className="space-y-2">
            <a href="#" className="block text-sm hover:underline">TERMS & CONDITIONS</a>
            <a href="#" className="block text-sm hover:underline">PRIVACY POLICY</a>
            <a href="#" className="block text-sm hover:underline">REFUND POLICY</a>
            
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-4 text-center">
          <div>
            <p className="text-white text-sm">Cont no.</p>
            <a href="tel:+918929506233" className="text-lg hover:underline">+91-8929-506-233</a>
          </div>
          <div>
            <p className="text-white text-sm">Email id</p>
            <a href="mailto:info@taxisanchalak.com" className="text-lg hover:underline">info@taxisanchalak.com</a>
          </div>
          <div>
            <p className="text-white text-sm">Address</p>
            <p className="text-lg">Kotdwara, Pauri</p>
            <p className="text-lg">Garhwal, Uttarakhand-246149</p>
          </div>
          <p className="text-xl font-medium pt-8">Made With in India</p>
        </div>

        {/* Contact Form Component */}
        <ContactForm />
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-white mt-8">
        © 2024 | TSP Technologies Pvt Ltd | All Rights Reserved
      </div>
    </footer>
  );
}
