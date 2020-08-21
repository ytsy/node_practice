const { resolve } = require('path')
const fs = require('fs')
testGetRouter();
function testGetRouter(path = resolve('./')){
     // 获取页面列表
     const list = fs.readdirSync(path+'/__tests__/data')
     .filter(v => v !== 'Home.vue')
     .map(v => ({
         name: v.replace('.vue', '').toLowerCase(),
         path: v
    }))
    console.log(compileTemplate(list));
}
module.exports.getRouter = (path = resolve('./')) => {
    // 获取页面列表
    const list = fs.readdirSync(path)
            .filter(v => v !== 'Home.vue')
            .map(v => ({
                name: v.replace('.vue', '').toLowerCase(),
                path: v
    }))
    let result = compileTemplate(list);
    return result;    
}
function compileTemplate(fileList){
    const templateStart = `
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [`;
    const templateEnd = `

    ]
})`;
    let templateBody =""; 
    fileList.forEach(file => {
        templateBody+=`
{
    path: '/${file.name}',
    name: '${file.name}',
    component: () => import('./views/${file.path}')
},`
});
    return templateStart+templateBody+templateEnd;
} 
