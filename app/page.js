"use client"
import { Provider } from 'react-redux';
import store from './redux/store';
import HomePage from "./dashboard/page"

export default function Home() {
  return (
    <Provider store={store}>
      <div><HomePage/></div>
    </Provider>
  )
}
