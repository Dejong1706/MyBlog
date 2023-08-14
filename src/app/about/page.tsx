import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "나의 커리어 소개",
};

const TITLE_CLASS = "text-2xl font-bold text-gray-800 my-2";
const P_CLASS = "text-sm lg:text-lg font-semibold";
export default function AboutPage() {
  return (
    <div>
      <Hero />
      <section className="w-full m-auto p-8 m-8 text-center">
        <div className="w-full m-auto lg:w-2/3 bg-white border-2 border-black p-4 rounded-xl">
          <h2 className={TITLE_CLASS}>Who Am I?</h2>
          <p className={P_CLASS}>꾸미는것을 좋아하는 프론트엔드 개발자 🎨</p>
          <h2 className={TITLE_CLASS}>Carrer</h2>
          <p className={P_CLASS}>한남대학교 컴퓨터공학과 졸업(2023.02) 🏫</p>
          <p className={P_CLASS}>
            2022학년도 한남대학교 컴퓨터공학과 학술제 / 장려상 / 2022.06.13. /
            Front 🏫
          </p>
          <p className={P_CLASS}>
            HCS 현장연계 미래선도인재양성지원사업 2022학년도 실전문제 연구팀
            연구성과 교내 경진대회 / 한남대학교 실전문제연구사업단 / 2022.11.04.
            / 3위(동상) / Front 🏫
          </p>
          <p className={P_CLASS}>
            HCS 현장연계 미래선도인재양성지원사업 2022학년도 실전문제 연구팀
            연구성과 본선 경진대회 / 한남대학교 실전문제연구사업단 / 2022.11.11.
            / 4위(장려상) / Front🏫
          </p>
          <p className={P_CLASS}>
            아트와 프론트엔드 개발자 인턴(2022.12~23.05) 🐢
          </p>
          <h2 className={TITLE_CLASS}>Skills</h2>
          <p className={P_CLASS}>
            <b className="text-cyan-200">React</b>, Next.Js,{" "}
            <b className="text-orange-500">Git</b>,{" "}
            <b className="text-cyan-400">tailwindCSS</b>,
            <b className="text-blue-600">VSCode</b>,
            <b className="text-yellow-300">JavaScript</b>
            <b className="text-sky-600">TypeScript</b>
          </p>
        </div>
      </section>
    </div>
  );
}
