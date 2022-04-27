import Link from 'next/link'; 
import styles from '../styles/Header.module.css';
import Image from 'next/image';
const Header = () => {
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
            </nav>
            </div>
        </div>
    </header>
  )
}

export default Header