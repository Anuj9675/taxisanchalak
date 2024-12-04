import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="bg-green-800 text-white h-[700px] flex items-center">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Content Section */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-extrabold md:mt-0 mt-24 mb-6 leading-tight">
              Your Ride, Your Way
            </h1>
            <p className="text-lg md:text-2xl mb-8 leading-relaxed">
              Book a taxi in seconds with TaxiGo. Safe, reliable, and always on
              time.
            </p>
            <Link
              href="https://taxiChalak.in/wp-content/uploads/2022/03/google-play-badge1.png"
              download
            >
              <button
                type="submit"
                className="flex justify-center gap-3 items-center mx-auto md:mx-0 shadow-xl text-lg bg-gray-50 text-green-600 backdrop-blur-md font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-green-600 hover:text-white before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-6 py-3 overflow-hidden border-2 rounded-full group"
              >
                Download
                <svg
                  className="w-8 h-8 group-hover:rotate-90 group-hover:bg-gray-50 text-black ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                  viewBox="0 0 16 19"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                    className="fill-gray-800 group-hover:fill-gray-900"
                  ></path>
                </svg>
              </button>
            </Link>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/hero.png"
              alt="Taxi App Screenshot"
              width={700}
              height={700}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
