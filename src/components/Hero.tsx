import Image from "next/image";
import Link from "next/link";
import profileImage from "../../public/images/profile.jpg";

export default function Hero() {
  return (
    <section className="w-4/5 lg:w-1/2 m-auto bg-white rounded-xl border-2 border-black p-4">
      <Image
        className="mx-auto rounded-full"
        src={profileImage}
        alt="Picture of the author"
        width={250}
        height={250}
        priority
      />
      <h2 className="text-2xl lg:text-3xl text-center font-bold mt-2">
        {"Hi, I'm 병근"}
      </h2>
      <h3 className="text-center text-xl font-semibold">Front-end Engineer</h3>
      <p className="text-sm lg:text-lg text-center">
        꾸미는 것을 좋아하는 사람
      </p>
      <div className="text-center">
        <Link href="/contect">
          <button className="bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-xl px-4 py-1 mt-2">
            Contact Me
          </button>
        </Link>
      </div>
    </section>
  );
}
