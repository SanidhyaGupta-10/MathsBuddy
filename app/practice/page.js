"use client";

import Footer from "@/components/Footer";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Lenis from "@studio-freight/lenis";

const Practice = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // GSAP animation for headings and paragraphs
    gsap.from(containerRef.current.querySelectorAll("h1, p"), {
      y: 50,
      stagger: 0.2,
      duration: 0.2,
      ease: "power3.out",
    });

    // Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => t,
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
   <>
    <div className="relative min-h-screen text-black">
      <div
        ref={containerRef}
        className="z-10 relative p-4 md:p-8 min-h-[80vh] w-full md:w-[90%] max-w-5xl mx-auto flex flex-col"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4 flex items-center">
          <span
            className="inline-flex items-center justify-center rounded-full bg-blue-600 mr-2"
            style={{ width: "30px", height: "30px" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="white"
            >
              <path d="M16.4356 3.21188C16.8261 2.82185 17.4592 2.82157 17.8496 3.21188L20.6777 6.04099C21.0681 6.43152 21.0682 7.06457 20.6777 7.45505L7.2422 20.8896H3.00001V16.6475L16.4356 3.21188ZM5.00001 17.4756V18.8896H6.41407L15.7276 9.57615L14.3135 8.16208L5.00001 17.4756ZM4.5293 1.3193C4.70583 0.893505 5.29418 0.893508 5.47071 1.3193L5.72364 1.93063C6.15555 2.97342 6.96155 3.80613 7.97462 4.2568L8.69239 4.57614C9.10267 4.75896 9.10262 5.35616 8.69239 5.53903L7.93263 5.87692C6.94497 6.3162 6.15339 7.11943 5.71387 8.1279L5.4668 8.69334C5.28636 9.10747 4.71366 9.10747 4.53321 8.69334L4.28614 8.1279C3.84661 7.11943 3.05506 6.3162 2.06739 5.87692L1.30762 5.53903C0.897483 5.35617 0.897435 4.75896 1.30762 4.57614L2.0254 4.2568C3.03845 3.80614 3.84446 2.97344 4.27637 1.93063L4.5293 1.3193ZM15.7276 6.74802L17.1426 8.16208L18.5567 6.74802L17.1426 5.33395L15.7276 6.74802Z" />
            </svg>
          </span>
          Practice Problems
        </h1>

        <div className="bg-white rounded-md p-6">
          <div className="mb-12">
            <h1 className="text-2xl md:text-3xl mb-5">About Our Practice Problems</h1>
            <p className="text-lg md:text-xl text-gray-900">
              To get additional practice, check out the sample problems in each of the topics above. We provide full
              solutions with steps for all practice problems. There's no better way to find math help online than
              with MathsBuddy, so also make sure you download our mobile app for iOS and Android today! Learn more
              than what the answer is - with the math helper app, you'll learn the steps behind it too.
            </p>
          </div>

          <div className="mb-12">
            <h1 className="text-2xl md:text-3xl mb-5">Benefits</h1>
            <p className="text-lg md:text-xl text-gray-900">
              Even simple math problems become easier to solve when broken down into steps. From basic additions to
              calculus, the process of problem solving usually takes a lot of practice before answers come easily. As
              problems become more complex, it becomes even more important to understand the step-by-step process by
              which we solve them. At MathsBuddy, our goal is to take your understanding of math to a new level.
            </p>
          </div>

          <div>
            <h1 className="text-2xl md:text-3xl mb-5">MathsBuddy Plus</h1>
            <p className="text-lg md:text-xl text-gray-900">
              If you find MathsBuddy useful, try{" "}
              <a href="./pricing" className="text-blue-600 hover:scale-105 transition-transform">
                MathsBuddy Plus
              </a>{" "}
              today! It offers an ad-free experience and more detailed explanations. In short,{" "}
              <a href="./pricing" className="text-blue-600 hover:scale-105 transition-transform">
                MathsBuddy Plus
              </a>{" "}
              goes into more depth than the standard version, giving students more resources to learn the step-by-step
              process of solving math problems.
            </p>
          </div>
        </div>
      </div>
    </div>

    <Footer className='mt-10' />
   </>
  );
};

export default Practice;
