let xhr = new XMLHttpRequest()
if(window.XMLHttpRequest) {
  xml = new XMLHttpRequest()
} else {
  xml = new ActiveXObject("Microsoft.XMLHTTP")
}
// XMLHttpRequest open() 和 send() 方法
// open(method,url,async)   method:发送请求的类型，get或者post  url：文件在服务器上的位置  async：true(异步)false(同步)
// send(string)         string：仅仅用于post请求
xml.open('GET', './try/ajax/demo.php?t=' +  Math.random(), true)  // 加一个id防止缓存
xml.send()

xml.open('post', '/try/ajax/demo_post.php', true)
xml.send()

// setRequestHeader(header, value)  向请求添加 HTTP 头。
// header: 规定头的名称  value：规定头的值
xml.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
xml.send('fname=Henry&lname=Ford')

// onreadystatechange 当使用 async=true 时，请规定在响应处于 onreadystatechange 事件中的就绪状态时执行的函数
xml.onreadystatechange = function () {
  if(xml.readyState == 4 && xml.status == 200) {
    document.getElementById("myDiv").innerHTML = xml.responseText
  }
}
xml.open('GET', "test1.txt", false)
xml.send()

// 使用 async=false 时，请不要编写 onreadystatechange 函数 - 把代码放到 send() 语句后面即可
xml.open('GET', '/try/ajax/ajax_info.txt', false)
xml.send()
document.getElementById("myDiv").innerHTML=xmlhttp.responseText

// 如需获得来自服务器的响应，请使用 XMLHttpRequest 对象的 responseText 或 responseXML 属性。
// responseText      获得字符串形式的响应数据。
// responseXML       获得 XML 形式的响应数据。
document.getElementById("myDiv").innerHTML=xmlhttp.responseText;

// readyState 属性存有 XMLHttpRequest 的状态信息。每当 readyState 属性改变时，就会调用onreadystatechange
// 0: 请求未初始化 1: 服务器连接已建立  2: 请求已接收  3: 请求处理中  4: 请求已完成，且响应已就绪
// status   200: "OK"  404: 未找到页面
xml.onreadystatechange=function()
{
    if (xml.readyState == 4 && xml.status==200)
    {
        document.getElementById("myDiv").innerHTML=xml.responseText;
    }
}
