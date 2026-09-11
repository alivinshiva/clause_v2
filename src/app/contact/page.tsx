import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui';
import { ContactForm } from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Tell us what you are trying to build, improve, automate or grow — every engagement starts with the business problem.',
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact Clause"
        title="What are you trying to build, improve, automate or grow?"
        description="You do not need to begin with a specific technology, platform or consulting service. Every engagement starts with the business problem."
      />
      <ContactForm />
    </>
  );
}
