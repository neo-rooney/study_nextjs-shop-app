"use client";

import Image from "next/image";
import React from "react";
import LogoPath from "@/assets/colorful.svg";
import styles from "./Auth.module.scss";
import Loader from "@/components/loader/Loader";

const LoginClient = () => {
  return (
    <>
      <Loader />
      <section className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.logo}>
            <Image src={LogoPath} alt="logo" priority />
          </h1>
          <form className={styles.form}>
            {/* Input */}
            Input
            <div className={styles.group}>
              {/* 자동 로그인, 비밀번호 수정 */}
              자동 로그인, 비밀번호 수정
            </div>
            <div className={styles.buttonGroup}>
              {/* Button */}
              Button
              <div>{/* Button */}</div>
              Button
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default LoginClient;
