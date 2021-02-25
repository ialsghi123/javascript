//for in 문을 통한 객체 프로퍼티 출력


//객체 리터럴을 통한 foo 객체 생성
var foo = {
    name: 'foo',
    nickname: 'babo',
    age: 30,
    major: 'computer science'
};

//for in 문을 이용한 객체 프로퍼티 출력
var prop;
for (prop in foo) {
    console.log(prop, foo[prop]);
}

console.log();


//객체 프로퍼티 삭제

console.log(foo.nickname); //(출력값) babo
delete foo.nickname; //(출력값) nickname 프로퍼티 삭제
console.log(foo.nickname); //(출력값) undefined

delete foo; //(출력값) foo 객체 삭제 시도
console.log(foo.name); //(출력값) foo