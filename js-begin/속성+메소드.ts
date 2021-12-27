//속성 메소드 => 객체안에 들어가있는 데이터의 종류인데
//속성 : 순수한 데이터 메소드 : 내용물이 코드(함수)인 데이터가 속성으로 들어가있는.
type myObj = {
    name?:string //필수로들어가지 않을거같은애는 optional로 둬서 delete에도 무방하게
    age:number
    getFamilyName:()=>string
    getLastName:()=>string
    getBloodType:()=>string
}

const obj = {
    name:'Kim',
    age:40,
    getFamilyName:function(){return 'Kim'},
    getLastName:()=>'Shin Jae', //화살표함수 형식
    getBloodType(){return 'A'} //메소드 표현의 축약형 :(콜론) 제거 function제거
}  

obj.name;
obj.age;
//속성 및 메소드 추가 => TS라서 오류가뜨지만 JS에서는 동적바인딩으로 가능하다
obj.BType = 'A';
delete obj.BType; //delete써서 내 obj내 속성 메소드가 삭제되지않게하려면? => ts일때 타입으로 아예 지정해서 박아놓으면 delete해도 자체 에러가나온다(옵셔널이아닌 필수로 박아놧기때문에)

obj.getFamilyName();
obj.getBloodType();
obj.getLastName();

//obj내부에서는 실제함수인데 외부에서는 속성처럼 보이게하는것 -> getter setter
//(실제 속성값은 원하던 원하지않던 입력만해주면 들어가니까 막기위해) ex)obj.age = -300 (나이가 '-')

class BloodType{
    _bloodType:string; //이 클래스안에 들어갈 틀이있다라고 말해주고 (ts니까 타입을 선언해줘야하니) => 근데 메쏘드bloodType과 이름이겹치면안되니 앞에 _를써준다(암묵적인약속 - 게터세터)
    constructor(bloodType:string){ //생성자함수로 클래스의 속성을 생성해주는느낌이라본다. 
        this._bloodType = bloodType;
    }

     set bloodType(btype:string){
         //근데 이메소드는 함수니까 외부에서접근할때 식별자.bloodType(인자)이렇게 접근한다 그래서 그게 싫으니까 +
         //입력자가 내가 원하지않는 다른값을 입력할수있으니 분기도해줄수있고
        if(btype ==='A' || btype ==='B' || btype ==='O' || btype ==='AB'){ //이렇게 혈핵형인데 D이딴거넣을수있으니까
            this._bloodType = btype; 
        }
    }

    get bloodType(){ //이렇게해주면 불러올수있겟지?
        return `${this._bloodType} 형`;
    }
}

const KIM = new BloodType('B')
// KIM.bloodType('C') 여기에서(세터쓰기전)
KIM.bloodType = 'C' //이렇게 (세터를쓰면 외부에서 메소드를 대입문을통해서 속성에 접근하는것처럼 하고싶은거지 그래서 앞에 set을 붙힌다) => 세터설정했으니 C가들어가진 않을거다.
console.log(KIM.bloodType) //불러올수가없다 왜냐면 _라고 게터세터때문에 바꿔놧기도하고 그래서 게터를 쓴다
// console.log(KIM)





//객체를 만드는 3가지 {}, 클래스를이용한 인스턴그객체, Object 를 이용한 create(최상위객체)

const Myobj = Object.create(null,{
    name:{
        value:'kim',
        writable:true
    }
}) //조금 장황해서 쓰진않지만 1번째 인자는 부모객체에서 작동될 정보이고 2번째에 그객체의 속성 메소드 등을 표현하는데 뭔가 디테일하게 남기는 느낌? 원래라면 name:'kim'일텑데
//name속성의 value는 , writable은 configurable은 등 이렇게 자세하게 설정할수있다.