"use client";
import Footer from "@/components/Footer";
import React from "react";

const SocialIcon = ({ icon }) => {
    return (
        <i
            className={`bi bi-${icon} text-xl hover:text-red-400 transition cursor-pointer`}
        ></i>
    );
};
const Card = () => {
    return (
        <>
            <div className="z-10 relative text-black p-8 min-h-[80vh] w-[80vw] flex flex-col mx-auto container">
                <h1 className="text-4xl font-bold mb-4 ">
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
                    About - MathBuddy
                </h1>
                <div className="bg-white rounded-md mb-2">
                    <div className="px-4 my-4">
                        <p className="text-[20px] mb-5"> MathBuddy is an advanced AI-powered mathematics assistant built to help students learn efficiently, understand deeply, and solve problems accurately. 📘✨
                            Instead of giving quick answers, MathBuddy focuses on step-by-step clarity, logical reasoning, and concept understanding.</p>
                    </div>
                    <div className="px-4 my-4">
                        <p className="text-[20px]">From basic arithmetic to advanced algebra, geometry, and calculus, MathBuddy adapts to your level and guides you like a reliable digital tutor. 🧠📈</p>
                    </div>
                    <div className="px-4 my-4">
                        <p className="text-[20px]">Our vision is simple:
                            🎯 Make every student confident in math.
                            Every question understandable.
                            Every problem solvable.

                            MathBuddy isn’t just another tool —
                            it’s the partner in your learning journey. ✨📚</p>
                    </div>
                    <div className="px-4 my-6">
                        <div className="text-[20px] mb-3 bg-gray-300 rounded-md border">
                            <p>📱 The official MathBuddy apps for iOS and Android are currently in development and will be released shortly after the website launch.</p>
                        </div>
                        <div className="flex  sm:flex-row gap-6 items-center"></div>
                    </div>
                </div>
            </div>
            <Footer className='mt-10' />
        </>
    );
};
export default Card;
