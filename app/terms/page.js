"use client";
import Lenis from "lenis";
import { useEffect } from "react";
import Footer from "@/components/Footer";



const Card = () => {
    
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
        }, []);

    return (
       <>
        <section id="terms-of-service" className="max-w-4xl mx-auto px-4 md:px-6 py-12">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Terms of Service — MathBuddy</h1>
            <p className="text-gray-600 mb-8 text-lg md:text-xl">
                <strong>Last Updated:</strong> November 2025
            </p>

            <div className="bg-white rounded-md px-2 my-3">
            <div className="mb-8 ">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">1. Use of Service</h2>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg lg:text-xl">
                    MathBuddy provides educational tools, AI-generated solutions, and math support.
                    You agree to use MathBuddy only for lawful and educational purposes.
                    Misuse of the platform, including attempts to hack, bypass limits, or exploit AI responses,
                    is prohibited.
                </p>
            </div>

            <div className="mb-8">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">2. No Guarantee of Accuracy</h2>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg lg:text-xl">
                    MathBuddy aims to provide accurate explanations and solutions, but errors may occur.
                    You understand that the platform is a learning tool and{" "}
                    <strong>not a replacement for teachers, professional tutors, or certified academic assistance.</strong>
                </p>
            </div>

            <div className="mb-8">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">3. Account &amp; Access</h2>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg lg:text-xl">
                    You may be required to create an account. You are responsible for keeping your login information secure.
                    MathBuddy may suspend or terminate accounts for misuse or policy violations.
                </p>
            </div>

            <div className="mb-8">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">4. Payments &amp; Subscriptions</h2>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg lg:text-xl">
                    Some features may require a paid plan. Subscription fees are non-refundable unless otherwise stated.
                    Cancellation stops future billing but does not refund previous charges.
                </p>
            </div>

            <div className="mb-8">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">5. Intellectual Property</h2>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg lg:text-xl">
                    All content, branding, design, and platform features belong to MathBuddy.
                    You may not copy, resell, or redistribute our content without permission.
                </p>
            </div>

            <div className="mb-8">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">6. Changes to Service</h2>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg lg:text-xl">
                    MathBuddy may update features, pricing, or terms at any time.
                    Continued use means acceptance of updates.
                </p>
            </div>

            <div className="mb-5">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">7. Limitation of Liability</h2>
                <p className="text-gray-600 leading--relaxed text-base md:text-lg lg:text-xl">
                    MathBuddy is not responsible for academic results, test scores, data loss, or system downtime.
                    You use the service at your own risk.
                </p>
            </div>
            </div>
        </section>

        <Footer className='mt-10' />
       </>
    );
};

export default Card;
