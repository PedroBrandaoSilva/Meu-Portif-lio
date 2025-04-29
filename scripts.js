const menu = document.querySelectorAll('.list')
const buttonMenu = document.querySelector('#button-option')


let isActive = false






















window.addEventListener("scroll", function disable(){
    const buttonUp = document.querySelector(".button-up")

    buttonUp.classList.toggle("active", window.scrollY > 600)

})


function returnTop(){
    window.scrollTo({top: 0})
}






function showMenu(){
    
       
    if(!isActive){
        menu.forEach(element => {
            element.classList.add('active')
        });

        buttonMenu.classList.add('button-on')
        isActive = true
    } else{
        menu.forEach(element => {
            element.classList.remove('active')
        });
        buttonMenu.classList.remove('button-on')

        isActive = false

    }

    
    

    
}
