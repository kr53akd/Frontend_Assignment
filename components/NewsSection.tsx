import { RightGradientLine } from "@/style/RightGradientLine";

const newsData = [
  {
    title: "Brand Unveils Breakthrough in Product Authentication Technology",
    date: "March 08, 2025",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

  },
  {
    title: "LumiLab – Exploring the science and innovation behind luminescent materials",
    date: "March 08, 2025",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  
  },
  {
    title: "The Glow Factor – Trends, discoveries, and applications in photonic materials.",
    date: "March 08, 2025",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Brand Unveils Breakthrough in Product Authentication Technology",
    date: "March 08, 2025",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export default function NewsSection() {
  return (
    <section className="bg-black text-white px-4 md:px-16 lg:px-48 pb-20 relative">
      <RightGradientLine/>
       <div className="absolute h-full flex items-start left-4 md:left-16 lg:left-48">
        <div className="w-[2.5px] h-full bg-linear-to-b via-pink-500 to-purple-600 from-orange-500"></div>
        <div className="w-1 md:w-1.5 ml-[2.5px] mr-0.5 bg-gray-700 h-full relative">
        <div className="w-full h-full bg-linear-to-b via-pink-500 to-purple-600 from-orange-500"></div>
        </div>
        <div className="w-[2.5px] h-full bg-linear-to-b  via-pink-500 to-purple-600 from-orange-500"></div>
      </div>
      <div className="pl-16 lg:pl-56">
      <h2 className="text-3xl md:text-4xl font-semibold mb-10">
        What’s New at Brand
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {newsData.map((item, index) => (
          <div
            key={index}
            className={`rounded-2xl p-6 border border-gray-800 bg-[#0d0d0d] hover:shadow-lg transition duration-300 group hover:bg-[url('../public/Images/hoverImage.jpg')] bg-center bg-cover bg-no-repeat`}
          >
            {/* {item.highlight && (
              <img
                src={item.image}
                alt="news"
                className="absolute inset-0 w-full h-full object-cover opacity-20"
              />
            )} */}

            <div className="relative z-10">
              <h3 className="text-lg font-medium mb-7 leading-snug">
                {item.title}
              </h3>

              <p className="text-sm text-gray-400 mb-7">{item.date}</p>

              <p className="text-sm text-gray-300 mb-7">{item.desc}</p>

              <button className="px-4 py-2 border border-gray-500 rounded-lg text-sm group-hover:bg-white group-hover:text-black transition">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
