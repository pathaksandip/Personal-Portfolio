import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Sandip Pathak | Full Stack Developer Portfolio",
    template: "%s | Sandip Pathak"
  },
  description:
    "Portfolio of Sandip Pathak, a Full Stack Software Developer specializing in React, Next.js, Node.js, and scalable web applications. View projects, experience, and contact information.",
  keywords: [
    "Sandip Pathak",
    "Full Stack Developer",
    "Software Engineer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "Portfolio",
    "Web Development",
    "Frontend Development",
    "Backend Development",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "MongoDB",
    "PostgreSQL",
    "AWS",
    "Vercel",
    "Projects",
    "Experience",
    "Contact",
    "Nepal",
    "Kathmandu"
  ],
  authors: [{ name: "Sandip Pathak", url: "https://sandippathak.com.np" }],
  creator: "Sandip Pathak",
  publisher: "Sandip Pathak",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sandippathak.com.np",
    siteName: "Sandip Pathak Portfolio",
    title: "Sandip Pathak | Full Stack Developer Portfolio",
    description: "Portfolio of Sandip Pathak, a Full Stack Software Developer specializing in React, Next.js, Node.js, and scalable web applications.",
    images: [
      {
        url: "https://sandippathak.com.np/Images/logo.png",
        width: 512,
        height: 512,
        alt: "Sandip Pathak - Full Stack Developer",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sandippathak",
    creator: "@sandippathak",
    title: "Sandip Pathak | Full Stack Developer Portfolio",
    description: "Portfolio of Sandip Pathak, a Full Stack Software Developer specializing in React, Next.js, Node.js, and scalable web applications.",
    images: ["https://sandippathak.com.np/Images/logo.png"],
  },
  metadataBase: new URL("https://sandippathak.com.np"),
  alternates: {
    canonical: "https://sandippathak.com.np",
    languages: {
      'en-US': '/en-US',
    },
  },
  verification: {
    google: "rmvUKL0R_wAnKOeJzhspesB0jPjRGtdZ-rlJpcK-wpU",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  icons: {
    icon: [
      { url: "/Images/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/Images/logo.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/Images/logo.png",
    shortcut: "/Images/logo.png",
  },
  manifest: "/manifest.json",
  category: "technology",
  classification: "Portfolio",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Sandip Pathak",
    "url": "https://sandippathak.com.np",
    "image": "https://sandippathak.com.np/Images/logo.png",
    "sameAs": [
      "https://github.com/sandippathak",
      "https://linkedin.com/in/sandippathak",
      "https://twitter.com/sandippathak"
    ],
    "jobTitle": "Full Stack Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "knowsAbout": [
      "React",
      "Next.js", 
      "Node.js",
      "TypeScript",
      "JavaScript",
      "MongoDB",
      "PostgreSQL",
      "AWS",
      "Web Development",
      "Full Stack Development"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kathmandu",
      "addressCountry": "NP"
    },
    "description": "Full Stack Software Developer specializing in React, Next.js, Node.js, and scalable web applications."
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={inter.className}>
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
