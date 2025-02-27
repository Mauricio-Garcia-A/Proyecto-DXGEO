import './SectionInfo.scss'
import data from '../../../utils/info-presentacion.json'

export default function SectionInfo() {

  const sectionIntroduction = data.sections[0]
  const sectionInformation = data.sections[1]

  // eslint-disable-next-line react/prop-types
  const ItemInfo = ({ key, title, icon, description }) => {
    return <div className='item-Info' key={key}>
      <header>
        <hr />
        <div>
        <img src={`./${icon}`} alt="" />

        </div>
        <hr />
      </header>
      <h3>{title}</h3>
      <p> {description} </p>

    </div>
  }

  return (
    <section className='section-info' id='seccion-info'>
      <img src="./satelite1.svg" alt="" className='img-bg1' />
      <img src="./satelite2.svg" alt="" className='img-bg2' />
      <img src="./orvita1.svg" alt="" className='img-bg3' />
      <img src="./decoration1.svg" alt="" className='img-bg4' />


      <div className='conteiner-item'>
        <article>
          <h1>{sectionIntroduction.title}</h1>
          {
            sectionIntroduction.description.map((paragraph, index) => (
              <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))
          }

        </article>

        <article>
          <h2>{sectionInformation.title}</h2>
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
        <article className='perfil-profecional-section'>
          <h2>Profecional acargo</h2>
          <div className='container-perfil'>
            <div className='sec-perfil-1'>
              <img src="./bg-perfil-1.png" alt="" />
            </div>
            <div className='sec-perfil-2'>
              <img src="./foto-perfil.png" alt="" />
              <h2>Facundo Iglesias</h2>
              <p>Lorem ipsum dolor sit amet consectetu.</p>
              <p>Adipisicing elit. Aliquam possimus</p>
              <button>Mas info</button>
            </div>
            <div className='sec-perfil-3'>
            <img src="./bg-perfil-2.webp" alt="" />
            </div>
          </div>
          <footer>
            <img src="" alt="" />
          </footer>
        </article>
      </div>
    </section>
  )
}
