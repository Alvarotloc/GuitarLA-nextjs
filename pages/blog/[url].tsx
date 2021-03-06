import { BlogsType } from "../../types/blogsType";
import Layout from "../../components/Layout";
import Image from 'next/image';
import { formatearFecha } from '../../helpers/index';
import styles from '../../styles/Entrada.module.css';

type IQuery = {
  params: IUrl;
};
// type IQuery = {
//     query : IUrl
// }
type IUrl = {
  url: string;
};
type IEntrada = {
  entrada: BlogsType[];
};

const EntradaBlog = ({ entrada }: IEntrada): JSX.Element => {
  const { contenido, imagen, published_at, titulo } = entrada[0];
  return (
    <Layout pagina="- Entrada">
      <main className="contenedor">
        <h1 className="heading">{titulo}</h1>
        <article className={styles.entrada}>
            <Image priority={true} layout="responsive" width={800} height={600} alt={`Imagen entrada ${titulo}`} src={imagen.url}/>
            <div className={styles.contenido}>
                <p className={styles.contenido}>{formatearFecha(published_at)}</p>
                <p className={styles.texto}>{contenido}</p>
            </div>
        </article>
      </main>
    </Layout>
  );
};

export async function getStaticPaths() {
  const url = `${process.env.API_URL}/blogs`;
  const respuesta = await fetch(url);
  const entradas: BlogsType[] = await respuesta.json();

  const paths = entradas.map(({ url }) => ({
    params: { url },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { url } }: IQuery) {
  const urlFech = `${process.env.API_URL}/blogs?url=${url}`;
  const respuesta = await fetch(urlFech);
  const entrada = await respuesta.json();
  return {
    props: {
      entrada,
    },
  };
}

// export async function getServerSideProps({query: {id}}:IQuery) {
// const url = `${process.env.API_URL}/blogs/${id}`;

//     const respuesta = await fetch(url);
//     const entrada = await respuesta.json();
//     return {
//         props : {
//             entrada
//         }
//     }
// }

export default EntradaBlog;
