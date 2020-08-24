const fs = require('fs');
// function parser (path){
//     const readStream = fs.createReadStream(path)
//     let reqData = [];
//     let size = 0;
//     return new Promise(resolve => {
//         readStream.on("data",(chunk)=>{
//             reqData.push(chunk);
//             size+=chunk.length;
//         })
//         readStream.on("end",()=>{
//             let JsonString = Buffer.concat(reqData,size).toString('utf8')
//             resolve(JSON.parse(JsonString))
//         })
//     })
// }
//暗号：二分查找
module.exports.parser = path => {
    const readStream = fs.createReadStream(path)
    let reqData = [];
    let size = 0;
    return new Promise(resolve => {
        readStream.on("data",(chunk)=>{
            reqData.push(chunk);
            size+=chunk.length;
        })
        readStream.on("end",()=>{
            let JsonString = Buffer.concat(reqData,size).toString('utf8')
            resolve(JSON.parse(JsonString))
        })
    })
}
