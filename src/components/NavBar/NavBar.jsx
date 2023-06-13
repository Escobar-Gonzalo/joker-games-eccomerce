import React from 'react'
import logo from "../../assets/logo-joker.svg"

const NavBar = () => {
    return (
        <header class="flex flex-row w-screen justify-center bg-violet-950 sticky">
            <nav class="max-w-7xl w-screen flex flex-row justify-center">
                <div class="flex flex-row items-center mr-10">
                <img src={logo} alt="" />
                <h1 class="text-white text-3xl font-normal">JOKER GAMES</h1>
                </div>
                <ul class="flex flex-row font-sans font-semibold items-center pt-1 uppercase text-lg text-white space-x-4 cursor-pointer">
                    <li>Acción</li>
                    <li>Aventura</li>
                    <li>Deportes</li>
                    <li>Plataforma</li>
                    <li>Simuladores</li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar