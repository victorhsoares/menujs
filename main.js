function openMenu(){
    if (document.getElementById('menu').style.display === 'flex'){
        document.getElementById('menu').style.display = 'none'
    }
    else{
        document.getElementById('menu').style.display = 'flex'
        document.getElementById('menu-hamburguer').style.display = 'none'
        document.getElementById('close-hamburguer').style.display = 'flex'
        
    }
}

function closeMenu(){
    if (document.getElementById('menu').style.display === 'flex'){
        document.getElementById('menu').style.display = 'none'
        document.getElementById('menu-hamburguer').style.display = 'flex'
        document.getElementById('close-hamburguer').style.display = 'none'

    }
}