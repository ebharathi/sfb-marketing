"use client";

import { useState, type FormEvent, type ReactNode } from "react";

const fieldClass =
  "rounded-[11px] border border-ink/20 bg-background px-3.5 py-3 text-base text-ink placeholder:text-ink/35 outline-none focus:outline-2 focus:outline-green focus:outline-offset-1";
const labelClass =
  "flex min-w-0 flex-col gap-1.5 text-[13px] font-semibold tracking-[0.04em] text-ink/65 uppercase";

function Field({
  label,
  children,
  span = false,
}: {
  label: string;
  children: ReactNode;
  span?: boolean;
}) {
  return (
    <label className={`${labelClass} ${span ? "sm:col-span-2" : ""}`}>
      {label}
      {children}
    </label>
  );
}

function Section({
  step,
  title,
  children,
}: {
  step: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-[22px] border border-ink/10 bg-white p-6 sm:p-8">
      <div className="mb-5 flex items-baseline gap-3">
        <div className="font-display text-sm tracking-[0.1em] text-green">
          {step}
        </div>
        <h2 className="m-0 font-display text-2xl uppercase">{title}</h2>
      </div>
      {children}
    </div>
  );
}

const BRANDS = ["Snaxzastic", "Crespology", "Both"] as const;
const VOLUMES = [
  "Under ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000 – ₹5,00,000",
  "Above ₹5,00,000",
];

