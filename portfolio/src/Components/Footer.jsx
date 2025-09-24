import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-5">
      <div className="text-center">
        <p className="mb-2">Designed and Developed by Pehesara</p>
        <p className="mb-2">
          <i className="fas fa-home text-gray-200 mr-2"></i>
          24/1, Vihara road, Angammana, Ratnapura
        </p>
        <p className="mb-4">
          <i className="fas fa-phone-alt text-gray-200 mr-2"></i>
          071-6305331
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 text-xl text-gray-300">
          <a
            href="https://github.com/pehesara112455"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/uditha-pehesara-7786b4381/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_verification_details%3B4YSzT8LFR6y52uFdb352Jg%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://web.facebook.com/uditha.pehesara.148"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="mailto:your@email.com"
            className="hover:text-emerald-400 transition"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;