//프로그래밍으로써의 객체

class Circle{
    _radius:number;
    //ts에서는 클래스 내부의 속성을 private하게 (외부에서접근할수 없도록) 하는 기능이있지만
    //js에서는 없었는데 추가가됬다 -> 속성앞에 '#'을 붙히면되는거 -> ex) #radius
    //신문법이기때문에 호환성체크는 필수!
    constructor(radius){
        this._radius = radius;
    }

    get radius(){
        return this._radius;
    }

    area = () => this._radius * this._radius * Math.PI;
}

class Rect{
    _width:number;
    _height:number;

    constructor(width,height){
        this._width = width;
        this._height = height;
    }

    get width(){
        return this._width;
    }

    get height(){
        return this._height;
    }

    area = () => this._width * this._height;
}

const circle = new Circle(50);
const rect = new Rect(150,200) 