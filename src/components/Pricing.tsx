import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { ArrowLongRightIcon } from "./Icons";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    title: "Basic",
    popular: 0,
    price: 999,
    description: "A website and a simple analytics tool.",
    buttonText: "Get Started",
    benefitList: [
      "1 Team member",
      "A Personalized Website",
      "Upto 4 pages",
      "Simple Analytics Dashboard",
    ],
  },
  {
    title: "Premium",
    popular: 1,
    price: 5,
    description:
      "Everything a business would ever need in terms of modern software.",
    buttonText: "Reach Out!",
    benefitList: [
      "4 Team members",
      "A Personalized Website",
      "A Personalized Application",
      "10 Kiosk Tablets",
      "Advanced Dashboard",
      "Advanced Analytics",
    ],
  },
  {
    title: "Enterprise",
    popular: 0,
    price: 40,
    description: "Manage multiple locations or franchizes with our tools",
    buttonText: "Contact US",
    benefitList: [
      "Unlimited Team Members",
      "Up to 10 Personalized Websites",
      "Up to 3 Personalized Applications",
      "Priority support",
      "Up to 100 Kiosk Tablets",
      "Advanced Dashboard",
      "Advanced Analytics",
    ],
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Our
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Personalized{" "}
        </span>
        Plans
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Contact Us and tell us what your business needs!
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={
              pricing.popular === PopularPlanType.YES
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                : ""
            }
          >
            <CardHeader>
              <CardTitle className="flex item-center justify-between">
                {pricing.title}
                {pricing.popular === PopularPlanType.YES ? (
                  <Badge variant="secondary" className="text-sm text-primary">
                    Most popular
                  </Badge>
                ) : null}
              </CardTitle>
              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <a
                rel="noreferrer noopener"
                href="#contact"
                className={`w-full items-center justify-center relative group ${buttonVariants(
                  {
                    variant: "default",
                  },
                )}`}
              >
                <div className="text-md translate-x-4 group-hover:translate-x-0 transition-all duration-300 transform">
                  {pricing.buttonText}
                </div>
                <ArrowLongRightIcon className="ml-2 w-6 h-6 mt-[2px] transform transition-all duration-300 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0" />
              </a>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex">
              <div className="space-y-4">
                {pricing.benefitList.map((benefit: string) => (
                  <span key={benefit} className="flex">
                    <Check className="text-green-500" />{" "}
                    <h3 className="ml-2">{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
