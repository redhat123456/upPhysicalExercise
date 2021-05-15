// pages/suju_yundong/suju_yundong.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    yundong:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  get_run:function(){
    var that=this;
  wx.request({
    url:getApp().globalData.myurl +'/run/getDataList/'+ wx.getStorageSync("openid"),
    data:{},
    method:"GET",
    success:function(res){
      console.log(res);
      var list=res.data.data.list;
      console.log(list);
      that.setData({
        yundong:list
      })
    }
  })
  },

  
  onLoad: function (options) {
  this.get_run();
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