export function DistributorForm() {
  const [submitted, setSubmitted] = useState(false);
  const [brand, setBrand] = useState<(typeof BRANDS)[number]>("Both");
  const [licence, setLicence] = useState("");
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!consent) {
      setError("Please tick the consent box so our team can contact you.");
      return;
    }
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-4.5 rounded-[26px] border-[1.5px] border-green bg-white p-8 sm:p-14">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green text-2xl text-background">
          &#10003;
        </div>
        <h2 className="m-0 font-display text-3xl uppercase leading-none sm:text-5xl">
          Enquiry received
        </h2>
        <p className="m-0 max-w-xl text-lg leading-relaxed text-ink/70">
          Your details have gone to our internal approval queue for manual
          review. A regional sales lead will call you on the number you gave
          us, usually within two working days. Approved partners get a login
          for catalog, pricing and net terms.
        </p>
        <div className="mt-2 flex flex-wrap gap-3">
          <a
            href="/"
            className="inline-flex items-center rounded-full bg-ink px-6.5 py-3.5 text-[15px] font-semibold text-background transition-colors hover:bg-green"
          >
            Back to home
          </a>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setConsent(false);
            }}
            className="rounded-full border-[1.5px] border-ink/24 bg-transparent px-6.5 py-3.5 text-[15px] font-semibold text-ink transition-colors hover:bg-ink/6"
          >
            Submit another enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_300px]">
      <form onSubmit={handleSubmit} className="flex min-w-0 flex-col gap-5">
        <Section step="01" title="Business identity">
          <div className="grid grid-cols-1 gap-4.5 sm:grid-cols-2">
            <Field label="Business / firm name *">
              <input required name="business" placeholder="e.g. Sharma Agencies" className={fieldClass} />
            </Field>
            <Field label="Contact person name *">
              <input required name="person" placeholder="Full name" className={fieldClass} />
            </Field>
            <Field label="Designation">
              <select name="designation" defaultValue="Owner" className={fieldClass}>
                <option>Owner</option>
                <option>Manager</option>
                <option>Partner</option>
              </select>
            </Field>
            <Field label="Email address *">
              <input required type="email" name="email" placeholder="name@company.com" className={fieldClass} />
            </Field>
            <Field label="Mobile number *">
              <input required type="tel" name="mobile" placeholder="+91" className={fieldClass} />
            </Field>
            <Field label="GSTIN">
              <input name="gstin" placeholder="15-digit GSTIN" className={`${fieldClass} uppercase`} />
            </Field>
          </div>
          <label className="mt-4.5 flex cursor-pointer items-center gap-2.5 text-[15px] text-ink/72">
            <input type="checkbox" name="whatsapp" defaultChecked className="h-[19px] w-[19px] accent-green" />
            Reach me on WhatsApp for order and dispatch updates
          </label>
        </Section>

        <Section step="02" title="Territory & operations">
          <div className="grid grid-cols-1 gap-4.5 sm:grid-cols-3">
            <Field label="State *">
              <input required name="state" placeholder="e.g. Maharashtra" className={fieldClass} />
            </Field>
            <Field label="City / town *">
              <input required name="city" placeholder="e.g. Nashik" className={fieldClass} />
            </Field>
            <Field label="Pin code *">
              <input required name="pincode" placeholder="6 digits" className={fieldClass} />
            </Field>
          </div>
          <div className="mt-4.5">
            <Field label="Areas served / route coverage">
              <textarea
                name="coverage"
                rows={3}
                placeholder="Towns, routes and outlet types you currently cover"
                className={`${fieldClass} resize-y`}
              />
            </Field>
          </div>
          <div className="mt-4.5 grid grid-cols-1 gap-4.5 sm:grid-cols-2">
            <Field label="Warehouse / godown available">
              <select name="warehouse" defaultValue="Yes" className={fieldClass}>
                <option>Yes</option>
                <option>No</option>
              </select>
            </Field>
            <Field label="Sales staff / SRs on payroll">
              <input type="number" min={0} name="srs" placeholder="0" className={fieldClass} />
            </Field>
          </div>
        </Section>

        <Section step="03" title="Trade profile">
          <div className="mb-2.5 text-[13px] font-semibold tracking-[0.04em] text-ink/65 uppercase">
            Brands of interest
          </div>
          <div className="mb-5 flex flex-wrap gap-2.5">
            {BRANDS.map((b) => (
              <button
                key={b}
                type="button"
                onClick={() => setBrand(b)}
                className={`rounded-full px-5.5 py-3 text-[15px] font-semibold transition-colors ${
                  brand === b
                    ? "border-[1.5px] border-green bg-green text-background"
                    : "border-[1.5px] border-ink/22 bg-transparent text-ink"
                }`}
              >
                {b}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-4.5 sm:grid-cols-2">
            <Field label="Monthly purchase estimate">
              <select name="volume" defaultValue={VOLUMES[1]} className={fieldClass}>
                {VOLUMES.map((v) => (
                  <option key={v}>{v}</option>
                ))}
              </select>
            </Field>
            <Field label="Preferred payment terms">
              <select name="terms" defaultValue="Advance" className={fieldClass}>
                <option>Advance</option>
                <option>Credit</option>
                <option>COD</option>
              </select>
            </Field>
          </div>
        </Section>

        <Section step="04" title="Compliance">
          <div className="grid grid-cols-1 gap-4.5 sm:grid-cols-2">
            <Field label="FSSAI license number">
              <input name="fssai" placeholder="14-digit licence" className={fieldClass} />
            </Field>
            <Field label="Trade licence / shop establishment proof">
              <input
                type="file"
                name="licence"
                onChange={(e) => setLicence(e.target.files?.[0]?.name ?? "")}
                className={`${fieldClass} border-dashed py-2.5 text-sm`}
              />
            </Field>
          </div>
          <label className="mt-5 flex cursor-pointer items-start gap-2.5 text-[15px] leading-relaxed text-ink/72">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => {
                setConsent(e.target.checked);
                setError("");
              }}
              className="mt-0.5 h-[19px] w-[19px] accent-green"
            />
            I agree to be contacted by the SFB sales team about this enquiry.
          </label>
        </Section>

        <div className="flex flex-wrap items-center gap-4.5 pt-1">
          <button
            type="submit"
            className="rounded-full bg-green px-8 py-4 text-base font-bold text-background transition-colors hover:bg-green-dark"
          >
            Submit enquiry &rarr;
          </button>
          <div className="text-sm text-ink/55">
            {error || (licence ? `Attached: ${licence}` : "Reviewed manually, no automatic approvals.")}
          </div>
        </div>
      </form>

      <div className="flex flex-col gap-4 lg:sticky lg:top-24">
        <div className="rounded-[22px] bg-green p-7 text-background">
          <div className="mb-4 text-[11px] font-bold tracking-[0.2em] text-snax-400 uppercase">
            What happens next
          </div>
          <div className="flex flex-col gap-4 text-[15px] leading-snug">
            <div className="flex gap-3">
              <span className="font-display text-snax-400">1</span>
              <span>Your enquiry enters our internal approval queue.</span>
            </div>
            <div className="flex gap-3">
              <span className="font-display text-snax-400">2</span>
              <span>A regional sales lead verifies coverage and calls you.</span>
            </div>
            <div className="flex gap-3">
              <span className="font-display text-snax-400">3</span>
              <span>On approval you get a login for catalog, pricing and net terms.</span>
            </div>
          </div>
        </div>
        <div className="rounded-[22px] border border-ink/10 bg-white p-7 text-sm leading-relaxed text-ink/65">
          <div className="mb-2.5 text-[15px] font-bold text-ink">
            Prefer to talk first?
          </div>
          <a href="tel:+919876543210" className="mb-1 block">
            +91 98765 43210
          </a>
          <a href="mailto:hello@sfb-demo.com">hello@sfb-demo.com</a>
        </div>
      </div>
    </div>
  );
}
