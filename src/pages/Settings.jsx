import React, { useState } from "react";
import { LogOut, Moon, Sun, Monitor, Check } from "lucide-react";

export default function SettingsPage(){
  const [theme, setTheme] = useState("light");
  const [contributionUpdates, setContributionUpdates] = useState(true);
  const [productNews, setProductNews] = useState(false);

  const appearanceOptions = [
    { id: "light", label: "Light" },
    { id: "dark", label: "Dark" },
    { id: "system", label: "System" },
  ];

  const securityOptions = [
    {
      title: "Email address",
      description: "adaeze.okafor@live.com",
      action: "Change email",
    },
    {
      title: "Password",
      description: "Last updated 18 Oct 2026",
      action: "Change password",
    },
    {
      title: "Google account",
      description: "Not connected",
      action: "Connect Google",
    },
  ];

  const emailOptions = [
    {
      title: "Contribution review updates",
      description: "Get approval and revision feedback.",
      value: contributionUpdates,
      onChange: setContributionUpdates,
    },
    {
      title: "Product news",
      description: "Occasional updates about what's new.",
      value: productNews,
      onChange: setProductNews,
    },
  ];

  const handleExport = () => {
    console.log("Export account data");
  };

  const handleDelete = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete your account? This action cannot be undone."
    );

    if (confirmed) {
      console.log("Account deletion requested");
    }
  };

  return (
      <div className="mx-auto max-w-[1200px]">

        {/* Page Heading */}
        <section className="mb-6">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-wide text-[#197080]">
            Make yourself comfortable
          </p>

          <h1 className="text-[32px] font-bold leading-tight tracking-tight text-[#202d40]">
            Your space. Your preferences.
          </h1>

          <p className="mt-1 text-sm text-[#71839f]">
            A few small choices for a calmer study experience.
          </p>
        </section>

        {/* Appearance */}
        <section className="mb-[23px] rounded-[19px] border border-[#dce7e6] bg-white p-5 shadow-[0_5px_15px_rgba(30,60,60,0.025)] sm:p-[21px]">
          <h2 className="text-[19px] font-bold tracking-tight text-[#202d40]">
            Appearance
          </h2>

          <p className="mt-4 text-[12px] text-[#71839f]">
            Choose a theme. System follows your device's appearance.
          </p>

          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {appearanceOptions.map((option) => {
              const selected = theme === option.id;

              return (
                <label
                  key={option.id}
                  className="group cursor-pointer"
                >
                  <input
                    type="radio"
                    name="theme"
                    value={option.id}
                    checked={selected}
                    onChange={() => setTheme(option.id)}
                    className="sr-only"
                  />

                  {/* Theme Preview */}
                  <div
                    className={`h-[106px] rounded-xl border-2 p-3 transition ${
                      selected
                        ? "border-[#1c7080]"
                        : "border-[#e0e8e8] hover:border-[#a9c5c5]"
                    } ${
                      option.id === "dark"
                        ? "bg-[#111a2c]"
                        : "bg-[#f1f4f3]"
                    }`}
                  >
                    <div className="mb-2 flex items-center gap-2">
                      <div
                        className={`h-[9px] w-[9px] rounded-[3px] ${
                          option.id === "dark"
                            ? "bg-[#20d5c3]"
                            : "bg-[#1c7080]"
                        }`}
                      />

                      <div
                        className={`h-[5px] w-[70px] rounded-full ${
                          option.id === "dark"
                            ? "bg-[#9eacc1]"
                            : "bg-[#dce5e4]"
                        }`}
                      />
                    </div>

                    <div
                      className={`h-[55px] rounded-md ${
                        option.id === "dark"
                          ? "bg-[#202c40]"
                          : "bg-white"
                      }`}
                    />
                  </div>

                  <div className="mt-2 flex items-center gap-1.5">
                    <span
                      className={`flex h-[13px] w-[13px] items-center justify-center rounded-full border-2 ${
                        selected
                          ? "border-[#1c7080]"
                          : "border-[#71839f]"
                      }`}
                    >
                      {selected && (
                        <span className="h-[5px] w-[5px] rounded-full bg-[#1c7080]" />
                      )}
                    </span>

                    <span
                      className={`text-[11px] ${
                        selected
                          ? "font-bold text-[#253247]"
                          : "font-medium text-[#45536a]"
                      }`}
                    >
                      {option.label}
                    </span>
                  </div>
                </label>
              );
            })}
          </div>
        </section>

        {/* Account & Security */}
        <section className="mb-[23px] rounded-[19px] border border-[#dce7e6] bg-white p-5 shadow-[0_5px_15px_rgba(30,60,60,0.025)] sm:p-[21px]">
          <h2 className="mb-1 text-[19px] font-bold tracking-tight text-[#202d40]">
            Account & security
          </h2>

          <div className="divide-y divide-[#dce5e5]">
            {securityOptions.map((item) => (
              <div
                key={item.title}
                className="flex flex-col justify-between gap-3 py-4 sm:flex-row sm:items-center"
              >
                <div>
                  <h3 className="text-[11px] font-bold text-[#253247]">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-[11px] text-[#71839f]">
                    {item.description}
                  </p>
                </div>

                <button className="shrink-0 self-start rounded-xl border border-[#dce5e5] bg-white px-4 py-3 text-[11px] font-semibold text-[#253247] transition hover:bg-[#f5f8f7] sm:self-center">
                  {item.action}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Email Preferences */}
        <section className="mb-[23px] rounded-[19px] border border-[#dce7e6] bg-white p-5 shadow-[0_5px_15px_rgba(30,60,60,0.025)] sm:p-[21px]">
          <h2 className="mb-1 text-[19px] font-bold tracking-tight text-[#202d40]">
            Email preferences
          </h2>

          <div className="mt-3 space-y-4">
            {emailOptions.map((item) => (
              <div
                key={item.title}
                className="flex items-center justify-between gap-4"
              >
                <div>
                  <h3 className="text-[11px] font-bold text-[#253247]">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-[10px] text-[#71839f]">
                    {item.description}
                  </p>
                </div>

                <button
                  type="button"
                  role="switch"
                  aria-checked={item.value}
                  aria-label={item.title}
                  onClick={() => item.onChange(!item.value)}
                  className={`relative h-[22px] w-[37px] shrink-0 rounded-full transition-colors ${
                    item.value ? "bg-[#1c7080]" : "bg-[#dce5e5]"
                  }`}
                >
                  <span
                    className={`absolute top-[3px] h-4 w-4 rounded-full bg-white shadow-sm transition-all ${
                      item.value ? "left-[19px]" : "left-[3px]"
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Account Management */}
        <section className="rounded-[19px] border border-[#dce7e6] bg-white p-5 shadow-[0_5px_15px_rgba(30,60,60,0.025)] sm:p-[21px]">
          <h2 className="text-[19px] font-bold tracking-tight text-[#202d40]">
            Account management
          </h2>

          <p className="mt-4 text-[11px] leading-relaxed text-[#71839f]">
            Download your account data or permanently delete your account.
            Deletion removes your profile and saved collections after
            confirmation.
          </p>

          <div className="mt-4 flex flex-wrap gap-2.5">
            <button
              onClick={handleExport}
              className="rounded-xl border border-[#dce5e5] bg-white px-4 py-3 text-[11px] font-semibold text-[#253247] transition hover:bg-[#f5f8f7]"
            >
              Export my data
            </button>

            <button
              onClick={handleDelete}
              className="rounded-xl border border-[#dce5e5] bg-white px-4 py-3 text-[11px] font-semibold text-[#253247] transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
            >
              Delete account
            </button>
          </div>

          <div className="mt-4 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <p className="text-[10px] leading-relaxed text-[#8190a7]">
              Signed in as Adaeze Okafor. Using a shared device? Remember to
              log out.
            </p>

            <button className="flex shrink-0 items-center justify-center gap-2 self-start rounded-xl bg-[#1c7080] px-4 py-3 text-[11px] font-semibold text-white transition hover:bg-[#155c69] sm:self-auto">
              <LogOut size={15} />
              Log Out
            </button>
          </div>
        </section>

      </div>
  );
};


