// pages/jihua21/jihua21.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    jvid:'',
   

  },

  delete : function(e){

    wx.showToast({
      title: '删除成功',
      icon: 'success',
      duration: 2000 ,
      success: function () {
        setTimeout(function () {
        wx.reLaunch({
        url: '/pages/jihua/jihua',
          })
        }, 1000);
       }
    })

  },
  star:function(  ){

   if(this.data.jvid=='jv0'){
   
      wx.navigateTo({
        
        url: '/pages/paobu/paobu',
      })
      
    }
    else{
      wx.navigateTo({
        url: '/pages/vedio/vedio?vid=this.data.jv',
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      jvid:options.jv

    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})