export function Footer() {
  return (
    <footer id="contact" className="bg-ink-2 px-4 pt-15 pb-10 text-background/70 sm:px-10">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <div className="mb-3.5 font-display text-2xl tracking-[0.18em] text-background">
            SFB
          </div>
          <p className="m-0 max-w-[280px] text-sm leading-relaxed">
            Slayd Foods Bharat Pvt. Ltd., home to Snaxzastic and Crespology.
          </p>
        </div>

        <div className="flex flex-col gap-2.5 text-sm">
          <div className="mb-1 font-semibold text-background">Brands</div>
          <a href="/snaxzastic" className="text-background/70">Snaxzastic</a>
          <a href="/crespology" className="text-background/70">Crespology</a>
          <a href="/distributor" className="text-background/70">Become a Distributor</a>
        </div>

        <div className="flex flex-col gap-2.5 text-sm">
          <div className="mb-1 font-semibold text-background">Policies</div>
          <a href="/refund" className="text-background/70">Refund Policy</a>
          <a href="/privacy" className="text-background/70">Privacy Policy</a>
          <a href="/terms" className="text-background/70">Terms of Use</a>
          <a href="/shipping" className="text-background/70">Shipping Policy</a>
        </div>

        <div className="flex flex-col gap-2.5 text-sm leading-relaxed">
          <div className="mb-1 font-semibold text-background">
            Compliance &amp; Contact
          </div>
          <div>CIN: [pending, confirm with legal]</div>
          <div>Grievance Officer: [pending, confirm with legal]</div>
          <div>
            Plant: J261/5 MIDC, Tarapur, Boisar, Palghar, Maharashtra 401506
          </div>
          <a href="tel:+919876543210" className="text-background/70">
            +91 98765 43210
          </a>
          <a href="mailto:hello@sfb-demo.com" className="text-background/70">
            hello@sfb-demo.com
          </a>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-[1400px] border-t border-background/14 pt-5.5 text-[13px] text-background/45">
        &copy; {new Date().getFullYear()} Slayd Foods Bharat Pvt. Ltd. Demo
        site. Content and compliance details are placeholders pending client
        confirmation.
      </div>
    </footer>
  );
}
