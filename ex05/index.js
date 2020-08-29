const {EventEmitter} = require('events')
//暗号：冒泡排序
module.exports = class Connection {
    constructor (){
        this.emitter = new EventEmitter();
    }
    onConn = function(mockFn){
        this.emitter.on('event',function(msg){
            console.log(msg)
            mockFn(msg);
        })    
    }
    connection = function(msg){
        this.emitter.emit("event",msg)
    }
}
