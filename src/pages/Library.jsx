import { SlidersHorizontal, Search, Lock } from 'lucide-react';
import ResourceCard from '../components/ResourceCard';

export default function Library() {
  // Mock data based on the UI design for the 6 resource cards
  const resources = [
    { id: 1, course: 'CSC 201', title: 'Data Structures, made clear', type: 'Lecture Notes', level: '200 level', year: '2024/2025', pages: '42 pages', isPremium: false },
    { id: 2, course: 'CSC 201', title: 'CSC 201 past questions & solutions', type: 'Past Questions', level: '200 level', year: '2023/2024', pages: '28 pages', isPremium: true, previewText: 'Preview only' },
    { id: 3, course: 'CSC 203', title: 'Object-Oriented Programming', type: 'Lecture Notes', level: '200 level', year: '2024/2025', pages: '36 pages', isPremium: false },
    { id: 4, course: 'MAT 201', title: 'Linear Algebra practice set', type: 'Practice Problems', level: '200 level', year: '2024/2025', pages: '18 pages', isPremium: false },
    { id: 5, course: 'CSC 205', title: 'Digital Systems revision guide', type: 'Study Guides', level: '200 level', year: '2024/2025', pages: '24 pages', isPremium: true, previewText: 'Preview only' },
    { id: 6, course: 'STA 201', title: 'Probability & Statistics essentials', type: 'Lecture Notes', level: '200 level', year: '2023/2024', pages: '32 pages', isPremium: false },
  ];

  const filters = [
    { label: 'Institution', value: 'University of Lagos' },
    { label: 'Faculty', value: 'Science' },
    { label: 'Department', value: 'Computer Science' },
    { label: 'Academic level', value: '200 level' },
    { label: 'Course', value: 'All courses' },
    { label: 'Resource type', value: 'All types' },
    { label: 'Academic session', value: 'All sessions' },
    { label: 'Access tier', value: 'Free & Premium' },
  ];

  return (
    <div className="max-w-6xl mx-auto pb-12">
      <p className="text-brand-teal font-bold text-[10px] uppercase tracking-widest mb-2">The right material, within reach</p>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Your course. Your library.</h1>
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-8">Find the notes, past questions and practice that move you forward.</p>
      
      {/* Search Bar */}
      <div className="relative mb-10">
        <input 
          type="text" 
          placeholder="Search by resource title, course code or topic..." 
          className="w-full bg-white dark:bg-[#111827] border border-gray-200 dark:border-gray-800 rounded-xl px-12 py-4 text-sm focus:outline-none focus:border-brand-teal transition-colors"
        />
        <Search className="w-5 h-5 absolute left-4 top-4 text-gray-400" />
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Left Sidebar - Filters */}
        <div className="w-full md:w-64 shrink-0">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-brand-teal" /> Filters
            </h3>
            <button className="text-xs text-brand-teal hover:underline font-medium">Reset all</button>
          </div>
          
          <div className="bg-white dark:bg-[#111827] border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden flex flex-col mb-4">
            {filters.map((filter, index) => (
              <div key={filter.label} className={`p-4 ${index !== filters.length - 1 ? 'border-b border-gray-200 dark:border-gray-800' : ''} cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors`}>
                <p className="text-[10px] text-gray-500 mb-1">{filter.label}</p>
                <p className="text-sm font-medium text-gray-900 dark:text-gray-300">{filter.value}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 px-2">Filters follow your profile. Explore another academic home any time.</p>
        </div>

        {/* Right Content - Resource Grid */}
        <div className="flex-1">
          
          {/* Active Tags & Sort */}
          <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
            <div>
              <p className="text-sm font-bold text-gray-900 dark:text-white mb-3">6 resources for your studies</p>
              <div className="flex flex-wrap gap-2 text-xs font-medium">
                <span className="bg-brand-teal/10 text-brand-teal dark:text-brand-lightTeal px-3 py-1.5 rounded-lg flex items-center gap-1">UNILAG <span className="opacity-50 hover:opacity-100 cursor-pointer">×</span></span>
                <span className="bg-brand-teal/10 text-brand-teal dark:text-brand-lightTeal px-3 py-1.5 rounded-lg flex items-center gap-1">200 level <span className="opacity-50 hover:opacity-100 cursor-pointer">×</span></span>
                <span className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-3 py-1.5 rounded-lg">Science / Computer Science</span>
              </div>
            </div>
            <button className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-1">
              Sort: Recently added ↓
            </button>
          </div>

          {/* Grid of Resources */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
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
          <div className="flex justify-center items-center gap-4 mb-10">
            <button className="px-4 py-2 text-sm font-medium text-gray-500 bg-white dark:bg-[#111827] border border-gray-200 dark:border-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">Previous</button>
            <span className="text-xs font-bold bg-brand-teal/10 text-brand-teal dark:text-brand-lightTeal px-3 py-1.5 rounded">1 / 1</span>
            <button className="px-4 py-2 text-sm font-medium text-gray-500 bg-white dark:bg-[#111827] border border-gray-200 dark:border-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">Next</button>
          </div>

          {/* Info Banner */}
          <div className="bg-[#133A38]/30 dark:bg-brand-teal/10 border border-brand-teal/20 rounded-xl p-4 flex items-start gap-3">
            <Lock className="w-4 h-4 text-brand-teal dark:text-brand-lightTeal shrink-0 mt-0.5" />
            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
              Free resources include reading and download access. Premium resources include a 3-page preview; a Premium plan is required for full reading and downloads.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}