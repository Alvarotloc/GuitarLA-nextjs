import Layout from '../components/Layout';
import Image from 'next/image';
import styles from '../styles/Nosotros.module.css'
const Nosotros = () => {
  return (
    <div>
        <Layout pagina='- Nosotros'>
            <main className="contenedor">
              <h2 className='heading'>Nosotros</h2>
              <div className={styles.contenido}>
                <Image src='/img/nosotros.jpg' alt='Imagen sobre nosotros' layout='responsive' width={600} height={450}/>
                <div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptates tempore, quidem vel facere delectus quasi quos eius ducimus modi similique in cum incidunt tempora repellat labore autem rerum iusto.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptates tempore, quidem vel facere delectus quasi quos eius ducimus modi similique in cum incidunt tempora repellat labore autem rerum iusto.</p>
                </div>
              </div>
            </main>
        </Layout>
    </div>
  )
}

export default Nosotros