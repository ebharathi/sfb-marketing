import { ProductGrid } from "./ProductGrid";

export type Product = {
  name: string;
  note: string;
  image: string;
  hero?: boolean;
};

export const SNAX_PRODUCTS: Product[] = [
  { name: "Nimbu Pudina Roasted Chana", note: "Tangy lemon-mint, roasted right", image: "/products/p-nimbu-roasted-chana.png", hero: true },
  { name: "Nimbu Pudina Coated Peanuts", note: "Tangy lemon-mint coating", image: "/products/p-nimbu-coated-peanuts.png", hero: true },
  { name: "Masala Coated Peanuts", note: "Bold masala crunch", image: "/products/p-masala-coated-peanuts.png" },
  { name: "Marwari Magic Bhujia", note: "Classic namkeen crunch", image: "/products/p-bhujia.png" },
  { name: "Chatori Chana Dal", note: "Everyday roasted crunch", image: "/products/p-chana-dal.png" },
  { name: "Magic Moong Dal", note: "Classic roasted moong", image: "/products/p-moong-dal.png" },
  { name: "Crunch Masala Masti", note: "Party mix crunch", image: "/products/p-masala-masti.png" },
  { name: "Crunchi Plain", note: "Simple, light crunch", image: "/products/p-crunchi-plain.png" },
  { name: "Hotlami Ratlami Sev", note: "Spiced Ratlami-style sev", image: "/products/p-ratlami-sev.png" },
  { name: "Salted Roasted Peanuts", note: "Simple, salted crunch", image: "/products/p-roasted-peanuts-b.png" },
  { name: "Peri-Peri Spicy Wheels", note: "Bold peri-peri crunch", image: "/products/p-spicy-wheels.png" },
  { name: "Tangy Tomato Tikha Triangles", note: "Sharp tomato tang", image: "/products/p-tikha-triangles.png" },
  { name: "Mini Rings Twist Tadka", note: "Twisted ring crunch", image: "/products/p-twist-tadka.png" },
  { name: "Nimbu Pudina Roasted Peanuts", note: "Zesty roasted peanuts", image: "/products/p-roasted-peanuts-a.png" },
];

export const CRESP_PRODUCTS: Product[] = [
  { name: "Cheese Balls, Cheese & Herbs", note: "Rich, crafted crunch", image: "/products/p-cheeseballs-herbs.png", hero: true },
  { name: "Krunchit, Spanish Tomato", note: "Bold tomato, mid-crunch", image: "/products/p-krunchit-tomato.png", hero: true },
  { name: "Krunchit, K-Pop", note: "Sweet and spicy fusion", image: "/products/p-krunchit-kpop.png" },
  { name: "Cheese Balls, K-Pop Kick", note: "Cheesy with a spicy edge", image: "/products/p-cheeseballs-kpop.png" },
  { name: "Lime & Chilli Makhana", note: "Zesty, light crunch", image: "/products/p-makhana-king-chilli.png" },
  { name: "Peri-Peri Makhana", note: "Bold peri-peri fox nuts", image: "/products/p-makhana-peri-peri.png" },
  { name: "Pink Salt & Pepper Makhana", note: "Simple, crafted, clean", image: "/products/p-makhana-pink-salt-pepper.png" },
  { name: "Pudina Punch Makhana", note: "Fresh minty punch", image: "/products/p-makhana-pudina-punch.png" },
  { name: "Tangy Tomato Makhana", note: "Bold tomato, light crunch", image: "/products/p-makhana-tangy-tomato.png" },
  { name: "Cheese & Cream Cinema Popcorn", note: "Rich, movie-night favourite", image: "/products/p-popcorn-cheese-cream.png" },
  { name: "Cheese & Jalapeno Cinema Popcorn", note: "Sharp cheese, a hit of heat", image: "/products/p-popcorn-cheese-jalapeno.png" },
  { name: "Cream & Onion Cinema Popcorn", note: "Classic cinema flavour", image: "/products/p-popcorn-cream-onion.png" },
  { name: "Puffzilla, Lime & Pudina", note: "Zesty, oversized crunch", image: "/products/p-puffzilla-c.png" },
];

export const snaxTheme = {
  cardBg: "bg-white",
  cardBorder: "border-ink/10",
  cardHoverBorder: "hover:border-ink",
  heroBorder: "border-[1.5px] border-snax-400",
  heroGlow:
    "radial-gradient(circle at 50% 62%, rgba(242,196,56,0.3), rgba(242,196,56,0) 72%)",
  labelColor: "text-snax-label",
  noteColor: "text-ink/55",
  buttonBorder: "border-[1.5px] border-ink/24",
  buttonHover: "hover:bg-snax-400 hover:border-snax-400",
  buttonText: "text-ink",
};

export const crespTheme = {
  cardBg: "bg-cresp-card",
  cardBorder: "border-background/14",
  cardHoverBorder: "hover:border-background",
  heroBorder: "border-[1.5px] border-cresp-400",
  heroGlow:
    "radial-gradient(circle at 50% 62%, rgba(216,69,42,0.4), rgba(216,69,42,0) 72%)",
  labelColor: "text-cresp-label",
  noteColor: "text-background/55",
  buttonBorder: "border-[1.5px] border-background/3",
  buttonHover: "hover:bg-cresp-400 hover:border-cresp-400",
  buttonText: "text-background",
};

export function FlavourShowcase() {
  return (
    <>
      <section id="snaxzastic" className="mx-auto max-w-[1400px] px-4 pt-16 sm:px-10 sm:pt-24">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-6 border-b-[3px] border-snax-400 pb-5 sm:mb-8">
          <div>
            <div className="mb-2.5 text-xs font-bold tracking-[0.22em] text-snax-label uppercase">
              Snaxzastic &middot; Snacking Anywhere
            </div>
            <h2 className="m-0 font-display text-4xl uppercase leading-[0.95] sm:text-6xl">
              Roasted, not fried
            </h2>
          </div>
        </div>
        <ProductGrid
          products={SNAX_PRODUCTS}
          theme={snaxTheme}
          showAllLabel={`Show all ${SNAX_PRODUCTS.length} Snaxzastic flavours`}
          moreHref="/snaxzastic"
        />
      </section>

      <section
        id="crespology"
        className="mt-16 bg-cresp-bg py-16 text-background sm:mt-24 sm:py-24"
      >
        <div className="mx-auto max-w-[1400px] px-4 sm:px-10">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-6 border-b-[3px] border-cresp-400 pb-5 sm:mb-8">
            <div>
              <div className="mb-2.5 text-xs font-bold tracking-[0.22em] text-cresp-label uppercase">
                Crespology &middot; Crispy Vibes Only
              </div>
              <h2 className="m-0 font-display text-4xl uppercase leading-[0.95] text-background sm:text-6xl">
                The expert in crunch
              </h2>
            </div>
          </div>
          <ProductGrid
            products={CRESP_PRODUCTS}
            theme={crespTheme}
            showAllLabel={`Show all ${CRESP_PRODUCTS.length} Crespology flavours`}
            moreHref="/crespology"
          />
        </div>
      </section>
    </>
  );
}
