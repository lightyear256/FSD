"use client";

import React from "react";
import {
  Users,
  GraduationCap,
  Code,
  Search,
  BookmarkCheck,
  Globe,
} from "lucide-react";
import SpotlightCard from "../components/SpotlightCard";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-20 mt-10">
      
      {/* Intro Section */}
      <section className="max-w-5xl mx-auto px-6 text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          About the <span className="text-blue-400">Alumni Network</span>
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
          A modern platform connecting students, graduates, and professionals of
          IIIT Dharwad — designed to make alumni discovery effortless,
          meaningful, and beautifully organized.
        </p>
      </section>

      {/* Mission Section */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <div className="bg-[#0f0f0f] border border-gray-800 rounded-2xl p-8 md:p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Our Mission
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            To build a powerful ecosystem where alumni stay connected, students
            find mentorship, and the institute celebrates its growing community —
            all through a seamless digital experience.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-6 mb-20">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12">
          What This App Helps You Do
        </h2>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          
          <SpotlightCard spotlightColor="rgba(59, 130, 246, 0.25)">
            <Users className="w-10 h-10 text-blue-400 mb-4" />
            <h3 className="text-lg md:text-xl font-semibold mb-2">
              Discover Alumni
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Explore alumni from all batches and departments with powerful
              filtering tools.
            </p>
          </SpotlightCard>

          <SpotlightCard spotlightColor="rgba(59, 130, 246, 0.25)">
            <Search className="w-10 h-10 text-blue-400 mb-4" />
            <h3 className="text-lg md:text-xl font-semibold mb-2">
              Smart Search
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Find people by name, organization, role, skills, or bio keywords.
            </p>
          </SpotlightCard>

          <SpotlightCard spotlightColor="rgba(59, 130, 246, 0.25)">
            <GraduationCap className="w-10 h-10 text-blue-400 mb-4" />
            <h3 className="text-lg md:text-xl font-semibold mb-2">
              See Career Journeys
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Explore alumni backgrounds, experiences, roles, and achievements.
            </p>
          </SpotlightCard>

          <SpotlightCard spotlightColor="rgba(59, 130, 246, 0.25)">
            <Globe className="w-10 h-10 text-blue-400 mb-4" />
            <h3 className="text-lg md:text-xl font-semibold mb-2">
              Instant Contact
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Engage directly via LinkedIn, GitHub, email, or websites.
            </p>
          </SpotlightCard>

          <SpotlightCard spotlightColor="rgba(59, 130, 246, 0.25)">
            <Code className="w-10 h-10 text-blue-400 mb-4" />
            <h3 className="text-lg md:text-xl font-semibold mb-2">
              Modern UI
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Clean, fast, responsive interface optimized for all screen sizes.
            </p>
          </SpotlightCard>

          <SpotlightCard spotlightColor="rgba(59, 130, 246, 0.25)">
            <BookmarkCheck className="w-10 h-10 text-blue-400 mb-4" />
            <h3 className="text-lg md:text-xl font-semibold mb-2">
              Verified Profiles
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Ensuring authenticity through validated profile information.
            </p>
          </SpotlightCard>

        </div>
      </section>
    </div>
  );
}
