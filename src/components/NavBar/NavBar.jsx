import React from 'react'
import logo from "../../assets/logo-joker2.svg"
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <header class="flex flex-row w-screen justify-center bg-gradient-to-r from-Nv-black from-40% to-Nv-shadow to-60% sticky">
            <nav class="max-w-7xl w-screen flex gap-x-20 flex-row justify-center">
                <div class="flex flex-row items-center">
                <img src={logo} alt="" />
                <h1 class="text-white text-3xl font-normal drop-shadow-text-glow">JOKER GAMES</h1>
                </div>
                <ul class="flex flex-row font-sans font-semibold items-center pt-1 uppercase text-lg text-white space-x-4 cursor-pointer drop-shadow-text-glow">
                    <li class="">Acción</li>
                    <li>Aventura</li>
                    <li>Deportes</li>
                    <li>Plataforma</li>
                    <li>Simuladores</li>
                </ul>
                <CartWidget/>
            </nav>
            
        </header>
    )
}

export default NavBar