import { buttonVariants } from "./ui/button";
import { MacWindowCard } from "./MacWindowCard";
import { ArrowLongRightIcon, ArrowLongLeftIcon } from "./Icons";
import ScrollDownArrow from "./SrollDownArrow";
import { useLocale, useTranslations } from "next-intl";

export const Hero = () => {
  const locale = useLocale();
  const isRTL = locale === "he";
  const t = useTranslations("Hero");

  return (
    <>
      <section
        className={`container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10 ${
          isRTL ? "lg:grid-cols-2-reverse" : ""
        }`}
      >
        <div
          className={`text-center ${
            isRTL ? "lg:text-right" : "lg:text-start"
          } space-y-6`}
        >
          <main className="text-5xl md:text-6xl font-bold">
            <h1 className="inline">
              <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
                {t("boosting")}
              </span>{" "}
              {""}
              {t("businessesWith")}
            </h1>{" "}
            <h2 className="inline">
              <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
                {t("modern")}
              </span>{" "}
              {t("tech")}
            </h2>
          </main>

          <p
            className={`text-xl text-muted-foreground md:w-10/12 mx-auto ${
              isRTL ? "text-right lg:mr-0" : "lg:mx-0"
            }`}
          >
            {t("description")}
          </p>

          <div
            className={`space-y-4 md:space-y-0 space-x-4 ${
              isRTL ? "md:space-x-reverse" : ""
            } flex ${
              isRTL
                ? "flex-col-reverse md:flex-row-reverse"
                : "flex-col md:flex-row"
            }`}
          >
            <a
              rel="noreferrer noopener"
              href="#contact"
              className={`w-full md:w-1/3 items-center justify-center relative group ${buttonVariants(
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
                {t("getStarted")}
              </div>
              {!isRTL && (
                <ArrowLongRightIcon className="ml-2 w-6 h-6 mt-[2px] transform transition-all duration-300 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0" />
              )}
            </a>

            <a
              rel="noreferrer noopener"
              href="#contact"
              className={`w-full md:w-1/3 ${buttonVariants({
                variant: "outline",
              })}`}
            >
              {t("contactUs")}
            </a>
          </div>
        </div>

        <div
          className={`flex justify-center items-center ${
            isRTL ? "lg:order-first" : ""
          }`}
        >
          <MacWindowCard />
        </div>
      </section>
      <div className="flex mx-auto justify-center items-center">
        <ScrollDownArrow />
      </div>
    </>
  );
};
