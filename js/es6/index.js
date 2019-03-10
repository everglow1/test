// let 
// 1. 不存在变量提升 2.只要块级作用域内存在let命令  let 就绑定这个区域。在变量声明之前，存在暂时性死区。 3.不能重复声明
// const  
// 1.常量的值就不能改变，引用类型的值可以改变。其它与let一样。只是变量指向的那个内存地址所保存的数据不得改动

// 顶层对象的属性与全局变量挂钩，被认为是 JavaScript 语言最大的设计败笔之一。

// 箭头函数注意点
// 1. 不能使用new关键字
// 2. 函数体内的this对象就是定义时所在的对象，而不是使用时所在的对象。
// 3. 不可以使用arguments对象。改对象在箭头函数内不存在。
// 4. 不能使用yield命令，因此箭头函数不能用作 Generator 函数。

// Generator函数是es6提供的一种异步编程的解决方案

// promise
// 3中状态， 未完成， 已成功， 已失败
// 只有异步操作的结果可以决定pormise的状态，状态一旦改变就无法再变，再任何时候都可以获取到这个状态。
// promise的参数是一个函数，该函数接受两个参数（也是函数）。 resolve函数的作用是把promise的状态变为成功，reject是把promise变为失败。
// promise实例生成之后，使用then方法分别指定resolve和reiect的回调函数。
// promise新建后会立即执行 .then为异步任务。再同步任务之后执行
// then方法返回的是一个新的Promise实例

// 执行顺序
// resolved 的 Promise 是在本轮事件循环的末尾执行，总是晚于本轮循环的同步任务。
// setTimeout(() => {
//   console.log(111)
// }, 0);  // 4
// let promise = new Promise((res, rej) => {
//   console.log(222)  // 1
//   rej()
// })
// promise.then((res) => {
//   console.log(333)
// }, (err) => {   // 3
//   console.log(55)
// })
// console.log(444)  // 2

// .catch  .then(null, rejection)或.then(undefined, rejection)的别名，用于指定发生错误时的回调函数。
// then方法指定的回调函数，如果运行中抛出错误，也会被catch方法捕获。 建议总是使用 .catch的方法， 更接近同步的写法。
// Promise.resolve将现有对象转换成promise对象

// Generator 函数是 ES6 提供的一种异步编程解决方案

// async 函数是什么？一句话，它就是 Generator 函数的语法糖。也是一步操作的解决方案


// async的执行顺序
// async function async1() {
//   console.log('2');  // 2
//   await async2();
//   console.log('7');  // 7
// }

// async function async2() {
//   console.log('3');     // 3
// }

// console.log('1');  // 1

// setTimeout(function() {
//   console.log('8');  // 8
// }, 0);

// async1();

// new Promise(function(resolve) {
//   console.log('4');   // 4
//   resolve();
// }).then(function() {
//   console.log('6');   // 6
// });

// console.log('5');  // 5

// Generator函数， 一步操作的解决方案
// function* helloGenerator() {
//   // 该函数有三个状态 ： hello，world 和 return 语句
//   yield 1 + 2
//   return 'ending'
// }
// // next方法,调用 Generator 函数后，该函数并不执行
// // 返回的也不是函数运行结果，而是一个指向内部状态的指针对象
// // next方法，使得指针移向下一个状态
// let hx = helloGenerator()
// console.log(hx)
// console.log(hx.next())
// console.log(hx.next())
// console.log(hx.next())
// console.log(hx.next())

// next方法返回一个对象，它的value属性就是当前yield表达式的值hello，done属性的值false，表示遍历还没有结束。

// async  await 一步操作的解决方案, Generator的语法糖。
// 返回值是 Promise。
// async函数完全可以看作多个异步操作，包装成的一个 Promise 对象，而await命令就是内部then命令的语法糖。

// async function getValue(name) {
//   console.log('async')
// }
// // getValue('goo').then(function(result) {
// //   console.log(result)
// // })
// getValue()
// console.log('out')
// setTimeout(() => {
//   console.log('int')
// }, 0);
