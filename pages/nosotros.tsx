import Link from 'next/link';
import Layout from '../components/Layout';
const Nosotros = () => {
  return (
    <div>
        <Layout pagina='- Nosotros'>
            <h1>Desde nosotros</h1>
        </Layout>
        <Link href='/'>Ir a Inicio</Link>
    </div>
  )
}

export default Nosotros