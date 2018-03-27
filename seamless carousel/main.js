let n = 1//开始图片节点 
let size = 5//图片数目
let time = 2000//自动切换时间

init(n, size, time)//初始化创建无缝轮播

function init(n, size, time) {   
    $(`.img > img:nth-child(${n})`).addClass('current').siblings().addClass('right')

    setInterval(() => {
        makeLeft(getImg(n)).one('transitionend', (e) => {
            makeRight($(e.currentTarget))
        })
        makeCurrent(getImg(n + 1))
        n++
    }, time)

    function changeN(n, size) {
        if (n > size) {
            n = n % size
            if (n === 0) {
                n = size
            }
        }
        return n
    }

    function getImg(n) {
        return $(`.img > img:nth-child(${changeN(n, size)})`)
    }

    function makeLeft($img) {
        return $img.addClass('left').removeClass('current')
    }
    function makeCurrent($img) {
        return $img.addClass('current').removeClass('right')
    }
    function makeRight($img) {
        return $img.addClass('right').removeClass('left')
    }
}
 
    
