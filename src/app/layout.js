import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";
import AppContext from "./AppContext";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title: "Pizzeria",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={roboto.className} suppressHydrationWarning={true}>
        <main className="max-w-5xl mx-auto p-4">
          <AppContext>
            <Header />
            {children}
            <footer className="border-t p-8 text-gray-500 mt-16 text-center">
              &copy; 2023 All rights reserved
            </footer>
          </AppContext>
        </main>
      </body>
    </html>
  );
}
