import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative min-h-[760px] overflow-hidden bg-[#07101f] text-white lg:min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(87,87,232,.18),transparent_32%),linear-gradient(180deg,rgba(7,16,31,.2),#07101f_92%)]" />
      <div className="hero-noise absolute inset-0 opacity-40" />

      <div className="relative mx-auto grid min-h-[760px] max-w-7xl items-center gap-12 px-6 pb-20 pt-36 lg:min-h-screen lg:grid-cols-[0.88fr_1.12fr] lg:gap-4 lg:pb-24 lg:pt-32">
        <div className="relative z-10 max-w-2xl">
          <div className="hero-reveal flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-clause-signal">
            <span className="h-px w-8 bg-clause-signal" />
            AI transformation · Product engineering
          </div>
          <h1 className="hero-reveal hero-reveal-delay-1 mt-7 text-[clamp(3.25rem,7vw,6.8rem)] font-semibold leading-[0.91] tracking-[-0.065em] text-balance">
            From business problem to <span className="text-clause-signal">intelligent system.</span>
          </h1>
          <p className="hero-reveal hero-reveal-delay-2 mt-8 max-w-xl text-base leading-7 text-white/64 sm:text-lg sm:leading-8">
            Clause helps ambitious organisations find valuable AI opportunities, redesign critical workflows and build production-ready solutions their teams can own.
          </p>
          <div className="hero-reveal hero-reveal-delay-3 mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="button-primary-light">
              Book a discovery call <span aria-hidden="true">↗</span>
            </Link>
            <Link href="#method" className="button-quiet-dark">
              See how we work <span aria-hidden="true">↓</span>
            </Link>
          </div>
          <p className="hero-reveal hero-reveal-delay-3 mt-7 text-xs leading-relaxed text-white/38">
            Strategy when you need direction. Product-grade execution when you need momentum.
          </p>
        </div>

        <div className="hero-reveal hero-reveal-delay-2 relative -mx-16 min-h-[420px] lg:-mr-48 lg:ml-0 lg:min-h-[680px]">
          <Image
            src="/images/clause-signal-system-hero.png"
            alt="Abstract streams of fragmented signals passing through a structured intelligence system"
            fill
            priority
            sizes="(max-width: 1024px) 120vw, 62vw"
            className="object-cover object-center mix-blend-screen [mask-image:linear-gradient(to_right,transparent_0%,black_16%,black_82%,transparent_100%)] lg:object-[46%_center]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#07101f] lg:bg-gradient-to-r lg:from-[#07101f]/55 lg:via-transparent lg:to-[#07101f]/30" />
          <div className="absolute bottom-12 right-16 rounded-full border border-white/12 bg-[#07101f]/55 px-4 py-2 text-[10px] uppercase tracking-[0.18em] text-white/55 backdrop-blur-md lg:bottom-24 lg:right-32">
            Signal → system → decision
          </div>
        </div>
      </div>
    </section>
  );
}
