import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 },
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        },
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <iframe
                className="w-full h-full rounded-xl"
                src="https://www.youtube.com/embed/V1O-UvQpLxA"
                title="Ryde App Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="text-content">
              <a
                href="https://github.com/orgs/uOttawaGymManagementSys/repositories"
                className="group relative inline-block"
              >
                <h2 className="mb-4">Gym Insights</h2>
                <p className="text-black md:text-xl mb-2">
                  a real-time traffic and equipment status tracker for
                  university of Ottawa Gym Facilities (electron desktop app +
                  react native mobile app)
                </p>

                <span className="absolute left-0 -bottom-6 text-sm text-gray-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  → Click to view GitHub repository
                </span>
              </a>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/project2.png"
                  alt="Library Management Platform"
                />
              </div>
              <a
                href="https://github.com/orgs/SleepSentinel/repositories"
                className="group relative inline-block"
              >
                <h2>
                  Sleep Sentinel - Baby monitoring embedded system (ESP32
                  Microcontroller, Sensors, WebSocket Server, React Native App)
                </h2>
                <span className="absolute left-0 -bottom-6 text-sm text-gray-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  → Click to view GitHub repository
                </span>
              </a>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/project3.png" alt="YC Directory App" />
              </div>
              <a
                href="https://github.com/OussemaNijewi/KineQuest"
                className="group relative inline-block"
              >
                <h2>
                  KineQuest: A VR Proprioception Lab Simulation for the
                  University of Ottawa Human Kinetics Students (Unreal Engine VR
                  Template, Oculus Quest 2)
                </h2>
                <span className="absolute left-0 -bottom-6 text-sm text-gray-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  → Click to view GitHub repository
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
