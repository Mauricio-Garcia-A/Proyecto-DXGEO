import './SectionInfo.scss'
import data from '../../../utils/info-presentacion.json'

export default function SectionInfo() {

  const sectionIntroduction = data.sections[0]
  const sectionInformation = data.sections[1]

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

  return (
    <div className='container-information' id='seccion-info'>
      <section className='section-standar section-introduction' >
        <img src="./satelite1.svg" alt="" className='img-bg1' />
        <header>
          <h1>{sectionIntroduction.title}</h1>
        </header>
        <article>
          {
            sectionIntroduction.description.map((paragraph, index) => (
              <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))
          }
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
              <ItemInfo key={index} title={item.title} icon={item.icon} description={item.description} />
            ))
          }
        </article>
      </section>

      <section className='section-standar section-perfil-profecional'>
        <header>
          <h2>Profecional a cargo</h2>
        </header>

        <article className='perfil-profecional-section'>

          <div className='container-perfil'>
            <img src="./bg-perfil-3.png" alt="" className='img-perfil-1' />
            <img src="./bg-perfil-2.webp" alt="" className='img-perfil-2' />
            <img src="./foto-perfil.png" alt="" className='img-perfil-3' />
            <div className='sec-perfil-2'>
              <h2>Facundo Iglesias</h2>
              <p>Lorem ipsum dolor sit amet consectetu.</p>
              <p>Adipisicing elit. Aliquam possimus</p>
              <button>Mas info</button>
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
