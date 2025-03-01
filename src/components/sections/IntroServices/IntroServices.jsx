import './IntroServices.scss'
import data from '../../../utils/intro-services.json'
import ListServices from '../ListServices/ListServices'

export default function IntroServices() {

  const parrafos = data.parrafos
  
  return (
    <div className='container-intro-services'>
      <section className='section-standar'>
        <h1>SERVICIOS Y SOLUCIONES</h1>
        <article className='article-intro'>
          
          <div>
            <p>{parrafos[0]}</p>
            <p>{parrafos[1]}</p>
          </div>
          <img src="./img-intro-service-1.webp" alt="" />
        </article>
        <article  className='article-intro'>
        <img src="./img-intro-service-3.webp" alt="" />
        
          <p>{parrafos[2]}</p>
        </article>
        <article className='article-green'>
        <img src="./titulo-logo-v2.svg" alt="" className='img-titulo-logo item' />
          <div className='item'>
            <p>{parrafos[3]}</p>
          </div>
          
          <img src="./green-logo.svg" className="img-green item" alt="" />
        </article>
        
        
      </section>
      <section className='section-standar'>
        <article>
          <p>{parrafos[4]}</p>
          <ListServices />
        </article>
      </section>
    </div>
  )
}
