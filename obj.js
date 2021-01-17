'use strict';

function animal(name,color,legs){
    this.name = name;
    this.color = color;
    this.legs = legs;
    this.say = function () {

        console.log(`This  ${this.color} ${this.name} has ${this.legs} legs`);

    }
  }

 let dog = new animal ('dog', 'white', 4 );
 let cock = new animal ('cock', 'red', 2 );
 let rabbit = new animal ('rabbit', 'gray', 4 );


 dog.say();
 cock.say();
 rabbit.say();

 //https://www.codewars.com/kata/571f1eb77e8954a812000837/train/javascript


 'use strict';

var a1="A",a2="a",b1="B",b2="b",c1="C",c2="c",d1="D",d2="d",e1="E",e2="e",n1="N",n2="n"
function Dad(){
  //select some variable to combine "Dad"
  console.log(d1+a2+d2);
 
}

function Bee(){
  //select some variable to combine "Bee"
  console.log(b1+e2+e2);
}

function banana(){
  //select some variable to combine "banana"
  console.log(b2+a2+n2+a2+n2+a2);
}
Dad();
Bee();
banana();

//https://www.codewars.com/kata/571edea4b625edcb51000d8e/train/javascript




  
