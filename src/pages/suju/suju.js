// pages/suju/suju.js
var app = getApp()
Page({

  shengao:'',
  tizhong:'',

  data: {
    sv:'01',

    jihuaList:[
      {
        id:'01',
        riqi:'2021-03-04',
        tizhong:'62',
        shengao:'183',
        BMI:'18.65',
        tizhi:'17.45',
  
      },
      {
        id:'02',
        riqi:'2021-03-04',
        tizhong:'62',
        shengao:'183',
        BMI:'18.65',
        tizhi:'17.45',
  
      },  {
        id:'03',

        riqi:'2021-03-04',
        tizhong:'62',
        shengao:'183',
        BMI:'18.65',
        tizhi:'17.45',
  
      },
      ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //测试app.globalData.myurl是否能用
    //console.log(app.globalData.myurl);
    this.setData({
      sv:options.sv
    })
    wx.request({
      url: 'app.globalData.myurl',
      data:{
        sv: this.data.sv,
        openid: wx.getStorageSync("openid"),
      },
      method:"POST",
      success:function(res){
        

        
      }
    })

  },

  shengaoInput:function(e){

    this.setData({

    })
  },
  tizhongInput:function(e){

  },
  su:function(){

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