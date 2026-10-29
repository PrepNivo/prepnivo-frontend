// import { ArrowRight, BookOpen, FileText, PenTool, Bookmark } from 'lucide-react';
// import ResourceCard from '../components/ResourceCard';

// export default function Dashboard() {
//   return (
//     <div className="max-w-5xl mx-auto pb-12">
//       <p className="text-brand-teal font-bold text-[10px] uppercase tracking-widest mb-2">Monday, 28 October</p>
//       <div className="flex justify-between items-end mb-8">
//         <div>
//           <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Hey Adaeze, let's make progress.</h1>
//           <p className="text-gray-600 dark:text-gray-400 text-sm">Your next good study session is right here.</p>
//         </div>
//         <button className="flex items-center gap-2 border border-gray-300 dark:border-gray-700 text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
//           <Bookmark className="w-4 h-4" />
//           My study area
//         </button>
//       </div>
      
//       {/* Search Bar */}
//       <div className="relative mb-10">
//         <input 
//           type="text" 
//           placeholder="Search courses, topics or resources..." 
//           className="w-full bg-white dark:bg-[#111827] border border-gray-200 dark:border-gray-800 rounded-xl px-12 py-4 text-sm focus:outline-none focus:border-brand-teal transition-colors"
//         />
//         <svg className="w-5 h-5 absolute left-4 top-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
//         </svg>
//       </div>

//       {/* Hero Banner */}
//       <div className="bg-brand-teal rounded-2xl p-8 text-white mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
//         <div>
//           <p className="text-[10px] font-bold text-brand-lightTeal uppercase tracking-widest mb-4">A little progress goes a long way.</p>
//           <h2 className="text-3xl font-bold mb-1">Back to arrays,</h2>
//           <h2 className="text-3xl font-bold mb-4">on to the next idea.</h2>
//           <p className="text-sm text-teal-100 mb-6 font-medium">CSC 201 · Data Structures, made clear</p>
//           <button className="bg-white text-brand-dark px-5 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-gray-100 transition-colors">
//             <ArrowRight className="w-4 h-4" />
//             Continue reading
//           </button>
//         </div>
//         <div className="bg-black/20 rounded-xl p-5 min-w-[200px] border border-white/10 text-right">
//            <div className="flex justify-between items-end mb-4">
//              <p className="text-xs text-brand-lightTeal font-medium">Your last page</p>
//              <p className="text-xl font-bold">12 / 42</p>
//            </div>
//            <div className="w-full h-1.5 bg-black/40 rounded-full overflow-hidden mb-3">
//               <div className="w-[30%] h-full bg-brand-lightTeal rounded-full"></div>
//            </div>
//            <p className="text-[10px] text-teal-100/70 truncate text-left">Chapter 2 - Arrays & linked lists</p>
//         </div>
//       </div>

//       {/* Picked for your courses */}
//       <div className="flex justify-between items-center mb-6">
//         <h3 className="text-lg font-bold text-gray-900 dark:text-white">Picked for your courses</h3>
//         <a href="/dashboard/library" className="text-sm font-medium text-brand-teal dark:text-brand-lightTeal hover:underline flex items-center gap-1">
//           View library <ArrowRight className="w-3 h-3" />
//         </a>
//       </div>
      
//       {/* Clean, Map-based Resource Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
//         <ResourceCard 
//           courseCode="CSC 201"
//           title="Data Structures, made clear"
//           type="Lecture Notes"
//           level="200 level"
//           year="2024/2025"
//           pages="42 pages"
//         />
//         <ResourceCard 
//           courseCode="CSC 203"
//           title="Object-Oriented Programming"
//           type="Lecture Notes"
//           level="200 level"
//           year="2024/2025"
//           pages="36 pages"
//         />
//         <ResourceCard 
//           courseCode="CSC 201"
//           title="CSC 201 past questions & solutions"
//           type="Past Questions"
//           level="200 level"
//           year="2023/2024"
//           pages="28 pages"
//           isPremium={true}
//         />
//       </div>

//       {/* What are you working on? */}
//       <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">What are you working on?</h3>
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
//         {[
//           { icon: BookOpen, title: 'Lecture notes', desc: 'Build your understanding' },
//           { icon: FileText, title: 'Past questions', desc: 'Know the question style' },
//           { icon: PenTool, title: 'Practice problems', desc: 'Put concepts to work' },
//           { icon: Bookmark, title: 'Study guides', desc: 'Bring ideas together' }
//         ].map(btn => (
//           <button key={btn.title} className="bg-white dark:bg-[#111827] border border-gray-200 dark:border-gray-800 p-4 rounded-xl flex items-center gap-3 hover:border-brand-teal transition-colors text-left group">
//             <div className="text-gray-400 group-hover:text-brand-teal transition-colors">
//               <btn.icon className="w-5 h-5" />
//             </div>
//             <div>
//               <p className="text-sm font-bold text-gray-900 dark:text-white">{btn.title}</p>
//               <p className="text-[10px] text-gray-500">{btn.desc}</p>
//             </div>
//           </button>
//         ))}
//       </div>

