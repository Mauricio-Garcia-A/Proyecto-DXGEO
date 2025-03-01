import HeaderServices from '../components/sections/HeaderServices/HeaderServices'
import IntroServices from '../components/sections/IntroServices/IntroServices'
import useSEO from '../hooks/useSEO'

export default function Services() {
  useSEO({ title: 'SERVICIOS' })

  return (
    < div style={{ width:'100%'}}>
      <HeaderServices />
      <IntroServices />
    </div>
  )
}