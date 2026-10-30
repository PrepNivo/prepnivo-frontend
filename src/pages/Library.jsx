import { SlidersHorizontal, Search, Lock, ChevronDown, ArrowDown} from "lucide-react";
import ResourceCard from "../components/ResourceCard";

export default function Library() {
  // Existing mock data
  const resources = [
    {
      id: 1,
      course: "CSC 201",
      title: "Data Structures, made clear",
      type: "Lecture Notes",
      level: "200 level",
      year: "2024/2025",
      pages: "42 pages",
      isPremium: false,
    },
    {
      id: 2,
      course: "CSC 201",
      title: "CSC 201 past questions & solutions",
      type: "Past Questions",
      level: "200 level",
      year: "2023/2024",
      pages: "28 pages",
      isPremium: true,
      previewText: "Preview only",
    },
    {
      id: 3,
      course: "CSC 203",
      title: "Object-Oriented Programming",
      type: "Lecture Notes",
      level: "200 level",
      year: "2024/2025",
      pages: "36 pages",
      isPremium: false,
    },
    {
      id: 4,
      course: "MAT 201",
      title: "Linear Algebra practice set",
      type: "Practice Problems",
      level: "200 level",
      year: "2024/2025",
      pages: "18 pages",
      isPremium: false,
    },
    {
      id: 5,
      course: "CSC 205",
      title: "Digital Systems revision guide",
      type: "Study Guides",
      level: "200 level",
      year: "2024/2025",
      pages: "24 pages",
      isPremium: true,
      previewText: "Preview only",
    },
    {
      id: 6,
      course: "STA 201",
      title: "Probability & Statistics essentials",
      type: "Lecture Notes",
      level: "200 level",
      year: "2023/2024",
      pages: "32 pages",
      isPremium: false,
    },
  ];

  const filters = [
    { label: "Institution", value: "University of Lagos" },
    { label: "Faculty", value: "Science" },
    { label: "Department", value: "Computer Science" },
    { label: "Academic level", value: "200 level" },
    { label: "Course", value: "All courses" },
    { label: "Resource type", value: "All types" },
    { label: "Academic session", value: "All sessions" },
    { label: "Access tier", value: "Free & Premium" },
  ];

  return (
    <div className="mx-auto max-w-[1350px] pb-12">

      {/* Page heading */}
      <section className="mb-8">
        <p className="mb-3 text-[11px] font-bold uppercase tracking-wide text-[#206F7E]">
          The right material, within reach
        </p>

        <h1 className="mb-2 text-[30px] font-bold leading-tight tracking-tight text-[#202D40] md:text-[36px]">
          Your course. Your library.
        </h1>

        <p className="text-sm text-[#697F98]">
          Find the notes, past questions and practice that move you forward.
        </p>
      </section>

      {/* Search Bar */}
      <div className="relative mb-7">
        <Search
          size={21}
          className="absolute left-5 top-1/2 -translate-y-1/2 text-[#697F98]"
        />

        <input
          type="search"
          placeholder="Search by resource title, course code or topic..."
          className="h-[55px] w-full rounded-xl border border-[#DCE6E6] bg-white pl-14 pr-5 text-sm text-[#202D40] outline-none transition placeholder:text-[#697F98] focus:border-[#206F7E] focus:ring-2 focus:ring-[#206F7E]/10"
        />
      </div>

      {/* Main library layout */}
      <div className="flex flex-col items-start gap-6 lg:flex-row">

        {/* Filters sidebar */}
        <aside className="w-full shrink-0 rounded-[22px] border border-[#DCE6E6] bg-white p-5 lg:w-[255px]">

          <div className="mb-5 flex items-center justify-between gap-3">
            <h2 className="flex items-center gap-2 text-sm font-bold text-[#202D40]">
              <SlidersHorizontal
                size={18}
                className="text-[#206F7E]"
              />
              Filters
            </h2>

            <button
              type="button"
              className="text-xs font-medium text-[#206F7E] hover:underline"
            >
              Reset all
            </button>
          </div>

          {/* Individual filter boxes */}
          <div className="flex flex-col gap-3">
            {filters.map((filter) => (
              <div
                key={filter.label}
                className="rounded-xl border border-[#DCE6E6] bg-white px-4 py-3.5"
              >
                <div className="mb-1 flex items-center gap-1">
                  <span className="text-[10px] font-semibold text-[#697F98]">
                    {filter.label}
                  </span>

                  <ChevronDown
                    size={11}
                    className="text-[#697F98]"
                  />
                </div>

                <p className="text-[13px] font-medium text-[#202D40]">
                  {filter.value}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-5 text-[11px] leading-relaxed text-[#697F98]">
            Filters follow your profile. Explore another academic home any
            time.
          </p>
        </aside>

        {/* Resource content */}
        <section className="min-w-0 flex-1">

          {/* Resource count and sort */}
          <div className="mb-5 flex flex-wrap items-start justify-between gap-4">

            <div>
              <h2 className="mb-4 text-sm font-bold text-[#202D40]">
                {resources.length} resources for your studies
              </h2>

              {/* Active filter tags */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-[#E7F3F1] px-3 py-1.5 text-[10px] font-bold text-[#206F7E]">
                  UNILAG ×
                </span>

                <span className="rounded-full bg-[#E7F3F1] px-3 py-1.5 text-[10px] font-bold text-[#206F7E]">
                  200 level ×
                </span>

                <span className="text-[11px] text-[#697F98]">
                  Science / Computer Science
                </span>
              </div>
            </div>

            <button
              type="button"
              className="flex items-center gap-1 text-xs text-[#697F98] transition hover:text-[#206F7E]"
            >
              Sort: Recently added
              <ArrowDown size={13} />
            </button>
          </div>

          {/* Resource grid */}
          <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {resources.map((res) => (
              <ResourceCard
                key={res.id}
                courseCode={res.course}
                title={res.title}
                type={res.type}
                level={res.level}
                year={res.year}
                pages={res.pages}
                isPremium={res.isPremium}
                previewText={res.previewText}
              />
            ))}
          </div>

          {/* Pagination */}
          <div className="mb-6 flex items-center justify-center gap-3">
            <button
              type="button"
              disabled
              className="rounded-xl border border-[#DCE6E6] bg-white px-5 py-3 text-sm font-semibold text-[#202D40] disabled:cursor-not-allowed disabled:opacity-60"
            >
              Previous
            </button>

            <span className="rounded-full bg-[#E7F3F1] px-3 py-1.5 text-xs font-bold text-[#206F7E]">
              1 / 1
            </span>

            <button
              type="button"
              disabled
              className="rounded-xl border border-[#DCE6E6] bg-white px-5 py-3 text-sm font-semibold text-[#202D40] disabled:cursor-not-allowed disabled:opacity-60"
            >
              Next
            </button>
          </div>

          {/* Access information banner */}
          <div className="flex items-start gap-3 rounded-[15px] bg-[#E7F3F1] p-5">
            <Lock
              size={18}
              className="mt-0.5 shrink-0 text-[#206F7E]"
            />

            <p className="text-xs leading-relaxed text-[#697F98]">
              Free resources include reading and download access. Premium
              resources include a 3-page preview; a Premium plan is required
              for full reading and downloads.
            </p>
          </div>
        </section>
      </div>
    </div>  
  );
}



