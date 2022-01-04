const jsonString = `
{
    "name":"Kim",
    "age":false,
    "bloodType":"O"
}
`
//데이터를 주고받을때 객체형태면 가장 효과적이겟지? 키밸류가있으니 하지만 obj는 js 런타임상 메모리에만있지
//데이터로 존재하는게아니기때문에 데이터로써 주고받기 어려운데 '
//그렇기때문에 데이터를 교환하기위해서 개발된 포맷(형식)이 JSON인것


//JSON key value등 더블쿼트("")만 지원.
//그렇게때문에 혹시모를 에러를통해 앱이 종료되는상황을 막으려면 에러는 예외처리가되기때문에
//try catch로 분기해주는것도 좋은방법
try{
    const myJson = JSON.parse(jsonString)
    console.log(myJson.name)
    console.log(JSON.stringify(myJson))
}catch(e){
    console.log(e)
}