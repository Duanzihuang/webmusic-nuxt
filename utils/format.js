import Vue from 'vue'
import moment from 'moment'
// 全局过滤器
Vue.filter('formatDuration', dt => {
  // 转分
  let min = Math.ceil(dt / 1000 / 60)
  min = min < 10 ? '0' + min : min
  // 秒
  let sec = Math.ceil((dt / 1000) % 60)
  sec = sec < 10 ? '0' + sec : sec
  return min + ':' + sec
})
Vue.filter('formatTime', time => {
  return moment(time).format('YYYY-MM-DD hh:mm:ss')
})
Vue.filter('formatCount', count => {
  if (count / 10000 > 10) {
    return parseInt(count / 10000) + '万'
  } else {
    return count
  }
})
