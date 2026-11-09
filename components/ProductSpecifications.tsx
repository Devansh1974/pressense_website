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
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
      <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
        <h3 className="font-heading font-bold text-base text-slate-900">
          Technical Specifications
        </h3>
        {modelCode && (
          <span className="text-xs font-mono text-slate-700 bg-white border border-slate-200 px-2.5 py-0.5 rounded font-semibold shadow-2xs">
            Part Ref: {modelCode}
          </span>
        )}
      </div>

      <div className="divide-y divide-slate-100">
        {entries.map(([key, value], idx) => (
          <div
            key={key}
            className={`grid grid-cols-1 sm:grid-cols-3 px-6 py-3.5 text-xs sm:text-sm ${
              idx % 2 === 0 ? "bg-white" : "bg-slate-50/60"
            }`}
          >
            <span className="font-semibold text-slate-500 sm:col-span-1">
              {key}
            </span>
            <span className="text-slate-900 sm:col-span-2 font-mono font-medium mt-0.5 sm:mt-0">
              {value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
