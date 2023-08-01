import React from 'react'
import "./Titulo.css"

function Titulo(props) {
  return (
    <div>
      <h2 className='tituloS'>{props.tituloS}</h2>
    </div>
  )
}

export default Titulo
