'use client';

interface RevolutionProps {
  heading?: string;

  videoSrc?: string;
  videoThumbnail?: string;
}

const Revolution = ({
  heading = 'Our Journey',
  videoSrc = '/videos/Revolution.mp4',
}: RevolutionProps) => {


  return (
    <section 
      className="w-full relative bg-black overflow-hidden"
      aria-label="Our journey section"
      role="region"
      style={{ marginLeft: 'calc(-50vw + 50%)' }}
    >
      {/* Full Width Video Background */}
      <div 
        className="w-full relative py-24"
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

        {/* Content - Overlaid Text */}
        <div className="relative inset-0 z-10 flex flex-col items-center justify-center px-4 pointer-events-none">
    
          <h2 
            className="text-lg leading-loose w-full md:w-2xl mx-auto sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl text-white mb-4 md:mb-6 text-center"
            role="heading"
            aria-level={2}
          >
            {heading}
          </h2>
          </div>
      </div>
    </section>
  );
};

export default Revolution;
