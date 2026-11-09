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
    <div className="bg-[#0D1520] border border-slate-800 rounded-xl overflow-hidden shadow-xl">
      <div className="px-6 py-4 bg-[#090E17] border-b border-slate-800 flex items-center justify-between">
        <h3 className="font-heading font-bold text-base text-white">
          Technical Specifications
        </h3>
        {modelCode && (
          <span className="text-xs font-mono text-slate-300 bg-white/5 border border-white/10 px-2.5 py-0.5 rounded">
            Part Ref: {modelCode}
          </span>
        )}
      </div>

      <div className="divide-y divide-slate-800/80">
        {entries.map(([key, value], idx) => (
          <div
            key={key}
            className={`grid grid-cols-1 sm:grid-cols-3 px-6 py-3.5 text-xs sm:text-sm ${
              idx % 2 === 0 ? "bg-[#0D1520]" : "bg-[#090F17]"
            }`}
          >
            <span className="font-semibold text-slate-400 sm:col-span-1">
              {key}
            </span>
            <span className="text-white sm:col-span-2 font-mono font-medium mt-0.5 sm:mt-0">
              {value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
