import React from "react";
import "../assets/css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="navbar footer-nav p-4 mt-4">
        <p className=" w-100 text-center text-light m-0">
          ©2023. Developed by{" "}
          <a
            href="https://github.com/leandrozanardo/"
            className="text-light"
            target="_blank"
            rel="noopener noreferrer"
          >
            Leandro Zanardo
          </a>
        </p>
      </nav>
    </footer>
  );
};

export default Footer;
