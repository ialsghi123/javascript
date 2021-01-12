//배열의 프로토타입과 객체의 프로토타입 비교

var emptyArray = [];        //배열 리터럴을 통한 빈 배열 생성
var emptyObj = {};          //객체 리터럴을 통한 빈 객체 생성

console.dir(emptyArray.__proto__);
console.dir(emptyObj.__proto__);

