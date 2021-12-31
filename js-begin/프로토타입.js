const c1 = {
    name:'C1',
    color:'red'
}
const c2 = {
    name:'C2',
    width:300
}
const c3 = {
    name:'C3',
    height:100
}

console.log(c1)
console.log(c2)
console.log(c3)

c1.__proto__ = c2; //c3를 넣으면 width가 없으니 undefined가 나올것이다
//c1.__proto__ = c3일때
c3.__proto__ = c2; //근데 이렇게해주면 나올거다 c3의 __proto__에 c2를 넣어줫으니

console.log(c1.toString()); //c1에 toString이 없는데 어찌되는걸까?

console.log(c1.width) // 300 이나온다 c1에는 width가 없을텐데? -> c2에 width인거지 c1에 __proto__에 c2를 넣어줫으니까 체이닝을해서 찾아서 딱 !

//프로토타입체이닝에 의해 계속 부모단으로 올라가서 결국 전역객체 window까지 가서 찾고 멈춘다!

function Foo(name){
    this.name = name;
    //this.__proto__ = Foo.prototype => 이런 메커니즘이 일어남
}
Foo.prototype.lastName = 'Shin'

const f = new Foo('Kim')

console.log(f.name) // 'Kim'
console.log(f) // {name:'Kim'}
console.log(f.lastName) // 'Shin' //f인스턴스객체 에는 없지만 prototype에 lastName을 넣어줫으니 체이닝을통해 찾을걸 보여준다


