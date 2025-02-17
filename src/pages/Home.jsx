import Presentation from "../components/sections/Presentation/Presentation"
import SectionItem from "../components/sections/SectionItem/SectionItem"
import useSEO from "../hooks/useSEO"

export default function Home() {
  useSEO({ title: 'HOME' })

  return (
    < div style={{ width:'100%'}}>
      <Presentation />
      <SectionItem />
    </div>
  )
}
