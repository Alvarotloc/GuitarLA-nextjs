import Layout from "../components/Layout"
import { BlogsType } from '../types/blogsType';
import ListadoBlog from '../components/ListadoBlog';
export interface IBlog {
  entradas : BlogsType[]
}

const Blog = ({entradas}:IBlog):JSX.Element => {
  return (
    <Layout pagina="- Blog">
        <main className="contenedor">
          <ListadoBlog entradas={entradas}/>
        </main>
    </Layout>
  )
}

export async function getStaticProps() {
  const url = `${process.env.API_URL}/blogs?_sort=created_at:asc`;
  const respuesta = await fetch(url);
  const entradas = await respuesta.json();
  return {
    props : {
      entradas
    }
  }
}

export default Blog