import type { NextPage } from 'next';
import { GuitarTypes } from '../types/guitarTypes';
import Layout from '../components/Layout';
import Guitarra from '../components/Guitarra';
import styles from '../styles/Tienda.module.css'
import { CursoTypes } from '../types/cursoTypes';
import Curso from '../components/Curso';

const Home: NextPage<{guitarras : GuitarTypes[],curso : CursoTypes}> = ({guitarras,curso}) => {
  return (
      <Layout pagina='- Inicio'>
        <div>
        <main className="contenedor">
          <h1 className='heading'>Nuestra Coleccion</h1>
          <div className={styles.listado}>
            {guitarras.map(guitarra => <Guitarra key={guitarra._id} guitarra={guitarra}/>)}
          </div>
        </main>
          <Curso curso={curso}/>
        </div>
      </Layout>
  )
}

export async function getServerSideProps(){
  
  const urlGuitarras = `${process.env.API_URL}/guitarras?_sort=precio:asc`;
  const urlCurso = `${process.env.API_URL}/cursos`;

  const [resGuitarras,resCurso] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCurso)
  ]);
  const [guitarras,curso] = await Promise.all([
    resGuitarras.json(),
    resCurso.json()
  ]);

  return {
    props : {
      guitarras,
      curso
    }
  }
}

export default Home
