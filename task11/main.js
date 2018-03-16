let topNav = document.getElementById('topNav')
let loadPage = document.getElementById('loadPage')
document.onscroll = function (e) {
    if(window.scrollY !== 0){
        topNav.classList.add('active')
    }else{
        topNav.classList.remove('active')
    }
}

setTimeout(() => {
    loadPage.classList.remove('active')
}, 3000);