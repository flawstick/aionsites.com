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
import { ArrowLongRightIcon, ArrowLongLeftIcon } from "./Icons";
import { useLocale, useTranslations } from "next-intl";

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
    title: "basicTitle",
    popular: PopularPlanType.NO,
    price: 999,
    description: "basicDescription",
    buttonText: "basicButtonText",
    benefitList: [
      "basicBenefit1",
      "basicBenefit2",
      "basicBenefit3",
      "basicBenefit4",
    ],
  },
  {
    title: "premiumTitle",
    popular: PopularPlanType.YES,
    price: 5,
    description: "premiumDescription",
    buttonText: "premiumButtonText",
    benefitList: [
      "premiumBenefit1",
      "premiumBenefit2",
      "premiumBenefit3",
      "premiumBenefit4",
      "premiumBenefit5",
      "premiumBenefit6",
    ],
  },
  {
    title: "enterpriseTitle",
    popular: PopularPlanType.NO,
    price: 40,
    description: "enterpriseDescription",
    buttonText: "enterpriseButtonText",
    benefitList: [
      "enterpriseBenefit1",
      "enterpriseBenefit2",
      "enterpriseBenefit3",
      "enterpriseBenefit4",
      "enterpriseBenefit5",
      "enterpriseBenefit6",
      "enterpriseBenefit7",
    ],
  },
];

export const Pricing = () => {
  const locale = useLocale();
  const isRTL = locale === "he";
  const t = useTranslations("Pricing");

  return (
    <section id="pricing" className="container py-24 sm:py-32">
      <h2 className={`text-3xl md:text-4xl font-bold text-center`}>
        {t("heading")}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {t("personalized")}
        </span>
        {t("plans")}
      </h2>
      <h3 className={`text-xl text-center text-muted-foreground pt-4 pb-8`}>
        {t("subheading")}
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
              <CardTitle
                className={`flex item-center justify-between ${
                  isRTL ? "text-right flex-row-reverse" : ""
                }`}
              >
                {t(pricing.title)}
                {pricing.popular === PopularPlanType.YES ? (
                  <Badge variant="secondary" className="text-sm text-primary">
                    {t("mostPopular")}
                  </Badge>
                ) : null}
              </CardTitle>
              <CardDescription className={isRTL ? "text-right" : ""}>
                {t(pricing.description)}
              </CardDescription>
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
                {isRTL && (
                  <ArrowLongLeftIcon className="mr-2 w-6 h-6 mt-[2px] transform transition-all duration-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0" />
                )}
                <div
                  className={`text-md ${
                    isRTL ? "-translate-x-4 " : "translate-x-4"
                  } group-hover:translate-x-0 transition-all duration-300 transform`}
                >
                  {t(pricing.buttonText)}
                </div>
                {!isRTL && (
                  <ArrowLongRightIcon className="ml-2 w-6 h-6 mt-[2px] transform transition-all duration-300 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0" />
                )}
              </a>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className={`flex ${isRTL ? "flex-row-reverse" : null}`}>
              <div className={`space-y-4 ${isRTL ? "text-right" : ""}`}>
                {pricing.benefitList.map((benefit: string) => (
                  <span
                    key={benefit}
                    className={`flex ${isRTL ? "flex-row-reverse" : ""}`}
                  >
                    <Check className="text-green-500" />{" "}
                    <h3 className={`ml-2 ${isRTL ? "mr-2" : ""}`}>
                      {t(benefit)}
                    </h3>
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
