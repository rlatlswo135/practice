function double(x){
    return x*2;
}

function calcValue(a,b){
    setTimeout(()=>{
        return a + b;
    },100)
}


const x = double(100);
const y = x; //가능 ? 불가? => 가능 동기코드니까
//동기코드? => 즉 간단히 5번라인 코드가 끝나기전에(확정이되기전에) 6번라인의 코드가 실행될수 없는거다

const r = calcValue(10,20);
const z = r;
//불가능한코드다 calcValue함수는 1초뒤에 인자 2개를더해주는데 1초가 지나버리면
//그 result를 r에할당하는게 지나쳐버리기때문에 r에 리턴값이안들어가고 z역시 아무것도 아니게된다 그래서

function calcValue2(a,b,cb){
    setTimeout(() => {
        cb(a+b);
    },100)
}

//이렇게 콜백으로 넘겨주는방법외엔 비동기적으로 처리할 방법이 없다. 천천히음미해보자
const R = calcValue2(10,20,(result)=>{
    return result
})
const Z = R
//너무 어려우니 나온게 promise규격

//promise인스턴스객체는 함수를 받아서 => 함수를받으니 그 함수도 인자를받겟지? (resolve reject)
const p = new Promise((resolve,reject) => {
    //resolve reject모두 함수네?!
    resolve('OK'); //성공
    reject('실패'); //실패케이스
})

p
.then((suc)=>console.log(suc)) //성공시받는
.catch((e) => console.log(e)) //실패시받는 => then이 catch가 또잇는거

const P = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('첫번째 성공')
    },2000);
})

P.then((ok) => {
    console.log(ok) //2초뒤 첫번째 성공
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve('두번째 성공')
        },3000)
    })
})
.then((ok) => {
    console.log(ok) //2초뒤 -> 3초뒤 = 5초뒤 두번째 성공
})
.catch((e) => console.log('에러!'))