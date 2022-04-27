import Layout from "../components/Layout"
import Entrada from "../components/Entrada"
import { BlogsType } from '../types/blogsType';
import styles from '../styles/Blog.module.css'
interface IBlog {
  entradas : BlogsType[]
}

const Blog = ({entradas}:IBlog):JSX.Element => {
  return (
    <Layout pagina="- Blog">
        <main className="contenedor">
          <h2 className="heading">Blog</h2>
          <div className={styles.blog}>
            {entradas.map(entrada => <Entrada key={entrada._id} entrada={entrada}/>)}
          </div>
        </main>
    </Layout>
  )
}

export async function getStaticProps() {
  const url = 'http://localhost:1337/blogs';
  const respuesta = await fetch(url);
  const entradas = await respuesta.json();
  return {
    props : {
      entradas
    }
  }
}

export default Blog