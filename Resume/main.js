let topNav = document.getElementById('topNav')
let loadPage = document.getElementById('loading')
let aMeauTris = document.getElementsByClassName('meauTrigger')
let aMenus= document.querySelectorAll('.clearfix > li > a')
document.onscroll = function (e) {
    if(window.scrollY !== 0){
        topNav.classList.add('active')
    }else{
        topNav.classList.remove('active')
    }
}

setTimeout(function(){
    loadPage.classList.remove('active')
}, 3000);

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
        let top = element.offsetTop
        window.scrollTo(0, top - 70)
    }
}