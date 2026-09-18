'use server';

import type { ContactField, ContactState } from '@/lib/contact';

const allowedInterests = new Set(['ai-transformation', 'ai-growth', 'product-engineering', 'clause-products', 'other']);
const allowedUrgencies = new Set(['exploring', 'this-quarter', 'next-quarter', 'urgent']);
const allowedBudgets = new Set(['', 'under-10k', '10k-30k', '30k-75k', '75k-plus', 'unknown']);

function readText(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === 'string' ? value.trim() : '';
}

function addError(errors: Partial<Record<ContactField, string[]>>, field: ContactField, message: string) {
  errors[field] = [message];
}

function validate(formData: FormData) {
  const fields = {
    name: readText(formData, 'name'),
    email: readText(formData, 'email').toLowerCase(),
    organisation: readText(formData, 'organisation'),
    interest: readText(formData, 'interest'),
    goal: readText(formData, 'goal'),
    urgency: readText(formData, 'urgency'),
    budget: readText(formData, 'budget'),
    consent: readText(formData, 'consent'),
    website: readText(formData, 'website'),
    startedAt: Number(readText(formData, 'startedAt')),
  };
  const errors: Partial<Record<ContactField, string[]>> = {};

  if (fields.name.length < 2 || fields.name.length > 80) addError(errors, 'name', 'Enter your name.');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email) || fields.email.length > 160) addError(errors, 'email', 'Enter a valid work email address.');
  if (fields.organisation.length < 2 || fields.organisation.length > 120) addError(errors, 'organisation', 'Enter your organisation name.');
  if (!allowedInterests.has(fields.interest)) addError(errors, 'interest', 'Choose the most relevant starting point.');
  if (fields.goal.length < 20 || fields.goal.length > 2000) addError(errors, 'goal', 'Describe the problem in at least 20 characters.');
  if (!allowedUrgencies.has(fields.urgency)) addError(errors, 'urgency', 'Choose an indicative timeframe.');
  if (!allowedBudgets.has(fields.budget)) fields.budget = '';
  if (fields.consent !== 'on') addError(errors, 'consent', 'Consent is required so Clause can respond to your enquiry.');

  return { fields, errors };
}

function buildMessage(fields: ReturnType<typeof validate>['fields']) {
  return [
    `Name: ${fields.name}`,
    `Email: ${fields.email}`,
    `Organisation: ${fields.organisation}`,
    `Interest: ${fields.interest}`,
    `Timing: ${fields.urgency}`,
    `Budget: ${fields.budget || 'Not provided'}`,
    '',
    'Goal:',
    fields.goal,
  ].join('\n');
}

export async function submitContact(_previousState: ContactState, formData: FormData): Promise<ContactState> {
  const { fields, errors } = validate(formData);

  if (fields.website) return { status: 'success', message: 'Thank you. Your enquiry has been received.', submissionId: crypto.randomUUID() };

  const elapsed = Date.now() - fields.startedAt;
  if (!Number.isFinite(elapsed) || elapsed < 1500 || elapsed > 86_400_000) return { status: 'error', message: 'Please refresh the page and try again.' };

  if (Object.keys(errors).length > 0) return { status: 'error', message: 'Please review the highlighted fields.', errors };

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    console.error('Contact delivery is not configured. Set RESEND_API_KEY, CONTACT_TO_EMAIL and CONTACT_FROM_EMAIL.');
    return { status: 'error', message: 'The enquiry service is not available yet. Please try again later.' };
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: fields.email,
        subject: `Clause enquiry — ${fields.organisation}`,
        text: buildMessage(fields),
      }),
      cache: 'no-store',
    });

    if (!response.ok) {
      console.error('Contact delivery failed with status', response.status);
      return { status: 'error', message: 'We could not send your enquiry. Please try again shortly.' };
    }

    return {
      status: 'success',
      message: 'Thank you. Your enquiry has been sent; Clause aims to respond within two working days.',
      submissionId: crypto.randomUUID(),
    };
  } catch (error) {
    console.error('Contact delivery failed', error);
    return { status: 'error', message: 'We could not send your enquiry. Please try again shortly.' };
  }
}
