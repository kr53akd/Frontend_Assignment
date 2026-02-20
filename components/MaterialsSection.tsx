import { GradientLine } from "@/style/GradientLine";

export default function MaterialsSection() {
  return (
    <section
      className="bg-black text-white px-4 md:px-16 lg:px-48 relative pb-16 lg:pb-36"
      aria-labelledby="materials-heading"
    >
    <GradientLine/>
     <div className="absolute h-4/5 flex items-start right-4 md:right-16 lg:right-48">
        <div className="w-[2.5px] h-1/2 bg-linear-to-b via-pink-500 to-purple-600 from-orange-500"></div>
        <div className="w-1 md:w-1.5 ml-[2.5px] mr-0.5 bg-gray-700 h-full relative">
        <div className="w-full h-1/2 bg-linear-to-b via-pink-500 to-purple-600 from-orange-500"></div>
        </div>
        <div className="w-[2.5px] h-1/2 bg-linear-to-b  via-pink-500 to-purple-600 from-orange-500"></div>
      </div>
      <div className="max-w-6xl mx-auto pr-10">
        
        {/* Heading */}
        <h2
          id="materials-heading"
          className="text-2xl md:text-3xl font-semibold text-gray-300 max-w-md leading-snug"
        >
          Advanced Materials and Integrative Solutions
        </h2>

        {/* Item 1 */}
        <article
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
          aria-labelledby="idylle-title"
        >
          {/* Logo */}
          <div
            className="text-3xl font-semibold text-gray-200"
            aria-hidden="true"
          >
            idylle
          </div>

          {/* Content */}
          <div className="md:col-span-2 max-w-md space-y-4">
            <header>
              <h3 id="idylle-title" className="text-lg text-gray-300">
                Securing every physical product for counterfeit protection
              </h3>
            </header>

            <p
              id="idylle-desc"
              className="text-sm text-gray-500 leading-relaxed"
            >
              Reyal™ makes it easy for brand owners and governments to effectively
              identify counterfeits, secure revenues and preserve brand integrity.
            </p>

            <button
              className="bg-orange-500 hover:bg-orange-600 transition px-5 py-2 rounded-lg text-sm font-medium"
              aria-describedby="idylle-desc"
            >
              Learn More
            </button>
          </div>
        </article>

        {/* Item 2 */}
        <article
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
          aria-labelledby="labscoop-title"
        >
          {/* Logo */}
          <div
            className="flex items-center gap-3"
            aria-hidden="true"
          >
            <div className="grid grid-cols-3 gap-1">
              {[...Array(9)].map((_, i) => (
                <div
                  key={i}
                  className="w-2.5 h-2.5 bg-gray-300 rounded-full"
                ></div>
              ))}
            </div>
            <span className="text-gray-300 text-lg">labscoop</span>
          </div>

          {/* Content */}
          <div className="md:col-span-2 max-w-md space-y-4">
            <header>
              <h3 id="labscoop-title" className="text-lg text-gray-300">
                Accelerating biomedical research with next-generation bio-probes
              </h3>
            </header>

            <p
              id="labscoop-desc"
              className="text-sm text-gray-500 leading-relaxed"
            >
              Luminicell empowers researchers to achieve breakthroughs at a faster
              pace by powering long live-cell tracking and deep tissue bio-imaging.
            </p>

            <button
              className="bg-orange-500 hover:bg-orange-600 transition px-5 py-2 rounded-lg text-sm font-medium"
              aria-describedby="labscoop-desc"
            >
              Learn More
            </button>
          </div>
        </article>

      </div>
    </section>
  );
}
