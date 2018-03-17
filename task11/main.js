let topNav = document.getElementById('topNav')
let loadPage = document.getElementById('loading')
let aMeauTris = document.getElementsByClassName('meauTrigger')
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