import { Icon } from "@iconify/react";
import { useEffect, useState, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import Heading from "../ui/Heading";

export default function Contact() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  const mainHeading = useRef(null);
  const subHeading = useRef(null);
  const contactSection = useRef(null);

  // GSAP animation
  useEffect(() => {
    ScrollTrigger.create({
      trigger: contactSection.current,
      start: "180px bottom",
      animation: gsap
        .timeline()
        .to(
          mainHeading.current,
          { opacity: 1, y: 0, duration: 1.2, ease: "power4.out" },
          0
        )
        .to(
          subHeading.current,
          { opacity: 1, y: 0, duration: 1.2, ease: "power4.out" },
          0.2
        ),
      toggleActions: "play none none none",
    });
  }, []);

  // Live clock
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // LinkedIn redirect
  const openLinkedIn = () => {
    window.open(
      "https://www.linkedin.com/in/hardik-dhameeja-9700192b0/",
      "_blank"
    );
  };

  return (
    <section
      id="contact"
      className="my-[10%] overflow-hidden"
      aria-label="contact me"
    >
      <Heading title="Contact" />

      <div
        ref={contactSection}
        className="mt-16 flex flex-col gap-20 md:grid md:grid-cols-6 md:px-12"
      >
        {/* LEFT SIDE */}
        <div className="col-span-4">
          {/* MAIN HEADING (RESTORED) */}
          <h3
            ref={mainHeading}
            className="max-w-lg 2xl:max-w-3xl text-heading-3 2xl:text-7xl font-semibold leading-tight translate-y-10 opacity-0"
          >
            Have an awesome idea? Let&apos;s bring it to life.
          </h3>

          {/* SUB TEXT */}
          <p
            ref={subHeading}
            className="mt-6 max-w-xl text-heading-4 2xl:text-5xl font-medium text-secondary-600 translate-y-10 opacity-0"
          >
            Connect with me on LinkedIn
          </p>

          {/* BUTTON */}
          <button
            onClick={openLinkedIn}
            className="button group mt-10 border duration-200 hover:border-accent-400 hover:bg-transparent"
          >
            <span className="relative">
              <span className="absolute top-4 h-1 w-0 bg-secondary-700 opacity-90 duration-300 ease-inOut group-hover:w-full"></span>
              <span className="group-hover:text-accent-400">
                Send Message
              </span>
            </span>
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-span-2 space-y-10 text-accent-300">
          <div>
            <h4 className="text-body-1 2xl:text-4xl font-semibold">
              My Digital Spaces
            </h4>

            <div className="mt-4 space-y-3 text-body-2 2xl:text-3xl">
              <a
                href="https://github.com/hardik211005"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2"
              >
                <Icon icon="pajamas:github" />
                Github
              </a>

              <a
                href="https://www.linkedin.com/in/hardik-dhameeja-9700192b0/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2"
              >
                <Icon icon="pajamas:linkedin" />
                LinkedIn
              </a>

              <a
                href="https://x.com/dhameeja90060"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2"
              >
                <Icon icon="pajamas:twitter" />
                Twitter
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-body-1 font-semibold 2xl:text-4xl">
              Location
            </h4>
            <p className="text-body-2 2xl:text-3xl">
              New Delhi, India <br />
              {time}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
