import './Footer.scss'
import { IconCalendar, IconFacebook, IconInstagram, IconLinkedin, IconMail, IconTelefono, IconUbicacion, IconWhatsapp } from '../../components/icons/IconsFooter'

export default function Footer() {

  const redesSociales= [
    {
        titulo: 'Linkedin',
        icono: 'linkedin',
        link: 'https://www.linkedin.com/in/dx-geo',
        usuario: 'Dx-Geo'
    },
    {
        titulo: 'Instagram',
        icono: 'instagram',
        link: 'https://www.instagram.com/dx.geo/',
        usuario: '@DxGeo'
    },
    {
        titulo: 'Facebook',
        icono: 'facebook',
        link: 'https://www.facebook.com/dx.geo',
        usuario: 'Dx Geo'
    }
]


const formasDeContacto = [
{
    titulo: 'email',
    icono: 'gmail',
    descripcion: 'dxgeo@gmail.com'
},
{
    titulo: 'celular',
    icono: 'whatsapp',
    descripcion: '+54 9 ( 2314 - 408888)'
},
{
    titulo: 'telefono',
    icono: 'telefono',
    descripcion: '02314-15-408888'
}
]

  return (
    <footer className='container-Footer' id='formas-de-contacto'>
    <header />
    <section>
        <article className='section-footer-1'>
          <img src="./titulo-logo-v2.svg" alt="" className='img-titulo-logo-footer' />

            <div className='separador' />
            <h3>REDES SOCIALES</h3>
            <div className='section-redes-sociales' >
                <a href={ redesSociales[0].link}> <IconLinkedin /> </a>
                <a href={ redesSociales[1].link}> <IconInstagram /> </a>
                <a href={ redesSociales[2].link}> <IconFacebook /> </a>
            </div>

        </article>
        <article className='section-contact'>
            <h1>FORMAS DE CONTACTO</h1>
            <b><IconUbicacion /> UBICACION ACTUAL</b>
            <div>
                <a href=''>Daireaux, Prov. Buenos Aires - ARGENTINA</a>
                <br />
                <a href=''>La Plata, Prov. Buenos Aires - ARGENTINA</a>
                
            </div>
            <b><IconMail /> E-MAIL</b>
            
            <div><a href='mailto:dxgeo@gmail.com'>{formasDeContacto[0].descripcion}</a></div>
            <b><IconWhatsapp /> WHATSAPP</b>
            <div><a href='https://wa.me/549231444888'>{formasDeContacto[1].descripcion}</a></div>
            <b><IconTelefono /> TELEFONO</b>
            <div><a href=''>{formasDeContacto[2].descripcion}</a></div>
        </article>
        <article className='section-contact'>
            
            <h1>Horarios de Atencion</h1>
            <b><IconCalendar /> LUN a VIE</b>
            <div><p>9hs a 18hs</p></div>
            <b><IconCalendar /> SAB</b>
            <div><p>9hs a 12hs</p></div>
        </article>
    </section>
    <footer>
        <span>©Copyright 2025  -  MAG</span>
    </footer>
</footer>
  )
}
