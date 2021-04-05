const app = getApp()

var util = require('../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      {
         link:'/pages/video/video',
         url:'http://i0.hdslb.com/bfs/live/new_room_cover/654c27b2b18deacde0f080ea80d8d6e6e2ab73a5.jpg@206w_116h_1c_100q.webp'
      },{
         link:'/pages/video/video',
         url:'http://i0.hdslb.com/bfs/live/new_room_cover/654c27b2b18deacde0f080ea80d8d6e6e2ab73a5.jpg@206w_116h_1c_100q.webp'
      },{
         link:'/pages/video/video',
         url:'http://i0.hdslb.com/bfs/live/new_room_cover/654c27b2b18deacde0f080ea80d8d6e6e2ab73a5.jpg@206w_116h_1c_100q.webp'
      },{
         link:'/pages/video/video',
         url:'http://i0.hdslb.com/bfs/live/new_room_cover/654c27b2b18deacde0f080ea80d8d6e6e2ab73a5.jpg@206w_116h_1c_100q.webp'
      }
   ],
   indicatorDots: true,
   autoplay: true,
   interval: 5000,
   duration: 1000,
   userInfo: {},
   currentId: 1001,
   hotList: [
    {
      coverImg: 'http://i0.hdslb.com/bfs/live/new_room_cover/654c27b2b18deacde0f080ea80d8d6e6e2ab73a5.jpg@206w_116h_1c_100q.webp',
      title: 'bilibili Moe 2017 动画角色人气大赏国产动画场宣传PV',
      playNum: '21.3万',
      commentNum: '8638',
      avid: 'av1',
      link: '/pages/vedio/vedio?av=1'

    },
    {
      coverImg: 'http://i0.hdslb.com/bfs/live/new_room_cover/654c27b2b18deacde0f080ea80d8d6e6e2ab73a5.jpg@206w_116h_1c_100q.webp',
      title: '【1月】小林家的龙女仆 10',
      playNum: '403.7万',
      commentNum: '14.0万',
      avid: 'av2',
      link: '/pages/vedio/vedio?av=2'

    },
    {
      coverImg: 'http://i0.hdslb.com/bfs/live/new_room_cover/654c27b2b18deacde0f080ea80d8d6e6e2ab73a5.jpg@206w_116h_1c_100q.webp',
      title: '【7月】Fate/Apocrypha 01【独家正版】',
      playNum: '440.7万',
      commentNum: '12.3万',
      avid: 'av3',
      link: '/pages/vedio/vedio?av=3'

    },
    {
      coverImg: 'http://i0.hdslb.com/bfs/live/new_room_cover/654c27b2b18deacde0f080ea80d8d6e6e2ab73a5.jpg@206w_116h_1c_100q.webp',
      title: '【Fate全系列】英灵乱斗: 夺回未来的战争「Grand Order」',
      playNum: '74.9万',
      commentNum: '9773',
      avid: 'av4',
      link: '/pages/vedio/vedio?av=4'
    }
  ],
  animationList: [
    {
      coverImg: 'http://i0.hdslb.com/bfs/live/new_room_cover/654c27b2b18deacde0f080ea80d8d6e6e2ab73a5.jpg@206w_116h_1c_100q.webp',
      title: '【乐正绫】《华夏之章》【小旭PRO】【绛舞乱丸】',
      playNum: '4.7万',
      commentNum: '977',
      avid: 'av15',
      link: '/pages/vedio/vedio?av=15'
    },
    {
      coverImg: 'http://i0.hdslb.com/bfs/live/new_room_cover/654c27b2b18deacde0f080ea80d8d6e6e2ab73a5.jpg@206w_116h_1c_100q.webp',
      title: '【斗图歌】装逼不如斗图',
      playNum: '4.7万',
      commentNum: '977',
      avid: 'av16',
      link: '/pages/vedio/vedio?av=16'

    },
    {
      coverImg: 'http://i0.hdslb.com/bfs/live/new_room_cover/654c27b2b18deacde0f080ea80d8d6e6e2ab73a5.jpg@206w_116h_1c_100q.webp',
      title: '【胖胖球】【双子星】【獒龙】荒岛 - El transcurrir de las horas',
      playNum: '4.7万',
      commentNum: '977',
      avid: 'av17',
      link: '/pages/vedio/vedio?av=17'

    },
    {
      coverImg: 'http://i0.hdslb.com/bfs/live/new_room_cover/654c27b2b18deacde0f080ea80d8d6e6e2ab73a5.jpg@206w_116h_1c_100q.webp',
      title: '撩人净土系列【红菱歌舞伎初音】极乐净土【大神犬PV付】MME配布',
      playNum: '4.7万',
      commentNum: '977',
      avid: 'av18',
      link: '/pages/vedio/vedio?av=18'

    }
  ],
  jihuaList:[
    {
      jihua_Img:'/images/dianshi.jpg',
      jihua_name:'12分钟快速热身跑',
      jieshao:'2周 · 初级 · 考前',
      jvid:'jv0',

    },
    {
      jihua_Img:'/images/dianshi.jpg',
      jihua_name:'7分钟瘦脸瘦下巴大当家u的规范化收到回复就放',
      jieshao:'2周 · 初级 · 考前',
      jvid:'av004',


    },
    {
      jihua_Img:'/images/dianshi.jpg',
      jihua_name:'7分钟瘦脸瘦下巴大当家u的规范化收到回复就放',
      jieshao:'2周 · 初级 · 考前',
      jvid:'av004',

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
  
  getRequest:function(){
     //发送网络请求获取列表
     wx.request({
      url: '',
      data:{
      num:5
      },
      success:res=>{
         res.data.forEach(item=>{
           var time=item.posttime*1000
           var d=new Date(time);
           var year=d.getFullYear();
           var month=(d.getMonth()+1)<10 ? "0"+(d.getMonth()+1) :(d.getMonth()+1);
           var day=(d.getDate())<10 ? "0"+(d.getDate()+1) :(d.getDate()+1);
           var posttime=year+"-"+month+"-"+day
           item.posttime=posttime
         })

        
         this.setData({
           resData:res.data
         })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   this.getRequest();
   this.getToday();
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