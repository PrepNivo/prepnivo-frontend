
import { useRef, useState } from "react";
import {
  UploadCloud,
  FileCheck2,
  X,
  ArrowRight,
} from "lucide-react";

const initialForm = {
  title: "Introduction to Algorithms — CSC 201",
  description:
    "Step-by-step notes on algorithm analysis, searching and sorting, with worked examples.",
  institution: "University of Lagos",
  faculty: "Science",
  department: "Computer Science",
  level: "200 level",
  course: "CSC 201 · Data Structures",
  type: "Lecture notes",
  session: "2024/2025",
  language: "English",
  author: "Adaeze Okafor · Original class notes",
};

const fields = [
  {
    name: "institution",
    label: "Institution",
    options: ["University of Lagos", "University of Ibadan"],
  },
  {
    name: "faculty",
    label: "Faculty",
    options: ["Science", "Engineering", "Arts", "Education"],
  },
  {
    name: "department",
    label: "Department",
    options: ["Computer Science", "Mathematics", "Statistics"],
  },
  {
    name: "level",
    label: "Academic level",
    options: ["100 level", "200 level", "300 level", "400 level"],
  },
  {
    name: "course",
    label: "Course",
    options: [
      "CSC 201 · Data Structures",
      "CSC 203 · Object-Oriented Programming",
      "CSC 205 · Digital Systems",
      "MAT 201 · Linear Algebra",
    ],
  },
  {
    name: "type",
    label: "Resource type",
    options: [
      "Lecture notes",
      "Past questions",
      "Practice problems",
      "Study guides",
    ],
  },
  {
    name: "session",
    label: "Academic session",
    options: ["2024/2025", "2023/2024", "2022/2023"],
  },
  {
    name: "language",
    label: "Language",
    options: ["English", "French", "Other"],
  },
];

function FormField({
  label,
  value,
  onChange,
  options,
  required = true,
}) {
  const id = label.toLowerCase().replaceAll(" ", "-");

  return (
    <div className="rounded-xl border border-[#DCE6E6] bg-white px-3 py-2.5 focus-within:border-[#206F7E]">
      <label
        htmlFor={id}
        className="mb-1 block text-[10px] font-semibold text-[#697F98]"
      >
        {label} {required && "*"}
        {options && <span className="ml-1">⌄</span>}
      </label>

      {options ? (
        <select
          id={id}
          value={value}
          onChange={onChange}
          required={required}
          className="w-full appearance-none bg-transparent text-[13px] text-[#202D40] outline-none"
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          type="text"
          value={value}
          onChange={onChange}
          required={required}
          className="w-full bg-transparent text-[13px] text-[#202D40] outline-none"
        />
      )}
    </div>
  );
}

