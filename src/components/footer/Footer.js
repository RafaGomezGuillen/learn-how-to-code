import React from "react";
import "./Footer.css";
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { BsPaypal } from "react-icons/bs";

function Footer() {
  return (
    <>
      <footer>
        <h5 className="footer-h5">Web page made by Rafael Gómez Guillén.</h5>
        <a href="https://github.com/RafaGomezGuillen">
          <AiFillGithub className="icon-links" />
        </a>
        <a href="https://www.instagram.com/rafagomez.jpg/">
          <AiOutlineInstagram className="icon-links" />
        </a>
        <a href="https://twitter.com/gom3zra72">
          <AiOutlineTwitter className="icon-links" />
        </a>
        <a href="https://www.linkedin.com/in/rafael-gomez-226649233/">
          <AiOutlineLinkedin className="icon-links" />
        </a>
        <a href="https://www.paypal.com/paypalme/rafagomezguillen?country.x=ES&locale.x=es_ES">
          <BsPaypal className="icon-links" />
        </a>
      </footer>
    </>
  );
}

export default Footer;
