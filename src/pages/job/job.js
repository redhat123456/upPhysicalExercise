// pages/job/job.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  //获取经纬度
  getLocation: function (e) {
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
         console.log(res);
        var latitude = res.latitude
        var longitude = res.longitude
        //弹框
        wx.showModal({
          title: '当前位置',
          content: "纬度:" + latitude + ",经度:" + longitude,
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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