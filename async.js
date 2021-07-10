const {readFile,watchFile, writeFile} =require('fs')

console.log('start')
readFile('./content/new.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(result)
    const first=result
    readFile('./content/secondtxt.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        console.log(result)
        const second=result;
        writeFile('./content/resultasync.txt',`here is the text :${first},${second}`,(err,result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log('done with fist task')
            console.log(result)
        })
    })  
})
console.log('new task')

