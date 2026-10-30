
import { useState } from "react";

const plans = [
  {
    id: "monthly",
    name: "Monthly",
    price: "₦1,200",
    period: "/ month",
    billing: "Billed monthly · Flexible study rhythm",
    badge: "Selected proposal",
  },
  {
    id: "semester",
    name: "Six-month semester",
    price: "₦1,000",
    period: "/ month",
    billing: "₦6,000 billed every 6 months",
    badge: "Save ₦1,200 over 6 months",
  },
];

const freeFeatures = [
  "Read all Free resources",
  "Download eligible Free PDFs",
  "Unlimited bookmarks & study collections",
  "3-page previews of Premium resources",
];

const premiumFeatures = [
  "Everything in Free",
  "Full reading access to Premium resources",
  "Download eligible Free & Premium PDFs",
  "Keep your saved collections in one place",
];

function CheckIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4m0-4h.01" />
    </svg>
  );
}

function FeatureList({ features }) {
  return (
    <ul className="space-y-5">
      {features.map((feature) => (
        <li
          key={feature}
          className="flex items-start gap-3 text-sm text-slate-700"
        >
          <span className="mt-0.5 shrink-0 text-[#16758a]">
            <CheckIcon />
          </span>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  );
}

function PlanCard({
  title,
  description,
  price,
  period,
  features,
  note,
  current,
  premium,
  buttonText,
  onClick,
}) {
  return (
    <div
      className={`flex flex-col rounded-[25px] border p-7 sm:p-8 ${
        premium
          ? "border-2 border-[#247d8d] bg-[#e8f4f2]"
          : "border-[#e0e7e9] bg-white"
      }`}
    >
      {current ? (
        <span className="mb-6 w-fit rounded-full bg-[#e8f3f2] px-3 py-1 text-[10px] font-bold uppercase text-[#16758a]">
          Your current plan
        </span>
      ) : (
        <span className="mb-6 w-fit px-2 py-1 text-[10px] font-bold uppercase text-[#16758a]">
          Proposed Premium
        </span>
      )}

      <h2 className="text-[26px] font-bold tracking-tight text-slate-800">
        {title}
      </h2>

      <p className="mt-1 text-sm text-slate-500">{description}</p>

      <div className="my-7 flex items-baseline gap-2">
        <span className="text-[42px] font-bold leading-none tracking-tight text-slate-800">
          {price}
        </span>
        <span className="text-sm text-slate-700">{period}</span>
      </div>

      <FeatureList features={features} />

      <p className="mt-6 text-xs leading-5 text-slate-500">
        {note}
      </p>

      <button
        type="button"
        onClick={onClick}
        disabled={current}
        className={`mt-5 w-full rounded-xl border px-5 py-3 text-sm font-semibold transition-colors ${
          current
            ? "cursor-default border-[#d9e3e4] bg-white text-slate-700"
            : "border-[#1e7181] bg-[#1e7181] text-white hover:bg-[#185e6b]"
        }`}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default function PremiumPage({
  onExplorePremium,
  onBecomeContributor,
}) {
  const [selectedPlan, setSelectedPlan] = useState("monthly");

  const handleExplore = () => {
    onExplorePremium?.(plans.find((p) => p.id === selectedPlan));
  };

  return (
      <div className="mx-auto max-w-[1400px]">

        {/* Page Heading */}
        <header className="mb-6">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-wide text-[#168397]">
            A little more possibility
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-[34px]">
            More resources. Same study rhythm.
          </h1>

          <p className="mt-2 text-sm text-slate-400 sm:text-base">
            Keep the essentials free. Explore a proposed plan for the full
            Premium collection.
          </p>
        </header>

        {/* Pricing Disclaimer */}
        <div className="mb-6 flex items-center gap-3 rounded-xl bg-[#fff5db] px-4 py-4 text-[#956419]">
          <span className="shrink-0">
            <InfoIcon />
          </span>
          <p className="text-xs leading-5 sm:text-sm">
            Pricing proposal only. These subscription options are not live
            offers; no payment will be taken from this screen.
          </p>
        </div>

        {/* Main Pricing Cards */}
        <section className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <PlanCard
            title="Free"
            description="A solid place to start."
            price="₦0"
            period="/ always"
            features={freeFeatures}
            note="Full Premium reading and Premium downloads are not included."
            current
            buttonText="Current plan"
          />

          <PlanCard
            title="Premium"
            description="For the next level of preparation."
            price="₦1,200"
            period="/ month"
            features={premiumFeatures}
            note="Summaries, Mock Exam, Marketplace and AI tools are not included at launch."
            premium
            buttonText="Explore proposed options"
            onClick={handleExplore}
          />
        </section>

        {/* Subscription Options */}
        <section className="mt-7">
          <div className="mb-6 flex items-center justify-between gap-3">
            <h2 className="text-xl font-bold tracking-tight text-slate-800 sm:text-2xl">
              Choose your study stretch
            </h2>

            <span className="text-[10px] font-bold text-[#168397]">
              Proposed options
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {plans.map((plan) => {
              const isSelected = selectedPlan === plan.id;

              return (
                <button
                  key={plan.id}
                  type="button"
                  onClick={() => setSelectedPlan(plan.id)}
                  aria-pressed={isSelected}
                  className={`flex w-full items-start gap-4 rounded-2xl border-2 bg-white p-5 text-left transition-all sm:p-6 ${
                    isSelected
                      ? "border-[#218095]"
                      : "border-transparent hover:border-[#b9d9dc]"
                  }`}
                >
                  {/* Radio */}
                  <span
                    className={`mt-0.5 flex h-[19px] w-[19px] shrink-0 items-center justify-center rounded-full border-2 ${
                      isSelected
                        ? "border-[#16758a]"
                        : "border-[#16758a]"
                    }`}
                  >
                    {isSelected && (
                      <span className="h-2 w-2 rounded-full bg-[#16758a]" />
                    )}
                  </span>

                  <span className="flex flex-col">
                    <span className="text-sm font-bold text-slate-800">
                      {plan.name}
                    </span>

                    <span className="mt-2 text-xl font-bold text-slate-800">
                      {plan.price}
                      <span className="text-base"> {plan.period}</span>
                    </span>

                    <span className="mt-2 text-xs text-slate-500">
                      {plan.billing}
                    </span>

                    <span className="mt-2 w-fit rounded-full bg-[#e8f3f2] px-3 py-1 text-[10px] font-bold text-[#16758a]">
                      {plan.badge}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Contributor Section */}
        <section className="mt-6 rounded-[25px] border border-[#e0e7e9] bg-white p-6 shadow-[0_0_0_8px_rgba(22,131,151,0.12)] sm:p-8">
          <span className="inline-flex rounded-full bg-[#fff0eb] px-3 py-1 text-[10px] font-bold uppercase text-[#bd493c]">
            Contribute your way forward
          </span>

          <h2 className="mt-5 text-2xl font-bold leading-tight tracking-tight text-slate-800 sm:text-[34px]">
            Good contributions could open more doors.
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-500 sm:text-base">
            Proposed eligibility: 5 approved, original or permission-cleared
            resources may qualify you for one month of Premium, subject to a
            separate quality and eligibility review.
          </p>

          <p className="mt-4 text-xs leading-5 text-slate-500">
            This threshold is illustrative, not a guaranteed reward.
            Submission is not approval, and Premium is never activated
            automatically. Programme terms are not yet final.
          </p>

          <button
            type="button"
            onClick={onBecomeContributor}
            className="mt-5 rounded-xl border border-[#dce5e6] bg-white px-4 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-[#16758a] hover:text-[#16758a]"
          >
            Become a Contributor
          </button>
        </section>

      </div>
  );
}
