import './LoadingComponent.scss'

export default function LoadingComponent({ fadeOut }) {
  return (
    <div className={`container-loading ${fadeOut ? 'fade-out' : ''}`}>
      <span className="loader"></span>

      <b>CARGANDO ... </b>
    </div>
  )
}
