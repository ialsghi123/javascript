//유사 배열 객체의 배열 메서드 호출


var arr = ['bar'];
var obj = {
    name : 'foo',
    length: 1
};

arr.push('baz');
console.log(arr);   // ['bar,' 'baz]

obj.push('baz');    // error