export default function Contributor() {
  const fileInputRef = useRef(null);

  const [file, setFile] = useState(null);
  const [form, setForm] = useState(initialForm);
  const [dragging, setDragging] = useState(false);

  const [permissionConfirmed, setPermissionConfirmed] = useState(false);
  const [reviewConfirmed, setReviewConfirmed] = useState(false);
  const [message, setMessage] = useState("");

  const MAX_FILE_SIZE = 20 * 1024 * 1024;

  const updateField = (name, value) => {
    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleFile = (selectedFile) => {
    if (!selectedFile) return;

    if (
      selectedFile.type !== "application/pdf" &&
      !selectedFile.name.toLowerCase().endsWith(".pdf")
    ) {
      setMessage("Please upload a PDF file.");
      return;
    }

    if (selectedFile.size > MAX_FILE_SIZE) {
      setMessage("Your PDF must be 20 MB or smaller.");
      return;
    }

    setFile(selectedFile);
    setMessage("");
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDragging(false);

    handleFile(event.dataTransfer.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!file) {
      setMessage("Please upload your resource first.");
      return;
    }

    if (!permissionConfirmed || !reviewConfirmed) {
      setMessage("Please confirm both statements before submitting.");
      return;
    }

    // Connect your submission API here.
    // Example: send FormData containing the PDF and form fields.

    setMessage(
      "Your submission is ready. Connect your backend to send it for review."
    );
  };

  const handleSaveDraft = () => {
    // Save text fields locally until backend draft storage is implemented.
    localStorage.setItem(
      "prepnivo-contributor-draft",
      JSON.stringify(form)
    );

    setMessage(
      "Your text details have been saved locally. The PDF must be selected again when you return."
    );
  };

  return (
    <div className="mx-auto max-w-[1300px] pb-10">

      {/* Page heading */}
      <section className="mb-7">
        <p className="mb-3 text-[11px] font-bold uppercase tracking-wide text-[#206F7E]">
          Pass the understanding on
        </p>

        <h1 className="text-[30px] font-bold leading-tight tracking-tight text-[#202D40] md:text-[36px]">
          Your notes could make it click.
        </h1>

        <p className="mt-2 text-sm text-[#697F98]">
          Share useful academic material. We'll review it before it becomes
          part of the library.
        </p>
      </section>

      <form onSubmit={handleSubmit}>
        <div className="grid items-start gap-5 lg:grid-cols-[minmax(0,1fr)_295px]">

          {/* Main form */}
          <div className="flex min-w-0 flex-col gap-5">

            {/* STEP 1: File Upload */}
            <section className="rounded-[20px] border border-[#DCE6E6] bg-white p-5 md:p-6">
              <h2 className="mb-5 text-lg font-bold text-[#202D40]">
                1. Add your resource
              </h2>

              {/* Dropzone */}
              <div
                onDragOver={(event) => {
                  event.preventDefault();
                  setDragging(true);
                }}
                onDragLeave={() => setDragging(false)}
                onDrop={handleDrop}
                className={`flex min-h-[195px] flex-col items-center justify-center rounded-[15px] border border-dashed p-5 text-center transition ${
                  dragging
                    ? "border-[#206F7E] bg-[#D5EBE7]"
                    : "border-[#206F7E] bg-[#E7F3F1]"
                }`}
              >
                <UploadCloud
                  size={28}
                  strokeWidth={1.5}
                  className="mb-4 text-[#206F7E]"
                />

                <p className="text-sm font-semibold text-[#202D40]">
                  Drag a file here, or browse files
                </p>

                <p className="mt-3 text-[11px] text-[#697F98]">
                  PDF only · Up to 20 MB · Clear, readable pages
                </p>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,application/pdf"
                  onChange={(event) => {
                    handleFile(event.target.files[0]);
                    event.target.value = "";
                  }}
                  className="hidden"
                />

                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="mt-4 rounded-xl border border-[#DCE6E6] bg-white px-5 py-3 text-xs font-bold text-[#202D40] transition hover:bg-[#F1F4F3]"
                >
                  Choose PDF
                </button>
              </div>

              {/* Selected file */}
              {file && (
                <div className="mt-4 flex items-center justify-between gap-4 rounded-xl bg-[#F1F4F3] p-4">
                  <div className="flex min-w-0 items-center gap-3">
                    <FileCheck2
                      size={19}
                      className="shrink-0 text-[#206F7E]"
                    />

                    <div className="min-w-0">
                      <p className="truncate text-xs font-semibold text-[#202D40]">
                        {file.name}
                      </p>

                      <p className="mt-1 text-[10px] text-[#697F98]">
                        {(file.size / (1024 * 1024)).toFixed(1)} MB ·
                        Ready to submit
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setFile(null)}
                    aria-label="Remove selected file"
                    className="shrink-0 text-[#206F7E] hover:text-red-600"
                  >
                    <X size={17} />
                  </button>
                </div>
              )}
            </section>

            {/* STEP 2: Resource Details */}
            <section className="rounded-[20px] border border-[#DCE6E6] bg-white p-5 md:p-6">
              <h2 className="mb-5 text-lg font-bold text-[#202D40]">
                2. Help students find it
              </h2>

              <div className="flex flex-col gap-4">

                <FormField
                  label="Resource title"
                  value={form.title}
                  onChange={(e) => updateField("title", e.target.value)}
                />

                {/* Description */}
                <div className="rounded-xl border border-[#DCE6E6] bg-white px-3 py-2.5 focus-within:border-[#206F7E]">
                  <label
                    htmlFor="description"
                    className="mb-1 block text-[10px] font-semibold text-[#697F98]"
                  >
                    Description *
                  </label>

                  <textarea
                    id="description"
                    rows={2}
                    required
                    value={form.description}
                    onChange={(e) =>
                      updateField("description", e.target.value)
                    }
                    className="w-full resize-y bg-transparent text-[13px] text-[#202D40] outline-none"
                  />
                </div>

                {/* Academic fields */}
                <div className="grid gap-4 sm:grid-cols-2">
                  {fields.map((field) => (
                    <FormField
                      key={field.name}
                      label={field.label}
                      value={form[field.name]}
                      options={field.options}
                      onChange={(e) =>
                        updateField(field.name, e.target.value)
                      }
                    />
                  ))}
                </div>

                <FormField
                  label="Author / source credit"
                  value={form.author}
                  onChange={(e) => updateField("author", e.target.value)}
                />
              </div>

              <p className="mt-5 text-[11px] leading-relaxed text-[#697F98]">
                Access tier is assigned during review. Uploading does not
                make a resource Premium.
              </p>
            </section>

            {/* STEP 3: Confirmation */}
            <section className="rounded-[20px] border border-[#DCE6E6] bg-white p-5 md:p-6">
              <h2 className="mb-5 text-lg font-bold text-[#202D40]">
                3. Confirm and send
              </h2>

              <div className="flex flex-col gap-4">
                <label className="flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    checked={permissionConfirmed}
                    onChange={(e) =>
                      setPermissionConfirmed(e.target.checked)
                    }
                    className="mt-0.5 h-4 w-4 shrink-0 accent-[#206F7E]"
                  />

                  <span className="text-[12px] leading-relaxed text-[#202D40]">
                    I created this material or have permission to share it.
                    It does not contain private information or a current,
                    restricted exam.
                  </span>
                </label>

                <label className="flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    checked={reviewConfirmed}
                    onChange={(e) =>
                      setReviewConfirmed(e.target.checked)
                    }
                    className="mt-0.5 h-4 w-4 shrink-0 accent-[#206F7E]"
                  />

                  <span className="text-[12px] leading-relaxed text-[#202D40]">
                    I understand that submissions are reviewed and may
                    need changes before publication.
                  </span>
                </label>
              </div>

              {message && (
                <p
                  role="status"
                  className="mt-5 rounded-lg bg-[#E7F3F1] p-3 text-xs text-[#206F7E]"
                >
                  {message}
                </p>
              )}

              <div className="mt-5 flex flex-wrap gap-3">
                <button
                  type="submit"
                  className="flex items-center gap-2 rounded-xl bg-[#206F7E] px-5 py-3 text-xs font-bold text-white transition hover:bg-[#185966]"
                >
                  <ArrowRight size={16} />
                  Submit for review
                </button>

                <button
                  type="button"
                  onClick={handleSaveDraft}
                  className="rounded-xl border border-[#DCE6E6] bg-white px-5 py-3 text-xs font-bold text-[#202D40] transition hover:bg-[#F1F4F3]"
                >
                  Save draft
                </button>
              </div>
            </section>
          </div>

          {/* Right sidebar */}
          <aside className="flex flex-col gap-5">

            {/* Contribution guidelines */}
            <section className="rounded-[20px] border border-[#DCE6E6] bg-white p-6">
              <span className="inline-flex rounded-full bg-[#E7F3F1] px-3 py-1 text-[10px] font-bold uppercase text-[#206F7E]">
                Quality over quantity
              </span>

              <h2 className="mt-5 text-lg font-bold leading-snug text-[#202D40]">
                What makes a great contribution?
              </h2>

              <div className="mt-5 flex flex-col gap-5">
                {[
                  "A clear title and correct course code",
                  "Complete, legible pages in the right order",
                  "Accurate academic session and level",
                  "Original or permission-cleared material",
                ].map((item, index) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="text-xs font-bold text-[#206F7E]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="text-xs leading-relaxed text-[#697F98]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Proposed contributor programme */}
            <section className="rounded-[20px] bg-[#FFF0EB] p-6">
              <p className="text-[10px] font-bold uppercase text-[#B4443B]">
                Proposed programme
              </p>

              <h2 className="mt-5 text-lg font-bold leading-snug text-[#202D40]">
                Share knowledge. Maybe unlock more.
              </h2>

              <p className="mt-4 text-xs leading-relaxed text-[#697F98]">
                A proposed 5 approved resources may qualify for one month
                of Premium after a separate eligibility review. This is
                not automatic or guaranteed.
              </p>

              <button
                type="button"
                className="mt-5 w-full rounded-xl border border-[#DCE6E6] bg-white px-4 py-3 text-xs font-bold text-[#202D40] transition hover:bg-[#F8FAFA]"
              >
                View my submissions
              </button>
            </section>
          </aside>
        </div>
      </form>
    </div>
  );
}
