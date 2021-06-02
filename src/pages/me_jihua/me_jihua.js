// pages/me_jihua/me_jihua.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasEmptyGrid: false,
    showPicker: false,
    jihuaid:'',
      jihuaList:[],

    
  },

  radioChange(e){
    console.log(e)
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    let that=this;
    const items = that.data.jihuaList;
    for (let i = 0, len = items.length; i < len; ++i) {
      items[i].checked = items[i].value === e.detail.value
    }
   
    this.setData({
      jihuaid:e.detail.value,
    })
  },

  //计划的选中
  handeItemChange(e){
    //获取修改的计划id
    console.log('checkbox发生change事件，携带value值为：', e.detail.id)

    const items = this.data.jihuaList
    const values = e.detail.id
    for (let i = 0, lenI = items.length; i < lenI; ++i) {
      items[i].checked = false
    
      for (let j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (items[i].id === values[j]) {
          items[i].checked = true
          break
        }
      }
  }
},

getlist:function(){
  var that=this;
  var myurl= getApp().globalData.myurl + '/plan/selectAll/' + wx.getStorageSync("openid")
  console.log(myurl);

  wx.request({
    url: getApp().globalData.myurl + '/plan/selectAll/' + wx.getStorageSync("openid"),
    data:{},
    method:"GET",
    success:function(res){
      console.log(res);
      var list=res.data.data.list;
      var arr = new Array(list.length);
      console.log(list);
      for(let i = 0;i<list.length;i++){
        let check='false';
        console.log(i,list[i]);
        if(i==list.length-1){
        check='true'
        that.setData({
          jihuaid:list[i].id
        })
        }
        let obj = {
          id: list[i].id,name: list[i].name , createtime:list[i].createtime , check:check
        }
        arr[i]=obj;
      }
    console.log(arr);
    that.setData({
      jihuaList:arr
    })
    }
  }) 
},
delete:function(){
  var myurl =  getApp().globalData.myurl + '/plan/deletePlan/'+this.data.jihuaid
  console.log(myurl);
  wx.request({
    url:myurl,
    data:{},
    method:"DELETE",
    success:function(res){
      console.log(res);
      
      console.log('删除成功！');
      wx.showToast({
        title: '计划删除成功',
        icon: 'success',
        duration: 3000 ,
        
      })
    },
    fail:function(){
      console.log('删除失败！');
      wx.showToast({
        title: '计划删除失败',
        icon: 'fail',
        duration: 3000 ,
        
      })
    }
  })

  this.getlist();
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getlist();
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

    //1 获取缓存中的计划数据
    const jihua=wx-wx.getStorageSync('jihua');
    this.setData({
      jihua
    })
    this.getlist();
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