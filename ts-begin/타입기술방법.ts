//2가지 방법




//타입별칭
type Position = number; //Position이라는 타입별칭을 만들엇고 그 타입은 number다
type Name = string;
type YesOrNo = 'Y' | 'N'; //이렇게 특정한 값자체만 받을수잇도록 강제할수도있다. 그냥 별칭만 쓰고싶은거라면 string으로 하면되겟지?
enum yEsOrNo {'Y','N'} // '='조심
/*
type과 enum의 차이점은 enum은 실제 데이터기때문에 런타임속도에 영향을 미친다 하지만 type은 컴파일단계에서만 읽고 런타임에는 영향을 주지않기때문에
가급적 type을 쓰는게 좋다
*/

type yesOrNo = string; //이렇게
//타입별칭은 맨앞이 대문자인게 일반적.

type fooFunction = (str:string) => string; //함수역시 타입별칭읋 쓸수있고 이코드는 fooFunction타입은 리턴값이 string으로 타입지정한 경우다. 인자역시 지정해준경우

let x:number = 10; 
//x가 number라는 타입으로 정해지긴 했지만. 이보다 좀더 자세하게, 저 x는 좌표를 의미하는건데 number만 넣으면 뭔지모르니까.


//인터페이스

interface IUser{ //이렇게 틀을딱 정해준느낌이다 type에서의 '='의 차이정도랄까,,  + interface는 이름이 중복되면 원래의 인터페이스의 연장선이라고생각해서 원본 + 중복 이런느낌이지만 type은 에러처리(중복)를 한다
    readonly id:number;
    readonly name:Name; 
    email:string;
    receiveInfo:boolean;
    active:YesOrNo;
    adress?:string; /* 
    '?'는 optional이란 소리다. 즉 위에 id name email receiveInfo active 키값은 ? 가 없으니 모두 필수항목이라 들어가야하지만
    adress 는 ? optional이기때문에 있어도되고 없어도된단뜻.
    */
}

/*
이렇게 뭔가 클래스처럼 청사진을 만들어놓는느낌이다.
-> 다른파일에서 import * as allType from 같이 allType이란 이름으로 모든 타입을 끌어와서(모든걸 끌어오기때문에 모든걸 받아줄 별칭이필요함)
*/
//allType.IUser로 타입을 지정할수도있다 -> const iUser:allType.IUser {} 이런식으로

interface DupIUser extends IUser{ //class의 상속느낌. //type & interface no상관
    profileImage?:string;
    github?:string;
    twitter?:string;
}
//2개는 같다 느낌이 확오지? 
type DupIUser2 = IUser & { //IUser &(and) 추가적인것 이런 구조의느낌 => 여기서 섞는 IUser는 interface인데 = type & interface섞는거 상관없다는뜻
    profileImage?:string;
    github?:string;
    twitter?:string;
}

type Exam = {
    [key:string] : number; //이렇게 키&값 의 타입을 지정해줄수있다 []로감싸게되면 들어올 key의 값 이런건 상관없이 타입만 string이다 라고 정의하는느낌 key는 변수다
    [phone:number]:number;
    //그러니 직관적으로 입력해도 된다
}

interface EXam {
    //interface식 함수규격정하기
    (key:string, url:string) : string; //이렇게 인자와 리턴값의 타입을 정해줫으면 정의된 타입의 함수를 쓸거면 항상 함수표현식으로(화살표함수)
}

const fun:EXam = (url,search='') => {return 'abc'} //이런식으로


//보통 data만을 묘사할때는 타입별칭, data + 메소드 복합적인 객체를 묘사할때는 interface를 쓴다 보통의 구분. 그러나 둘다 거의비슷