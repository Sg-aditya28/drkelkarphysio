"use client";

import React, { useState, useEffect } from "react";
import {
  Calendar,
  Phone,
  CheckCircle2,
  MessageCircle,
  Printer,
  RotateCcw,
} from "lucide-react";

export interface ClinicLocation {
  id: "gr-noida-west" | "noida-sec-61";
  name: string;
  badge: string;
  address: string;
  landmark: string;
  phone: string;
}

export const CLINIC_LOCATIONS: ClinicLocation[] = [
  {
    id: "gr-noida-west",
    name: "Greater Noida West Branch",
    badge: "Techzone 4 Centre",
    address: "B-164, Golden I, Techzone 4, Greater Noida West",
    landmark: "Golden I Commercial Hub • Free Parking Available",
    phone: "+91 9891192074",
  },
  {
    id: "noida-sec-61",
    name: "Noida Sector 61 Branch",
    badge: "Sector 61 Centre",
    address: "C-1, Sector 61, Noida",
    landmark: "Near Sector 61 Metro Station • Ground Floor Access",
    phone: "+91 9891192074",
  },
];

export const CONDITIONS = [
  "Back & Neck Pain (Slip Disc / Spondylosis)",
  "Sciatica & Radiating Nerve Pain",
  "Knee & Joint Arthritis Pain",
  "Post-Operative Rehabilitation (Knee / Hip / Fracture)",
  "Sports Injury & Ligament Sprain",
  "Corporate Ergonomic Workstation Assessment",
  "Paralysis & Neurological Rehabilitation",
  "Shoulder Pain & Frozen Shoulder",
  "General Physiotherapy Evaluation",
];

const MORNING_SLOTS = [
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "01:00 PM",
];

const EVENING_SLOTS = [
  "05:00 PM",
  "05:30 PM",
  "06:00 PM",
  "06:30 PM",
  "07:00 PM",
  "07:30 PM",
  "08:00 PM",
];

