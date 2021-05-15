// pages/vedio_list/vedio_list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:'',
    tabs:[
      {
        id:0,
        value:"全部",
        isActive:true
      },
      {
        id:1,
        value:"为你推荐",
        isActive:false
      },
      {
        id:3,
        value:"小白",
        isActive:false
      },
      {
        id:4,
        value:"初级",
        isActive:false
      },
      {
        id:5,
        value:"进阶",
        isActive:false
      },
    ],
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
      list1:[
        {
          id:0,
          cover:'http://121.196.145.60:3333/5.jpg',
          name:'12分钟快速热身跑',
          jieshao:'12分钟 · 初级 · 考前',
          url:'跑步训练',
    
        },
      ],
      list2:[
        {
          id:0,
          cover:'http://121.196.145.60:3332/1.jpg',
          name:'新手入门',
          jieshao:'30分钟 · 小白 · 基础',
          url:'新手入门',
    
        },
      ],
      list3:[
        {
          id:0,
          cover:'http://121.196.145.60:3332/2.jpg',
          name:'每天30分钟系列',
          jieshao:'30分钟 · 初级 · 全身',
          url:'30分钟系列',
    
        },
      ],
      list4:[
        {
          id:0,
          cover:'http://121.196.145.60:3332/3.jpg',
          name:'每天45分钟系列',
          jieshao:'45分钟 · 进阶 · 锻炼',
          url:'45分钟系列',
    
        },
      ]
     
  },
  //接口要的
  QueryParams:{
    vid:"",
    pagenum:1,
    pagesize:10,
  },
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