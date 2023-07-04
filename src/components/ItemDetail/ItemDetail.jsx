import {useItemCount} from "../../Hooks/UseItemCount"

const ItemDetail = ({id,nombre,precio,img}) => {
    
    const {count, add, sub} = useItemCount(1,10);
    
    return (
    <div>
        <img src={img} alt={nombre}/>
        <h2>{nombre}</h2>
        <p>{precio}</p>
        <p>{id}</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur ratione quia ut quod. Eaque aliquam deserunt earum provident dolor nesciunt voluptatem similique nemo neque cupiditate? Excepturi quo perspiciatis aliquid unde!</p>
        <div>
                <button onClick={sub}> - </button>
                <strong> {count} </strong>
                <button onClick={add}> + </button>
        </div>
    </div>
    )
}

export default ItemDetail