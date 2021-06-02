


var countTooGetLocation = 0;
var total_micro_second = 0;
var starRun = 0;
var totalSecond  = 0;
var oriMeters = 0.0;
/* 毫秒级倒计时 */
function count_down(that) {

    if (starRun == 0) {
      return;
    }

    if (countTooGetLocation >= 100) {
      var time = date_format(total_micro_second);
      that.updateTime(time);
    }

  	if (countTooGetLocation >= 5000) { //1000为1s
        that.getLocation();
        countTooGetLocation = 0;
  	}   
    

 setTimeout
  	setTimeout(function(){
		countTooGetLocation += 10;
    total_micro_second += 10;
		count_down(that);
    }
    ,10
    )
}


// 时间格式化输出，如03:25:19 86。每10ms都会调用一次
function date_format(micro_second) {
  	// 秒数
  	var second = Math.floor(micro_second / 1000);
  	// 小时位
  	var hr = Math.floor(second / 3600);
  	// 分钟位
  	var min = fill_zero_prefix(Math.floor((second - hr * 3600) / 60));
  	// 秒位
	var sec = fill_zero_prefix((second - hr * 3600 - min * 60));// equal to => var sec = second % 60;


	return hr + ":" + min + ":" + sec + " ";
}


function getDistance(lat1, lng1, lat2, lng2) { 
    var dis = 0;
    var radLat1 = toRadians(lat1);
    var radLat2 = toRadians(lat2);
    var deltaLat = radLat1 - radLat2;
    var deltaLng = toRadians(lng1) - toRadians(lng2);
    var dis = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(deltaLat / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(deltaLng / 2), 2)));
    return dis * 6378137;

    function toRadians(d) {  return d * Math.PI / 180;}
} 

function fill_zero_prefix(num) {
	return num < 10 ? "0" + num : num
}

//****************************************************************************************
//****************************************************************************************

Page({
  data: {
    ans:0,
    date:'',
    clock: '',
    image_url:'/images/错误.png',
    isLocation:false,
    id:'',
    latitude: 0,
    longitude: 0,
    markers: [],
    covers: [],
    meters: 0.00,
    time: "0:00:00"
  },

//****************************
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    this.getLocation()
    console.log("onLoad")
    count_down(this);

    this.setData({
        id:options.id,
        date:options.date
    })
    this.setData({
      meters: 0.00,
      time: "0:00:00"
    })
 
  },
  //****************************
  openLocation:function (){
    wx.getLocation({
      type: "gcj02", // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success:(res)=>{
          wx.openLocation({
            latitude: res.latitude, // 纬度，范围为-90~90，负数表示南纬
            longitude: res.longitude, // 经度，范围为-180~180，负数表示西经
            scale: 28, // 缩放比例
          })
      },
    })
  },


  panduan:function(){
    
    
  },

  daka:function(){
    var time = this.data.date;
    let that =this ;
    console.log(time);
    wx.request({
      url: getApp().globalData.myurl + '/plan/doSign/' + that.data.id + '/' + time,
      data:{},
      method:"GET",
      success:function(){
        console.log('打卡成功！');
      },
      fail:function(){
        console.log('打卡失败！');
      }
    })
  },

//****************************
  starRun :function () {
    if (starRun == 1) {
      return;
    }
    starRun = 1;
    count_down(this);
    this.getLocation();
  },


 //****************************
  stopRun:function () {
    starRun = 0;
    count_down(this);
  },


punch_in:function(){

},
 stopRun2:function () {
 
  starRun = 0;
  count_down(this);
  let Time=this.data.time;
  let KM=this.data.meters;
  let id = this.data.id;
  console.log(Time);
  console.log(KM);
  wx.request({
    url: getApp().globalData.myurl+ '/run/addRunData',
    data:{
      "createtime": "",
      "data": KM,
      "date": Time,
      "id": id,
      "openid": wx.getStorageSync("openid"),
      "updatetime": ""
    },
    method:"POST",
    success:(res)=>{
      wx.showToast({
        title: '跑步结束，上传成功',
        icon: 'success',
        duration: 3000 ,
          
      })
  
      KM = this.data.meters 
          if(KM>=1.00){
            this.daka();
            setTimeout(function () {
              wx.reLaunch({
              url: '/pages/jihua/jihua',
                })
              }, 1000);
             
            
          }
          else{
            wx.showToast({
              title: '未达到打卡目标',
              icon: 'error',
              duration: 3000 ,
            })
            setTimeout(function () {
              wx.reLaunch({
              url: '/pages/jihua/jihua',
                })
              }, 1000);
             
          }
          
        
         
    
    },
    fail:function(){
      wx.showToast({
        title: '上传失败，请检查网络',
        icon: 'success',
        duration: 3000 ,
        
      })
    }

  })

  
  },


//****************************
  updateTime:function (time) {

    var data = this.data;
    data.time = time;
    this.data = data;
    this.setData ({
      time : time,
    })
  },


//****************************
  getLocation:function () {
    var that = this
    wx.getLocation({

      type: "gcj02", // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success:(res)=>{
        console.log("res----------")
        console.log(res)

        //make datas 
        var newCover = {
            latitude: res.latitude,
            longitude: res.longitude,
            iconPath: "/images/redPoint.png",
          };
        var oriCovers = that.data.covers;
        
        console.log("oriMeters----------")
        console.log(oriMeters);
        var len = oriCovers.length;
        var lastCover;
        if (len == 0) {
          oriCovers.push(newCover);
        }
        len = oriCovers.length;
        var lastCover = oriCovers[len-1];
        
        console.log("oriCovers----------")
        console.log(oriCovers,len);

        var newMeters = getDistance(lastCover.latitude,lastCover.longitude,res.latitude,res.longitude)/1000;
        
        if (newMeters < 0.0015){
            newMeters = 0.0;
        }

        oriMeters = oriMeters + newMeters; 
        console.log("newMeters----------")
        console.log(newMeters);


        var meters = new Number(oriMeters);
        var showMeters = meters.toFixed(2);

        oriCovers.push(newCover);
        

        that.setData({
          latitude: res.latitude,
          longitude: res.longitude,
          markers: [],
          covers: oriCovers,
          meters:showMeters,
        });
      },
    })
  }
  
})



