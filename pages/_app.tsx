import '../styles/normalize.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react'

interface IProducto {
  id : string;
  imagen : string,
  nombre : string,
  precio : number,
  cantidad : number
}

function MyApp({ Component, pageProps }: AppProps) {
  const [carrito, setCarrito] = useState<IProducto[]>([]);

  const agregarCarrito = (producto:IProducto) => {

    if(carrito.some(articulo => articulo.id === producto.id)){
      const carritoActualizado = carrito.map(articulo => {
        if(articulo.id === producto.id){
          articulo.cantidad = producto.cantidad + articulo.cantidad;
        }
        return articulo;
      });
      return setCarrito(carritoActualizado);
    }
    setCarrito([...carrito,producto]); 
  }

  return <Component {...pageProps} carrito={carrito} agregarCarrito={agregarCarrito}/>
}

export default MyApp
