'use strict'

const regs = {
  mobile: /^1[3-9]\d{9}$/,
  email: /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/,
  number: /^\d+$/,
  cnChar: /[\u4e00-\u9fa5]/gm,
  zipcode: /^[1-9]\d{5}(?!\d)$/,
  id: /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/
}
/**
 * 验证方法类
 */
const check = {
  isEmail: function (email) {
    return regs.email.test(email);
  },
  isMobile: function (mobile) {
    return regs.mobile.test(mobile);
  },
  isNumber: function (number) {
    return regs.number.test(number);
  },
  isCnChar: function (char) {
    return regs.cnChar.test(char);
  },
  isZipCode: function (code) {
    return regs.zipcode.test(code);
  },
  isIdentity: function (id) {
    return regs.id.test(id);
  }
}

/**
 * 手机浏览器判断
 */
const browserInfo = {
  isAndroid: Boolean(navigator.userAgent.match(/android/ig)),
  isIphone: Boolean(navigator.userAgent.match(/iphone|ipod/ig)),
  isIpad: Boolean(navigator.userAgent.match(/ipad/ig)),
  isWeixin: Boolean(navigator.userAgent.match(/MicroMessenger/ig)),
  isAli: Boolean(navigator.userAgent.match(/AlipayClient/ig)),
  isPhone: Boolean(/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent))
}

/**
 * @desc 数据类型检测
 * @param obj 待检测的数据
 * @return {String} 类型字符串
 */
function type(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
}

/**
 * 获取url参数值
 * @param {String} item
 */
function queryString(item) {
  var svalue = location.search.match(new RegExp("[\?\&]" + item + "=([^\&]*)(\&?)", "i"));
  return svalue ? svalue[1] : svalue;
}

/**
 * 日期格式化
 * @param {Date, String, Number} newDate
 * @param {String} fmt
 */
function formatDate (oldDate, fmt) {
  let date = new Date()
  if (typeof oldDate === 'string' || typeof oldDate === 'number') {
    date = new Date(+oldDate)
  } else {
    date = oldDate
  }
if (/(y+)/.test(fmt)) {
  fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))  }
  let o = {
  'M+': date.getMonth() + 1,
  'd+': date.getDate(),
  'h+': date.getHours(),
  'm+': date.getMinutes(),
  's+': date.getSeconds()  }
  function padLeftZero (str) {
    return ('00' + str).substr(str.length)
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
    }
  }
  return fmt
}

export { check, browserInfo, type, queryString, formatDate }