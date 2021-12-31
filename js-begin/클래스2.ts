interface Container {
    tagName:string;
    className:string;
    children?: string[];
    getTagName:() => string;
    getClassName:() => string;
}

abstract class Shape2{ //abstract(추상)클래스
    public static MIN_BORDER_WIDTH = 0; //static = 정적 => class는 말그대로 청사진이지 아직 실체화된 객체가 아니다(인스턴스객체를 만들기 전까지)
    //그래서 인스턴스객체화 될때 모든 인스턴스객체마다 해당 데이터를 가지고있을필요가 없을때 즉, 청사진만의 데이터가 필요할때 말그대로 정적(고정)적인 데이터
    public static MAX_BORDER_WIDTH = 30;
    //그러니 MIN MAX얘내는 class만의 데이터인거지

    public readonly name:string = 'Shape'; //readonly -> 외부에서 바꿀수없겟지?
    protected _borderWidth : number;
    //protected => 상속된 애들도 접근가능한 private와 공통점 => 외부에는 보이지않는
    private action !: string; // '!'지시어는 값을 안넣어도 된다라는 의미
    //private => 해당 클래스 안에서만 사용되는

    constructor(borderWidth:number = 0){
        this._borderWidth = borderWidth;
    }

    abstract area: () => number; //타입만지정 자세한 값은 지정해주지않았다
    //abstract = 추상
    //추상 메소드는 추상(abstract)클래스 일때만 쓸수있는 메소드인데
    //추상 메소드가 붙은 애들은 상속시에 상속받은 클래스가 반드시 값을 정의해야한다(최상위 부모같은경우 타입만 지정해준걸 볼수있다)

    set borderWidth(width : number){
        if(width >= Shape2.MIN_BORDER_WIDTH && width <= Shape2.MAX_BORDER_WIDTH){
            this._borderWidth = width;
        }else{
            throw new Error('no')
            //에러를 던지기때문에 호출문에서 try catch로 묶어줘야 알수있겟지?
        }
    }

    get borderWidth():number{
        return this._borderWidth;
    }
}

class Circle2 extends Shape2{
    private _radius:number;
    //수퍼(부모)클래스인 Shape2를 상속해서 name속성과 area속성 다 있을텐데 오버라이드(재정의)한것을 볼수있음
    public name: string = 'Circle'

    constructor(radius:number){
        super(); //있어야지 부모클래스의 초기화(생성)과정이 일어나서 부모클래스의 속성들까지 이어받겠지?
        this._radius = radius
    }
    //혹시나 Circle에서 borderWidth등에 접근할경우 없으니 프로토타입체이닝에 의해서 상위객체를 쭉훑으면서 찾겟지? => Shape2에서 찾으면 stop될것
    get radius(){
        return this._radius;
    }

    //set radius가 없는이유? -> 밖에서 radius의 값변경을 제한하기위해서겠지? => readonly속성을 이용하는것도 방법이겟지?

    area = () => this._radius * this._radius * Math.PI; //오버라이드
    //추상에 의해서 상속받은 추상메소드 area에 값을 꼭 넣어준 모습
}

class Rect2 extends Shape2 {
    private _width:number;
    private _height:number;
    
    constructor(width:number, height:number){
        super();
        this._width = width;
        this._height = height;
    }

    get width(){return this._width}
    get height(){return this._height}

    area = () => this._width * this._height //추상메소드에 따라
}

const circle2 = new Circle2(50);
const rect2 = new Rect2(160,200);

console.log(rect2.borderWidth)//프로토타입체이닝 -> 써치
console.log(rect2.name)
console.log(circle2.name);

try{
    rect2.borderWidth = 100;
}catch(e){
    console.error(e);
}

class MyContainer implements Container{
    //interface를 클래스의 설계도로써 작동시키기위해 ':'이아닌 implements 키워드를 사용하게된다
    tagName: string;
    className: string;

    constructor(tagName:string,className:string){
        this.tagName = tagName;
        this.className = className;
    }
    getTagName = ()=> this.tagName;
    getClassName= () => this.className;
    //interface에 따라 구현한 모오습
    //interface는 알리기위한 틀이기때문에 private라는건 말이안된다 -> 지원을안함
}
