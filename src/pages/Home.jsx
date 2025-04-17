import LoadingComponent from "../components/LoadingComponent/LoadingComponent"
import Presentation from "../components/sections/Presentation/Presentation"
import SectionInfo from "../components/sections/SectionInfo/SectionInfo"
import useSEO from "../hooks/useSEO"

export default function Home() {
  useSEO({ title: 'HOME' })

  return (
    < div style={{ width:'100%'}}>
      <Presentation />
      <SectionInfo />
    </div>
  )
}
