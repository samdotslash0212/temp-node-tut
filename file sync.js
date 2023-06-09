const {readFileSync, writeFileSync}=require('fs')
//alternative:
//const file=require('fs')
//file.read

console.log("start")
const first=readFileSync('./content/subfolder/first.txt', 'utf-8')
const second=readFileSync('./content/subfolder/second.txt', 'utf-8')

console.log(first)
console.log(second)

writeFileSync('./content/subfolder/third.txt', first+ " "+second,
{flag:'a'})
console.log("done with task")
console.log("starting with second task")