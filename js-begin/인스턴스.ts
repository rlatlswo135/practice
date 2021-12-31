//인스턴스 -> 클래스객체가 현실화된애들 -> 2가지방법 (클래스,함수)

//함수로 인스턴스객체
function CartV1(){
    //this키워드는 여기서 실행컨텍스트 테마가아닌 (1)에서 만들어진 빈객체를 가리킨다 (2)
    this.cart = [];
    //인스턴스객체를 함수로 만들때 new를 안붙이면 빈객체가 만들어지지않고 -> this가 전역객체인 Window를 가르키게 되서 동작이 이상해진다
    //그러니 암묵적으로 인스턴스객체를 만들땐 암묵적으로 대문자로 해달라는 의미 (함수형으로했을때)
    this.currentId = 0;
    // 그 빈객체에 cart와 currentId속성들을 추가하는거다 (3)
    // (3) + => 그 빈객체에 prototpye을 _prototype_에 할당을한다 그렇게되면
}

CartV1.prototype.getNewId = function() {
    //prototype에 getNewId를 추가하는 모습 => 위 말처럼 CartV1._prototype_에서 접근이 가능하겟지(getNewId)를?
    this.currentId++;
    return this.currentId;
}

CartV1.createItem = function(name,price){
    //CartV1 자체에 createItem을 추가하는 모오습 => class에서 static같은 느낌이겟지
    return{name,price}
}

CartV1.prototype.addItem = function(item){
    this.cart.push({
        ...item,
        id:this.getNewId()
    })
}

CartV1.prototype.clearCart = function(item){
    this.cart = [];
    this.currentId = 0;
}

const shoppingCartV1 = new CartV1();
//함수에 new키워드가 붙으면 빈객체하나가 생성이되고(1)
//함수를 new연산자를 사용하면 함수내 코드가 종료되면 return이없어도 그 빈객체에 this로 바인딩된 객체를 return한다

class CartV2 {
    static createItem = (name,price) => ({
        //static => 정적메소드 (클래스 그자체만 가지고있)
        name,price
    })

    cart;
    currentId;

    constructor(){
        this.currentId = 0;
        this.cart = []
    }

    getNewId = () => {
        this.currentId++;
        return this.currentId;
    }
    addItem = (item) => {
        this.cart.push({
            ...item,
            id:this.getNewId()
        })
    }

    clearCart = () => {
        this.currentId = 0;
        this.cart=[];
    }
}

const shoppingCartV2 = new CartV2();

//시각적으로도 관리적으로도 class가 더 나은모습

