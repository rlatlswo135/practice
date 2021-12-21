type rainbow = 'red' | 'orange'

let color:rainbow = 'black'

console.log(color)

//그래서 rainbow안에 'black'가 없기때문에 오류가뜬다. -> cmd shift m 눌러서 보기 (문제 출력 터미널 에서 문제쪽)

//즉 자바스크립트엿다면 color = 'black'햇으면 그냥 black가 새로 들어갓을거다 근데 ts는 위에서 타입지정을 해버렷기때문에 저렇게 하기전에 오류를 막아준다는거지.
