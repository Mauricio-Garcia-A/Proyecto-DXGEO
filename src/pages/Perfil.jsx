import PerfilInformation from "../components/sections/PerfilInformation/PerfilInformation"
import useSEO from "../hooks/useSEO"

export default function Perfil() {
  useSEO({ title: 'HOME' })

  return (
    <div style={{ width:'100%'}}>
       <PerfilInformation />
    </div>
  )
}
