"use client";

import React from "react";
import {
  ShieldCheck,
  Building,
  Calendar,
  CheckCircle2,
  Stethoscope,
} from "lucide-react";

export default function DoctorProfile() {
  const scrollToBooking = () => {
    const el = document.getElementById("booking-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about-doctor" className="py-14 sm:py-16 bg-white border-b border-slate-200 scroll-mt-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 text-center sm:text-left">
          <span className="text-xs font-bold text-teal-800 uppercase tracking-wider block mb-1">
            Consultant Profile
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            About Dr. Dinesh Kelkar
          </h2>
          <p className="text-sm text-slate-600 mt-1 max-w-2xl">
            BPT, FCR (Apollo Hospitals), MIAP — Senior Consultant Physiotherapist & Ergonomist
          </p>
        </div>

        {/* Doctor Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Credentials Card */}
          <div className="lg:col-span-4 bg-slate-50 border border-slate-300 rounded-xl p-5 space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
              <div className="w-14 h-14 rounded-lg bg-teal-800 flex items-center justify-center text-white flex-shrink-0">
                <Stethoscope className="w-7 h-7 text-teal-100" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base">Dr. Dinesh Kelkar</h3>
                <p className="text-xs text-teal-800 font-semibold">22+ Years Clinical Experience</p>
              </div>
            </div>

            {/* Official Registration Box */}
            <div className="bg-white border border-slate-200 rounded-lg p-3 space-y-2 text-xs">
              <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-teal-700" />
                <span>Statutory Registrations</span>
              </span>
              <div className="space-y-1 text-slate-700">
                <div className="flex justify-between py-0.5 border-b border-slate-100">
                  <span className="text-slate-500">UPSMF Regd. No.:</span>
                  <span className="font-mono font-bold text-slate-900">8</span>
                </div>
                <div className="flex justify-between py-0.5 border-b border-slate-100">
                  <span className="text-slate-500">IAP Regd. No.:</span>
                  <span className="font-mono font-bold text-slate-900">L-19105</span>
                </div>
                <div className="flex justify-between py-0.5">
                  <span className="text-slate-500">Fellowship:</span>
                  <span className="font-bold text-slate-900">FCR (Apollo Hospitals)</span>
                </div>
              </div>
            </div>

            {/* Consultation Locations */}
            <div className="text-xs space-y-1.5 text-slate-700">
              <span className="font-bold text-slate-900 block">Available At:</span>
              <p>• B-164, Golden I, Techzone 4, Greater Noida West</p>
              <p>• C-1, Sector 61, Noida</p>
            </div>

            <button
              onClick={scrollToBooking}
              className="w-full py-2.5 bg-teal-800 hover:bg-teal-900 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Right Column: Bio & Professional History */}
          <div className="lg:col-span-8 space-y-6 text-sm text-slate-700">
            <div>
              <h4 className="font-bold text-slate-900 text-base mb-2">
                Clinical Background & Approach
              </h4>
              <p className="leading-relaxed">
                Dr. Dinesh Kelkar has been practicing physiotherapy for over 22 years across Noida and Greater Noida. He completed his Bachelor of Physiotherapy (BPT) and earned his specialized <strong>Fellowship in Clinical Rehabilitation (FCR) from Apollo Hospitals</strong>. He is an active life member of the Indian Association of Physiotherapists (MIAP).
              </p>
              <p className="mt-2.5 leading-relaxed">
                His clinical practice emphasizes thorough biomechanical evaluation before commencing treatment. He specializes in non-surgical management of spinal conditions—including lumbar slip disc, cervical spondylosis, and sciatica—as well as rehabilitation following total knee or hip replacement surgeries and sports injuries.
              </p>
            </div>

            {/* Institutional Appointments & Clinical Leadership */}
            <div>
              <h4 className="font-bold text-slate-900 text-base mb-3 flex items-center gap-2">
                <Building className="w-4 h-4 text-teal-800" />
                <span>Hospital & Institutional Experience</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <span className="text-[11px] font-semibold text-teal-800 block">Current Practice</span>
                  <strong className="text-slate-900 block text-sm">Muskan Medical Centre, Noida</strong>
                  <span className="text-xs text-slate-500">Consultant Physiotherapist & Ergonomist</span>
                </div>

                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <span className="text-[11px] font-semibold text-slate-600 block">Department Leadership</span>
                  <strong className="text-slate-900 block text-sm">SD Medical Institute & Research Centre</strong>
                  <span className="text-xs text-slate-500">Ex. Head of Department (HOD)</span>
                </div>

                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <span className="text-[11px] font-semibold text-slate-600 block">Hospital Association</span>
                  <strong className="text-slate-900 block text-sm">Naveen Hospital, Greater Noida</strong>
                  <span className="text-xs text-slate-500">Ex. Consultant Physiotherapist</span>
                </div>

                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <span className="text-[11px] font-semibold text-slate-600 block">Clinical Association</span>
                  <strong className="text-slate-900 block text-sm">Shivalik Medical Centre, Noida</strong>
                  <span className="text-xs text-slate-500">Ex. Consultant Physiotherapist</span>
                </div>
              </div>
            </div>

            {/* Key Clinical Focus Areas */}
            <div className="pt-2">
              <h4 className="font-bold text-slate-900 text-sm mb-2">
                Core Clinical Practice Areas:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-700 flex-shrink-0" />
                  <span>Non-Surgical Spine Care (Slip Disc / Sciatica)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-700 flex-shrink-0" />
                  <span>Joint Replacement & Fracture Rehabilitation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-700 flex-shrink-0" />
                  <span>Workstation Ergonomic Assessments</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-700 flex-shrink-0" />
                  <span>Stroke & Neurological Motor Rehabilitation</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
