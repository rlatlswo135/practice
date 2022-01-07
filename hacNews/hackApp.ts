'use strict'
type News = {
    id:number;
    time_ago:string;
    title:string;
    url:string;
    user:string;
    content:string;
}

type NewsFeed = News &{ 
    //뉴스전체와 뉴스디테일에대한 ajax받는게 2개가있엇지? => 그 2개의 응답중에 타입이 겹치는게있어서 중복을제거하기위해 모두에 해당되는 News타입을 만들고 없는것만 넣어줘서
    //News타입과 Mix한 형태
    comments_count:number;
    points:number;
    read?:boolean; //read속성은 코드에서 추가되는거기때문에 optional로 해줫다.
}

//익스텐션중 REST Client -> api ajax호출을 브라우저단이아닌 에디터단에서 볼수있게도와주는 익스텐션

type NewsDetail = News &{
    comments: NewsComments[];
}
type NewsComments = News &{
    comments:[];
    level:number;
}


type Store = {
    currentPage:number; 
    readedNews:NewsFeed[];
}



const content = document.createElement('div') //마우스를호버해보니 타입이 다나온다 vs코드에디터자체도 ts로만들어저서그런지 지원이 빵빵한편.
const root:HTMLElement | null = document.getElementById('root')
const ul = document.createElement('ul')

const store:Store = {
    currentPage : 1,
    readedNews : []
    /*
    현재페이지를 담을 변수인데 글목록으로갈때마다 getNewsList함수가 호출되니 그 함수안에 변수를넣으면 초기값으로 항상 돌아가기때문에 전역변수로 처리를할거고
    전역변수에 담을 애들이 많을거라고 예상되기때문에 그때마다 변수를 선언해주지말고 객체안에 담는식으로 해보자
    */
}

let ajax:XMLHttpRequest = new XMLHttpRequest();

const NEWS_URL = 'https://api.hnpwa.com/v0/news/@currentPage.json'
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json' //여기서 각뉴스의 id가들어가는데 일단 @id로 마킹하고 틀만 저렇다 얘기한거
/*
DOM API의 문제는 html태그들을 코드로써 다루기때문에 그 코드만보고 어떤 html태그인지 or dom tree를 한눈에 식별하기 어렵다는것.
방법은 Dom API자체를 사용하지말고 문자열로 html의 구조를 짜는게 한눈에 식별하기좋고, dom api를 쓰지않는 노력들이 현재 계속되고있다.
*/

function isReadNews(newsArray:NewsFeed[]):NewsFeed[] {
    for(let news of newsArray){
        news.read = false
    }
    return newsArray
}
function ajaxCall<AjaxResponse>(request:string,url:string,async:boolean):AjaxResponse {
    //기존의 ajax콜을 해서 json데이터를 받아와서 객체화하고 변수에담는 메커니즘이 겹치는게있어서 함수화를시킴
    ajax.open(request,url,async)
    //3번째인자가 동기 비동기를 결정하는것인듯 -> 비동기안쓴댓으니까 동기겟지
    ajax.send();
    //send()를 호출하면 인제 저기서 데이터를 가져오는데
    const ajaxResult = JSON.parse(ajax.response)
    //JSON형태로 넘어오니 obj로 잘 조작하기위해서

    return ajaxResult
}

function updateView(element:HTMLElement|null,html:string):void{ //return이없을때 void라는 타입을쓴다
    if(element){
        element.innerHTML = html
    }else{
        console.error('html문서가 없습니다')
    }
}

