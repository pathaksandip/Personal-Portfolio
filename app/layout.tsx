import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sandip Pathak | Full Stack Developer Portfolio",
  description:
    "Portfolio of Sandip Pathak, a Full Stack Software Developer specializing in scalable and efficient web applications. Explore projects, experience, and contact information.",
  keywords: [
    "Sandip Pathak",
    "Full Stack Developer",
    "Portfolio",
    "Web Developer",
    "Software Engineer",
    "React",
    "Next.js",
    "Projects",
    "Experience",
    "Contact",
  ],
  authors: [{ name: "Sandip Pathak", url: "https://sandippathak.com.np" }],
  creator: "Sandip Pathak",
  openGraph: {
    title: "Sandip Pathak | Full Stack Developer Portfolio",
    description:
      "Portfolio of Sandip Pathak, a Full Stack Software Developer specializing in scalable and efficient web applications.",
    url: "https://sandippathak.com.np",
    siteName: "Sandip Pathak Portfolio",
    images: [
      {
        url: "/Images/logo.png",
        width: 512,
        height: 512,
        alt: "Sandip Pathak Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sandip Pathak | Full Stack Developer Portfolio",
    description:
      "Portfolio of Sandip Pathak, a Full Stack Software Developer specializing in scalable and efficient web applications.",
    creator: "@sandippathak",
    images: ["/Images/logo.png"],
  },
  metadataBase: new URL("https://sandippathak.com.np"),
  alternates: {
    canonical: "https://sandippathak.com.np",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  icons: {
    icon: "/Images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {" "}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
