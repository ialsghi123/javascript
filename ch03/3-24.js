//Array() 생성자 함수를 통한 배열 생성


var foo = new Array(3); // [undefined, undefined, undefined]
console.log(foo);
console.log(foo.length); // 3

var bar = new Array(1, 2, 3);
console.log(bar);       // [1, 2, 3]
console.log(bar.length) // 3