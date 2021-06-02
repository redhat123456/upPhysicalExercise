// pages/jihua_anpai/jihua_anpai.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    jihuajianjie:'',
    ri:'',
    cover:'',
    res:'',
    name:'',
    items: [
      {value: '1', name: '星期一', checked: 'true'},
      {value: '2', name: '星期二', checked: 'true'},
      {value: '3', name: '星期三', checked: 'true'},
      {value: '4', name: '星期四', checked: 'true'},
      {value: '5', name: '星期五', checked: 'true'},
      {value: '6', name: '星期六', checked: 'true'},
      {value: '7', name: '星期日', checked: 'true'},
    ]

  },
  checkboxChange(e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)

    const items = this.data.items
    const values = e.detail.value
    for (let i = 0, lenI = items.length; i < lenI; ++i) {
      items[i].checked = false
    
      for (let j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (items[i].value === values[j]) {
          items[i].checked = true
          break
        }
      }
    }
    /*for(let i = 0 ,lenI = items.length; i < lenI ; i++  ){
      items[i].checked = false
    }
    for(let i = 0, lenI = items.length; i < lenI ; i++){
      for(let j = 0, lenJ = items.length; j < lenJ ; j++){
        if(items[j]==values[i]){
          items[j].checked = true;
        }
      }

    }*/

    this.setData({
      items
    })
    console.log(items);
  },
  jihua() {
    let ri="";
    console.log('点击事件');
    for(let i = 0,lenI = this.data.items.length;i < lenI; i++){
      if(this.data.items[i].checked==true){
        console.log(ri);
        console.log(this.data.items[i])
        ri= ri+this.data.items[i].value
      }
    }
    if(ri=="")
    ri="1234567";
    console.log(ri);
        
        var that = this
        var ans = that.data.res
        var jihua = that.data.name
        console.log(ans)
        if(ans==0){
          //用户无任何计划
          this.get_jihau(ri);
        }    

        if(ans==1){ 
          //有跑步计划无普通计划
          if(jihua=='跑步训练'){
            wx.showToast({
              title: '请先完成或删除现有的锻炼计划',
              icon: 'none',
              duration: 3000 ,
            })
          }
          else{
            this.get_jihau(ri);
          }
        }
       
        if(ans==2){
         //普通计划有跑步计划
         wx.showToast({
          title: '请先完成或删除现有的锻炼计划',
          icon: 'none',
          duration: 3000 ,
        })
        }
        if(ans==3){
         //有普通计划无跑步计划
         if(jihua!='跑步训练'){
          wx.showToast({
            title: '请先完成或删除所有的锻炼和跑步计划',
            icon: 'none',
            duration: 3000 ,
          })
         }
          else{
            this.get_jihau(ri);
          }
        }
  },


  get_jihau:function(ri){
    console.log(ri);
    wx.request({
      url: getApp().globalData.myurl+'/plan/addPlan',
      data:{
        "cover": this.data.cover,
        "date":  ri,
        "extent": "",
        "name": this.data.name,
        "openid": wx.getStorageSync("openid"),
      },
      method:"POST",
      success:function(res){
     wx.showToast({
      title: '计划制定成功',
      icon: 'success',
      duration: 2000 ,
       success: function () {

        setTimeout(function () {
         wx.reLaunch({
         url: '/pages/jihua/jihua',
           })
         }, 1000);
        }
    })
      }
    })
  },

  Get_state:function(){
  wx.request({
    url: getApp().globalData.myurl + '/plan/isPlan/' + wx.getStorageSync("openid") ,
    data:{},
    method:"GET",
    success:(res)=>{
      console.log(res)
      var state = res.data.data.res;
      var that = this ;
      that.setData({
        res:state
      })
    }
  })
  },
  create:function(){
   

  },
  
  /**
   * 生命周期函数--监听页面加载
   */

 
  onLoad: function (options) {
    var that = this;
    that.Get_state();
    that.setData({
    name:options.name,
    cover:options.cover,
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
    var that =this;
    that.Get_state();
    
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