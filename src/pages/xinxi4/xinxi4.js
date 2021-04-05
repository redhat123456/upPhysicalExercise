// pages/xinxi4/xinxi4.js
Page({

  /**
   * 页面的初始数据
   */
 
  data: { 
   
    BMI:'',
    
    hua: [
      { id:0,
        neirong:'你的身材很标准，加油加油，保持住！'},
      { id:1,
        neirong:'你的身材有些偏胖，还需要再努力一下！'},
      { id:2,
        neirong:'你的身材有点胖，希望在接下来的日子努力加油！'},
      { id:3,
        neirong:'你的身材有些不好，需要努力保持健康！！'}

    ],
     tizhi:""
  },

  go_to2: function() {
    wx.switchTab({
      url: '../dynamic/dynamic'
    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function (options) {

    console.log(options);
 
    let list = JSON.parse(options.BMI)
        this.setData({
       BMI:list,
       tizhi:options.tizhi,}); 
   
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