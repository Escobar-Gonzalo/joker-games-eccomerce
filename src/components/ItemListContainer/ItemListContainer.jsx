import underConst from "../../assets/404image.svg"

const ItemListContainer = (props) => {
    return (
    <div class="flex gap-y-8 flex-col items-center mt-8 ">
        <h2 class="text-white text-6xl drop-shadow-text-dark-glow">{props.greeting}</h2>
        <p class="font-sans text-white text-2xl font-semibold drop-shadow-text-dark-glow">Pronto vas a poder disfrutar de una experiencia única</p>
        <img class="w-1960 h-1000 drop-shadow-text-dark-glow flex-wrap" src={underConst} alt="under construction image" />
    </div>
    )
}

export default ItemListContainer