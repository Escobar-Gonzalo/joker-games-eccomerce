export const useMenu = () =>{

    const openMenu = () =>{
        navMenuId.classList.add("visOn");
    }
    
    const closeMenu = () =>{
        navMenuId.classList.remove("visOn");
    }

    return {openMenu, closeMenu}

}