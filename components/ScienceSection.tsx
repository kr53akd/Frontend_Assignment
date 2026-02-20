import Image from "next/image";

export default function ScienceSection() {
  return (
    <section
      className="bg-black text-white px-6 md:px-48 md:pr-80 relative"
      aria-labelledby="science-heading"
    >
        <div className="absolute h-full flex items-start right-4 md:right-16 lg:right-48">
        <div className="w-[2.5px] h-1/2 bg-linear-to-b via-pink-500 to-purple-600 from-orange-500"></div>
        <div className="w-1 md:w-1.5 ml-[2.5px] mr-0.5 bg-gray-700 h-full relative">
        <div className="w-full h-1/2 bg-linear-to-b via-pink-500 to-purple-600 from-orange-500"></div>
        </div>
        <div className="w-[2.5px] h-1/2 bg-linear-to-b  via-pink-500 to-purple-600 from-orange-500"></div>
      </div>
      <div className="max-w-7xl mx-auto py-20 pr-8">

        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          
          <h2
            id="science-heading"
            className="w-full lg:w-3/8 text-2xl md:text-3xl font-semibold text-gray-200"
          >
            The Science Behind Our Innovative Solutions
          </h2>

          <button
            className="bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-lg text-sm font-medium self-start md:self-auto"
            aria-label="Learn more about our science and innovations"
          >
            Learn More
          </button>
        </header>

        {/* Cards Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8">

          {/* Card 1 */}
          <article
            className="relative rounded-3xl border border-gray-800 p-6 overflow-hidden py-20"
            aria-labelledby="card1-title"
          >
              <div className="absolute inset-0 bg-linear-to-b from-black to-transparent blur-2xl h-full w-full">
            </div>
            <Image src="/Images/card1.jpg" alt="" height={300} width={300} className="h-full w-full absolute blur-xl "/>
            <div className="relative">
              <h3 id="card1-title" className="text-lg text-gray-200 font-medium">
                Synthesis
              </h3>

              <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <p className="mt-4 text-sm text-gray-500 leading-relaxed">
                consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </p>
            </div>
          </article>

          {/* Card 2 */}
          <article
            className="relative rounded-3xl border border-gray-800 p-6 overflow-hidden py-20"
            aria-labelledby="card2-title"
          >
               <div className="absolute inset-0 bg-linear-to-b from-black to-transparent blur-2xl h-full w-full">
            </div>
            <Image src="/Images/card2.jpg" alt="" height={300} width={300} className="h-full w-full absolute blur-xl "/>

            <div className="relative">
              <h3 id="card2-title" className="text-lg text-gray-200 font-medium">
                Formulations
              </h3>

              <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <p className="mt-4 text-sm text-gray-500 leading-relaxed">
                consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </p>
            </div>
          </article>

          {/* Card 3 */}
          <article
            className="relative rounded-3xl border border-gray-800 p-6 overflow-hidden py-20"
            aria-labelledby="card3-title"
          >
             <div className="absolute inset-0 bg-linear-to-b from-black to-transparent blur-2xl h-full w-full">
            </div>
            <Image src="/Images/card3.jpg" alt="" height={300} width={300} className="h-full w-full absolute blur-xl "/>

            <div className="relative">
              <h3 id="card3-title" className="text-lg text-gray-200 font-medium">
                Diverse Materials
              </h3>

              <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <p className="mt-4 text-sm text-gray-500 leading-relaxed">
                consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </p>
            </div>
          </article>

          {/* Card 4 */}
          <article
            className="relative rounded-3xl border border-gray-800 p-6  overflow-hidden py-20"
            aria-labelledby="card4-title"
          >
            <div className="absolute inset-0 bg-linear-to-b from-black to-transparent blur-2xl h-full w-full">
            </div>
            <Image src="/Images/card4.jpg" alt="" height={300} width={300} className="h-full w-full absolute blur-xl "/>

            <div className="relative">
              <h3 id="card4-title" className="text-lg text-gray-200 font-medium">
                Manipulation of Light
              </h3>

              <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <p className="mt-4 text-sm text-gray-500 leading-relaxed">
                consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </p>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
}
