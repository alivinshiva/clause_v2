import { Hero } from '@/components/Hero';
import ValueCards from '@/components/ValueCards';
import { Products } from '@/components/Products';
import { Consulting } from '@/components/Consulting';
import { BuildStudio } from '@/components/BuildStudio';
import Industries from '@/components/Industries';
import { Insights } from '@/components/Insights';
import { FinalCTA } from '@/components/FinalCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <ValueCards />
      <Products />
      <Consulting />
      <BuildStudio />
      <Industries />
      <Insights />
      <FinalCTA />
    </>
  );
}
