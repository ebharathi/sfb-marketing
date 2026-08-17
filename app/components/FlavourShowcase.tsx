import { Reveal } from "./Reveal";
import { ProductGrid } from "./ProductGrid";

type Product = {
  name: string;
  note: string;
  image: string;
};

type BrandSection = {
  id: string;
  brand: string;
  tagline: string;
  blurb: string;
  bg: string;
  chip: string;
  products: Product[];
};

const SECTIONS: BrandSection[] = [
  {
    id: "snaxzastic",
    brand: "Snaxzastic",
    tagline: "Snacking Anywhere",
    blurb:
      "Roasted, not fried. A tangy, everyday snack you can reach for wherever you are.",
    bg: "bg-snax-50",
    chip: "bg-snax-500 text-snax-900",
    products: [
      { name: "Marwari Magic Bhujia", note: "Classic namkeen crunch", image: "/products/p-bhujia.png" },
      { name: "Chatori Chana Dal", note: "Everyday roasted crunch", image: "/products/p-chana-dal.png" },
      { name: "Nimbu Pudina Coated Peanuts", note: "Tangy lemon-mint coating", image: "/products/p-nimbu-coated-peanuts.png" },
      { name: "Masala Coated Peanuts", note: "Bold masala crunch", image: "/products/p-masala-coated-peanuts.png" },
      { name: "Crunchi Plain", note: "Simple, light crunch", image: "/products/p-crunchi-plain.png" },
      { name: "Magic Moong Dal", note: "Classic roasted moong", image: "/products/p-moong-dal.png" },
      { name: "Crunch Masala Masti", note: "Party mix crunch", image: "/products/p-masala-masti.png" },
      { name: "Nimbu Pudina Roasted Chana", note: "Tangy lemon-mint, roasted right", image: "/products/p-nimbu-roasted-chana.png" },
      { name: "Hotlami Ratlami Sev", note: "Spiced Ratlami-style sev", image: "/products/p-ratlami-sev.png" },
      { name: "Nimbu Pudina Roasted Peanuts", note: "Zesty roasted peanuts", image: "/products/p-roasted-peanuts-a.png" },
      { name: "Salted Roasted Peanuts", note: "Simple, salted crunch", image: "/products/p-roasted-peanuts-b.png" },
      { name: "Peri-Peri Spicy Wheels", note: "Bold peri-peri crunch", image: "/products/p-spicy-wheels.png" },
      { name: "Tangy Tomato Tikha Triangles", note: "Sharp tomato tang", image: "/products/p-tikha-triangles.png" },
      { name: "Mini Rings Twist Tadka", note: "Twisted ring crunch", image: "/products/p-twist-tadka.png" },
    ],
  },
  {
    id: "crespology",
    brand: "Crespology",
    tagline: "Crispy Vibes Only",
    blurb: "Crafted, indulgent crunch. The expert in crunch.",
    bg: "bg-cresp-50",
    chip: "bg-cresp-500 text-white",
    products: [
      { name: "Krunchit, Spanish Tomato", note: "Bold tomato, mid-crunch", image: "/products/p-krunchit-tomato.png" },
      { name: "Krunchit, K-Pop", note: "Sweet and spicy fusion", image: "/products/p-krunchit-kpop.png" },
      { name: "Cheese Balls, Cheese & Herbs", note: "Rich, crafted crunch", image: "/products/p-cheeseballs-herbs.png" },
      { name: "Cheese Balls, K-Pop Kick", note: "Cheesy with a spicy edge", image: "/products/p-cheeseballs-kpop.png" },
      { name: "Lime & Chilli Makhana", note: "Zesty, light crunch", image: "/products/p-makhana-king-chilli.png" },
      { name: "Peri-Peri Makhana", note: "Bold peri-peri fox nuts", image: "/products/p-makhana-peri-peri.png" },
      { name: "Himalayan Pink Salt & Pepper Makhana", note: "Simple, crafted, clean", image: "/products/p-makhana-pink-salt-pepper.png" },
      { name: "Pudina Punch Makhana", note: "Fresh minty punch", image: "/products/p-makhana-pudina-punch.png" },
      { name: "Tangy Tomato Makhana", note: "Bold tomato, light crunch", image: "/products/p-makhana-tangy-tomato.png" },
      { name: "Cheese & Cream Cinema Popcorn", note: "Rich, movie-night favourite", image: "/products/p-popcorn-cheese-cream.png" },
      { name: "Cheese & Jalapeno Cinema Popcorn", note: "Sharp cheese, a hit of heat", image: "/products/p-popcorn-cheese-jalapeno.png" },
      { name: "Cream & Onion Cinema Popcorn", note: "Classic cinema flavour", image: "/products/p-popcorn-cream-onion.png" },
      { name: "Puffzilla, Lime & Pudina", note: "Zesty, oversized crunch", image: "/products/p-puffzilla-c.png" },
    ],
  },
];

export function FlavourShowcase() {
  return (
    <>
      {SECTIONS.map((section) => (
        <section key={section.id} id={section.id} className={`${section.bg} py-20 lg:py-28`}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <Reveal>
              <span
                className={`inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${section.chip}`}
              >
                {section.brand}
              </span>
              <h3 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-ink-950 sm:text-4xl">
                {section.tagline}
              </h3>
              <p className="mt-3 max-w-xl text-base text-ink-950/70">
                {section.blurb}
              </p>
            </Reveal>

            <ProductGrid products={section.products} />
          </div>
        </section>
      ))}
    </>
  );
}
