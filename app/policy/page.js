"use client";
import React from "react";
import Footer from "@/components/Footer";

const Card = () => {
    return (
        <>
            <section id="privacy-policy" className="max-w-4xl mx-auto px-6 py-12">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    Privacy Policy — MathBuddy
                </h1>
                <p className="text-gray-600 mb-10">
                    <strong>Last Updated:</strong> November 2025
                </p>

                <div className="bg-white rounded-md px-2 my-3">

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                            1. Information We Collect
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-[20px]">
                            We may collect personal information such as your name, email address,
                            usage activity, questions submitted, and system analytics. We only
                            collect information necessary to deliver and improve our services.
                        </p>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                            2. How We Use Your Data
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-[20px]">
                            Data collected is used to operate MathBuddy, improve features,
                            personalize learning, maintain security, and prevent misuse.
                            We do <strong>not sell or trade your personal information.</strong>
                        </p>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                            3. Cookies &amp; Tracking
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-[20px]">
                            MathBuddy may use cookies or similar technologies for authentication,
                            analytics, and performance enhancements. You may disable cookies, but
                            some features may not function properly without them.
                        </p>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                            4. Third-Party Services
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-[20px]">
                            We may integrate third-party tools such as authentication providers,
                            payment systems, analytics services, or AI APIs. These services follow
                            their own privacy policies and agreements.
                        </p>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                            5. Data Protection &amp; Security
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-[20px]">
                            We follow modern security practices to protect stored data. However,
                            no online platform can guarantee 100% protection against unauthorized access.
                        </p>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                            6. Children's Privacy
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-[20px]">
                            MathBuddy is intended for users
                            have parental or school supervision.
                            We do not knowingly store personal data from children without consent.
                        </p>
                    </div>

                    <div className="mb-5">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                            7. Your Data Rights
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-[20px]">
                            You may request access, correction, export, or deletion of your personal data.
                            For any requests, please contact us at the email provided.
                            Continued use of MathBuddy means you accept the most recent version of this policy.
                        </p>
                    </div>

                </div>

                <p className="mt-6 mb-6 text-gray-800 text-lg">
                    📧 <strong>Contact:</strong> support@mathbuddy.com
                    <br />
                    (replace with your real support address later)
                </p>
            </section>

            <Footer className='mt-10' />
        </>
    );
};

export default Card;
