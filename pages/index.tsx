import type { NextPage } from 'next';
import { GuitarTypes } from '../types/guitarTypes';
import Layout from '../components/Layout';
import Guitarra from '../components/Guitarra';
import styles from '../styles/Tienda.module.css'
import { CursoTypes } from '../types/cursoTypes';
import Curso from '../components/Curso';
import { BlogsType } from '../types/blogsType';
import ListadoBlog from '../components/ListadoBlog';

const Home: NextPage<{guitarras : GuitarTypes[],curso : CursoTypes, entradas : BlogsType[]}> = ({guitarras,curso,entradas}) => {
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
          <section className="contenedor">
          <ListadoBlog entradas={entradas}/>
          </section>
        </div>
      </Layout>
  )
}

export async function getServerSideProps(){
  
  const urlGuitarras = `${process.env.API_URL}/guitarras?_sort=precio:asc`;
  const urlCurso = `${process.env.API_URL}/cursos`;
  const urlBlogs = `${process.env.API_URL}/blogs?_limit=3&_sort=created_at:asc`;

  const [resGuitarras,resCurso,resEntradas] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCurso),
    fetch(urlBlogs)
  ]);
  const [guitarras,curso,entradas] = await Promise.all([
    resGuitarras.json(),
    resCurso.json(),
    resEntradas.json()
  ]);

  return {
    props : {
      guitarras,
      curso,
      entradas
    }
  }
}

export default Home
