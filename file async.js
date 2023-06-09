const {readFile, writeFile} = require('fs')

console.log('start')
readFile('./content/subfolder/first.txt', 'utf-8', function(err,result){
    if(err)
    {
        console.log(err)
        return
    }
    const first=result
    console.log(first)
    readFile('./content/subfolder/second.txt', 'utf-8', function(err,result){
        if(err)
        {
            console.log(err)
            return
        }
        const second=result
        console.log(second)
        writeFile('./content/subfolder/fourth.txt', first+ " abc "+second, function(err,result){
            if(err)
            {
                console.log(err)
                return
            }
            console.log("done with this task")
        })
    })

})
console.log("starting next task")