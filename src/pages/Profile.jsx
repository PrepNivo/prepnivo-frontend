
import React from "react";
import { Camera, ChevronDown } from "lucide-react";

export default function Profilepage(){
  const profileFields = [
    { label: "Full name", value: "Adaeze Okafor" },
    {
      label: "Email address",
      value: "adaeze.okafor@live.com",
      helper: "Email changes are managed in Settings.",
    },
    { label: "Institution", value: "University of Lagos", dropdown: true },
    { label: "Faculty", value: "Science", dropdown: true },
    { label: "Department", value: "Computer Science", dropdown: true },
    { label: "Academic level", value: "200 level", dropdown: true },
    {
      label: "Current academic session",
      value: "2024/2025",
      dropdown: true,
    },
  ];
  
  return (
      <div className="mx-auto max-w-[1200px]">

        {/* Page Heading */}
        <section className="mb-6">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-wide text-[#197080]">
            Your academic identity
          </p>

          <h1 className="text-[32px] font-bold leading-tight tracking-tight text-[#202d40]">
            A little more you.
          </h1>

          <p className="mt-1 text-sm text-[#71839f]">
            Keep your profile up to date so your library stays relevant.
          </p>
        </section>

        {/* Profile Banner */}
        <section className="mb-6 flex flex-col items-center justify-between gap-5 rounded-[26px] bg-[#e6f3f0] px-7 py-8 sm:flex-row">
          <div className="flex items-center gap-5">
            <div className="flex h-[82px] w-[82px] shrink-0 items-center justify-center rounded-full bg-white text-[27px] font-bold text-[#1c7080]">
              AO
            </div>

            <div>
              <h2 className="text-[25px] font-bold tracking-tight text-[#202d40]">
                Adaeze Okafor
              </h2>

              <p className="mt-2 text-[13px] text-[#71839f]">
                Computer Science · University of Lagos
              </p>

              <span className="mt-3 inline-block text-[9px] font-bold uppercase text-[#187286]">
                Free account
              </span>
            </div>
          </div>

          <button className="flex items-center gap-2 rounded-xl border border-[#e0e8e8] bg-white px-5 py-3 text-xs font-semibold text-[#253247] transition hover:bg-[#f7faf9]">
            <Camera size={15} />
            Change photo
          </button>
        </section>

        {/* Main Content */}
        <div className="grid grid-cols-1 items-start gap-5 lg:grid-cols-[minmax(0,1fr)_306px]">

          {/* Personal & Academic Details */}
          <section className="rounded-[19px] border border-[#dce7e6] bg-white p-5 shadow-[0_5px_15px_rgba(30,60,60,0.025)] sm:p-[22px]">
            <h2 className="mb-4 text-[19px] font-bold tracking-tight text-[#202d40]">
              Personal & academic details
            </h2>

            <div className="space-y-[17px]">
              {profileFields.map((field) => (
                <div
                  key={field.label}
                  className="flex min-h-[63px] flex-col justify-center rounded-xl border border-[#dce5e5] px-3 py-3 transition focus-within:border-[#1c7080]"
                >
                  <label className="mb-1 flex items-center gap-1 text-[9px] font-semibold text-[#71839f]">
                    {field.label}
                    {field.dropdown && (
                      <ChevronDown size={10} />
                    )}
                  </label>

                  <input
                    type="text"
                    defaultValue={field.value}
                    readOnly
                    className="w-full bg-transparent text-[12px] font-medium text-[#27364d] outline-none"
                  />

                  {field.helper && (
                    <p className="mt-0.5 text-[9px] text-[#8291a9]">
                      {field.helper}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <p className="mt-4 text-[11px] leading-relaxed text-[#71839f]">
              These details personalise your dashboard and library defaults.
              They don't limit what you can explore.
            </p>

            <button className="mt-4 rounded-xl bg-[#1c7080] px-5 py-3 text-xs font-semibold text-white transition hover:bg-[#155c69]">
              Save profile changes
            </button>
          </section>

          {/* Right Sidebar Cards */}
          <aside className="flex flex-col gap-5">

            {/* Subscription Card */}
            <section className="rounded-[19px] border border-[#dce7e6] bg-white p-[21px] shadow-[0_5px_15px_rgba(30,60,60,0.025)]">
              <h2 className="text-[19px] font-bold tracking-tight text-[#202d40]">
                Your subscription
              </h2>

              <span className="mt-4 inline-block rounded-full bg-[#e7f3f0] px-2.5 py-1 text-[9px] font-bold uppercase text-[#197286]">
                Free · Active
              </span>

              <p className="mt-4 text-[12px] leading-[19px] text-[#71839f]">
                Free reading and eligible Free downloads, bookmarks and study
                collections. Premium resources include a 3-page preview.
              </p>

              <button className="mt-4 w-full rounded-xl bg-[#1c7080] px-4 py-3.5 text-xs font-semibold text-white transition hover:bg-[#155c69]">
                Compare proposed plans
              </button>

              <p className="mt-4 text-[9px] leading-relaxed text-[#8190a7]">
                No active paid subscription. No billing method on file.
              </p>
            </section>

            {/* Contribution Story Card */}
            <section className="rounded-[19px] border border-[#dce7e6] bg-white p-[21px] shadow-[0_5px_15px_rgba(30,60,60,0.025)]">
              <h2 className="text-[19px] font-bold tracking-tight text-[#202d40]">
                Your contribution story
              </h2>

              <p className="mt-5 text-[30px] font-bold tracking-tight text-[#1c7080]">
                3 approved
              </p>

              <p className="mt-4 text-[11px] leading-[18px] text-[#71839f]">
                1 pending review · 1 revision requested. Every useful resource
                starts with someone sharing.
              </p>

              <button className="mt-4 w-full rounded-xl border border-[#dce5e5] bg-white px-4 py-3 text-xs font-semibold text-[#253247] transition hover:bg-[#f5f8f7]">
                View my submissions
              </button>
            </section>

          </aside>
        </div>
      </div>
  );
};


