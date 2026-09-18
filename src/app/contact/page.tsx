import type { Metadata } from 'next';
import Link from 'next/link';
import { ContactForm } from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Clause — Start With the Business Problem',
  description: 'Book a focused discovery conversation or send Clause a scoped enquiry about AI transformation, product engineering or intelligent growth.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Start a focused conversation with Clause',
    description: 'Bring the business problem. We will help clarify the right next move.',
    url: '/contact',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Start a focused conversation with Clause',
    description: 'Bring the business problem. We will help clarify the right next move.',
  },
};

const conversationSteps = [
  ['01', 'Context first', 'We review the problem, affected workflow and intended outcome before discussing technology.'],
  ['02', 'A focused response', 'Clause identifies the useful next question, where evidence is missing and whether there is a genuine fit.'],
  ['03', 'A proportionate next move', 'That may be a working session, a short diagnostic or a clear recommendation to take another route.'],
];

function SignalVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[30rem]" aria-hidden="true">
      <div className="absolute inset-[7%] rounded-full border border-white/10" />
      <div className="absolute inset-[22%] rounded-full border border-white/10" />
      <div className="absolute inset-[37%] rounded-full border border-white/12" />
      <div className="absolute inset-[45%] rounded-full bg-clause-signal shadow-[0_0_70px_rgba(53,201,222,.38)]" />
      <div className="absolute left-[10%] top-1/2 h-px w-[35%] bg-gradient-to-r from-transparent to-clause-signal/60" />
      <div className="absolute right-[10%] top-1/2 h-px w-[35%] bg-gradient-to-l from-transparent to-clause-intelligence/70" />
      <div className="absolute left-1/2 top-[10%] h-[35%] w-px bg-gradient-to-b from-transparent to-clause-signal/60" />
      <div className="absolute bottom-[10%] left-1/2 h-[35%] w-px bg-gradient-to-t from-transparent to-clause-intelligence/70" />
      {[
        'left-[6%] top-[47%]',
        'right-[6%] top-[47%]',
        'left-[47%] top-[6%]',
        'bottom-[6%] left-[47%]',
      ].map((position) => <span key={position} className={`absolute h-3 w-3 rounded-full border border-white/25 bg-[#101a2e] ${position}`} />)}
    </div>
  );
}