function getNewsDetail():void{
    //string.substring(start) or (start,end)  지정가능
    const newsId = location.hash.split('show')[1].substring(1)
    
    // const RESULT_CONTENT_URL = CONTENT_URL.split('@id').join(`${newsId}`)
    const RESULT_CONTENT_URL = CONTENT_URL.replace('@id',newsId) //위가 내가짠거 (아래가훨씬직관적이고 좋음)
    
    const newsContent = ajaxCall<NewsDetail>('GET',RESULT_CONTENT_URL,false)

    console.log(newsContent)
    let template = `
    <div class="bg-gray-600 min-h-screen pb-8">
        <div class="bg-white text-xl">
            <div class="mx-auto px-4">
                <div class="flex justify-between items-center py-6">
                    <div class="flex justify-start">
                        <h1 class="font-extrabold">Hacker News</h1>
                    </div>
                    <div class="items-center justify-end">
                        <a href='#/page/${store.currentPage}' class="text-gray-500">
                            <i class="fa fa-times"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="h-full border rounded-xl bg-white m-6 p-4">
            <h2>${newsContent.title}</h2>
            <div class="text-gray-400 h-20">
                ${newsContent.content}
            </div>
            {{news_comment}}
        </div>
    </div>
    `

    for(let news of store.readedNews){
        //읽은뉴스의 상태를 표시하기위해
        //split함수는 string을 리턴하기때문에 Number로 타입을 바꿔줌
        if(news.id === Number(newsId)){
            news.read = true
            break
        }
    }
    


    const resultCommentList = makeComment(newsContent.comments)

    template = template.replace('{{news_comment}}',resultCommentList)

    //위에보면 root변수는 id가 root인 엘리먼트를뽑는거이고 타입은 HTMLElement | null인데 null일경우 innerHTML라고하는 메소드가 없기때문에 ts에서 경고를 보여주는거다 그래서 null이 아닐때
    //innerHTML에 접근하라고 메시지를 보내준것 그래서 분기를 해줘야한다 -> = 타입가드

    updateView(root,template)
    //라우팅위해 overwrite => 새로운 화면을보여준다? => 덮어써야하니까
    
}

function makeComment(commentArray:NewsComments[],called = 0):string{ 
    //댓글 -> 대댓글 -> 대댓글 끝이없다 => 재귀돌려서 빈배열나올때까지? 그방법할듯.
    const commentList = [];
    /*
    대댓글의 depth를 조정하기위해서 함수가 몇번호출됫나(그재귀에따라 대댓글이란게 결정나니까)를 담는 변수를만들어주고
    css에서 40px를 기준으로 depth를 적용하니 최초 콜에는 패딩이없이 (공간x) 0*40px로 하고 그다음 호출시(대댓글)에는 40px씩 depth를가진다
    */
    for(let comment of commentArray){ //for문에 변수선언한 comment는 타입선언안해줘? => 타입추론을 통해서 ts가 자동으로 타입을추론해줌ㅎㅎ;
        commentList.push(`
        <div style="padding-left: ${called * 40}px;" class="mt-4">
            <div class="text-gray-400">
                <i class="fa fa-sort-up mr-2"></i>
                <strong>${comment.user}</string>${comment.time_ago}
            </div>
            <p class="text-gray-700">${comment.content}</p>
        </div>
        `)
        if(comment.comments.length){
            //재귀 잘이해해보자
            commentList.push(makeComment(comment.comments,called + 1))
            //결국 재귀돌리다 대댓글이 다 join된 return이 push됨
        }
    }
    return commentList.join('')
}

