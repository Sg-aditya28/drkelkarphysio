import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { assetPath } from "@/lib/basePath";
import {
  Activity,
  Briefcase,
  Bone,
  Flame,
  Brain,
  Zap,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Specialized Treatments & Services | Dr. Kelkar Physiotherapy Centre",
  description:
    "Evidence-based physiotherapy treatments in Noida & Greater Noida West by Dr. Dinesh Kelkar: Spine & back pain, slip disc, sciatica, post-operative rehab, corporate ergonomics, sports injuries, and neuro rehab.",
};

export default function TreatmentsPage() {
  const treatments = [
    {
      id: "spine-back-pain",
      title: "Spine & Back Pain Management",
      subtitle: "Slip Disc, Sciatica, Cervical & Lumbar Spondylosis",
      image: assetPath("/images/spine-treatment.jpg"),
      description:
        "Comprehensive clinical assessment and non-surgical spinal decompression protocols designed to relieve pinched nerves, reduce disc herniation pressure, and eliminate chronic neck and lower back stiffness.",
      symptoms: [
        "Lower back stiffness & radiating pain to legs (Sciatica)",
        "Neck pain radiating to arms and fingers",
        "Lumbar & cervical disc bulge or herniation",
        "Morning stiffness and postural muscle spasms",
      ],
      modalities: [
        "Mechanical Lumbar & Cervical Traction",
        "Core Stabilization & McKenzie Protocols",
        "Spinal Segmental Mobilization",
        "Interferential Therapy (IFT) & Heat Modalities",
      ],
      icon: <Activity className="w-5 h-5 text-teal-800" />,
    },
    {
      id: "workplace-ergonomics",
      title: "Corporate & Workplace Ergonomics",
      subtitle: "Workstation Audits & Desk Posture Correction",
      image: assetPath("/images/ergonomics-consultation.jpg"),
      description:
        "Led by certified ergonomist Dr. Dinesh Kelkar (FCR Apollo), our ergonomics program addresses musculoskeletal strain caused by prolonged desk sitting, laptop posture, and repetitive movements.",
      symptoms: [
        "'Tech-Neck' and upper trapezius tightness",
        "Repetitive Strain Injury (RSI) & Carpal Tunnel Syndrome",
        "Thoracic mid-back fatigue & slouching",
        "Headaches caused by cervical tension",
      ],
      modalities: [
        "Workstation Screen & Chair Ergonomic Adjustments",
        "Postural Alignment Exercises",
        "Desk Micro-Breaks & Stretching Routines",
        "Workplace Ergonomic Prevention Audits",
      ],
      icon: <Briefcase className="w-5 h-5 text-teal-800" />,
    },
    {
      id: "post-operative-rehab",
      title: "Orthopedic & Post-Operative Rehabilitation",
      subtitle: "Total Knee/Hip Replacement & Fracture Recovery",
      image: assetPath("/images/knee-joint-rehab.jpg"),
      description:
        "Structured postoperative exercise regimens following orthopedic procedures to restore normal joint mobility, rebuild muscle strength, prevent scar contractures, and restore normal walking gait.",
      symptoms: [
        "Total Knee Replacement (TKR) recovery",
        "Total Hip Replacement (THR) rehabilitation",
        "Post-fracture joint stiffness & muscle wasting",
        "Rotator cuff repairs & shoulder arthroscopy",
      ],
      modalities: [
        "Controlled Passive & Active Joint Mobilization",
        "Gait & Balance Retraining",
        "Progressive Resistance Muscle Strengthening",
        "Cryotherapy & Swelling Reduction Protocols",
      ],
      icon: <Bone className="w-5 h-5 text-teal-800" />,
    },
    {
      id: "sports-injuries",
      title: "Sports Injury Rehabilitation",
      subtitle: "Ligament Sprains, Tendonitis & Conditioning",
      image: assetPath("/images/sports-injury.jpg"),
      description:
        "Evidence-based sports medicine rehabilitation for athletes, runners, and fitness enthusiasts to promote tissue healing, restore joint stability, and enable safe return to sports without re-injury.",
      symptoms: [
        "ACL, PCL, and Meniscus tears/strains",
        "Ankle sprains & Achilles tendonitis",
        "Tennis Elbow & Golfer's Elbow",
        "Hamstring and quadriceps muscle pulls",
      ],
      modalities: [
        "Eccentric Tendon Loading Exercises",
        "Proprioceptive & Neuromuscular Training",
        "Therapeutic Taping & Ultrasound",
        "Return-to-Sport Functional Drills",
      ],
      icon: <Flame className="w-5 h-5 text-teal-800" />,
    },
    {
      id: "neurological-physio",
      title: "Neurological Physiotherapy",
      subtitle: "Stroke, Hemiplegia & Balance Rehabilitation",
      image: assetPath("/images/clinic-facility.jpg"),
      description:
        "Dedicated neuro-rehabilitation helping patients with central nervous system impairments regain functional movement, improve gait stability, and maximize daily independence.",
      symptoms: [
        "Post-stroke paralysis (Hemiplegia / Hemiparesis)",
        "Parkinson's disease mobility & stiffness",
        "Bell's Palsy / Facial nerve weakness",
        "Balance disorders and unsteady gait",
      ],
      modalities: [
        "Task-Oriented Motor Re-Learning",
        "Balance & Coordination Training",
        "Spasticity Reduction Techniques",
        "Activities of Daily Living (ADL) Retraining",
      ],
      icon: <Brain className="w-5 h-5 text-teal-800" />,
    },
    {
      id: "electrotherapy-manual",
      title: "Electrotherapy & Manual Therapy",
      subtitle: "Hands-on Joint Mobilization & Pain Modalities",
      image: assetPath("/images/patient-consultation.jpg"),
      description:
        "Clinical modalities combined with skilled manual therapy to manage acute inflammation, break down myofascial trigger points, and accelerate deep tissue healing.",
      symptoms: [
        "Acute muscle spasms & trigger points",
        "Frozen shoulder (Adhesive Capsulitis)",
        "Knee Osteoarthritis joint stiffness",
        "Chronic muscular aches and tendonitis",
      ],
      modalities: [
        "Interferential Therapy (IFT) & TENS",
        "Therapeutic Ultrasound Therapy",
        "Maitland & Mulligan Joint Mobilization",
        "Deep Myofascial Soft Tissue Release",
      ],
      icon: <Zap className="w-5 h-5 text-teal-800" />,
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
                Clinical Specializations
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Specialized Treatments & Therapy Services
              </h1>
              <p className="text-base text-slate-600 mt-2">
                Led by Dr. Dinesh Kelkar (22+ years experience), providing non-surgical spine decompression, joint rehabilitation, and corporate ergonomic care across Noida and Greater Noida West.
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Services List with Photos */}
        <section className="py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            {treatments.map((treatment) => (
              <div
                key={treatment.id}
                className="bg-white border border-slate-300 rounded-xl overflow-hidden shadow-2xs hover:border-slate-400 transition-colors"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  
                  {/* Photo Column */}
                  <div className="lg:col-span-4 relative min-h-[220px] sm:min-h-[260px] bg-slate-100">
                    <Image
                      src={treatment.image}
                      alt={treatment.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 400px"
                      className="object-cover"
                    />
                  </div>

                  {/* Details Column */}
                  <div className="lg:col-span-8 p-6 sm:p-7 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-200 flex items-center justify-center">
                          {treatment.icon}
                        </div>
                        <div>
                          <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                            {treatment.title}
                          </h2>
                          <p className="text-xs font-semibold text-teal-800">
                            {treatment.subtitle}
                          </p>
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
                        {treatment.description}
                      </p>

                      {/* Symptoms & Modalities Grid */}
                      <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-700">
                        <div className="space-y-1.5">
                          <strong className="text-slate-900 font-semibold block text-[11px] uppercase tracking-wide text-teal-900">
                            Common Conditions Addressed:
                          </strong>
                          <ul className="space-y-1 text-slate-600">
                            {treatment.symptoms.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-teal-700 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="space-y-1.5">
                          <strong className="text-slate-900 font-semibold block text-[11px] uppercase tracking-wide text-teal-900">
                            Therapeutic Techniques:
                          </strong>
                          <ul className="space-y-1 text-slate-600">
                            {treatment.modalities.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-slate-500 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <Link
                        href="/book-appointment/"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-teal-800 hover:bg-teal-900 text-white text-xs font-semibold rounded-lg transition-colors shadow-2xs"
                      >
                        <Calendar className="w-3.5 h-3.5 text-teal-200" />
                        <span>Book for this Condition</span>
                        <ArrowRight className="w-3 h-3 text-teal-200" />
                      </Link>

                      <a
                        href="tel:+919891192074"
                        className="text-xs text-slate-600 hover:text-slate-900 font-medium flex items-center gap-1"
                      >
                        <Phone className="w-3 h-3 text-teal-700" />
                        <span>Call 9891192074</span>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Bar */}
        <section className="bg-slate-50 border-t border-slate-200 py-10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">
              Not sure which treatment fits your condition?
            </h2>
            <p className="text-sm text-slate-600 max-w-xl mx-auto">
              Dr. Dinesh Kelkar performs a thorough clinical examination during your initial consultation to identify the exact cause and design a personalized protocol.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Link
                href="/book-appointment/"
                className="px-5 py-2.5 bg-teal-800 hover:bg-teal-900 text-white text-xs font-semibold rounded-lg flex items-center gap-2 transition-colors"
              >
                <Calendar className="w-4 h-4 text-teal-200" />
                <span>Book Initial Evaluation</span>
              </Link>
              <a
                href="tel:+919891192074"
                className="px-5 py-2.5 border border-slate-300 bg-white hover:bg-slate-100 text-slate-800 text-xs font-semibold rounded-lg flex items-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-teal-700" />
                <span>Call Clinic: 9891192074</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
