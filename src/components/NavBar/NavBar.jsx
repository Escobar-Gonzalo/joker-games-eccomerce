import { useMenu } from "../../Hooks/UseMenu"
import logo from "../../assets/logo-joker2.svg"
import menu from "../../assets/menu.svg"
import close from "../../assets/close.svg"
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from "react-router-dom"

const NavBar = () => {

    const {openMenu, closeMenu} = useMenu()

    return (
        <>
        <header class="flex flex-col w-screen bg-gradient-to-r from-Nv-black from-40% to-Nv-shadow to-60% sticky">
            <nav class="max-w-7xl w-screen flex flex-row justify-evenly items-center md:justify-center lg:justify-evenly xl:max-w-full">
                <div class="flex flex-row items-center mr-12">
                    <img class="" src={logo} alt="" />
                    <Link to="/">
                    <h1 class="text-white font-normal cursor-pointer drop-shadow-text-glow text-center text-2xl w-24 sm:text-3xl sm:w-72 lg:w-36 xl:w-72">JOKER GAMES</h1>
                    </Link>
                </div>
                <ul class="hidden lg:flex flex-row font-sans font-semibold items-center pt-1 uppercase text-base text-white space-x-4 cursor-pointer drop-shadow-text-glow">
                    <Link to="/categoria/1">
                        <li>Acción</li>
                    </Link>
                    <Link to="/categoria/2">
                        <li>Aventura</li>
                    </Link>
                    <Link to="/categoria/3">
                        <li>Deportes</li>
                    </Link>
                    <Link to="/categoria/4">
                        <li>Plataformas</li>
                    </Link>
                    <Link to="/categoria/5">
                        <li>Simuladores</li>
                    </Link>
                </ul>
                <CartWidget/>
                <div onClick={openMenu} class="menuButton h-12 w-12 flex flex-row flex-nowrap justify-center rounded-full bg-black cursor-pointer md:hidden">
                    <img class="w-8 drop-shadow-div-glow" src={menu} alt="" />
                </div>
            </nav>
            <ul class="hidden md:flex flex-row font-sans font-semibold items-center justify-center pt-1 uppercase text-base text-white space-x-4 cursor-pointer drop-shadow-text-glow mb-3 lg:hidden">
                <Link to="/categoria/1">
                    <li>Acción</li>
                </Link>
                <Link to="/categoria/2">
                    <li>Aventura</li>
                </Link>
                <Link to="/categoria/3">
                    <li>Deportes</li>
                </Link>
                <Link to="/categoria/4">
                    <li>Plataformas</li>
                </Link>
                <Link to="/categoria/5">
                    <li>Simuladores</li>
                </Link>
            </ul>
        </header>
        <div class='navMenu' id="navMenuId">
            <ul class='navList'>
                <img onClick={closeMenu} class='closeImg' src={close} alt=""/>
                <Link to="/categoria/1">
                    <li>Acción</li>
                </Link>
                <Link to="/categoria/2">
                    <li>Aventura</li>
                </Link>
                <Link to="/categoria/3">
                    <li>Deportes</li>
                </Link>
                <Link to="/categoria/4">
                    <li>Plataformas</li>
                </Link>
                <Link to="/categoria/5">
                    <li>Simuladores</li>
                </Link>
            </ul>
        </div>
        </>
    )
}



export default NavBar