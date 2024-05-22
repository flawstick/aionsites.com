import { useLocale, useTranslations } from "next-intl";

export const Statistics = () => {
  interface statsProps {
    quantity: string;
    description: string;
  }

  const locale = useLocale();
  const isRTL = locale === "he";
  const t = useTranslations("Statistics");

  const stats: statsProps[] = [
    {
      quantity: "2.7K+",
      description: t("users"),
    },
    {
      quantity: "12",
      description: t("partners"),
    },
    {
      quantity: "112",
      description: t("downloads"),
    },
    {
      quantity: "4",
      description: t("products"),
    },
  ];

  return (
    <section id="statistics">
      <div
        className={`grid grid-cols-2 lg:grid-cols-4 gap-8 ${
          isRTL ? "rtl" : "ltr"
        }`}
      >
        {stats.map(({ quantity, description }: statsProps) => (
          <div key={description} className={`space-y-2 text-center`}>
            <h2 className="text-3xl sm:text-4xl font-bold">{quantity}</h2>
            <p className="text-xl text-muted-foreground">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
