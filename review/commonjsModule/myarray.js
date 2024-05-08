let emps = [ {name:"park", age:20, point:100},
    {name:"choi", age:26, point:200},
    {name:"kim", age:10, point:50},
];

function totalPoint() {
   return emps.reduce((accumulator, currentValue) => accumulator + currentValue.point, 0); 
};

module.exports = totalPoint;

