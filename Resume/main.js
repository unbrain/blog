let topNav = document.getElementById('topNav')
let loadPage = document.getElementById('loading')
let aMeauTris = document.getElementsByClassName('meauTrigger')
let aMenus= document.querySelectorAll('.clearfix > li > a')
let closeTags = document.querySelectorAll('[data-y]')

for(let i = 0; i < closeTags.length; i++){
    closeTags[i].classList.add('offset')
}
findClosest()
document.onscroll = function (e) {
    if(window.scrollY !== 0){
        topNav.classList.add('active')
    }else{
        topNav.classList.remove('active')
    }
    findClosest()
}

// setTimeout(function(){
//     loadPage.classList.remove('active')
// }, 0);

for(let i = 0; i < aMeauTris.length; i++){
    aMeauTris[i].onmouseenter = function (e) {
        let c = e.currentTarget
        c.classList.add('active')
    }
    aMeauTris[i].onmouseleave = function (e) {
        let c = e.currentTarget
        c.classList.remove('active')
    }   
}
for(let i = 0; i < aMenus.length; i++){
    aMenus[i].onclick = function (e) {
        e.preventDefault()
        let a = e.currentTarget
        let href = a.getAttribute('href')
        let element = document.querySelector(href)
        let top = element.offsetTop - 70

        function animate(time) {
            requestAnimationFrame(animate);
            TWEEN.update(time);
        }
        requestAnimationFrame(animate);

        var coords = { x: window.scrollY}; // Start at (0, 0)
        var tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
            .to({ x: top}, 1000) // Move to (300, 200) in 1 second.
            .easing(TWEEN.Easing.Quadratic.InOut) // Use an easing function to make the animation smooth.
            .onUpdate(function () { // Called after tween.js updates 'coords'.
                // Move 'box' to the position described by 'coords' with a CSS translation.
                window.scrollTo(0, coords.x)
            })
            .start(); // Start the tween immediately.
    }
}

function findClosest() {
    let minIndex = 0
    for(let i = 0; i < closeTags.length; i++){           
        if (Math.abs(closeTags[i].offsetTop - window.scrollY) < (Math.abs(closeTags[minIndex].offsetTop - window.scrollY))){
            minIndex = i
        }    
    }
    id = closeTags[minIndex].id
    closeTags[minIndex].classList.remove('offset')
    let a = document.querySelector('a[href="#'+ id +'"]')
    let li = a.parentNode
    let brothers = li.parentNode.children
    for(let i = 0; i < brothers.length; i++){
        brothers[i].classList.remove('heightLight')
    }
    li.classList.add('heightLight')
}


var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})