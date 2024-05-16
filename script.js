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

document.addEventListener("scroll", function() {
    if (window.scrollY > 100) {
        document.body.classList.add("scrolled")
    } else {
        document.body.classList.remove("scrolled")
    }
})