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
      </div>
    </section>
  )
}
