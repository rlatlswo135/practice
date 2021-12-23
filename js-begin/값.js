//기본자료형 블리언 널 언디파인드 스트링 심볼 넘버 + 오브젝트

//ts는 훨씬많은 14개의 기 본타입이있다.


//번외 -> 반복문

let arr = ['a','b','c']

for(let key of arr){console.log(key)} //'a','b','c' 값이 나옴

for(let key in arr){console.log(key)} // 0 1 2 인덱스(객체면key값)이 나옴

for(let key in arr){console.log(arr[key])} // 이게 for of랑 같겟지?