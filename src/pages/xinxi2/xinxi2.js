// pages/xinxi2/xinxi2.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['男', '女' ],
    index: 0,
    date: '2000-02-05',

  },
  go_to: function() {
    var mytime=Number(myDate.getFullYear());
    console.log(mytime);
    var nian=(this.data.date).substring(0,4);
    console.log(nian.substring(0,4));
    var nian2 = mytime - nian;
    console.log(nian2);
    var tizhi = (0.23 * (nian2)) -5.4 -(10.8* (this.data.index) );
    console.log(tizhi);
    wx.request({
      url: 'app.globalData.myurl/user/updateUser',
      data: {
        birthday: this.data.date +' 00:00:00',
        openid :  wx.getStorageSync("openid"),
        sex: this.data.index,
      },
      method:"POST",
      success:function(res){
        console.log(res);
      }
    })
    wx.navigateTo({
      url: '../xinxi3/xinxi3?tizhi='+tizhi
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  bindDateChange: function(e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindPickerChange: function(e){
this.setData({
      index: e.detail.value
    })
  },
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