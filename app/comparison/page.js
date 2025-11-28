"use client";

import React, { useEffect, useRef } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { gsap } from "gsap";
import Lenis from "@studio-freight/lenis";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

// Chart data
const data = [
  { feature: "Practice Questions", free: 1, standard: 3 },
  { feature: "Doubt Solving / Chat", free: 0, standard: 2 },
  { feature: "Progress Tracking", free: 1, standard: 2 },
  { feature: "Certificates / Milestones", free: 0, standard: 1 },
  { feature: "Exclusive Features", free: 0, standard: 1 },
];

const COLORS = { free: "#60a5fa", standard: "#fbbf24" };

export default function AnimatedChart() {
  const chartRef = useRef(null);

  // GSAP Animation for bars
  useEffect(() => {
    gsap.from(".bar-cell", {
      duration: 1,
      scaleX: 0,
      transformOrigin: "left center",
      stagger: 0.2,
      ease: "back.out(1.7)",
    });

    // Lenis smooth scroll
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
    <div className="relative min-h-[90vh] -mt-30 ">
      {/* 3D Background */}
      <Canvas className="absolute inset-0 -z-10">
        <Stars radius={50} depth={20} count={200} factor={4} saturation={0} fade />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.2} />
      </Canvas>

      <div className="p-6 max-w-3xl mx-auto relative z-10">
        <h2 className="text-2xl font-bold mb-6 text-center">Maths Buddy: Free vs Standard</h2>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data} layout="vertical" margin={{ top: 20, right: 30, left: 150, bottom: 20 }} ref={chartRef}>
            <XAxis type="number" hide />
            <YAxis dataKey="feature" type="category" width={180} />
            <Tooltip />
            <Bar dataKey="free" radius={[10, 10, 10, 10]}>
              {data.map((entry, index) => (
                <Cell key={`cell-free-${index}`} className="bar-cell" fill={COLORS.free} />
              ))}
            </Bar>
            <Bar dataKey="standard" radius={[10, 10, 10, 10]}>
              {data.map((entry, index) => (
                <Cell key={`cell-standard-${index}`} className="bar-cell" fill={COLORS.standard} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <div className="flex justify-center mt-4 mb-23 gap-6">
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 bg-blue-400 rounded-full"></span> Free
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 bg-yellow-400 rounded-full"></span> Standard
          </div>
        </div>
      </div>
    </div>
  );
}
