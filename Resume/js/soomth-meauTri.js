//let loadPage = document.getElementById('loading')
let aMeauTris = document.getElementsByClassName('meauTrigger')
let aMenus= document.querySelectorAll('.clearfix > li > a')

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




