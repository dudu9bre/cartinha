$(document).ready(function () {
    $('.container').mouseenter(function () {
        $('.card').stop().animate({
            top: '-90px'
        }, 'slow')
    }).mouseleave(function () {
        $('.card').stop().animate({
            top: 0
        }, 'slow')
    })
})

// document.addEventListener("scroll", function() {
//     if (window.scrollY > 500 && window.scrollY < 1200) {
//         document.body.classList.add("scrolled")
//         document.body.classList.remove("scrolled2")
//     } else if (window.scrollY > 1200) {
//         document.body.classList.add("scrolled2")
//     } else {
//         document.body.classList.remove("scrolled")
//         document.body.classList.remove("scrolled2")
//     }
// })