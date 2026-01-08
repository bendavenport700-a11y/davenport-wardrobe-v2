"use client";

import React from "react";
import Link from "next/link";

type FormData = {
  aboutYou: string;
  styleMindset: string;
  shoppingFeelings: string[];
  usageHabits: string[];
  sustainabilityMatters: string;
  considerUse: string;
  appeal: string;
  concerns: string;
  joinWaitlist: boolean;
  email: string;
};

const initialFormData: FormData = {
  aboutYou: "",
  styleMindset: "",
  shoppingFeelings: [],
  usageHabits: [],
  sustainabilityMatters: "",
  considerUse: "",
  appeal: "",
  concerns: "",
  joinWaitlist: false,
  email: "",
};

export default function SurveyPage() {
  const [step, setStep] = React.useState(0);
  const [submitted, setSubmitted] = React.useState(false);
  const [formData, setFormData] = React.useState<FormData>(initialFormData);

  const totalSteps = 9;

  const toggleSelection = (
    list: "shoppingFeelings" | "usageHabits",
    value: string
  ) => {
    setFormData((prev) => {
      const exists = prev[list].includes(value);
      return {
        ...prev,
        [list]: exists
          ? prev[list].filter((item) => item !== value)
          : [...prev[list], value],
      };
    });
  };

  const handleNext = (event: React.FormEvent) => {
    event.preventDefault();
    if (step < totalSteps - 1) {
      setStep((prev) => prev + 1);
      return;
    }
    setSubmitted(true);
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 0));
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(900px 600px at 20% -10%, rgba(255,255,255,0.08), transparent 60%), radial-gradient(900px 600px at 90% 10%, rgba(255,255,255,0.05), transparent 55%), #060607",
        color: "#f1f1f1",
        padding: "120px 24px 140px",
        fontFamily: "'Inter', 'SF Pro Display', system-ui, sans-serif",
      }}
    >
      <style>{`
        .container {
          max-width: 860px;
          margin: 0 auto;
        }

        .card {
          background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02));
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 20px;
          padding: 28px;
          display: grid;
          gap: 18px;
          box-shadow: 0 24px 50px rgba(0,0,0,0.28);
        }

        .progressTrack {
          height: 6px;
          border-radius: 999px;
          background: rgba(255,255,255,0.08);
          overflow: hidden;
        }

        .progressFill {
          height: 100%;
          border-radius: inherit;
          background: linear-gradient(90deg, rgba(255,255,255,0.8), rgba(255,255,255,0.35));
          transition: width 0.4s ease;
        }

        .eyebrow {
          letter-spacing: 0.3em;
          text-transform: uppercase;
          font-size: 0.7rem;
          opacity: 0.6;
        }

        h1 {
          font-size: clamp(2.4rem, 5vw, 3.2rem);
          margin: 8px 0 8px;
          font-weight: 600;
          letter-spacing: -0.02em;
        }

        .lede {
          opacity: 0.78;
          line-height: 1.7;
          font-size: 1.05rem;
          max-width: 680px;
        }

        .stepMeta {
          font-size: 0.92rem;
          opacity: 0.6;
        }

        .field {
          display: grid;
          gap: 8px;
        }

        label {
          font-weight: 600;
          font-size: 1.05rem;
        }

        select, input[type="text"], input[type="email"], textarea {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.16);
          border-radius: 12px;
          padding: 12px 14px;
          color: #fff;
          font-size: 1rem;
        }

        textarea {
          min-height: 110px;
          resize: vertical;
        }

        .optionRow {
          display: grid;
          gap: 10px;
        }

        .option {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 12px;
          border-radius: 12px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          transition: border-color 0.2s ease, background 0.2s ease;
        }

        .option input {
          accent-color: #fff;
        }

        .option:hover {
          border-color: rgba(255,255,255,0.26);
          background: rgba(255,255,255,0.07);
        }

        .sectionTitle {
          font-size: 1.35rem;
          font-weight: 600;
          margin: 0;
        }

        .bulletList {
          margin: 0;
          padding-left: 18px;
          display: grid;
          gap: 8px;
          color: rgba(255,255,255,0.82);
          line-height: 1.6;
        }

        .actions {
          display: flex;
          gap: 12px;
          justify-content: space-between;
          flex-wrap: wrap;
          margin-top: 6px;
        }

        .btnPrimary {
          background: #ffffff;
          color: #0b0b0c;
          padding: 12px 22px;
          border-radius: 12px;
          font-weight: 600;
          border: none;
          cursor: pointer;
        }

        .btnGhost {
          padding: 12px 20px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.22);
          background: rgba(255,255,255,0.04);
          font-weight: 600;
          color: #fff;
          cursor: pointer;
        }

        .hint {
          opacity: 0.65;
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .callout {
          border-radius: 16px;
          padding: 18px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.18);
          display: grid;
          gap: 10px;
        }

        .waitlistCallout {
          border-radius: 18px;
          padding: 20px;
          background: linear-gradient(140deg, rgba(255,255,255,0.14), rgba(255,255,255,0.04));
          border: 1px solid rgba(255,255,255,0.28);
          box-shadow: 0 18px 40px rgba(0,0,0,0.28);
          display: grid;
          gap: 12px;
        }

        .stepFade {
          animation: stepFade 0.35s ease;
        }

        @keyframes stepFade {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .thankYou {
          display: grid;
          gap: 14px;
          text-align: left;
        }
      `}</style>

      <div className="container">
        <span className="eyebrow">Survey</span>
        <h1>Help shape Davenport Wardrobe</h1>
        <p className="lede">
          A short, calm survey to understand your needs and improve the way
          people access a premium wardrobe. Responses are anonymous by default,
          and email is optional at the end.
        </p>

        <div className="card">
          {submitted ? (
            <div className="thankYou">
              <div className="stepMeta">Thank you</div>
              <h2 style={{ margin: 0, fontSize: "1.8rem" }}>
                Your feedback is received
              </h2>
              <p className="hint">
                We will use these insights to build a clearer, calmer wardrobe
                experience. You can continue exploring Davenport Wardrobe at
                your own pace.
              </p>
              <div className="actions">
                <Link href="/" className="btnPrimary">
                  Continue exploring
                </Link>
                <Link href="/wardrobes" className="btnGhost">
                  Explore wardrobes
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleNext}>
              <div className="stepMeta">
                Step {step + 1} of {totalSteps}
              </div>
              <div className="progressTrack" aria-hidden="true">
                <div
                  className="progressFill"
                  style={{ width: `${((step + 1) / totalSteps) * 100}%` }}
                />
              </div>

              <div key={step} className="stepFade">
                {step === 0 && (
                  <>
                    <h2 className="sectionTitle">About you</h2>
                    <p className="hint">
                      This is light and optional. Share only what feels right.
                    </p>
                    <div className="field">
                      <label>Which best describes you</label>
                      <div className="optionRow">
                        {[
                          "Student",
                          "Parent",
                          "Young professional",
                          "Recent graduate",
                          "Other",
                        ].map((option) => (
                          <label key={option} className="option">
                            <input
                              type="radio"
                              name="aboutYou"
                              value={option}
                              checked={formData.aboutYou === option}
                              onChange={(event) =>
                                setFormData((prev) => ({
                                  ...prev,
                                  aboutYou: event.target.value,
                                }))
                              }
                            />
                            {option}
                          </label>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {step === 1 && (
                  <>
                    <h2 className="sectionTitle">How you think about clothes</h2>
                    <p className="hint">
                      This helps us understand what matters most to you.
                    </p>
                    <div className="field">
                      <label>Do you think about clothes on a regular basis</label>
                      <div className="optionRow">
                        {[
                          "Yes, it is something I care about",
                          "Sometimes, depending on the situation",
                          "Not really, I just want it to be easy",
                        ].map((option) => (
                          <label key={option} className="option">
                            <input
                              type="radio"
                              name="styleMindset"
                              value={option}
                              checked={formData.styleMindset === option}
                              onChange={(event) =>
                                setFormData((prev) => ({
                                  ...prev,
                                  styleMindset: event.target.value,
                                }))
                              }
                            />
                            {option}
                          </label>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {step === 2 && (
                  <>
                    <h2 className="sectionTitle">Shopping friction</h2>
                    <p className="hint">
                      Choose what feels true. Select all that apply.
                    </p>
                    <div className="field">
                      <label>How does clothes shopping usually feel</label>
                      <div className="optionRow">
                        {[
                          "A hassle",
                          "A waste of time",
                          "Stressful or overwhelming",
                          "Enjoyable",
                          "Something I put off as long as possible",
                        ].map((option) => (
                          <label key={option} className="option">
                            <input
                              type="checkbox"
                              checked={formData.shoppingFeelings.includes(option)}
                              onChange={() =>
                                toggleSelection("shoppingFeelings", option)
                              }
                            />
                            {option}
                          </label>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {step === 3 && (
                  <>
                    <h2 className="sectionTitle">How you actually use clothes</h2>
                    <p className="hint">
                      This section is about patterns, not perfection. Select all
                      that apply.
                    </p>
                    <div className="field">
                      <label>Which of these sounds like you</label>
                      <div className="optionRow">
                        {[
                          "I rotate the same core pieces most weeks",
                          "I buy clothes mainly for specific events or occasions",
                          "I replace items when they wear out or go out of style",
                          "I own more clothes than I regularly wear",
                          "I often forget about pieces I already own",
                        ].map((option) => (
                          <label key={option} className="option">
                            <input
                              type="checkbox"
                              checked={formData.usageHabits.includes(option)}
                              onChange={() => toggleSelection("usageHabits", option)}
                            />
                            {option}
                          </label>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {step === 4 && (
                  <>
                    <h2 className="sectionTitle">Sustainability context</h2>
                    <div className="callout">
                      <strong>
                        Fast fashion prioritizes speed and volume over longevity.
                      </strong>
                      <ul className="bulletList">
                        <li>
                          Billions of garments are produced each year, and many
                          are worn only a few times before being discarded.
                        </li>
                        <li>
                          The system consumes enormous water and energy, creates
                          mountains of textile waste, and releases microplastics
                          into rivers and oceans as synthetic fabrics shed.
                        </li>
                        <li>
                          Fashion is one of the most polluting industries on the
                          planet.
                        </li>
                        <li>
                          The equivalent of a truckload of textiles is landfilled
                          or burned every second.
                        </li>
                        <li>
                          The result is clothing treated as disposable, even when
                          quality pieces could be used far longer.
                        </li>
                      </ul>
                      <div className="hint">
                        We believe access to clothing should be more thoughtful,
                        without sacrificing style or convenience.
                      </div>
                    </div>
                  </>
                )}

                {step === 5 && (
                  <>
                    <h2 className="sectionTitle">Sustainability</h2>
                    <div className="field">
                      <label>Does sustainability matter to you when shopping for clothes</label>
                      <div className="optionRow">
                        {["Yes", "Somewhat", "No"].map((option) => (
                          <label key={option} className="option">
                            <input
                              type="radio"
                              name="sustainabilityMatters"
                              value={option}
                              checked={formData.sustainabilityMatters === option}
                              onChange={(event) =>
                                setFormData((prev) => ({
                                  ...prev,
                                  sustainabilityMatters: event.target.value,
                                }))
                              }
                            />
                            {option}
                          </label>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {step === 6 && (
                  <>
                    <h2 className="sectionTitle">Davenport Wardrobe</h2>
                    <div className="callout">
                      <strong>
                        Davenport Wardrobe is a modern way to access clothing,
                        without constantly shopping or overbuying.
                      </strong>
                      <ul className="bulletList">
                        <li>
                          Instead of owning everything outright, you choose from
                          curated wardrobes or individual pieces.
                        </li>
                        <li>
                          Every item shows its condition before it ships, brand new
                          or lightly worn.
                        </li>
                        <li>
                          You wear what fits your life, rotate when your needs
                          change, and keep or buy what you love.
                        </li>
                        <li>
                          This is not a traditional rental service. Ownership is
                          always your choice.
                        </li>
                        <li>
                          The goal is flexibility, transparency, and better use of
                          premium clothing that already exists.
                        </li>
                      </ul>
                      <div className="hint">
                        It feels like a wardrobe that adapts to you, with clear
                        choices, refined styling, and a closet that stays light.
                      </div>
                    </div>
                  </>
                )}

                {step === 7 && (
                  <>
                    <h2 className="sectionTitle">Davenport Wardrobe</h2>
                    <div className="field">
                      <label>Would you consider using a service like Davenport Wardrobe</label>
                      <div className="optionRow">
                        {["Yes", "Maybe", "Not right now"].map((option) => (
                          <label key={option} className="option">
                            <input
                              type="radio"
                              name="considerUse"
                              value={option}
                              checked={formData.considerUse === option}
                              onChange={(event) =>
                                setFormData((prev) => ({
                                  ...prev,
                                  considerUse: event.target.value,
                                }))
                              }
                            />
                            {option}
                          </label>
                        ))}
                      </div>
                    </div>
                    <div className="field">
                      <label htmlFor="appeal">
                        What would make this most appealing to you
                      </label>
                      <textarea
                        id="appeal"
                        value={formData.appeal}
                        onChange={(event) =>
                          setFormData((prev) => ({
                            ...prev,
                            appeal: event.target.value,
                          }))
                        }
                        placeholder="Optional"
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="concerns">
                        Do you have any questions or concerns
                      </label>
                      <textarea
                        id="concerns"
                        value={formData.concerns}
                        onChange={(event) =>
                          setFormData((prev) => ({
                            ...prev,
                            concerns: event.target.value,
                          }))
                        }
                        placeholder="Optional"
                      />
                    </div>
                  </>
                )}

                {step === 8 && (
                  <>
                    <h2 className="sectionTitle">Want early access</h2>
                    <p className="hint">
                      If you want to be among the first to try Davenport
                      Wardrobe, leave your email below. This is optional, and
                      we only reach out with updates about Davenport Wardrobe.
                    </p>
                    <div className="waitlistCallout">
                      <label className="option">
                        <input
                          type="checkbox"
                          checked={formData.joinWaitlist}
                          onChange={(event) =>
                            setFormData((prev) => ({
                              ...prev,
                              joinWaitlist: event.target.checked,
                            }))
                          }
                        />
                        Yes, I want early access
                      </label>
                      <div className="field">
                        <label htmlFor="email">Email address</label>
                        <input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(event) =>
                            setFormData((prev) => ({
                              ...prev,
                              email: event.target.value,
                            }))
                          }
                          placeholder="Optional"
                        />
                      </div>
                      <div className="hint">
                        We respect your privacy. No spam, and no sharing.
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className="actions">
                <button
                  type="button"
                  className="btnGhost"
                  onClick={handleBack}
                  disabled={step === 0}
                  style={{ opacity: step === 0 ? 0.4 : 1 }}
                >
                  Back
                </button>
                <button type="submit" className="btnPrimary">
                  {step === totalSteps - 1 ? "Submit" : "Continue"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
