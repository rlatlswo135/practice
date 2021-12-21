'use strict';
//Promise is a Javascript object for asynchronous operation.
//Promise는 동기/비동기랑은 상관없는 디자인 타입인데그안에서 setTimes등 비동기 처리를 할수 있는거다.

//promise는 성공/실패 판정기계, 성공case와 실패case를 짜줘야한다.
// -> 성공case통과시 then, 안에 콜백실행 실패시 catch안에 콜백실행

//1.State(이 성공/실패 판정기계인 promise에는 몇가지 상태가 있다)

//pending (보류) 즉 성공/실패케이스가 없을때
//resolved (성공)
//rejected (실패)         상태가 다이나믹하게 변한다

//Promise {<rejected>} -> then 실행 이런식

//생성자 함수를 이용해 생성 new Promise(클래스다)

//1.Producer
//when new Promise is created, executor(callback) runs automaticlly
const promise = new Promise((resolve,reject) => {
    //무거운 작업시(무거운 작업을 동기적으로하면
    //이 작업이 끝나기 전까지 그다음코드가 실행이 안되니 비동기적으로 처리한다
    //ex network, read files 등
    console.log('doing something...')
    //보면 알수있듯이 promise를 만드는 순간 안에 콜백이 실행된다, 즉
    //network통신을 예를들면 사용자를통해 이벤트가 발생시에(ex 클릭) network통신을 하고싶은데
    //여안에 넣어주면 이벤트를 발생시키기도 전에 콜백이 실행되버린다.
    setTimeout(() => {
        resolve('kim')
        //성공case -> 즉 resolve함수가 실행됫을시 then안에 콜백 실행 근데 resolve함수 인자안에 결과를 넣어서
        //then함수 에 전달할수있다 전달하면 then도 마찬가디로 인자로써 그 결과를 쓸수있다.
        //여기서 결과 = 'kim'
        reject(new Error('no network'))
        //실패case -> 즉 reject함수가 실행됫을시 catch안에 콜백 실행 
    },1000);
})

//settime이 서버와 통신중일때를 예를들기위해 사용햇다고 생각하자.

//2. Consumers : then, catch, finally
promise
.then( (val) => {//promise가 잘성공됫다면(then), 그 성공한 데이터 이용해서 이걸(callback 실행) 할거야
    console.log(val)
})
//자체가 return promise를 한다
.catch(error => {console.log(error)}) //실패시 (catch)
.finally( () => {console.log('finally')}) //성공 실패여부 떠나서 맨 마지막에 호출됨

//like array chain .map.filter.sort 즉 각각의 메소드가 return 값을 가지니 그 리턴한거에 .filter .. 이런느낌

//3. Promise chaning
const fetchNumber = new Promise((resolve,reject) => {
    setTimeout( ()=>{
        resolve(1)
    },1000)
})
fetchNumber
.then( (val) => val * 2)
.then((val) => val * 3)
.then((val) => {return new Promise((resolve,reject) => {
    setTimeout(()=>{resolve(val-1), 1000})
})})
.then((val) => console.log(val))

//4. Error Handling
const getHen = () => {
    return new Promise( (resolve,reject) => {
        setTimeout( () => resolve('chiken'),1000);
    });
};
const getEgg = (hen) => {
    return new Promise( (resolve,reject) => {
        setTimeout(() => resolve(`${hen} => egg`),1000);
    });
};
const getFri = (egg) => {
    return new Promise( (resolve,reject) => {
        setTimeout(() => resolve(`${egg} => fries`),1000);
    });
};

getHen()
    .then(hen => getEgg(hen))
    .then(egg => getFri(egg))
    .then(final => console.log(final))