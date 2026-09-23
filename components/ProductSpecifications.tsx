import React from "react";

interface ProductSpecificationsProps {
  specifications: Record<string, string>;
  modelCode?: string;
}

export default function ProductSpecifications({
  specifications,
  modelCode,
}: ProductSpecificationsProps) {
  const entries = Object.entries(specifications);

  return (
    <div className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden shadow-xs">
      <div className="px-6 py-4 bg-[#F8FAFC] border-b border-[#E2E8F0] flex items-center justify-between">
        <h3 className="font-heading font-bold text-base text-[#0D1B24]">
          Technical Specifications
        </h3>
        {modelCode && (
          <span className="text-xs font-mono text-[#64748B] bg-white border border-[#E2E8F0] px-2 py-0.5 rounded">
            Part Ref: {modelCode}
          </span>
        )}
      </div>

      <div className="divide-y divide-[#F1F5F9]">
        {entries.map(([key, value], idx) => (
          <div
            key={key}
            className={`grid grid-cols-1 sm:grid-cols-3 px-6 py-3.5 text-xs sm:text-sm ${
              idx % 2 === 0 ? "bg-white" : "bg-[#FBFDFB]"
            }`}
          >
            <span className="font-semibold text-[#475569] sm:col-span-1">
              {key}
            </span>
            <span className="text-[#0D1B24] sm:col-span-2 font-mono sm:font-sans font-medium mt-0.5 sm:mt-0">
              {value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
