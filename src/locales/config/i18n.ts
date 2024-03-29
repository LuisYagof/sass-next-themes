import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

// Can be imported from a shared config
const locales = ["en", "es"];

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as "es" | "en")) notFound();

  // TODO: THIS CONFIG WORKS WITHOUT TURBOPACK
  /* return {
    messages: (await import(`../messages/${locale}.json`)).default,
  }; */

  return {
    messages: (
      await (locale === "en"
        ? // When using Turbopack, this will enable HMR for `en`
          import("../messages/en.json")
        : locale === "es"
        ? import("../messages/es.json")
        : import(`../messages/${locale}.json`))
    ).default,
  };
});
