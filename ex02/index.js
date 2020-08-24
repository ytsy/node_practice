//暗号:排序
const compose = middlewares => {
    return function () {
        let newMiddlewares = middlewares.reverse();
        return dispatch(0)
        function dispatch(i) {
            if (newMiddlewares[i]) {
                return newMiddlewares[i](function next(){return dispatch(i + 1)})
            } else {
                return function next(){};
            }
        }
        let fn = middlewares[i];
        if (!fn) {
            return Promise.resolve();
        }
        return Promise.resolve(
            fn(function next() {
                // promise完成后，再执行下一个
                return dispatch(i + 1);
            })
        );

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