// let display = false
// wrapper.addEventListener('click', function (e) {
//     e.stopPropagation()
// })

// document.addEventListener('click', function () {
//     popover.style.display = 'none'    
//     display = false
// })

// clickMe.addEventListener('click',function () {
//     if(display){
//         popover.style.display = 'none'
//         display = false
//     }else{
//         popover.style.display = 'block'
//         display = true
//     }
    
// })


//------------------------------------------------------

let display = false
$(clickMe).on('click', function () {
    if(display){
        $(popover).hide()
        display = false
    }else{
        $(popover).show()
        display = true
    }
})

$(wrapper).on('click', function (e){
    e.stopPropagation()
})

$(document).on('click', function () {
    $(popover).hide()
    display = false
})

//------------------------------------------------------



