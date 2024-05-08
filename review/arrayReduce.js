const array = [1,2,3,4,5];
const initialValue = 0;
const sumWithInitial = array.reduce((accumulator, currentValue) => accumulator + currentValue , initialValue);
console.log(sumWithInitial);

let emps = [{name:"park", age: 20 , point : 100},
    {name:"choi", age: 26, point : 200},
    {name:"kim", age: 10, point : 150},
];
let basePoint = 1000;

const totalPoint = emps.reduce((accumulator, currentValue) => accumulator + currentValue.point , basePoint);
console.log(totalPoint);

