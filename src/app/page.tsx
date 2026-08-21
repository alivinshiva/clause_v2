import { Hero } from '@/components/Hero';
import ValueCards from '@/components/ValueCards';
import { Products } from '@/components/Products';
import { Consulting } from '@/components/Consulting';
import { BuildStudio } from '@/components/BuildStudio';
import IntegratedTransformation from '@/components/IntegratedTransformation';
import { Engagement } from '@/components/Engagement';
import Industries from '@/components/Industries';
import HowWeWork from '@/components/HowWeWork';
import { Insights } from '@/components/Insights';
import { About } from '@/components/About';
import { ContactForm } from '@/components/ContactForm';

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-clause-cloud dark:bg-clause-midnight font-sans">
      <Hero />
      <ValueCards />
      <Products />
      <Consulting />
      <IntegratedTransformation />
      <BuildStudio />
      <Engagement />
      <Industries />
      <HowWeWork />
      <Insights />
      <About />
      <ContactForm />
    </div>
  );
}