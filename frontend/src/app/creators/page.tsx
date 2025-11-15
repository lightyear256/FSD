"use client";

import React from "react";
import ProfileCard from "../components/ProfileCard";
import { motion } from "framer-motion";

// Container fade + stagger
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.15,
    },
  },
};

// MOTION-DOM SAFE letter animation (no nested transitions)
const letterVariants = {
  hidden: { opacity: 0, y: 25, rotateX: -70 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.4, // flat duration is required by motion-dom
    },
  },
};

function Creators() {
  return (
    <div className="relative overflow-hidden py-16 bg-black min-h-screen mt-20">

      {/* Soft glowing background circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-56 h-56 bg-gray-800/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-24 right-1/3 w-72 h-72 bg-gray-700/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">

        {/* Title Animation */}
        <div className="text-center mb-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white drop-shadow leading-tight select-none"
          >
            {"Meet Our Highly Talented".split("").map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}

            <br />

            {"Team".split("").map((char, index) => (
              <motion.span
                key={index + 100}
                variants={letterVariants}
                className="inline-block bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Creator Cards */}
        <div className="flex flex-wrap justify-center items-center gap-10">

          <ProfileCard
            name=""
            title=""
            handle="K L N Sai Aditya"
            status="Frontend & Backend"
            showUserInfo={true}
            enableTilt={true}
            avatarUrl="/assets/aditya.jpg"
            grainUrl="/assets/aditya.jpg"
            linkedinUrl="https://www.linkedin.com/in/sai-aditya-10x/"
            githubUrl="https://github.com/Aditya-0510"
          />

          <ProfileCard
            name=""
            title=""
            handle="Ayushmaan Kumar"
            status="Frontend & Backend"
            showUserInfo={true}
            enableTilt={true}
            avatarUrl="/assets/ayushmaan3.jpg"
            grainUrl="/assets/ayushmaan.jpg"
            linkedinUrl="https://www.linkedin.com/in/ayushmaan-kumar/"
            githubUrl="https://github.com/lightyear256"
          />

          <ProfileCard
            name=""
            title=""
            handle="Hammad Malik"
            status="Frontend & Design"
            showUserInfo={true}
            enableTilt={true}
            avatarUrl="/assets/hammad.jpg"
            grainUrl="/assets/hammad.jpg"
            linkedinUrl="https://www.linkedin.com/in/hammad-malik-/"
            githubUrl="https://github.com/hammadmalik17"
          />

          <ProfileCard
            name=""
            title=""
            handle="Yuvansh Chauhan"
            status="Frontend & Design"
            showUserInfo={true}
            enableTilt={true}
            avatarUrl="/assets/yuvansh.jpg"
            grainUrl="/assets/yuvansh.jpg"
            linkedinUrl="https://www.linkedin.com/in/yuvansh-chauhan/"
            githubUrl="https://github.com/GhostRider9211"
          />

          <ProfileCard
            name=""
            title=""
            handle="Rachana Kadlewad"
            status="Frontend & Design"
            showUserInfo={true}
            enableTilt={true}
            avatarUrl="/assets/rachana2.jpg"
            grainUrl="/assets/rachana2.jpg"
            linkedinUrl="https://www.linkedin.com/in/rachana-kadlewad-655a8630b/"
            githubUrl="https://github.com/rachanakadlewad-oss"
          />

        </div>
      </div>
    </div>
  );
}

export default Creators;
