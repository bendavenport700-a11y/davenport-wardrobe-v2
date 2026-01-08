"use client";

import React from "react";
import Link from "next/link";

type FormData = {
  ageRange: string;
  status: string;
  styleFrequency: string;
  clothingSources: string[];
  shoppingFriction: string;
  rarelyWorn: string;
  regularWearCount: string;
  wearChange: string;
  clutterRegret: string;
  sustainabilityShift: string;
  sustainabilityPriority: string;
  considerUse: string;
  concerns: string;
  appeal: string;
  joinWaitlist: boolean;
  email: string;
};

const initialFormData: FormData = {
  ageRange: "",
  status: "",
  styleFrequency: "",
  clothingSources: [],
  shoppingFriction: "",
  rarelyWorn: "",
  regularWearCount: "",
  wearChange: "",
  clutterRegret: "",
  sustainabilityShift: "",
  sustainabilityPriority: "",
  considerUse: "",
  concerns: "",
  appeal: "",
  joinWaitlist: false,
  email: "",
};

export default function SurveyPage() {
  const [step, setStep] = React.useState(0);
  const [submitted, setSubmitted] = React.useState(false);
  const [formData, setFormData] = React.useState<FormData>(initialFormData);

  const totalSteps = 6;

  const toggleSource = (value: string) => {
    setFormData((prev) => {
      const exists = prev.clothingSources.includes(value);
      return {
        ...prev,
        clothingSources: exists
          ? prev.clothingSources.filter((item) => item !== value)
          : [...prev.clothingSources, value],
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
          font-size: 0.98rem;
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
        }

        .option input {
          accent-color: #fff;
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

              {step === 0 && (
                <>
                  <h2 style={{ margin: 0 }}>About you</h2>
                  <p className="hint">
                    A few light questions to set the context. Skip anything you
                    prefer not to answer.
                  </p>
                  <div className="field">
                    <label htmlFor="ageRange">Age range</label>
                    <select
                      id="ageRange"
                      value={formData.ageRange}
                      onChange={(event) =>
                        setFormData((prev) => ({
                          ...prev,
                          ageRange: event.target.value,
                        }))
                      }
                    >
                      <option value="">Select one</option>
                      <option value="under-18">Under 18</option>
                      <option value="18-20">18 to 20</option>
                      <option value="21-24">21 to 24</option>
                      <option value="25-29">25 to 29</option>
                      <option value="30-39">30 to 39</option>
                      <option value="40-plus">40 or older</option>
                      <option value="prefer-not">Prefer not to say</option>
                    </select>
                  </div>
                  <div className="field">
                    <label htmlFor="status">Which best describes you today</label>
                    <select
                      id="status"
                      value={formData.status}
                      onChange={(event) =>
                        setFormData((prev) => ({
                          ...prev,
                          status: event.target.value,
                        }))
                      }
                    >
                      <option value="">Select one</option>
                      <option value="student">Student</option>
                      <option value="working-full">Working full time</option>
                      <option value="working-part">Working part time</option>
                      <option value="self-employed">Self employed</option>
                      <option value="other">Other</option>
                      <option value="prefer-not">Prefer not to say</option>
                    </select>
                  </div>
                  <div className="field">
                    <label htmlFor="styleFrequency">
                      How often do you think about what you wear
                    </label>
                    <select
                      id="styleFrequency"
                      value={formData.styleFrequency}
                      onChange={(event) =>
                        setFormData((prev) => ({
                          ...prev,
                          styleFrequency: event.target.value,
                        }))
                      }
                    >
                      <option value="">Select one</option>
                      <option value="rarely">Rarely</option>
                      <option value="sometimes">Sometimes</option>
                      <option value="often">Often</option>
                      <option value="daily">Almost daily</option>
                    </select>
                  </div>
                </>
              )}

              {step === 1 && (
                <>
                  <h2 style={{ margin: 0 }}>Clothing habits</h2>
                  <p className="hint">
                    We want to understand how you currently get clothes and
                    where it feels hard.
                  </p>
                  <div className="field">
                    <label>How do you usually get clothes</label>
                    <div className="optionRow">
                      {[
                        "I shop online",
                        "I shop in store",
                        "Gifts or hand me downs",
                        "Holiday or event shopping",
                        "I rarely shop",
                        "Other",
                      ].map((option) => (
                        <label key={option} className="option">
                          <input
                            type="checkbox"
                            checked={formData.clothingSources.includes(option)}
                            onChange={() => toggleSource(option)}
                          />
                          {option}
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="field">
                    <label>How often does shopping feel inconvenient</label>
                    <div className="optionRow">
                      {["Never", "Sometimes", "Often", "Almost always"].map(
                        (option) => (
                          <label key={option} className="option">
                            <input
                              type="radio"
                              name="shoppingFriction"
                              value={option}
                              checked={formData.shoppingFriction === option}
                              onChange={(event) =>
                                setFormData((prev) => ({
                                  ...prev,
                                  shoppingFriction: event.target.value,
                                }))
                              }
                            />
                            {option}
                          </label>
                        )
                      )}
                    </div>
                  </div>
                  <div className="field">
                    <label>Have you bought clothes you rarely wear</label>
                    <div className="optionRow">
                      {["Yes", "No", "Not sure"].map((option) => (
                        <label key={option} className="option">
                          <input
                            type="radio"
                            name="rarelyWorn"
                            value={option}
                            checked={formData.rarelyWorn === option}
                            onChange={(event) =>
                              setFormData((prev) => ({
                                ...prev,
                                rarelyWorn: event.target.value,
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
                  <h2 style={{ margin: 0 }}>The reality of wear</h2>
                  <p className="hint">
                    A quick reflection on what actually gets worn.
                  </p>
                  <div className="field">
                    <label htmlFor="regularWearCount">
                      About how many items do you wear regularly
                    </label>
                    <select
                      id="regularWearCount"
                      value={formData.regularWearCount}
                      onChange={(event) =>
                        setFormData((prev) => ({
                          ...prev,
                          regularWearCount: event.target.value,
                        }))
                      }
                    >
                      <option value="">Select one</option>
                      <option value="10-15">10 to 15</option>
                      <option value="16-25">16 to 25</option>
                      <option value="26-40">26 to 40</option>
                      <option value="40-plus">More than 40</option>
                      <option value="not-sure">Not sure</option>
                    </select>
                  </div>
                  <div className="field">
                    <label>
                      Most quality clothes look and feel similar after a few
                      wears or washes
                    </label>
                    <div className="optionRow">
                      {["Agree", "Somewhat agree", "Not sure", "Disagree"].map(
                        (option) => (
                          <label key={option} className="option">
                            <input
                              type="radio"
                              name="wearChange"
                              value={option}
                              checked={formData.wearChange === option}
                              onChange={(event) =>
                                setFormData((prev) => ({
                                  ...prev,
                                  wearChange: event.target.value,
                                }))
                              }
                            />
                            {option}
                          </label>
                        )
                      )}
                    </div>
                  </div>
                  <div className="field">
                    <label>Have you experienced closet clutter or regret</label>
                    <div className="optionRow">
                      {["Yes", "Sometimes", "No"].map((option) => (
                        <label key={option} className="option">
                          <input
                            type="radio"
                            name="clutterRegret"
                            value={option}
                            checked={formData.clutterRegret === option}
                            onChange={(event) =>
                              setFormData((prev) => ({
                                ...prev,
                                clutterRegret: event.target.value,
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

              {step === 3 && (
                <>
                  <h2 style={{ margin: 0 }}>Sustainability</h2>
                  <p className="hint">
                    Fast fashion favors speed and volume. It often leaves
                    clothing underused and pushes resources harder than needed.
                    We are exploring a more thoughtful way to access style.
                  </p>
                  <div className="field">
                    <label>Does this change how you think about clothing</label>
                    <div className="optionRow">
                      {["Yes", "Somewhat", "Not really"].map((option) => (
                        <label key={option} className="option">
                          <input
                            type="radio"
                            name="sustainabilityShift"
                            value={option}
                            checked={formData.sustainabilityShift === option}
                            onChange={(event) =>
                              setFormData((prev) => ({
                                ...prev,
                                sustainabilityShift: event.target.value,
                              }))
                            }
                          />
                          {option}
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="field">
                    <label>Does sustainability matter when you shop</label>
                    <div className="optionRow">
                      {[
                        "Very much",
                        "Somewhat",
                        "Not a priority",
                        "It depends",
                      ].map((option) => (
                        <label key={option} className="option">
                          <input
                            type="radio"
                            name="sustainabilityPriority"
                            value={option}
                            checked={formData.sustainabilityPriority === option}
                            onChange={(event) =>
                              setFormData((prev) => ({
                                ...prev,
                                sustainabilityPriority: event.target.value,
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

              {step === 4 && (
                <>
                  <h2 style={{ margin: 0 }}>Davenport Wardrobe</h2>
                  <p className="hint">
                    Davenport Wardrobe is a wardrobe access and rotation
                    platform. You choose curated wardrobes or individual pieces,
                    see condition before they ship, then rotate, keep, or buy.
                    It is not a traditional rental service, and ownership is
                    always your choice.
                  </p>
                  <div className="field">
                    <label>Would you consider using a service like this</label>
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
                    <label htmlFor="concerns">
                      What questions or concerns do you have
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
                  <div className="field">
                    <label htmlFor="appeal">
                      What would make this more appealing
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
                </>
              )}

              {step === 5 && (
                <>
                  <h2 style={{ margin: 0 }}>Optional waitlist</h2>
                  <p className="hint">
                    If you want early access, share an email. This is optional,
                    and we only reach out about Davenport Wardrobe.
                  </p>
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
                </>
              )}

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
