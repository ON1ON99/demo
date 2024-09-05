"use client";
import React from "react";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import style from "@/styles/about.module.css";

const About = () => {
  return (
    <div className={style.wrapper}>
      <Header />
      <div className={style.container}>
        <h1>About Demo</h1>
        <p className={style.about_desc}>
          Step into a world where cutting-edge technology meets everyday
          convenience. At Demo, we are passionate about bringing you the latest
          and most advanced electronics on the market. From ultra-fast laptops
          and gaming consoles to smart home systems and high-quality audio
          equipment, we have everything you need to stay connected, entertained,
          and ahead of the curve.
        </p>
      </div>
      <div className={style.reason_md}>
        <p className={style.titles}>Why Choose Demo?</p>
        <ul className={style.list_block}>
          <li className={style.list}>
            <span className={style.list_title}>Wide Selection:</span> We stock a
            vast range of electronics, including the latest models of
            smartphones, tablets, televisions, cameras, and accessories from top
            brands like Apple, Samsung, Sony, and more.
          </li>
          <li className={style.list}>
            <span className={style.list_title}>Expert Guidance:</span> Our
            knowledgeable staff are here to help you make informed decisions.
            Whether you’re a tech novice or a seasoned pro, we’ll guide you to
            the right products that suit your needs and budget.
          </li>
          <li className={style.list}>
            <span className={style.list_title}>Competitive Pricing:</span> We
            believe that cutting-edge technology should be accessible to
            everyone. That’s why we offer competitive prices and regular
            promotions to give you the best value for your money.
          </li>
          <li className={style.list}>
            <span className={style.list_title}>
              Top-Notch Customer Service:
            </span>{" "}
            Your satisfaction is our priority. We provide personalized customer
            service, ensuring that your shopping experience is smooth and
            enjoyable. Plus, our after-sales support is here to assist you with
            any questions or concerns.
          </li>
          <li className={style.list}>
            <span className={style.list_title}>Secure Shopping:</span> Shop with
            confidence, knowing that your transactions are safe and secure. We
            offer a hassle-free return policy and warranty on all our products,
            so you can shop without worry.
          </li>
        </ul>
      </div>
      <div className={style.reason_md}>
        <p className={style.titles}>Discover the Demo Difference</p>
        <p>
          Whether you’re looking to upgrade your home entertainment system, find
          the perfect gift for a tech enthusiast, or simply stay ahead with the
          latest gadgets, Demo is the place to be. Visit us online or in-store
          today and experience the future of technology, right at your
          fingertips.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
