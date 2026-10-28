import { ArrowUpRight, Lock } from 'lucide-react';

export default function ResourceCard({
  courseCode,
  title,
  type,
  level,
  format = 'PDF',
  year,
  pages,
  isPremium = false,
  previewText = 'Preview only'
}) {
  // Dynamically switch styling based on whether the resource is Free or Premium
  const themeClasses = isPremium
    ? "bg-[#FDF2F4] dark:bg-[#34242B] hover:border-red-500/30"
    : "bg-[#EBF3F2] dark:bg-[#133A38] hover:border-brand-teal/30";

  const textHighlight = isPremium 
    ? "text-red-600 dark:text-red-400" 
    : "text-brand-teal dark:text-brand-lightTeal";

  return (
    <div className={`rounded-2xl p-6 flex flex-col border border-transparent cursor-pointer transition-colors ${themeClasses}`}>
      <div className="flex justify-between items-start mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{courseCode}</h2>
        <span className={`text-xs font-bold flex items-center gap-1 ${textHighlight}`}>
          {format} <ArrowUpRight className="w-3 h-3" />
        </span>
      </div>
      
      <div className="mt-auto">
        <p className={`text-[10px] font-bold uppercase tracking-widest mb-2 flex items-center gap-1 ${textHighlight}`}>
          {isPremium && <Lock className="w-3 h-3" />} {type} · {isPremium ? 'Premium' : 'Free'}
        </p>
        <h4 className="font-bold text-gray-900 dark:text-white mb-1">{title}</h4>
        <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
          {courseCode} · {level} · {format}
        </p>
        <p className="text-xs text-gray-500">
          {year} · {pages} {isPremium && `· ${previewText}`}
        </p>
      </div>
    </div>
  );
}