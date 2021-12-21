// 1. make a string out of an array
const fruits =['apple','banana','orange'];
const result = fruits.join('');
//join(separator?: string): string;
//구분자에 ?는 넣어도되고 안넣어도된다는거

//2. make an array out of a string
const fruit='apple,banana,slea';
const result = fruit.split(',',2); // ,로 나누고 2개만 배열로

//3. make this array look like this
const array=[1,2,3,4,5];
const result = array.reverse();
// -> 레퍼런스를 직접 바꿈, (원본에도 영향이간다는소리)

//4. 'make new array' without 

const arr = [1,2,3,4,5]
const splice(0,2); //인덱스 0~1(마지막2제외) 삭제하는데, 원본을 바꿈.
const slice(0,2); // 위와 동일인데 원본을 바꾸지 않음 

//5. array and callback

class Student {
    constructor(name,age,enrolled,score){
        this.name=name;
        this.age = age;
        this.enrolled = enrolled;
        this.score=score; //이런 틀만들어서
    }
}

new students = [
    new Student('A',29,true,45),
    new Student('B',28,true,89),
    new Student('C',29,true,90),
    new Student('F',29,true,45), //배열안에 객체틀을 넣은거지 그럼 index[0]은 객체
    new Student('D',29,true,45)
]

const result = students.find(item => item.score === 90)
//각 아이템을 돌아 그아이템은객체니까 아이템의.score프로퍼티가 90인애가 true이면
//해당 아이템을 펑 하고 리턴.

const result = students.filter(item => item.enrolled)
// = students.filter(function(item){return item.enrolled});
//각 아이템을 돌아 해당 콜백함수가 true인 애들을 펑하고 '새로운 배열'로 리턴

const result = students.map(item => item.score)
//각 아아이템을 돌아 해당 콜백함수의 리턴값으로 대포를 쏴서 새로운배열로 집어넣는다

const result = students.some(item => item.score < 50)
//각 아이템을 돌아 해당 콜백함수의 조건에 만족하는애가 있다면(or조건)
// true 없다면 false
//즉 각 아이템을 돌아 score가 50아래인 애가 있기만하면 true가 return.

const result = students.every(item => item.score<50)
//위와 비슷 but 얘는 로직이 and조건으로 들어가 모든 아이템이 저 로직에 해당하면.
//true를 return

const result = student.reduce((cal,student) => cal = cal + student.score,0)
return result/students.length;
//각 아이템을 돌아 응축해서 cal을 리턴하는데 sum이라고 생각하지말고 하나로 응축한다 생각하자.

const result = students.map((student) => student.score)
result.join();

//점수를 받아서 그배열을 문자열로 바꿔줌. join = 이어주는거니까

const result = students.filter(item => item.score > 50);

const result2 = result.map(item => item.score).join();

//점수가 50이 넘는애들의 점수를 문자열로 출력하는느낌, 필터로 거치고 점수로만 매핑해
//배열을 만들고 그 배열을 쪼인으로 연결

const result = students.map(item => item.score).sort((a,b)=> a-b).join()
//sort -> 정렬느낌, a,b는 index[0] , [1] 느낌 개내를 뺏을때 마이너스값이 라면 작은순정렬리 되서 출력
//점수를 뽑아 sort로 정렬 후 join으로 연결해 문자열로 출력