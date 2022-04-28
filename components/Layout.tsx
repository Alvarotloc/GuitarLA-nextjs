import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import { GuitarTypes } from '../types/guitarTypes';

interface ILayout {
    children : JSX.Element;
    pagina : string;
    guitarra ?: GuitarTypes;
}
const Layout = ({children,pagina,guitarra}:ILayout):JSX.Element => {
  return (
    <div>
        <Head>
            <title>GuitarLA {pagina}</title>
            <meta name="description" content="Sitio web de venta de guitarras" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap" rel="stylesheet" />
        </Head>
        <Header guitarra={guitarra}/>
        {children}
        <Footer />
    </div>
  )
}

export default Layout