import ContactForm from "@/components/ContactForm";
import { Metadata } from "next";
import { AiFillGithub } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Contact Me",
  description: "나에게 메일 보내기",
};

export default function ContactPage() {
  return (
    <section className="flex flex-col items-center">
      <div className="w-4/5 lg:w-1/2 bg-white text-center rounded-xl">
        <h2 className="text-2xl lg:text-3xl font-bold my-2">Contact Me</h2>
        <p>ppk0320@gmail.com</p>
        <ul className="flex gap-4 my-2 justify-center">
          <li>
            <a
              href="https://github.com/Dejong1706"
              target="_blank"
              rel="noreferrer"
              className="text-5xl text-slate-950"
            >
              <AiFillGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/b_geuni/"
              target="_blank"
              rel="noreferrer"
              className="text-5xl text-pink-500"
            >
              <FaInstagram />
            </a>
          </li>
        </ul>
        <h2 className="text-xl lg:text-3xl font bold my-8">
          Or Send me an email
        </h2>
      </div>
      <ContactForm />
    </section>
  );
}
