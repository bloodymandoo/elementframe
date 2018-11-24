export default {
  name: 'Fullscreen',
  isFullscreenEnabled () {
    return document.fullscreenEnabled ||
           document.mozFullScreenEnabled ||
           document.webkitFullscreenEnabled ||
           document.msFullscreenEnabled || false
  },
  isFullScreen () {
    if (document.body.scrollHeight === window.screen.height && document.body.scrollWidth === window.screen.width) {
      return true
    } else {
      return false
    }
  },
  requestOrExitFullScreen (id) {
    var element = document.getElementById(id)
    if (!this.isFullScreen()) {
      var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen
      requestMethod.call(element)
    } else {
      if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen()
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      } else if (document.cancelFullScreen) {
        document.cancelFullScreen()
      } else if (document.exitFullscreen) {
        document.exitFullscreen()
      } else {
      // 浏览器不支持全屏API或已被禁用
      }
    }
  }
}
