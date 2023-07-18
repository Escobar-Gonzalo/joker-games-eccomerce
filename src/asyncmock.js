const myGames = [
    //{id:"1", nombre: "Grand Theaf Auto 5", precio: 2850, stock:10, img: "../img/Ac01.webp", idCat:"1", desc: "Un juego de mundo abierto lleno de acción y crimen en el que los jugadores pueden explorar una ciudad ficticia, realizar misiones y participar en actividades delictivas."},
    //{id:"2", nombre: "Call Of Duty: BLACK OPS III", precio: 330, stock:10, img: "../img/Ac02.webp", idCat:"1", desc: "Un intenso juego de disparos en primera persona que se desarrolla en un futuro oscuro y ofrece una emocionante campaña para un solo jugador y un multijugador competitivo."},
    //{id:"3", nombre: "DAY Z", precio: 1500, stock:10, img: "../img/Ac03.webp", idCat:"1", desc: "Un juego de supervivencia en un mundo abierto postapocalíptico donde los jugadores deben enfrentarse a zombis, buscar recursos y luchar contra otros jugadores por la supervivencia."},
    //{id:"4", nombre: "Sea of Thieves", precio: 2000, stock:10, img: "../img/Av01.webp", idCat:"2", desc: "Una experiencia de piratería multijugador en línea que permite a los jugadores explorar islas, buscar tesoros, navegar en barcos y enfrentarse a otros piratas en un vasto mundo compartido."},
    //{id:"5", nombre: "DARK SOULS III", precio: 4300, stock:10, img: "../img/Av02.webp", idCat:"2", desc: "Un desafiante juego de acción y rol en el que los jugadores se enfrentan a enemigos difíciles, exploran un mundo oscuro y descubren una historia llena de misterio y peligro."},
    //{id:"6", nombre: "God Of War: RAGNAROK", precio: 5000, stock:10, img: "../img/Av03.webp", idCat:"2", desc: "La próxima entrega de la aclamada serie de acción y aventuras, donde los jugadores asumen el papel de Kratos y se enfrentan a criaturas mitológicas en una épica batalla por la supervivencia del mundo."},
    //{id:"7", nombre: "FIFA 23", precio: 2250, stock:10, img: "../img/D01.webp", idCat:"3", desc: "El popular simulador de fútbol que ofrece una experiencia realista con licencias oficiales, modos de juego variados y la posibilidad de competir en línea contra otros jugadores."},
    //{id:"8", nombre: "NBA 2K23", precio: 1200, stock:10, img: "../img/D02.webp", idCat:"3", desc: "Un juego de baloncesto que ofrece una simulación realista de la NBA, con gráficos impresionantes, una jugabilidad auténtica y modos de juego emocionantes."},
    //{id:"9", nombre: "F1 23", precio: 12000, stock:10, img: "../img/D03.webp", idCat:"3", desc: "El juego oficial del Campeonato Mundial de Fórmula 1 que permite a los jugadores competir en carreras de alta velocidad, gestionar equipos y vivir la emoción del automovilismo de élite."},
    //{id:"10", nombre: "Blasphemous", precio: 300, stock:10, img: "../img/P01.webp", idCat:"4", desc: "Un juego de acción y plataformas con un estilo visual único, ambientado en un mundo oscuro y retorcido, donde los jugadores deben enfrentarse a horribles criaturas y desentrañar secretos."},
    //{id:"11", nombre: "HOLLOW KNIGHT", precio: 500, stock:10, img: "../img/P02.webp", idCat:"4", desc: "Un cautivador juego de aventuras y plataformas en 2D, donde los jugadores exploran un vasto y misterioso subterráneo habitado por insectos y descubren su historia."},
    //{id:"12", nombre: "Litle NIGHTMARES II", precio: 1400, stock:10, img: "../img/P03.webp", idCat:"4", desc: "Una inquietante y atmosférica aventura de terror en la que los jugadores controlan a un niño atrapado en un mundo distorsionado y deben enfrentarse a aterradores enemigos para sobrevivir."},
    //{id:"13", nombre: "Project Zomboid", precio: 940, stock:10, img: "../img/S01.webp", idCat:"5", desc: "Un juego de supervivencia en un mundo postapocalíptico infestado de zombis, donde los jugadores deben gestionar recursos, construir refugios y luchar contra las hordas de muertos vivientes."},
    //{id:"14", nombre: "CITIES Skylines II", precio: 3200, stock:10, img: "../img/S02.webp", idCat:"5", desc: "Un simulador de construcción de ciudades donde puedes diseñar, construir y gestionar tu propia metrópolis, tomando decisiones sobre la planificación urbana, servicios y desarrollo de la ciudad."},
    //{id:"15", nombre: "Farming Simulator 22", precio: 3850, stock:10, img: "../img/S03.webp", idCat:"5", desc: "Un simulador de granja que permite a los jugadores gestionar y expandir su propia granja, cultivar cultivos, criar ganado y utilizar maquinaria agrícola realista para obtener éxito en el mundo rural."},
]

export const getGames = () =>{
    return new Promise(resolve =>{
        setTimeout(() => {
            resolve(myGames);
        }, 1500)
    })
}

export const getOneGame = (id) => {
    return new Promise(resolve =>{
        setTimeout(()=>{
            const game = myGames.find(g=> g.id === id);
            resolve(game);
        },1500)
    })
}

export const getGameByCat = (idCategoria) =>{
    return new Promise (resolve =>{
        setTimeout(()=>{
            const gamesCat = myGames.filter(g => g.idCat === idCategoria);
            resolve(gamesCat);
        },1500)

    })
}