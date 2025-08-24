import { Baloo_2 , Aboreto} from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  weight:['400','600','800']
});
const aboreto = Aboreto({
  variable: "--font-aboreto",
  subsets: ["latin"],
  weight:['400']
});



export const metadata = {
  title: "Mahesh Vispute",
  description: "BTech CSE student & MERN Stack developer building web applications that deliver results",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/profile_2.png" type="image" />
      <body
        className={`${baloo.variable} ${aboreto.variable} antialiased`}
      >
        <Nav/>
        {children}
      </body>
    </html>
  );
}