export default function BookingWidget() {
  const [selectedLocation, setSelectedLocation] = useState<"gr-noida-west" | "noida-sec-61">("gr-noida-west");
  const [selectedCondition, setSelectedCondition] = useState<string>(CONDITIONS[0]);
  const [selectedDateIndex, setSelectedDateIndex] = useState<number>(0);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>("10:30 AM");

  const [patientName, setPatientName] = useState<string>("");
  const [patientPhone, setPatientPhone] = useState<string>("");
  const [patientAge, setPatientAge] = useState<string>("");
  const [patientNotes, setPatientNotes] = useState<string>("");

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);
  const [bookingRef, setBookingRef] = useState<string>("");

  const [upcomingDates, setUpcomingDates] = useState<{ dateStr: string; day: string; fullDate: string }[]>([]);

  useEffect(() => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      const dayName = i === 0 ? "Today" : i === 1 ? "Tomorrow" : d.toLocaleDateString("en-US", { weekday: "short" });
      const dateStr = d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
      const fullDate = d.toLocaleDateString("en-US", { weekday: "short", day: "numeric", month: "short", year: "numeric" });
      dates.push({ day: dayName, dateStr, fullDate });
    }
    setUpcomingDates(dates);
  }, []);

  // Listen for custom location pre-selection from other sections
  useEffect(() => {
    const handleSelectBranch = (e: Event) => {
      const customEvent = e as CustomEvent<"gr-noida-west" | "noida-sec-61">;
      if (customEvent.detail) {
        setSelectedLocation(customEvent.detail);
        setIsConfirmed(false);
        const el = document.getElementById("booking-section");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    };

    window.addEventListener("setBookingLocation", handleSelectBranch);
    return () => window.removeEventListener("setBookingLocation", handleSelectBranch);
  }, []);

  const activeLocation = CLINIC_LOCATIONS.find((loc) => loc.id === selectedLocation) || CLINIC_LOCATIONS[0];
  const activeDate = upcomingDates[selectedDateIndex] || { fullDate: "Selected Date", day: "Today", dateStr: "" };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!patientName.trim()) {
      newErrors.name = "Please enter patient name";
    }
    const cleanPhone = patientPhone.replace(/\D/g, "");
    if (!cleanPhone) {
      newErrors.phone = "Please enter mobile number";
    } else if (cleanPhone.length < 10) {
      newErrors.phone = "Please enter a valid 10-digit mobile number";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    const randomCode = Math.floor(100 + Math.random() * 900);
    const ref = `#KPC-2026-${randomCode}`;
    setBookingRef(ref);
    setIsConfirmed(true);
  };

  const resetBooking = () => {
    setIsConfirmed(false);
    setPatientName("");
    setPatientPhone("");
    setPatientAge("");
    setPatientNotes("");
    setErrors({});
  };

  const getWhatsAppLink = () => {
    const text = `Hello Dr. Dinesh Kelkar (Dr. Kelkar Physiotherapy Centre),

I have booked an appointment online:
*Ref:* ${bookingRef}
*Patient:* ${patientName} ${patientAge ? `(${patientAge} yrs)` : ""}
*Phone:* ${patientPhone}
*Clinic:* ${activeLocation.name}
*Address:* ${activeLocation.address}
*Condition:* ${selectedCondition}
*Date & Slot:* ${activeDate.fullDate} at ${selectedTimeSlot}
${patientNotes ? `*Note:* ${patientNotes}` : ""}

Please confirm my appointment slot. Thank you.`;

    return `https://wa.me/919891192074?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="booking-section" className="py-12 bg-white border-b border-slate-200 scroll-mt-14">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Book an Appointment with Dr. Dinesh Kelkar
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Choose your preferred clinic, select a morning or evening slot, and confirm instantly via WhatsApp or phone.
          </p>
        </div>

        {/* Booking Card */}
        <div className="bg-slate-50 border border-slate-300 rounded-xl p-5 sm:p-7 shadow-2xs">
          
          {isConfirmed ? (
            /* Confirmation Slip */
            <div className="space-y-6">
              <div className="p-4 bg-emerald-50 border border-emerald-300 rounded-lg flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-700 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-emerald-900 text-base">
                    Appointment Request Logged — Ref: {bookingRef}
                  </h3>
                  <p className="text-xs text-emerald-800 mt-0.5">
                    Your appointment request with Dr. Dinesh Kelkar has been recorded. Click below to confirm directly on WhatsApp.
                  </p>
                </div>
              </div>

              {/* Booking Summary Table */}
              <div className="bg-white border border-slate-200 rounded-lg p-4 space-y-3 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-3 border-b border-slate-100">
                  <div>
                    <span className="text-slate-500 block">Clinic Location:</span>
                    <strong className="text-slate-900 text-sm font-semibold">{activeLocation.name}</strong>
                    <span className="text-slate-600 block mt-0.5">{activeLocation.address}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Date & Time Slot:</span>
                    <strong className="text-slate-900 text-sm font-semibold">{activeDate.fullDate}</strong>
                    <span className="text-teal-800 font-bold block mt-0.5">Slot: {selectedTimeSlot}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <span className="text-slate-500 block">Patient Details:</span>
                    <span className="text-slate-900 font-medium">
                      {patientName} {patientAge ? `(${patientAge} yrs)` : ""} • {patientPhone}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Consultation Condition:</span>
                    <span className="text-slate-900 font-medium">{selectedCondition}</span>
                  </div>
                </div>

                {patientNotes && (
                  <div className="pt-2 border-t border-slate-100">
                    <span className="text-slate-500 block">Patient Notes:</span>
                    <span className="text-slate-700">{patientNotes}</span>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 py-3 px-4 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-xs transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Confirm via WhatsApp (1-Click)</span>
                </a>

                <a
                  href="tel:+919891192074"
                  className="w-full sm:w-auto py-3 px-4 rounded-lg border border-slate-300 bg-white text-slate-800 font-semibold text-xs flex items-center justify-center gap-1.5 hover:bg-slate-50"
                >
                  <Phone className="w-4 h-4 text-teal-700" />
                  <span>Call 9891192074</span>
                </a>

                <button
                  onClick={() => window.print()}
                  className="w-full sm:w-auto py-3 px-3 rounded-lg border border-slate-300 bg-white text-slate-700 font-medium text-xs flex items-center justify-center gap-1.5 hover:bg-slate-50"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Slip</span>
                </button>

                <button
                  onClick={resetBooking}
                  className="w-full sm:w-auto py-3 px-3 text-slate-600 hover:text-slate-900 text-xs font-medium flex items-center justify-center gap-1"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>New Booking</span>
                </button>
              </div>

              <p className="text-[11px] text-slate-500 text-center">
                Please bring any previous X-rays, MRI scans, or surgical discharge notes to your appointment.
              </p>
            </div>
          ) : (
            /* Direct Booking Form */
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* 1. Branch Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">
                  1. Select Clinic Branch
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {CLINIC_LOCATIONS.map((loc) => {
                    const isSelected = selectedLocation === loc.id;
                    return (
                      <div
                        key={loc.id}
                        onClick={() => setSelectedLocation(loc.id)}
                        className={`cursor-pointer p-3.5 rounded-lg border text-left transition-colors ${
                          isSelected
                            ? "border-teal-800 bg-white shadow-2xs ring-1 ring-teal-800"
                            : "border-slate-300 bg-white/70 hover:bg-white hover:border-slate-400"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-slate-900 text-sm">
                            {loc.name}
                          </span>
                          <span
                            className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                              isSelected ? "border-teal-800 bg-teal-800" : "border-slate-400"
                            }`}
                          >
                            {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 mt-1">{loc.address}</p>
                        <p className="text-[11px] text-slate-500 mt-0.5">{loc.landmark}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 2. Condition Dropdown */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                  2. Reason for Visit / Condition
                </label>
                <select
                  value={selectedCondition}
                  onChange={(e) => setSelectedCondition(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-800"
                >
                  {CONDITIONS.map((cond, idx) => (
                    <option key={idx} value={cond}>
                      {cond}
                    </option>
                  ))}
                </select>
              </div>

              {/* 3. Date & Time Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">
                  3. Select Date & Slot (Next 7 Days)
                </label>

                {/* Date Pills */}
                <div className="grid grid-cols-4 sm:grid-cols-7 gap-1.5 mb-3">
                  {upcomingDates.map((item, idx) => {
                    const isSelected = selectedDateIndex === idx;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setSelectedDateIndex(idx)}
                        className={`py-2 px-1 text-center rounded-lg border transition-colors ${
                          isSelected
                            ? "bg-teal-800 border-teal-800 text-white font-semibold"
                            : "bg-white border-slate-300 text-slate-700 hover:border-slate-400"
                        }`}
                      >
                        <span className="block text-[10px] uppercase">{item.day}</span>
                        <span className="block text-xs font-bold">{item.dateStr}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Slots */}
                <div className="space-y-2">
                  {/* Morning */}
                  <div>
                    <span className="text-[11px] font-semibold text-slate-600 block mb-1">
                      Morning OPD (10:00 AM – 1:30 PM)
                    </span>
                    <div className="grid grid-cols-4 sm:grid-cols-7 gap-1.5">
                      {MORNING_SLOTS.map((slot) => {
                        const isSelected = selectedTimeSlot === slot;
                        return (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setSelectedTimeSlot(slot)}
                            className={`py-1.5 text-xs rounded border text-center font-medium ${
                              isSelected
                                ? "bg-teal-50 border-teal-800 text-teal-900 font-bold"
                                : "bg-white border-slate-300 text-slate-700 hover:bg-slate-50"
                            }`}
                          >
                            {slot}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Evening */}
                  <div>
                    <span className="text-[11px] font-semibold text-slate-600 block mb-1">
                      Evening OPD (5:00 PM – 8:30 PM)
                    </span>
                    <div className="grid grid-cols-4 sm:grid-cols-7 gap-1.5">
                      {EVENING_SLOTS.map((slot) => {
                        const isSelected = selectedTimeSlot === slot;
                        return (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setSelectedTimeSlot(slot)}
                            className={`py-1.5 text-xs rounded border text-center font-medium ${
                              isSelected
                                ? "bg-teal-50 border-teal-800 text-teal-900 font-bold"
                                : "bg-white border-slate-300 text-slate-700 hover:bg-slate-50"
                            }`}
                          >
                            {slot}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. Patient Information */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">
                  4. Patient Contact Details
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs text-slate-600 mb-1">Patient Name *</label>
                    <input
                      type="text"
                      value={patientName}
                      onChange={(e) => {
                        setPatientName(e.target.value);
                        if (errors.name) setErrors({ ...errors, name: "" });
                      }}
                      placeholder="e.g. Rajesh Kumar"
                      className={`w-full px-3 py-2 rounded-lg border text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-teal-800 ${
                        errors.name ? "border-red-500" : "border-slate-300"
                      }`}
                    />
                    {errors.name && <p className="text-red-600 text-xs mt-0.5">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs text-slate-600 mb-1">Mobile Number *</label>
                    <input
                      type="tel"
                      value={patientPhone}
                      onChange={(e) => {
                        setPatientPhone(e.target.value);
                        if (errors.phone) setErrors({ ...errors, phone: "" });
                      }}
                      placeholder="10-digit mobile"
                      className={`w-full px-3 py-2 rounded-lg border text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-teal-800 ${
                        errors.phone ? "border-red-500" : "border-slate-300"
                      }`}
                    />
                    {errors.phone && <p className="text-red-600 text-xs mt-0.5">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-xs text-slate-600 mb-1">Age (Optional)</label>
                    <input
                      type="number"
                      value={patientAge}
                      onChange={(e) => setPatientAge(e.target.value)}
                      placeholder="e.g. 48"
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-teal-800"
                    />
                  </div>
                </div>

                <div className="mt-3">
                  <label className="block text-xs text-slate-600 mb-1">
                    Brief Problem Notes (Optional)
                  </label>
                  <input
                    type="text"
                    value={patientNotes}
                    onChange={(e) => setPatientNotes(e.target.value)}
                    placeholder="e.g. Cervical pain for 2 months, lower back stiffness..."
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-teal-800"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-lg bg-teal-800 hover:bg-teal-900 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-sm transition-colors"
                >
                  <Calendar className="w-4 h-4 text-teal-200" />
                  <span>Reserve Appointment Slot</span>
                </button>
                <p className="text-[11px] text-slate-500 text-center mt-2">
                  No payment required online. Direct clinic consultation with Dr. Dinesh Kelkar.
                </p>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
