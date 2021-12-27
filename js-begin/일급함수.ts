//함수자체 (코드)를 '값'처럼 취급해서 넘기는 형태 . 그 ! 형태

function ul(child:string){
    return `<ul>${child}</ul>`
}
function ol(child:string){
    return `<ol>${child}</ol>`
}
function makeLI( //인자가 2개인상황
    container:(child:string) => string, // 첫번째인자 = child라는 string인자로받아 string을 리턴하는 함수
    contents:string[] //두번째인자 string 배열 (배열 안에 들어갈 데이터 타입을 정한거지)
):string{
    const liList = [];
    for(const content of contents){
        liList.push(`<li>${content}</li>`)
    }

    return container(liList.join('')); //container가 인자니까 밑에서 ul함수가 들어왓으니 위에 ul에 child안에 liList.join('')한게 들어가겟지
}

const htmlUL = makeLI(ul,['월','화','수']) //ul이라는 함수가 '값'처럼 함수그자체가 인자로 넘겨지는 형태!
const htmlOL = makeLI(ol,['봄','여름','가을','겨울'])

console.log(htmlUL)
console.log(htmlOL)

//함수를 리턴하는 함수

function salePrice(discountRate,price) {
    return price - (price * (discountRate * 0.01));
}

//2개는 결과는같지만 함수를 리턴후 함수를 호출하는 그런 매커니즘이 다르다

function discountPirce(discountRate){
    return function(price){
        return price - (price * discountRate * 0.01);
    }
}

console.log(discountPirce(30)(555000)) //30 = discountRate 555000 = price

let summmerPrice = discountPirce(30);
let winterPrice = discountPirce(10);

console.log(summmerPrice(30))

//이렇게 여름전용 할인율을 박아놓고 그함수를(값이니) 변수에넣어놓고 활용을하면 한눈에봐도 직관적인 표현력이 가능한 코드가 짜진다(함수를 리턴하는 함수의 예시)