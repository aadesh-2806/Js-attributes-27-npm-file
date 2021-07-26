const x =(a) =>  Math.pow(a,2);
const pi =  3.141;
const add = (x,y)=> x+y;

// module.exports = 'hello'

/*==============================
module.exports.pi =pi;
module.exports.x =x;
module.exports.add = add;
==============================*/

/*==============================
hello = {
    add: add,
    x: x,
    pi: pi
}
module.exports = hello;
==============================*/

//==============================
exports.pi =pi;
exports.x =x;
exports.add = add;
//==============================