import Layout from "../../components/Layout";
import styles from "../../styles/Guitarra.module.css";
import { GuitarTypes } from "../../types/guitarTypes";
import Image from "next/image";

type IQuery = {
  query: IUrl;
};
type IUrl = {
  url: string;
};
type IEntrada = {
  entrada: GuitarTypes[];
};

const ProductoGuitarra = ({ entrada }: IEntrada): JSX.Element => {
  const { descripcion, nombre, imagen, precio } = entrada[0];
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
          <form className={styles.formulario}>
            <label htmlFor="">Cantidad</label>
            <select name="" id="">
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
  const entrada = await respuesta.json();
  return {
    props: {
      entrada,
    },
  };
}

export default ProductoGuitarra;
