// 데이터로써의 객체

//객체 리터럴로 생성

type Box = { //타입을 정해준후
    width:number,
    height:number,
    borderRadius:number,
    backgroundColor:string,
    borderWidth?: number,
    ['className']?:string;
}

let box:Box = { //객체리터럴로생성 => 객체의 틀+데이터가 하나로 묶여있고
    width:200,
    height:200,
    borderRadius:5,
    backgroundColor:'red'
}

//함수로 생성

function makeBox(width,height,borderRadius,backgroundColor):Box { //함수로생성 => 객체의 틀 / 데이터가 각각분리되있다 (데이터는 함수호출시 인자로 넣어줘야하니)
    return {
        width,height,borderRadius,backgroundColor //key와 value의 오는게 같으면 축약으로쓸수있지?
    }
    //요기서 틀만 바꿔주면 되겟지,, => 좋은 코드테크닉!
}

makeBox(100,100,0,'blue'); //객체를 500개만들어야한다면? 틀을 바꿔야한다면? 객체리터럴은 공포스러울거다 500개만든 객체의 틀도 하나하나 다바뀌어야겟지? 반면함수는?

//함수로생성 vs 클래스로생성 의 차이 => 함수가 좀더 번잡스럽지않고 심플

class Shape implements Box {
    width: number;
    height: number;
    borderRadius: number;
    backgroundColor: string;

    constructor(
        width:number,
        height:number,
        borderRadius:number,
        backgroundColor:string
    ){
        this.width = width,
        this.height = height,
        this.borderRadius = borderRadius,
        this.backgroundColor = backgroundColor;
    }
}

const boxShape = new Shape(10,10,0,'blue'); //클래스로만든 객체는 인스턴스객체이기때문에 어느 클래스로 만들엇는지 따질수를있다

if(boxShape instanceof Shape){} ///이런식으로 -> 근데 그 규격이 필요한상황이 아니라면 함수로생성하는게 베스트일지도?

//value의 변형

box.borderWidth = 10;
box['className'] = 'box rounded'
box.color = 'blue'; //js는 문제없이 추가되지만 ts는 엄격하기때문에 안된다. => type에 color를 optional로 해줘야 추가가 가능하겟지?

delete box.color //js면 상관없지만 ts같은경우에는 optional이 아니라면 함부로 삭제가 안되겟지?

const box1 = box; //obj는 참조데이터기때문에 주소가 남겨지는거다 즉 원본이 바뀌지않는다는거지.
const box2 = Object.assign({},box) //assign메소드는 객체를 합쳐주는데 첫번째객체에 2,3,4,...번째 객체를 덮어써서 새로운 객체를 만들어내는거지
const box4 = {...box, borderRadius:10}; //전개를한후 맘대로 추가하는 느낌 assign과는 매커니즘은 같지만 보통 전개연산자를 많이쓴다(데이터추가방식이 쉬우니)
const box3 = JSON.parse(JSON.stringify(box)) //원시적이지만 정확한방법