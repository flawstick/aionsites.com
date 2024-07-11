"use client";

import React from "react";
import { useLocale, useTranslations } from "next-intl";
import { Separator } from "@/components/ui/separator";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/Navbar";

export default function TermsOfService() {
  const t = useTranslations("TermsOfService");
  const locale = useLocale();
  const isRTL = locale === "he";

  const sections = [
    { key: "agreement", icon: "📃" },
    { key: "services", icon: "💼" },
    { key: "userResponsibilities", icon: "🙋" },
    { key: "limitations", icon: "⚠️" },
    { key: "governingLaw", icon: "⚖️" },
  ];

  return (
    <ThemeProvider>
      <Navbar />
      <div
        className={`container mt-10 md:mt-20 mx-auto max-w-5xl py-12 px-4 md:px-6 ${
          isRTL ? "rtl" : "ltr"
        }`}
      >
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">{t("title")}</h1>
            <p className="text-muted-foreground mt-2">{t("intro")}</p>
          </div>
          <div className="space-y-6">
            {sections.map((section, index) => (
              <React.Fragment key={section.key}>
                {index > 0 && <Separator className="my-4" />}
                <div className="space-y-2">
                  <h2 className="text-2xl font-semibold flex items-center gap-2">
                    <span>{section.icon}</span>
                    <span>{t(`${section.key}.title`)}</span>
                  </h2>
                  <p className="text-muted-foreground">
                    {t(`${section.key}.description`)}
                  </p>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
