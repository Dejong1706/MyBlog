import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "나의 커리어 소개",
};

const TITLE_CLASS = "text-2xl font-bold text-gray-800 my-2";
const P_CLASS = "font-semibold";
export default function AboutPage() {
  return (
    <>
      <Hero />
      <section className="bg-gray-100 shadow-lg p-8 m-8 text-center">
        <h2 className={TITLE_CLASS}>Who Am I?</h2>
        <p className={P_CLASS}>꾸미는것을 좋아하는 프론트엔드 개발자 🎨</p>
        <h2 className={TITLE_CLASS}>Carrer</h2>
        <p className={P_CLASS}>한남대학교 컴퓨터공학과 졸업(2023.02) 🏫</p>
        <p className={P_CLASS}>
          아트와 프론트엔드 개발자 인턴(2022.12~23.05) 🐢
        </p>
        <h2 className={TITLE_CLASS}>Skills</h2>
        <p className={P_CLASS}>
          React, Next.Js, Git, tailwindCSS, VSCode, TypeScript
        </p>
      </section>
    </>
  );
}
