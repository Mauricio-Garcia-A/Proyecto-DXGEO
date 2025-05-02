import './HeaderProducts.scss'

export default function HeaderProducts() {
  return (
    <>
    <section className="container-header-products">
      <div className="header-products">
          <img src="./titulo-logo-v2.svg" alt="" className='img-titulo-logo' />
          <h1>PRODUCTOS</h1>
        
      </div>

      <img src='./fondo-productos.jpg' className="hero-img main"/>
      <img src='./fondo-productos.jpg' className="hero-img blur"/>
    </section>
    <div className='pie-presentacion'>
      
    </div>
  </>
  )
}
