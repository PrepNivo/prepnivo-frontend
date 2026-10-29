import { useState } from "react";
import { ArrowRight, Bookmark, BookOpen, Check, ChevronDown, FolderOpen, Search } from "lucide-react";
import { Link } from "react-router-dom";

const resources = [
  {
    code: "CSC 201",
    type: "LECTURE NOTES · FREE",
    title: "Data Structures, made clear",
    details: "CSC 201 · 200 level · PDF",
    session: "2024/2025 · 42 pages",
    color: "teal",
  },
  {
    code: "CSC 201",
    type: "PAST QUESTIONS · PREMIUM",
    title: "CSC 201 past questions & solutions",
    details: "CSC 201 · 200 level · PDF",
    session: "2023/2024 · 28 pages · Preview only",
    color: "peach",
  },
  {
    code: "CSC 203",
    type: "LECTURE NOTES · FREE",
    title: "Object-Oriented Programming",
    details: "CSC 203 · 200 level · PDF",
    session: "2024/2025 · 36 pages",
    color: "teal",
  },
];

const faqs = [
  {
    question: "Is Prepnivo free?",
    answer:
      "Yes. A Free account includes Free resources, eligible Free downloads, bookmarks and study collections. Premium resources have a three-page preview.",
  },
  {
    question: "How do I find materials for my course?",
    answer:
      "Choose your institution, faculty, department, level, course, resource type and academic session in the library.",
  },
  {
    question: "Can I upload someone else's notes?",
    answer:
      "Only with their permission. You must own the material or have the right to share it. Our team reviews every upload.",
  },
  {
    question: "Are Summaries and Mock Exam available?",
    answer:
      "Not yet. Summaries, Mock Exam, Marketplace and advanced AI study tools are coming soon.",
  },
];

const buttonStyle1 = "inline-flex min-h-9 items-center justify-center gap-2 rounded-lg border border-[#DFE6E9] bg-white px-4 py-2 text-[11px] font-semibold text-[#202D40] transition hover:bg-[#F5F8F8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#206F7E]"
const buttonStyle2 = "inline-flex min-h-9 items-center justify-center gap-2 rounded-lg bg-[#206F7E] px-4 py-2 text-[11px] font-semibold text-white transition hover:bg-[#185966] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#206F7E]"

function Brand() {
  return (
    <a href="#home" className="inline-flex shrink-0 items-center gap-1.5" aria-label="Prepnivo home">
      <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#206F7E] text-lg font-bold text-white">
        p.
      </span>
      <span className="text-[17px] font-extrabold tracking-tight text-[#202D40]">
        prepnivo
      </span>
    </a>
  );
}

