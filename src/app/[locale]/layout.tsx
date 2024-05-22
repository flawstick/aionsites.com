import React, { ReactNode } from "react";
import "@/styles/globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale,
} from "next-intl/server";
import { locales } from "@/lib/config";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">) {
  const t = await getTranslations({ locale, namespace: "LocaleLayout" });

  return {
    title: t("title") || "AionSites - Professional Mobile and Web Solutions",
    description:
      t("description") ||
      "AionSites offers tailored mobile apps, websites, and seamless integration services. Our professional solutions ensure reliability, efficiency, and enhanced user experience.",
    keywords:
      t("keywords") ||
      "AionSites, mobile apps, web development, integration services, professional solutions, user experience, efficient design",
    robots: "index, follow",
    author: "AionSites",
    canonical: `https://aionsites.com/${locale !== "en" ? `${locale}/` : ""}`,
    viewport: "width=device-width, initial-scale=1.0",
    charset: "UTF-8",
    "og:title":
      t("title") || "AionSites - Professional Mobile and Web Solutions",
    "og:description":
      t("description") ||
      "AionSites offers tailored mobile apps, websites, and seamless integration services.",
    "og:type": "website",
    "og:url": `https://aionsites.com/${locale !== "en" ? `${locale}/` : ""}`,
    "og:image": "https://aionsites.com/og-image.jpg",
    "twitter:card": "summary_large_image",
    "twitter:title":
      t("title") || "AionSites - Professional Mobile and Web Solutions",
    "twitter:description":
      t("description") ||
      "AionSites offers tailored mobile apps, websites, and seamless integration services.",
    "twitter:image": "https://aionsites.com/twitter-image.jpg",
    "twitter:creator": "@AionSites",
    "theme-color": "#000000",
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: Props) {
  unstable_setRequestLocale(locale);

  const messages = await getMessages({ locale });

  return (
    <html lang={locale} suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
