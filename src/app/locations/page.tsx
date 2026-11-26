import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { assetPath } from "@/lib/basePath";
import {
  MapPin,
  Clock,
  Phone,
  Navigation,
  Calendar,
  Car,
  Accessibility,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Clinic Locations & OPD Hours | Dr. Kelkar Physiotherapy Centre",
  description:
    "Visit Dr. Kelkar Physiotherapy Centre at Greater Noida West (B-164, Golden I, Techzone 4) or Noida (C-1, Sector 61). OPD Hours: 10:00 AM – 1:30 PM & 5:00 PM – 8:30 PM.",
};

export default function LocationsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <Navbar />

      <main className="flex-1">
        {/* Banner */}
        <section className="bg-slate-50 border-b border-slate-200 py-10 sm:py-14">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold text-teal-800 uppercase tracking-wider block mb-1">
                Consultation Centres
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Our Clinic Locations & OPD Hours
              </h1>
              <p className="text-base text-slate-600 mt-2">
                Dr. Dinesh Kelkar consults at two conveniently situated physiotherapy clinics in Greater Noida West and Noida Sector 61.
              </p>
            </div>
          </div>
        </section>

        {/* Both Locations Detailed with Real Photos */}
        <section className="py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Branch 1: Greater Noida West */}
              <div className="border border-slate-300 rounded-xl overflow-hidden bg-slate-50 flex flex-col justify-between shadow-2xs">
                <div>
                  <div className="relative w-full h-52 bg-slate-200">
                    <Image
                      src={assetPath("/images/clinic-facility.jpg")}
                      alt="Greater Noida West clinic physical rehabilitation floor"
                      fill
                      sizes="(max-width: 768px) 100vw, 500px"
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-teal-900/90 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded shadow">
                      Branch 1: Greater Noida West
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl font-bold text-slate-900">
                        Golden I Centre, Techzone 4
                      </h2>
                      <span className="text-xs text-slate-500 font-medium">Monday to Saturday</span>
                    </div>

                    <div className="space-y-3 text-xs text-slate-700">
                      <div className="flex items-start gap-2.5">
                        <MapPin className="w-4 h-4 text-teal-800 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-slate-900 block font-semibold text-sm">Full Address:</strong>
                          <p className="mt-0.5 text-slate-700 text-xs">
                            B-164, Golden I, Techzone 4, Greater Noida West
                          </p>
                          <p className="text-slate-500 text-[11px] mt-0.5">
                            Landmark: Located in Golden I Commercial Complex, near Gaur City
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5 pt-3 border-t border-slate-200">
                        <Clock className="w-4 h-4 text-slate-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-slate-900 block font-semibold text-sm">OPD Consultation Hours:</strong>
                          <p className="mt-0.5 font-medium">Morning OPD: 10:00 AM – 01:30 PM</p>
                          <p className="font-medium">Evening OPD: 05:00 PM – 08:30 PM</p>
                          <p className="text-slate-500 text-[11px] mt-0.5">Sunday visits by prior appointment only</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5 pt-3 border-t border-slate-200">
                        <Phone className="w-4 h-4 text-slate-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-slate-900 block font-semibold text-sm">Appointments & Queries:</strong>
                          <div className="flex flex-wrap gap-2 text-xs font-semibold text-teal-800 mt-0.5">
                            <a href="tel:+919891192074" className="hover:underline">
                              +91 9891192074
                            </a>
                            <span>/</span>
                            <a href="tel:+917533046119" className="hover:underline">
                              +91 7533046119
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="pt-3 border-t border-slate-200 grid grid-cols-2 gap-2 text-[11px] text-slate-600">
                        <div className="flex items-center gap-1.5">
                          <Car className="w-3.5 h-3.5 text-teal-700" />
                          <span>Free Commercial Parking</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Accessibility className="w-3.5 h-3.5 text-teal-700" />
                          <span>Elevator & Wheelchair Access</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 flex flex-col sm:flex-row gap-2.5">
                  <Link
                    href="/book-appointment/"
                    className="flex-1 py-2.5 px-4 bg-teal-800 hover:bg-teal-900 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book at Gr. Noida West</span>
                  </Link>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=B-164+Golden+I+Techzone+4+Greater+Noida+West"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-4 border border-slate-300 bg-white hover:bg-slate-100 text-slate-800 rounded-lg text-xs font-medium flex items-center justify-center gap-1.5"
                  >
                    <Navigation className="w-3.5 h-3.5 text-teal-800" />
                    <span>Google Maps</span>
                  </a>
                </div>
              </div>

              {/* Branch 2: Noida Sector 61 */}
              <div className="border border-slate-300 rounded-xl overflow-hidden bg-slate-50 flex flex-col justify-between shadow-2xs">
                <div>
                  <div className="relative w-full h-52 bg-slate-200">
                    <Image
                      src={assetPath("/images/clinic-reception.jpg")}
                      alt="Noida Sector 61 clinic waiting lounge and consultation suite"
                      fill
                      sizes="(max-width: 768px) 100vw, 500px"
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-slate-900/90 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded shadow">
                      Branch 2: Noida Sector 61
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl font-bold text-slate-900">
                        Sector 61 Centre, Central Noida
                      </h2>
                      <span className="text-xs text-slate-500 font-medium">Monday to Saturday</span>
                    </div>

                    <div className="space-y-3 text-xs text-slate-700">
                      <div className="flex items-start gap-2.5">
                        <MapPin className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-slate-900 block font-semibold text-sm">Full Address:</strong>
                          <p className="mt-0.5 text-slate-700 text-xs">
                            C-1, Sector 61, Noida
                          </p>
                          <p className="text-slate-500 text-[11px] mt-0.5">
                            Landmark: Near Sector 61 Metro Station, central accessible hub
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5 pt-3 border-t border-slate-200">
                        <Clock className="w-4 h-4 text-slate-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-slate-900 block font-semibold text-sm">OPD Consultation Hours:</strong>
                          <p className="mt-0.5 font-medium">Morning OPD: 10:00 AM – 01:30 PM</p>
                          <p className="font-medium">Evening OPD: 05:00 PM – 08:30 PM</p>
                          <p className="text-slate-500 text-[11px] mt-0.5">Sunday visits by prior appointment only</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5 pt-3 border-t border-slate-200">
                        <Phone className="w-4 h-4 text-slate-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-slate-900 block font-semibold text-sm">Appointments & Queries:</strong>
                          <div className="flex flex-wrap gap-2 text-xs font-semibold text-teal-800 mt-0.5">
                            <a href="tel:+919891192074" className="hover:underline">
                              +91 9891192074
                            </a>
                            <span>/</span>
                            <a href="tel:+917533046119" className="hover:underline">
                              +91 7533046119
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="pt-3 border-t border-slate-200 grid grid-cols-2 gap-2 text-[11px] text-slate-600">
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-700" />
                          <span>Ground Floor Access</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-700" />
                          <span>Senior Citizen Friendly Setup</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 flex flex-col sm:flex-row gap-2.5">
                  <Link
                    href="/book-appointment/"
                    className="flex-1 py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book at Noida Sector 61</span>
                  </Link>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=C-1+Sector+61+Noida"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-4 border border-slate-300 bg-white hover:bg-slate-100 text-slate-800 rounded-lg text-xs font-medium flex items-center justify-center gap-1.5"
                  >
                    <Navigation className="w-3.5 h-3.5 text-teal-800" />
                    <span>Get Directions</span>
                  </a>
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
