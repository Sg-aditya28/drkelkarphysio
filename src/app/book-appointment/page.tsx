import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingWidget from "@/components/BookingWidget";
import { Phone, Clock, ShieldCheck } from "lucide-react";
import { assetPath } from "@/lib/basePath";

export const metadata: Metadata = {
  title: "Book an Appointment | Dr. Kelkar Physiotherapy Centre",
  description:
    "Schedule your physiotherapy consultation with Dr. Dinesh Kelkar at Greater Noida West (Golden I) or Noida (Sector 61). Instant WhatsApp confirmation.",
};

export default function BookAppointmentPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <Navbar />

      <main className="flex-1">
        {/* Banner with Clinic Reception Trust Image */}
        <section className="bg-slate-50 border-b border-slate-200 py-8 sm:py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              
              <div className="md:col-span-8">
                <span className="text-xs font-bold text-teal-800 uppercase tracking-wider block mb-1">
                  Direct OPD Scheduling
                </span>
                <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  Book an Appointment with Dr. Dinesh Kelkar
                </h1>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                  Select your preferred branch in Greater Noida West or Noida Sector 61, choose your date and slot, and receive immediate WhatsApp confirmation.
                </p>

                {/* Quick Contact Bar */}
                <div className="mt-4 pt-4 border-t border-slate-200 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-700">
                  <div className="flex items-center gap-1.5 font-semibold text-slate-900">
                    <Phone className="w-3.5 h-3.5 text-teal-700" />
                    <span>Call Clinic: +91 9891192074 / +91 7533046119</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-600">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    <span>OPD: 10:00 AM – 1:30 PM & 5:00 PM – 8:30 PM</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-600">
                    <ShieldCheck className="w-3.5 h-3.5 text-teal-700" />
                    <span>No Advance Payment Needed Online</span>
                  </div>
                </div>
              </div>

              {/* Clinic Reception Thumbnail */}
              <div className="md:col-span-4 hidden md:block">
                <div className="relative h-40 rounded-xl overflow-hidden border border-slate-300 shadow-2xs">
                  <Image
                    src={assetPath("/images/clinic-reception.jpg")}
                    alt="Dr. Kelkar Physiotherapy Centre clinic waiting area"
                    fill
                    sizes="300px"
                    className="object-cover"
                  />
                  <span className="absolute bottom-2 left-2 bg-slate-900/80 text-white text-[10px] font-semibold px-2 py-0.5 rounded">
                    Welcoming Clinic Ambience
                  </span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Interactive Booking Widget */}
        <div className="py-6 sm:py-10">
          <BookingWidget />
        </div>
      </main>

      <Footer />
    </div>
  );
}