//       {/* Bottom Promo Blocks */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//         <div className="bg-brand-teal/10 dark:bg-brand-teal/20 border border-brand-teal/20 rounded-2xl p-8">
//           <p className="text-[10px] font-bold text-brand-teal dark:text-brand-lightTeal uppercase tracking-widest mb-3">More room to learn</p>
//           <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Go beyond the Free collection.</h3>
//           <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 max-w-sm">Premium resources and downloads. Proposed at ₦1,200/month — not a live offer.</p>
//           <button className="bg-brand-teal text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-[#0f3d3a] transition-colors">
//             Explore Premium
//           </button>
//         </div>
        
//         <div className="bg-red-500/10 dark:bg-red-500/20 border border-red-500/20 rounded-2xl p-8">
//           <p className="text-[10px] font-bold text-red-600 dark:text-red-400 uppercase tracking-widest mb-3">Pass the understanding on</p>
//           <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Your notes could help someone.</h3>
//           <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 max-w-sm">Share materials you own or have permission to share. Every submission is reviewed.</p>
//           <button className="bg-transparent border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-white/50 dark:hover:bg-white/5 transition-colors">
//             Become a Contributor
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


import {
  ArrowRight,
  BookOpen,
  FileText,
  PenTool,
  Bookmark,
  Search,
  NotebookPen,
} from "lucide-react";

import { Link, useNavigate } from "react-router-dom";
import ResourceCard from "../components/ResourceCard";

