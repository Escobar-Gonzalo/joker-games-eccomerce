const myGames = [
    {id:"1", nombre: "Grand Theaf Auto 5", precio: 2850, img: "../img/Ac01.webp", idCat:"1"},
    {id:"2", nombre: "Call Of Duty: BLACK OPS III", precio: 330, img: "../img/Ac02.webp", idCat:"1"},
    {id:"3", nombre: "DAY Z", precio: 1500, img: "../img/Ac03.webp", idCat:"1"},
    {id:"4", nombre: "Sea of Thieves", precio: 2000, img: "../img/Av01.webp", idCat:"2"},
    {id:"5", nombre: "DARK SOULS III", precio: 4300, img: "../img/Av02.webp", idCat:"2"},
    {id:"6", nombre: "God Of War: RAGNAROK", precio: 5000, img: "../img/Av03.webp", idCat:"2"},
    {id:"7", nombre: "FIFA 23", precio: 2250, img: "../img/D01.webp", idCat:"3"},
    {id:"8", nombre: "NBA 2K23", precio: 1200, img: "../img/D02.webp", idCat:"3"},
    {id:"9", nombre: "F1 23", precio: 12000, img: "../img/D03.webp", idCat:"3"},
    {id:"10", nombre: "Blasphemous", precio: 300, img: "../img/P01.webp", idCat:"4"},
    {id:"11", nombre: "HOLLOW KNIGHT", precio: 500, img: "../img/P02.webp", idCat:"4"},
    {id:"12", nombre: "Litle NIGHTMARES II", precio: 1400, img: "../img/P03.webp", idCat:"4"},
    {id:"13", nombre: "Project Zomboid", precio: 940, img: "../img/S01.webp", idCat:"5"},
    {id:"14", nombre: "CITIES Skylines II", precio: 3200, img: "../img/S02.webp", idCat:"5"},
    {id:"15", nombre: "Farming Simulator 22", precio: 3850, img: "../img/S03.webp", idCat:"5"},
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