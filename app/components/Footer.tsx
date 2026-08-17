const POLICY_LINKS = ["Refund Policy", "Privacy Policy", "Terms of Use", "Shipping Policy"];

export function Footer() {
  return (
    <footer id="contact" className="bg-white py-14 text-ink-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 border-b border-ink-950/10 pb-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-lg font-extrabold">SFB</p>
            <p className="mt-2 text-sm text-ink-950/60">
              Slayd Foods Bharat Pvt. Ltd., home to Snaxzastic and
              Crespology.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-ink-950/40">
              Brands
            </p>
            <ul className="mt-3 space-y-2 text-sm text-ink-950/70">
              <li>
                <a href="/#snaxzastic" className="hover:text-ink-950">
                  Snaxzastic
                </a>
              </li>
              <li>
                <a href="/#crespology" className="hover:text-ink-950">
                  Crespology
                </a>
              </li>
              <li>
                <a href="/distributor" className="hover:text-ink-950">
                  Become a Distributor
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-ink-950/40">
              Policies
            </p>
            <ul className="mt-3 space-y-2 text-sm text-ink-950/70">
              {POLICY_LINKS.map((link) => (
                <li key={link}>
                  <span className="cursor-default">{link}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-ink-950/40">
              Compliance & Contact
            </p>
            <ul className="mt-3 space-y-1.5 text-sm text-ink-950/70">
              <li>CIN: [pending, confirm with legal]</li>
              <li>Grievance Officer: [pending, confirm with legal]</li>
              <li>
                Plant: J261/5 MIDC, Tarapur, Boisar, Palghar, Maharashtra
                401506
              </li>
              <li>
                <a href="tel:+918005526727" className="hover:text-ink-950">
                  +91 80055 26727
                </a>
              </li>
              <li>
                <a
                  href="mailto:sales@slaydfoods.com"
                  className="hover:text-ink-950"
                >
                  sales@slaydfoods.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="pt-6 text-xs text-ink-950/40">
          © {new Date().getFullYear()} Slayd Foods Bharat Pvt. Ltd. Demo site.
          Content and compliance details are placeholders pending client
          confirmation.
        </p>
      </div>
    </footer>
  );
}
