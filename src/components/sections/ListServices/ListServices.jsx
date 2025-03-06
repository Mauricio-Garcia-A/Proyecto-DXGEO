/* eslint-disable react/prop-types */
import './ListServices.scss'
import data from '../../../utils/services.json'

export default function ListServices() {
  const listaServivios = data.items

  // const ItemService = ({ title, description, icon, link, URL_Img, advantages }) => {

  const ItemService = ({ title, description, icon, URL_Img, advantages, icon_bg }) => {
    return <div className='container-item-service'>
      <div className='container-images'>
        <div className='contener-img-bg' style={{backgroundImage:`url(${URL_Img})`}}>
         {/* <img src={URL_Img} alt="img" className='img-bg' /> */}
        </div>
        <img src={`./${icon_bg}`} alt="icon" className='img-icon' />

      </div>
      <article className='container-text'>
        <header>
          <img src={`./${icon}`} alt="" />
          <h2>{title}</h2>
        </header>
        <div>
          {description.map((parrafo, index) => (
            <p key={index}>{parrafo}</p>
          ))}

          <ul>
            {advantages.map((ventaja, index) => (
              <li key={index}><span>✔ </span>{ventaja}</li>
            ))}
          </ul>
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
                icon_bg={service.icon_bg}
              />
            </div>
          ))
        }
      </div>
    </section>
  )
}
