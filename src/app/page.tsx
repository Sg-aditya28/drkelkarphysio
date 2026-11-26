import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BookingWidget from "@/components/BookingWidget";
import Footer from "@/components/Footer";
import { assetPath } from "@/lib/basePath";
import {
  User,
  Activity,
  MapPin,
  FileText,
  ArrowRight,
  Briefcase,
  Bone,
  Brain,
  CheckCircle2,
} from "lucide-react";

export default function Home() {
  const portalCards = [
    {
      title: "About Dr. Dinesh Kelkar",
      desc: "22+ Years of Clinical Practice, Apollo Hospitals FCR, Ex-HOD SD Medical, UPSMF Regd. No. 8.",
      href: "/about/",
      icon: <User className="w-5 h-5 text-teal-800" />,
      cta: "View Doctor Profile",
    },
    {
      title: "Conditions & Treatments",
      desc: "Slip disc, sciatica, corporate ergonomics, post-joint replacement rehab, and neuro recovery.",
      href: "/treatments/",
      icon: <Activity className="w-5 h-5 text-teal-800" />,
      cta: "Explore Treatments",
    },
    {
      title: "Clinics & OPD Hours",
      desc: "Centres at B-164 Golden I (Greater Noida West) & C-1 Sector 61 (Noida). Timings & maps.",
      href: "/locations/",
      icon: <MapPin className="w-5 h-5 text-teal-800" />,
      cta: "View Both Clinics",
    },
    {
      title: "Patient Visit Guide",
      desc: "What reports to bring, appointment process, attire recommendations, and FAQs.",
      href: "/patient-guide/",
      icon: <FileText className="w-5 h-5 text-teal-800" />,
      cta: "Read Patient Guide",
    },
  ];

  const featuredTreatments = [
    {
      title: "Spine & Back Pain Management",
      desc: "Lumbar slip disc, sciatica nerve decompression, cervical spondylosis, and postural traction.",
      image: assetPath("/images/spine-treatment.jpg"),
      icon: <Activity className="w-4 h-4 text-teal-800" />,
    },
    {
      title: "Workplace & Desk Ergonomics",
      desc: "Postural correction, workstation screen/chair audits, and RSI prevention for desk workers.",
      image: assetPath("/images/ergonomics-consultation.jpg"),
      icon: <Briefcase className="w-4 h-4 text-teal-800" />,
    },
    {
      title: "Post-Operative Rehabilitation",
      desc: "Total knee/hip replacement recovery, post-fracture joint mobilization, and gait retraining.",
      image: assetPath("/images/knee-joint-rehab.jpg"),
      icon: <Bone className="w-4 h-4 text-teal-800" />,
    },
    {
      title: "Sports Injury Rehabilitation",
      desc: "Athletic joint stabilization, ligament sprain care, rotator cuff therapy, and conditioning.",
      image: assetPath("/images/sports-injury.jpg"),
      icon: <Brain className="w-4 h-4 text-teal-800" />,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Quick Portal Navigation Cards */}
        <section className="py-10 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {portalCards.map((card, idx) => (
                <Link
                  key={idx}
                  href={card.href}
                  className="p-5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-teal-700 transition-all duration-200 group flex flex-col justify-between shadow-2xs"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center mb-3 group-hover:border-teal-700 transition-colors">
                      {card.icon}
                    </div>
                    <h3 className="font-bold text-slate-900 text-base group-hover:text-teal-900">
                      {card.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs font-semibold text-teal-800 group-hover:text-teal-900">
                    <span>{card.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Doctor Spotlight with Realistic Clinical Consultation Image */}
        <section className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Consultation Photo */}
              <div className="lg:col-span-5">
                <div className="relative w-full h-72 sm:h-80 rounded-2xl overflow-hidden border border-slate-300 shadow-sm">
                  <Image
                    src={assetPath("/images/patient-consultation.jpg")}
                    alt="Dr. Dinesh Kelkar consulting an adult patient and reviewing spinal diagnostic scans"
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                    <p className="text-white text-xs font-medium">
                      In-depth diagnostic evaluation & MRI scan review
                    </p>
                  </div>
                </div>
              </div>

              {/* Bio & Pedigree */}
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-bold text-teal-800 uppercase tracking-wider block">
                  Lead Clinical Director
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  Dr. Dinesh Kelkar (BPT, FCR Apollo Hospitals, MIAP)
                </h2>
                <p className="text-sm text-slate-700 leading-relaxed">
                  With over 22 years of clinical practice, Dr. Dinesh Kelkar is a trusted authority in non-surgical spine care, physical rehabilitation, and ergonomic posture health across Noida and Greater Noida. He holds an Apollo Hospitals Fellowship in Clinical Rehabilitation and has previously served as Head of Department at SD Medical Institute & Research Centre.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-700">
                  <div className="p-3 bg-white rounded-lg border border-slate-200">
                    <span className="text-slate-500 block">Experience</span>
                    <strong className="text-slate-900 text-sm">22+ Years Practice</strong>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-slate-200">
                    <span className="text-slate-500 block">Registrations</span>
                    <strong className="text-slate-900 text-sm">UPSMF: 8 • IAP: L-19105</strong>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-slate-200">
                    <span className="text-slate-500 block">Fellowship</span>
                    <strong className="text-slate-900 text-sm">FCR (Apollo Hospitals)</strong>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/about/"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-800 hover:text-teal-900 underline underline-offset-4"
                  >
                    <span>Read Full Professional Background & Career History</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Featured Treatments with Clinical Photos */}
        <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
              <div>
                <span className="text-xs font-bold text-teal-800 uppercase tracking-wider block mb-1">
                  Core Clinical Practice
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  Specialized Treatments & Rehabilitation
                </h2>
              </div>
              <Link
                href="/treatments/"
                className="text-xs font-bold text-teal-800 hover:text-teal-900 flex items-center gap-1"
              >
                <span>View All 6 Clinical Treatments</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {featuredTreatments.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200 bg-slate-50 overflow-hidden flex flex-col justify-between shadow-2xs hover:border-slate-300 transition-colors"
                >
                  <div className="relative w-full h-44 bg-slate-200">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-6">
              <Link
                href="/treatments/"
                className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg transition-colors"
              >
                <span>Learn about diagnosis, modalities & conditions treated</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Clinical Facility Showcase */}
        <section className="py-12 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-bold text-teal-800 uppercase tracking-wider block">
                  Purpose-Built Infrastructure
                </span>
                <h2 className="text-2xl font-bold text-slate-900">
                  Modern Rehabilitation Equipment & Private Therapy Cabins
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Both our Greater Noida West (Golden I) and Noida Sector 61 centres are fully outfitted with clinical lumbar/cervical mechanical traction units, interferential therapy (IFT), therapeutic ultrasound, joint mobilization couches, and rehabilitation exercise gear.
                </p>

                <div className="space-y-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-700 flex-shrink-0" />
                    <span>Hygienic, air-conditioned individual consultation and therapy suites</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-700 flex-shrink-0" />
                    <span>Free parking and ground floor / elevator accessibility at both locations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-700 flex-shrink-0" />
                    <span>Dedicated senior citizen care with minimal waiting time</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/locations/"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-teal-800 hover:bg-teal-900 text-white rounded-lg text-xs font-semibold transition-colors"
                  >
                    <span>View Clinics & OPD Timings</span>
                    <ArrowRight className="w-3.5 h-3.5 text-teal-200" />
                  </Link>
                </div>
              </div>

              {/* Facility Images Grid */}
              <div className="lg:col-span-6 grid grid-cols-2 gap-3">
                <div className="relative h-48 sm:h-56 rounded-xl overflow-hidden border border-slate-300">
                  <Image
                    src={assetPath("/images/clinic-facility.jpg")}
                    alt="Physiotherapy treatment area and rehabilitation equipment"
                    fill
                    sizes="(max-width: 768px) 50vw, 300px"
                    className="object-cover"
                  />
                  <span className="absolute bottom-2 left-2 bg-slate-900/80 text-white text-[10px] font-semibold px-2 py-0.5 rounded">
                    Rehab Floor
                  </span>
                </div>

                <div className="relative h-48 sm:h-56 rounded-xl overflow-hidden border border-slate-300">
                  <Image
                    src={assetPath("/images/clinic-reception.jpg")}
                    alt="Clinic reception and patient waiting area"
                    fill
                    sizes="(max-width: 768px) 50vw, 300px"
                    className="object-cover"
                  />
                  <span className="absolute bottom-2 left-2 bg-slate-900/80 text-white text-[10px] font-semibold px-2 py-0.5 rounded">
                    Waiting Lounge
                  </span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Direct Booking Engine */}
        <BookingWidget />

      </main>

      <Footer />
    </div>
  );
}
