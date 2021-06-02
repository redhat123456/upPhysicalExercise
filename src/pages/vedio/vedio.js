// pages/live/live.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date:'',
    url:'',
    id:'',
    planId:'',
    count:'',
    currentIndex:0,
    showChannels:true,
  },
  bindInputBlur(e) {
    this.inputValue = e.detail.value
  },
  bindButtonTap() {
    const that = this
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: ['front', 'back'],
      success(res) {
        that.setData({
          src: res.tempFilePath
        })
      }
    })
  },
  bindSendDanmu() {
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: getRandomColor()
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    let id=options.id;
    let planId=options.id1;
    let url = unescape(options.url)
    console.log(url)
      this.setData({
        url:url,
        id:options.id,
        planId:options.id1,
        date:options.date,
      })
      if(id!=undefined)
    this.getVedio1();
    this.daka();
  },
  
  daka:function(){
    var myurl = getApp().globalData.myurl + '/plan/doTSign/'+this.data.planId + '/' + this.data.date;
    console.log(myurl);
    wx.request({
      url: myurl,
      data:{},
      method:"GET",
      success:(res)=>{
      console.log("打卡成功");
      }
    })
  },


  getVedio1:function(){
    var that=this;
    wx.request({
      url: getApp().globalData.myurl+'/video/getUrl/'+this.data.id ,
      success:function(res){
        console.log(res);
        console.log('增加成功');
        var url=res.data.data.url;
        that.setData({
          url:url
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

  },
  onChannelClick(e){
    if(e.currentTarget.dataset.position == this.data.currentIndex){
      return
    }
    this.setData({
      currentIndex:e.currentTarget.dataset.position
    })
    console.log(e)
  },
  
  onArrowClick(e){
    if(this.data.showChannels){
      this.setData({
        showChannels:false,
        arrowImg:"img/ic_arrow_left.png"
      })
    } else {
      this.setData({
        showChannels:true,
        arrowImg:"img/ic_arrow_right.png"
      })
    }
  },
  bindVideoEnterPictureInPicture() {
    console.log('进入小窗模式')
  },

  bindVideoLeavePictureInPicture() {
    console.log('退出小窗模式')
  },

  screenChange(res){
    console.log("screenChange->res:" + JSON.stringify(res))

  }
})
