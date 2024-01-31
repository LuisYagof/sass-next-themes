import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // Our app's supported locales. We can have
  // as many as we want.
  locales: ["en", "es"],

  // If this locale is matched, pathnames work without
  // a prefix (e.g. `/about`)
  defaultLocale: "es",
});

export const config = {
  // Skip all paths that should not be internationalized.
  // This skips the folders "api", "_next" and all files
  // with an extension (e.g. favicon.ico)

  // matcher: ["/", "/(es|en)/:path*"],

  matcher: [
    // Enable a redirect to a matching locale at the root
    "/",

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    "/(es|en)/:path*",

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    // "/((?!_next|_vercel|.*\\..*).*)",
  ],
};
