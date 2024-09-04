import React from "react";
import { useRouter } from "next/navigation";
import style from "./index.module.css";

const Header = () => {
  const router = useRouter();
  const handleLogout = () => {
    localStorage.clear();
    router.push("/login");
  };

  return (
    <div className={style.wrapper}>
      <header>
        <div className={style.header}>
          <div className={style.header__logo}>
            <img src="/logo.png" className="w-auto h-8" alt="logo" />
          </div>
          <nav className={style.header__nav}>
            <p onClick={() => router.push("/")}>Home</p>
            <p onClick={() => router.push("/catalog")}>Catalog</p>
            <p onClick={() => router.push("/about")}>About</p>
            <p onClick={() => router.push("/contact")}>Contact</p>
          </nav>
          <div className={style.user} onClick={handleLogout}>
            <p>Log out</p>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
