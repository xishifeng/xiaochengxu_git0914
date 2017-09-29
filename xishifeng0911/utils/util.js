const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const ServerHostDev = 'https://dev.fujuhaofang.com';
const ServerHostWeb = 'https://web.fujuhaofang.com';
const ServerHostAdmin = 'https://admin.fujuhaofang.com';
const preUrlPath = '/mobile4.0/js/gulp_temp/';

module.exports = {
  formatTime: formatTime,
  formatNumber: formatNumber,
  ServerHostDev: ServerHostDev,
  ServerHostWeb: ServerHostWeb,
  ServerHostAdmin: ServerHostAdmin,
  preUrlPath: preUrlPath
}
