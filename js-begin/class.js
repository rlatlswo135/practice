'use strict'
//Object-oriendted programming
//class: template
//object: instance of a class
//JavaScript classes
//  - introduced in ES6
//  - syntactical sugar over prototype - based inheritance
//(class는 비교적 최근ES6버전부터 시작되었는데 기존에 있던 프로토타입을 응용해서 사용자나
//만든 개발자 둘다 윈윈으로 짜여졌다.)

//1. Class declarations
class Person{
    //constructor
    constructor(name, age){//생성자기때문에 object의 정보를 여기담아줘야한다.
        //fields
        this.name = name;
        this.age = age;
    }
    //methods
    speak(){
        console.log(`${this.name}: hello!`);
    }
}
const kim = new Person('kim', 20);
console.log(kim.name);
console.log(kim.age);
kim.speak();

//2. Getter and Setters
class User {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age()/*this.age를 호출하는게 아닌 (age에 해당하는)getter을 호출한다(2)*/  
        = age;//age프로퍼티에 값을 할당하는게 아닌 (age에 해당하는)setter를 호출한다(4) 
    }
    get age(){//getter를 설정하는순간(1)
        return this.age;
    }
    set age(value){ //setter을 설정하는 순간(3)
        // set은 값을 세팅하는거기때문에 value를 받아야함(인자를 받아야함)
        if(value < 0){
            throw Error ('age can not be negative'); //User가 음수 입력시 경고창 발생하게 우리가 set
        }
        this.age = value;//age의 프로퍼티에 값을 할당하는게아닌 setter를 호출(5) -> 무한루프
       //위의 무한루프때문에 키값에 이름을 _붙혀서 바꿔서 많이쓴다 
    }
}
const user1 = new User('Steve', 'Job', -1); //age를 음수로 함 -> 말이안됨. 근데 어쨋든 값이 들어가긴 할것.
console.log(user1.age);

//3. 상속과 다양성
class Shape {
    constructor(width,height,color){
        this.width = width;
        this.height = height; //field
        this.color = color;
    }
    draw(){
        console.log(`drawing ${this.color} color`);
    } //method
    getArea(){
        return this.width * this.height; 
    }
}

class Rectangle extends Shape{} ;
const rectangle = new Rectangle(20,20,'blue');
rectangle.draw();
const triangle = new Rectangle(20,20,'red');


