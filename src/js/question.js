// let accordions = document.querySelectorAll('.qa__accordion')
//
// accordions.forEach(function (accordion) {
//
//     accordion.children[2].addEventListener('click', function () {
//         accordion.classList.toggle('qa__accordion-active')
//
//     })
// })


let accordions = document.querySelectorAll('.qa__accordion')

accordions.forEach(function (accordion) {
    accordion.children[0].addEventListener('click', function () {
        accordion.classList.toggle('qa__accordion-active')
    })
})