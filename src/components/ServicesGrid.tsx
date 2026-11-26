"use client";

import React from "react";
import {
  Activity,
  Briefcase,
  Bone,
  Flame,
  Brain,
  Zap,
} from "lucide-react";

export default function ServicesGrid() {
  const services = [
    {
      title: "Spine & Back Pain Care",
      conditions: "Slip disc, sciatica, cervical spondylosis, lumbar strain",
      description:
        "Clinical assessment and non-surgical spinal decompression, traction therapy, core muscle strengthening, and nerve mobilization to relieve radiating pain in the neck, back, and legs.",
      icon: <Activity className="w-5 h-5 text-teal-800" />,
    },
    {
      title: "Workplace & Desk Ergonomics",
      conditions: "Tech-neck, repetitive strain (RSI), thoracic pain, postural fatigue",
      description:
        "Assessment of desk setup, screen heights, and seating posture for IT and corporate professionals, coupled with corrective spinal stabilization exercises to resolve persistent office pain.",
      icon: <Briefcase className="w-5 h-5 text-teal-800" />,
    },
    {
      title: "Post-Operative Rehabilitation",
      conditions: "Total knee/hip replacement, ACL reconstruction, fracture mobilization",
      description:
        "Structured postoperative exercise regimens to reduce joint swelling, restore full range of motion, prevent scar tissue adhesions, and retrain safe walking and daily function.",
      icon: <Bone className="w-5 h-5 text-teal-800" />,
    },
    {
      title: "Sports Injury Rehabilitation",
      conditions: "Ligament sprains, rotator cuff tears, tennis elbow, muscle strains",
      description:
        "Targeted physical rehabilitation for athletic injuries focusing on tendon healing, joint stability, eccentric strengthening, and safe phased return to sports and running.",
      icon: <Flame className="w-5 h-5 text-teal-800" />,
    },
    {
      title: "Neurological Physiotherapy",
      conditions: "Stroke recovery, hemiplegia, facial palsy, Parkinson's mobility",
      description:
        "Neuromuscular re-education and functional balance training to help patients regain motor control, improve walking independence, and reduce fall risks after neurological events.",
      icon: <Brain className="w-5 h-5 text-teal-800" />,
    },
    {
      title: "Electrotherapy & Manual Modalities",
      conditions: "Acute joint inflammation, chronic myofascial spasms, stiff joints",
      description:
        "Hands-on joint mobilization and soft-tissue release complemented by clinical electrotherapy modalities including IFT, therapeutic ultrasound, TENS, and traction.",
      icon: <Zap className="w-5 h-5 text-teal-800" />,
    },
  ];

  return (
    <section id="treatments" className="py-14 sm:py-16 bg-slate-50 border-b border-slate-200 scroll-mt-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 text-center sm:text-left">
          <span className="text-xs font-bold text-teal-800 uppercase tracking-wider block mb-1">
            Clinical Scope
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Specialized Physiotherapy & Ergonomics
          </h2>
          <p className="text-sm text-slate-600 mt-1 max-w-2xl">
            Evidence-based treatment protocols tailored to your specific biomechanical condition.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg border border-slate-200 p-5 shadow-2xs hover:border-slate-300 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center mb-3">
                  {service.icon}
                </div>
                <h3 className="font-bold text-slate-900 text-base">
                  {service.title}
                </h3>
                <p className="text-xs font-semibold text-teal-800 mt-0.5">
                  {service.conditions}
                </p>
                <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
