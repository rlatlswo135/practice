const person = {
    name: 'Kim',
    age:40,
    getAge(){
        return this.age;
    }
}

person.age;
person.getAge(); //40 => 이때는 person.getAge즉 호출을 person객체에서 했으니 소유자가 person이어서 this가 person에 접근하는반면

const age = person.getAge
age() //40? => undefined => 이때는 호출을 age라는 상수가했고 이때 this는 소유자인 age를 가르키기때문에 age.age가 없어서 undefined가 나온다

//이런 컨텍스트 메커니즘은 좀 어렵기때문에 함수호출단에서 이런것을 어느정도 조율해주는 call apply메소드가있다

age.call(person); // 40 =>이때 뜻이 call즉 부르는데 person을 컨텍스트객체로 지정해서 호출한다는뜻이다

class Person{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
        this.getAge = this.getAge.bind(this)
        //즉 언제 어디서 호출되더라도 이 this(소유자객체)에 bind되도록 정해주는 함수고 이걸 전달해준다(위에 this.name등 속성처럼)
    }

    getAge():number{
        return this.age
    }

    getName = () => this.name
    //어휘컨텍스트 arrow펑션으로 메소드를 만들면 어휘단에서 컨텍스트가 this로 고정이되버린다 그래서 call bind이런거 필요없이 항상 this로 고정되니 undefined가 안나온다
    //즉 어휘(코드적)적으로 컨텍스트를 표현해주는느낌?
}

const p1 = new Person('kim',40);

p1.getAge(); // 40 => 호출시 소유자가 잘확인되니 (person => p1)

const myAge = p1.getAge;
const myName = p1.getName;

myAge() // 아까와같은

myAge.call(p1) // 이렇게 컨텍스트로 지정 => 근데 매번 호출시 이렇게하면 불편하니까 class단에서 아예 컨텍스트를 지정하는느낌의방법이있다 => bind

myName() //undefined안뜸 -> 어휘적으로 컨텍스트를지정해줫으니(arrow펑션)

//실행컨텍스트,어휘컨텍스트

