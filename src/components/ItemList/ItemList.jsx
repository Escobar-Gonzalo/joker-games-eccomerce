import Item from "../Item/Item"

const ItemList = ({games}) => {
    return (
        <div>
            {games.map(g => <Item key={g.id} {...g}/>)}
        </div>
    )
}

export default ItemList