import { Pathnames } from "next-intl/navigation";

export const locales = ["en", "es"] as const;

// TODO: PATHNAMES?
export const pathnames = {
  "/": "/",
  "/pathnames": {
    en: "/pathnames",
    es: "/rutas",
  },
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;
