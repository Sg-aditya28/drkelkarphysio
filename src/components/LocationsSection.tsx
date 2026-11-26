"use client";

import React from "react";
import {
  MapPin,
  Clock,
  Phone,
  Navigation,
  Calendar,
} from "lucide-react";

export default function LocationsSection() {
  const handleSelectBranch = (branchId: "gr-noida-west" | "noida-sec-61") => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("setBookingLocation", { detail: branchId })
      );
    }
  };

  return (
    <section id="locations" className="py-14 sm:py-16 bg-white border-b border-slate-200 scroll-mt-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 text-center sm:text-left">
          <span className="text-xs font-bold text-teal-800 uppercase tracking-wider block mb-1">
            Clinic Locations & Hours
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Consultation Centres in Noida & Greater Noida West
          </h2>
          <p className="text-sm text-slate-600 mt-1 max-w-2xl">
            Both branches are equipped with dedicated consultation and physical rehabilitation rooms.
          </p>
        </div>

        {/* 2 Clinic Location Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Greater Noida West */}
          <div className="border border-slate-300 rounded-xl p-5 sm:p-6 bg-slate-50 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded">
                  Branch 1: Greater Noida West
                </span>
                <span className="text-xs text-slate-500 font-medium">Monday – Saturday</span>
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                Golden I Centre, Techzone 4
              </h3>

              <div className="mt-4 space-y-2 text-xs text-slate-700">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-teal-800 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Address:</strong>
                    <p className="mt-0.5">B-164, Golden I, Techzone 4, Greater Noida West</p>
                    <p className="text-slate-500 text-[11px] mt-0.5">Landmark: Golden I Complex, near Gaur City</p>
                  </div>
                </div>

                <div className="flex items-start gap-2 pt-2 border-t border-slate-200">
                  <Clock className="w-4 h-4 text-slate-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">OPD Timings:</strong>
                    <p className="mt-0.5">Morning: 10:00 AM – 01:30 PM</p>
                    <p>Evening: 05:00 PM – 08:30 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-2 pt-2 border-t border-slate-200">
                  <Phone className="w-4 h-4 text-slate-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Contact Numbers:</strong>
                    <p className="mt-0.5">
                      <a href="tel:+919891192074" className="font-semibold text-teal-800 hover:underline">
                        +91 9891192074
                      </a>{" "}
                      /{" "}
                      <a href="tel:+917533046119" className="font-semibold text-teal-800 hover:underline">
                        +91 7533046119
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-200 flex flex-col sm:flex-row gap-2">
              <button
                onClick={() => handleSelectBranch("gr-noida-west")}
                className="flex-1 py-2 px-3 bg-teal-800 hover:bg-teal-900 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book This Branch</span>
              </button>

              <a
                href="https://www.google.com/maps/search/?api=1&query=B-164+Golden+I+Techzone+4+Greater+Noida+West"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-3 border border-slate-300 bg-white hover:bg-slate-100 text-slate-800 rounded-lg text-xs font-medium flex items-center justify-center gap-1.5"
              >
                <Navigation className="w-3.5 h-3.5 text-teal-800" />
                <span>Google Maps</span>
              </a>
            </div>
          </div>

          {/* Noida Sector 61 */}
          <div className="border border-slate-300 rounded-xl p-5 sm:p-6 bg-slate-50 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-800 bg-slate-200 px-2.5 py-0.5 rounded">
                  Branch 2: Noida Sector 61
                </span>
                <span className="text-xs text-slate-500 font-medium">Monday – Saturday</span>
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                Sector 61 Centre, Noida
              </h3>

              <div className="mt-4 space-y-2 text-xs text-slate-700">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Address:</strong>
                    <p className="mt-0.5">C-1, Sector 61, Noida</p>
                    <p className="text-slate-500 text-[11px] mt-0.5">Landmark: Near Sector 61 Metro Station</p>
                  </div>
                </div>

                <div className="flex items-start gap-2 pt-2 border-t border-slate-200">
                  <Clock className="w-4 h-4 text-slate-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">OPD Timings:</strong>
                    <p className="mt-0.5">Morning: 10:00 AM – 01:30 PM</p>
                    <p>Evening: 05:00 PM – 08:30 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-2 pt-2 border-t border-slate-200">
                  <Phone className="w-4 h-4 text-slate-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Contact Numbers:</strong>
                    <p className="mt-0.5">
                      <a href="tel:+919891192074" className="font-semibold text-teal-800 hover:underline">
                        +91 9891192074
                      </a>{" "}
                      /{" "}
                      <a href="tel:+917533046119" className="font-semibold text-teal-800 hover:underline">
                        +91 7533046119
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-200 flex flex-col sm:flex-row gap-2">
              <button
                onClick={() => handleSelectBranch("noida-sec-61")}
                className="flex-1 py-2 px-3 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book This Branch</span>
              </button>

              <a
                href="https://www.google.com/maps/search/?api=1&query=C-1+Sector+61+Noida"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-3 border border-slate-300 bg-white hover:bg-slate-100 text-slate-800 rounded-lg text-xs font-medium flex items-center justify-center gap-1.5"
              >
                <Navigation className="w-3.5 h-3.5 text-teal-800" />
                <span>Google Maps</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
