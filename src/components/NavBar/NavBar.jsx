import React from 'react'
import logo from "../../assets/logo-joker2.svg"
import menu from "../../assets/menu.svg"
import close from "../../assets/close.svg"
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <>
        <header class="flex flex-col w-screen bg-gradient-to-r from-Nv-black from-40% to-Nv-shadow to-60% sticky">
            <nav class="max-w-7xl w-screen flex flex-row justify-evenly items-center md:justify-center lg:justify-evenly xl:max-w-full">
                <div class="flex flex-row items-center mr-12">
                    <img class="" src={logo} alt="" />
                    <h1 class="text-white font-normal drop-shadow-text-glow text-center text-2xl w-24 sm:text-3xl sm:w-72 lg:w-36 xl:w-72">JOKER GAMES</h1>
                </div>
                <ul class="hidden lg:flex flex-row font-sans font-semibold items-center pt-1 uppercase text-base text-white space-x-4 cursor-pointer drop-shadow-text-glow">
                    <li>Acción</li>
                    <li>Aventura</li>
                    <li>Deportes</li> 
                    <li>Plataforma</li>
                    <li>Simuladores</li>
                </ul>
                <CartWidget/>
                <div className='menuButton' class="h-12 w-12 flex flex-row flex-nowrap justify-center rounded-full bg-black cursor-pointer md:hidden">
                    <img class="w-8 drop-shadow-div-glow"src={menu} alt="" />
                </div>
            </nav>
            <ul class="hidden md:flex flex-row font-sans font-semibold items-center justify-center pt-1 uppercase text-base text-white space-x-4 cursor-pointer drop-shadow-text-glow mb-3 lg:hidden">
                <li>Acción</li>
                <li>Aventura</li>
                <li>Deportes</li> 
                <li>Plataforma</li>
                <li>Simuladores</li>
            </ul>
        </header>
        <div class='navMenu'>
            <ul class='navList'>
                <img src={close} alt=""/>
                <li>Acción</li>
                <li>Aventura</li>
                <li>Deportes</li> 
                <li>Plataforma</li>
                <li>Simuladores</li>
            </ul>
        </div>
        </>
    )
}

export default NavBar