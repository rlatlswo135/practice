클라이언트와 서버가 어찌통신>

클라 -> 요청 ... 서버 -> 응답

사람  : 도표 등 정리된 정보가 보기편해
컴퓨터 : 몰라그런거 우리는 텍스트 0,1밖에 그러니

그중간에 통역사가 필요한거다 (한국어 ->통역 ->영어),(영어 -> 통역 -> 한국어)

XML = 컴퓨터에게전할그정보를 태그로감싸서 알려준다 마치 html처럼.
<shop>bbq</shop>
<location>원종동</location>
<phone>132-1111</phone>
근데 필요이상으로 과하고 장황,작성도 불편, 가독성도 떨어짐(단점만잇는건아님
    장점도있다 : 문법오류에 강하다(태그로다감싸니까))
,,,
-> JSON(하지만 문법오류에 취약 :나 {없거나}등 .)
객체형태로 정보를 저장해서 전달해준다 컴터한테
={
    shop : bbq
    location: 원종동
    phone : 132-1111
}
//JSON
//JavaScript Object Notation

//1.Object to JSON
//stringfy(obj)
let json = JSON.stringify(true);


//2.JSON to Object
//parse(json)