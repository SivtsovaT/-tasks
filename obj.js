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


  
  