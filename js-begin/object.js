//Objects
//one of the Js, Data types.
//a collection of related data and/or functionality.
//Nearly all objects in Js , are instances of Object
// object = property(key:value), method의 집합체,
//Obj 쓰는 이유,

//1.literal

let obj1 = {}; //방법1 = object literal
let obj2 = new Object();  //방법2 = object constructor 

function print(person){
    console.log(person.name);
    console.log(person.age);
}

const kim = {name:'kim', age:22};
print(kim);

//이와같이 원시형데이터엿다면 pertson이아닌 name,age모두 인자로 받아서 (하나씩저장되니) 할텐데 
//객체로하면 호출하기도, 저장하기도 좀더 직관적이다


//2.computed properties(key should be always string!)

console.log(kim.name); //obj접근방법 1
console.log(kim['name']); 
// 2 언제쓰냐면, key의 이름이 아직 정해져잇지않은 런타임일때, 사용자한테 입력받아야 할때 그때씀

function printValue(obj,key){
    console.log(obj[key]); //채택 ( 런타임이니까 )
    console.log(obj.key); // undefined 
}

//3. property value shorthand

let person1 = {name : 'bob', age:20};
let person2 = {name : 'bob', age:20};
let person3 = {name : 'bob', age:20};
let person4 = {name : 'bob', age:20};
//일일히다?
function person(name,age){
    return {name:name, age:age};
    //key와 value의 이름이 동일하다면 생략하고 
    //return {name, age}만 해줘도 된다
}

//4. constructor function
let person1 = new Person('bob',19);

function Person(name,age){//이런 obj의 템플릿 느낌일때는 이름의 맨앞을 대문자로해주는게 관례다
    this.name=name;
    this.age=age;
}

//5. in operator:property existence check(key in obj)
console.log('name' in kim); //true
console.log('age' in kim); //true
console.log('eandom' in kim); //false
//해당 키가 저 객체에 있어? -> 블리언

//6. for..in , for..of 

for(key in obj){
    console.log(key)
}

// for (value of iterable) 배열,순서가있는(iterable)애들에 사용,

let array = [1,2,3,4,5];
for(let i =0; i<array.length; i++){
    console.log(array[i]);
}
//위 아래는 같다.
for (value of array){
    console.log(value);
}

//7. cloning
let user = {name : 'kim', age:20};
let user2=user;
user2.name='shin';
//원본객체에 영향을끼침 왜? user2에는 user의 객체가 들어있는 레퍼런스주소가 똑같이 들어있는데
//이 레퍼런스주소가 같은 객체를 가르키니 당연히 수정이되는것
//그래서 이렇게 수정안할려면,

//old - way
let user3={};
for(key in user){
    user3[key]=user[key];
}
console.log(user3);  //느낌잡자.

//new - way (Object.assign(dest, [obj1 obj2...]))

let user4 = Object.assign({},user);
console.log(user4);

//Object는 자바스크립트에 기본탑재된 객체고 모든 객체는 저 Object객체를 상속한다.
//Object안에 함수 assign은 합쳐주는거라생각하면되는데 
//.assign(target,source) -> target&source 가 섞여나온다
//해석하면 빈객체를타겟으로 user를 섞는데 user가 우리가 섞고싶은 객체니까 섞여나오겟지
//but 섞는 소스에 동일 프로퍼티가 존재한다면 뒤에나오는 소스가 그 프로퍼티를 덮어쓰기때문에 맨뒤에 소스가 결국 섞인다 

let fruit1={color:'red'};
let fruit2={color:'blue', size:'big'};
let fruit3=Object.assign({},fruit1,fruit2);

console.log(fruit3.color) //Blue 가 나온다 덮어쓰니까