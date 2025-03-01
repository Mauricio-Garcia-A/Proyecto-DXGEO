/* eslint-disable react/prop-types */
import './ListServices.scss'
import data from '../../../utils/services.json'

export default function ListServices() {
  const listaServivios = data.items
console.log(listaServivios)
  // const ItemService = ({ title, description, icon, link, URL_Img, advantages }) => {

  const ItemService = ({ title, description, icon, link, URL_Img, advantages }) => {
    return <div className='container-item-service'>
      <article>
        <img src={URL_Img} alt="img-service" />
      </article>
      <article>
        <header>
          <img src={icon} alt="" />
          <h1>{title}</h1>
        </header>
        <div>
        {description.map((parrafo, index) => (
        <p key={index}>{parrafo}</p>
      ))}

      <ul>
        {advantages.map((ventaja, index) => (
          <li key={index}>✔ {ventaja}</li>
        ))}
      </ul>
      <link rel="stylesheet" href={link} />

        </div>
      </article>
    </div>
  }

  return (
    <section className='section-services'>
      <div className='container-items-services'>
        {
          listaServivios.map((service, index) => (
            <div key={index}>
              <ItemService
                id={`service-${index}`}
                title={service.title}
                description={service.description}
                URL_Img={service.image}
                advantages={service.advantages}
                link={service.link}
                icon={service.icon}
              />
            </div>
          ))
        }
      </div>
    </section>
  )
}
