import Link from "next/link";

export function DownloadSection() {
  return (
    <section className="w-full mx-auto px-4 py-16 space-y-8 bg-white">
      <Link
        href="https://taxisanchalak.in/wp-content/uploads/2022/03/google-play-badge1.png"
        download
        className="aspect-video w-full max-w-lg mx-auto"
      >
        <img
          src="https://taxisanchalak.in/wp-content/uploads/2022/03/google-play-badge1.png"
          alt="Google Play Badge"
          className="w-full max-w-[200px] mx-auto rounded-md shadow-xl bg-white"
        />
      </Link>
      <h2 className="text-2xl text-center font-semibold text-gray-800">
        Judein Hamare Saath aaur badayein apna Vyapar
      </h2>
    </section>
  );
}
