"use client";
import React, { useEffect, useState } from "react";
import style from "../styles/login.module.css";
import backend from "@/shared/backend";
import { useRouter } from "next/navigation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  
  useEffect(()=>{
    const token = localStorage.getItem('token')
    if (token){
    router.push('/')
    }
  },[])
  
  const handleSubmit = (e: any) => {
    e.preventDefault();
    backend.login(email, password).then((data) => {
      if (data) {
        router.push("/");
      }
    });
  };

  return (
    <div className={style.wrapper}>
      <div className={style.title}>
        <h1>Welcome to</h1>
        <img src="/logo.png" className={style.logo} alt="logo" />
      </div>
      <div className={style.login}>
        <form
          onSubmit={(e) => e.preventDefault()}
          className={style.form}
        >
          <div className={style.form_group}>
            <label htmlFor="email" className="">
              Email
            </label>
            <input
              className="text-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              name="email"
            />
          </div>
          <div className={style.form_group}>
            <label htmlFor="password">Password</label>
            <input
              className="text-black"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              name="password"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="w-12/12 bg-slate-600 rounded-lg h-8"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;