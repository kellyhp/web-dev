import "./globals.css";
import Navbar from "./_component/Navbar";

export const metadata = {
  title: "Kelly Phan's Portfolio",
  description: "My Sofware and UI/UX development portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="bg-white relative z-0">{children}</div>
      </body>
    </html>
  );
}
