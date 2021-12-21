'use strict'

//Javascript is synchronous.(동기적)
//hoisting된 이후부터 작성 코드의 순서에 맞춰 동기적으로 실행된다
//hoisting : var, function declarartion 선언들이 젤 위로올라가는거(자동적으로)

//동기는 순서가있기때문에 예측가능하지만, 비동기는 언제실행될지 예측할수없다,
//ex setTimeout( () => {} , ms) 라는 브라우저 api를 실행하면, 동기는 순서에맞게 실행하는 반면
//이건 정해진 시간뒤에 해당 함수를 실행하게 되니, 스택에서 빠지고 별도의 api공간에 들어가서 조건에 맞게되면
// 큐에들어가서 스택이다실행되고 비어있을때 큐에서 순서대로 스택에 들어가서 실행한다,

//callback -> 함수에 인자로 들어가는 함수, 즉 이때 나를 불러줘! 라는함수지,
console.log('1')
setTimeout(() => console.log('2'),1000)
console.log('3')
//synch callback(동기)
function printImmeditately(print){
    print(); //함수의 선언은 hoisting되니 맨위로 올라갓을것,
}
//실행은 맨뒤니까 마지막, 그리고 스택비엇으니 큐에 대기중인놈 스택에 올라옴
printImmeditately(() => console.log('hello'))
//Asynch callback(비동기)

function printWithDelay(print,timeout){
    setTimeout(print,timeout);
}
printWithDelay(()=>console.log('async callback'),2000);

//Callback Hell example
class UserStorage{
    loginUser(id,password,onSuccess,onError){
        setTimeout(() => {//함수실행 , 2초뒤에
            if(
                (id === 'kim' && password === 'shin')||
                (id === 'jo' && password === 'you')
                ){
                onSuccess(id)//onSuccess('kim')
                //맞으면 onSucces라는 콜백실행 => id인자 넣어서
            }else{//조건에 안맞으면 onError라는 콜백실행 => Error라는 새로운 obj만듬(클래스가 잇으면,)
                onError(new Error('not found'))
            }
        }, 2000);
    }
//위와 마찬가지로 실행
    getRoles(user,onSuccess,onError){
        setTimeout( ()=> {
            if(user==='kim'){
                onSuccess({name:'kim', role:'admin'}) //얘가 userWithRole 인거지
            }else{ 
                onError(new Error('no access'))
            }
        }, 1000)

    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id,
    password,
    user => {//user가 Kim이 되는거지
        userStorage.getRoles( // 콜백
            user, //얘지
            userWithRole => {
                alert(`Hello ${userWithRole.name}, you ${userWithRole.role}`);
            },
            error => { console.log(error) }
        );
    },
    error => { console.log(error) }
);
// 이렇게 짜면 가독성이 매우떨어지며, 에러 발생이나 디버깅시 굉장히 어렵다,


