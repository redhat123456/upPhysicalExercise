import requestUrl from './utils/util.js'
App({
  onLaunch(){
  wx.cloud.init({
    env:'cloud1-8god1rx99e8944ad'
  })
  },
  globalData: {
   myurl:'https://project.yww52.com:8080',
   appid:'wxcaacca0d3a348cba',
   secret:'199327233210134259354ad11bd6b2fd'
  },
})