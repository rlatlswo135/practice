'use strict'

let ajax = new XMLHttpRequest();
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json'
ajax.open('GET',NEWS_URL,false); //3번째인자가 동기 비동기를 결정하는것인듯 -> 비동기안쓴댓으니까 동기겟지
ajax.send(); //send()를 호출하면 인제 저기서 데이터를 가져오는데

const newsFeed = JSON.parse(ajax.response) //JSON형태로 넘어오니 obj로 잘 조작하기위해서

console.log(newsFeed)

const root = document.getElementById('root')

function pushContent(){ //전역변수 사용줄이기위해 클로저사용. 내가짠코드 => 지금보니 클로저필요없네;
    const newsArray = [];
    return function(){
        for(let key of newsFeed){
            newsArray.push(`<li>${key.title}</li>`)
        }
        let result = '<ul>'+newsArray.join('')+'</ul>'
        return result
    }
}
root.innerHTML = pushContent()()

//앱의본질? -> 결국 입력을 출력으로 바꾸는게 개발이다

//제약사항 -> 데이터가없음 => restAPI쓸거
//css디자인 -> tailwindcss라이브러리 사용할거
//비동기 -> 초반에 허들로 작용하나 필수 그러나 제거하고 개발했다.

