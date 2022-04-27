import Layout from "../components/Layout"
import { GuitarTypes } from '../types/guitarTypes';
import Guitarra from '../components/Guitarra';
import styles from '../styles/Tienda.module.css';

interface ITienda {
  guitarras : GuitarTypes[]
}

const Tienda = ({guitarras}:ITienda):JSX.Element => {
  return (
    <Layout pagina="- Tienda Virtual">
      <main className="contenedor">
      <h1 className="heading">Nuestra Coleccion</h1>
      <div className={styles.listado}>
        {guitarras.map(guitarra => <Guitarra key={guitarra._id} guitarra={guitarra}/>)}
      </div>
      </main>
    </Layout>
  )
}

export async function getServerSideProps(){
  const url = `${process.env.API_URL}/guitarras?_sort=precio:asc`;
  const respuesta = await fetch(url);
  const guitarras = await respuesta.json();

  return {
    props : {
      guitarras
    }
  }
}

export default Tienda