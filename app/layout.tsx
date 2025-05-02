import type { Metadata } from "next";
import NavBar from "./_NavBar/NavBar";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'

export const metadata: Metadata = {
  title: "MedEval",
  description: "Medical Assessment App",
};

function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <NavBar/>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}

export default RootLayout