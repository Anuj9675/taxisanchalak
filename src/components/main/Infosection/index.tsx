import { CheckCircleIcon } from "lucide-react";
import Link from "next/link";

export function InfoSection() {
  return (
    <>
      <section className="py-20 bg-green-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-green-800">
            Why Choose Taxi Sanchalak?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Convenience",
                description:
                  "Book a ride anytime, anywhere with just a few taps.",
              },
              {
                title: "Safety",
                description:
                  "Vetted drivers and tracked rides for your peace of mind.",
              },
              {
                title: "Affordability",
                description:
                  "Competitive pricing with transparent fare estimates.",
              },
              {
                title: "Reliability",
                description: "Punctual pickups and efficient routes, always.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <CheckCircleIcon className="text-green-600 mb-4 h-8 w-8" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white h-[400px] flex items-center justify-center">
  <div className="text-center text-green-800">
    <h2 className="text-4xl md:text-5xl font-bold mb-6">
      Ready to Get Started?
    </h2>
    <p className="text-lg md:text-xl mb-8">
      Join thousands of satisfied users and experience the Taxi Sanchalak
      difference today.
    </p>
    <Link href="/learn-how-to-use">
      <button className="group relative flex flex-row items-center bg-green-800 text-white justify-center gap-2 rounded-2xl px-8 py-3 text-lg font-semibold shadow-lg hover:bg-green-900 transition-all duration-300 mx-auto">
        <span className="text-center">Learn How It Works</span>
        <svg
          strokeLinecap="round"
          className="text-white"
          strokeWidth="1.5"
          aria-hidden="true"
          viewBox="0 0 10 10"
          height="11"
          width="11"
          stroke="currentColor"
          fill="none"
        >
          <path
            strokeLinecap="round"
            d="M0 5h7"
            className="opacity-0 transition group-hover:opacity-100"
          ></path>
          <path
            strokeLinecap="round"
            d="M1 1l4 4-4 4"
            className="transition group-hover:translate-x-[3px]"
          ></path>
        </svg>
      </button>
    </Link>
  </div>
</section>

    </>
  );
}
