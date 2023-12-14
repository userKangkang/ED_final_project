import { Inter } from 'next/font/google'
import './globals.css'
import {Providers} from "@/app/providers";
import "@uploadthing/react/styles.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'AHAT Discussion',
    description: 'A platform used for discussion between classmates and teachers',
}

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <body className={inter.className}>
      <Providers>
          <main className={"light text-foreground bg-background"}>
              {children}
          </main>
      </Providers>
      </body>
      </html>
  )
}
