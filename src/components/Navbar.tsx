import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { buttonVariants } from "./ui/button";
import { Menu } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { ArrowLongRightIcon, ArrowLongLeftIcon, LogoIcon } from "./Icons";
import { useLocale, useTranslations } from "next-intl";
import LangToggle from "./lang-toggle";

interface RouteProps {
  href: string;
  label: string;
}

export const Navbar = () => {
  const t = useTranslations("Navbar");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const locale = useLocale();
  const isRTL = locale === "he";

  const routeList: RouteProps[] = [
    {
      href: "#features",
      label: t("features"),
    },
    {
      href: "#contact",
      label: t("contact"),
    },
    {
      href: "#pricing",
      label: t("pricing"),
    },
    {
      href: "#faq",
      label: t("faq"),
    },
  ];

  return (
    <header className="fixed transition-opacity duration-300 top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList
          className={`container h-14 px-4 w-screen ${
            isRTL ? "flex-row-reverse" : "flex-row"
          } justify-between`}
        >
          <NavigationMenuItem className="font-bold flex">
            <a
              rel="noreferrer noopener"
              href="/"
              className={`ml-2 font-bold text-xl flex ${
                isRTL ? "ml-0 mr-2" : ""
              }`}
            >
              <LogoIcon />
            </a>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden">
            <ModeToggle />
            <LangToggle />

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu
                  className="flex md:hidden h-5 w-5"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">{t("menuIcon")}</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={isRTL ? "right" : "left"}>
                <SheetHeader className="flex items-center justify-center">
                  <SheetTitle className="font-bold text-xl">
                    <LogoIcon size={120} />
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ href, label }: RouteProps) => (
                    <a
                      rel="noreferrer noopener"
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      {label}
                    </a>
                  ))}
                  <a
                    rel="noreferrer noopener"
                    href="https://app.aionsites.com/"
                    target="_blank"
                    className={`group w-[150px] ${buttonVariants({
                      variant: "default",
                    })}`}
                  >
                    {isRTL && (
                      <ArrowLongLeftIcon className="mr-2 w-6 h-6 mt-[2px] transform transition-all duration-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0" />
                    )}
                    <div
                      className={`text-md ${
                        isRTL ? "-translate-x-4 " : "translate-x-4"
                      } group-hover:translate-x-0 transition-all duration-300 transform`}
                    >
                      {t("launchApp")}
                    </div>
                    {!isRTL && (
                      <ArrowLongRightIcon className="ml-2 w-6 h-6 mt-[2px] transform transition-all duration-300 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0" />
                    )}
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav
            className={`hidden md:flex gap-2 ${
              isRTL ? "flex-row-reverse" : ""
            }`}
          >
            {routeList.map((route: RouteProps, i) => (
              <a
                rel="noreferrer noopener"
                href={route.href}
                key={i}
                className={`text-[17px] ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {route.label}
              </a>
            ))}
          </nav>

          <div
            className={`hidden md:flex gap-2 ${
              isRTL ? "flex-row-reverse" : ""
            }`}
          >
            <a
              rel="noreferrer noopener"
              href="https://app.aionsites.com/"
              target="_blank"
              className={`group ${buttonVariants({
                variant: "default",
              })}`}
            >
              {isRTL && (
                <ArrowLongLeftIcon className="mr-2 w-6 h-6 mt-[2px] transform transition-all duration-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0" />
              )}
              <div
                className={`text-md ${
                  isRTL ? "-translate-x-4 " : "translate-x-4"
                } group-hover:translate-x-0 transition-all duration-300 transform`}
              >
                {t("launchApp")}
              </div>
              {!isRTL && (
                <ArrowLongRightIcon className="ml-2 w-6 h-6 mt-[2px] transform transition-all duration-300 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0" />
              )}
            </a>

            <ModeToggle />
            <LangToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
