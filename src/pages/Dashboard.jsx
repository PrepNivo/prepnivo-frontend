import { ArrowRight, BookOpen, FileText, PenTool, Bookmark } from 'lucide-react';
import ResourceCard from '../components/ResourceCard';

export default function Dashboard() {
  return (
    <div className="max-w-5xl mx-auto pb-12">
      <p className="text-brand-teal font-bold text-[10px] uppercase tracking-widest mb-2">Monday, 28 October</p>
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Hey Adaeze, let's make progress.</h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm">Your next good study session is right here.</p>
        </div>
        <button className="flex items-center gap-2 border border-gray-300 dark:border-gray-700 text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
          <Bookmark className="w-4 h-4" />
          My study area
        </button>
      </div>
      
      {/* Search Bar */}
      <div className="relative mb-10">
        <input 
          type="text" 
          placeholder="Search courses, topics or resources..." 
          className="w-full bg-white dark:bg-[#111827] border border-gray-200 dark:border-gray-800 rounded-xl px-12 py-4 text-sm focus:outline-none focus:border-brand-teal transition-colors"
        />
        <svg className="w-5 h-5 absolute left-4 top-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </div>

      {/* Hero Banner */}
      <div className="bg-brand-teal rounded-2xl p-8 text-white mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <p className="text-[10px] font-bold text-brand-lightTeal uppercase tracking-widest mb-4">A little progress goes a long way.</p>
          <h2 className="text-3xl font-bold mb-1">Back to arrays,</h2>
          <h2 className="text-3xl font-bold mb-4">on to the next idea.</h2>
          <p className="text-sm text-teal-100 mb-6 font-medium">CSC 201 · Data Structures, made clear</p>
          <button className="bg-white text-brand-dark px-5 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-gray-100 transition-colors">
            <ArrowRight className="w-4 h-4" />
            Continue reading
          </button>
        </div>
        <div className="bg-black/20 rounded-xl p-5 min-w-[200px] border border-white/10 text-right">
           <div className="flex justify-between items-end mb-4">
             <p className="text-xs text-brand-lightTeal font-medium">Your last page</p>
             <p className="text-xl font-bold">12 / 42</p>
           </div>
           <div className="w-full h-1.5 bg-black/40 rounded-full overflow-hidden mb-3">
              <div className="w-[30%] h-full bg-brand-lightTeal rounded-full"></div>
           </div>
           <p className="text-[10px] text-teal-100/70 truncate text-left">Chapter 2 - Arrays & linked lists</p>
        </div>
      </div>

      {/* Picked for your courses */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">Picked for your courses</h3>
        <a href="/dashboard/library" className="text-sm font-medium text-brand-teal dark:text-brand-lightTeal hover:underline flex items-center gap-1">
          View library <ArrowRight className="w-3 h-3" />
        </a>
      </div>
      
      {/* Clean, Map-based Resource Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
        <ResourceCard 
          courseCode="CSC 201"
          title="Data Structures, made clear"
          type="Lecture Notes"
          level="200 level"
          year="2024/2025"
          pages="42 pages"
        />
        <ResourceCard 
          courseCode="CSC 203"
          title="Object-Oriented Programming"
          type="Lecture Notes"
          level="200 level"
          year="2024/2025"
          pages="36 pages"
        />
        <ResourceCard 
          courseCode="CSC 201"
          title="CSC 201 past questions & solutions"
          type="Past Questions"
          level="200 level"
          year="2023/2024"
          pages="28 pages"
          isPremium={true}
        />
      </div>

      {/* What are you working on? */}
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">What are you working on?</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {[
          { icon: BookOpen, title: 'Lecture notes', desc: 'Build your understanding' },
          { icon: FileText, title: 'Past questions', desc: 'Know the question style' },
          { icon: PenTool, title: 'Practice problems', desc: 'Put concepts to work' },
          { icon: Bookmark, title: 'Study guides', desc: 'Bring ideas together' }
        ].map(btn => (
          <button key={btn.title} className="bg-white dark:bg-[#111827] border border-gray-200 dark:border-gray-800 p-4 rounded-xl flex items-center gap-3 hover:border-brand-teal transition-colors text-left group">
            <div className="text-gray-400 group-hover:text-brand-teal transition-colors">
              <btn.icon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900 dark:text-white">{btn.title}</p>
              <p className="text-[10px] text-gray-500">{btn.desc}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Bottom Promo Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-brand-teal/10 dark:bg-brand-teal/20 border border-brand-teal/20 rounded-2xl p-8">
          <p className="text-[10px] font-bold text-brand-teal dark:text-brand-lightTeal uppercase tracking-widest mb-3">More room to learn</p>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Go beyond the Free collection.</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 max-w-sm">Premium resources and downloads. Proposed at ₦1,200/month — not a live offer.</p>
          <button className="bg-brand-teal text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-[#0f3d3a] transition-colors">
            Explore Premium
          </button>
        </div>
        
        <div className="bg-red-500/10 dark:bg-red-500/20 border border-red-500/20 rounded-2xl p-8">
          <p className="text-[10px] font-bold text-red-600 dark:text-red-400 uppercase tracking-widest mb-3">Pass the understanding on</p>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Your notes could help someone.</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 max-w-sm">Share materials you own or have permission to share. Every submission is reviewed.</p>
          <button className="bg-transparent border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-white/50 dark:hover:bg-white/5 transition-colors">
            Become a Contributor
          </button>
        </div>
      </div>
    </div>
  );
}