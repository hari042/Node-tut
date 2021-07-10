const {readFileSync,writeFileSync}=require('fs')


const first=readFileSync('./content/new.txt', 'utf-8')
const second=readFileSync('./content/secondtxt.txt', 'utf-8')
console.log(second ,first)

writeFileSync('./content/result.txt',`here is the result: ${first,second}`, {flag: 'a'}
)

