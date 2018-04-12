var APP_ID = 'PtKpzrwlCy0XfKI9zfy2CpQt-gzGzoHsz';
var APP_KEY = 'laOC7Xbywphjc0tqA99USHj2';

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});

var query = new AV.Query('messages');
query.find().then(function (messages) {
    let arr = messages.map((e) => e.attributes)
    //console.log(arr)
    arr.forEach(element => {
       let li = document.createElement('li')
       li.innerText = element.name + ': ' + element.messages
       messagesList.appendChild(li)
    });
}, function (error) {
    // 异常处理
});

let myForm = document.querySelector('#postMessagesForm')
myForm.addEventListener('submit', function(e){
    e.preventDefault()
    let name = myForm.querySelector('input[name = name]').value
    let content = myForm.querySelector('input[name = content]').value
    var TestObject = AV.Object.extend('messages');
    var testObject = new TestObject();
    testObject.save({
        name: name,
        messages: content
    }).then(function (object) {
        let element = object.attributes
        let li = document.createElement('li')
        li.innerText = element.name + ': ' + element.messages
        messagesList.appendChild(li)
        //alert('留言成功!');
        myForm.querySelector('input[name = name]').value = ''
        myForm.querySelector('input[name = content]').value = ''
    })
})
