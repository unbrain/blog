let topNav = document.getElementById('topNav')

document.addEventListener('scroll', (e) => {
    if (window.scrollY !== 0) {
        topNav.classList.add('active')
    } else {
        topNav.classList.remove('active')
    }
}) 