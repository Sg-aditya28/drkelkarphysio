"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Phone,
  Clock,
  MapPin,
  Calendar,
  Menu,
  X,
  MessageCircle,
} from "lucide-react";
import ClinicLogo from "./ClinicLogo";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Dr. Kelkar", href: "/about/" },
    { name: "Treatments", href: "/treatments/" },
    { name: "Clinics & Timings", href: "/locations/" },
    { name: "Patient Guide", href: "/patient-guide/" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      {/* Top Utility Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          {/* Clinic Branches & OPD Hours */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1 text-slate-300 text-xs">
            <Link
              href="/locations/"
              className="flex items-center gap-1 hover:text-teal-300 transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-teal-400 flex-shrink-0" />
              <span>Gr. Noida West: B-164, Golden I</span>
            </Link>
            <span className="text-slate-600 hidden md:inline">|</span>
            <Link
              href="/locations/"
              className="flex items-center gap-1 hover:text-red-300 transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-red-400 flex-shrink-0" />
              <span>Noida: C-1, Sector 61</span>
            </Link>
            <span className="text-slate-600 hidden lg:inline">|</span>
            <span className="hidden lg:flex items-center gap-1 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>OPD: 10:00 AM – 1:30 PM & 5:00 PM – 8:30 PM</span>
            </span>
          </div>

          {/* Direct Phone Numbers */}
          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-400 hidden sm:inline">Call Clinic:</span>
            <a
              href="tel:+919891192074"
              className="font-semibold text-white hover:text-teal-300 transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-teal-400" />
              <span>9891192074</span>
            </a>
            <span className="text-slate-600">/</span>
            <a
              href="tel:+917533046119"
              className="font-semibold text-white hover:text-teal-300 transition-colors"
            >
              <span>7533046119</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-200 border-b ${
          scrolled
            ? "border-slate-200 shadow-sm py-3 bg-white/98 backdrop-blur-sm"
            : "border-slate-200 py-3.5 bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Clinic Brand */}
          <Link href="/" className="focus:outline-none">
            <ClinicLogo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 text-sm font-medium text-slate-700">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/" || pathname === ""
                  : pathname?.startsWith(link.href.replace(/\/$/, ""));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`transition-colors py-1 border-b-2 ${
                    isActive
                      ? "text-teal-800 border-teal-800 font-semibold"
                      : "border-transparent hover:text-teal-800 hover:border-slate-300"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/919891192074?text=Hello%20Dr.%20Kelkar%20Physiotherapy%20Centre,%20I%20would%20like%20to%20book%20an%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-lg border border-emerald-300 text-emerald-800 hover:bg-emerald-50 text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            <Link
              href="/book-appointment/"
              className="px-4 py-2 rounded-lg bg-teal-800 hover:bg-teal-900 text-white text-xs font-semibold flex items-center gap-2 shadow-sm transition-colors"
            >
              <Calendar className="w-3.5 h-3.5 text-teal-200" />
              <span>Book Appointment</span>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/book-appointment/"
              className="sm:hidden px-3 py-1.5 text-xs font-semibold bg-teal-800 text-white rounded-md"
            >
              Book Slot
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-md"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-3 shadow-lg">
            <div className="flex flex-col space-y-1 text-sm font-medium text-slate-800">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/" || pathname === ""
                    : pathname?.startsWith(link.href.replace(/\/$/, ""));
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-2 rounded-lg transition-colors ${
                      isActive
                        ? "bg-teal-50 text-teal-800 font-semibold"
                        : "hover:bg-slate-50 text-slate-700"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <Link
                href="/book-appointment/"
                className="w-full py-2.5 bg-teal-800 text-white rounded-lg text-sm font-semibold flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment Online</span>
              </Link>
              <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
                <a
                  href="tel:+919891192074"
                  className="py-2 px-3 border border-slate-300 rounded-lg text-slate-800 text-center flex items-center justify-center gap-1"
                >
                  <Phone className="w-3.5 h-3.5 text-teal-700" />
                  <span>Call 9891192074</span>
                </a>
                <a
                  href="https://wa.me/919891192074?text=Hello%20Dr.%20Kelkar%20Physiotherapy%20Centre,%20I%20would%20like%20to%20book%20an%20appointment."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-3 bg-emerald-50 text-emerald-800 border border-emerald-300 rounded-lg text-center flex items-center justify-center gap-1"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
