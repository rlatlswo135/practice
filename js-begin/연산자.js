// || && 등 이런건 mdn참조 (비교연산자 논리연산자 등)

//구조분해할당

const colors = ['red','yellow','blue']
const colors2 = {red:'red',yellow:'yellow',blue:'blue'} //식별자:값

const blue = colors[2] // 직관적이지가 않다 왜? 일단 colors란 배열을 뒤적거려서 찾아야하고 그 순서를 또봐야하니까 직관적이지않다 그리고 colors 배열안에 요소를 한개씩 선언하고싶을때
                        //그때마다 이처럼 다 해주기가 불편하다 그래서

const [red,yellow,blue2] = colors;

//이런게 구조분해할당인데 할당은 변수에다가 하는거니까 (변수는 왼쪽) 이고, 분해를 할 값이 오른쪽에오겟지? 이렇게.
//만약에 colors배열에 요소에서 특정 1개만을 가져오고싶다면

const[,,blue3] = colors; //이렇게 공백을 이용해줄수있다 그러고 ;(세미콜론)은 값을 끝낼때 선언해주는느낌이고 식은 결국 값으로 수렴하니 식도역시 ;로 끊어준다

//하지만 문 같은경우는 (반복문 등) 하나의 값으로 수렴하는게아니기때문에 ; 로 끊어주지를 않는거지.

const{blue,yellow,red} = colors2

//배열은 순서를가진 데이터기때문에 순서에따라 가져오는데 -> 객체는 이름을가진 데이터니까 순서상관없이 이름만 가져오면 구조분해할당 완료인거지. 나름의장점.


// == vs === (동등 vs 일치)

let a = 10
let b = '10' //( a==b => true (약간 느슨하게 true) a===b => false (완전한 일치))

// 삼항 연산자 (조건) ? ture : false

let c = (a<9) ? 100 : 20;

//typeof 연산자 .. 연산자엿구나..

typeof 1 //'number' 등..

//연산자에도 우선순위가있기때문에 ()로 우선순위를 지정해줄수있다. 마치 수학처럼

// 문 -> 값으로 변환할때도 ()를 써줄수가있다 즉. 값으로만들수있는 아이를 ()로 감싸면 값이된다

function exam(data){console.log(data)} //문

let exam = (function exam(data){console.log(data)}); //문->값이 됬다 값이됫으니 ; 들어간거고
