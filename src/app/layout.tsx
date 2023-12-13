import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import "./global.css";
import { ThemeProvider } from "@/components/theme-provider";
import NavBar from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spiridise 🏔️",
  description:
    "Déléguez la rédaction web SEO à une pro, et profitez dès maintenant d'un contenu web impactant ! Site web, tunnels de vente, rapports, réseaux sociaux... Spiridise donne des mots à vos idées.",
  keywords:
    "rédaction web SEO, rédacteur web, optimisation SEO, rédacteur web SEO, conception-rédaction, copywriting, storytelling, ghostwriting, correction, marketing digital, création de contenus, communication digitale",
};

declare global {
  interface Window {
    dataLayer: any[];
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <meta
          name="description"
          content="Déléguez la rédaction web SEO à une pro, et profitez dès maintenant d'un contenu web impactant ! Site web, tunnels de vente, rapports, réseaux sociaux... Spiridise donne des mots à vos idées."
        />
        <meta
          name="keywords"
          content="rédaction web SEO, rédacteur web, optimisation SEO, rédacteur web SEO, conception-rédaction, copywriting, storytelling, ghostwriting, correction, marketing digital, création de contenus, communication digitale"
        />
        <meta name="author" content="Spiridise" />

        <meta property="og:title" content="Spiridise, la solution rédaction" />
        <meta
          property="og:description"
          content="Déléguez la rédaction web SEO à une pro, et profitez dès maintenant d'un contenu web impactant ! Site web, tunnels de vente, rapports, réseaux sociaux... Spiridise donne des mots à vos idées."
        />
        <meta property="og:image" content="/assets/logo-spiridise.png" />
        <meta property="og:url" content="https://www.spiridise.com" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="Spiridise" />
        <meta name="twitter:title" content="Spiridise, la solution rédaction" />
        <meta
          name="twitter:description"
          content="Déléguez la rédaction web SEO à une pro, et profitez dès maintenant d'un contenu web impactant ! Site web, tunnels de vente, rapports, réseaux sociaux... Spiridise donne des mots à vos idées."
        />
        <meta name="twitter:image" content="/assets/logo-spiridise.png" />
      </head>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`}
      ></Script>
      <Script id="ga-script">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.GOOGLE_ANALYTICS}');`}
      </Script>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          {children}
          <Analytics />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
