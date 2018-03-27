let n = 0//开始图片节点 
let size = 5//图片数目
let time = 2000//自动切换时间

creatSlides(n, size, time)//初始化创建无缝轮播

function creatSlides(star, length, time) {   
    $(`.img > img:nth-child(${star+1})`).addClass('current').siblings().addClass('right')

    setInterval(() => {
        star ++
        makeLeft(getImg(star).one('transitionend', (e) => {
            makeRight($(e.currentTarget))
        }))
        makeCurrent(getImg(star+1))
    }, time)

    function changeN(n, length) {
        return (n%5 === 0) ? n = 5 : n%5
    }
    function getImg(star) {
        return $(`.img > img:nth-child(${changeN(star,length)})`)
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
 
    
