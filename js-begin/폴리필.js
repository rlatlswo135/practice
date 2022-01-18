/*
function myMap(cb){
    let array = [];
    for(let i = 0; i<this.length; i++){
        console.log(i)
        console.log(this)
        array.push(cb(this[i],i,this))
    }
    return array
}
*/

//폴리필 => 특정 기능이 지원되지않는 브라우저를 위해 개발자가 사용할수있는 코드조각 or 플러그인 인데. 에도 map함수가 없는 es5 (es6부터 맵합수)에서 폴리필로 쓸수있겟지?
//그럼 이런 폴리필을 위한 라이브러리도 있겟지? => core-js => 저위에 map폴리필처럼 여러 폴리필들이 모여있는듯?