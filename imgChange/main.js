let allBtns = $('#imgBtns > div')
let size = allBtns.length
let n = 0;
allBtns.eq(n).addClass('green').siblings('.green').addClass('white')

for(let i = 0; i < size; i++){
    $(allBtns[i]).on('click', function(e){
        let index = $(e.currentTarget).index()
        let move = index * (-800)
        $('#images').css({
            transform: 'translate(' + move + 'px)'
        })
        allBtns.eq(index).addClass('green').siblings('.green').removeClass('green').addClass('white')
        n = index 
    })
}

var timerId = timer()

function timer(){
    return setInterval(() => {
        n++
        allBtns.eq(n % size).trigger('click')
    }, 2000)
}

$('.window').on('mouseenter',() =>{
    clearInterval(timerId)
})

$('.window').on('mouseleave', () => {
    timerId = timer()
})