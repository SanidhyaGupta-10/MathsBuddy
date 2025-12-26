"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Lenis from "@studio-freight/lenis";
import Footer from '@/components/Footer'

const Reference = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
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

    // GSAP animation: fade in headings and list items
    if (containerRef.current) {
      gsap.from(containerRef.current.querySelectorAll("h1, h2, li"), {
        y: 20,
        stagger: 0.05,
        duration: 0.1,
        ease: "power2.out",
      });
    }
  }, []);

  return (
    <>
    <div
    ref={containerRef}
    className="z-10 relative text-black p-4 md:p-8 min-h-[80vh] w-full md:w-[90vw] lg:w-[80vw] flex flex-col mx-auto container"
    >
      <h1 className="text-3xl md:text-4xl font-bold mb-4 ">
        <span
          className="inline-flex items-center justify-center rounded-full bg-blue-600 mr-2"
          style={{ width: "30px", height: "30px" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"
              fill="#fff"
            />
          </svg>
        </span>
        Reference
      </h1>

      <div className="bg-white mb-10 rounded-md">
        {/* Algebra: Common Logarithms */}
        <div className="px-2 my-3 mb-12">
          <h2 className="text-xl md:text-2xl pl-2 mb-4">Algebra: Common Logarithms</h2>
          <ul className="list-none pl-2 space-y-2 text-base md:text-[17px]">
            <li><a href="#definition" className="text-gray-700 hover:text-blue-700 transition-colors">Definition of Common Logarithm</a></li>
            <li><a href="#product-rule" className="text-gray-700 hover:text-blue-700 transition-colors">Product Rule</a></li>
            <li><a href="#quotient-rule" className="text-gray-700 hover:text-blue-700 transition-colors">Quotient Rule</a></li>
            <li><a href="#power-rule" className="text-gray-700 hover:text-blue-700 transition-colors">Power Rule</a></li>
            <li><a href="#change-of-base" className="text-gray-700 hover:text-blue-700 transition-colors">Change of Base Rule</a></li>
            <li><a href="#inverse-rule" className="text-gray-700 hover:text-blue-700 transition-colors">Inverse Rule</a></li>
            <li><a href="#power-of-log" className="text-gray-700 hover:text-blue-700 transition-colors">Power of Log Rule</a></li>
            <li><a href="#log-of-power" className="text-gray-700 hover:text-blue-700 transition-colors">Log of Power Rule</a></li>
            <li><a href="#rule-of-one" className="text-gray-700 hover:text-blue-700 transition-colors">Rule of One</a></li>
            <li><a href="#rule-of-ten" className="text-gray-700 hover:text-blue-700 transition-colors">Rule of Ten</a></li>
          </ul>
        </div>

        {/* Algebra: Exponents */}
        <div className="px-2 my-3 mb-12">
          <h2 className="text-xl md:text-2xl pl-2 mb-4">Algebra: Exponents</h2>
          <ul className="list-none pl-2 space-y-2 text-base md:text-[17px]">
            <li><a href="#product-rule" className="text-gray-700 hover:text-blue-700 transition-colors">Product Rule</a></li>
            <li><a href="#quotient-rule" className="text-gray-700 hover:text-blue-700 transition-colors">Quotient Rule</a></li>
            <li><a href="#power-rule" className="text-gray-700 hover:text-blue-700 transition-colors">Power Rule</a></li>
            <li><a href="#negative-power" className="text-gray-700 hover:text-blue-700 transition-colors">Negative Power Rule</a></li>
            <li><a href="#multiplication-distributive" className="text-gray-700 hover:text-blue-700 transition-colors">Multiplication Distributive Property</a></li>
            <li><a href="#division-distributive" className="text-gray-700 hover:text-blue-700 transition-colors">Division Distributive Property</a></li>
            <li><a href="#rule-of-zero" className="text-gray-700 hover:text-blue-700 transition-colors">Rule of Zero</a></li>
            <li><a href="#rule-of-one" className="text-gray-700 hover:text-blue-700 transition-colors">Rule of One</a></li>
          </ul>
        </div>

        {/* Algebra: Imaginary Numbers */}
        <div className="px-2 my-3 mb-12">
          <h2 className="text-xl md:text-2xl pl-2 mb-4">Algebra: Imaginary Numbers</h2>
          <ul className="list-none pl-2 space-y-2 text-base md:text-[17px]">
            <li><a href="#square-rule" className="text-gray-700 hover:text-blue-700 transition-colors">Square Rule</a></li>
            <li><a href="#fourth-power-rule" className="text-gray-700 hover:text-blue-700 transition-colors">Fourth Power Rule</a></li>
            <li><a href="#power-reduction-rule" className="text-gray-700 hover:text-blue-700 transition-colors">Power Reduction Rule</a></li>
          </ul>
        </div>

        {/* Algebra: Natural Logarithms */}
        <div className="px-2 my-3 mb-12">
          <h2 className="text-xl md:text-2xl pl-2 mb-4">Algebra: Natural Logarithms</h2>
          <ul className="list-none pl-2 space-y-2 text-base md:text-[17px]">
            <li><a href="#definition-natural-log" className="text-gray-700 hover:text-blue-700 transition-colors">Definition of Natural Logarithm</a></li>
            <li><a href="#product-rule-natural" className="text-gray-700 hover:text-blue-700 transition-colors">Product Rule</a></li>
            <li><a href="#quotient-rule-natural" className="text-gray-700 hover:text-blue-700 transition-colors">Quotient Rule</a></li>
            <li><a href="#power-rule-natural" className="text-gray-700 hover:text-blue-700 transition-colors">Power Rule</a></li>
            <li><a href="#rule-of-one-natural" className="text-gray-700 hover:text-blue-700 transition-colors">Rule of One</a></li>
            <li><a href="#rule-of-negative-one-natural" className="text-gray-700 hover:text-blue-700 transition-colors">Rule of Negative One</a></li>
            <li><a href="#rule-of-e-natural" className="text-gray-700 hover:text-blue-700 transition-colors">Rule of e</a></li>
          </ul>
        </div>

        {/* Algebra: Sums and Differences */}
        <div className="px-2 my-3 mb-12">
          <h2 className="text-xl md:text-2xl pl-2 mb-4">Algebra: Sums and Differences of Squares and Cubes</h2>
          <ul className="list-none pl-2 space-y-2 text-base md:text-[17px]">
            <li><a href="#difference-of-squares" className="text-gray-700 hover:text-blue-700 transition-colors">Difference of Squares</a></li>
            <li><a href="#sum-of-squares" className="text-gray-700 hover:text-blue-700 transition-colors">Sum of Squares</a></li>
            <li><a href="#difference-of-cubes" className="text-gray-700 hover:text-blue-700 transition-colors">Difference of Cubes</a></li>
            <li><a href="#sum-of-cubes" className="text-gray-700 hover:text-blue-700 transition-colors">Sum of Cubes</a></li>
            <li><a href="#square-of-difference" className="text-gray-700 hover:text-blue-700 transition-colors">Square of Difference</a></li>
            <li><a href="#square-of-sum" className="text-gray-700 hover:text-blue-700 transition-colors">Square of Sum</a></li>
            <li><a href="#cube-of-difference" className="text-gray-700 hover:text-blue-700 transition-colors">Cube of Difference</a></li>
            <li><a href="#cube-of-sum" className="text-gray-700 hover:text-blue-700 transition-colors">Cube of Sum</a></li>
          </ul>
        </div>

        {/* Algebra: Trigonometric Identities */}
        <div className="px-2 my-3 mb-12">
          <h2 className="text-xl md:text-2xl pl-2 mb-4">Algebra: Trigonometric Identities</h2>
          <ul className="list-none pl-2 space-y-2 text-base md:text-[17px]">
            <li><a href="#pythagorean-identities" className="text-gray-700 hover:text-blue-700 transition-colors">Pythagorean Identities</a></li>
            <li><a href="#reciprocal-identities" className="text-gray-700 hover:text-blue-700 transition-colors">Reciprocal Identities</a></li>
            <li><a href="#ratio-identities" className="text-gray-700 hover:text-blue-700 transition-colors">Ratio Identities</a></li>
            <li><a href="#half-angle-identities" className="text-gray-700 hover:text-blue-700 transition-colors">Half Angle Identities</a></li>
            <li><a href="#odd-even-identities" className="text-gray-700 hover:text-blue-700 transition-colors">Odd and Even Identities</a></li>
            <li><a href="#cofunction-identities" className="text-gray-700 hover:text-blue-700 transition-colors">Cofunction Identities</a></li>
            <li><a href="#periodicity-identities" className="text-gray-700 hover:text-blue-700 transition-colors">Periodicity Identities</a></li>
            <li><a href="#sum-difference-identities" className="text-gray-700 hover:text-blue-700 transition-colors">Sum and Difference Identities</a></li>
            <li><a href="#product-to-sum-identities" className="text-gray-700 hover:text-blue-700 transition-colors">Product To Sum Identities</a></li>
            <li><a href="#sum-to-product-identities" className="text-gray-700 hover:text-blue-700 transition-colors">Sum To Product Identities</a></li>
          </ul>
        </div>

        {/* Calculus: Differentiation */}
        <div className="px-2 my-3 mb-12">
          <h2 className="text-xl md:text-2xl pl-2 mb-4">Calculus: Differentiation</h2>
          <ul className="list-none pl-2 space-y-2 text-base md:text-[17px]">
            <li><a href="#constant-factor-rule" className="text-gray-700 hover:text-blue-700 transition-colors">Constant Factor Rule</a></li>
            <li><a href="#power-rule" className="text-gray-700 hover:text-blue-700 transition-colors">Power Rule</a></li>
            <li><a href="#sum-rule" className="text-gray-700 hover:text-blue-700 transition-colors">Sum Rule</a></li>
            <li><a href="#product-rule" className="text-gray-700 hover:text-blue-700 transition-colors">Product Rule</a></li>
            <li><a href="#quotient-rule" className="text-gray-700 hover:text-blue-700 transition-colors">Quotient Rule</a></li>
            <li><a href="#chain-rule" className="text-gray-700 hover:text-blue-700 transition-colors">Chain Rule</a></li>
            <li><a href="#trig-differentiation" className="text-gray-700 hover:text-blue-700 transition-colors">Trigonometric Differentiation</a></li>
            <li><a href="#inverse-trig-differentiation" className="text-gray-700 hover:text-blue-700 transition-colors">Inverse Trigonometric Differentiation</a></li>
          </ul>
        </div>

        {/* Calculus: Integration */}
        <div className="px-2 my-3 mb-12">
          <h2 className="text-xl md:text-2xl pl-2 mb-4">Calculus: Integration</h2>
          <ul className="list-none pl-2 space-y-2 text-base md:text-[17px]">
            <li><a href="#constant-factor-integration" className="text-gray-700 hover:text-blue-700 transition-colors">Constant Factor Rule</a></li>
            <li><a href="#power-rule-integration" className="text-gray-700 hover:text-blue-700 transition-colors">Power Rule</a></li>
            <li><a href="#sum-rule-integration" className="text-gray-700 hover:text-blue-700 transition-colors">Sum Rule</a></li>
            <li><a href="#substitution" className="text-gray-700 hover:text-blue-700 transition-colors">Integration by Substitution</a></li>
            <li><a href="#power-substitution" className="text-gray-700 hover:text-blue-700 transition-colors">Power Substitution</a></li>
            <li><a href="#trigonometric-substitution" className="text-gray-700 hover:text-blue-700 transition-colors">Trigonometric Substitution</a></li>
            <li><a href="#integration-by-parts" className="text-gray-700 hover:text-blue-700 transition-colors">Integration by Parts</a></li>
            <li><a href="#trigonometric-integration" className="text-gray-700 hover:text-blue-700 transition-colors">Trigonometric Integration</a></li>
            <li><a href="#inverse-trigonometric-integration" className="text-gray-700 hover:text-blue-700 transition-colors">Inverse Trigonometric Integration</a></li>
            <li><a href="#trigonometric-reduction" className="text-gray-700 hover:text-blue-700 transition-colors">Trigonometric Reduction Formulas</a></li>
          </ul>
        </div>

      </div>
    </div>
    <Footer className='mt-10' />
            </>
  );
};

export default Reference;
