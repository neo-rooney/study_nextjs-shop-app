"use client";

import Image from "next/image";
import React, { useState } from "react";
import LogoPath from "@/assets/colorful.svg";
import { useRouter } from "next/navigation";
import styles from "./Auth.module.scss";
import Loader from "@/components/Loader/Loader";
import Input from "@/components/Input/Input";
import AutoSignInCheckbox from "@/components/AutoSignInCheckbox/AutoSignInCheckbox";

const LoginClient = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isAutoLogin, setIsAutoLogin] = useState(false);

  const router = useRouter();

  const redirectUser = () => {
    router.push("/");
  };

  const loginUser = (e) => {
    e.prevnetDefault();
    setIsLoading(true);
  };

  const signInWithGoogle = () => {};

  return (
    <>
      {isLoading && <Loader />}
      <section className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.logo}>
            <Image src={LogoPath} alt="logo" width={247} />
          </h1>
          <form className={styles.form} onSubmit={loginUser}>
            {/* input */}
            <Input
              email
              icon="letter"
              id="email"
              name="email"
              label="이메일"
              placeholder="아이디(이메일)"
              className={styles.control}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              password
              icon="lock"
              id="password"
              name="password"
              label="비밀번호"
              placeholder="비밀번호"
              className={styles.control}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className={styles.group}>
              {/* 자동 로그인, 비밀번호 수정 */}
              <AutoSignInCheckbox
                checked={isAutoLogin}
                onChange={(e) => setIsAutoLogin(e.target.checked)}
              />
            </div>
            <div className={styles.buttonGroup}>
              {/* Button */}
              Button
              <div>
                {/* Button */}
                Button
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default LoginClient;
