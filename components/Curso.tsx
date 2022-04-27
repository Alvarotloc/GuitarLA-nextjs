import { CursoTypes } from '../types/cursoTypes';
import styles from '../styles/Curso.module.css';
import Link from 'next/link';
interface ICurso {
    curso : CursoTypes
}
const Curso = ({curso}:ICurso):JSX.Element => {
    const {contenido,titulo,imagen} = curso;
  return (
    <section>
        <div className={`contenedor ${styles.grid}`}>
            <div className={styles.contenido}>
                <h2 className='heading'>{titulo}</h2>
                <p className={styles.texto}>{contenido}</p>

                <Link href='#'><a className={styles.enlace}>Más Información</a></Link>
            </div>
        </div>
        <style jsx>{`
            section{
                padding : 10rem 0;
                margin-top: 10rem;
                background-image: linear-gradient(to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7)), url(${imagen.url});
                background-size: cover;
                background-position: 50%;
            }
        `}</style>
    </section>
  )
}

export default Curso