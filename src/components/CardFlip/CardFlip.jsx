import './CardFlip.scss'
import { useState } from "react";


export default function CardFlip({children}) {
  console.log(children)
  const [flipped, setFlipped] = useState(false);

  return (
    <div className='container-card'>
      <div className="card" onClick={() => setFlipped(!flipped)}>
        <div className={`face ${flipped ? "front" : "front-active"}`}>
          {children[0]}
        </div>
        <div className={`face ${flipped ? "back" : "back-active"}`}>
          {children[1]}
        </div>
      </div>
    </div>
  )
}
