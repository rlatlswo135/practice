function plusOne(number){
    if(typeof number === 'number') return number + 1;
    else return 'not number'
}

let num = plusOne(30)
let num2 = plusOne('30')

console.log(num) // 31
console.log(num2) //'301' ;;;

const obj = {
    width:100,
    height:200
}
//즉 마지막에 담는 데이터를 변수에 담는 구조기때문에 너무나쉽게 규칙이무너진다.
//그래서 항상 각경우에대한 분기를 if문으로 해야하는데 ts라면 그럴일이없이 에러가뜨겟지 애초에

obj.width = 300 // 변할까?

//변한다. obj를 상수로 선언하긴했지만 obj에담긴것 그자체를 변경시키지말란거지
//안에 들어있는 내용까지 변하는거를 관여하지는 않는다 하지만

obj = {};
obj = 200; 

//이런식으로 obj자체를 변경시키는것은 문제가된다,.

//변수 vs 상수 중 상수를 더 사용하는것을 권고한다. 변수라는자체가 변화한다는건데 상당한 불안정성을 내포하고있기때문에
//상수를써서 코딩하는것이 좋은습관이고 변하지않는값을 let 변수로 할당하는것은 나쁜습관이다.

//추후 익숙해지면 과거에 var에 단점들을 써칭해보자


