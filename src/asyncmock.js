const myGames = [
    {id:1, nombre: "Grand Theaf Auto 5", precio: 2850, img: "./img/Ac01.webp"},
    {id:2, nombre: "Call Of Duty: BLACK OPS III", precio: 330, img: "./img/Ac02.webp" },
    {id:3, nombre: "DAY Z", precio: 1500, img: "./img/Ac03.webp"},
    {id:4, nombre: "Sea of Thieves", precio: 2000, img: "./img/Av01.webp"},
    {id:5, nombre: "DARK SOULS III", precio: 4300, img: "./img/Av02.webp"},
    {id:6, nombre: "God Of War: RAGNAROK", precio: 5000, img: "./img/Av03.webp" },
    {id:7, nombre: "FIFA 23", precio: 2250, img: "./img/D01.webp"},
    {id:8, nombre: "NBA 2K23", precio: 1200, img: "./img/D02.webp"},
    {id:9, nombre: "F1 23", precio: 12000, img: "./img/D03.webp"},
    {id:10, nombre: "Blasphemous", precio: 300, img: "./img/P01.webp"},
    {id:11, nombre: "HOLLOW KNIGHT", precio: 500, img: "./img/P02.webp"},
    {id:12, nombre: "Litle NIGHTMARES II", precio: 1400, img: "./img/P03.webp"},
    {id:13, nombre: "Project Zomboid", precio: 940, img: "./img/S01.webp"},
    {id:14, nombre: "CITIES Skylines II", precio: 3200, img: "./img/S02.webp"},
    {id:15, nombre: "Farming Simulator 22", precio: 3850, img: "./img/S03.webp"},
]

export const getGames = () =>{
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(myGames);
        }, 1500)
    })
}

export const getOneGame = (id) => {
    return new Promise((resolve) =>{
        setTimeout(()=>{
            const game = myGames.find(g=> g.id === id);
            resolve(game);
        },1500)
    })
}

