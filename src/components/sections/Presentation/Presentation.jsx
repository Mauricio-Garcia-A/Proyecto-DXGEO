import './Presentation.scss'

export default function Presentation() {
  return (
    <>
      <section className="container-presentacion">
        <div className="contenido-presentacion">
          <section className="conteiner-text-presentacion">
            <img src="./titulo-logo-v2.svg" alt="" className='img-titulo-logo' />
            <p className="subtitle">Sistema de informacion geografica - teledetecciones - asesor y piloto de dron</p>
          </section>
          <a className="hero-button" href='#seccion-info'>MAS INFO</a>
        </div>

        <video className="hero-video main" src="./video.webm" autoPlay loop muted />
        <video className="hero-video blur" src="./video.webm" autoPlay loop muted />
      
      </section>
      <div className='pie-presentacion' />
    </>

  )
}
