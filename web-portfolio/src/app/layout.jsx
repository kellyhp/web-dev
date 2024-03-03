import "./globals.css";
import Navbar from "./_component/Navbar";

export const metadata = {
  title: "Kelly Phan's Portfolio",
  description: "My Sofware and UI/UX development portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Navbar />
        <div className="dark:bg-white bg-gray-200 dark:bg-grid-gray-200 bg-grid-white/[0.2] relative flex items-center justify-center align-middle z-0 ">
          {children}
        </div>
      </body>
    </html>
  );
}
