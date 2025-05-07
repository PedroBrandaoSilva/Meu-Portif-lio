const menu = document.querySelectorAll('.list')
const buttonMenu = document.querySelector('#button-option')
const menuCell = document.querySelector(".ul-list")
const lineDown = document.querySelector(".line-move-down")
const lineUp = document.querySelector(".line-move-up")

let isActive = false







window.addEventListener("scroll", function disable() {
    const buttonUp = document.querySelector(".button-up")

    buttonUp.classList.toggle("active", window.scrollY > 600)

})


function returnTop() {
    window.scrollTo({ top: 0 })
}






function showMenu() {


    if (!isActive) {
        menu.forEach(element => {
            element.classList.add('active')
        });

        buttonMenu.classList.add('button-on')
        isActive = true
    } else {
        menu.forEach(element => {
            element.classList.remove('active')
        });
        buttonMenu.classList.remove('button-on')

        isActive = false

    }





}


function showMenuCell() {

    lineDown.classList.toggle("active")
    lineUp.classList.toggle("active")
    menuCell.classList.toggle("active")
    


}

window.addEventListener('scroll' , function disbleMenuCell(){
    const items = [lineDown, lineUp, menuCell]
    
    items.forEach(element => {
        element.classList.remove("active", window.scrollY > 199)
    });
})