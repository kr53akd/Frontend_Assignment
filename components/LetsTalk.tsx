'use client';

import { FiArrowRightCircle } from "react-icons/fi";

interface LetsTalkProps {
  heading?: string;
  subheading?: string;
  videoSrc?: string;
  videoThumbnail?: string;
}

const LetsTalk = ({
  heading = 'Our Journey',
  subheading = 'Discover how we got here and where we are heading',
  videoSrc = '/videos/LetsTalk.mp4',
}: LetsTalkProps) => {


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
        <div className="relative inset-0 z-10 flex gap-10 flex-col md:flex-row items-stretch justify-center pointer-events-none px-10 md:px-28 lg:px-36 xl:px-44">
          <div className="h-full w-full md:w-3/5 xl:w-2/5 bg-gray-500/20 backdrop-blur-xl rounded-4xl p-10 text-center flex flex-wrap">
          <h2 
            className="text-lg w-full md:w-lg mx-auto sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-4 md:mb-6 leading-tight text-center"
            role="heading"
            aria-level={2}
          >
           Have Questions? Let’s Talk!
          </h2>
          <p 
            className="text-sm mt-10 sm:text-base md:text-lg lg:text-xl text-gray-200 max-w-xl text-center mx-auto"
            role="doc-subtitle"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur.
          </p>

        <button className="text-black bg-white px-5 py-2 rounded-2xl mt-10">Get Started</button>
          </div>
          <div className="h-auto w-full md:w-3/5 xl:w-2/5 gap-5 flex flex-col">
            <div className="w-full h-full items-center bg-gray-500/20 backdrop-blur-xl rounded-4xl p-10 text-center flex flex-wrap">
              <h1 className="text-4xl flex justify-between w-full items-center"><p>Partnerships</p><FiArrowRightCircle/></h1>
            </div>
            <div className="w-full h-full items-center bg-gray-500/20 backdrop-blur-xl rounded-4xl p-10 text-center flex flex-wrap">
              <h1 className="text-4xl flex justify-between w-full items-center"><p>Careers</p> <FiArrowRightCircle /></h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetsTalk;
