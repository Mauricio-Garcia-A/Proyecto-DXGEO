import "./LineTime.scss"
import data from '../../utils/info-perfil-profecional.json'

export default function LineTime() {

  const listaItems = data.itemsLinetime

  // eslint-disable-next-line react/prop-types
  const ItemLine = ({ year, description }) => {
    return (
      <div className="item">
        <h3>{year}</h3>
        <p>{description}</p>
      </div>
    )
  }

  return (
    <div className="contaniner-line-time">
      {
        listaItems.map((item, index) => (
          <div key={index}>
            <ItemLine
              year={item.title}
              description={item.description}
            />
          </div>
        ))
      }

    </div>
  )
}
