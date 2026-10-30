import React from "react";
import { ArrowLeft, CheckCircle2, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

export default function LogoutPage() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-white font-sans">

      {/* Left panel */}
      <section className="hidden lg:block w-full lg:w-[43.05%] bg-[#e8f4f1] px-8 sm:px-12 lg:px-16 py-8 lg:py-12 flex flex-col">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-9 rounded-lg bg-[#206f7e] flex items-center justify-center text-white font-bold text-xl">
            p.
          </div>
          <span className="text-[23px] font-bold tracking-tight text-[#202b3e]">
            prepnivo
          </span>
        </div>

        {/* Hero content */}
        <div className="mt-16 lg:mt-[56px]">
          <p className="text-[11px] font-bold text-[#087084] uppercase tracking-wide mb-7">
            Your semester, a little lighter.
          </p>

          <h1 className="text-[42px] sm:text-[52px] leading-[1.12] font-bold tracking-[-2px] text-[#202b3e] max-w-[470px]">
            Less searching.
            <br />
            More
            <br />
            understanding.
          </h1>

          <p className="mt-6 text-[16px] leading-[26px] text-[#657a9b] max-w-[490px]">
            The right notes for your course, and a calmer place to make
            sense of them.
          </p>
        </div>

        {/* Course card */}
        <div className="mt-10 lg:mt-10 bg-white rounded-[24px] p-7 sm:p-8 shadow-[0_8px_25px_rgba(30,70,70,0.03)] max-w-[492px]">
          <span className="inline-block bg-[#e8f4f1] text-[#087084] rounded-full px-2.5 py-1 text-[10px] font-bold uppercase">
            Made for your academic journey
          </span>

          <h2 className="text-[23px] font-bold text-[#202b3e] mt-5">
            Your course. Your pace.
          </h2>

          <p className="mt-5 text-[14px] text-[#657a9b] leading-6">
            Lecture notes · Past questions · Practice problems · Study guides
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            {["UNILAG", "CSC 201", "200 level"].map((item) => (
              <span
                key={item}
                className="bg-[#e8f4f1] text-[#087084] rounded-full px-2.5 py-1 text-[10px] font-bold"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <p className="mt-16 lg:mt-16 text-[12px] text-[#657a9b]">
          Learn with purpose. Share with permission.
        </p>
      </section>

      {/* Right panel */}
      <section className="w-full lg:w-[56.95%] px-8 sm:px-12 lg:px-16 py-12 lg:py-16 flex flex-col">

        {/* Back link */}
        <Link to="/" className="flex items-center gap-2 text-[12px] text-[#657a9b] hover:text-[#206f7e] 
        transition-colors w-fit"
        >
          <ArrowLeft size={16} strokeWidth={2} />
          Back to Prepnivo
        </Link>

        {/* Logout content */}
        <div className="w-full max-w-[588px] mx-auto mt-10 lg:mt-[50px]">

          {/* Success icon */}
          <div className="w-[72px] h-[72px] rounded-[24px] bg-[#e8f4f1] flex items-center justify-center">
            <CheckCircle2
              size={30}
              strokeWidth={1.6}
              className="text-[#167487]"
            />
          </div>

          <p className="mt-8 text-[11px] font-bold tracking-[1.5px] uppercase text-[#087084]">
            All signed out
          </p>

          <h2 className="mt-3 text-[30px] sm:text-[34px] leading-tight font-bold tracking-[-1.2px] text-[#202b3e]">
            You’re safely logged out.
          </h2>

          <p className="mt-3 text-[15px] leading-[23px] text-[#657a9b]">
            Thanks for studying with Prepnivo. Take a breather — we’ll be
            here when you’re ready for your next breakthrough.
          </p>

          {/* Actions */}
          <div className="flex flex-col gap-3 mt-8">
            <Link to="/login" className="h-[46px] rounded-xl bg-[#206f7e] hover:bg-[#185e6b] 
            transition-colors text-white text-[13px] font-semibold flex items-center justify-center">
              Log back in
            </Link>

            <Link to="/" className="h-[46px] rounded-xl border border-[#d8e2e3] hover:bg-[#f8fbfa]
            transition-colors text-[#202b3e] text-[13px] font-semibold flex items-center justify-center">
              Return home
            </Link>
          </div>

          {/* Session notice */}
          <div className="mt-8 min-h-[60px] rounded-[20px] bg-[#fff0ec] px-5 py-4 flex items-center gap-3">
            <ShieldCheck
              size={19}
              className="text-[#c3483d] shrink-0"
            />
            <p className="text-[12px] leading-5 text-[#657a9b]">
              Your session has ended on this device. You can safely close
              this tab.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
