import Image from "next/image";

const PANELS = [
  {
    id: "snaxzastic",
    brand: "Snaxzastic",
    title: ["Snacking", "Anywhere"],
    message: "Roasted right, zinged with nimbu-pudina.",
    sub: "Nimbu Pudina Roasted Chana & Roasted Peanuts",
    bg: "bg-gradient-to-br from-snax-400 to-snax-600",
    eyebrow: "text-ink/58",
    heading: "text-ink",
    body: "text-ink/78",
    circle: "border-ink/22",
    subColor: "text-ink/60",
    cta: "bg-ink text-background hover:bg-green",
    img1: "/products/p-nimbu-roasted-chana.png",
    img2: "/products/p-nimbu-coated-peanuts.png",
  },
  {
    id: "crespology",
    brand: "Crespology",
    title: ["Crispy", "Vibes Only"],
    message: "Crafted crunch, every single bite.",
    sub: "Cheese Balls & Krunchit Spanish Tomato",
    bg: "bg-gradient-to-br from-cresp-400 to-cresp-600",
    eyebrow: "text-background/62",
    heading: "text-background",
    body: "text-background/80",
    circle: "border-background/24",
    subColor: "text-background/66",
    cta: "bg-background text-cresp-600 hover:bg-ink hover:text-background",
    img1: "/products/p-cheeseballs-herbs.png",
    img2: "/products/p-krunchit-tomato.png",
  },
] as const;

export function Hero() {
  return (
    <div id="top" className="grid grid-cols-1 lg:grid-cols-2">
      {PANELS.map((panel) => (
        <a
          key={panel.id}
          href={`/${panel.id}`}
          className={`relative flex flex-col justify-between overflow-hidden ${panel.bg} p-8 sm:p-12 lg:min-h-[720px] lg:p-16`}
        >
          <div className="relative z-10">
            <div
              className={`mb-3.5 font-display text-xl tracking-[0.3em] uppercase ${panel.eyebrow}`}
            >
              {panel.brand}
            </div>
            <h1
              className={`m-0 font-display text-6xl leading-[0.85] uppercase tracking-tight sm:text-7xl lg:text-8xl ${panel.heading}`}
            >
              {panel.title[0]}
              <br />
              {panel.title[1]}
            </h1>
            <p className={`mt-5 max-w-sm text-lg leading-relaxed ${panel.body}`}>
              {panel.message}
            </p>
          </div>

          <div className="relative my-6 flex min-h-[260px] items-end justify-center sm:min-h-[300px]">
            <div
              className={`absolute bottom-5 h-[380px] w-[380px] animate-sfb-spin rounded-full border-[1.5px] border-dashed sm:h-[440px] sm:w-[440px] ${panel.circle}`}
            />
            <div className="animate-collide-left relative h-[240px] w-[180px] sm:h-[300px] sm:w-[220px]">
              <Image
                src={panel.img1}
                alt={panel.sub}
                fill
                priority
                sizes="220px"
                className="z-[2] object-contain drop-shadow-[0_34px_44px_rgba(0,0,0,0.34)]"
              />
            </div>
            <div className="animate-collide-right relative -ml-12 h-[200px] w-[150px] sm:-ml-16 sm:h-[250px] sm:w-[190px]">
              <Image
                src={panel.img2}
                alt={panel.sub}
                fill
                sizes="190px"
                className="z-[1] object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.3)]"
              />
            </div>
          </div>

          <div className="relative z-10">
            <div
              className={`mb-4 text-xs font-semibold uppercase tracking-[0.12em] ${panel.subColor}`}
            >
              {panel.sub}
            </div>
            <span
              className={`inline-flex items-center gap-2.5 rounded-full px-7 py-4 text-base font-semibold transition-colors ${panel.cta}`}
            >
              Explore flavours <span aria-hidden>&rarr;</span>
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}
