import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";
import { useTranslations } from "next-intl";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

export const HowItWorks = () => {
  const t = useTranslations("HowItWorks");

  const features: FeatureProps[] = [
    {
      icon: <MedalIcon />,
      title: t("seamlessnessTitle"),
      description: t("seamlessnessDescription"),
    },
    {
      icon: <MapIcon />,
      title: t("analyticsTitle"),
      description: t("analyticsDescription"),
    },
    {
      icon: <PlaneIcon />,
      title: t("scalabilityTitle"),
      description: t("scalabilityDescription"),
    },
    {
      icon: <GiftIcon />,
      title: t("personalizationTitle"),
      description: t("personalizationDescription"),
    },
  ];

  return (
    <section id="howItWorks" className={`container text-center py-24 sm:py-32`}>
      <h2 className="text-3xl md:text-4xl font-bold ">
        {t("heading")}{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {t("theBest")}
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        {t("subheading")}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card key={title} className="bg-muted/50">
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
