/**
 * 1. 闭包简单写法
 */
// function bibao() {
//   let a = 9
//   function int() {
//     console.log(a)
//   }
//   return int
// }
// console.log(bibao.int())

/**
 * 2. ajax请求
 */
// 1.创建xhr对象
// let xhr = null
// xhr = new XMLHttpRequest()
// // 2. 连接服务器
// xhr.open('get', url, true)
// // 3. 发送请求
// xhr.send(null)
// // 4. 接受请求
// xhr.onreadystatechange = function() {
//   if(xhr.readyState == 4) {
//     if(xhr.statsu == 200) {
//       success(xhr.responseText)
//     } else {
//       fail && fail(xhr.status)
//     }
//   }
// }

/**
 * 3. 模块化开发，立即执行函数
 */
// var module1 = (function(){
// 　　　　var _count = 0;
// 　　　　var m1 = function(){
// 　　　　　　console.log(11)
// 　　　　};
// 　　　　var m2 = function(){
// 　　　　　　console.log(2222)
// 　　　　};
// 　　　　return {
// 　　　　　　m1 : m1,
// 　　　　　　m2 : m2
// 　　　　};
// 　　})();

// console.log(module1.m1())

/**
 * 4. this到底指向哪里？
 */
// 1. 全局环境下指向全局对象window，无论严格模式。

// 函数上下文调用
// 非严格模式下指向全局 , 严格模式下指向undefined
// function f1() {
//   return this
// }
// console.log(f1()) // 指向全局

// 对象中的this
// let a = 11
// let obj = {
//   a: 1,
//   b: function() {
//     console.log('b', this.a)   // 普通函数的this，指向函数运行时所在的对象。
//     let fn =  () => {
//       console.log('fn', this.a) // 箭头函数fn的this，指向fn所在环境的this。 fn所在环境为 b， b的this指向obj
//     }
//     fn()
//   },
//   c: () => {
//     console.log('c', this.a)   // 箭头函数c的this，指向c所在环境的this，c所在环境为obj， obj的this为window
//   }
// }
// obj.c()

// function test() {
//   setTimeout(() => {
//     console.log('settimout')
//   }, 0);
// }
// console.log(1)
// test()
// new Promise((resolve, reject) => {
//   console.log('promise1')
//   resolve()
//   console.log('promise2')
// }).then(() => {
//   console.log('then')
// })
// console.log(2)
// 1 promise1 promise2 2 then settimout

// async function async1(){
//   console.log('async1start')
//   await async2()
//   console.log('async1end')
// }
// async function async2(){
//   console.log('async2')
// }
// console.log('scriptstart')
// setTimeout(function(){
//   console.log('setTimeout')
// },0)
// async1();
// new Promise(function(resolve){
//   console.log('promise1')
//   resolve();
//   console.log('promise3')
// }).then(function(){
//   console.log('promise2')
// })
// console.log('scriptend')

// // scriptstart  async1start  async2  promise1  scriptend  promise2  async1end  setTimeout

// console.log(String(undefined))

/**
 * 1. 数组去重复
 */
// let a = [1, 1, 2, 2, 'c', 'c', undefined, undefined]
// 1.利用Set数据结构
// function arr(arr) {
//   return [...new Set(arr)]
// }
// 2.利用indexOf查找数组元素是否存在，不存在为 -1
// function arr(arr) {
//   let newArr = []
//   for(let i = 0; i < arr.length; i++) {
//     if(newArr.indexOf(arr[i]) === -1) {  
//       newArr.push(arr[i])
//     }
//   }
//   return newArr
// }
// 3.利用对象的key值,对象的key是唯一的。
// function arr(arr) {
//   let obj = {}
//   let newArr = []
//   for(let i = 0; i < arr.length; i++) {
//     if(!obj[arr[i]]) {
//       obj[arr[i]] = 1;
//       newArr.push(arr[i])
//     }
//   }
//   return newArr
// }
// console.log(arr(a))


/**
 * 2. 判断一个单词是否回文
 */
// let s = 'he'
// function reserve(str) {
//   return str === str.split('').reverse().join('')
// }
// console.log(reserve(s))

/**
 * 3. 统计一个字符串中出现次数最多的字母
 */
