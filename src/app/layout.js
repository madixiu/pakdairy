import localFont from "next/font/local";
import "./globals.css";
import Topbar from "./Components/Topbar";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "شرکت لبنیات پاستوریزه پاک",
  description: "مجموعه لبنی پاک با برندی معتبر، ارائه دهنده سبد کامل فرآورده های سالم، باکیفیت و رقابتی، بهترین انتخاب مشتریان و فعال در بازارهای ملی و فرا ملی است.",
};

export default function RootLayout({ children }) {
  // const { isRTL } = useContext(LanguageContext);
  const { isRTL } = true;
  return (
    <html lang="en" dir="rtl">
       <head>
        <link 
          href="https://cdnjs.cloudflare.com/ajax/libs/vazir-font/30.1.0/font-face.css" 
          rel="stylesheet" 
        />
      </head>
      <body
        
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <Topbar /> {/* Render the Topbar */}
        <main className="mt-24">{children}</main> {/* Render the page content */}
      </body>
    </html>
  );
}
