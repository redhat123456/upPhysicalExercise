// pages/suju/suju.js
var app = getApp()
var util = require('../../utils/util.js');
Page({

  shengao:'',
  tizhong:'',
  age:'',
  sex:'',
  data: {
    sv:'01',
    jiangkan:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //测试app.globalData.myurl是否能用
    //console.log(app.globalData.myurl);
    var that = this;
    that.setData({
      sv:options.sv
    })
  this.show();
  this.get_age();

  },
   get_age:function(res){
     var that=this;
   wx.request({
     url: getApp().globalData.myurl + '/user/getUserById/'+wx.getStorageSync("openid"),
     data:{},
     method:"GET",
     success:function(res){
       console.log(res);
       var sex=res.data.data.user.sex;
       that.setData({
         sex:sex
       })
     }
   })
   wx.request({
     url: getApp().globalData.myurl + '/user/getAge/'+wx.getStorageSync("openid"),
     data:{},
     method:"GET",
     success:function(res){
       console.log(res);
       var age=res.data.data.age
       that.setData({
        age:age
      })
     },
     fail:function(res){
      
        wx.showToast({
          title: '请完善个人信息',
          icon: 'success',
          duration: 3000 ,
          
        })
        wx.navigateTo({
          url: '../xinxi2/xinxi2?'
        })
     }
   })
   },


  show:function(res){
    var that=this;
    var myurl=getApp().globalData.myurl+'/body/getDataList/'+wx.getStorageSync("openid");
    console.log(myurl);
    wx.request({
      url: myurl,
      data:{},
      method:"GET",
      success:function(res){
        console.log(res);
        console.log(res.data.data.list);
        that.setData({
          jiangkan:res.data.data.list
        })

        
      }
    })
  },

  shengaoInput:function(e){
    var value = e.detail.value
    console.log(value);
    this.setData({
        shengao:value
    })
  },
  tizhongInput:function(e){
    var value = e.detail.value
    console.log(value);
    this.setData({
        tizhong:value
    })
  },

  suju1:function(e){

    var BMI = 10000*( this.data.tizhong / (this.data.shengao * this.data.shengao)) ;
    console.log(BMI);
    var tizhi = Number(BMI) + 0.23*Number(this.data.age)-5.4-10.8*Number(this.data.sex);
    console.log(tizhi);
    
   wx.request({
     url: getApp().globalData.myurl+'/body/addBodyData',
     data:{
      "bmi": BMI,
      "createtime": "",
      "height": this.data.shengao,
      "id": "",
      "openid": wx.getStorageSync("openid"),
      "rate": tizhi,
      "updatetime": "",
      "weight": this.data.tizhong
     },
     method:"POST",
     success:function(e){
      wx.showToast({
        title: '记录成功',
        icon: 'success',
        duration: 3000 ,
        
      })
      
     }
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