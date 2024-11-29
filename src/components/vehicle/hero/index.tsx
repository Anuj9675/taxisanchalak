export function VehicleInsuranceHero() {
    return (
      <section>
        {/* Hero Image */}
        <div className="w-full">
          <img
            src="https://taxisanchalak.in/wp-content/uploads/2024/08/rsz_insurance_website-01.png"
            alt="Vehicle Insurance Banner"
            className="w-full h-auto"
          />
        </div>
  
        {/* Text Section */}
        <div className="max-w-4xl mx-auto px-4 py-12 text-start">
          <h2 className="text-4xl font-bold mb-4">
            Contact to get best available quotes today
          </h2>
          <p className="text-gray-600 mb-6">
            We at Taxi Sanchalak work towards enhancing the life of individuals associated with the taxi service industry for which we bring you products specifically designed for the needs of taxi service industry. Get a free quote today
          </p>
          <button className="bg-white border-2 border-black text-black font-bold py-2 px-6 rounded-full hover:bg-black hover:text-white transition duration-300">
            GET A FREE QUOTE
          </button>
        </div>
      </section>
    )
  }
  
  