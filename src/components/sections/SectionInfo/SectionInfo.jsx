import './SectionInfo.scss'
import data from '../../../utils/info-presentacion.json'
import CardFlip from '../../CardFlip/CardFlip'

export default function SectionInfo() {

  const sectionIntroduction = data.sections[0]
  const sectionInformation = data.sections[1]
  const sectionPerfilProfecional = data.sections[2]

  // eslint-disable-next-line react/prop-types
  const ItemInfo = ({ key, title, icon, description }) => {
    return <div className='item-Info' key={key}>
      <div className='header-item'>
        <hr />
        <div >
          <img src={`./${icon}`} alt="" />

        </div>
        <hr />
      </div>
      <h3>{title}</h3>
      <p> {description} </p>

    </div>
  }

  // eslint-disable-next-line react/prop-types
  const ItemInfoBack = ({ key, title, icon, description }) => {
    return <div className='item-Info-back' key={key}>
      <div className='header-item'>
        <h3>{title}</h3>
        <hr />
      </div>
      <p> {description} </p>
      <img src={`./${icon}`} alt="" />
    </div>
  }

  return (
    <div className='container-information' id='seccion-info'>
      <section className='section-standar section-introduction' >
        <img src="./satelite1.svg" alt="" className='img-bg1' />
        <header>
          <h1>{sectionIntroduction.title}</h1>
        </header>
        <article>
        <div className='container-info'>
            {
              sectionIntroduction.description.map((paragraph, index) => (
                <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
              ))
            }
          </div>

          
            <div className="container-video">
              
            <iframe
              src="https://www.youtube.com/embed/8gU_zHnDrrM"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            
           
          </div>
        </article>
      </section>

      <section className='section-standar section-information'>
        <img src="./satelite2.svg" alt="" className='img-bg2' />
        <img src="./orvita1.svg" alt="" className='img-bg3' />

        <header>
          <h2>{sectionInformation.title}</h2>
        </header>
        <article>
          {
            sectionInformation.description.map((paragraph, index) => (
              <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
        </article>
        <article className='infomation-section-items '>
          {
            sectionInformation.items.map((item, index) => (
              <div key={index} className='container-item'>     
                <CardFlip >
                  <ItemInfoBack key={index} title={item.title} icon={item.icon} description={item.description[1]} />
                  <ItemInfo key={index} title={item.title} icon={item.icon} description={item.description[0]} />
                </CardFlip>
              </div>
              
            ))
          }
        </article>
      </section>

      <section className='section-standar section-perfil-profecional'>
        <header>
          <h2>{sectionPerfilProfecional.title}</h2>
        </header>

        <article className='perfil-profecional-article'>

          <div className='container-perfil'>
            <img src="./bg-perfil-3.png" alt="" className='img-perfil-1' />
            <img src="./bg-perfil-2.webp" alt="" className='img-perfil-2' />
            <img src="./foto-perfil-3.png" alt="" className='img-perfil-3' />
            <div className='sec-perfil-text'>
              <h2>{sectionPerfilProfecional.name}</h2>
              {
                sectionPerfilProfecional.description.map((paragraph, index) => (
                  <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
                ))
              }
              <button className='hero-button-perfil'>Ver perfil</button>
            </div>
          </div>
        </article>
      </section>

      <footer>
        <img src="./decoration1.svg" alt="" className='img-bg4' />
      </footer>
    </div>
  )
}
