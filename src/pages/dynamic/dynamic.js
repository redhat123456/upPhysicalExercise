// pages/dynamic/dynamic.js
Page({
  data: {
    userinfo:{},
    yid:'0'

  },
  onLoad: function (options) {
    this.setData({
     yid:options.yid 
    })
    if(this.data.yid==0){
      wx.showModal({
        title:'up小提示',
        content: '请填写您的个人信息',
        success: function(res){
          if(res.confirm)(
            console.log('用户点击确定')
          )
        }
      })


    }
    else{

    }
  },
  onShow(){
    const userinfo=wx.getStorageSync("userinfo");
    this.setData({userinfo})
  }
})