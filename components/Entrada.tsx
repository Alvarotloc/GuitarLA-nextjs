import Link from 'next/link';
import Image from 'next/image';
import { BlogsType } from '../types/blogsType';
import { formatearFecha } from '../helpers/index';
import styles from '../styles/Entrada.module.css'

interface IEntrada {
    entrada : BlogsType
}

const Entrada = ({entrada}:IEntrada):JSX.Element => {
    const {titulo,resumen,imagen,published_at,url} = entrada;
  return (
    <article>
        <Image priority={true} src={imagen.url} alt={`Ìmagen Blog ${titulo}`} width={800} height={600} layout='responsive'/>
        <div className={styles.contenido}>
            <h3>{titulo}</h3>
            <p className={styles.fecha}>{formatearFecha(published_at)}</p>
            <p className={styles.resumen}>{resumen}</p>
            <Link href={`/blog/${url}`}>
                <a className={styles.enlace}>
                Leer Entrada
                </a>
            </Link>
        </div>
    </article>
  )
}

export default Entrada