export default function ContactPage() {
  const bookingUrl = process.env.NEXT_PUBLIC_DISCOVERY_CALL_URL;
  const bookingIsExternal = Boolean(bookingUrl);
  const bookingHref = bookingUrl || '#enquiry';

  return (
    <>
      <section className="relative overflow-hidden bg-[#07101f] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_40%,rgba(87,87,232,.22),transparent_30%),linear-gradient(145deg,#07101f_0%,#0b1426_58%,#10182d_100%)]" />
        <div className="hero-noise absolute inset-0 opacity-45" />
        <div className="relative mx-auto grid min-h-[47rem] max-w-7xl items-center gap-14 px-6 pb-20 pt-40 lg:grid-cols-[1.12fr_.88fr] lg:px-10 lg:pb-24 lg:pt-44">
          <div>
            <p className="section-label !text-clause-signal">Contact Clause</p>
            <h1 className="mt-7 max-w-4xl text-[clamp(3.5rem,7vw,7.2rem)] font-semibold leading-[.9] tracking-[-.07em] text-balance">Start with the problem.</h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/62 sm:text-xl">Tell us what needs to change, who it affects and why it matters. We will help determine whether the next move is strategy, a focused build or a better question.</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href={bookingHref} target={bookingIsExternal ? '_blank' : undefined} rel={bookingIsExternal ? 'noreferrer' : undefined} className="button-primary-light">
                {bookingIsExternal ? 'Book a discovery call' : 'Request a discovery call'} <span aria-hidden="true">↗</span>
              </a>
              <a href="#enquiry" className="button-quiet-dark">Send a scoped enquiry</a>
            </div>
            <p className="mt-5 text-sm text-white/38">A focused first conversation. No generic sales deck.</p>
          </div>
          <SignalVisual />
        </div>
      </section>

      <section className="bg-white px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-px overflow-hidden rounded-[2rem] border border-clause-midnight/10 bg-clause-midnight/10 lg:grid-cols-2">
            <article className="bg-[#f7f8fc] p-8 sm:p-10 lg:p-12">
              <p className="section-label">Path 01</p>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-.04em] text-clause-midnight sm:text-4xl">Discovery conversation</h2>
              <p className="mt-5 max-w-lg text-base leading-7 text-clause-steel">Best when the challenge is real but the right intervention is still unclear. Use 30 minutes to establish context, urgency and the decision ahead.</p>
              <a href={bookingHref} target={bookingIsExternal ? '_blank' : undefined} rel={bookingIsExternal ? 'noreferrer' : undefined} className="button-primary-dark mt-8">
                {bookingIsExternal ? 'Choose a time' : 'Request the conversation'} <span aria-hidden="true">↗</span>
              </a>
            </article>

            <article className="bg-white p-8 sm:p-10 lg:p-12">
              <p className="section-label">Path 02</p>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-.04em] text-clause-midnight sm:text-4xl">Scoped enquiry</h2>
              <p className="mt-5 max-w-lg text-base leading-7 text-clause-steel">Best when you can already describe the workflow, product opportunity or growth constraint. Give us enough context to make the first response useful.</p>
              <a href="#enquiry" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-clause-midnight hover:text-clause-intelligence">Share the brief <span aria-hidden="true">↓</span></a>
            </article>
          </div>
        </div>
      </section>

      <section id="enquiry" className="scroll-mt-24 bg-[#f3f5fa] px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
          <div>
            <p className="section-label">Make the first response useful</p>
            <h2 className="mt-5 text-4xl font-semibold leading-[1.02] tracking-[-.055em] text-clause-midnight sm:text-5xl">Enough context.<br />No lengthy brief.</h2>
            <p className="mt-6 max-w-md text-base leading-7 text-clause-steel">The form asks only for information that changes how we respond. Clause aims to reply within two working days.</p>

            <div className="mt-12 space-y-7 border-t border-clause-midnight/10 pt-8">
              {conversationSteps.map(([number, title, description]) => (
                <div key={number} className="grid grid-cols-[2rem_1fr] gap-4">
                  <span className="font-mono text-xs text-clause-intelligence">{number}</span>
                  <div>
                    <h3 className="text-sm font-semibold text-clause-midnight">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-clause-steel">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-clause-midnight/10 bg-white p-6 shadow-[0_28px_90px_rgba(11,18,36,.08)] sm:p-10 lg:p-12">
            <div className="mb-10 flex items-center justify-between gap-6 border-b border-clause-midnight/10 pb-6">
              <div>
                <p className="text-sm font-semibold text-clause-midnight">Project enquiry</p>
                <p className="mt-1 text-sm text-clause-steel">Fields marked * are required.</p>
              </div>
              <span className="hidden rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-800 sm:inline-flex">Considered replies</span>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <section id="privacy-note" className="bg-white px-6 py-20 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 border-t border-clause-midnight/10 pt-10 md:grid-cols-[.7fr_1.3fr]">
          <p className="section-label">Enquiry privacy note</p>
          <div className="max-w-3xl text-sm leading-7 text-clause-steel">
            <p>Details submitted through this page are used only to assess and respond to the enquiry. Do not include sensitive personal data, confidential credentials or protected information.</p>
            <p className="mt-3">A complete site-wide privacy policy and retention schedule will be published before production launch.</p>
            <Link href="/about" className="mt-5 inline-flex font-semibold text-clause-midnight hover:text-clause-intelligence">How Clause works <span aria-hidden="true" className="ml-2">↗</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
