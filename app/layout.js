import "./globals.css";

export const metadata = {
  title: "Eslam Awod — Full-Stack Developer",
  description:
    "Portfolio of Eslam Awod, a Full-Stack Developer specializing in React, Next.js, Laravel, Node.js, and AI/ML.",
  metadataBase: new URL("https://eslamawd.vercel.app"),
  keywords: [
    "Eslam Awod",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Laravel",
    "Node.js",
    "AI",
    "ML",
    "Portfolio",
  ],
  authors: [{ name: "Eslam Awod" }],
  openGraph: {
    title: "Eslam Awod — Full-Stack Developer",
    description:
      "Portfolio of Eslam Awod, a Full-Stack Developer specializing in React, Next.js, Laravel, Node.js, and AI/ML.",
    type: "website",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 1200,
        alt: "Eslam Awod profile photo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eslam Awod — Full-Stack Developer",
    description:
      "Portfolio of Eslam Awod, a Full-Stack Developer specializing in React, Next.js, Laravel, Node.js, and AI/ML.",
    images: ["/profile.jpg"],
  },
};

export default function RootLayout({ children }) {
  return children;
}
