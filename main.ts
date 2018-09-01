// 1- Type Script Hello world
// function helloWorld(message){
//     console.log(message);
// }

// var message = 'Hello World';
// helloWorld(message);

// 2- var and let keyword in type script
// function doSomething(){
//     for(var i = 0; i < 5; i++ ){
//         console.log(i);
//     }
//     console.log('Finally:' +i);
// }

// doSomething();

// function doSomething(){
//     for(let i = 0; i < 5; i++ ){
//         console.log(i);
//     }
//     console.log('Finally:' +i); // Throwing error because i is scoped
//     // to nearest block
// }

// doSomething();

// let log = function message (){
//     console.log(message);
// }

// // 3- Types in type script
// let a: number;
// let b: boolean;
// let c: string;
// let d: any;
// let e: number[] = [1,2,3,4]; // or
// let f: any[] = [1,true,'hello',false];

// const ColorRed = 0;
// const ColorGreen = 1;
// const ColorBlue = 2;

// enum Color {Red = 0, Green = 1, Blue = 2};
// let backgroundColor = Color.Blue;

// 4 - Type Assertions
// let message;
// message = 'abc';
// let endsWithC = (<string>message).endsWith('c');
// let alternativeWay = (message as string).endsWith('c');

// 5- Arrow function in typeScript using => 
// In javascript we will create function like
// let log = function(message){
//     console.log(message);
// }
// // but in type script we can create function using arrow 
// let typeFunction = (message) => {
//     console.log(message);
// }
// // if function is one line of code then we can write
// let doLog = (message) => console.log(message);
// // if we don't have parameters then we can write
// let funcType = () => console.log();

// 6- Interfaces in type script

// Class and constructor in typeScript

// class Point{
//     x: number;
//     y: number;

//     constructor (x?:number, y?:number){
//         this.x = x;
//         this.y = y;
//     }
//     draw(){
//         console.log('X: '+ this.x + 'Y: ' + this.y)
//     }
// }

// let point = new Point();
// // point.x = 1;
// // point.y = 2;
// point.draw();