//1)-----------------------//

// let a = '1458793';
// var b = a.length;

// for (i = 0;i < b ; i++){
//     c = a.charAt(i);
//     if(c%2==0){
//         console.log(c);
//     }
// }

// var b = a.split('');
// var c = '';
// for(i = 0; i< a.length;i++){
//     if(b[i]%2==0){
//         c += b[i];
//         }
//   }

// var a = 23547698;
// var d = '';

// for ( i = 0;i < a;i++){
//     b = a % 10;
//     c = a - b;
//     a = c / 10;
//     if(b % 2 == 0){
//         d += b; 
//     }  
// }
// console.log(d);

// var a = 'abecdi';
// var b = a.split('');
// var c ='';
// console.log(b);
// for (i=0;i<=b.length;i++){
//     if(b[i]=='a'){
//       console.log(b[i]);
//     }
//     if(b[i]=='e'){
//         console.log(b[i]);
//     }
//     else if(b[i] =='i'){
//         console.log(b[i]);
//     }
//     else if(b[i]=='o'){
//         console.log(b[i]);
//     }
//     else if(b[i]=='u'){
//         console.log(b[i]);
//     }
// }

//  var a =[1,4,7,5,4];
//  var b = 0;
// for(i =0 ; i < a.length; i++){
//     b += a[i];     
// }
// console.log(b);

// let a = 'ade5fo6gd8';
// var b = a.split('');
// var c =0;
// for(i = 0;i<=b.length;i++){
//     if(b[i]>=0){
//        c +=parseInt(b[i]);
//     }
// }
// console.log(c);

// let a = 'swsttwsdy';
// var b = a.replace('s','t');
// var c = b.replace('d','muthu');
// console.log(c);

// let a =[1,3,58,9,5,3];
// let c =[];
// for (i = 0;i<a.length;i++){
//     b = a[i]+a[i+1];
//     i = i + 1;
//     c.push(b);
// }
// console.log(c);

var a = 2.4 ;
var b = 25;
console.log( 'Math.round '+ Math.round(a));
console.log( 'Math.floor '+ Math.floor(a));
console.log( 'Math.ceil '+ Math.ceil(a));
console.log( 'Math.trunc '+ Math.trunc(a));
console.log( 'Math.sqrt '+ Math.sqrt(b));
console.log( 'Math.abs '+ Math.abs(-4));
console.log( 'Math.pow '+ Math.pow(4,2));
console.log( 'Math.random '+ Math.random());
console.log( 'Math.min '+ Math.min(1,3,2));
console.log( 'Math.max '+ Math.max(1,3,2));

var d = new Date()
console.log(d);

d.setDate(22)
d.setTime(12)

console.log(d);

var e = d.getDate();
console.log('Date ', e);

var f = d.getFullYear();
console.log('FullYear ', f);

var g = d.getHours();
console.log('Hours ', g);

var h = d.getMilliseconds();
console.log('Seconds ', h);

var i = d.getMonth();
console.log('Month', i);

 d.setDate(22);
console.log('Date ',d.getDate());

d.setFullYear(2025);
console.log('year', d.getFullYear());

d.setHours(6);
console.log('Houre ',d.getHours());

d.setMilliseconds(500);
console.log('Date ',d.getMilliseconds());

d.setMonth(1);
console.log('Date ',d.getMonth());











