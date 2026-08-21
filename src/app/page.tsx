import { StackContainer, StackItem } from '@/components/Stack';
import { Hero } from '@/components/Hero';
import ValueCards from '@/components/ValueCards';
import { Products } from '@/components/Products';
import { Consulting } from '@/components/Consulting';
import { BuildStudio } from '@/components/BuildStudio';
import Industries from '@/components/Industries';
import { Insights } from '@/components/Insights';
import { FinalCTA } from '@/components/FinalCTA';

const sections = [
  Hero,
  ValueCards,
  Products,
  Consulting,
  BuildStudio,
  Industries,
  Insights,
  FinalCTA,
];

export default function Home() {
  return (
    <StackContainer>
      {sections.map((Section, i) => (
        <StackItem key={i} index={i} total={sections.length}>
          <Section />
        </StackItem>
      ))}
    </StackContainer>
  );
}
