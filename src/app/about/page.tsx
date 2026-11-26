import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { assetPath } from "@/lib/basePath";
import {
  ShieldCheck,
  Building,
  Calendar,
  CheckCircle2,
  Clock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Dr. Dinesh Kelkar | Sr. Consultant Physiotherapist & Ergonomist",
  description:
    "Learn about Dr. Dinesh Kelkar (BPT, FCR Apollo Hospitals, MIAP), with 22+ years of clinical practice in Noida and Greater Noida West. UPSMF Regd. No. 8, IAP Regd. No. L-19105.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <Navbar />

      <main className="flex-1">
        {/* Page Banner */}
        <section className="bg-slate-50 border-b border-slate-200 py-10 sm:py-14">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold text-teal-800 uppercase tracking-wider block mb-1">
                Medical Leadership & Credentials
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                About Dr. Dinesh Kelkar
              </h1>
              <p className="text-base text-slate-600 mt-2">
                BPT, FCR (Apollo Hospitals), MIAP — Senior Consultant Physiotherapist & Certified Ergonomist with over 22 years of clinical excellence in Noida and Greater Noida West.
              </p>
            </div>
          </div>
        </section>

        {/* Doctor Pedigree & Details */}
        <section className="py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* Left Column: Official Medical Profile Card with Real Photo */}
              <div className="lg:col-span-5 bg-slate-50 border border-slate-300 rounded-xl overflow-hidden shadow-2xs space-y-4">
                
                {/* Doctor Portrait Image */}
                <div className="relative w-full h-80 sm:h-96 bg-slate-200">
                  <Image
                    src={assetPath("/images/dr-dinesh-kelkar.jpg")}
                    alt="Dr. Dinesh Kelkar - Senior Consultant Physiotherapist"
                    fill
                    sizes="(max-width: 768px) 100vw, 450px"
                    className="object-cover object-top"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent flex items-end p-5">
                    <div className="text-white">
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-teal-800 px-2 py-0.5 rounded text-white inline-block mb-1">
                        Senior Consultant
                      </span>
                      <h2 className="text-xl font-bold leading-tight">Dr. Dinesh Kelkar</h2>
                      <p className="text-xs text-teal-200 font-medium">BPT, FCR (Apollo Hospitals), MIAP</p>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0 space-y-4">
                  {/* Registrations */}
                  <div className="bg-white border border-slate-200 rounded-lg p-3.5 space-y-2 text-xs">
                    <span className="font-bold text-slate-900 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-teal-700" />
                      <span>Statutory Medical Registrations</span>
                    </span>
                    <div className="space-y-1 text-slate-700 pt-1">
                      <div className="flex justify-between py-1 border-b border-slate-100">
                        <span className="text-slate-500">UPSMF Registration:</span>
                        <strong className="font-mono text-slate-900">Regd. No. 8</strong>
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-100">
                        <span className="text-slate-500">IAP Registration:</span>
                        <strong className="font-mono text-slate-900">Regd. No. L-19105</strong>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-slate-500">Fellowship:</span>
                        <strong className="text-slate-900">FCR (Apollo Hospitals)</strong>
                      </div>
                    </div>
                  </div>

                  {/* Consultation Availability */}
                  <div className="text-xs space-y-2 text-slate-700">
                    <span className="font-bold text-slate-900 block">Consultation Locations:</span>
                    <div className="p-2.5 bg-white border border-slate-200 rounded-lg">
                      <strong className="text-slate-900 block">Greater Noida West:</strong>
                      <span>B-164, Golden I, Techzone 4</span>
                    </div>
                    <div className="p-2.5 bg-white border border-slate-200 rounded-lg">
                      <strong className="text-slate-900 block">Noida Sector 61:</strong>
                      <span>C-1, Sector 61, Noida</span>
                    </div>
                  </div>

                  {/* OPD Timings */}
                  <div className="text-xs text-slate-600 flex items-center gap-2 pt-1">
                    <Clock className="w-4 h-4 text-slate-500 flex-shrink-0" />
                    <span>OPD: 10:00 AM – 1:30 PM & 5:00 PM – 8:30 PM (Mon–Sat)</span>
                  </div>

                  <Link
                    href="/book-appointment/"
                    className="w-full py-3 bg-teal-800 hover:bg-teal-900 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-colors shadow-sm"
                  >
                    <Calendar className="w-4 h-4 text-teal-200" />
                    <span>Book Consultation with Dr. Kelkar</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Bio Narrative & Clinical Experience */}
              <div className="lg:col-span-7 space-y-6 text-slate-700 text-sm leading-relaxed">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    22+ Years of Dedicated Clinical Practice
                  </h3>
                  <p>
                    Dr. Dinesh Kelkar has been at the forefront of musculoskeletal and neurological rehabilitation in Noida and Greater Noida for over two decades. After completing his Bachelor of Physiotherapy (BPT), he completed his prestigious <strong>Fellowship in Clinical Rehabilitation (FCR) from Apollo Hospitals</strong>, deepening his focus on post-operative joint rehabilitation and spinal biomechanics.
                  </p>
                  <p className="mt-3">
                    As an active life member of the Indian Association of Physiotherapists (MIAP), Dr. Kelkar combines hands-on manual therapy with modern clinical electrotherapy and customized postural correction programs.
                  </p>
                </div>

                {/* Consultation Image in Context */}
                <div className="relative w-full h-64 sm:h-72 rounded-xl overflow-hidden border border-slate-300">
                  <Image
                    src={assetPath("/images/patient-consultation.jpg")}
                    alt="Dr. Dinesh Kelkar explaining spinal MRI scan during patient consultation"
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                    <p className="text-white text-xs">
                      Personalized 1-on-1 diagnostic evaluation and spinal imaging analysis
                    </p>
                  </div>
                </div>

                {/* Institutional Appointments */}
                <div className="pt-2">
                  <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <Building className="w-4 h-4 text-teal-800" />
                    <span>Hospital Associations & Clinical Leadership</span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200">
                      <span className="text-[11px] font-semibold text-teal-800 block">Active Practice</span>
                      <strong className="text-slate-900 block text-sm mt-0.5">Muskan Medical Centre</strong>
                      <span className="text-slate-600">Noida</span>
                    </div>

                    <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200">
                      <span className="text-[11px] font-semibold text-slate-600 block">Past Leadership</span>
                      <strong className="text-slate-900 block text-sm mt-0.5">SD Medical Institute & Research Centre</strong>
                      <span className="text-slate-600">Ex. Head of Department (HOD)</span>
                    </div>

                    <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200">
                      <span className="text-[11px] font-semibold text-slate-600 block">Past Hospital Association</span>
                      <strong className="text-slate-900 block text-sm mt-0.5">Naveen Hospital</strong>
                      <span className="text-slate-600">Greater Noida</span>
                    </div>

                    <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200">
                      <span className="text-[11px] font-semibold text-slate-600 block">Past Hospital Association</span>
                      <strong className="text-slate-900 block text-sm mt-0.5">Shivalik Medical Centre</strong>
                      <span className="text-slate-600">Noida</span>
                    </div>
                  </div>
                </div>

                {/* Treatment Philosophy */}
                <div className="pt-2 border-t border-slate-200">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Clinical Philosophy & Diagnosis
                  </h3>
                  <p>
                    Dr. Kelkar advocates an evidence-based approach: identifying the underlying biomechanical root cause of pain rather than merely masking symptoms with temporary relief. Every patient undergoes an initial clinical examination covering range of motion, nerve tension, muscle imbalances, and postural habits.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-3 text-xs">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-700 flex-shrink-0" />
                      <span>Non-Surgical Spine Decompression</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-700 flex-shrink-0" />
                      <span>Post-Joint Replacement Mobilization</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-700 flex-shrink-0" />
                      <span>Corporate Ergonomic Audits</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-700 flex-shrink-0" />
                      <span>Individual 1-on-1 Exercise Plans</span>
                    </div>
                  </div>
                </div>

                {/* Contact Help Bar */}
                <div className="p-4 bg-teal-50 border border-teal-200 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                  <div>
                    <strong className="text-teal-900 text-sm block">Have questions or need to consult Dr. Kelkar?</strong>
                    <span className="text-teal-800">Direct clinic reception: +91 9891192074 / +91 7533046119</span>
                  </div>
                  <Link
                    href="/book-appointment/"
                    className="px-4 py-2 bg-teal-800 text-white rounded font-semibold whitespace-nowrap hover:bg-teal-900 transition-colors"
                  >
                    Book an Appointment
                  </Link>
                </div>

              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