export default function Dashboard() {
  const navigate = useNavigate();

  const resources = [
    {
      id: 1,
      courseCode: "CSC 201",
      title: "Data Structures, made clear",
      type: "Lecture Notes",
      level: "200 level",
      year: "2024/2025",
      pages: "42 pages",
    },
    {
      id: 2,
      courseCode: "CSC 203",
      title: "Object-Oriented Programming",
      type: "Lecture Notes",
      level: "200 level",
      year: "2024/2025",
      pages: "36 pages",
    },
    {
      id: 3,
      courseCode: "CSC 201",
      title: "CSC 201 past questions & solutions",
      type: "Past Questions",
      level: "200 level",
      year: "2023/2024",
      pages: "28 pages",
      isPremium: true,
    },
  ];

  const studyOptions = [
    {
      icon: BookOpen,
      title: "Lecture notes",
      desc: "Build your understanding",
      path: "/dashboard/library?type=lecture-notes",
    },
    {
      icon: FileText,
      title: "Past questions",
      desc: "Know the question style",
      path: "/dashboard/library?type=past-questions",
    },
    {
      icon: PenTool,
      title: "Practice problems",
      desc: "Put concepts to work",
      path: "/dashboard/library?type=practice-problems",
    },
    {
      icon: NotebookPen,
      title: "Study guides",
      desc: "Bring ideas together",
      path: "/dashboard/library?type=study-guides",
    },
  ];

  return (
    <div className="mx-auto max-w-[1250px] pb-6">

      {/* Welcome section */}
      <section className="mb-7">
        <p className="mb-3 text-[11px] font-bold uppercase tracking-wide text-[#206F7E]">
          Monday, 26 October
        </p>

        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-[28px] font-bold leading-tight tracking-tight text-[#202D40] md:text-[36px]">
              Hey Adaeze, let's make progress.
            </h1>

            <p className="mt-2 text-sm text-[#697F98]">
              Your next good study session is right here.
            </p>
          </div>

          <Link
            to="/dashboard/study-area"
            className="flex w-fit shrink-0 items-center gap-3 rounded-xl border border-[#DCE6E6] bg-white px-5 py-3 text-sm font-semibold text-[#202D40] transition hover:bg-[#E7F3F1]"
          >
            <Bookmark size={17} className="text-[#206F7E]" />
            My study area
          </Link>
        </div>
      </section>

      {/* Search */}
      <div className="relative mb-7">
        <Search
          size={21}
          className="absolute left-5 top-1/2 -translate-y-1/2 text-[#697F98]"
        />

        <input
          type="search"
          placeholder="Search courses, topics or resources..."
          onKeyDown={(event) => {
            if (event.key === "Enter" && event.currentTarget.value.trim()) {
              navigate(
                `/dashboard/library?search=${encodeURIComponent(
                  event.currentTarget.value.trim()
                )}`
              );
            }
          }}
          className="h-[55px] w-full rounded-xl border border-[#DCE6E6] bg-white pl-14 pr-5 text-sm text-[#202D40] outline-none transition placeholder:text-[#697F98] focus:border-[#206F7E] focus:ring-2 focus:ring-[#206F7E]/10"
        />
      </div>

      {/* Continue reading banner */}
      <section className="mb-8 flex flex-col justify-between gap-8 rounded-[28px] bg-[#206F7E] p-7 text-white md:flex-row md:items-center md:p-8">
        <div>
          <p className="mb-4 text-[10px] font-bold uppercase tracking-wide text-[#40D8C5]">
            A little progress goes a long way
          </p>

          <h2 className="text-[30px] font-bold leading-[1.12] tracking-tight md:text-[34px]">
            Back to arrays,
            <br />
            on to the next idea.
          </h2>

          <p className="mt-4 text-xs text-[#C8E3E7]">
            CSC 201 · Data Structures, made clear
          </p>

          <button
            onClick={() => navigate("/dashboard/library")}
            className="mt-4 flex items-center gap-3 rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#202D40] transition hover:bg-[#E7F3F1]"
          >
            <ArrowRight size={17} className="text-[#206F7E]" />
            Continue reading
          </button>
        </div>

        {/* Reading progress */}
        <div className="w-full rounded-[20px] bg-white/10 p-6 md:w-[295px] md:shrink-0">
          <div className="mb-5 flex items-center justify-between gap-4">
            <span className="text-xs text-[#D5EAED]">
              Your last page
            </span>

            <span className="text-sm font-bold">
              12 / 42
            </span>
          </div>

          <div
            className="h-[5px] overflow-hidden rounded-full bg-white/20"
            role="progressbar"
            aria-label="Reading progress"
            aria-valuenow={12}
            aria-valuemin={0}
            aria-valuemax={42}
          >
            <div
              className="h-full rounded-full bg-[#40D8C5]"
              style={{ width: `${(12 / 42) * 100}%` }}
            />
          </div>

          <p className="mt-5 text-[11px] text-[#D5EAED]">
            Chapter 2 · Arrays & linked lists
          </p>
        </div>
      </section>

      {/* Picked for your courses */}
      <section className="mb-8">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h2 className="text-xl font-bold text-[#202D40]">
            Picked for your courses
          </h2>

          <Link
            to="/dashboard/library"
            className="flex shrink-0 items-center gap-1 text-xs font-bold text-[#206F7E] hover:underline"
          >
            View library
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {resources.map((resource) => (
            <ResourceCard
              key={resource.id}
              {...resource}
              onClick={() =>
                navigate(`/dashboard/library/${resource.id}`)
              }
            />
          ))}
        </div>
      </section>

      {/* Study options */}
      <section className="mb-7">
        <h2 className="mb-6 text-xl font-bold text-[#202D40]">
          What are you working on?
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {studyOptions.map(({ icon: Icon, title, desc, path }) => (
            <Link
              key={title}
              to={path}
              className="group flex min-h-[74px] items-center gap-4 rounded-[17px] border border-[#DCE6E6] bg-white p-4 transition hover:border-[#206F7E]"
            >
              <Icon
                size={21}
                className="shrink-0 text-[#206F7E]"
              />

              <div>
                <h3 className="text-xs font-bold text-[#202D40]">
                  {title}
                </h3>

                <p className="mt-1 text-[10px] text-[#697F98]">
                  {desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Promotional cards */}
      <section className="grid gap-5 md:grid-cols-2">

        {/* Premium */}
        <article className="rounded-[22px] bg-[#E7F3F1] p-7">
          <p className="mb-5 text-[10px] font-bold uppercase tracking-wide text-[#206F7E]">
            More room to learn
          </p>

          <h3 className="text-xl font-bold text-[#202D40]">
            Go beyond the Free collection.
          </h3>

          <p className="mt-4 text-sm leading-relaxed text-[#697F98]">
            Premium resources and downloads. Proposed at
            ₦1,200/month — not a live offer.
          </p>

          <Link
            to="/dashboard/premium"
            className="mt-4 inline-flex rounded-xl bg-[#206F7E] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#185966]"
          >
            Explore Premium
          </Link>
        </article>

        {/* Contributor */}
        <article className="rounded-[22px] border border-[#DCE6E6] bg-white p-7">
          <span className="inline-flex rounded-full bg-[#FFF0EB] px-3 py-1 text-[10px] font-bold uppercase text-[#B4443B]">
            Pass the understanding on
          </span>

          <h3 className="mt-4 text-xl font-bold text-[#202D40]">
            Your notes could help someone.
          </h3>

          <p className="mt-4 text-sm leading-relaxed text-[#697F98]">
            Share materials you own or have permission to share.
            Every submission is reviewed.
          </p>

          <Link
            to="/dashboard/contribute"
            className="mt-4 inline-flex rounded-xl border border-[#DCE6E6] bg-white px-5 py-3 text-sm font-bold text-[#202D40] transition hover:bg-[#F1F4F3]"
          >
            Become a Contributor
          </Link>
        </article>
      </section>
    </div>
  );
}
