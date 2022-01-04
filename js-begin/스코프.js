let myName = 'kim'; // 전역스코프

//안에선 밖가능 밖에서 안불가
function foo(){
    //여기로 코드가 들어올거고(2)
    let x = 10; //x 라는 변수가 여기서 생성/할당 될거다(3)
    console.log(x) // access

    bar(); //아니 ba함수가 밑에있는데 왜 호출이될까? -> 호이스팅때문에
    //보이는건 bar함수가 밑에잇는것처럼 보이지만 호이스팅때문에 실제로는 위에서 다일어나고있는거다
    //호이스팅은 함수정의문에서는 가능한데 함수식으론 안된다.

    foo2(); //엑세스불가 => 함수식 => 호이스팅안됨 그러니 그때그때 다르게 짜지말고 습관자체를 함수를 먼저만들고 호출하는 그습관을 짜자.
    function bar(){ //함수스코프
        let y = 10;

        console.log(x)
        console.log(myname)
    }
    //함수식
    const foo2 = () => 100

    console.log(y) //error

    if(x === 10){ //블록스코프
        let x = 100;
        console.log(x) //100 => 현재 자기스코프에서 찾은뒤 그 바깥 그바깥 계속찾다가 end는 전역스코프까지가서 없으면 땡, 있으면 전역스코프변수를 보여주는
        //프로토타입 써치와 비슷한 메커니즘이네?
    }
    bar()
}

foo(); //foo함수를 실행하는시점에서 (1)
console.log(x) //error  'x' is not defined