//暗号:排序
const compose = middlewares => {
    return function () {
        return dispatch(0)
        // function dispatch(i) {
        //     if (middlewares[i]) {
        //         return middlewares[i](()=>{return dispatch(i + 1)})
        //     } else {
        //         return ()=>{};
        //     }
        // }   
        function dispatch(i) {
            if(middlewares[i]){
                middlewares[i](()=>dispatch(i+1))
            }else{
                return ()=>{};
            }
            // if(middlewares[i+1]){
            //     middlewares[i](dispatch(i+1))
            // }else{
            //     return middlewares[i]();
            // }
        }
        
    }
}
const middlewares = [
    async next => {
        console.log('1 start')
        next()
        console.log('1 end')
    },
    async next => {
        console.log('2 start')
        next()
        console.log('2 end')
    }
]

compose(middlewares)()