import React from 'react'

const Card = (props) => {
    let imagen=props.imagen
    let titulo=props.titulo
    let descripcion=props.descripcion
  return (
    <div class="col">
    <div class="row gx-0">
        <div class="p-1 border bg-light">

            <div className="container text-center">
                <a id="car">
                <img src={imagen} width="90%" alt=""/>
                </a>
            </div>

            <div className="row align-items-center">
                <a id="">
                    <h3>{titulo}</h3>
                </a>
            </div>
            <br />
            <div className="row align-items-center">
                <a id="car">
                    <p>{descripcion}</p>
                </a>
            </div>
</div>
        </div>
    </div>
  )
}

export default Card