function getNewsList(pageNum = 1){ //전역변수 사용줄이기위해 클로저사용. 처음부터내가짠코드 => 지금보니 클로저필요없네;
    const RESULT_NEWS_URL = NEWS_URL.replace('@currentPage',String(pageNum)) //경고의 이유는 replace는 string을 연산하는 함수니까 인자를 string으로 줫으면 좋겟다라고 권고하는것, 그래서 String으로 감싼거지
    const newsArray = [];

    let newsFeed:NewsFeed[] = store.readedNews; //재할당해야하니 let으로 (const x)

    if(newsFeed.length === 0){ //최초 호출시에는 ajax를 통해 데이터를 받아와야겟지? => 페이징때마다 원래 들렷던 페이지까지 또 오청해서 데이터를 받아오는구조라 아예 받아왓으면 배열에 넣어서 요청하고 그런 시간을 줄이는거지
        newsFeed = store.readedNews = isReadNews(ajaxCall<NewsFeed[]>('GET',RESULT_NEWS_URL,false))
        //좀만생각해보자 ajaxCall함수가 ajax호출을 반환해주는코드인데 그 반환되는 거의 타입정의를 다다르게해야되고 그때마다 타입가드를하기에는 굉장히 복잡하다
        // 제네릭이란 기능을쓸건데 타입을 입력받으면 그 타입이 리턴되도록 하는느낌? 의 기법이다 <>
    }
    /* 
    하지만 이런 배열로써 push를해서 html구조를 만들면 작업이 커질때 코드를보고 한눈에 html구조를 파악하기힘드니.
    위에 NEWS_URL처럼 마킹을해줘서 그안에 데이터만 넣는형식으로 가보자 = 템플릿 렌더링
    */

    //tailwindcss는 내용이 방대하기때문에 문서를보고 자습하는것을 추천한다 어렵진않으니까.
    //ex) mx = margin x auto  // p-4 = padding - 4px
    let template = `
    <div class="bg-gray-600 min-h-screen">
        <div class="bg-white text-xl">
            <div class="mx-auto px-4">
                <div class="flex justify-between items-center py-6">
                    <div class="flex justify-start">
                        <h1 class="font-extrabold">Hacker News</h1>
                    </div>
                    <div class="items-center justify-end">
                        <a href='#/page/{{pre_page}}' class="text-gray-500">이전 페이지</a>
                        <a href='#/page/{{next_page}}' class="text-gray-500" ml-4>다음 페이지</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="p-4 text-2xl text-gray-700">
            {{news_list}}
        </div>
    </div>
    `
    for(let news of newsFeed){
        //i태그에 class부분이 font-awesome 부분인듯?
        //읽은뉴스는 색깔을 달리하기위해 상태를 추가한것
        newsArray.push(
            `
        <div class="p-6 ${news.read ? 'bg-gray-500' : 'bg-white'} mt-6 rounded-lg shadow-md transitioxfn-colors duration-500 hover:bg-green-100">
            <div class="flex">
                <div class="flex-auto">
                    <a href=#/show/${news.id}>${news.title}</a>
                </div>
                <div class="text-center text-sm">
                    <div class="w-10 text-white bg-green-300 rounded-lg px-0 py-2">${news.comments_count}</div>
                </div>
            </div>
            <div class="flex mt-3">
                <div class="grid grid-cols-3 text-sm text-gray-500">
                    <div><i class="fas fa-user mr-1"></i>${news.user}</div>
                    <div><i class="fas fa-heart mr-1"></i>${news.points}</div>
                    <div><i class="fas fa-clock mr-1"></i>${news.time_ago}</div>
                </div>
            </div>
        </div>
            `)
        }
        //저 hash에 page라고 내가 알아들을수있는 키워드를 넣음으로써 밑에 라우팅에서 분기를해주는느낌이다
        
        //template를 replace한 데이터를 다시 template에 할당을 안해줘서 처음에 에러가낫음
        template = template.replace('{{news_list}}',newsArray.join(''))
        template = template.replace('{{pre_page}}',String(store.currentPage === 1 ? store.currentPage : store.currentPage-1))
        //이전페이지 페이징시 1->0으로가는걸 막기위한 방어코드 + 다음페이지도 마찬가지(확인해보니 10페이지밖에 못불러옴)
        template = template.replace('{{next_page}}',String(store.currentPage === 10 ? store.currentPage : store.currentPage +1))
        /*
        이런식으로 마킹한부분을 데이터로 채워넣으면 html구조를 한눈에 알수있다는거지 하지만.!
        단점도 있어보인다 마킹된 개수만큼 replace가 등장한다는것과, 여전히 까다로운부분은 for문을돌리거나 해서 구조를 들이박는다는것.
        이러한 단점을 코드상으로 좋게 바꿀수는있지만 굉장히 어려운작업이기때문에 
        handlebars라는 라이브러리 등 템플릿 렌더링방식의 단점을 채워주는 라이브러리도있다
        */

        updateView(root,template)
        return;
    }

function router(){
    const routePath = location.hash
    //location에 #만 들어가있어도 결국 공백으로 판단한다 그러니 localhost:1234던 localhost:1234/#이던 같은걸 반환한다는소리
    if(routePath === '') {
        getNewsList()
    }else if(routePath.includes('page')){
        store.currentPage = Number(location.hash.split('page')[1].substring(1))
        //substr 리턴값이 string이라서 페이징이 이상해져서 Number로 바꿔줌
        getNewsList(store.currentPage)
        console.log('page move')
    }else if(routePath.includes('show')){
        getNewsDetail()
    }
}
//주소창이 바뀌엇을때 나오는데 정확하게무슨이벤트인지 알아보자 (hashChange)
window.addEventListener('hashchange',router)

router()



