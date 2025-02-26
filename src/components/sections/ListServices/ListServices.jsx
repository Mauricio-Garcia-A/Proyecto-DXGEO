/* eslint-disable react/prop-types */
import './ListServices.scss'
import data from '../../../utils/services.json'

export default function ListServices() {
  const listaServivios = data.items

  console.log(listaServivios)

  const ItemService = ({ title, description, URL_Img, advantages }) => {
    return <article>
              <img src={URL_Img} alt="img-service" />
              <h1>{title}</h1>
              {description.map((parrafo, index) => (
                <p key={index}>{parrafo}</p>
              ))}

              <ul>
                {advantages.map((ventaja, index) => (
                  <li key={index}>✔ {ventaja}</li>
                ))}
              </ul>

            </article>
  }
  
  return (
    <section className='section-services'>
      <div className='container-services'>


        {
          listaServivios.map((service, index) => (
            <div key={index}>
              <ItemService
                id={`service-${index}`}
                title={service.titulo}
                description={service.descripcion}
                URL_Img={service.URL_Img}
                advantages={service.ventajas}
              />
            </div>
          ))
        }
      </div>
    </section>
  )
}
