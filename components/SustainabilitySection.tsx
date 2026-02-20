export default function SustainabilitySection() {
  return (
    <section
      className="bg-black text-white py-20 px-6 md:px-16 border-y border-white/30"
      aria-labelledby="sustainability-heading"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <header className="space-y-6">
          <h2
            id="sustainability-heading"
            className="text-3xl md:text-4xl font-semibold text-gray-200 leading-snug"
          >
            Sustainability at the heart of Innovation
          </h2>

          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <button
            className="bg-gray-200 text-black px-5 py-2 rounded-lg text-sm font-medium hover:bg-white transition focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Get more details about sustainability innovations"
          >
            Get into Details
          </button>
        </header>

        {/* RIGHT VIDEO */}
        <figure className="relative flex justify-center md:justify-end">

          {/* Video */}
          <video
            className="w-70 md:w-full object-cover rounded-xl"
            autoPlay
            muted
            loop
            playsInline
            aria-describedby="video-desc"
          >
            <source src="videos/Sustainability.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Screen-reader description */}
          <figcaption id="video-desc" className="sr-only">
            Abstract futuristic animation representing sustainability and innovation.
          </figcaption>
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-1/3 -translate-x-1/2 flex"
          >
            <div className="w-4 md:w-7 h-full bg-linear-to-b from-black via-white/5 to-black backdrop-blur-xl"></div>
            <div className="w-4 md:w-7 h-full bg-linear-to-b from-black via-white/10 to-black backdrop-blur-xl"></div>
            <div className="w-4 md:w-7 h-full bg-linear-to-b from-black via-white/30 to-black backdrop-blur-xl"></div>
            <div className="w-4 md:w-7 h-full bg-linear-to-b from-black via-white/60 to-black backdrop-blur-xl"></div>
            <div className="w-4 md:w-7 h-full bg-linear-to-b from-black via-white/50 to-black backdrop-blur-xl"></div>
            <div className="w-4 md:w-7 h-full bg-linear-to-b from-black via-white/70 to-black backdrop-blur-2xl"></div>
            <div className="w-4 md:w-7 h-full bg-linear-to-b from-black via-white/80 to-black backdrop-blur-xl"></div>
        </div>
          {/* Glow Effect */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 right-0 w-32 h-32 bg-purple-600/15 blur-3xl"
          ></div>

        </figure>
      </div>
    </section>
  );
}
