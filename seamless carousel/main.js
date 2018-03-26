let n = 1
$(`.img > img:nth-child(${1})`).addClass('current').siblings().addClass('right')


// setInterval(() => {
//     $(`.img > img:nth-child(${changeN(n)})`).addClass('left').removeClass('right current')
//     $(`.img > img:nth-child(${changeN(n + 1)})`).addClass('current').removeClass('right left')
//     n++
// }, 2000)

function changeN(n) {
    if(n > 3){
        n = n % 3
        if(n === 0) {
            n = 3
        }
    }
    return n
}
setTimeout(() => {
    $(`.img > img:nth-child(${1})`).addClass('left').removeClass('current')
    $(`.img > img:nth-child(${2})`).addClass('current').removeClass('right')
}, 2000);

setTimeout(() => {
    $(`.img > img:nth-child(${2})`).addClass('left').removeClass('current')
    $(`.img > img:nth-child(${3})`).addClass('current').removeClass('right')
    $(`.img > img:nth-child(${1})`).addClass('right').removeClass('left')
}, 4000);

setTimeout(() => {
    $(`.img > img:nth-child(${3})`).addClass('left').removeClass('current')
    $(`.img > img:nth-child(${1})`).addClass('current').removeClass('right')
    $(`.img > img:nth-child(${2})`).addClass('right').removeClass('left')
}, 6000);

setTimeout(() => {
    $(`.img > img:nth-child(${1})`).addClass('left').removeClass('current')
    $(`.img > img:nth-child(${2})`).addClass('current').removeClass('right')
    $(`.img > img:nth-child(${3})`).addClass('right').removeClass('left')
}, 8000);
