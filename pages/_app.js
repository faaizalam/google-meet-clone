import '@/styles/globals.css'


import { SocketProvider } from '@/Context/Socket'
export default function App({ Component, pageProps }) {
  return(
  <SocketProvider>
  <Component {...pageProps} />

  </SocketProvider>

  )
}
