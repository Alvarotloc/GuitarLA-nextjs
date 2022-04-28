import '../styles/normalize.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'

export interface IProducto {
  id : string;
  imagen : string,
  nombre : string,
  precio : number,
  cantidad : number
}

function MyApp({ Component, pageProps }: AppProps) {
  const [carrito, setCarrito] = useState<IProducto[]>([]);

  useEffect(() => {
    const carritoLS = JSON.parse(localStorage.getItem('carrito') || '[]') ?? [];
    if(carritoLS.length > 0){
      setCarrito(carritoLS);
    }
  },[])

  useEffect(() => {
      localStorage.setItem('carrito', JSON.stringify(carrito));
  },[carrito])

  const agregarCarrito = (producto:IProducto) => {

    if(carrito.some(articulo => articulo.id === producto.id)){
      const carritoActualizado = carrito.map(articulo => {
        if(articulo.id === producto.id){
          articulo.cantidad = producto.cantidad;
        }
        return articulo;
      });
      return setCarrito(carritoActualizado);
    }
    setCarrito([...carrito,producto]); 
  }

  const actualizarCantidad = (producto:IProducto) => {
    const carritoActualizado = carrito.map(articulo => {
      if(articulo.id === producto.id){
        articulo.cantidad = producto.cantidad;
      }
      return articulo;
    });
    setCarrito(carritoActualizado);
  }

  const eliminarProducto = (id:string) => {
    const confirmar = confirm('¿Desea eliminar este producto?');
    if(confirmar){
      const carritoActualizado = carrito.filter(producto => producto.id !== id);
      setCarrito(carritoActualizado);
    }
  }

  return <Component {...pageProps} carrito={carrito} agregarCarrito={agregarCarrito} actualizarCantidad={actualizarCantidad} eliminarProducto={eliminarProducto}/>
}

export default MyApp
