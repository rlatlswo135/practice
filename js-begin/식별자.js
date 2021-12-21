//식별자?

let age = 10;

//age = 식별자 10 = 데이터 mdn정의: 숫자로시작은 불가. 숫자들어가는건 가능 공백 불가능, 대소문자 구분은 가능

function setAge(){}

//setAge = 식별자

const o = {
    age:10
}

//age = 식별자

//식별자 -> 데이터 화는 불가능 but 데이터 -> 식별자 화는 가능. (= 데이터 코드화 식별자 = 코드 데이터 = 데이터 데이터 =x 코드)

const a = {
    ['myName'] : 'kim',
    ['123my Name'] : 'shin'
}

console.log(a.myName)

//'myName'은 string 즉 데이터지만 위처럼 식별자화 됫다 (반대는불가능)

// console.log(a.123my Name) //불가능. 식별자조건을 만족하지못함(숫자시작, 공백불가) 그래서 이런경우는

console.log(a['123my Name']) //데이터를 식별자화햇을때처럼을 입력해야 가능

//식별자로써 대문자는 보통 상수에 쓴다 -> 상수는 재할당불가기때문에 코드가길어졋을때 어느게 상수인지 쉽게 구분할수없다(다 소문자로쓴다면) 그래서 대문자로.
//단어단어사이를 구분하는 camelCase , snakeCase
const AGE = 10;