function Header() {
  return (
    <header className="relative z-20 bg-white">
      <div className="mx-auto flex min-h-[60px] max-w-[1120px] items-center justify-between gap-4 px-5 md:px-8">
        <Brand />

        <nav className="hidden items-center gap-7 md:flex">
          <a href="#resources" className="text-[11px] text-[#202D40] hover:text-[#206F7E]">
            Explore resources
          </a>
          <a href="#how-it-works" className="text-[11px] text-[#202D40] hover:text-[#206F7E]">
            How it works
          </a>
          <a href="#premium" className="text-[11px] text-[#202D40] hover:text-[#206F7E]">
            Premium
          </a>
        </nav>

        <div className=" hidden items-center gap-2 md:flex">
          <Link className={buttonStyle1} to="/login" >
            Log In </Link>

          <Link  className={buttonStyle2} to="/login" >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="bg-white">
      <div className="mx-auto grid max-w-[1120px] items-center gap-10 px-5 pb-12 pt-7 md:grid-cols-[0.92fr_1.08fr] md:gap-12 md:px-8 md:pb-12 md:pt-5">
        <div>
          <span className="inline-flex rounded-full bg-[#E7F3F1] px-2.5 py-1 text-[8px] font-semibold uppercase tracking-wide text-[#206F7E]">
            Your next study session starts here
          </span>

          <h1 className="mt-5 max-w-[440px] text-[38px] font-bold leading-[1.03] tracking-[-1.5px] text-[#202D40] sm:text-5xl">
            All your study resources. One place.
          </h1>

          <p className="mt-4 max-w-[410px] text-[13px] leading-[1.75] text-[#697F98]">
            Less searching. More understanding. Find lecture notes, past
            questions and study materials for your course, your level and your
            university.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            <Link to = '/login' className={buttonStyle2}>
              <ArrowRight size={13} />
              Get Started
            </Link>
            <a href ='#resources' className={buttonStyle1}>
              Explore the library
            </a>
          </div>

          <p className="mt-5 text-[10px] text-[#697F98]">
            Start free. No card needed. Built for Nigerian students.
          </p>
        </div>

        <div className="relative min-w-0">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85"
            alt="University students studying together around a table"
            className="h-[250px] w-full rounded-[20px] object-cover sm:h-[310px] md:h-[365px]"
          />

          <div className="absolute bottom-3 left-3 right-8 rounded-xl bg-white p-3.5 shadow-lg sm:bottom-4 sm:left-4 sm:right-auto sm:w-[290px]">
            <div className="flex items-center justify-between gap-2">
              <span className="rounded-full bg-[#E7F3F1] px-2 py-1 text-[7px] font-bold uppercase tracking-wide text-[#206F7E]">
                Right course. Right material.
              </span>
              <Bookmark size={14} className="text-[#206F7E]" />
            </div>

            <h2 className="mt-2 text-xs font-bold text-[#202D40]">
              Data Structures, made clear
            </h2>

            <p className="mt-1.5 text-[9px] text-[#697F98]">
              CSC 201 · 200 level · Lecture notes
            </p>

            <div className="mt-3 flex items-center gap-2">
              <div className="h-0.5 w-16 rounded-full bg-[#206F7E]" />
              <span className="text-[8px] text-[#697F98]">
                Saved to Exam prep
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  const items = [
    "Your institution",
    "Your department",
    "Your level",
    "Your courses",
  ];

  return (
    <section className="bg-[#F1F4F3]">
      <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-x-5 gap-y-4 px-5 py-5 md:px-8">
        <p className="max-w-[145px] text-[10px] leading-relaxed text-[#697F98]">
          A library that understands your academic world.
        </p>

        {items.map((item) => (
          <div
            key={item}
            className="flex items-center gap-2 text-[10px] font-medium text-[#202D40]"
          >
            <Check size={12} strokeWidth={2.5} className="text-[#206F7E]" />
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

const features = [
  {
    icon: Search,
    title: "Find what actually fits",
    description:
      "Filter by university, course and session. Skip the endless group-chat scroll.",
  },
  {
    icon: BookOpen,
    title: "Read in your own rhythm",
    description:
      "Open materials right here, pick up where you left off and download eligible files.",
  },
  {
    icon: FolderOpen,
    title: "Give your notes a home",
    description:
      "Bookmark useful resources and build collections around your next test.",
  },
];

function Features() {
  return (
    <section className="bg-white" id="features">
      <div className="mx-auto max-w-[1120px] px-5 py-14 md:px-8 md:py-16">
        <p className="text-[9px] font-bold uppercase tracking-wide text-[#206F7E]">
          Less friction. More focus.
        </p>

        <h2 className="mt-2 text-[27px] font-bold leading-tight tracking-tight text-[#202D40]">
          From “where is that PDF?” to ready.
        </h2>

        <p className="mt-2 text-xs text-[#697F98]">
          Your academic essentials, thoughtfully brought together.
        </p>

        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="rounded-[15px] bg-[#F1F4F3] p-5 transition hover:-translate-y-0.5 hover:shadow-sm"
            >
              <Icon size={20} strokeWidth={1.5} className="text-[#206F7E]" />
              <h3 className="mt-4 text-sm font-bold text-[#202D40]">
                {title}
              </h3>
              <p className="mt-3 max-w-[290px] text-[11px] leading-relaxed text-[#697F98]">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResourceCard({ resource }) {
  const isPeach = resource.color === "peach";

  return (
    <article className="overflow-hidden rounded-[15px] border border-[#E1E9E9] bg-white shadow-[0_2px_6px_rgba(32,45,64,0.02)] transition hover:-translate-y-1 hover:shadow-md">
      <div
        className={`flex items-center justify-between px-4 py-5 ${
          isPeach ? "bg-[#FFF0EB]" : "bg-[#E7F3F1]"
        }`}
      >
        <h3 className="text-[19px] font-bold tracking-tight text-[#202D40]">
          {resource.code}
        </h3>

        <span className="text-[8px] font-bold text-[#206F7E]">
          PDF ↗
        </span>
      </div>

      <div className="p-4">
        <p className="text-[8px] font-bold tracking-wide text-[#206F7E]">
          {resource.type}
        </p>

        <h4 className="mt-2 text-xs font-bold leading-snug text-[#202D40]">
          {resource.title}
        </h4>

        <p className="mt-1 text-[9px] text-[#697F98]">
          {resource.details}
        </p>

        <p className="mt-1 text-[9px] text-[#94A4B6]">
          {resource.session}
        </p>
      </div>
    </article>
  );
}

function CourseResources() {
  return (
    <section id="resources" className="bg-[#F1F4F3]">
      <div className="mx-auto max-w-[1120px] px-5 py-14 md:px-8 md:py-16">
        <p className="text-[9px] font-bold uppercase tracking-wide text-[#206F7E]">
          A little less searching
        </p>

        <h2 className="mt-2 text-[27px] font-bold tracking-tight text-[#202D40]">
          Meet your new course companion.
        </h2>

        <p className="mt-2 text-xs text-[#697F98]">
          A glimpse inside Computer Science at the University of Lagos.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {["University of Lagos", "Science", "Computer Science", "200 level"].map(
            (tag) => (
              <span
                key={tag}
                className="rounded-full bg-[#E0EFEC] px-2.5 py-1 text-[8px] font-medium text-[#206F7E]"
              >
                {tag}
              </span>
            )
          )}
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {resources.map((resource) => (
            <ResourceCard key={resource.title} resource={resource} />
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    number: "01",
    title: "Make it yours",
    description:
      "Create a free account. Tell us your university, department and level.",
  },
  {
    number: "02",
    title: "Find your material",
    description:
      "Search a topic or narrow the library to exactly what you need.",
  },
  {
    number: "03",
    title: "Settle into study",
    description:
      "Read, save and organise. Come back to your materials whenever you need them.",
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white">
      <div className="mx-auto max-w-[1120px] px-5 py-14 md:px-8 md:py-16">
        <p className="text-[9px] font-bold uppercase tracking-wide text-[#206F7E]">
          Three steps. One calmer semester.
        </p>

        <h2 className="mt-2 text-[27px] font-bold tracking-tight text-[#202D40]">
          How it works
        </h2>

        <div className="mt-8 grid gap-8 md:grid-cols-3 md:gap-10">
          {steps.map((step) => (
            <article key={step.number}>
              <span className="text-[31px] font-bold tracking-tight text-[#206F7E]">
                {step.number}
              </span>

              <h3 className="mt-2 text-sm font-bold text-[#202D40]">
                {step.title}
              </h3>

              <p className="mt-3 max-w-[300px] text-[11px] leading-relaxed text-[#697F98]">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PromoCard({
  variant,
  eyebrow,
  title,
  description,
  children,
  buttonText,
  onClick,
}) {
  const isPremium = variant === "premium";

  return (
    <article
      className={`rounded-[20px] p-6 md:p-7 ${
        isPremium ? "bg-[#E7F3F1]" : "bg-[#FFF0EB]"
      }`}
    >
      <p
        className={`text-[8px] font-bold uppercase tracking-wide ${
          isPremium ? "text-[#206F7E]" : "text-[#A13F37]"
        }`}
      >
        {eyebrow}
      </p>

      <h2 className="mt-4 text-[23px] font-bold leading-tight tracking-tight text-[#202D40]">
        {title}
      </h2>

      <p className="mt-2 text-[11px] leading-relaxed text-[#697F98]">
        {description}
      </p>

      {children}

      <button
        type="button"
        onClick={onClick}
        className="mt-5 inline-flex min-h-9 items-center justify-center gap-2 rounded-lg border border-[#DFE6E9] bg-white px-4 py-2 text-[11px] font-semibold text-[#202D40] transition hover:bg-[#F5F8F8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#206F7E]"
      >
        {buttonText}
      </button>
    </article>
  );
}

function MoreWays({
  onComparePlans,
  onContribute,
}) {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-[1120px] gap-4 px-5 py-8 md:grid-cols-2 md:px-8 md:py-10">
        <PromoCard
          variant="premium"
          eyebrow="A little extra, when you need it"
          title="Start free. Go a little further."
          description="Read and download Free resources, and save your favourites. Explore Premium for the full Premium collection."
          buttonText="Compare plans"
          onClick={onComparePlans}
        >
          <div className="mt-5 flex items-baseline gap-1">
            <span className="text-[21px] font-extrabold text-[#202D40]">
              ₦1,200
            </span>
            <span className="text-[10px] text-[#202D40]">
              / month, proposed
            </span>
          </div>

          <p className="mt-4 text-[9px] text-[#697F98]">
            Pricing is a proposal, not a live subscription offer.
          </p>
        </PromoCard>

        <PromoCard
          variant="contributor"
          eyebrow="Good notes deserve good company"
          title="Help the next student get it."
          description="Share original notes or materials you have permission to upload. Every contribution is reviewed before it joins the library."
          buttonText="Become a Contributor"
          onClick={onContribute}
        >
          <p className="mt-5 text-[10px] leading-relaxed text-[#697F98]">
            Approved contributions may qualify you for Premium through our
            proposed contributor programme.
          </p>
        </PromoCard>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-white" id="faq">
      <div className="mx-auto max-w-[920px] px-5 py-14 md:px-8 md:py-16">
        <p className="text-[9px] font-bold uppercase tracking-wide text-[#206F7E]">
          A few useful answers
        </p>

        <h2 className="mt-2 text-[27px] font-bold tracking-tight text-[#202D40]">
          Before you dive in
        </h2>

        <div className="mt-5 divide-y divide-[#DCE4E8]">
          {faqs.map((faq, index) => (
            <div key={faq.question}>
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 py-4 text-left"
                aria-expanded={openIndex === index}
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <span className="text-[11px] font-bold text-[#202D40]">
                  {faq.question}
                </span>

                <ChevronDown
                  size={15}
                  className={`shrink-0 text-[#697F98] transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <p className="max-w-[800px] pb-4 text-[11px] leading-relaxed text-[#697F98]">
                  {faq.answer}
                </p>
              )}

              {/* Keep answers visible on larger screens like the reference. */}
              <p className="hidden pb-4 text-[11px] leading-relaxed text-[#697F98] md:block">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA({
  onGetStarted,
}) {
  return (
    <section className="bg-[#206F7E] px-5 py-14 text-center text-white md:py-16">
      <h2 className="text-[29px] font-bold leading-tight tracking-tight sm:text-[36px]">
        Your next “I get it” starts here.
      </h2>

      <p className="mt-4 text-xs text-[#D7EBEF]">
        Find your course. Save your notes. Make study time yours.
      </p>

      <button
        type="button"
        onClick={onGetStarted}
        className="mt-6 inline-flex min-h-9 items-center justify-center gap-2 rounded-lg border border-[#DFE6E9] bg-white px-4 py-2 text-[11px] font-semibold text-[#202D40] transition hover:bg-[#F5F8F8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#206F7E]"
      >
        Get Started — it's free
      </button>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto grid max-w-[1120px] gap-8 px-5 py-8 md:grid-cols-[1.5fr_1fr_auto] md:px-8">
        <div>
          <Brand />

          <p className="mt-3 max-w-[350px] text-[10px] leading-relaxed text-[#697F98]">
            A little more prepared, together. Academic resources for Nigerian
            university life.
          </p>

          <p className="mt-6 text-[9px] leading-relaxed text-[#697F98]">
            © 2026 Prepnivo. Learn with purpose. Share with permission.
          </p>
        </div>

        <div>
          <h3 className="text-[10px] font-bold text-[#202D40]">Explore</h3>
          <div className="mt-3 flex flex-wrap gap-1 text-[10px] text-[#697F98]">
            <a href="#resources" className="hover:text-[#206F7E]">Library</a>
            <span>·</span>
            <a href="#premium" className="hover:text-[#206F7E]">Premium</a>
            <span>·</span>
            <a href="#contribute" className="hover:text-[#206F7E]">Contribute</a>
          </div>
        </div>

        <div>
          <h3 className="text-[10px] font-bold text-[#202D40]">Need a hand?</h3>
          <div className="mt-3 flex flex-wrap gap-1 text-[10px] text-[#697F98]">
            <a href="#faq" className="hover:text-[#206F7E]">Help</a>
            <span>·</span>
            <a href="/privacy" className="hover:text-[#206F7E]">Privacy</a>
            <span>·</span>
            <a href="/terms" className="hover:text-[#206F7E]">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function LandingPage(props) {
  return (
    <main className="min-h-screen bg-white font-sans antialiased">
      <Header/>
      <Hero/>
      <TrustStrip />
      <Features />
      <CourseResources />
      <HowItWorks />

      <div id="premium">
        <div id="contribute">
          <MoreWays
            onComparePlans={props.onComparePlans}
            onContribute={props.onContribute}
          />
        </div>
      </div>

      <FAQ />
      <FinalCTA onGetStarted={props.onGetStarted} />
      <Footer />
    </main>
  );
}
