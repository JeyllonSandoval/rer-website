import "../styles/globals.css";
import {Manrope} from "next/font/google"

const ManropeFont = Manrope({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-manrope"
}) 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
      </head>
      <body className={`${ManropeFont.variable}`}>
        <header>
          <h1>HEADER</h1>
        </header>
        <main>
          {children}
        </main>
        <footer>
          <h1>FOOTER</h1>
        </footer>
      </body>
    </html>
  );
}
