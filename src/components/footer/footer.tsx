import React from "react";
import instagram from "../../assests/instagram.png";
import facebook from "../../assests/facebook.png";
import twitter from "../../assests/twitter.png";
import logo from "../../assests/logo.png";
import Image from "next/image";
import style from "./index.module.css";

const Footer = () => {
  return (
    <div className={style.wrapper}>
      <footer>
        <div className={style.footer}>
          <div className={style.footer__logo}>
            <Image
              src={logo}
              style={{ height: "32px", width: "auto" }}
              alt="logo"
            />
          </div>
          <div className={style.footer__social}>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={facebook}
                style={{ width: "32px", height: "auto" }}
                alt="facebook"
              />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={instagram}
                style={{ width: "32px", height: "auto" }}
                alt="instagram"
              />
            </a>
            <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
              <Image
                src={twitter}
                style={{ width: "32px", height: "auto" }}
                alt="twitter"
              />
            </a>
          </div>
          <div className={style.footer__contact}>
            <p>Phone: 123-456-7890</p>
            <p>Email:</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
