function PlusOne(number:number): number{
    return number+1;
    //PlusOne = 식별자 number = 식별자(인자니까)
}

//내가 지정하고싶은 식별자 옆에 타입을 선언한다
let age:number = PlusOne(30);
let age2:number = PlusOne('30'); //요기

console.log(age)
//인자의 타입을 지정. 리턴값의 타입을 지정
//애초에 타입을 지정했기때문에 각 경우에대한 케이스를 분기안해도 에러가뜸