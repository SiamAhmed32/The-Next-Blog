import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const satoshi = localFont({
  src: "./fonts/Satoshi-Variable.woff2",
  display: "swap",
  variable: "--font-satoshi",
});

export const metadata = {
  title: {
    default: "The Next Blog | A Diverse Collection of Articles",
    template: "%s | The Next Blog",
  },
  description:
    "A blog exploring a wide range of topics, from modern web development and data science to self-improvement and technology trends.",
  keywords: [
    "Next.js",
    "React",
    "Blog",
    "Web Development",
    "Data Science",
    "Machine Learning",
    "Technology",
    "Self Improvement",
  ],
  authors: [{ name: "Your Name Here" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${satoshi.variable}`}>
      <body className="antialiased bg-white text-gray-900">
        <Header />
        <section className="py-10 border-t border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row">{children}</div>
          </div>
        </section>
        <MobileNav />
      </body>
    </html>
  );
}
