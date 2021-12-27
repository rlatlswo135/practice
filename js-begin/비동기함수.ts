function delay(ms:number):Promise<string> {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(Math.floor(Math.random() * 10) % 2 === 0){
                resolve('success')
            }
            else{
                reject ('failure')
            }
        },ms)
    })
}

//settimeout(실행시킬코드,시간)

delay(3000)
    .then((result:string) => {
        console.log('done' + result)
    })
    .catch((error:string) => {
        console.log('fail' + error)
    })

//async 함수와 와의 차이 => async역시 promise가 베이스기때문에 충분히 promise학습이 되어야한다.

async function DELAY(){
    try{
        const result = await delay(3000);
        console.log('done' + result) //실제로 비동기로 실행이되지만 코드를 동기적으로짤수있다는것. 마치 3초뒤에 콘솔로그가 실행되는것처럼
    }
    catch(error){
        console.error('fail' + error)
    }
}