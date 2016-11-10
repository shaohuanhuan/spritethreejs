// require('babel-register');
// require('babel-polyfill');
// require('./css/style.css');
import './css/style.css';
//require('!style!css!./css/style.css');
var cats = require('./cats');
// var webpack = require('webpack');
// var $ = require('jquery');
//  import 'babel-polyfill';没下载babel-register
//  import cats from './cats';
//  import $ from 'jquery';

//1
/*$('<h1>CAT</h1>').appendTo('body');
 const ul = $('<ul></ul>').appendTo('body');
 for (const cat of cats) {
     $('<li></li>').text(cat).appendTo(ul);
 }*/
 
 //2
 /*{
  let a = 10;
  var b = 1;
}
console.log(b)//a undefined
*/

//3
/*var s = 'hello';
for (var i = 0; i < s.length; i++) {
  console.log(s[i]);
}
console.log(i); // 内存泄露 5
*/

//4
/*var tmp = 123;

if (true) {
  tmp = 'abc'; // ReferenceError
  let tmp;
}*/

//5
/*if (true) {
  // TDZ开始
  tmp = 'abc'; // ReferenceError
  console.log(tmp); // ReferenceError 其实用babel转化，他会转成对的形式就不报错了

  let tmp; // TDZ结束
  console.log(tmp); // undefined

  tmp = 123;
  console.log(tmp); // 123
}*/
//6
/*{ let num = 2;var num = 2;}*/

//7
console.log('\z' === 'z')  // true
// console.log('\172' === 'z' )// true
console.log('\x7A' === 'z' )// true
console.log('\u007A' === 'z' )// true
console.log('\u{7A}' === 'z' )// true