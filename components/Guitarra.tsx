import { GuitarTypes } from "../types/guitarTypes"
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Guitarra.module.css';


interface IGuitarra {
    guitarra : GuitarTypes
}
const Guitarra = ({guitarra}:IGuitarra):JSX.Element => {
    const {descripcion,imagen,nombre,precio,url} = guitarra;
  return (
    <div className={styles.guitarra}>
        <Image layout="responsive" src={imagen.url} alt={`Imagen de guitarra con nombre: ${nombre}`} height={350} width={180}/>
        <div className={styles.contenido}>
            <h3>{nombre}</h3>
            <p className={styles.descripcion}>{descripcion}</p>
            <p className={styles.precio}>{precio}€</p>
            <Link href={`/guitarras/${url}`}>
                <a className={styles.enlace}>
                Ver Producto
                </a></Link>
        </div>
    </div>
  )
}

export default Guitarra