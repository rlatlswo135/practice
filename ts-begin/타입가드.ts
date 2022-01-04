//타입가드? => 어떤변수가 2개이상의 타입을가졋을때 원천적으로 막아주거나 하는개념

function tgCase1(a:number|string){
    if(typeof a === 'string'){
        return a.replace('x','X')
        //타입오브가 string일때니까 replace 메소드를 사용이가능하다
    }

    return a.replace('y','Y') //얘는 ??
    //a타입이 number or string인데 number는 replace라는 메소드가없기때문에
    //타입가드가 발동해서 아예 코드자체가 에러라고 막아버리는거다 -> 타입이지정이안됫는데 number는 못쓰는 메소드인 replace를 써?!
}

function tgCase2(b?:number|null){
    console.log('asd')
    console.log(b.valueOf());
    //여기선 여기가 타입가드느낌 즉 b가 null일수도있는데 valueOf메소드를쓰니 막아버리는거
    console.log('fqewq')
}

interface tgCase3{
    foo:string;
    common:string;
}


function isFoo(arg:any):arg is tgCase3{
    //arg is tgCase3 해석 => 약간 타입가드용 해석코드인데 (타입가드만 알아들을수있는코드)
    //arg가 tgCase3 타입이라고 타입가드선에서 심어놓는거
    //if해서 typeof..뭐시기 분기할필요없이
    return arg.foo !== undefined;
}

console.log(isFoo({foo:'ok',common:'wow'})) //tgCase3
console.log(isFoo({foo:'ok',common:'wow',active:true}))//한계점. 키를추가해서 규격에안맞으나 Ok가됨

function isString(arg:any):arg is string{
    return typeof arg === 'string' //true => is로 타입가드선에서 stirng으로 박아놧으니까
}

function example(foo: any){
    if(isString(foo)){
        console.log('it is a string' + foo);
    }
}

function example2(foo: any){
    if(isString(foo)){
        console.log('it is a string' + foo);
        console.log(foo.length);
        console.log(foo.toExponential(2));
        //타입가드선에서 string타입으로 박앗는데 숫자타입에 메소드를썻으니 => 타입가드
    }
}