import { Inter } from 'next/font/google'
import './globals.css'
import ReduxProvider from '@/provider/redux/ReduxProvider'
import Header from './components/layout/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Movies theater',
  description: 'Web App for searching throw movies',
}

export default function RootLayout({ children }) {
  return (
    <ReduxProvider>
      <html lang="en">
        <body className="bg-black ">
          <div className="grid grid-cols-12 md:grid-cols-12  h-lvh">
            {/* Left Menu */}
            <div className="bg-gray-800 p-4 col-span-2 ">
              <p className="text-xl font-bold">Left Menu</p>
              {/* Add your left menu content here */}
            </div>
            {/* Content */}
            <div className="col-span-8 bg-gray-700 rounded">
              <Header />
              {children}
            </div>
            {/* Right Menu */}
            <div className="bg-gray-800 p-4 col-span-2">
              <p className="text-xl font-bold">Right Menu</p>
              {/* Add your right menu content here */}
            </div>
          </div>

        </body>
      </html>
    </ReduxProvider>
  )
}