// let str = 'dasfhasihfjdosaaa'
// function maxValue(str) {
//   let obj = {};
//   if(str.length === 1) {
//     return str
//   }
//   // 使用对象排列出所有字符出现的次数
//   for(let i = 0; i < str.length; i++) {
//     if(!obj[str[i]]) {
//       obj[str[i]] = 1
//     } else {
//       obj[str[i]]++
//     }
//   }
//   let maxVal = '' // 默认最大的值的key
//   let max = 1     // 默认最大的值为1
//   for(let key in obj) {
//     if(obj[key] > max) {
//       maxVal = key      // 把最大值替换为当前key。
//       max = obj[key]    // 最大的值为当前key值的value值。
//     }
//   }
//   return maxVal
// }
// console.log(maxValue(str))

/**
 * 4. 冒泡排序
 */
// let arr = [1, 3, 7, 5, 3, 4, 9, 20, 10]
// function bubbleSort(arr) {
//   for(let i = 0; i < arr.length; i++) {
//     for(let j = i+1; j < arr.length; j++) {
//       if(arr[i] > arr[j]) {
//         let tem = arr[i]
//         arr[i] = arr[j]
//         arr[j] = tem
//       }
//     }
//   }
//   return arr
// }
// console.log(bubbleSort(arr))
// console.log(arr.sort((a, b) => {
//   return a > b
// }))

/**
 * 5. 斐波那契数列
 */
// function Fibonaci(val) {
//   if(val === 1 || val === 2) {
//     return 1
//   }
//   return Fibonaci(val-1) + Fibonaci(val-2)
// }
// console.log(Fibonaci(40))

/**
 * 6. 不使用中间参数交换两个值的位置
 */
// function swap(a, b) {  2, 4
//   // b = b - a  
//   // a = a + b  
//   // b = a - b 
//   // return [a, b]
//   a = a + b
//   b = a - b
//   a = a - b
//   return [a , b]
// }

// console.log(swap(-1, 4))

/**
 * 7. 找出数组最大差值
 */
// let arr = [1, 4, 10, 20, 9, 5]
// function getMaxValue(arr) {
//   let minValue = arr[0];    // 定义最小值为数组第一个元素
//   let maxProfit = 0;        // 定义最大差值为0
//   for(let i = 0; i < arr.length; i++) {
//     let current = arr[i]
//     minValue = Math.min(current, minValue)   // 找最小的值
//     let Profit = current - minValue          // 差值
//     maxProfit = Math.max(Profit, maxProfit)  // 找最大差值
//   }
//   return maxProfit
// }
// console.log(getMaxValue(arr))

/**
 * 8. 随机生成指定长度的字符串
 */

// function randomString(num) {
//   let str = 'abcdefghijklmnopqrstuvwxyz0123456789'   // 随机数
//   let temp = ''   // 需要拼成的字符串
//   for(let i = 0; i < num; i++) {
//     temp = temp + str[Math.floor(Math.random() * str.length)]
//   }
//   return temp
// }
// console.log(randomString(8))


/**
 * 9. 解析url，返回一个对象。
 */

let url = 'https://www.baidu.com/s?wd=Math.random()&rsv_spt=1&rsv_iqid=0xfd7c0ee400048d09&issp=1#list.html'
function parseUrl(url) {
  let newArr = url.split('?')[1].split('#')[0].split('&')
  let obj = {}
  for(let i = 0; i < newArr.length; i++) {
    let key = newArr[i].split('=')[0]
    let value = newArr[i].split('=')[1]
    if(!obj[key]) {
      obj[key] = value
    }
  }
  return obj
}
console.log(parseUrl(url))

/**
 * 10. rgb转16进制度
 */
// let rgb = 'rgb(13,0,255)'
// function colorRGB2Hex(color) {
//   var rgb = color.split(',');
//   var r = parseInt(rgb[0].split('(')[1]);
//   var g = parseInt(rgb[1]);
//   var b = parseInt(rgb[2].split(')')[0]);

