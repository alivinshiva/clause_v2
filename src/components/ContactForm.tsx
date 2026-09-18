'use client';

import { useActionState, useEffect, useRef } from 'react';
import { submitContact } from '@/app/contact/actions';
import { initialContactState } from '@/lib/contact';

const interests = [
  ['ai-transformation', 'AI transformation'],
  ['ai-growth', 'AI-enabled growth'],
  ['product-engineering', 'Product engineering'],
  ['clause-products', 'Clause products'],
  ['other', 'Something else'],
] as const;

const urgencyOptions = [
  ['exploring', 'Exploring possibilities'],
  ['this-quarter', 'Planning for this quarter'],
  ['next-quarter', 'Planning for next quarter'],
  ['urgent', 'A time-sensitive need'],
] as const;

const budgetOptions = [
  ['', 'Prefer not to say'],
  ['under-10k', 'Under £10k'],
  ['10k-30k', '£10k–£30k'],
  ['30k-75k', '£30k–£75k'],
  ['75k-plus', '£75k+'],
  ['unknown', 'Not defined yet'],
] as const;

const fieldClass =
  'mt-2 min-h-12 w-full rounded-xl border border-clause-midnight/12 bg-white px-4 py-3 text-[15px] text-clause-midnight shadow-[0_1px_0_rgba(11,18,36,.04)] outline-none transition placeholder:text-clause-steel/65 focus:border-clause-intelligence focus:ring-4 focus:ring-clause-intelligence/10';

function FieldError({ id, messages }: { id: string; messages?: string[] }) {
  if (!messages?.length) return null;

  return <p id={id} className="mt-2 text-sm text-red-700">{messages[0]}</p>;
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initialContactState);
  const formRef = useRef<HTMLFormElement>(null);
  const startedAtRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (startedAtRef.current) startedAtRef.current.value = Date.now().toString();
  }, []);

  useEffect(() => {
    if (state.status === 'success') {
      formRef.current?.reset();
      if (startedAtRef.current) startedAtRef.current.value = Date.now().toString();
    }
  }, [state.status, state.submissionId]);

  return (
    <form ref={formRef} action={formAction} noValidate className="space-y-8">
      <input ref={startedAtRef} type="hidden" name="startedAt" defaultValue="" />
      <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-semibold text-clause-midnight">Your name <span className="text-clause-intelligence">*</span></label>
          <input id="name" name="name" type="text" autoComplete="name" required maxLength={80} aria-invalid={Boolean(state.errors?.name)} aria-describedby={state.errors?.name ? 'name-error' : undefined} className={fieldClass} />
          <FieldError id="name-error" messages={state.errors?.name} />
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-semibold text-clause-midnight">Work email <span className="text-clause-intelligence">*</span></label>
          <input id="email" name="email" type="email" inputMode="email" autoComplete="email" required maxLength={160} aria-invalid={Boolean(state.errors?.email)} aria-describedby={state.errors?.email ? 'email-error' : undefined} className={fieldClass} />
          <FieldError id="email-error" messages={state.errors?.email} />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="organisation" className="text-sm font-semibold text-clause-midnight">Organisation <span className="text-clause-intelligence">*</span></label>
          <input id="organisation" name="organisation" type="text" autoComplete="organization" required maxLength={120} aria-invalid={Boolean(state.errors?.organisation)} aria-describedby={state.errors?.organisation ? 'organisation-error' : undefined} className={fieldClass} />
          <FieldError id="organisation-error" messages={state.errors?.organisation} />
        </div>

        <div>
          <label htmlFor="interest" className="text-sm font-semibold text-clause-midnight">Best starting point <span className="text-clause-intelligence">*</span></label>
          <select id="interest" name="interest" required defaultValue="" aria-invalid={Boolean(state.errors?.interest)} aria-describedby={state.errors?.interest ? 'interest-error' : undefined} className={fieldClass}>
            <option value="" disabled>Select an area</option>
            {interests.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
          </select>
          <FieldError id="interest-error" messages={state.errors?.interest} />
        </div>
      </div>

      <div>
        <label htmlFor="goal" className="text-sm font-semibold text-clause-midnight">What are you trying to change? <span className="text-clause-intelligence">*</span></label>
        <p id="goal-help" className="mt-1 text-sm leading-6 text-clause-steel">Share the business problem, the people affected and what a useful outcome might look like.</p>
        <textarea id="goal" name="goal" rows={6} required minLength={20} maxLength={2000} aria-invalid={Boolean(state.errors?.goal)} aria-describedby={state.errors?.goal ? 'goal-help goal-error' : 'goal-help'} className={`${fieldClass} resize-y`} />
        <FieldError id="goal-error" messages={state.errors?.goal} />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="urgency" className="text-sm font-semibold text-clause-midnight">Timing <span className="text-clause-intelligence">*</span></label>
          <select id="urgency" name="urgency" required defaultValue="" aria-invalid={Boolean(state.errors?.urgency)} aria-describedby={state.errors?.urgency ? 'urgency-error' : undefined} className={fieldClass}>
            <option value="" disabled>Select a timeframe</option>
            {urgencyOptions.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
          </select>
          <FieldError id="urgency-error" messages={state.errors?.urgency} />
        </div>

        <div>
          <label htmlFor="budget" className="text-sm font-semibold text-clause-midnight">Indicative budget <span className="font-normal text-clause-steel">(optional)</span></label>
          <select id="budget" name="budget" defaultValue="" className={fieldClass}>
            {budgetOptions.map(([value, label]) => <option key={label} value={value}>{label}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm leading-6 text-clause-graphite">
          <input name="consent" type="checkbox" required aria-invalid={Boolean(state.errors?.consent)} aria-describedby={state.errors?.consent ? 'consent-note consent-error' : 'consent-note'} className="mt-1 h-4 w-4 shrink-0 rounded border-clause-midnight/25 accent-clause-intelligence" />
          <span id="consent-note">I agree that Clause may use these details to assess and respond to this enquiry. I will not include sensitive personal or confidential information.</span>
        </label>
        <FieldError id="consent-error" messages={state.errors?.consent} />
      </div>

      <div className="border-t border-clause-midnight/10 pt-6">
        <button type="submit" disabled={pending} className="inline-flex min-h-13 w-full items-center justify-center gap-3 rounded-full bg-clause-midnight px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-clause-intelligence disabled:cursor-wait disabled:opacity-60 sm:w-auto">
          {pending ? 'Sending enquiry…' : 'Send a scoped enquiry'}
          {!pending && <span aria-hidden="true">↗</span>}
        </button>

        <div aria-live="polite" aria-atomic="true" className="mt-4 min-h-6">
          {state.message && <p className={`text-sm leading-6 ${state.status === 'success' ? 'text-emerald-700' : 'text-red-700'}`}>{state.message}</p>}
        </div>
      </div>
    </form>
  );
}
