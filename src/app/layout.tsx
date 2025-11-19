import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderFixed from "@/components/HeaderFixed";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Losos4 - Engineering Consulting",
  description: "Modern engineering consulting solutions",
  icons: {
    icon: [
      { url: '/Logo.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' }
    ],
    apple: '/Logo.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&family=Poppins:wght@700;800&family=Roboto+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
        <style>{`\n          .font-display-heading { font-family: 'Poppins', sans-serif; }\n          .font-display-body { font-family: 'Inter', sans-serif; }\n          .font-display-mono { font-family: 'Roboto Mono', monospace; }\n          .blueprint-overlay::before {\n            content: '';\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            background-image: url('https://www.transparenttextures.com/patterns/construction.png');\n            opacity: 0.03;\n            pointer-events: none;\n          }\n          /* Utility color aliases used in the provided markup */\n          .bg-background-light { background-color: #F8F9FA; }\n          .bg-background-dark { background-color: #0A192F; }\n          .text-text-light { color: #111318; }\n          .text-text-dark { color: #F8F9FA; }\n          .text-text-secondary-light { color: #495057; }\n          .text-text-secondary-dark { color: #A8B2D1; }\n          .surface-light { background-color: #FFFFFF; }\n          .surface-dark { background-color: #112240; }\n          .border-light { border-color: #dee2e6; }\n          .border-dark { border-color: #233554; }\n          .primary { color: #64FFDA; }\n          .bg-primary { background-color: #64FFDA; }\n          .selection\\:bg-primary::selection { background-color: #64FFDA; }\n          /* Support for Tailwind-like utilities that include slashes */\n          .bg-primary\\/10 { background-color: rgba(100,255,218,0.10); }\n          .hover\\:bg-primary\\/10:hover { background-color: rgba(100,255,218,0.10); }\n          .shadow-primary\\/20 { box-shadow: 0 12px 30px rgba(100,255,218,0.20); }\n          .shadow-primary\\/30 { box-shadow: 0 18px 40px rgba(100,255,218,0.30); }\n          .shadow-primary\\/10 { box-shadow: 0 6px 18px rgba(100,255,218,0.10); }\n          .hover\\:shadow-primary\\/10:hover { box-shadow: 0 6px 18px rgba(100,255,218,0.10); }\n          .transition-transform { transition: transform .2s ease; }\n          .group-hover\\:text-primary { color: inherit; }\n          .group:hover .group-hover\\:text-primary { color: #64FFDA; }\n          .group-hover\\:translate-x-1 { transform: translateX(0); transition: transform .2s ease; }\n          .group:hover .group-hover\\:translate-x-1 { transform: translateX(.25rem); }\n        `}</style>
      </head>
      <body className={`${inter.className} font-display-body bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark selection:bg-primary selection:text-background-dark relative overflow-x-hidden`}>
        {/* Animated background patterns */}
        <div className="fixed inset-0 -z-50 bg-animated-gradient bg-pattern-dots pointer-events-none" />
        
        {/* Decorative animated orbs */}
        <div className="fixed top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl animate-float -z-40 pointer-events-none" />
        <div className="fixed bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent-orange/10 to-transparent rounded-full blur-3xl animate-blob -z-40 pointer-events-none" style={{ animationDelay: "2s" }} />
        <div className="fixed top-1/3 left-1/3 w-80 h-80 bg-gradient-to-br from-blue-300/5 to-transparent rounded-full blur-3xl animate-float -z-40 pointer-events-none" style={{ animationDelay: "4s" }} />
        
        <HeaderFixed />
        {children}
        <Footer />
      </body>
    </html>
  );
}
