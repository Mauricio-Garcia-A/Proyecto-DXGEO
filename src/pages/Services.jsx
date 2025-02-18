import HeaderServices from '../components/sections/HeaderServices/HeaderServices'
import ListServices from '../components/sections/ListServices/ListServices'
import useSEO from '../hooks/useSEO'

export default function Services() {
  useSEO({ title: 'SERVICIOS' })

  return (
    < div style={{ width:'100%', height:'1000px'}}>
      <HeaderServices />
      <ListServices />
    </div>
  )
}