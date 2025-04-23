const menu = document.querySelectorAll('.normal')
const buttonMenu = document.querySelector('#button-option')


let isActive = false

























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
