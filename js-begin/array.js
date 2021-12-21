'use strict';

//Array!  -> 순서가 point니까 index가 point겟지 !
//1. Declaration (선언) - 2way
let arr = new Array();
let arr2 = [];

//2. Index position
let fruits = ['apple','banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[3]); // undefined 배열 인덱스에 없는애들.

//3. Looping over an array
//print all fruits
//way-1
for(let key of fruits){
    console.log(key);
}

//way-2
for(let i = 0; i<fruits.length; i++){
    console.log(fruits[i]);
}

//way-3
fruits.forEach(function(fruit, index, array){
    console.log('he'); // he가 2번 출력될것이다 why? = fruits arr에는 데이터가 2개있으니까
    console.log(fruit,index,array); 
    /* forEach에 콜백함수가 받는 인자는3개다 (data,index,array전체)순 보통 전체array는 아니까 빼고,
    (data,index)만 받는다 */
}); 
//data만 받기
fruits.forEach((fruit) => console.log(fruit)); //익명함수니 화살표함수 표현 가능 -> 한줄이니 {}생략 가능
//알수 잇듯이, 배열안에 데이터마다 내가 전달한 함수를 적용해줌

//4.Addition , deletion , copy

//push : add an item to the end
fruits.push('melon','peach');
console.log(fruits);
//pop : remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

//unshift : add an item to the begin
fruits.unshift('melon','peach');
console.log(fruits);
//shift : remove and item from the begin
fruits.shift();
fruits.shift();
console.log(fruits);
// note!! shift,unshift are slower than pop,push
/*왜? push pop은 그냥 맨뒤만 제거하는거지만 
shift unshift는 맨앞을 제거 하고 데이터를 다시 앞으로 한칸씩 옮기고, 데이터를 뒤로 1칸씩 미룬다음 맨앞에 빈공간에 데이터를 넣고 하는 프로세스가 있기때문에
매우느리다! (배열의 길이가 길면 길수록 더느리겟지?) 그래서 가능하면 push , pop이 더좋다 */

//지정된 자리에서 item 지우기
fruits.push('a','b','c');
arr.splice(start,num) = index[start]부터 num개를 지울거야
arr.splice(start)/*num 안쓸시*/ index[start]부터 뒤로 다지울꺼야
arr.splice(start,num,'aa','bb'); = index[start]부터 num개 지우고 그자리에 'aa','bb' 넣을거야

//combine two arrays
arr1.concat(arr2); arr1에 arr2를 붙여서 리턴함 (형태를 잘봐라 함수지?)

//Serching //find the index
arr.indexOf('item') -> 해당 item의 index값을 리턴함 (item이 중복일시 첫번째 인덱스를 리턴함)
arr.includes('item') -> 해당 item이 arr안에 있으면 블리언값을 리턴함(true)
arr.lastIndexOf('item') -> 해당 item의 index값을 리턴함 (item이 중복일시 마지막 인덱스를 리턴함)
