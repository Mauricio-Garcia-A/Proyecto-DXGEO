import './ListProducts.scss'

const ListaProductos = [
  {
    title: "DJI Mini 4 Pro",
    subtitle: "Fly More Combo Plus + RC",
    description: "el Mini 4 Pro realizará automáticamente maniobras de estilo profesional para obtener resultados cinematográficos utilizando uno de los tres modos de disparo: Retrato, Proximidad y Paisaje.",
    precio: "Consultar y formas de pago",
    imgBG: "./img-producto-1.png",
    imgUrl:"./img-mini-3-pro.png"
  },
  {
    title: "DJI NEO",
    subtitle: "ssdsdsdsdsdsds",
    description: "Lorem ipsum dolor sit amet cont. Laudantium iusto aliquam delectus laboriosam! Voluptatibus quae ipsa molestiae quis, deleniti iure nam cupiditate, delectus magni odit sapiente vero enim at voluptate!",
    precio: "Consultar",
    imgBG: "./img-producto-2.png",
    imgUrl:"./img-neo.png"
  },
  {
    title: "DJI MAVIC 3 PRO",
    subtitle: "ssdsdsdsdsdsds",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto aliquam delectus Voluptatibus quae ipsa molestiae quis, deleniti iure nam cupiditate, delectus magni odit sapiente vero enim at voluptate!",
    precio: "Consultar",
    imgBG: "./img-producto-3.png",
    imgUrl:"./img-mavic-3-pro.png"
  },
  {
    title: "DJI AGRAS T40",
    subtitle: "ssdsdsdsdsdsds",
    description: "Lorem ipsum dolor amet consectetur adipisicing elit. Laudantium iusto aliquam delectus laboriosam! Voluptatibus quae ipsa molestiae quis, deleniti iure nam cupiditate, delectus magni odit sapiente vero enim at voluptate!",
    precio: "Consultar",
    imgBG: "./img-producto-4.png",
    imgUrl:"./img-agras-t40.png"
  }
]

export default function ListProducts() {

  // eslint-disable-next-line react/prop-types
  const ItemProducto = ({ key, title, subtitle, description, precio, url, urlBG}) => {
    return (
      <article className='conteiner-item-product ' key={key}>
        <div className='container-images'>
            <img src={url} alt="" className='img-icon'/>
            <img src={urlBG} className='contener-img-bg' />
        </div>
        
        <div className='container-text'>
          <header>
            <h1>{title}</h1>
            <p>{subtitle}</p>
          </header>
          <div>
            <p>{description}</p>
            
          </div>
          <footer>
            <p>{precio}</p>
            <button>Comprar / Consultar</button>
          </footer>
        </div>
        
      </article>
    )
  }

  return (
    <section className='section-list-products'>
      <div className='container-items-product'>
        {
          ListaProductos.map((product, index) => (
            
              <ItemProducto
                key={`product-${index}`}
                title={product.title}
                subtitle={product.subtitle}
                description={product.description}
                precio={product.precio}
                url={product.imgUrl}
                urlBG={product.imgBG}
              />
            
          ))
        }
      </div>

    </section>
  )
}
