import createNextIntlPlugin from "next-intl/plugin";

/*
 * Specify path to config file i18n.ts
 * Not necessary if placed at root in /SRC
 */
const withNextIntl = createNextIntlPlugin("./src/locales/config/i18n.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withNextIntl(nextConfig);
