import { AppProps } from 'next/app'
import Router from 'next/router'
import { Provider } from 'react-redux'
import "tailwindcss/tailwind.css";
import '../styles/fontawesome-5.13.0/css/all.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import createStore from '../store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'


Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={createStore}>
      <Component {...pageProps} />
    </Provider>
  )
}
