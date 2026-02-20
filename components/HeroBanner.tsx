'use client';

interface HeroBannerProps {
  heading?: string;
  subheading?: string;
  videoSrc?: string;
  videoThumbnail?: string;
}

const HeroBanner = ({
  heading = 'Welcome to our platform',
  subheading = 'Experience the future of innovation',
  videoSrc = '/videos/Banner.mp4',
}: HeroBannerProps) => {
  return (
    <section 
      className="w-full bg-black"
      aria-label="Hero banner section"
      role="region"
    >
      <div className="flex justify-center items-center w-full px-4 h-screen">
        {/* Outer Container for Text Overflow */}
        <div className="w-full max-w-4xl relative m-6 md:m-12 lg:m-16">
          {/* Main Video Background Container */}
          <div 
            className="w-full md:w-6/9 rounded-full lg:rounded-5xl overflow-hidden shadow-2xl relative min-h-96 m-auto"
            role="region"
            aria-label="Hero video background section"
          >
            {/* Background Video */}
            <video
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              aria-label="Hero background video"
            >
              <source src={videoSrc} type="video/mp4" />
            </video>

            {/* Overlay for Better Text Readability */}
            <div className="absolute inset-0 bg-black/10"></div>

            {/* Inner Shadow Effect */}
            <div 
              className="absolute inset-0 rounded-full lg:rounded-5xl pointer-events-none"
              style={{
                boxShadow: 'inset 0px 0px 150px rgba(0, 0, 0, 1), inset 0px 0px 150px rgba(0, 0, 0, 1), inset 0px 0px 150px rgba(0, 0, 0, 1), inset 0px 0px 150px rgba(0, 0, 0, 1)'
              }}
            ></div>
          </div>

          {/* Content - Overlaid Text (Can Overflow) */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 md:p-8 lg:p-12 pointer-events-none">
            <h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight text-center"
              role="heading"
              aria-level={1}
            >
              {heading}
            </h1>
            <p 
              className="w-full md:w-4/6 text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 text-center"
              role="doc-subtitle"
            >
              {subheading}
            </p>
            <button 
              className="px-6 py-2 border-2 bg-white text-black mt-16 rounded-lg transition duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
