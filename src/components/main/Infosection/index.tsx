export function InfoSection() {
  return (
    <>
      {/* Video Section */}
      <section className="w-full mx-auto px-4 py-16 space-y-8 ">
        <div className="aspect-video w-full max-w-lg mx-auto">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/GW4zEYK87-g"
            title="Badayein Apna Taxi Business"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <h2 className="text-base md:text-xl lg:text-2xl text-center font-semibold text-gray-800 leading-relaxed">
          Judein Hamare Saath aaur badayein apna Vyapar
        </h2>
      </section>

      {/* Marketplace Section */}
      <section className="w-full mx-auto px-4 py-8 md:px-12 md:py-16 bg-white space-y-8 md:space-y-12">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center justify-center">
          {/* App Screenshot */}
          <img
            src="https://taxisanchalak.in/wp-content/uploads/2022/10/2.jpg"
            alt="Taxi Sanchalak App Interface"
            className="w-full max-w-[250px] mx-auto rounded-3xl shadow-xl"
          />

          {/* Description */}
          <div className="space-y-6 text-center md:text-left px-6">
            <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-800">
              Biggest B2B Taxi Marketplace
            </h3>
            <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
              Judein samast bharat ke verified gaadi drivers, gaadi malik aaur
              agents se. Aasani se bookings lein wa dein. Payein nirantar kaam
              aaur acha comission kewal Taxi Sanchalak app par.
            </p>
          </div>
        </div>
      </section>

      {/* Verified Users Section */}
      <section className="w-full mx-auto px-4 py-8 md:px-12 md:py-16 space-y-8 md:space-y-12 ">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center justify-center">
          <div className="space-y-6 text-center md:text-left px-6">
            <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-800">
              Verified Users – Best prices
            </h3>
            <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
              Taxi Sanchalak app mei call aaur messaging jaise features use
              karke aap aasani se kijiye wa sarteih sunchite kar jaise kahi
              saath hi booking post karhe waqt app choose kar sakte hain – yadi
              aap driver partner se call receive karna chahte hain ya bs
              messages
            </p>
          </div>

          <img
            src="https://taxisanchalak.in/wp-content/uploads/2022/03/4.jpg"
            alt="Verified Users Interface"
            className="w-full max-w-[250px] mx-auto rounded-3xl shadow-xl"
          />
        </div>
      </section>

      {/* WhatsApp Section */}
      <section className="w-full mx-auto px-4 py-8 md:px-12 md:py-16 space-y-8 md:space-y-12 bg-white">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center justify-center">
          <img
            src="https://taxisanchalak.in/wp-content/uploads/2022/03/1.jpg"
            alt="WhatsApp Groups Not Needed"
            className="w-full max-w-[250px] mx-auto rounded-3xl shadow-xl"
          />

          <div className="space-y-6 text-center md:text-left px-6">
            <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-800">
              Taxi Whatsapp Groups ab Koi Jaroorat Nahi
            </h3>
            <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
              Anginat Taxi WhatsApp groups se kya aap bhi hain pareshan join
              karein Taxi Sanchalak app, Bookings ko real time mei edit wa
              delete karein, saath hi apni booking ko aasani se anya apps mei
              zahir se share karein
            </p>
          </div>
        </div>
      </section>

      {/* Booking Options Section */}
      <section className="w-full mx-auto px-4 py-8 md:px-12 md:py-16 space-y-8 md:space-y-12 ">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center justify-center">
          <div className="space-y-6 text-center md:text-left px-6">
            <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-800">
              Dekhein Wahi Jo Aapke Liye Sahi
            </h3>
            <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
              Apni pasandida booking dekhne ke liye filter option use karein.
              Choose karein –{" "}
            </p>
            <ul className="text-sm md:text-base lg:text-lg text-gray-600 space-y-2">
              <li>
                Vehicle type, Booking type - One Way ya Round Trip, Date,
                Radius, Saath mei location.
              </li>
              <li>Filter se mutabik hi aapko bookings show hongi.</li>
            </ul>
          </div>

          <img
            src="https://taxisanchalak.in/wp-content/uploads/2022/10/2.jpg"
            alt="Booking Options Interface"
            className="w-full max-w-[250px] mx-auto rounded-3xl shadow-xl"
          />
        </div>
      </section>
    </>
  );
}
