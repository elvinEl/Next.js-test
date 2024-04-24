import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Providers from "@/components/header/providers/Providers";
import Test from "@/components/header/Tabs";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <main>
            <header>
              <Header />
            </header>
            <Test />
            <main>{children}</main>
            <footer></footer>
          </main>
        </Providers>
      </body>
    </html>
  );
}
