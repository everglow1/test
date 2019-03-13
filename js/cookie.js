// 设置cookie
function setCookie(name, value, day) {
  let d = new Date();
  d.setTime(d.getTime() + (day) * 24 * 60 * 60 * 1000)
  let expires = "expires=" + d.toGMTString()
  document.cookie = name + ' = ' + value + ';' + expires
  log(d.setTime())
}
setCookie()

// 获取cookie
function getCookie(cname) {
  let name = cname + '=';
  let ca = document.cookie.split('=');
  for(let i = 0; i < ca.length; i++) {
    let c = ca.trim();
    if(c.indexOf(name) == 0) {
      return c.slice(name.length, c.length)
    }
  }
  return ''
}