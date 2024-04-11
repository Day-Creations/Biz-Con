import HeroSectionImg from "@/public/bg-img-daycreations.jpg";
import HeroSectionImgMobile from "@/public/bg-img-daycreations-mobile.jpg";
import Navbar from "./components/Navbar";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <div className="absolute w-full -z-10">
        <Image
          src={HeroSectionImg}
          alt="hero-section"
          width={1250}
          height={450}
          className="mx-auto md:block hidden "
        />

        {/* <Image
          src={HeroSectionImgMobile}
          alt="hero-section"
          width={840}
          height={790}
          className="mx-auto md:hidden block absolute top-20"
        /> */}
      </div>

      <Navbar />

      {/* DESKTOP */}
      <section className="z-10 max-w-[78rem] text-white mx-auto space-y-4 w-[40%] text-center mt-5 md:block hidden">
        <h1 className="text-[2.5rem] tracking-tighter">
          Connect on Star Vlad ✨🌟⭐
        </h1>
        <p className="text-lg">
          Discover, stream, and share a constantly expanding mix of music from
          emerging and major artists around the world.
        </p>
        <p>
          <Link
            href={"/signup"}
            className="bg-[#feaa00] py-3 px-6 rounded text-lg"
          >
            Sign Up For Free
          </Link>
        </p>
      </section>

      {/* MOBILE */}

      <section
        className=" md:hidden flex items-end h-[500px] bg-no-repeat bg-center bg-cover pb-8"
        style={{
          backgroundImage: `url(${HeroSectionImgMobile.src})`,
        }}
      >
        <section className="">
          <h1 className="text-white text-3xl font-semibold px-4 pb-2">What&apos;s next in entertainment, is first on Star Vlad</h1>

          <p className="w-[90%] mx-auto py-3 text-center rounded bg-white text-lg font-medium active:scale-95">
            <Link href={"/"} className=""> Create a free account</Link>
          </p>
        </section>
      </section>
    </>
  );
};

export default Home;
