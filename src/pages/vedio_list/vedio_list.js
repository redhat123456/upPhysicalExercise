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
        value:"推荐",
        isActive:false
      },
     
    ],
    jihuaList:[
      {
        jihua_Img:'/images/dianshi.jpg',
        jihua_name:'12分钟快速热身跑',
        jihua_playNum:'5',
        jihua_biaozhunNum:'14',
        jvid:'jv0',
  
      },
      {
        jihua_Img:'/images/dianshi.jpg',
        jihua_name:'7分钟瘦脸瘦下巴大当家u的规范化收到回复就放',
        jihua_playNum:'5',
        jihua_biaozhunNum:'14',
        jvid:'av004',
  
  
      },
      {
        jihua_Img:'/images/dianshi.jpg',
        jihua_name:'7分钟瘦脸瘦下巴大当家u的规范化收到回复就放',
        jihua_playNum:'5',
        jihua_biaozhunNum:'14',
        jvid:'av004',
  
      },
      ],
    vedio_List:[
      {},
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
    this.QueryParams.vid=options.vid;
   

  },

  //获取视频列表数据
  getVideoList(){
    const res = wx.request({
      url: 'url',
      data: this.QueryParams,
      dataType: dataType,
      enableCache: true,
      enableHttp2: true,
      enableQuic: true,
      header: header,
      method: method,
      responseType: responseType,
      timeout: 0,
      success: (result) => {},
      fail: (res) => {},
      complete: (res) => {},
    })
    console.log(res);
    this.setData({
      vedio_List:res.vedio
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