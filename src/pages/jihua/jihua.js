import todo from '../../components/v2/plugins/todo'
import selectable from '../../components/v2/plugins/selectable'
import solarLunar from '../../components/v2/plugins/solarLunar/index'
import timeRange from '../../components/v2/plugins/time-range'
import week from '../../components/v2/plugins/week'
import holidays from '../../components/v2/plugins/holidays/index'
import plugin from '../../components/v2/plugins/index'

plugin
  .use(todo)
  .use(solarLunar)
  .use(selectable)
  .use(week)
  .use(timeRange)
  .use(holidays)

//引用

Page({

  /**
   * 页面的初始数据
   */
    data: {
      hasEmptyGrid: false,
      showPicker: false,
      jihuaurl:null,
      toSet : [
        {
          year: 2021,
          month: 3,
          date: 15
        },
        {
          year: 2021,
          month: 3,
          date: 18
        }
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
          ]
  
      
    },
    handleShowAction() {
      wx.showActionSheet({
        itemList: ['单节训练','训练计划'] ,//文字数组
        success: (res) => {
        if(res.tapIndex){
          console.log("用户选择了训练计划")
          wx.redirectTo({
            url: '/pages/jihua_list/jihua_list?list=2',
          })
        } else{
          console.log("用户选择了单节训练")
          wx.redirectTo({
            url: '/pages/jihua_list/jihua_list?list=1',
          })
  
        }
    
             
        }
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

    handleAction(e) {
      const { action, disable } = e.currentTarget.dataset
      if (disable) {
        this.showToast('抱歉，还不支持～😂')
      }
      this.setData({
        rst: []
      })
      const calendar = this.selectComponent('#calendar').calendar
      const { year, month } = calendar.getCurrentYM()

          const toSet = [
            {
              year: 2021,
              month: 3,
              date: 15
            },
            {
              year: 2021,
              month: 3,
              date: 18
            }
          ]
          calendar.setSelectedDates(toSet)
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