!function(){
    
    let closeTags = document.querySelectorAll('[data-y]')

    for (let i = 0; i < closeTags.length; i++) {
        closeTags[i].classList.add('offset')
    }

    findClosest()
    document.addEventListener('scroll', () => {
        findClosest()
    })

    function findClosest() {
        let minIndex = 0
        for (let i = 0; i < closeTags.length; i++) {
            if (Math.abs(closeTags[i].offsetTop - window.scrollY) < (Math.abs(closeTags[minIndex].offsetTop - window.scrollY))) {
                minIndex = i
            }
        }
        id = closeTags[minIndex].id
        closeTags[minIndex].classList.remove('offset')
        let a = document.querySelector('a[href="#' + id + '"]')
        let li = a.parentNode
        let brothers = li.parentNode.children
        for (let i = 0; i < brothers.length; i++) {
            brothers[i].classList.remove('heightLight')
        }
        li.classList.add('heightLight')
    }
}.call()