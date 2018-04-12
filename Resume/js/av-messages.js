!function(){
    let view = document.querySelector('section.messages')

    let controller = {
        view: null,
        form: null,
        init: function(view){
            this.view = view
            this.form = document.querySelector('#postMessagesForm')
            this.initAv()
            this.bindEvents()
        },
        initAv: function(){
            var APP_ID = 'PtKpzrwlCy0XfKI9zfy2CpQt-gzGzoHsz';
            var APP_KEY = 'laOC7Xbywphjc0tqA99USHj2';

            AV.init({
                appId: APP_ID,
                appKey: APP_KEY
            });
        },
        loadmessages: function(){
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
        },
        bindEvents: function(){
            
            myForm.addEventListener('submit', function (e) {
                e.preventDefault()
                this.savemessages()
            })
        },
        savemessages: function(){
            let myForm = this.form
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
        },
    }

    
    controller.init(view)



}.call()