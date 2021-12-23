function doException(){
    throw new Error('error !!') //에러를 던짐
    // throw 'error!' //string을 던짐
    //throw는 예외처리를 던지는 구문이다 즉. throw이후에는 코드블록이 실행되지않으며 예외처리를 받는 catch가 있으면 그걸 받고 프로그램은 종료되지않는다
    //위에 코드는 예외를 새로운 에러로 던지는 구문( throw 'error!' 이렇게 string으로 예외를 던질수도 있는거다)
}
function noException(){ //예외가 없는함수
    return true;
}

function second(){
    doException()
}

second() //throw즉 던졋다 새로운 에러를 그러면 이 에러를 받아주는녀석이 없다면 프로그램은 그대로 종료되게된다 그래서 이 에러를 받는애를 만들어주는데

function SECOND(){
    try{ //try 말그대로 시도하는. 먼저 try블록안에 코드를 실행해서 에러가없다면 finally부분으로 가겟지?

        doException() //예외발생 -> 밑에 필수콘솔이 실행이안됨 (throw밑에 코드블록은 실행이안되니까) -> 그래서 finally구문이 필요한것.

        console.log('필수적으로 실행되어야하는 놈')
    }
    catch(err){ //catch즉 잡다. 즉 에러를 받아주는 녀석이다 try단에서 일단 시도한 코드중 에러가난녀석을 인자로받는다
        //catch는 함수의 depth(깊이)와 상관없이 먼저 오류를 받는놈이 있다면 더이상 그 밖으로 그 오류를 던지지않으니 받아주지 않아도된다.
        console.log(err)
    }
    finally{ //try시도후 에러가있다면 catch 실행하고 어쨋든 최종마무리단에서 실행되는 코드블록 => 즉 예외가 있던 없던 무조건 실행되야하는놈이 있다면.
        console.log('검사가 끝낫습니다')
    }
}

SECOND()