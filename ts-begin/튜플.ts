const address:[number,string,string] = [14023,'서울시','송파구'] //튜플
//배열은 원소의 개수에 제약이없는방변 튜플은 있다

let [zipcode,address1] = address //구조분해할당 => 튜플로했기때문에 (원소의 타입까지 정해져있기때문에) 구조분해할당시 좀더 명확하게 하는게 가능하다
//무조건 zipcode는 type이 number거니까

type BookInfo = [string,string,number];

const BookData : BookInfo[] = [ //BookData의 타입은 array인데 안에 원소가 BookInfo(튜플)타입 이라는거지
    ['헨리 8세','셰익스피어',1884],
    ['헨리 8세','셰익스피어',1884]
];

BookData.push(['a','b',3]) //오류없음
BookData.push([3,'b',3]) //오류있음 => 튜플로인해 string string number니까

function getArrayOne():any[]{
    return [14623,'서울시','송파구']
}

type Address = [number,string,string];

function getArrayTwo():Address{
    return [1412,'서울시','송파구'];
}

let address2 = getArrayTwo()[2]; // [1412,'서울시','송파구'] 의 2번째 인덱스


address2 = 12; //오류가 나겠지? 리턴하는 튜플의 2번째인덱스는 string인데 number을 넣으려하니
