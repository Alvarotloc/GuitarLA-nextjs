import Layout from "../../components/Layout";
import styles from "../../styles/Guitarra.module.css";
import { GuitarTypes } from "../../types/guitarTypes";
import Image from "next/image";
import { FormEvent, useState } from 'react';

type IQuery = {
  query: IUrl;
};
type IUrl = {
  url: string;
};
type IGuitarra = {
  guitarra: GuitarTypes[];
  agregarCarrito : Function;
};

const ProductoGuitarra = ({ guitarra,agregarCarrito }: IGuitarra): JSX.Element => {
  const [cantidad, setCantidad] = useState<number>(1);
  const { descripcion, nombre, imagen, precio,id } = guitarra[0];

  const handleSubmit = (e:FormEvent) => {
    e.preventDefault();

    if(cantidad < 1){
      return alert('Cantidad no válida');
    }
    const guitarraSeleccionada = {
      id,
      imagen : imagen.url,
      nombre,
      precio,
      cantidad
    };

    agregarCarrito(guitarraSeleccionada);
  }


  return (
    <Layout pagina={`- Guitarra ${nombre}`}>
      <div className={styles.guitarra}>
        <Image
          layout="responsive"
          src={imagen.url}
          alt={`Imagen de guitarra con nombre: ${nombre}`}
          height={350}
          width={180}
        />
        <div className={styles.contenido}>
          <h3>{nombre}</h3>
          <p className={styles.descripcion}>{descripcion}</p>
          <p className={styles.precio}>{precio}€</p>
          <form className={styles.formulario} onSubmit={handleSubmit}>
            <label htmlFor="cantidad">Cantidad</label>
            <select name="cantidad" id="cantidad" value={cantidad} onChange={e => setCantidad(parseInt(e.target.value))}>
              <option value="">-- Seleccione --</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <input type="submit" value="Añadir al Carrito" />
          </form>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ query: { url } }: IQuery) {
  const urlFetch = `${process.env.API_URL}/guitarras/?url=${url}`;

  const respuesta = await fetch(urlFetch);
  const guitarra = await respuesta.json();
  return {
    props: {
      guitarra,
    },
  };
}

export default ProductoGuitarra;
