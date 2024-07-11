"use client";

import * as React from "react";
import { useLocale, useTranslations } from "next-intl";

import { cn } from "@/lib/utils";
import * as Icons from "@/components/Icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const webApps = [
  {
    key: "restaurantsAdmin",
    href: "https://app.aionsites.com",
  },
  {
    key: "companyAdmins",
    href: "https://console.aionsites.com",
  },
  {
    key: "installationGuide",
    href: "https://aionsites.com/install",
  },
];

const information = [
  {
    key: "termsOfService",
    href: "/legal/tos",
  },
  {
    key: "privacyPolicy",
    href: "/legal/privacy-policy",
  },
  {
    key: "contactUs",
    href: "/#contact",
  },
];

const grubLinks = [
  {
    key: "androidInstallations",
    href: "https://grub.aionsites.com/install/android",
  },
  {
    key: "appleInstallations",
    href: "https://grub.aionsites.com/install/apple",
  },
  {
    key: "integrationInfo",
    href: "https://grub.aionsites.com/integration",
  },
];

export function AionsitesNavigation() {
  const t = useTranslations("NavigationMenu");
  const locale = useLocale();
  const isRTL = locale === "he";

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>{t("gettingStarted")}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul
              className={`grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] ${
                isRTL ? "text-right" : "text-left"
              }`}
            >
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Icons.LogoIcon className="h-36 w-36" />
                    <p className="text-sm leading-tight text-muted-foreground">
                      {t("trustedPartner")}
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem
                href="https://aionsites.com/install"
                title={t("sections.installationGuide.title")}
              >
                {t("sections.installationGuide.description")}
              </ListItem>
              <ListItem
                href="https://aionsites.com/about"
                title={t("aboutUs.title")}
              >
                {t("aboutUs.description")}
              </ListItem>
              <ListItem
                href="https://aionsites.com/services"
                title={t("ourServices.title")}
              >
                {t("ourServices.description")}
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>{t("webApps")}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul
              className={`grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ${
                isRTL ? "text-right" : "text-left"
              }`}
            >
              {webApps.map((app) => (
                <ListItem
                  key={app.key}
                  title={t(`sections.${app.key}.title`)}
                  href={app.href}
                >
                  {t(`sections.${app.key}.description`)}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>{t("grub")}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul
              className={`grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] ${
                isRTL ? "text-right" : "text-left"
              }`}
            >
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="https://grub.aionsites.com/about"
                  >
                    <Icons.LogoIcon className="h-36 w-36" />
                    <p className="text-sm leading-tight text-muted-foreground">
                      {t("grubDescription")}
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              {grubLinks.map((link) => (
                <ListItem
                  key={link.key}
                  title={t(`sections.${link.key}.title`)}
                  href={link.href}
                >
                  {t(`sections.${link.key}.description`)}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>{t("information")}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul
              className={`grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ${
                isRTL ? "text-right" : "text-left"
              }`}
            >
              {information.map((info) => (
                <ListItem
                  key={info.key}
                  title={t(`sections.${info.key}.title`)}
                  href={info.href}
                >
                  {t(`sections.${info.key}.description`)}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
