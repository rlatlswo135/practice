//클로저

let saveNum = 1;

function increment(){
    return saveNum++;
}

console.log(increment()) // 1
console.log(increment()) // 2
console.log(increment()) // 3
saveNum = 200;
console.log(increment()) // 200 => 1,,2,,3여지껏 증가되어왓던 값을 지켜주지못한다 그래서 case2로가보자

function increment2(){
    //지역변수로써 saveNum선언해주면 어떨까?
    let saveNum = 1;
    return saveNum++;
}
console.log(increment2()) //1
console.log(increment2()) //1
console.log(increment2()) //1
//매함수선언시마다 saveNum이 1로 선언+할당되니 이거역시 어지럽다 case3으로 가보자

function increment3(){
    let saveNum = 1;
    return function(){
        return saveNum++;
    }
}

const inc = increment3()
//처음 Increment3함수를 호출 -> saveNum변수가 선언/할당되고 saveNum++을 해주는 함수가 리턴된다

console.log(inc()) // 1
//그럼 여기단에서는 saveNum++을 해주는 함수만 들어가있는상태인데 영역 밖에있는 saveNum을 어떻게 찾아서 ++ 해주는걸까??
//특별한 클로저공간(어떤함수를 통해 만들어진 변수인지 마킹까지되잇음)에 saveNum변수를 넣어주고 그걸 기억해서 자기 동작을 하는느낌.
//즉 함수를 리턴하는 함수가 자기 영역 밖에잇는 변수를 클로저라는 특수한공간에 담아두는 느낌이다

console.log(inc()) // 2
//일단 전역변수로 선언된게아니니까 밖에서 접근은 못할거고
//그렇다고 case2처럼 계속 호출한다해서 saveNum이 새로 선언/할당되는게 아니니 내가원하는결과를 도출해낼수있겟지? -> 실전에선어떻게쓸까?
console.log(inc()) // 3


//만약 ts라면? =>

class myObj {
    private myNum : number //이러면 끝날문제;
}

