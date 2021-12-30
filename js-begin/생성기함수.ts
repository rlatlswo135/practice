//생성기함수는 기본 함수와 메커니즘이 다르기때문에 (기존의 함수개념을 확대해석을해야한다.) 어렵다.

//중요한건 return을하고 함수는 종료되는게 기본인데 생성자함수는 return후 종료될지/안될지를 정할수있다. 

function plusEnergy(){
    let energy = 0;
    // plusEnegy함수가 리턴하는 함수를 호출한 값을 상수에 넣어주는거니까 let초기화가 발생을 안하나부다
    return function(ene = 0){
        if(ene){
            energy += ene; //인자가 없다면 ene 디폴트가 0이니까 0(부정값)이 들어가기때문에 else로 빠질것
        }
        else{
            energy ++;
        }
        return energy
    }
}

function* pluseEnergy2(){ //함수를 재개할 도구를가진 obj를 리턴한다 {value done next}
    let energy2 = 1;
    while(true){
        const booster = yield energy2; //while true는 무한루프지만 생성자함수의 yield는 만나면 yield까지만 함수를 실행하고난 뒤에 값을 value에 넣어서 
        //도구들과 함께 리턴한다 그후 생성자함수.next()를 만나기전까진 그 이후 코드블럭은 실행안하고있다가 next()를 만나면 yield이후의 코드블럭을 실행하고
        //다시 yield를 만낫을때 멈추는거다. 이후 생성자함수에 return문을 만나면 done도구에 true가 들어가서 끝나게된다

    if(booster){
        energy2 += booster;
    }
    else{
        energy2 ++; 
    }
 }
}
const energy = plusEnergy(); //리턴하는 함수가 energy에 박히겟지? 즉 plusEnergy를 한번호출햇으니 0이 energy에 박혀잇는상태로 리턴하는함수가 실행되는거지

for(let i=0; i<5; i++){
    console.log(energy)
}

console.log(energy(5))