import underConst from "../../assets/404image.svg"

const ItemListContainer = (props) => {
    return (
    <div class="flex gap-y-6 flex-col items-center mt-8 h-full w-screen">
        <h2 class="text-white drop-shadow-text-dark-glow text-5xl md:text-6xl">{props.greeting}</h2>
        <p class="font-sans text-white font-semibold drop-shadow-text-dark-glow text-xl text-center md:text-2xl">Pronto vas a poder disfrutar de una experiencia única</p>
        <img class="w-1920 h-1/2 drop-shadow-text-dark-glow" src={underConst} alt="under construction image" />
    </div>
    )
}

export default ItemListContainer