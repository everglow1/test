// let string = 'abc'
// console.log(string.charAt(string.length - 1))


// console.log('a'.charCodeAt())
// for(let i = 0; i < 5; i++) {
//   console.log(i)
//   setTimeout(() => {
//     console.log(i)
//   }, 5000);
//   console.log(i)
// }


// 判断对象空对象和数组空数组
// function empty(val) {
//   let emptyArr = Array.prototype.isPrototypeOf(val) && val.length == 0
//   let emptyObj = Object.prototype.isPrototypeOf(val) && Object.keys(val).length == 0;
//   if(!val) {
//     return '空值'
//   }
//   if(!val && val !== 0 && val !== '') {
//     return '不是空值'
//   }
//   if(emptyArr) {
//     return '空数组'
//   }
//   if(emptyObj) {
//     return '空对象'
//   }
// }
// let a = 1
// console.log(empty(a))


// function canshu(val) {
//   console.log(arguments.length)  // 实参的个数（传入的参数个数）
//   console.log(canshu.length)  // 形参的个数（定义时参数的个数）
// }
// canshu(1, 2)

// 深拷贝。拷贝的是值，不是引用。
// let a = 1
// let b = a
// a = 2
// console.log(b)
// slice和concat不是真正的深拷贝，它们只拷贝了一层。
// let a = [1, 2, 3, 4, 5, [6, 7]]
// let b = a.slice()
// a[5][0] = 'a'
// console.log(b)   // [ 1, 2, 3, 4, 5, [ 'a', 7 ] ]   只能拷贝第一层的属性。
// // 深拷贝， 1.递归  2. json.stringify()和json.parse()
// function deepClone(val) {
//   let obj = JSON.parse(JSON.stringify(val))
//   return obj
// }
// let c = deepClone(a)
// a[5][1] = 'b'
// console.log(a,c)
// 简单的递归复制
// function clone(val) {
//   let obj = Array.isArray(val) ? []:{}
//   if(val && typeof val == 'object') {
//     for(let key in val) {
//       if(val[key] && typeof val[key] == 'object') {
//         obj[key] = clone(val[key])
//       } else {
//         obj[key] = val[key]
//       }
//     }
//   }
//   return obj
// }
// let b = clone(a)
// a[5][0] = 'z'
// console.log(b)


// let a = [1, 2,3,4]
// console.log(typeof a)
// console.log(Array.isArray(a))
// console.log(a.toString())  // '1,2,3,4'
// Array.prototype.slice.call({0: 'a'})

// reduce  依次处理数组的每个成员。最终累计为一个值。从左到右处理。
// let a = ['a', 'b', 'c', 1].reduce(function(a,b) {
//   return a + b
// }, 10)
// console.log(a)


// let a = {a: 1}
// let b = a
// console.log(a == b)  // true
// console.log({a: 2} == {a: 2}) // false


// filter主要用来过滤,返回数组中达到某个条件的值
// let a =[1, 2, 3, 4, 5].filter((ele) => {
//   return ele > 2
// }) // 3 4 5
// map 主要用来返回值
// let obj = {}
// let a =[1, 2, 3, 4, 5].map((ele, index, arr) => {
//   let obj = {
//     [index]: ele
//   }
//   return {
//     [index]: ele,
//     'a': ele > 2 ? ele: 0
//   }
// }) // false false true true true
// console.log(a)
// forEach // 主要用来操作数据

// var a = 1
// function test() {
//   console.log(a)
// }
// test()

// 通过cookie名获取cookie值
let cookie ="koo=ggg; _ga=GA1.2.1771730554.1542192123; Hm_lvt_3eec0b7da6548cf07db3bc477ea905ee=1550567006,1550916816,1552228356,1552403518; _gid=GA1.2.669800284.1552403519; username=kkk; Hm_lpvt_3eec0b7da6548cf07db3bc477ea905ee=1552445438"
function getCookie(cname) {
  let obj = {}
  // let cookie ="koo=value;_ga=GA1.2.1771730554.1542192123;Hm_lvt_3eec0b7da6548cf07db3bc477ea905ee=1550567006,1550916816,1552228356,1552403518;_gid=GA1.2.669800284.1552403519;username=kkk;Hm_lpvt_3eec0b7da6548cf07db3bc477ea905ee=1552445438"
  let valueArr = cookie.split(';')
  for(let i = 0; i < valueArr.length; i++) {
    let key = valueArr[i].split('=')[0].trim()
    let value = valueArr[i].split('=')[1]
    if(!obj[key]) {
      obj[key] = value
    }
  }
  return obj[cname] ? obj[cname] : '无'
}
console.log(getCookie('_ga'))