//   console.log(r)
//   console.log(g)
//   console.log(b)
//   var hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//   console.log((1 << 24))
//   return hex;
// }
// console.log(colorRGB2Hex(rgb))
// function showRGB(str){
//   var hexcode="#";
//   var v = str.substring(4,str.length-1);
//   var s = v.split(",");
//   // console.log(s)
//   for(var x = 0; x < 3; x++){
//     var n = s[x];
//     // console.log(n)
//     if(n === "") {
//       n = "0"
//     }
//     var c = "0123456789ABCDEF",
//         b = "",
//         a = n % 16;
//     console.log('a', a)
//     b = c.substr(a, 1);
//     a = (n - a) / 16;
//     console.log('a1', a)
//     hexcode = hexcode + c.substr(a,1) + b
//   }
//   return hexcode;
// }
// console.log(showRGB('rgb(13,0,255)'))
/**
 * 11. 找出数组中最大的值
 */
// let arr = [1, 2, 9, 100, 7]
// function arrMax(arr) {
//   let max = 0;
//   for(let i = 0; i < arr.length; i++) {
//     for(j = i + 1; j < arr.length; j++) {
//       if(arr[i] > arr[j]) {
//         let tem = arr[i]
//         arr[i] = arr[j]
//         arr[j] = tem
//       }
//     }
//   }
//   return arr[arr.length - 1]
// }
// console.log(arrMax(arr))
/**
 * 12. 将 font-szie 转换为fontSize
 */
// let val = '-weikit-font-szie'
// function transform(val) {
//   let newArr = val.split('')
//   if(newArr[0] == '-') {
//     newArr.shift()
//   }
//   for(let i = 0; i < newArr.length; i++) {
//     if(newArr[i] == '-') {
//       let upper = newArr[i + 1].toUpperCase()
//       newArr.splice(i, 2, upper)
//     }
//   }
//   return newArr.join('')
// }
// console.log(transform(val))

/**
 * 13. 找出数组中重复的值
 */
// let arr = [1, 2, 3, 4, 4, 9, 10, 1, 3, 3]
// function find(val) {
//   let obj = {}
//   let arr = []
//   for(let i = 0; i < val.length; i++) {
//     if(!obj[val[i]]) {
//       obj[val[i]] = 1
//     } else {
//       arr.push(val[i])
//     }
//   }
//   return [...new Set(arr)]
// }
// console.log(find(arr))

/**
 *  14. 利用快速排序将数组[6,3,9,12,1]从小到大排序
 */
// function quickSort(arr) {
//   if(arr.length<=1){
//     return arr;
//   }
//   var pivotIndex=Math.floor(arr.length/2);
//   var pivot=arr.splice(pivotIndex,1)[0]
//   var left=[];
//   var right=[];
//   for(var i=0;i<arr.length;i++){
//     if(arr[i]<pivot){
//       left.push(arr[i])
//     }else {
//       right.push(arr[i]);
//     }
//   }
//   return quickSort(left).concat([pivot], quickSort(right));
// }
// let arr=[6,3,9,12,1]
// console.log(quickSort(arr))

/**
 * 14. json转换
 */
// var obj = [
//   {id:1, parent: null},
//   {id:2, parent: 1},
//   {id:3, parent: 2},
//   {id:4, parent: 3}
// ];
// var obj2 = {
//   obj: {
//     id: 1,
//     parent: null,
//     child: {
//       id: 2,
//       parent: 1,
//       child: {
//         id: 3,
//         parent: 2
//       }
//     }
//   }
// }
// var obj2 = {};
// function createObj2(obj, child){
//   if(child.parent){
//     if(obj.obj){
//       createObj2(obj.obj, child);
//     } else {
//       if(obj.id === child.parent){
//         obj.child = {
//           id: child.id,
//           parent: child.parent,
//         }
//       } else {
//         if(obj.child){
//           createObj2(obj.child, child);
//         }else{
//           console.log('obj2未匹配到对应的parent对应关系')
//         }
//       }
//     }
//   } else {
//       obj.obj = {
//         id: child.id,
//         parent: child.parent,
//         child: {}
//       }
//   }
// }
// obj.forEach((item, item_i) => {
//     createObj2(obj2, item)
// })
// console.log('obj2:', obj2)

/**
 * 15. 编写一个输出日志的函数log，在输出内容前面加上前缀(app)
 */
// log(“Hello world”)返回“(app)Hello world”
// log(“Hello”,”world”)返回”(app)Hello world”
// function log(){
//   let arg = arguments
  
//     var args = Array.prototype.slice.call(arguments).map((arg) => {
//       return arg
//     });
//     var t=args.toString().replace(',',' ')
//     console.log('(app)'+t)
// }
// log( 'hello','word');