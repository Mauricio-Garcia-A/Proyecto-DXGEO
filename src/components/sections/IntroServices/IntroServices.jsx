import './IntroServices.scss'
import data from '../../../utils/intro-services.json'
import ListServices from '../ListServices/ListServices'

export default function IntroServices() {

  const parrafos = data.parrafos

  return (
    <div className='container-intro-services'>
      <section className='section-standar section-intro-1'>
        <img className='img-bg-2-section' src="./bg-satelites/bg-satelite-1.svg" alt="" />
        <img className='img-bg-1-section' src="./bg-satelites/bg-satelite-11.svg" alt="" />
        <header>
          <h1>SERVICIOS Y SOLUCIONES</h1>
        </header>
        
        <article className='article-intro'>
          <div className='container-text'>
            <p>{parrafos[0]}</p>
            <p>{parrafos[1]}</p>
          </div>
          <div className='container-img'>
            <img src="./img-intro-service-4.png" alt="" />
          </div>
        </article>
        <article className='article-intro'>
          <div className='container-text'>
            <p>{parrafos[2]}</p>
          </div>
          <div className='container-img'>
            <img src="./img-intro-service-5.png" alt="" />
          </div>
        </article>
      </section>

      <section className='section-standar section-intro-2'>
        <article className='article-green'>
          <img src="./titulo-logo-v2.svg" alt="" className='img-titulo-logo item' />
          <div className='item'>
            <p>{parrafos[3]}</p>
          </div>
          <img src="./green-logo.svg" className="img-green item" alt="" />
        </article>
      </section>

      <section className='section-standar section-intro-3'>
        <article>
          <h3 className='subtitle-service '>SERVICIOS Y SOLUCIONES</h3>
          <p>{parrafos[4]}</p>
          <ListServices />
        </article>
      </section>

      <section className='bg'>
        {/*[
              1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 
            11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 
            31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 
            41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 
            51
            ].map((num) => (
              <div key={num}>
                  <h3>{num}</h3>
                  <img width={'500px'} src={`./bg-satelites/bg-satelite-${num}.svg `}alt="" />
               </div>
             ))*/}

      </section>
      <footer>
        <img src="./decoration1.svg" alt="" className='img-bg4' />
      </footer>
    </div>
  )
}
