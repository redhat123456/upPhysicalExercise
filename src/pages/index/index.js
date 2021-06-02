const app = getApp()

var util = require('../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [],
    day:0,
   indicatorDots: true,
   autoplay: true,
   interval: 5000,
   duration: 1000,
   userInfo: {},
   currentId: 1001,
   hotList: [],
   List1: [],
   List2: [],
   List3: [],
   List4: [],
   List5: [],
   List6: [],
   List7: [],
   List8: [],

  jihuaList:[
    {
      id:0,
      cover:'http://121.196.145.60:3332/1.jpg',
      name:'新手入门',
      jieshao:'30分钟 · 小白 · 基础',
      url:'新手入门',

    },
    {
      id:0,
      cover:'http://121.196.145.60:3332/2.jpg',
      name:'每天30分钟系列',
      jieshao:'30分钟 · 初级 · 全身',
      url:'30分钟系列',

    },
    {
      id:0,
      cover:'http://121.196.145.60:3332/3.jpg',
      name:'每天45分钟系列',
      jieshao:'45分钟 · 进阶 · 锻炼',
      url:'45分钟系列',

    },
    {
      id:0,
      cover:'http://121.196.145.60:3333/5.jpg',
      name:'12分钟快速热身跑',
      jieshao:'12分钟 · 初级 · 考前',
      url:'跑步训练',

    },
    ],
    resData:[],
    theDay: '', //今日课程
    course : 'null',

  },

  getToday: function () {
    

    let day =  util.formatTime(new Date()) ;

    let theday=day;  
    console.log(theday);
    this.setData({
     theDay:theday
    })
  },
  
  getRequest_lun:function () {
     //发送网络请求获取列表

     console.log('lun');
     var that=this;

     let myurl= getApp().globalData.myurl+'/video/getCarousel';

     console.log(myurl);
     wx.request({
      url: myurl,
      data:{},
      method:'GET',
      success:function(res){
        console.log(res.data.data);
        console.log(res.data.data.videoList);
        let list = res.data.data.videoList;
        for (let i = 0; i < list.length; i++) {
          console.log(i, list[i]);
          list[i].url=escape(list[i].url)
          console.log(i, list[i]);
        }

        that.setData({
          imgUrls:list
        })
        
      }

    })
  },

  
  getRequest_hot:function () {
    //发送网络请求获取列表

    console.log('hot');
    var that=this;

    let myurl= getApp().globalData.myurl+'/video/getHot';

    console.log(myurl);
    wx.request({
     url: myurl,
     data:{},
     method:'GET',
     success:function(res){
       console.log(res.data.data);
       console.log(res.data.data.videoList);
       var list=res.data.data.videoList;
       that.setData({
        hotList:list
       })
       
     }

   })
 },

 getRequest_2:function(){
  console.log('2');
  var that=this;

  let myurl= getApp().globalData.myurl+'/video/getMain/背部训练';

  console.log(myurl);
  wx.request({
   url: myurl,
   data:{
   },
   header: {
    'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
   },
   method:'GET',
   success:function(res){
     console.log(res.data);
     console.log(res.data.videoList);
     var list=res.data.data.videoList;
     that.setData({
      List1:list
     })
     
   }

 })
 },
 getRequest_3:function(){
  console.log('3');
  var that=this;

  let myurl= getApp().globalData.myurl+'/video/getMain/臀腿训练';

  console.log(myurl);
  wx.request({
   url: myurl,
   data:{},
   method:'GET',
   success:function(res){
     console.log(res.data.data);
     console.log(res.data.data.videoList);
     var list=res.data.data.videoList;
     that.setData({
      List2:list
     })
     
   }

 })
 },
 getRequest_4:function(){
  console.log('4');
  var that=this;

  let myurl= getApp().globalData.myurl+'/video/getMain/徒手训练';

  console.log(myurl);
  wx.request({
   url: myurl,
   data:{},
   method:'GET',
   success:function(res){
     console.log(res.data.data);
     console.log(res.data.data.videoList);
     var list=res.data.data.videoList;
     that.setData({
      List3:list
     })
     
   }

 })
 },
 getRequest_5:function(){
  console.log('5');
  var that=this;

  let myurl= getApp().globalData.myurl+'/video/getMain/体态矫正';

  console.log(myurl);
  wx.request({
   url: myurl,
   data:{},
   method:'GET',
   success:function(res){
     console.log(res.data.data);
     console.log(res.data.data.videoList);
     var list=res.data.data.videoList;
     that.setData({
      List4:list
     })
     
   }

 })
 },
 getRequest_6:function(){
  console.log('6');
  var that=this;

  let myurl= getApp().globalData.myurl+'/video/getMain/手臂训练';

  console.log(myurl);
  wx.request({
   url: myurl,
   data:{},
   method:'GET',
   success:function(res){
     console.log(res.data.data);
     console.log(res.data.data.videoList);
     var list=res.data.data.videoList;
     that.setData({
      List5:list
     })
     
   }

 })
 },
 getRequest_7:function(){
  console.log('7');
  var that=this;

  let myurl= getApp().globalData.myurl+'/video/getMain/肩部训练';

  console.log(myurl);
  wx.request({
   url: myurl,
   data:{},
   method:'GET',
   success:function(res){
     console.log(res.data.data);
     console.log(res.data.data.videoList);
     var list=res.data.data.videoList;
     that.setData({
      List6:list
     })
     
   }

 })
 },
 getRequest_8:function(){
  console.log('8');
  var that=this;

  let myurl= getApp().globalData.myurl+'/video/getMain/腹部训练';

  console.log(myurl);
  wx.request({
   url: myurl,
   data:{},
   method:'GET',
   success:function(res){
     console.log(res.data.data);
     console.log(res.data.data.videoList);
     var list=res.data.data.videoList;
     that.setData({
      List7:list
     })
     
   }

 })
 },
 getRequest_9:function(){
  console.log('9');
  var that=this;

  let myurl= getApp().globalData.myurl+'/video/getMain/胸部训练';

  console.log(myurl);
  wx.request({
   url: myurl,
   data:{},
   method:'GET',
   success:function(res){
     console.log(res.data.data);
     console.log(res.data.data.videoList);
     var list=res.data.data.videoList;
     that.setData({
      List8:list
     })
     
   }

 })
 },


 getday:function() {
  wx.request({
    url: getApp().globalData.myurl + '/user/getUsed/' +  wx.getStorageSync("openid"),
    data:{},
    method:"GET",
    success:(res)=>{
    var that = this
     var day = res.data.data.time
     console.log(day)
     that.setData({
       day:day
     })
    }
  })

  },

 /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getday();
    this.getRequest_lun();
   this.getToday();
   this.getRequest_hot();
   this.getRequest_2();
   this.getRequest_3();
   this.getRequest_4();
   this.getRequest_5();
   this.getRequest_6();
   this.getRequest_7();
   this.getRequest_8();
   this.getRequest_9();   
   
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