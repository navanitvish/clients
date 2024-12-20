import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const WonByBidLanding = () => {
  const containerRef = useRef(null);
  const ribbonRef = useRef(null);
  const headingRef = useRef(null);
  const textRefs = useRef([]);
  const buttonRef = useRef(null);
  const circleRef = useRef(null);

  const handleDownloadAppClick = () => {
    window.open("https://www.transferx.in/trnsfr.YSloVo", "_blank");
  };

  useEffect(() => {
    // Split heading text for character animation
    const headingText = new SplitType(headingRef.current, { types: "chars" });
    const chars = headingText.chars;

    // Main timeline
    const tl = gsap.timeline({
      defaults: { ease: "power4.out" },
    });

    // Create circular reveal animation for heading
    tl.set(circleRef.current, {
      scale: 0,
      opacity: 0,
    }).to(circleRef.current, {
      scale: 1,
      opacity: 1,
      duration: 1.4,
      ease: "power2.inOut",
    });

    // Ribbon scale and rotate animation
    tl.fromTo(
      ribbonRef.current,
      {
        scale: 0.8,
        opacity: 0,
        rotation: -5,
      },
      {
        scale: 1,
        opacity: 1,
        rotation: 0,
        duration: 1.2,
        ease: "elastic.out(1, 0.8)",
      },
      "-=0.8"
    );

    // Heading characters circular animation
    chars.forEach((char, index) => {
      const angle = (index / chars.length) * Math.PI * 2;
      const radius = 50;

      tl.fromTo(
        char,
        {
          opacity: 0,
          x: Math.cos(angle) * radius,
          y: Math.sin(angle) * radius,
          scale: 0,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.7"
      );
    });

    // Text paragraphs staggered animation

    gsap.to(buttonRef.current, {
      rotation: 20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
    textRefs.current.forEach((textRef, index) => {
      tl.fromTo(
        textRef,
        {
          opacity: 0,
          x: index % 2 === 0 ? -100 : 100,
          rotationY: index % 2 === 0 ? -30 : 30,
        },
        {
          opacity: 1,
          x: 0,
          rotationY: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.6"
      );
    });

    // Button elastic animation
    tl.fromTo(
      buttonRef.current,
      {
        scale: 0,
        opacity: 0,
        rotation: -10,
      },
      {
        scale: 1,
        opacity: 1,
        rotation: 0,
        duration: 1,
        ease: "elastic.out(1, 0.5)",
      },
      "-=0.4"
    );

    // Enhanced button hover animation
    buttonRef.current.addEventListener("mouseenter", () => {
      gsap.to(buttonRef.current, {
        scale: 1.1,
        rotation: 5,
        duration: 0.4,
        ease: "power2.out",
      });
    });

    buttonRef.current.addEventListener("mouseleave", () => {
      gsap.to(buttonRef.current, {
        scale: 1,
        rotation: 0,
        duration: 0.4,
        ease: "power2.inOut",
      });
    });

    // Scroll-triggered animations with parallax effect
    textRefs.current.forEach((textRef, index) => {
      gsap.fromTo(
        textRef,
        {
          opacity: 0.5,
          y: 50,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          scrollTrigger: {
            trigger: textRef,
            start: "top bottom-=100",
            end: "top center",
            scrub: 1,
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="bg-black flex flex-col justify-between ">
      <div className="text-black py-8 flex-grow-0">
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center max-w-5xl gap-4">
          {/* <div ref={circleRef} className="w-40 h-40 bg-red-600 rounded-full absolute opacity-0" /> */}

          <h1
            ref={headingRef}
            className="text-4xl sm:text-4xl md:text-6xl  font-bold lg:text-6xl text-white   bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent text-center"
          >
            World's First APP
          </h1>

          <p
            ref={(el) => (textRefs.current[0] = el)}
            className="text-xl sm:text-xl md:text-2xl  bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent font-bold   p-6 rounded-xl shadow-lg leading-relaxed transform hover:-translate-y-1 transition-all duration-300"
          >
            World's First Skill-Based App Delivering 20x Faster Results
          </p>

          <p
            ref={(el) => (textRefs.current[1] = el)}
            className="text-xl sm:text-xl md:text-2xl text-white font-normal p-6 rounded-xl leading-relaxed "
          >
            Experience outcomes in minutes, not hours. WonByBid brings you the
            best and most exciting gaming experience.
          </p>

          <p
            ref={(el) => (textRefs.current[2] = el)}
            className="text-xl sm:text-xl md:text-2xl  backdrop-blur-sm font-medium text-white p-6 rounded-xl shadow-lg leading-relaxed transform hover:-translate-y-1 transition-all duration-300"
          >
            In just 10 days, WonByBid has become the talk of the town, bringing
            unmatched fun and excitement.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 p-4">
            <button
              ref={buttonRef}
              onClick={handleDownloadAppClick}
              className="relative px-8 py-4 bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 text-white rounded-xl text-lg font-semibold shadow-lg transform"
            >
              <span className="relative z-10">Download App</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WonByBidLanding;
