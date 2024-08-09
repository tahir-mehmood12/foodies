import Header from "../components/mian-header/header";
import "./globals.css";

export const metadata = {
  title: "Foodies",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
