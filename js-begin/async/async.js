//promise 보다 깔끔한 방법 -> async/await(기존 promise위에 얹은 api)

function fetchUser() {
    //서버로부터 user data 받아오는중..
    return 'kim'
}

let user = fetchUser();
console.log(user)
//'kim' but 비동기코드를 안짜줫으니, 서버로부터 data 받아오기 전까지 모든 작업이 멈춰있음.

//그러니

function fetchUser2() {

    return new Promise( (resolve,reject) => {
        //비동기
        return resolve('kim')
    })
}

let user2 = fetchUser2
console.log(user2.then())

//1. async

async function fetchUser3(){ //fetchUser2와 같음 -> async키워드 쓰면 자동으로 promise로 바뀌게됨
    //비동기..
    return 'kim'
}
let user3 = fetchUser3;
console.log(user3)

//2. await  =>  async가 붙은 함수 내에서만 사용가능
function delay(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function getApple(){
    await delay(3000)
    //즉 awiat은 성공/실패 판정할때까지 'wait'기다려 달란거다, 다기다리면 그 결과를 담아주는 느낌.
    return 'apple'
}
async function getBanana(){
    try{
        await delay(3000) //try해보고
    }
    catch{
        console.log('실패') //실패뜨면 catch{} 실행해주세요
    }
    //하지만 await은 실패 판정이나면 에러가뜨고, 그다음코드가 실행이 안되기때문에(성공만을 다룰수 있는 이상한놈)
    //그렇기때문에 실패케이스도 다루기위해 쓰는게 try{} catch{}다
    return 'banana'
}
//위와같은걸 promise로 짜면

function getBanana(){
    delay(3000)
    return new Promise((resolve) => resolve()).then( () => 'banana')
}

async function pickFruits2() {
    let apple = await getApple()
    let banana = await getBanana()
    //async 병렬실행

    let applePromise = getApple()
    let bananaPromise = getBanana()
    let apple = await getApple()
    let banana = await getBanana()
    //위와 차이점 = promise는 실행하는 즉시 promise안에 코드블럭을 실행하기때문에 둘다 비동기로 들어가서 먼저 작업한다
    //원래같으면 3초뒤에 사과 뽑고, 3초뒤에 바나나뽑고 그다음, 이런식인데
    //그후에 awiat으로 결과를 빼오면 둘이 동시에 3초뒤에 결과를 뽑아낸다 -> but 너무지저분하니 promise.all 사용
    return `${apple} + ${banana}`
}

//위를 promise로 했을때
function pickFruits(){
    return getApple()
    .then(item =>  getBanana(item)
    .then(item2 => `${item} + ${item2}`)) //마치 콜백지옥
}

//Promise . all

function pickAllFruits(){
    return Promise.all([getApple(),getBanana()])
    //배열안에있는 promise들을 병렬적으로 실행시켜서 값을 모아주는 느낌이다. -> 그후 다받아지면
    .then(item => item.join(''))
    // 그 아이템들이 배열에 모여서 리턴해준다. 그러면 then으로 그 배열을 가져와서
    // string형태로 Join해주는 느낌의 코드다.

    return Promise.race([getApple(),getBanana()])
    //배열안에있는 promise들을 병렬적으로 실행시켜서 가장먼저 값이 도출되는애를 아이템으로 뽑아준다 -> 그후,
    .then(item => console.log(item))
    //그 아이템을 then으로 뽑아와서 콘솔창에 찍어주는 느낌의 코드다.
}
