import Head from 'next/head';
interface ILayout {
    children : JSX.Element;
    pagina : string;
}
const Layout = ({children,pagina}:ILayout):JSX.Element => {
  return (
    <div>
        <Head>
            <title>GuitarLA {pagina}</title>
            <meta name="description" content="Sitio web de venta de guitarras" />
        </Head>
        {children}
    </div>
  )
}

export default Layout