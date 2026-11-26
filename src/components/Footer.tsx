"use client";

import React from "react";
import Link from "next/link";
import {
  Phone,
  Calendar,
  MessageCircle,
} from "lucide-react";
import ClinicLogo from "./ClinicLogo";

export default function Footer() {
  return (
    <>
      <footer className="bg-slate-900 text-slate-300 pt-12 pb-24 sm:pb-12 text-xs border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-slate-800">
            
            {/* Column 1: Doctor & Registrations */}
            <div className="md:col-span-2 space-y-3">
              <ClinicLogo light showSubtitle={false} />
              <p className="text-slate-400 leading-relaxed max-w-md">
                <strong className="text-white">Dr. Dinesh Kelkar</strong> (BPT, FCR Apollo Hospitals, MIAP)
                <br />
                Senior Consultant Physiotherapist & Certified Ergonomist with 22+ years of clinical practice in Noida and Greater Noida West.
              </p>
              <div className="text-slate-400 space-y-0.5 pt-1">
                <p>UPSMF Regd. No.: <strong className="text-white font-mono">8</strong></p>
                <p>IAP Regd. No.: <strong className="text-white font-mono">L-19105</strong></p>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="space-y-3">
              <h4 className="font-bold text-white text-sm uppercase tracking-wider">
                Quick Links
              </h4>
              <ul className="space-y-1.5 text-slate-400">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about/" className="hover:text-white transition-colors">
                    About Dr. Dinesh Kelkar
                  </Link>
                </li>
                <li>
                  <Link href="/treatments/" className="hover:text-white transition-colors">
                    Conditions & Treatments
                  </Link>
                </li>
                <li>
                  <Link href="/locations/" className="hover:text-white transition-colors">
                    Clinics & OPD Hours
                  </Link>
                </li>
                <li>
                  <Link href="/patient-guide/" className="hover:text-white transition-colors">
                    Patient Visit Guide
                  </Link>
                </li>
                <li>
                  <Link href="/book-appointment/" className="text-teal-400 font-semibold hover:underline">
                    Book an Appointment
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact & Help */}
            <div className="space-y-3">
              <h4 className="font-bold text-white text-sm uppercase tracking-wider">
                Appointments & Contact
              </h4>
              <div className="space-y-2">
                <a
                  href="tel:+919891192074"
                  className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-800 hover:bg-slate-750 text-white font-semibold transition-colors"
                >
                  <Phone className="w-4 h-4 text-teal-400" />
                  <span>+91 9891192074</span>
                </a>
                <a
                  href="tel:+917533046119"
                  className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-800 hover:bg-slate-750 text-white font-semibold transition-colors"
                >
                  <Phone className="w-4 h-4 text-teal-400" />
                  <span>+91 7533046119</span>
                </a>
                <a
                  href="https://wa.me/919891192074?text=Hello%20Dr.%20Kelkar%20Physiotherapy%20Centre,%20I%20would%20like%20to%20book%20an%20appointment."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-lg bg-emerald-950/70 border border-emerald-800 text-emerald-300 font-semibold"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-slate-500 gap-2">
            <p>© {new Date().getFullYear()} Dr. Kelkar Physiotherapy Centre. All rights reserved.</p>
            <p>Noida Sector 61 & Greater Noida West (Golden I)</p>
          </div>

        </div>
      </footer>

      {/* Floating Bottom Bar for Mobile Screen */}
      <div className="fixed bottom-0 inset-x-0 z-40 bg-white border-t border-slate-300 p-2 sm:hidden shadow-lg">
        <div className="grid grid-cols-2 gap-2">
          <a
            href="tel:+919891192074"
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg border border-slate-300 bg-white text-slate-900 font-bold text-xs"
          >
            <Phone className="w-3.5 h-3.5 text-red-600" />
            <span>Call 9891192074</span>
          </a>

          <Link
            href="/book-appointment/"
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-teal-800 text-white font-bold text-xs"
          >
            <Calendar className="w-3.5 h-3.5 text-teal-200" />
            <span>Book Slot</span>
          </Link>
        </div>
      </div>
    </>
  );
}
