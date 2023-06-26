import React from 'react'
import logo from "../../assets/logo-joker2.svg"
import menu from "../../assets/menu.svg"
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <header class="flex flex-row w-screen justify-center bg-gradient-to-r from-Nv-black from-40% to-Nv-shadow to-60% sticky">
            <nav class="max-w-7xl w-screen flex flex-row justify-evenly items-center md:gap-x-20">
                <div class="ml-2 h-12 w-12 flex flex-row flex-nowrap justify-center rounded-full bg-black md:hidden">
                    <img class="w-8 drop-shadow-div-glow"src={menu} alt="" />
                </div>
                <div class="flex flex-row items-center">
                    <img class="" src={logo} alt="" />
                    <h1 class="text-white font-normal drop-shadow-text-glow text-center text-2xl w-24 md:text-3xl ">JOKER GAMES</h1>
                </div>
                <ul class="hidden lg:flex flex-row font-sans font-semibold items-center pt-1 uppercase text-lg text-white space-x-4 cursor-pointer drop-shadow-text-glow">
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