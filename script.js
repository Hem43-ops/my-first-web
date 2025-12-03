const menuOpenButton = document.querySelector("#menu-open-button");
menuOpenButton.addEventListener('click',()=>{
    document.body .classList.toggle("show-mobile-menu");
});

const menuCloseButton =document.querySelector('#menu-close-button');
menuCloseButton.addEventListener('click',()=>{
    document.body.classList.remove("show-mobile-menu");
})
// //close menu when the close button is clicked
// menuCloseButton.addEventListener('click',()=>{
//     menuOpenButton.click()
// })