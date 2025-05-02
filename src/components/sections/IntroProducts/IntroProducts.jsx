import './IntroProducts.scss'
import data from '../../../utils/intro-services.json'
import ListProducts from '../ListProducts/ListProducts'
import CarruselProducts from '../../CarruselProducts/CarruselProducts'

export default function IntroProducts() {
  const parrafos = data.parrafos

  // eslint-disable-next-line react/prop-types
  const ItemTipoProducto = ({ titulo, parrafo, imagen }) => {
    return (
      <article className='article-intro'>
        <div className='container-text'>
          <h2>{titulo}</h2>
          <p>{parrafo}</p>
        </div>
        <div className='container-img'>
          <img src={`./${imagen}`} alt="" />
        </div>
      </article>
    )
  }

  return (
    <div className='container-intro-productos'>
      <section className='section-standar section-intro-1'>
        <img className='img-bg-2-section' src="./bg-satelites/bg-satelite-1.svg" alt="" />
        <img className='img-bg-1-section' src="./bg-satelites/bg-satelite-11.svg" alt="" />
        <header>
          <h1>PRODUCTOS Y ACCESORIOS</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium reiciendis ex, quam quibusdam tempora officiis commodi officia maxime doloremque minus consectetur fugiat sapiente, nihil saepe dolorem nostrum voluptatibus architecto rem?
          </p>
        </header>
        <ItemTipoProducto
          titulo={"Produccion de Video y Entretenimiento"}
          parrafo={"Utilizacion de drones como herramientas profesionales para filmación aérea y terrestre, generar contenido multimedial o simplemente para entretenimiento"}
          imagen={"drone-3.webp"}
        />
        <ItemTipoProducto
          titulo={"Soluciones de Negocios"}
          parrafo={"Utilizacion de drones para soluciones empresariales para una nueva generación de trabajo, desde analisis de imagenes de suelos, analisis de poblacion en zonas urbanas o control de seguridad, enstre otras. Facilitando la toma de desiciones empresariales."}
          imagen={"drone-2.png"}
        />
        <ItemTipoProducto
          titulo={"Drones para Agricultura"}
          parrafo={"Utilizacion de drones para encontrar solución agrícola eficiente e inteligente, que aumenten la produccion, redusca los costo y cuide el medio ambiente"}
          imagen={"drone-1.webp"}
        />

      </section>

      <section className='section-standar section-intro-3'>
        <article>
          <h3 className='subtitle-service '>NUESTROS PRODUCTOS Y ACCESORIOS</h3>
          <p>Alguno de los Productos y accesorios con los que disponemos son los sigientes. Consultar por otros modelos o accesorios que no esten publicados</p>
          <ListProducts />
        </article>
      </section>

      <section className='section-standar section-intro-4'>
        <article>

          <h3 className='subtitle-service '>OTROS PRODUCTOS</h3>
          <p>Trabajamos en conjunto con <b>OM ConsultorAgro</b> para traerte productos para la agricultura de precisión y otras áreas de producción, directos de fabrica.</p>
          <p>Te invitamosas a que recorras la tienda de <b>OM ConsultorAgro</b> representantes oficiales de inportantes marcas de productos agricolas, en <a href="https://omconsultora.com.ar/agro/">omconsultora.com.ar/agro/</a> y te mostramos algunos de los productos que ofrecemos </p>
          <img src="./logo-OMConsultorAgro.png" alt="OMConsultorAgro" className='logo-OMConsultorAgro' />

          <CarruselProducts />
        </article>
      </section>
      <footer>
        <img src="./decoration1.svg" alt="" className='img-bg4' />
      </footer>
    </div>
  )
}
