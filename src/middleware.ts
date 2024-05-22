import createMiddleware from "next-intl/middleware";
import { locales, localePrefix, defaultLocale } from "@/lib/config";

export default createMiddleware({
  defaultLocale,
  locales,
  localePrefix,
});

export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    "/",

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    "/(he|en)/:path*",

    // Enable redirects that add missing locales
    // (e.g. `/about` -> `/en/about`)
    "/((?!_next|_vercel|.*\\..*).*)",
  ],
};
