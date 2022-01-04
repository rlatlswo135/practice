type Book = {
    title:string;
    copyright?:string;
    author?:string;
}

const books:string[] = [ //타입지정이 string인 배열([]) 인가보다
    '헨리 6세',
    '리처드 3세',
    '실수 연발',
    '말괄량이 길들이기',
    '헨리 8세'
]

//순회 (forEach)

books.forEach((book:string,idx:number,books:string[]) => {
    console.log(book) //ele
    console.log(idx) //index
    console.log(books) //arrays
})

const bookObjects:Book[] = books.map((book:string) => {
    return {
        title:book,
        author:undefined
    }
})
//형태를 잘보면 알겠지만 모두 함수를 인자로받는 함수다 (애로우펑션이 인자로들어가있잖아 그러니 2번케이스가 가능한거지)
const Chaining : Book[] = books
    .map((book:string) => ({
        title:book
    })) //arrow function은 첫번째data가 return일경우 생략가능하지?
    .map((book:Book) => ({
        ...book,
        author:'Wiliam Shakespear'
    }))

//수식의 결과를 '배열'에 담아서 return한다는게 차이 그러니까 체이닝이가능함 

//2번케이스

const bookTitle = (book:string) => ({title:book}); //book 인자를 받아서 OBJ하나를 리턴하는 함수
const makeAuthor = (name:string) => (book:Book) => ({
    ...book,
    author:name
}); //name이라는 인자를 받아서 book이라는 인자를받고 객체를 return하는 함수를 return하는 함수

const case2 : Book[] = books
    .map(bookTitle)
    .map(makeAuthor('Wilam spakcespear'));

console.log(case2)

//왜? 함수를 인자로받는 함수니까 map이 -> 코드자체가 이해하기 어렵지만, 가독성 재활용성 모두가 뛰어나니 연습만이살길!

const filter:Book[] = case2.filter((book:Book) => 
    book.title.includes('헨리'));

//함수를 인자로받아서 return값이 true인 애들만 모아서 배열로 return해주는.

const someNumbers:number[] = [1,2,3,4,5]

const sumNumber = someNumbers.reduce((start:number,element:number) => start+element,0)
//reduce함수는 1번째인자로 함수, 2번째인자로 start에 들어갈 초기값이 들어가게되는데
//reduce함수의 1번째인자인 함수의 1번째 인자는 초기값,2번째인자가 순회값이 들어간다
//그러니 0 + 1 이 되고 그다음 start부분이 전에 계산한 값이 들어가게된다 (누산)

type someObj = {
    [key:string]:string|number;//객체를 타입지정할때 ['변수']이런식으로해야되나부다 타입설정할때 : 이게 겹쳐서그런가?
}

const someOBJ:someObj[] = [
    {border:'none'},
    {fontSize:24},
    {className:'box sm-box'}
];

const reduce:someObj = someOBJ.reduce(
    (start:someObj,ele:someObj) => ({
        ...start,
        ...ele
    }),{})

//reduce의 활용방안

//그럼 유사배열(arguments)는 forEach map등이 안먹힐까? => 안먹히지! 그래서 그 유사배열을 배열로 바꿔주는 Array.from이있다

function sumNumbers():number{
    return Array.from(arguments).reduce((start:number,ele:number) => start+ele,0)
}

//위와동일

function CASE2(...args:number[]):number{
    return args.reduce((start:number,ele:number)=>start+ele,0)
}

console.log(CASE2(10,20,30))
 