import Image from "next/image";

export default function FeatureSection() {
  return (
    <section 
      className="bg-black text-gray-300 py-12 md:py-20 lg:py-28 px-4 sm:px-6 md:px-8 lg:px-12 relative overflow-hidden"
      aria-label="Feature section"
      role="region"
    >
      
      {/* Left Gradient Line */}
      <div className="absolute left-4 md:left-16 lg:left-48 top-2 h-full flex items-start">
        <div className="w-0.5 h-1/2 bg-linear-to-b from-orange-500 via-pink-500 to-purple-600"></div>
        <div className="w-1 md:w-2 mx-0.5 bg-gray-700 h-full relative">
        <div className="w-full h-1/2 bg-linear-to-b from-orange-500 via-pink-500 to-purple-600"></div>
        </div>
        <div className="w-0.5 h-1/2 bg-linear-to-b from-orange-500 via-pink-500 to-purple-600"></div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto pl-6 md:pl-16 lg:pl-48">
        
        {/* Text */}
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-relaxed text-gray-300 max-w-3xl font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          sectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
          Lorem ipsum dolor sit amet.
        </p>

        {/* Logo Cards */}
        <div className="max-w-3xl mt-8 md:mt-12 lg:mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          
          {["labscoop", "idylle", "IM", "idylle"].map((item, index) => (
            <div
              key={index}
              className="bg-[#0f0f0f] rounded-2xl p-4 md:p-6 lg:p-8 flex items-center justify-center min-h-20 md:min-h-24 lg:min-h-28 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-800/50"
            >
              <Image src={`/Images/${item}.svg`} alt= "" height={60} width={60}/>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
