import Header from "@/component/Header";
import RootStyleRegistry from "./emotion";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wiseman Associates",
  manifest: "/site.webmanifest",
  description: "Public speaking and legal advisers",
  applicationName: "wiseman associates",
  generator: "wiseman associates",
  metadataBase: new URL("https://wisemanassociates.com"),
  authors: [
    { name: "Alimazoya David", url: "https://davidalimazo.vercel.app" },
  ],
  creator: "Sis Risi",
  colorScheme: "dark",
  publisher: "Alimazoya David",
  icons: {
    icon: {
      url: "/favicon.png",
      type: "image/png",
      rel: "icon",
    },
    shortcut: { url: "favicon-32x32.png", type: "image/png" },
  },
  openGraph: {
    title: "Wiseman Associates",
    description: "Public speaking and legal advisers",
    url: "https://wiseman.com",
    siteName: "wiseman",
    images: [
      {
        url: "https://nextjs.org/og.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://nextjs.org/og-alt.png",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en-US",
    type: "website",
    emails: "info@wisemanassociates.com",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#444648" },
    { media: "(prefers-color-scheme: dark)", color: "#444648" },
  ],

  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  bookmarks: ["https://wisemanassociates.com"],
  category: "consultancy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div
          className="bg-[#444648] flex flex-col"
          style={{
            maxWidth: "1280px",
            marginLeft: "auto",
            marginRight: "auto",
            minHeight: "100vh",
            overflow: "hidden",
          }}
        >
          <RootStyleRegistry>
            <Header />
            {children}
          </RootStyleRegistry>
        </div>
      </body>
    </html>
  );
}
