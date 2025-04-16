import LineTime from '../../LineTime/LineTime'
import './PerfilInformation.scss'
import data from '../../../utils/info-perfil-profecional.json'
import { IconLinkedin } from '../../icons/IconsFooter'


export default function PerfilInformation() {

  const nameTitle = data.name
  const Introduction = data.introdution
  const listaItems = data.itemsLinetime

  return (
    <div className='container-perfil-infomation'>
      <section className='section-standar section-perfil-information'>
        <article className='article-perfil-information'>


          <header>
            <h1>{nameTitle}</h1>
            <img src="./bg-perfil-3.png" alt="" className='img-perfil-1' />
            <img src="./bg-perfil-2.webp" alt="" className='img-perfil-2' />
            <img src="./foto-perfil-3.png" alt="" className='img-perfil-3' />
          </header>
          <div>
            <p>
              {Introduction[0]}
            </p>
          </div>
          <div className='sector-linkedin'>
            <a href="https://www.linkedin.com/in/facundoiglesias/">
            <div>
              <IconLinkedin />
            </div>
              
               <p>/facundoiglesias</p>
            </a>

          </div>
          <LineTime />
          <p>
            {Introduction[0]}
          </p>
        </article>
      </section>
    </div>
  )
}
