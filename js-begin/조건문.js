let age = 40;

if(age===40){console.log('aaa')}
else {console.log('bbb')}


//코드가 1줄일때는 {} 생략이 가능하지만 한줄이어도 {}를쓰는습관이 좋음 코드수정할때 코드가 1줄보다 많아지게되면 그때 {}를붙여줘야하는데 이게더 일을키움.
//판정식에는 값자체가 들어가있을수도있는데 이때는 블리언값으로 판단을함
// 문자열 -> true 0제외숫자 -> true 모든 OBJ -> true
// ''(공백) -> false 0 -> false + 부정적인느낌의 datatype (null,undefined)

switch(age){
    case 1: //자기가 넣고싶은 조건일때 그후 실행될 코드를 콜론 이후에 적음
        console.log(1); 
        //But switch문은 자기가 만족하는 조건에 코드블록을 만나도 알아서 멈추는게아니라 밑에 코드는 그대로 쭉실행시킨다 break를 만날때까지.
        //그러니 자기가 원하는조건에 닿앗을때 멈추게하려면 그 case에 break를 걸어줘야 할듯.
        break
    case 2:
        console.log(1);
        break
    case 3:
        console.log(1);
        break
    default: //if구문의 else와 같은 역할
        console.log('default')
        break; //코드중단 => 원하는조건만나면 그 case실행후 나머지 밑에 case들은 그대로 쭉 실행되니 break를 잘걸어줘야
}

//if문과 마찬가지 switch(판정식){case 1:} .... case 사이에 공백이 있어야함.

let age = 10;

switch(age){
    case age>10: //이것처럼 비교연산은 안된다. 그러니 정확한 '값'에따라 분기를하고싶을때 그 의도를 명확히 드러내고싶을때 switch문을 쓰면 좋을듯?
        console.log('aaa');
    case age<15:
        console.log('정답');
        break;
    case 10:
        console.log('일치')
        break;
    default:
        console.log('default');
        break;
}