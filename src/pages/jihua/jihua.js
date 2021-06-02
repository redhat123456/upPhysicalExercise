

//引用

Page({

  /**
   * 页面的初始数据
   */
    data: {
      hasEmptyGrid: false,
      showPicker: false,
      jihuaurl:null,
      date:'',
      dayStyle: [],
      jihuaList1:[],
      vedio_List:[],
      
    },
    
    handleShowAction() {
      wx.navigateTo({
        url: '../jihua_list/jihua_list'
      })
    },
    handleShowAction1() {
      wx.showActionSheet({
        itemList: ['开始训练','删除计划'] ,//文字数组
        success: (res) => {
        if(res.tapIndex){
          console.log("用户选择了删除计划")
          wx.redirectTo({
            url: '/pages/jihua21/jihua21',
          })
        } else{
          console.log("用户选择了开始训练")
          wx.redirectTo({
            if(){
  
            }, else(){
            url: '/pages/paobu/paobu'            
            }
  
          })
  
        }
    
             
        }
      })
    },


    jihua_show2:function(){
      var that=this;
    wx.request({
      url: getApp().globalData.myurl + '/plan/selectAll/' + wx.getStorageSync("openid"),
      data:{},
      method:"GET",
      success:function(res){
        console.log(res);
        var list=res.data.data.list;
      console.log(list);
      that.setData({
        jihuaList1:list
      })
      }
    }) 
     
    },
   getdate:function(){
    var timestamp = Date.parse( new Date()); 
    var date = new Date(timestamp); 
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()
    var time = year+ '-' + month + '-' + day
    console.log(time);
    this.setData({
      date:time
    })
   },
  /**
   * 生命周期函数--监听页面加载
   */
  calendar:function(res){
   console.log('显示计划调用');
   var arr = new Array;
   wx.request({
     url: getApp().globalData.myurl + '/plan/getIndexPlan2/' + wx.getStorageSync("openid") +'/'+ this.data.date ,
     data:{},
     method:"GET",
     success:(res)=>{
       console.log(res);
       var list =  res.data.data.list;
       console.log(list);
       if(list == undefined){
        this.setData({
          dayStyle:{}
        })
      }
       for (let i = 0; i < list.length; i++){
        console.log(i, list[i]);
        let color;
        let zi;
        if(list[i]==3){
          color = '#DC143C'
          zi = 'white'
        }
        
        if(list[i]==1){
          color = '#808080'
          zi = 'white'
        }
        
        if(list[i]==2){
          color = '#00FF00'
          zi='white'
        }

        if(list[i]==0){
          color='white'
          
        }
        
        let obj ={month: 'current', day: i+1, color: zi , background: color}
        console.log(obj);
        arr[i]=obj;
       }
      console.log(arr);
      this.setData({
        dayStyle:arr
      })

     }

   })

  

   
     
  
   },


   
   getVideoList:function(){
      let myurl=getApp().globalData.myurl+'/video/getAllVideo/'+ wx.getStorageSync("openid")+'/'+this.data.date;
      console.log(myurl);
    wx.request({
      url: myurl,
      data:{},
      method:"GET",
      success:(res)=>{
      console.log(res);
      var list =  res.data.data.videoList;
      var that = this
      console.log(list);
      if(list == undefined){
        that.setData({
          vedio_List:{}
        })
      }

      for (let i = 0; i < list.length; i++) {
        console.log(i, list[i]);
        list[i].url=escape(list[i].url)
        console.log(i, list[i]);
      }
      this.setData({
        vedio_List:list
      })
      }
    })


  },
   
  onLoad: function (options) {
    this.getdate();
    this.jihua_show2();  
    this.calendar();
    this.getVideoList();

  },
  

  changeData:function(){
    this.onLoad();
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
    this.onLoad();

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