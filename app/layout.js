import "./globals.css";

export const metadata = {
  title: "Eslam Awd — Full-Stack Developer",
  description:
    "Portfolio of Eslam, a Full-Stack Developer specializing in React, Next.js, Laravel, Node.js, and AI/ML.",
  metadataBase: new URL("https://eslamawd.vercel.app"),
  keywords: [
    "Eslam",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Laravel",
    "Node.js",
    "AI",
    "ML",
    "Portfolio",
  ],
  authors: [{ name: "Eslam" }],
  openGraph: {
    title: "Eslam — Full-Stack Developer",
    description:
      "Portfolio of Eslam, a Full-Stack Developer specializing in React, Next.js, Laravel, Node.js, and AI/ML.",
    type: "website",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 1200,
        alt: "Eslam Awd profile photo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eslam Awd — Full-Stack Developer",
    description:
      "Portfolio of Eslam, a Full-Stack Developer specializing in React, Next.js, Laravel, Node.js, and AI/ML.",
    images: ["/profile.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {
              try {
                const stored = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const isDark = stored ? stored === 'dark' : prefersDark;
                document.documentElement.classList.toggle('dark', isDark);
              } catch (_) {
                document.documentElement.classList.add('dark');
              }
            })();`,
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
