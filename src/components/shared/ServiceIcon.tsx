import {
  Activity,
  Anchor,
  Award,
  Baby,
  Cpu,
  Crown,
  Heart,
  Layers,
  Scissors,
  Shield,
  Smile,
  Sparkles,
  Sun,
  Users,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  smile: Smile,
  shield: Shield,
  anchor: Anchor,
  sparkles: Sparkles,
  crown: Crown,
  sun: Sun,
  scissors: Scissors,
  layers: Layers,
  baby: Baby,
  activity: Activity,
  cpu: Cpu,
  award: Award,
  heart: Heart,
  users: Users,
};

interface ServiceIconProps {
  name: string;
  className?: string;
}

export function ServiceIcon({ name, className = "h-6 w-6" }: ServiceIconProps) {
  const Icon = iconMap[name] || Smile;
  return <Icon className={className} aria-hidden="true" />;
}
