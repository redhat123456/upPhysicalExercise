// pages/vedio_list/vedio_list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:'',
    vid:'',
    tabs1:[
      {
        id:0,
        value:"全部",
        isActive:true
      },],
    tabs:[
      {
        id:0,
        value:"全部",
        isActive:true
      },
      {
        id:1,
        value:"推荐",
        isActive:false
      },
     
    ],
    vedio_List:[],
    vedio_List1:[],
    vedio_List2:[],

  },
  //接口要的
  
  //标题的点击事件  从子组件传递过来
  handletabsItemChange(e){
   //  1 获取被点击的标题索引
   const {index}=e.detail;
   //  2  修改源数组
   let {tabs}=this.data;
   tabs.forEach((v,i)=>i==index?v.isActive=true:v.isActive=false);
   //  3  赋值到data中
   this.setData({
     tabs
   })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    console.log(options);
    
        this.setData({
       vid:options.vid,}); 
       this.getVideoList();
       this.getVideoList1();
       this.getVideoList2();
  },

  //获取视频列表数据
  getVideoList:function(){
    var that=this;
      let myurl=getApp().globalData.myurl+'/video/getByClass1/'+this.data.vid;
      console.log(myurl);
    wx.request({
      url: myurl,
      method:"GET",
      success:function(res){
      console.log(res);
      var list=res.data.data.videoList;
      console.log(list);
      for (let i = 0; i < list.length; i++) {
        console.log(i, list[i]);
        list[i].url=escape(list[i].url)
        console.log(i, list[i]);
      }
      that.setData({
        vedio_List:list
      })
      }
    })


  },

  getVideoList1:function(){
    var that=this;
      let myurl=getApp().globalData.myurl+'/video/getMain/'+this.data.vid;
      console.log(myurl);
    wx.request({
      url: myurl,
      method:"GET",
      success:function(res){
      console.log(res);
      var list=res.data.data.videoList;
      console.log(list);
      for (let i = 0; i < list.length; i++) {
        console.log(i, list[i]);
        list[i].url=escape(list[i].url)
        console.log(i, list[i]);
      }
      that.setData({
        vedio_List1:list
      })
      }
    })


  },


  getVideoList2:function(){
    var that=this;
      let myurl=getApp().globalData.myurl+'/video/getTop';
      console.log(myurl);
    wx.request({
      url: myurl,
      method:"GET",
      success:function(res){
      console.log(res);
      var list=res.data.data.videoList;
      console.log(list);
      for (let i = 0; i < list.length; i++) {
        console.log(i, list[i]);
        list[i].url=escape(list[i].url)
        console.log(i, list[i]);
      }
      that.setData({
        vedio_List2:list
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