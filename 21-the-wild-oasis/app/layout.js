import Logo from "./_components/Logo";
import Navigation from "./_components/navigation";
import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  // title: "The Wild Oasis",
  title: {
    template: "%s The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },
  description:
    "Luxurious Cabin Hotel, located in the heart of the Italian surrounded by beautiful mountains and dark forests",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen`}
      >
        <header>
          <Logo />
        </header>
        <Navigation />
        <main>{children}</main>
        <footer className="text-center">Copyright by The Wild Oasis</footer>
      </body>
    </html>
  );
}
