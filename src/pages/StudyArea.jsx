
import { useState } from "react";
import {
  Search,
  Plus,
  ArrowUpRight,
  ArrowRight,
  Bookmark,
  X,
} from "lucide-react";

const initialCollections = [
  {
    id: 1,
    name: "Exam prep",
    details: "3 materials · CSC 201 · CSC 203",
  },
  {
    id: 2,
    name: "Weekly reading",
    details: "2 materials · STA 201 · MAT 201",
  },
  {
    id: 3,
    name: "Tricky concepts",
    details: "1 material · CSC 205 · Digital Systems",
  },
];

const initialResources = [
  {
    id: 1,
    title: "Data Structures, made clear",
    course: "CSC 201",
    level: "200 level",
    pages: 42,
    collection: "Exam prep",
    isPremium: false,
  },
  {
    id: 2,
    title: "CSC 201 past questions & solutions",
    course: "CSC 201",
    level: "200 level",
    pages: 28,
    collection: "Exam prep",
    isPremium: true,
  },
  {
    id: 3,
    title: "Object-Oriented Programming",
    course: "CSC 203",
    level: "200 level",
    pages: 36,
    collection: "Exam prep",
    isPremium: false,
  },
  {
    id: 4,
    title: "Linear Algebra practice set",
    course: "MAT 201",
    level: "200 level",
    pages: 18,
    collection: "Weekly reading",
    isPremium: false,
  },
];

