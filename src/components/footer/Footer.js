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
    <div className="footer">
      <p>
        This page was created for learning the first quarter of the Development
        of web applications. All examples of code was made by me, and it could
        be improved and possibly wrong. Tutorials and exercises are reviewed to
        avoid errors, but I can not guarantee full correctness of all content.
      </p>
      <p>2023-2023</p>
      <a href="https://github.com/RafaGomezGuillen">
        <AiFillGithub className="icon-links" />
      </a>
      <a href="https://www.instagram.com/rafagomez.jpg/">
        <AiOutlineInstagram className="icon-links" />
      </a>
      <a href="https://twitter.com/gom3zra72">
        <AiOutlineTwitter className="icon-links" />
      </a>
      <a href="https://www.linkedin.com/in/rafael-g%C3%B3mez-guill%C3%A9n/?locale=en_US">
        <AiOutlineLinkedin className="icon-links" />
      </a>
      <a href="https://www.paypal.com/paypalme/rafagomezguillen?country.x=ES&locale.x=es_ES">
        <BsPaypal className="icon-links" />
      </a>
    </div>
  );
}

export default Footer;
