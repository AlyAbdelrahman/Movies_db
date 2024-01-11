import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/layout/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Movies theater',
  description: 'Web App for searching throw movies',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        </body>
    </html>
  )
}
