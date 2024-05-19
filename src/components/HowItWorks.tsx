import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Seamlessness",
    description:
      "We work to seamlessly integrate our software into your businesses and workflow. Software must be designed to make your life easier, not harder.",
  },
  {
    icon: <MapIcon />,
    title: "Analytics",
    description:
      "Our advanced analytics tools provide deep insights into your business performance, enabling data-driven decisions and strategic growth.",
  },
  {
    icon: <PlaneIcon />,
    title: "Scalability",
    description:
      "Our solutions are built to grow with your business, ensuring that you can handle increased demand and expand your operations effortlessly.",
  },
  {
    icon: <GiftIcon />,
    title: "Personalization",
    description:
      "We offer personalized solutions tailored to your specific needs, ensuring that our software aligns perfectly with your business goals.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="howItWorks" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold ">
        Why We Are{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          The Best{" "}
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Why our services are unparalleled in this market!
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
