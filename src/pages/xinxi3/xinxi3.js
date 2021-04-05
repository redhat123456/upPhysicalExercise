/*1 选中功能
 1.绑定一个change事件
 2.获取到被修改的对象
 3.对象的选中状态  取反
 4.重新填充回data中的缓存中
 5.重新计算
*/
// pages/xinxi3/xinxi3.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
     disabled:true,
     btnstate:'default',
      BMI:"",
     shenggao:"",
     tizhong:"",
     tizhi:"",
  },
  123:function(e){

    // e 事件对象
    // e.detail 获取触发标签的详情
    // -->{value: "1", cursor: 1, keyCode: 49}
    // value 获取输入组件的值
    var value = e.detail.value
    console.log(value);
    if (value != '') {
      this.setData({disabled:false,btnstate:'primary',shenggao:value});
    } else {
      this.setData({disabled:true,btnstate:'default'});
    }
  },
  tizhongInput:function(e){
    // e 事件对象
    // e.detail 获取触发标签的详情
    // value 获取输入组件的值
    var value = e.detail.value
    
    console.log(value);
    if (value != '') {
      this.setData({disabled:false,btnstate:'primary',tizhong:value});
    } else {
      this.setData({disabled:true,btnstate:'default'});
    }

  },

  go_to1: function() {
    wx.navigateTo({
      url: '../xinxi2/xinxi2'
    })
  },
  go_to2: function() {
 

    var BMI = 10000*( this.data.tizhong / (this.data.shenggao * this.data.shenggao)) ;

    var tizhi = BMI + Number(this.data.tizhi);
    wx.request({
      url: 'app.globalData.myurl/body/addBodyData',
      data: {
        bmi: BMI,
        height: this.data.shenggao,
        weight : this.data.tizhong,
        rate: tizhi,
        openid: wx.getStorageSync("openid"),
      },
      method:"POST",
      success:function(res){
        console.log(res);
      }
    })
    this.setData({
      BMI
    }, () => {
        wx.navigateTo({
      url: '../xinxi4/xinxi4?BMI='+this.data.BMI + '&tizhi='+tizhi,
    })

  
    })
  },
  onLoad: function (options) {
    this.setData({
      tizhi:options.tizhi

    })
   
  },

})