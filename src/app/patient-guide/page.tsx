import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { assetPath } from "@/lib/basePath";
import {
  HelpCircle,
  Calendar,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Patient Visit Guide & FAQs | Dr. Kelkar Physiotherapy Centre",
  description:
    "Everything you need to know before your physiotherapy consultation with Dr. Dinesh Kelkar: What medical documents to bring, OPD hours, treatment duration, and booking steps.",
};

export default function PatientGuidePage() {
  const faqs = [
    {
      q: "Do I need a physician or surgeon's referral to consult Dr. Kelkar?",
      a: "No prior referral is strictly mandatory. Dr. Dinesh Kelkar performs a thorough clinical and biomechanical examination during your initial appointment. However, if you already have an orthopedic referral, surgical discharge note, or X-ray/MRI reports, bringing them along is very helpful.",
    },
    {
      q: "What should I bring to my first appointment?",
      a: "Please bring all relevant spine/joint MRI scans, X-ray films, orthopedic discharge summaries, and a list of current medications. If your visit is for knee, hip, or shoulder rehab, wearing loose, comfortable clothing (e.g. track pants or t-shirt) is advised so the joints can be easily examined.",
    },
    {
      q: "How long does a physiotherapy consultation and session typically take?",
      a: "An initial diagnostic consultation usually takes 30 to 45 minutes, covering history-taking, mobility assessment, posture evaluation, and trial therapy. Follow-up treatment sessions typically range from 30 to 45 minutes depending on the modalities and exercises prescribed.",
    },
    {
      q: "Can slip disc and sciatica be resolved without surgery?",
      a: "In the vast majority of non-emergency cases, conservative physical therapy—combining mechanical traction, nerve flossing, targeted core stabilization, and electrotherapy—effectively decompresses the affected nerve and resolves pain without requiring surgical intervention.",
    },
    {
      q: "What is an Ergonomic Workstation Assessment?",
      a: "As an FCR (Apollo) certified ergonomist, Dr. Kelkar evaluates your daily sitting posture, desk height, monitor angle, and typing mechanics. He identifies physical risk factors responsible for tech-neck, carpal tunnel strain, and back stiffness, providing targeted postural corrections.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <Navbar />

      <main className="flex-1">
        {/* Banner */}
        <section className="bg-slate-50 border-b border-slate-200 py-10 sm:py-14">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold text-teal-800 uppercase tracking-wider block mb-1">
                Patient Information
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Patient Visit Guide & FAQs
              </h1>
              <p className="text-base text-slate-600 mt-2">
                Clear instructions and guidance to ensure your consultation with Dr. Dinesh Kelkar is productive and comfortable.
              </p>
            </div>
          </div>
        </section>

        {/* Diagnostic Consultation Spotlight with Image */}
        <section className="py-10 bg-slate-50 border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white p-6 sm:p-8 rounded-2xl border border-slate-300">
              <div className="md:col-span-5 relative h-64 sm:h-72 rounded-xl overflow-hidden border border-slate-200">
                <Image
                  src={assetPath("/images/patient-consultation.jpg")}
                  alt="Doctor consulting patient with spinal diagnostic X-ray"
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <span className="text-xs font-bold text-teal-800 uppercase tracking-wide">
                  Clinical Diagnosis Protocol
                </span>
                <h2 className="text-2xl font-bold text-slate-900">
                  Comprehensive Initial Examination
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  During your initial visit, Dr. Dinesh Kelkar will examine your spine, joint mobility, muscle tone, and neurological reflexes while carefully correlating them with your diagnostic MRI or X-ray reports.
                </p>
                <div className="pt-2 text-xs text-slate-700 space-y-1.5">
                  <p>• <strong>Spine assessment:</strong> Nerve impingement, McKenzie extension response</p>
                  <p>• <strong>Joint evaluation:</strong> Passive vs active range of motion</p>
                  <p>• <strong>Custom protocol:</strong> 1-on-1 therapy plan designed immediately</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3 Core Visit Steps */}
        <section className="py-12 border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-slate-900 mb-6">
              Preparing for Your Consultation
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-700">
              
              <div className="bg-slate-50 border border-slate-300 rounded-xl p-5 space-y-2">
                <div className="w-10 h-10 rounded-lg bg-teal-800 text-white flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <h3 className="font-bold text-slate-900 text-sm">
                  What Documents to Carry
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Bring recent MRI, CT, or X-ray reports, surgical discharge summaries, and previous prescriptions. Dr. Kelkar reviews your diagnostic imaging directly alongside your clinical examination.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-300 rounded-xl p-5 space-y-2">
                <div className="w-10 h-10 rounded-lg bg-teal-800 text-white flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <h3 className="font-bold text-slate-900 text-sm">
                  Attire & Arrival Time
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Wear loose, flexible clothing (such as track pants, gym wear, or loose cotton shirts) to allow unobstructed evaluation of knees, shoulders, or spine. Please arrive 10 minutes prior to your slot.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-300 rounded-xl p-5 space-y-2">
                <div className="w-10 h-10 rounded-lg bg-teal-800 text-white flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <h3 className="font-bold text-slate-900 text-sm">
                  Individual 1-on-1 Protocol
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Treatment is never one-size-fits-all. Dr. Kelkar tailors each exercise protocol and modality to your exact stage of recovery, with guided home exercises to prevent recurrence.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-white border border-slate-200 rounded-xl shadow-2xs space-y-1.5"
                >
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-start gap-2">
                    <HelpCircle className="w-4 h-4 text-teal-800 flex-shrink-0 mt-0.5" />
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>

            {/* Quick Action Box */}
            <div className="mt-10 p-6 bg-slate-50 border border-slate-300 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-slate-900 text-base">
                  Ready to schedule your visit?
                </h3>
                <p className="text-xs text-slate-600 mt-0.5">
                  Available in Greater Noida West (Golden I) and Noida Sector 61.
                </p>
              </div>

              <div className="flex gap-2">
                <Link
                  href="/book-appointment/"
                  className="px-4 py-2.5 bg-teal-800 hover:bg-teal-900 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Appointment</span>
                </Link>
                <a
                  href="tel:+919891192074"
                  className="px-4 py-2.5 border border-slate-300 bg-white hover:bg-slate-100 text-slate-800 text-xs font-medium rounded-lg flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-teal-700" />
                  <span>Call Us</span>
                </a>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
