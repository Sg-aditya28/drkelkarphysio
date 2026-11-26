import React from "react";
import { FileText, Clock, CheckCircle } from "lucide-react";

export default function PatientGuide() {
  return (
    <section id="patient-info" className="py-12 bg-slate-50 border-b border-slate-200 scroll-mt-14">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="mb-6">
          <h3 className="text-xl font-bold text-slate-900">
            Patient Visit Information
          </h3>
          <p className="text-xs text-slate-600 mt-0.5">
            Practical details to help you prepare for your consultation with Dr. Dinesh Kelkar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-700">
          
          <div className="bg-white p-4 rounded-lg border border-slate-200 space-y-1.5">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
              <FileText className="w-4 h-4 text-teal-800" />
              <span>What to Bring</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Please bring any recent X-rays, MRI scans, orthopedic prescriptions, or surgical discharge summaries to assist in precise clinical assessment.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg border border-slate-200 space-y-1.5">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
              <Clock className="w-4 h-4 text-teal-800" />
              <span>Consultation Timings</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Regular OPD runs Morning (10:00 AM – 1:30 PM) and Evening (5:00 PM – 8:30 PM) Monday through Saturday at both Greater Noida West and Noida Sector 61.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg border border-slate-200 space-y-1.5">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
              <CheckCircle className="w-4 h-4 text-teal-800" />
              <span>Appointment Process</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              You can reserve your slot online via the booking form or call directly at +91 9891192074. Direct WhatsApp confirmation is sent immediately.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
