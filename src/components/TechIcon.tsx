import React from 'react';
import {
  BrainCircuit,
  Cpu,
  Sparkles,
  Bot,
  Network,
  Glasses,
  View,
  Blocks,
  Cloud,
  Database,
  Atom,
  Radio,
  ShieldAlert,
  Car,
  Dna,
  Home,
  Leaf,
  Rocket,
  CircleDot,
  LucideProps
} from 'lucide-react';

interface TechIconProps extends LucideProps {
  name: string;
}

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  BrainCircuit,
  Cpu,
  Sparkles,
  Bot,
  Network,
  Glasses,
  View,
  Blocks,
  Cloud,
  Database,
  Atom,
  Radio,
  ShieldAlert,
  Car,
  Dna,
  Home,
  Leaf,
  Rocket,
};

export const TechIcon: React.FC<TechIconProps> = ({ name, ...props }) => {
  const IconComponent = iconMap[name] || CircleDot;
  return <IconComponent {...props} />;
};
