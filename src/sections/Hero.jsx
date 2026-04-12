import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { words } from "../constants";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text p",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.15, duration: 1, ease: "power2.inOut" },
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="" />
      </div>
      <div className="hero-layout relative z-10 flex flex-col md:flex-row items-center justify-between md:px-20 px-10 py-14 gap-5">
        {/* LEFT TEXT */}
        <div className="hero-text flex flex-col gap-6 md:max-w-xl">
          <p className="hero-title">Hi, I’m Oussema. </p>

          <p className="hero-body">
            I’m a Software Engineering graduate from the University of Ottawa
            that spent the last few years deep in the world of automotive tech
            at Ford Motors. From embedded systems to building interactive
            infotainment experiences with
            <span className="slide">
              <span className="wrapper relative -translate-y-1 md:-translate-y-2">
                {words.map((word, index) => (
                  <span
                    key={index}
                    className="flex items-center md:gap-3 gap-1 pb-20"
                  >
                    <img
                      src={word.imgPath}
                      alt="person"
                      className="xl:size-14 md:size-10 size-12 md:p-0 p-2 ml-2"
                    />
                  </span>
                ))}
              </span>
            </span>
          </p>

          <p className="hero-subtext max-w-xl">
            Curious by nature, I’m always exploring how things work and how to
            make them better. Nice to meet you!
          </p>
        </div>

        {/* RIGHT AVATAR */}
        <div className="flex justify-center items-center md:w-1/2">
          <img
            src="/images/avatar.png"
            alt="avatar"
            className="w-64 h-84 md:w-80 md:h-90 lg:w-[420px] lg:h-[420px] object-contain mr-5"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
