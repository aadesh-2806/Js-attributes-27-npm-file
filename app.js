const hello = require('./hello')

//can have many require file

console.log(hello)

//{ pi: 3.141, x: [Function: x], add: [Function: add] }

console.log(hello.pi)
console.log(hello.x(5))

/*
{}
but if pass module.export than it prints that text instead of {}

||

const {x,pi,add} = require('./hello')
console.log(pi)
console.log(x(5))
*/

/*const index = require('./script')
console.log(index)

print this------->
[ { name: 'hello', color: 'white' },{ name: 'hello1', color: 'black' },{ name: 'hello2', color: 'blue' } ] */