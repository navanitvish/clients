import React, { useEffect, useRef } from 'react';
import { Monitor, Users, Trophy } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

const StepsLayout = () => {
  const textRefs = useRef([]);
  
  const steps = [
    {
      title: "Select a Contest",
      description: "Choose from our range of live and upcoming contests.",
      icon: <Monitor className="w-8 h-8" />,
      numberGradient: "from-blue-400 to-blue-600",
      iconGradient: "from-blue-400 to-blue-600",
      borderHoverColor: "hover:border-blue-400/50"
    },
    {
      title: "Place Your Unique Bid",
      description: "Strategically place a unique bid to increase your chances of winning big.",
      icon: <Users className="w-8 h-8" />,
      numberGradient: "from-purple-400 to-purple-600",
      iconGradient: "from-purple-400 to-purple-600",
      borderHoverColor: "hover:border-purple-400/50"
    },
    {
      title: "Win and withdraw Instantly",
      description: "Win big and withdraw your winnings instantly with our fast, hassle-free payout process!",
      icon: <Trophy className="w-8 h-8" />,
      numberGradient: "from-red-400 to-red-600",
      iconGradient: "from-red-400 to-red-600",
      borderHoverColor: "hover:border-red-400/50"
    }
  ];

  useEffect(() => {
    textRefs.current.forEach((textRef, index) => {
      if (textRef) {
        const text = new SplitType(textRef, { types: 'chars' });
        const chars = text.chars;

        gsap.set(chars, {
          opacity: 0,
          y: 20
        });

        gsap.to(chars, {
          opacity: 1,
          y: 0,
          duration: 0.05,
          stagger: 0.02,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textRef,
            start: "top bottom-=100",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.3
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-black px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent mb-4">
            Get Started in 3 Easy Steps
          </h2>
          <p className="text-lg text-gray-300/80 max-w-2xl mx-auto">
            Join thousands of players and start your winning journey today
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/4 right-0 w-full h-[2px] bg-gray-700 transform translate-x-1/2">
                  <div className={`absolute top-1/2 right-0 w-3 h-3 rounded-full bg-gradient-to-br ${step.numberGradient} transform -translate-y-1/2 translate-x-full`} />
                </div>
              )}

              <div className={`relative h-full bg-black bg-opacity-50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 transition-all duration-300 transform hover:-translate-y-1 ${step.borderHoverColor}`}>
                <div className={`absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-gradient-to-br ${step.numberGradient} flex items-center justify-center text-xl font-bold text-white shadow-lg`}>
                  {index + 1}
                </div>

                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.iconGradient} flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                  {step.icon}
                </div>

                <h3 className={`text-xl font-bold bg-gradient-to-r ${step.numberGradient} bg-clip-text text-transparent mb-3`}>
                  {step.title}
                </h3>
                <p 
                  ref={el => textRefs.current[index] = el}
                  className="text-gray-300/80 leading-relaxed"
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepsLayout;