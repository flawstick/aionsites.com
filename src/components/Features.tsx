import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import desktopMockupLight from "/public/desktop-mockup-light.png";
import desktopMockup from "/public/desktop-mockup.png";
import iphoneMockup from "/public/iphone-mockup.png";
import tabletFrontMockup from "/public/tablet-front-mockup.png";
import Image, { StaticImageData } from "next/image";
import { useTheme } from "./theme-provider";
import { useLocale, useTranslations } from "next-intl";

interface FeatureProps {
  title: string;
  description: string;
  image: StaticImageData | string;
}

const featureList: string[] = [
  "dashboard",
  "mobileSoftware",
  "preloadedTablets",
  "customDashboards",
  "design",
  "efficiency",
  "integration",
  "userExperience",
  "scalability",
];

const renderFeatureList = (t: (key: string) => string, isRTL: boolean) => (
  <div
    className={`flex flex-wrap md:justify-center gap-4 ${
      isRTL ? "flex-row-reverse" : ""
    }`}
  >
    {featureList.map((feature: string, index: number) => (
      <div key={index}>
        <Badge variant="secondary" className="text-sm">
          {t(feature)}
        </Badge>
      </div>
    ))}
  </div>
);

export const Features = () => {
  const { theme } = useTheme();
  const locale = useLocale();
  const isRTL = locale === "he";
  const t = useTranslations("Features");

  const isDarkMode =
    theme === "dark" ||
    (theme === "system" &&
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  const features: FeatureProps[] = [
    {
      title: t("dashboardTitle"),
      description: t("dashboardDescription"),
      image: isDarkMode ? desktopMockup : desktopMockupLight,
    },
    {
      title: t("mobileTitle"),
      description: t("mobileDescription"),
      image: iphoneMockup,
    },
    {
      title: t("tabletsTitle"),
      description: t("tabletsDescription"),
      image: tabletFrontMockup,
    },
  ];

  return (
    <section
      id="features"
      className={`container py-24 sm:py-32 space-y-8 ${
        isRTL ? "text-right" : ""
      }`}
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        {t("heading")}{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {t("greatFeatures")}
        </span>
      </h2>

      {renderFeatureList(t, isRTL)}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <Image
                src={image}
                alt={t("aboutFeature")}
                className="w-[200px] lg:max-w-[300px] pt-5 mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
