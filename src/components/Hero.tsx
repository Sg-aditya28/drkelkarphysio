"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/basePath";
import {
  Calendar,
  Phone,
  ShieldCheck,
  MapPin,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function Hero() {
  const scrollToBooking = () => {
    const el = document.getElementById("booking-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-slate-50 border-b border-slate-200 py-10 sm:py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Direct Doctor Presentation */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* Real Registration Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-slate-200 text-slate-800 text-xs font-semibold shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-teal-700" />
              <span>22+ Years Clinical Practice</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-700">UPSMF Regd. No. 8</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-700">IAP Regd. No. L-19105</span>
            </div>

            {/* Primary Heading */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-snug">
              Dr. Kelkar Physiotherapy & Ergonomics Centre
            </h1>

            {/* Subheading / Doctor Credentials */}
            <p className="text-base text-slate-700 leading-normal">
              Senior consultant physiotherapy and clinical ergonomics led by{" "}
              <strong className="text-slate-900 font-semibold">Dr. Dinesh Kelkar</strong>{" "}
              <span className="text-teal-900 font-medium">(BPT, FCR Apollo Hospitals, MIAP)</span>. Specializing in non-surgical spine care, slip disc, sciatica, post-operative rehabilitation, and corporate desk posture correction.
            </p>

            {/* Dual Branches Banner */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs text-slate-700">
                <div className="flex items-center gap-1.5 font-bold text-slate-900 mb-0.5">
                  <MapPin className="w-3.5 h-3.5 text-teal-700 flex-shrink-0" />
                  <span>Greater Noida West Clinic</span>
                </div>
                <p className="text-slate-600">B-164, Golden I, Techzone 4</p>
                <p className="text-slate-500 text-[11px] mt-1 font-medium">Morning & Evening OPD</p>
              </div>

              <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs text-slate-700">
                <div className="flex items-center gap-1.5 font-bold text-slate-900 mb-0.5">
                  <MapPin className="w-3.5 h-3.5 text-red-600 flex-shrink-0" />
                  <span>Noida Sector 61 Clinic</span>
                </div>
                <p className="text-slate-600">C-1, Sector 61, Noida</p>
                <p className="text-slate-500 text-[11px] mt-1 font-medium">Morning & Evening OPD</p>
              </div>
            </div>

            {/* Direct CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={scrollToBooking}
                className="px-5 py-3 rounded-lg bg-teal-800 hover:bg-teal-900 text-white font-semibold text-sm flex items-center gap-2 shadow-sm transition-colors"
              >
                <Calendar className="w-4 h-4 text-teal-200" />
                <span>Book Appointment Online</span>
                <ArrowRight className="w-4 h-4 text-teal-200" />
              </button>

              <a
                href="tel:+919891192074"
                className="px-5 py-3 rounded-lg bg-white hover:bg-slate-100 text-slate-800 font-semibold text-sm border border-slate-300 flex items-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-red-600" />
                <span>Call: 9891192074</span>
              </a>
            </div>

            {/* Factual Doctor Pedigree Badges */}
            <div className="pt-3 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-slate-700">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-700 flex-shrink-0" />
                <span>Apollo Hospitals FCR</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-700 flex-shrink-0" />
                <span>Ex. HOD, SD Medical</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-700 flex-shrink-0" />
                <span>Muskan Medical Centre</span>
              </div>
            </div>

          </div>

          {/* Right Column: Genuine Doctor Profile Card with Realistic Image */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-xl border border-slate-300 overflow-hidden shadow-sm">
              
              {/* Doctor Real Image Banner */}
              <div className="relative w-full h-64 sm:h-72 bg-slate-100">
                <Image
                  src={assetPath("/images/dr-dinesh-kelkar.jpg")}
                  alt="Dr. Dinesh Kelkar - Senior Consultant Physiotherapist & Ergonomist"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex items-end p-4">
                  <div className="text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-teal-800/90 px-2 py-0.5 rounded text-white inline-block mb-1">
                      Lead Consultant
                    </span>
                    <h3 className="text-xl font-bold leading-tight">Dr. Dinesh Kelkar</h3>
                    <p className="text-xs text-teal-200 font-medium">BPT, FCR (Apollo Hospitals), MIAP</p>
                  </div>
                </div>
              </div>

              {/* Verified Details */}
              <div className="p-5 space-y-3">
                <div className="space-y-1.5 text-xs text-slate-700">
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Clinical Experience:</span>
                    <span className="font-semibold text-slate-900">22+ Years (Since 2002)</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">UPSMF Registration:</span>
                    <span className="font-semibold text-slate-900 font-mono">Regd. No. 8</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">IAP Registration:</span>
                    <span className="font-semibold text-slate-900 font-mono">Regd. No. L-19105</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-500">OPD Timings:</span>
                    <span className="font-semibold text-slate-900">10 AM–1:30 PM & 5 PM–8:30 PM</span>
                  </div>
                </div>

                <div className="pt-2 flex gap-2">
                  <button
                    onClick={scrollToBooking}
                    className="flex-1 py-2.5 bg-teal-800 hover:bg-teal-900 text-white rounded-lg text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 shadow-2xs"
                  >
                    <Calendar className="w-3.5 h-3.5 text-teal-200" />
                    <span>Book Appointment</span>
                  </button>

                  <Link
                    href="/about/"
                    className="py-2.5 px-3 border border-slate-300 hover:bg-slate-50 text-slate-800 rounded-lg text-xs font-medium transition-colors flex items-center justify-center"
                  >
                    Profile Details →
                  </Link>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
