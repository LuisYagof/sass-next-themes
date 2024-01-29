import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.scss";
// import { ThemeContext } from "@/context/_ThemeContext";
import { ThemeProvider } from "@/context/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SASS themes",
  description: "Dark and light mode using SASS and next-themes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {/* <ThemeContext>{children}</ThemeContext> */}
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
