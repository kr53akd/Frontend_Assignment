'use client';

interface OurJourneyProps {
  heading?: string;
  subheading?: string;
  videoSrc?: string;
  videoThumbnail?: string;
}

const OurJourney = ({
  heading = 'Our Journey',
  subheading = 'Discover how we got here and where we are heading',
  videoSrc = '/videos/OurJourney.mp4',
}: OurJourneyProps) => {


  return (
    <section 
      className="w-full relative bg-black overflow-hidden"
      aria-label="Our journey section"
      role="region"
      style={{ marginLeft: 'calc(-50vw + 50%)' }}
    >
      {/* Full Width Video Background */}
      <div 
        className="w-full relative py-20"
        role="region"
        aria-label="Journey background video"
      >
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          aria-label="Journey background video"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>

        {/* Overlay for Better Text Readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Inner Shadow Effect */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            boxShadow: 'inset 0 0 100px rgba(0, 0, 0, 0.6)'
          }}
        ></div>

        {/* Content - Overlaid Text */}
        <div className="relative inset-0 z-10 flex flex-col items-center justify-center px-4 pointer-events-none">
          <div className="w-4/5 bg-white/15 rounded-4xl p-10 text-center">
          <h2 
            className="text-lg w-full md:w-lg mx-auto sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-4 md:mb-6 leading-tight text-center"
            role="heading"
            aria-level={2}
          >
            {heading}
          </h2>
          <p 
            className="text-sm mt-10 sm:text-base md:text-lg lg:text-xl text-gray-200 max-w-xl text-center mx-auto"
            role="doc-subtitle"
          >
            {subheading}
          </p>

        <button className="text-black bg-white px-5 py-2 rounded-2xl mt-10">About Brand</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurJourney;
