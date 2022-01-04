type User = {
    id:number
    name:string
}

type Address2 = {
    zipcode:number;
    address:string;
}

function pipeOne(value:any):any{
    return value
}

//제네릭은 즉 내가 아무타입이나 넣지만 그타입이 만약 User면 User타입으로 반환아고 아니면 아닌걸로 반환하고 이렇게하고싶은데 any로는 불가능해 그러니까
//<> 안에 변수하나를넣는데(관습적으로 T를 넣는다(type)) 해서 즉. 타입은 아직 정해지지 않앗지만 정해지면 인자도 그타입을넣고 return도 그타입으로 리턴할꺼야 라는 의미의 밑에함수
function pipeTwo<T>(value:T):T{
    return value
}
let p1 = pipeOne(10)
let p2 = pipeTwo('10') //호출하는 순간 인자가 string이 들어갓기때문에 return도 string으로 나온다
let p3 = pipeTwo(true) //마찬가지로 인자도 불리언 리턴도 불리언으로 갈꺼다

//하지만 any도 추론을통해서  number타입을 넣엇으니 리턴도 number로 나오긴하는데 .. 그럼왜? => 객체에서 제네릭이 힘을발휘

const pipeObjOne = <T>(obj:T):T => {
    //애로우펑션일때 제네릭 형태
    return obj;
}

let po1 = pipeObjOne({id:1,name:'김',zipcode:50231});
//그럼일단 위에 pipeTwo처럼 Obj로될텐데 명시적으로 타입을 정한채로 내가 넣고싶다면?
let po2 = pipeObjOne<User>({id:1,name:'김',zipcode:50231});
//이렇게 <>안에 넣어줫다 그러니까 zipcode는 User타입안에 정의된게아니니까 오류가뜨지?

class State<S,Config={}> {
    //그니까 내가 원하는 타입을 넣으면 그타입으로 리턴해주고싶은 제네릭,
    //그 타입을 변수로 S, Config을 넣어준거고 Config은 기본값을 할당해준거고
    private _state : S;
    config : Config; //해당타입들로 지정해준거고

    constructor(state:S , config:Config){
        this._state = state;
        this.config = config;
    }

    getState():S {
        return this._state;
    }
}

let s1 = new State<Address2,{active:boolean}>({
    zipcode:50123,
    address:'서울시'
},{
    active:true
})

const s1Data = s1.getState()
console.log(s1.config.active)
console.log(s1Data.zipcode,s1Data.address)
//새클래스를 만들때 S에는 Address2타입, Config에는 {active:boolean} 이라는 타입을 넣어줫고
//인자에 constructor함수에 S,Config타입으로 지정됫기때문에 해당 객체2개를 넣은거고.
//느낌은왓다 => 즉 타입확정이 인스턴스객체를 만들때 확정되겟네

function getProperty<Type, Key extends keyof Type>(obj:Type,key:Key){
    //해석을하자면 getProperty함수는 제네릭2개를 받는데 type변수와 그 타입이 obj면 그 타입의 key들을 받는 key라는 변수 로 타입제네릭을 받는다
    //그럼 밑에서 getProperty호출시 x를 인자로 줫으니 type은 객체 x가 타입으로 들어갈꺼고 x의 키 a,b,c,d가 key타입에 들어갈거다 그러니까
    //2번째 getProperty호출시 2번째인자에 'm'을 줫는데 에러가난거지 왜? key타입은 a,b,c,d가 다니까.
    return obj[key]
}

let x  = {a:1,b:2,c:3,d:4};

getProperty(x,'a')
getProperty(x,'m')

interface KeyPair<T,U>{
    key:T;
    value:U
}
//타입은 KeyPair고, 제네릭 2개를 받아서 자유롭게 느낌만 흡수하자고 .
let kv1:KeyPair<number,string> = {key:1,value:'Kim'}
let kv2:KeyPair<number,number> = {key:1,value:1234}
//이런식으로 인터페이스에도 쓸수있다

//위에 어려운 제네릭들은 어려운개념이기때문에 일반적으로 제네릭개념은 위에 간단하게만써도 알수있으니 무리는하지말자구
