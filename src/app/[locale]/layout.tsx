import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.scss";
// import { ThemeContext } from "@/context/_ThemeContext";
import { ThemeProvider } from "@/context/ThemeProvider";
import { NextIntlClientProvider, useMessages } from "next-intl";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SASS themes",
  description: "Dark and light mode using SASS and next-themes",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        {/* <ThemeContext>{children}</ThemeContext> */}

        <ThemeProvider>
          <NextIntlClientProvider messages={useMessages()}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
