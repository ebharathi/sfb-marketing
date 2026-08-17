"use client";

import { useState, type FormEvent } from "react";

const fieldClass =
  "w-full rounded-xl border border-ink-950/12 bg-white px-4 py-3 text-sm text-ink-950 placeholder:text-ink-950/35 outline-none transition-colors focus:border-ink-950/40";
const labelClass = "text-xs font-bold uppercase tracking-wide text-ink-950/50";

function Field({
  label,
  children,
  span = false,
}: {
  label: string;
  children: React.ReactNode;
  span?: boolean;
}) {
  return (
    <label className={`flex flex-col gap-2 ${span ? "sm:col-span-2" : ""}`}>
      <span className={labelClass}>{label}</span>
      {children}
    </label>
  );
}

function SectionCard({
  step,
  title,
  children,
}: {
  step: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-ink-950/8 sm:p-8">
      <div className="flex items-center gap-3">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink-950 text-xs font-bold text-white">
          {step}
        </span>
        <h2 className="font-display text-lg font-bold text-ink-950">
          {title}
        </h2>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {children}
      </div>
    </div>
  );
}

export function DistributorForm() {
  const [submitted, setSubmitted] = useState(false);
  const [brand, setBrand] = useState<"Snaxzastic" | "Crespology" | "Both">(
    "Both",
  );
  const [warehouse, setWarehouse] = useState<"Yes" | "No">("Yes");
  const [terms, setTerms] = useState<"Advance" | "Credit" | "COD">("Advance");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  if (submitted) {
    return (
      <div className="mt-10 rounded-2xl bg-white p-10 text-center shadow-sm ring-1 ring-ink-950/8">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-snax-500 to-cresp-500 text-2xl font-bold text-white">
          ✓
        </span>
        <h2 className="mt-5 font-display text-2xl font-extrabold text-ink-950">
          Enquiry received
        </h2>
        <p className="mt-2 text-ink-950/70">
          Thanks for your interest in distributing Snaxzastic and Crespology.
          Our team will review your details and reach out with catalog,
          pricing, and terms.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-6">
      <SectionCard step="1" title="Business identity">
        <Field label="Business / firm name">
          <input required className={fieldClass} name="businessName" />
        </Field>
        <Field label="Contact person name">
          <input required className={fieldClass} name="contactName" />
        </Field>
        <Field label="Designation">
          <select required className={fieldClass} name="designation" defaultValue="">
            <option value="" disabled>
              Select
            </option>
            <option>Owner</option>
            <option>Manager</option>
            <option>Partner</option>
          </select>
        </Field>
        <Field label="GSTIN">
          <input required className={fieldClass} name="gstin" />
        </Field>
        <Field label="Mobile number">
          <input required type="tel" className={fieldClass} name="mobile" />
        </Field>
        <Field label="Email address">
          <input required type="email" className={fieldClass} name="email" />
        </Field>
        <div className="sm:col-span-2">
          <label className="flex items-center gap-2 text-sm text-ink-950/70">
            <input
              type="checkbox"
              name="whatsappOptIn"
              className="h-4 w-4 rounded border-ink-950/25"
            />
            This number is on WhatsApp, contact me there
          </label>
        </div>
      </SectionCard>

      <SectionCard step="2" title="Territory & operations">
        <Field label="State">
          <input required className={fieldClass} name="state" />
        </Field>
        <Field label="City / town">
          <input required className={fieldClass} name="city" />
        </Field>
        <Field label="Pin code">
          <input required className={fieldClass} name="pinCode" />
        </Field>
        <Field label="Sales staff / SRs on payroll">
          <input type="number" min={0} className={fieldClass} name="srCount" />
        </Field>
        <Field label="Current area(s) served / route coverage" span>
          <textarea rows={3} className={fieldClass} name="coverage" />
        </Field>
        <div className="sm:col-span-2">
          <span className={labelClass}>Warehouse / godown available?</span>
          <div className="mt-2 flex gap-3">
            {(["Yes", "No"] as const).map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => setWarehouse(opt)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  warehouse === opt
                    ? "bg-ink-950 text-white"
                    : "bg-ink-950/5 text-ink-950/60 hover:bg-ink-950/10"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      </SectionCard>

      <SectionCard step="3" title="Trade profile">
        <div className="sm:col-span-2">
          <span className={labelClass}>Preferred brand(s) of interest</span>
          <div className="mt-2 flex flex-wrap gap-3">
            {(["Snaxzastic", "Crespology", "Both"] as const).map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => setBrand(opt)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  brand === opt
                    ? "bg-ink-950 text-white"
                    : "bg-ink-950/5 text-ink-950/60 hover:bg-ink-950/10"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
        <Field label="Monthly purchase volume estimate (in rupees)">
          <input
            className={fieldClass}
            name="volumeEstimate"
            placeholder="e.g. 1,00,000 to 2,00,000"
          />
        </Field>
        <Field label="Preferred payment terms">
          <div className="flex flex-wrap gap-3 pt-1">
            {(["Advance", "Credit", "COD"] as const).map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => setTerms(opt)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  terms === opt
                    ? "bg-ink-950 text-white"
                    : "bg-ink-950/5 text-ink-950/60 hover:bg-ink-950/10"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </Field>
      </SectionCard>

      <SectionCard step="4" title="Compliance & close">
        <Field label="FSSAI license number">
          <input required className={fieldClass} name="fssai" />
        </Field>
        <Field label="Trade license / shop establishment proof">
          <input type="file" className={`${fieldClass} py-2.5`} name="proof" />
        </Field>
        <div className="sm:col-span-2">
          <label className="flex items-start gap-2 text-sm text-ink-950/70">
            <input
              required
              type="checkbox"
              name="consent"
              className="mt-0.5 h-4 w-4 rounded border-ink-950/25"
            />
            I agree to be contacted by the SFB sales team regarding this
            enquiry.
          </label>
        </div>
      </SectionCard>

      <button
        type="submit"
        className="mt-2 w-full rounded-full bg-gradient-to-r from-snax-500 to-cresp-500 px-7 py-4 text-sm font-bold text-ink-950 shadow-lg transition-transform hover:scale-[1.01] active:scale-[0.99] sm:w-fit"
      >
        Submit distributor enquiry
      </button>
    </form>
  );
}
