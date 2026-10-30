import { ArrowUpRight } from 'lucide-react';

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
  return (
    <div className=" group flex flex-col overflow-hidden rounded-[20px] border border-[#DCE7E5] 
    bg-white cursor-pointer transition-all duration-200 hover:shadow-md">
      {/* Colored course header */}
      <div className={` flex items-center justify-between min-h-[108px] px-4 py-6 sm:px-[17px]
        ${isPremium ? 'bg-[#FFF0EB]' : 'bg-[#E8F3F1]'}
      `}>
        <h2 className=" text-[28px] font-bold tracking-tight text-[#202C3D]">
          {courseCode}
        </h2>

        <span className=" flex items-center gap-1 text-[10px] font-bold text-[#16788A]">
          {format}
          <ArrowUpRight size={13} strokeWidth={2.5} />
        </span>
      </div>

      {/* Resource information */}
      <div className=" flex flex-1 flex-col min-h-[117px] p- ">

        <p className=" mb-2 flex items-center gap-1 text-[9px] font-bold uppercase tracking-wide text-[#16788A]">
          {type} · {isPremium ? 'Premium' : 'Free'}
        </p>

        <h4 className=" mb-1 text-[14px] font-bold leading-5 text-[#202C3D]">
          {title}
        </h4>

        <p className=" mb-1 text-[11px] text-[#71839F]">
          {courseCode} · {level} · {format}
        </p>

        <p className=" text-[11px] text-[#71839F]">
          {year} · {pages} pages
          {isPremium && ` · ${previewText}`}
        </p>

      </div>
    </div>
  );
}
