const names= require('./names')
const sayHi =require('./functions')
const data=require('./items')
require('./numbers')

console.log(names)

sayHi('Susan')
sayHi(names.john)
sayHi(names.peter)

console.log(data)