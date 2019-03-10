1. jquery和vue的本质区别，vue的最大特点，怎么实现数据驱动，怎么实现双向绑定，用v-bind举例。

juqery本质上只是更方便的选取和操作dom对象。数据和视图还是在一起的。
vue通过vue对象将数据和视图分离开来了，对数据进行操作不再需要引用相应的DOM对象。

2. vue怎么实现数据驱动：
  数据驱动就是： 当数据发生变化的时候，用户界面发生相应的变化，开发者不需要手动的去修改dom。
  Vuejs的数据驱动是通过MVVM这种框架来实现的
  model：指的是数据模型，对应到前端就是js对象
  view： 指的是视图部分，对应前端就是dom
  viewModel： 指的就是链接数据和视图的中间件。

  数据和视图是不能直接通讯的，它们通过viewModel来实现双方的通讯。 1.当数据变化的时候，viewmodel能监听到这种变化，
  并及时的通知view做出修改。 2.当页面有事件触发时，viewModel也能监听到事件，并通知model进行响应。
  viewmodel就相当于一个观察者，监控着view和model的动作，并及时通知对方做出改变。

  - vuejs是通过实现一个观察者来实现的数据驱动。
    1. vue在实例化的过程中，会遍历vue对象的data， 使用Object.defineProperty()修改属性的getter和seeter。
    2. 同时，每个实例对象都有一个watcher对象， watcher在模板编译的过程中，用getter去访问data的属性，watcher会把此时用到的属性标记为依赖，建立视图和数据之间的联系， 当渲染视图的数据发生改变时，（即setter被调用）， 会通知watcher重新计算，更新视图。


3. vuejs怎么实现数据双向绑定
  * vuejs是采用数据劫持和发布订阅者模式来实现数据双向绑定的。通过Object.defineProperty()来劫持data各个属性的getter/setter，在数据变动的时候发布消息给订阅者，触发相应的监听回调。
    - 实现一个数据监听器Observer，能够对数据对象的所有属性进行监听，如有变动可拿到最新值并通知订阅者 
    - 实现一个指令解析器Compile，对每个元素节点的指令进行扫描和解析，根据指令模板替换数据，以及绑定相应的更新函数 
    - 实现一个Watcher，作为连接Observer和Compile的桥梁，能够订阅并收到每个属性变动的通知，执行指令绑定的相应回调函数，从而更新视图
    - 最重要的是通过Object.defineProperty()实现对属性的劫持。
  

头条一面：
    1. 自适应布局， 左边input框自适应      右边 button固定150px 多种写法。
    2. 盒子模型。
    3. padding百分比以什么为标准。margin呢？ 
      padding 和 margin 的无论上下左右 值 都是基于父元素的宽度 
    4. 写一个函数 function repeat(func, times, wait){} 返回一个函数， 每隔3秒输出一个 hellWorld。
    5. let var 有什么区别， 那const呢
    6. 箭头函数和普通的函数有什么区别
    7. pormise的错误可以用try catch获取吗。 不能
    8. const obj = {
          m() { console.log(this) },
          n: () => { console.log(this) }
        }
        obj.m() // ?   obj
        obj.n() // ?   window
    9. vue怎么实现响应式
