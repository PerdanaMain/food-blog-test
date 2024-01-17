import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Food Blog",
  description: "Development blog for the Food Blog project.",
};

// css imports
import "./assets/css/bootstrap.min.css";
import "./assets/plugins/slick/slick.css";
import "./assets/plugins/slick/slick-theme.css";
import "./assets/css/style.css";
import "./assets/css/dark-theme.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}

        {/* Javascripts */}
        <Script src="assets/js/bootstrap.bundle.min.js"></Script>
        <Script src="assets/js/jquery.min.js"></Script>
        <Script src="assets/plugins/slick/slick.min.js"></Script>
        <Script src="assets/js/main.js"></Script>
        <Script src="assets/js/index.js"></Script>
        <Script src="assets/js/loader.js"></Script>
      </body>
    </html>
  );
}
