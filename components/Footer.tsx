import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="bg-white/5 text-gray-400 px-6 md:px-16 py-16 pb-5">
      <div className="max-w-7xl mx-auto">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          {/* Logo */}
          <div className="text-xl font-semibold text-gray-200">
            LOGO
          </div>

          {/* Contact */}
          <address className="not-italic flex flex-col md:flex-row gap-4 md:gap-12 text-sm">
            <a href="mailto:info@brand.com" className="hover:text-white">
              info@brand.com
            </a>
            <a href="tel:+6568802159" className="hover:text-white">
              +65 8808 2159
            </a>
          </address>
        </div>

        {/* Divider */}
        <hr className="border-gray-800 my-10" />

        {/* Middle Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* About */}
          <section aria-labelledby="footer-about">
            <h2 id="footer-about" className="sr-only">
              About Company
            </h2>

            <p className="text-sm max-w-xs leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            {/* Social */}
            <div className="flex gap-3 mt-6">
         
                <button
                  className="w-9 h-9 flex items-center justify-center rounded-md bg-gray-800 hover:bg-gray-700"
                  aria-label={`Visit our social media facebook`}
                >
                  <FaFacebookF color="#fffff"/>
                </button>
                <button
                  className="w-9 h-9 flex items-center justify-center rounded-md bg-gray-800 hover:bg-gray-700"
                  aria-label={`Visit our social media twitter`}
                >
                  <FaTwitter color="#fffff"/>
                </button>
                <button
                  className="w-9 h-9 flex items-center justify-center rounded-md bg-gray-800 hover:bg-gray-700"
                  aria-label={`Visit our social media instagram`}
                >
                  <RiInstagramFill  color="#fffff"/>
                </button>
           
            </div>
          </section>

          {/* Solutions */}
          <nav aria-labelledby="footer-solutions">
            <h3 id="footer-solutions" className="text-sm text-gray-200 mb-4">
              Solutions
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Reyal</a></li>
              <li><a href="#" className="hover:text-white">Luminicell</a></li>
            </ul>
          </nav>

          {/* Quick Links */}
          <nav aria-labelledby="footer-links">
            <h3 id="footer-links" className="text-sm text-gray-200 mb-4">
              Quick links
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Get Started</a></li>
              <li><a href="#" className="hover:text-white">Technology</a></li>
              <li><a href="#" className="hover:text-white">Newsroom</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
            </ul>
          </nav>

          {/* Who We Are */}
          <nav aria-labelledby="footer-company">
            <h3 id="footer-company" className="text-sm text-gray-200 mb-4">
              Who we are
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Brand at a Glance</a></li>
              <li><a href="#" className="hover:text-white">Mission & Vision</a></li>
              <li><a href="#" className="hover:text-white">Our Team</a></li>
              <li><a href="#" className="hover:text-white">Partnerships</a></li>
              <li><a href="#" className="hover:text-white">Sustainability & Social Impact</a></li>
            </ul>
          </nav>

        </div>

        {/* Bottom Divider */}
        <hr className="border-gray-800 my-10" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">

          <p>© 2025 Brand. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>

          <p>Designed and Powered by Quixta.</p>
        </div>

      </div>
    </footer>
  );
}
