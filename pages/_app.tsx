import '../styles/normalize.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const [carrito, setCarrito] = useState([]);
  return <Component {...pageProps} carrito={carrito}/>
}

export default MyApp
