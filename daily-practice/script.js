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

// var a = 2.4 ;
// var b = 25;
// console.log( 'Math.round '+ Math.round(a));
// console.log( 'Math.floor '+ Math.floor(a));
// console.log( 'Math.ceil '+ Math.ceil(a));
// console.log( 'Math.trunc '+ Math.trunc(a));
// console.log( 'Math.sqrt '+ Math.sqrt(b));
// console.log( 'Math.abs '+ Math.abs(-4));
// console.log( 'Math.pow '+ Math.pow(4,2));
// console.log( 'Math.random '+ Math.random());
// console.log( 'Math.min '+ Math.min(1,3,2));
// console.log( 'Math.max '+ Math.max(1,3,2));

// var d = new Date()
// console.log(d);

// d.setDate(22)
// d.setTime(12)

// console.log(d);

// var e = d.getDate();
// console.log('Date ', e);

// var f = d.getFullYear();
// console.log('FullYear ', f);

// var g = d.getHours();
// console.log('Hours ', g);

// var h = d.getMilliseconds();
// console.log('Seconds ', h);

// var i = d.getMonth();
// console.log('Month', i);

//  d.setDate(22);
// console.log('Date ',d.getDate());

// d.setFullYear(2025);
// console.log('year', d.getFullYear());

// d.setHours(6);
// console.log('Houre ',d.getHours());

// d.setMilliseconds(500);
// console.log('Date ',d.getMilliseconds());

// d.setMonth(1);
// console.log('Date ',d.getMonth());

// var a = [1,2,3,4,5,6]
// //output [4,5,6,1,2,3]
// var b = a.slice(3,6);
// var c = a.slice(0,3);
// var d = b.concat(c);
// console.log(d);

// var a = '123456';
// var b ='';
// // output 214365;
// for(i = 0;i<a.length;i++){
//     if(a[i]%2==0){
//        b +=parseInt(a[i])-1;
//     }
//     else if(a[i]%2 == 1){
//        b +=parseInt(a[i])+1;
//     }
// }
// console.log(b);

// var a = 'http://www.youtube.com';

// //output http www youtube com

// var b = a.split('://')
// result1 = b[0];
// var c = b[1];
// var d = c.split('.') 
// result2 = d[0];
// result3 = d[1];
// result4 = d[2];

// console.log(result1);
// console.log(result2);
// console.log(result3);
// console.log(result4);

// var result = [];
// var b = []

// for(i=0;i<200;i++){
//     if(i%8==0){
//        b.push(i)
       
//     }
// }
// for (var i= 0;i<b.length;i++){      
//          c = b[i]%10;
//          d =Math.floor(b[i]/10);
         
//          if(d < c){
//              result.push(b[i])
//          }
//          if(b[i] > 100){
//             e = b[i] - 100
//             f = e%10;
//             d =Math.floor(e/10);
//             if(d<f){
//               result.push(b[i]);
//             }   
//          }

// }
// console.log(result)


// var a =['rahul','muthu','kumar','gri'];

// for(let i = 0;i <a.length;i++){
//     let b = a[i];
//     let c = b.split('')
    
//     let result =[]
//     for(j = 0; j < c.length;j++){
//         if(c[j]=='a'|| c[j]=='e'||c[j]=='i'||c[j]=='o'||c[j]=='u'){
//             result.push(c[j]);
//         }
//     }
//     if(result.length == 2){
//         console.log(a[i]);
//     }
// }


// var a = [12,34,21,57,33];
// var b = [133,754,9875];
// let c = a.concat(b);
// var d = c.sort((x,y)=>{
//     console.log(x);
//     console.log(y);
//     return x-y
// })
// console.log(d);

// var a = 'muthukumar';
// for(i = 0;i < a.length;i++){
//     var d = 0;
//     for(j = 0;j < a.length;j++){
//         if(a[i]==a[j]){
//           d++
//         }
//     }
//     if(d == 1){
//         console.log(a[i])
//     }
// }

// var num = prompt('Enter Number');
// var b = 0;
// for(i = 0;i<num.length;i++){
// if(num[i]%2==1){
//     b += parseInt(num[i])
// }
// }
// console.log(b);

// var num = prompt('Enter Number');
// var b = 0;
// for(i = 0;i <num.length;i++){
//     if(num[i]> 0 || num < 9){
//         if(num[i]%2==1){
//                  b += parseInt(num[i])
//             }
//     }
// }

// var a = [4,5,6,7,9];
// // o/p [4,9,15,22,31]
// var result =[]

// var n = 0;
// for(i = 0;i<a.length;i++){
//    n += a[i]
//    result.push(n)
// }

// console.log(result);