export default function StudyArea() {
  const [search, setSearch] = useState("");
  const [collections, setCollections] = useState(initialCollections);
  const [resources, setResources] = useState(initialResources);

  const [activeTab, setActiveTab] = useState("All saved");
  const [showModal, setShowModal] = useState(false);
  const [collectionName, setCollectionName] = useState("");

  const filteredResources = resources.filter((resource) => {
    const matchesSearch =
      resource.title.toLowerCase().includes(search.toLowerCase()) ||
      resource.course.toLowerCase().includes(search.toLowerCase());

    const matchesTab =
      activeTab === "All saved" ||
      activeTab === "Bookmarks" ||
      activeTab === "Recently opened";

    return matchesSearch && matchesTab;
  });

  const createCollection = (e) => {
    e.preventDefault();

    if (!collectionName.trim()) return;

    const newCollection = {
      id: Date.now(),
      name: collectionName.trim(),
      details: "0 materials",
    };

    setCollections([...collections, newCollection]);
    setCollectionName("");
    setShowModal(false);
  };

  const removeBookmark = (id) => {
    setResources(resources.filter((resource) => resource.id !== id));
  };

  return (
    <div className="mx-auto max-w-[1350px] pb-10">

      {/* Page heading */}
      <section className="mb-7">
        <p className="mb-3 text-[11px] font-bold uppercase tracking-wide text-[#206F7E]">
          A home for your next good idea
        </p>

        <h1 className="text-[29px] font-bold leading-tight tracking-tight text-[#202D40] md:text-[36px]">
          Your own little corner of focus.
        </h1>

        <p className="mt-2 text-sm text-[#697F98]">
          Bookmarks, saved materials and collections. All in your rhythm.
        </p>
      </section>

      {/* Search and New Collection */}
      <div className="mb-7 flex flex-col gap-3 sm:flex-row">

        <div className="relative flex-1">
          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#697F98]"
          />

          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Find something you saved..."
            className="h-[52px] w-full rounded-xl border border-[#DCE6E6] bg-white pl-12 pr-4 text-sm text-[#202D40] outline-none placeholder:text-[#697F98] focus:border-[#206F7E]"
          />
        </div>

        <button
          type="button"
          onClick={() => setShowModal(true)}
          className="flex h-[52px] shrink-0 items-center justify-center gap-2 rounded-xl bg-[#206F7E] px-5 text-sm font-bold text-white transition hover:bg-[#185966]"
        >
          <Plus size={18} />
          New collection
        </button>
      </div>

      {/* Your Collections */}
      <section className="mb-7">

        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-bold text-[#202D40]">
            Your collections
          </h2>

          <button className="flex items-center gap-1 text-xs font-bold text-[#206F7E] hover:underline">
            Manage <ArrowRight size={13} />
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {collections.map((collection) => (
            <button
              type="button"
              key={collection.id}
              className="flex min-h-[190px] flex-col items-start rounded-[20px] bg-[#E7F3F1] p-6 text-left transition hover:-translate-y-1 hover:shadow-sm"
            >
              <ArrowUpRight
                size={26}
                strokeWidth={1.8}
                className="mb-auto text-[#206F7E]"
              />

              <h3 className="mt-5 text-[22px] font-bold tracking-tight text-[#202D40]">
                {collection.name}
              </h3>

              <p className="mt-1 text-xs text-[#697F98]">
                {collection.details}
              </p>

              <span className="mt-2 flex items-center gap-1 text-[11px] font-bold text-[#206F7E]">
                Open collection
                <ArrowRight size={12} />
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Continue Reading */}
      <section className="mb-7 flex flex-col justify-between gap-5 rounded-[20px] border border-[#DCE6E6] bg-white p-6 sm:flex-row sm:items-center">

        <div>
          <p className="mb-4 text-[10px] font-bold uppercase tracking-wide text-[#206F7E]">
            Pick up where you left off
          </p>

          <h2 className="text-lg font-bold text-[#202D40]">
            Data Structures, made clear
          </h2>

          <p className="mt-2 text-xs text-[#697F98]">
            Page 12 of 42 · CSC 201 · Exam prep
          </p>
        </div>

        <button className="flex shrink-0 items-center justify-center gap-3 rounded-xl bg-[#206F7E] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#185966]">
          <ArrowRight size={17} />
          Keep reading
        </button>
      </section>

      {/* Saved Resource Tabs */}
      <div className="mb-7 flex flex-wrap items-center gap-3 text-xs font-bold text-[#206F7E]">

        {[
          { name: "All saved", count: 6 },
          { name: "Bookmarks", count: 4 },
          { name: "Recently opened" },
        ].map((tab, index) => (
          <div key={tab.name} className="flex items-center gap-3">
            {index > 0 && (
              <span className="text-[#697F98]">/</span>
            )}

            <button
              type="button"
              onClick={() => setActiveTab(tab.name)}
              className={`transition ${
                activeTab === tab.name
                  ? "text-[#206F7E]"
                  : "text-[#206F7E]/75 hover:text-[#206F7E]"
              }`}
            >
              {tab.name}
              {tab.count && ` · ${tab.count}`}
            </button>
          </div>
        ))}
      </div>

      {/* Recently Saved */}
      <section>

        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-[#202D40]">
            {activeTab === "All saved"
              ? "Recently saved"
              : activeTab}
          </h2>

          <button className="flex items-center gap-1 text-xs font-bold text-[#206F7E] hover:underline">
            View all 6
            <ArrowRight size={13} />
          </button>
        </div>

        <div className="flex flex-col gap-3">
          {filteredResources.map((resource) => (
            <article
              key={resource.id}
              className="flex min-h-[112px] items-start justify-between gap-4 rounded-[17px] border border-[#DCE6E6] bg-white p-5"
            >
              <div>
                <h3 className="text-sm font-bold text-[#202D40]">
                  {resource.title}
                </h3>

                <p className="mt-1 text-[11px] text-[#697F98]">
                  {resource.course} · {resource.level} · PDF ·{" "}
                  {resource.pages} pages
                </p>

                <p className="mt-2 text-[11px] text-[#697F98]">
                  {resource.collection} ·{" "}
                  <span className="font-semibold text-[#206F7E]">
                    {resource.isPremium
                      ? "Premium · Preview only"
                      : "Free · Read & download"}
                  </span>
                </p>
              </div>

              <button
                type="button"
                onClick={() => removeBookmark(resource.id)}
                title="Remove from saved materials"
                aria-label={`Remove ${resource.title} from saved materials`}
                className="shrink-0 text-[#206F7E] transition hover:opacity-60"
              >
                <Bookmark size={19} fill="#206F7E" />
              </button>
            </article>
          ))}

          {filteredResources.length === 0 && (
            <div className="rounded-xl border border-[#DCE6E6] bg-white p-8 text-center text-sm text-[#697F98]">
              No saved materials found.
            </div>
          )}
        </div>
      </section>

      {/* Bottom note */}
      <p className="mt-7 text-[11px] leading-relaxed text-[#697F98]">
        Saving a Premium resource keeps it easy to find. Your Free account
        still has a 3-page preview; full access requires Premium.
      </p>

      {/* Create Collection Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="collection-dialog-title"
            className="w-full max-w-[420px] rounded-2xl bg-white p-6 shadow-xl"
          >
            <div className="mb-5 flex items-center justify-between">
              <h2
                id="collection-dialog-title"
                className="text-lg font-bold text-[#202D40]"
              >
                New collection
              </h2>

              <button
                type="button"
                onClick={() => setShowModal(false)}
                aria-label="Close dialog"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={createCollection}>
              <label
                htmlFor="collection-name"
                className="mb-2 block text-xs font-semibold text-[#202D40]"
              >
                Collection name
              </label>

              <input
                id="collection-name"
                autoFocus
                value={collectionName}
                onChange={(e) => setCollectionName(e.target.value)}
                placeholder="e.g. Final exam revision"
                maxLength={60}
                className="w-full rounded-xl border border-[#DCE6E6] px-4 py-3 text-sm text-[#202D40] outline-none focus:border-[#206F7E]"
              />

              <div className="mt-6 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="rounded-lg border border-[#DCE6E6] px-4 py-2.5 text-xs font-semibold text-[#202D40]"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={!collectionName.trim()}
                  className="rounded-lg bg-[#206F7E] px-4 py-2.5 text-xs font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Create collection
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
