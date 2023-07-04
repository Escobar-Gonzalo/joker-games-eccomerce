import Item from "../Item/Item"

const ItemList = ({games}) => {
    return (
        <div class="flex flex-col sm:flex sm:flex-wrap sm:flex-row sm:gap-x-1 sm:justify-evenly">
            {games.map(g => <Item key={g.id} {...g}/>)}
        </div>
    )
}

export default ItemList