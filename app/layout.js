import { Inter } from 'next/font/google'
import './globals.css'
import ReduxProvider from '@/provider/redux/ReduxProvider'
import Header from './components/layout/Header'
import Account from './components/feature/account/Account'
import Link from 'next/link'
import Spinner from './components/shared/spinner'
import dynamic from 'next/dynamic'
const inter = Inter({ subsets: ['latin'] })
const BurgerMenu = dynamic(() => import('./components/feature/burgerMenu/BurgerMenu'), {
  loading: () => <Spinner/> 
});
const WatchList = dynamic(() => import('./components/feature/watchlist/Watchlist'), {
  loading: () => <Spinner/> 
});
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
            <div className="bg-gray-800 p-4 col-span-1 md:col-span-1  flex-col items-center justify-start hidden md:flex lg:flex ">
              <svg
                className="w-12 h-12 mb-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 3h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2zM15 8a1 1 0 100-2 1 1 0 000 2zm-2 8a2 2 0 100-4 2 2 0 000 4z"
                ></path>
              </svg>
              <p className="text-xl font-bold text-white mb-2">Movies Theater</p>
              
              <Link href="/dashboard" className="flex items-center text-white hover:underline">
                <svg
                  className="w-6 h-6 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12h14M12 5l7 7-7 7"
                  ></path>
                </svg>
                Home
              </Link>
            </div>
            <BurgerMenu />
            {/* Content */}
            <div className="lg:col-span-9 bg-gray-700 rounded md:col-span-11 sm:col-span-11">
              <Header />
              {children}
              <div className="sm:block md:block lg:hidden">
              <WatchList />

              </div>
            </div>
            {/* Right Menu */}
            <div className="bg-gray-800 p-4 lg:col-span-2 sm:col-span-12 md:col-span-12 md:h-full">
              <div className="sm:hidden md:hidden lg:block">
              <Account />
              </div>
              <div className="sm:hidden md:hidden lg:block">
              <WatchList />
              </div>
            </div>
          </div>

        </body>
      </html>
    </ReduxProvider>
  )
}
