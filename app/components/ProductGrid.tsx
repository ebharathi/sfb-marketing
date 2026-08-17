import Image from "next/image";

type Product = {
  name: string;
  note: string;
  image: string;
  hero?: boolean;
};

type Theme = {
  cardBg: string;
  cardBorder: string;
  cardHoverBorder: string;
  heroBorder: string;
  heroGlow: string;
  headingColor: string;
  labelColor: string;
  noteColor: string;
  buttonBorder: string;
  buttonHover: string;
  buttonText: string;
};

const TEASER_COUNT = 8;

export function ProductGrid({
  products,
  theme,
  showAllLabel,
  moreHref,
}: {
  products: Product[];
  theme: Theme;
  showAllLabel: string;
  /** If set, shows only a teaser and links out to the full brand page. If omitted, shows every product. */
  moreHref?: string;
}) {
  const visible = moreHref ? products.slice(0, TEASER_COUNT) : products;

  return (
    <div>
      <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
        {visible.map((product) => (
          <div
            key={product.name}
            className={`flex h-full flex-col gap-2.5 rounded-2xl border p-3 transition-colors sm:gap-3.5 sm:p-5 ${theme.cardBg} ${
              product.hero ? theme.heroBorder : theme.cardBorder
            } ${theme.cardHoverBorder}`}
          >
            <div
              className="flex h-24 items-center justify-center rounded-xl sm:h-36"
              style={product.hero ? { background: theme.heroGlow } : undefined}
            >
              <div className="relative h-20 w-full sm:h-32">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="140px"
                  className="object-contain drop-shadow-[0_12px_18px_rgba(0,0,0,0.2)]"
                />
              </div>
            </div>
            <div>
              {product.hero && (
                <div
                  className={`mb-1 text-[9px] font-bold tracking-[0.18em] uppercase sm:text-[10px] ${theme.labelColor}`}
                >
                  Hero flavour
                </div>
              )}
              <h3
                className={`line-clamp-2 font-display text-xs uppercase leading-tight sm:text-lg ${theme.headingColor}`}
              >
                {product.name}
              </h3>
              <p className={`mt-1 line-clamp-1 text-[11px] sm:text-[13px] ${theme.noteColor}`}>
                {product.note}
              </p>
            </div>
          </div>
        ))}
      </div>

      {moreHref && products.length > TEASER_COUNT && (
        <div className="mt-7 flex justify-center sm:mt-8">
          <a
            href={moreHref}
            className={`inline-flex items-center gap-2.5 rounded-full border px-6 py-3.5 text-sm font-semibold transition-colors ${theme.buttonBorder} ${theme.buttonText} ${theme.buttonHover}`}
          >
            {showAllLabel}
            <span aria-hidden>&rarr;</span>
          </a>
        </div>
      )}
    </div>
  );
}
