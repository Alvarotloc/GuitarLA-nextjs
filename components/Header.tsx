import Link from 'next/link'; 
import styles from '../styles/Header.module.css';
import Image from 'next/image';
import type { GuitarTypes } from '../types/guitarTypes';
import { useRouter } from 'next/router';

interface IHeader {
    guitarra ?: GuitarTypes;
}

const Header = ({guitarra}:IHeader) => {
    const {pathname} = useRouter();
  return (
    <header className={styles.header}>
        <div className='contenedor'>
            <div className={styles.barra}>
            <div>
                <Link href='/' >
                    <a>
                    <Image src='/img/logo.svg' width={400} height={100} alt='Imagen de logo de empresa'/>
                    </a>
                </Link>
            </div>
            <nav className={styles.navegacion}>
                <Link href='/'>Inicio</Link>
                <Link href='/nosotros'>Nosotros</Link>
                <Link href='/blog'>Blog</Link>
                <Link href='/tienda'>Tienda</Link>
                <Link href='/carrito'>
                    <a>
                        <Image src='/img/carrito.png' alt='Imagen carrito' layout='fixed' width={30} height={25}/>
                    </a>
                </Link>
            </nav>
            </div>
            {guitarra && (
                <div className={styles.modelo}>
                    <h2>Modelo {guitarra.nombre}</h2>
                    <p className={styles.resumen}>{guitarra.descripcion}</p>
                    <p className={styles.precio}>{guitarra.precio}€</p>
                    <Link href={`/guitarras/${guitarra.url}`}>
                        <a className={styles.enlace}>
                            Ver Producto
                        </a>
                    </Link>
                </div>
            )}
        </div>

        {pathname === '/' && (
            <div className={styles.guitarra}>
               <Image layout='fixed' width={500} height={1200} src='/img/header_guitarra.png' alt='Imagen de header guitarra'/>
            </div>
        )}

    </header>
  )
}

export default Header