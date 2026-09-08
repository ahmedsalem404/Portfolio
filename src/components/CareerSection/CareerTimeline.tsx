import { ScrollTimeline } from "../lightswind/scroll-timeline";
import { ShieldCheck, Headphones, Globe, Bot } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";

// Icons stay here; the copy comes from the dictionary (same order).
const careerIcons = [
  <Bot className="h-4 w-4 me-2 text-primary" />,
  <ShieldCheck className="h-4 w-4 me-2 text-primary" />,
  <Headphones className="h-4 w-4 me-2 text-primary" />,
  <Globe className="h-4 w-4 me-2 text-primary" />,
];

export const CareerTimeline = () => {
  const { t, lang } = useLang();

  const careerEvents = t.career.items.map((event, i) => ({
    ...event,
    icon: careerIcons[i],
  }));

  return (
    <div id="career">
      <ScrollTimeline
        // Remount on language change so the reveal animations replay cleanly.
        key={lang}
        events={careerEvents}
        title={t.career.title}
        subtitle={t.career.subtitle}
        animationOrder="staggered"
        cardAlignment="alternating"
        cardVariant="elevated"
        parallaxIntensity={0.15}
        revealAnimation="fade"
        progressIndicator={true}
        lineColor="bg-primary/20"
        activeColor="bg-primary"
        progressLineWidth={3}
        progressLineCap="round"
      />
    </div>
  );
};
