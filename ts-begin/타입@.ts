import {v4} from 'uuid';
//ts로 개발을하다보면 라이브러리를 쓸때 그 라이브러리가 ts를 지원하지 않는경우가있다
//그럴때 쓰는방법이 만약 uuid라는 라이브러리라면 uuid가 무슨타입인지 알아보고 그 타입을 직접 타이핑하는거 아니면
//누군가 ts를 지원하지않는 라이브러리들의 타입을 저장해놓은 저장소인 @types가 있다
//@types -> 이거역시 라이브러리겟지? ex)uuid => npm install @types/uuid
//하면 오류가 사라진다 규격에 타입이 들어갔으니까

//npm 에서 @types하고 내가쓸려는 라이브러리를 검색해보자@!

type UniqObj = {
    id:string;
    [key:string]:string|number|boolean;
}

const makeObj = () :UniqObj => ({
    id:v4(), //@types를 통해서 uuid를 타입에 등록햇으니 됫다!
});

console.log(makeObj())
console.log(makeObj())