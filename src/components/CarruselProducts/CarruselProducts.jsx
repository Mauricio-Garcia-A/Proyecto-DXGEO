import { useRef } from "react";
import './CarruselProducts.scss';
import data from '../../utils/consultora-products.json'


export default function CarruselProducts() {
  const listaProductos = data.products
  const containerRef = useRef(null); // 🔁 referencia al scroll

  const scrollAmount = 220; // ajustá según el ancho de cada item + padding

  const handleScrollLeft = () => {
    containerRef.current?.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  };

  const handleScrollRight = () => {
    containerRef.current?.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  // eslint-disable-next-line react/prop-types
  const ItemProduct = ({ title, subtitle, imgSrc, precio, buttonHref }) => {
    return (
      <div className="product-item">
        <header className="header-product-item">
          <img src={imgSrc} alt={title} />
        </header>

        <div className="product-info">
          <p>{subtitle}</p>
          <h2>{title}</h2>
          <h3>$ {precio}</h3>
        </div>
        <footer>
          <button href={buttonHref}>Comprar/Consultar</button>
        </footer>
      </div>
    );
  };

  return (
    <div className="container-carousel">
      <button className="arrow left" onClick={handleScrollLeft}><span>‹</span></button>

      <div className="container-items" ref={containerRef}>
        {listaProductos.map((product, index) => (
          <div
            key={index}
            className="carousel-item"
          >
            <ItemProduct
              title={product.title}
              subtitle={product.subtitle}
              imgSrc={product.imgSrc}
              precio={product.precio}
              buttonHref={product.buttonHref}
            />
          </div>
        ))}
      </div>

      <button className="arrow right" onClick={handleScrollRight}><span>›</span></button>
    </div>
  );
}