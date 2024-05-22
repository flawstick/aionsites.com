import { LogoIcon } from "./Icons";
import { useLocale, useTranslations } from "next-intl";

import { cn } from "@/lib/utils";

export const Footer = () => {
  const locale = useLocale();
  const isRTL = locale === "he";
  const t = useTranslations("Footer");

  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="self-center container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className={`col-span-full xl:col-span-2 `}>
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl flex justify-center md:justify-start"
          >
            <LogoIcon size={200} />
          </a>
        </div>

        <div
          className={cn("flex flex-col gap-2 ", isRTL ? "text-right" : null)}
        >
          <h3 className="font-bold text-lg">{t("followUs")}</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              {t("instagram")}
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              {t("facebook")}
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              {t("twitter")}
            </a>
          </div>
        </div>

        <div className={cn("flex flex-col gap-2", isRTL ? "text-right" : null)}>
          <h3 className="font-bold text-lg">{t("platforms")}</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              {t("web")}
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              {t("mobile")}
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              {t("desktop")}
            </a>
          </div>
        </div>

        <div className={cn("flex flex-col gap-2", isRTL ? "text-right" : null)}>
          <h3 className="font-bold text-lg">{t("about")}</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              {t("features")}
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              {t("pricing")}
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              {t("faq")}
            </a>
          </div>
        </div>

        <div className={cn("flex flex-col gap-2", isRTL ? "text-right" : null)}>
          <h3 className="font-bold text-lg">{t("contactUs")}</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              {t("form")}
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="mailto:info@aionsites.com"
              className="opacity-60 hover:opacity-100"
            >
              {t("email")}
            </a>
          </div>
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>
          &copy; 2024 All Rights Reserved To{" "}
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://aionsites.com/"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            Aionsites Ltd.
          </a>
        </h3>
      </section>
    </footer>
  );
};
