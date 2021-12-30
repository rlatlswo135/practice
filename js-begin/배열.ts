let a = [1,2,3,4] //[3,4,3,4]

let b = a.splice(0,2,3,4) // [1,2]

//splice(처음포함,마지막미포함,교체할애들)

let A:number[] = [1,2]

let B:number[] = [3,4]

let d = A.concat(B)  // [1,2,3,4]

let c = [...A,...B] // [1,2,3,4]

//concat보다는 전개구문을쓰는게 직관적이고, 훨씬보기좋으니 전개구문을 쓰는 습관!