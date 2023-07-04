import React from 'react'

const ItemDetail = ({id,nombre,precio,img}) => {
    return (
    <div>
        <img src={img} alt={nombre}/>
        <h2>{nombre}</h2>
        <p>{precio}</p>
        <p>{id}</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur ratione quia ut quod. Eaque aliquam deserunt earum provident dolor nesciunt voluptatem similique nemo neque cupiditate? Excepturi quo perspiciatis aliquid unde!</p>
    </div>
    )
}

export default ItemDetail