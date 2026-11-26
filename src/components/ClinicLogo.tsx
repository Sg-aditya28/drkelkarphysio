import React from "react";

interface ClinicLogoProps {
  className?: string;
  showSubtitle?: boolean;
  light?: boolean;
}

export default function ClinicLogo({
  className = "",
  showSubtitle = true,
  light = false,
}: ClinicLogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Clean medical cross & movement mark */}
      <div className="w-10 h-10 rounded-xl bg-teal-800 flex items-center justify-center flex-shrink-0 shadow-sm border border-teal-700">
        <svg
          viewBox="0 0 40 40"
          className="w-6 h-6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Medical Cross in White */}
          <rect x="17" y="6" width="6" height="28" rx="2" fill="#FFFFFF" />
          <rect x="6" y="17" width="28" height="6" rx="2" fill="#FFFFFF" />
          {/* Movement Accent: Lime Green arc & Red dot */}
          <circle cx="20" cy="20" r="3" fill="#DC2626" />
          <path
            d="M12 28C14 22 26 22 28 12"
            stroke="#84CC16"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="flex flex-col leading-tight">
        <span
          className={`font-bold text-lg tracking-tight ${
            light ? "text-white" : "text-slate-900"
          }`}
        >
          Dr. Kelkar <span className="text-teal-700 font-semibold">Physiotherapy</span>
        </span>
        {showSubtitle && (
          <span
            className={`text-[11px] font-medium tracking-normal ${
              light ? "text-slate-400" : "text-slate-500"
            }`}
          >
            Noida (Sec 61) & Greater Noida West (Golden I)
          </span>
        )}
      </div>
    </div>
  );
}
