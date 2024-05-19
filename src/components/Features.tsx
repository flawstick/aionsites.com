import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "/public/growth.png";
import image3 from "/public/reflecting.png";

import desktopMockupLight from "/public/desktop-mockup-light.png";
import desktopMockup from "/public/desktop-mockup.png";
import iphoneMockup from "/public/iphone-mockup.png";
import tabletFrontMockup from "/public/tablet-front-mockup.png";
import Image, { StaticImageData } from "next/image";
import { useTheme } from "./theme-provider";

interface FeatureProps {
  title: string;
  description: string;
  image: StaticImageData | string;
}

const features: FeatureProps[] = [
  {
    title: "Dashboard",
    description:
      "Our seamless dashboard integrates all services, providing a unified platform for efficient management and operations.",
    image: desktopMockup,
  },
  {
    title: "Mobile Applications",
    description:
      "Tailored mobile applications that enhance accessibility and productivity, seamlessly integrating into your business environment.",
    image: iphoneMockup, // Assuming image2 represents mobile applications
  },
  {
    title: "Tablets",
    description:
      "Preloaded tablets with custom software, ensuring seamless integration and enhanced functionality for your operations.",
    image: tabletFrontMockup, // Assuming image5 represents tablets
  },
];

const featureList: string[] = [
  "Dashboard",
  "Mobile Software",
  "Preloaded Tablets",
  "Custom Dashboards",
  "Design",
  "Efficiency",
  "Integration",
  "User Experience",
  "Scalability",
];

export const Features = () => {
  const { theme } = useTheme();

  const isDarkMode =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  if (!isDarkMode) features[0].image = desktopMockupLight;

  return (
    <section id="features" className="container py-24 sm:py-32 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Many{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Great Features
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge variant="secondary" className="text-sm">
              {feature}
            </Badge>
          </div>
        ))}
      </div>

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
                alt="About feature"
                className="w-[200px] lg:max-w-[300px]  pt-5 mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
