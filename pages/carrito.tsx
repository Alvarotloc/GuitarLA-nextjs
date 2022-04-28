import Layout from "../components/Layout";
import styles from "../styles/Carrito.module.css";
import type { IProducto } from "./_app";
import Image from "next/image";
import { useState, useEffect } from 'react';

interface ICarrito {
  carrito: IProducto[];
  actualizarCantidad : Function;
  eliminarProducto : Function;
}

const Carrito = ({ carrito,actualizarCantidad,eliminarProducto }: ICarrito): JSX.Element => {
    const [total, setTotal] = useState<number>(0);
    useEffect(() => {
        const calculoTotal = carrito.reduce((totalAcumulado, producto) => totalAcumulado + (producto.cantidad * producto.precio),0);
        setTotal(calculoTotal);
    },[carrito])
  return (
    <Layout pagina="- Carrito de Compras">
      <>
        <h1 className="heading">Carrito</h1>
        <main className={`contenedor ${styles.contenido}`}>
          <div className={styles.carrito}>
              <h2>Artículos</h2>
            {carrito.length === 0
              ? "Carrito Vacío"
              : carrito.map((producto) => (
                  <div key={producto.id} className={styles.producto}>
                    <div>
                      <Image
                        src={producto.imagen}
                        layout="responsive"
                        width={250}
                        height={500}
                        alt={producto.nombre}
                      />
                    </div>
                    <div>
                      <p className={styles.nombre}>{producto.nombre}</p>
                      <div className={styles.cantidad}>
                        <p>
                          Cantidad:
                        </p>
                        <select
                          name="cantidad"
                          id="cantidad"
                          className={styles.select}
                          value={producto.cantidad}
                          onChange={e => actualizarCantidad({
                              cantidad : e.target.value,
                              id : producto.id
                          })}
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </div>
                      <p className={styles.precio}>
                        <span>{producto.precio}</span>€
                      </p>
                      <p className={styles.subtotal}>
                        Subtotal:{" "}
                        <span>{producto.precio * producto.cantidad}</span>€
                      </p>
                    </div>
                    <button type="button" className={styles.eliminar} onClick={() => eliminarProducto(producto.id)}>X</button>
                  </div>
                ))}
          </div>
          <div className={styles.resumen}>
              {total > 0 ? (
                  <>
                    <h3>Resumen de Compra</h3>
                    <p>Total a pagar: {total}€</p>
                  </>
              ) : (
                  <p>No hay productos en el carrito</p>
              )}
          </div>
        </main>
      </>
    </Layout>
  );
};

export default Carrito;
