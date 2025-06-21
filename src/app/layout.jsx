import "./globals.css";
import LocalFont from "next/font/local";

const urbanist = LocalFont({
  src: "../assets/fonts/Urbanist-Regular.otf",
  display: "swap",
  variable: "--font-urbanist",
});


export const metadata = {
  title: "ModuNest - Modular Living",
  description: "Premium modular tiny homes and container homes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={urbanist.variable}>
      <body>
        {children}
      </body>
    </html>
  );
}
