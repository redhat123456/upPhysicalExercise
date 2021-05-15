// pages/login3/login3.js
var app = getApp()
Page({
  

  

  GetUserInfo(e) {
    wx.getUserProfile({
      desc:'用于个人信息的完善',//不写不弹提示框
      success:function(res){
        console.log('获取成功: ',res)
        //console.log(e);
     const  userInfo=res.userInfo;
     // console.log(userInfo);
     console.log(userInfo);
      wx.setStorage( {key: 'userinfo', data: userInfo});
  
  wx.cloud.callFunction({
    name: 'getData',
    success:function(res){
    console.log(res);

    },
    fail(res){
      console.log('云函数调用失败',res)
    }
  })


    //云函数的调用
    wx.cloud.callFunction({
      name: 'getData',
      success:function(res){
      console.log(res);
      var openId = res.result.openid;
              //openid: res.data.openid
            //请求成功之后，把openid放到储存里面
            wx.setStorage({key: 'openid', data: openId})
            console.log(openId);
            wx.request({
              url: getApp().globalData.myurl+'/user/getUserById/'+openId,
              data: {},
              method:'GET',
              success:function(res){
                console.log(res.statusCode);
                //如果没有就添加新用户
                if(res.data.data.user==null){
                  wx.request({
                    url: getApp().globalData.myurl+'/user/add',
                    data: {
                      "openid": openId,
                    },
                    method:"POST",
                    success:function(res){
                    //  console.log(res);
                    //  添加用户成功，返回注册页面
                    wx.showToast({
                      title: '请完善个人信息',
                      icon: 'success',
                      duration: 3000 ,
                      success: function () {
                        wx.navigateTo({
                          url:'/pages/xinxi2/xinxi2'
                        });
                       }
                    })

                    
                    }
                  })
                }
                else{
                  //如果已经存在该用户了就直接返回
                  wx.showToast({
                    title: '登录成功',
                    icon: 'success',
                    duration: 3000 ,
                    success: function () {
                      wx.switchTab({
                        url:'/pages/dynamic/dynamic'
                      });
                     }
                  })
                  

                }
              }


            })
       
      },
      fail(res){
        console.log('云函数调用失败',res)
      }
    })

       /*wx.login({
        success(res){
          //console.log("res.code :" +res.code)
          wx.request({
            url: 'https://api.weixin.qq.com/sns/jscode2session',
            data: {
              appid: getApp().globalData.appid,
              secret: getApp().globalData.secret,
              js_code: res.code,
              grant_type: 'authorization_code'
            },
            method:'GET',
            success:function(res){
              // 获取用户的openid
              //console.log(res.data);
              var openId = res.data.openid;
              //openid: res.data.openid
            //请求成功之后，把openid放到储存里面
            wx.setStorage({key: 'openid', data: openId})
              console.log(openId);
              wx.request({
                url: getApp().globalData.myurl+'/user/getUserById/'+openId,
                data: {},
                method:'GET',
                success:function(res){
                  console.log(res.statusCode);
                  //如果没有就添加新用户
                  if(res.data.data.user==null){
                    wx.request({
                      url: getApp().globalData.myurl+'/user/add',
                      data: {
                        "openid": openId,
                      },
                      method:"POST",
                      success:function(res){
                      //  console.log(res);
                      //  添加用户成功，返回注册页面
                      wx.showToast({
                        title: '请完善个人信息',
                        icon: 'success',
                        duration: 3000 ,
                        success: function () {
                          wx.navigateTo({
                            url:'/pages/xinxi2/xinxi2'
                          });
                         }
                      })

                      
                      }
                    })
                  }
                  else{
                    //如果已经存在该用户了就直接返回
                    wx.showToast({
                      title: '登录成功',
                      icon: 'success',
                      duration: 3000 ,
                      success: function () {
                        wx.switchTab({
                          url:'/pages/dynamic/dynamic'
                        });
                       }
                    })
                    
  
                  }
                }
  
  
              })
  
            }
          })
        }
      })*/
      },


      fail:function(err){
        console.log("获取失败: ",err)
      }
    })
  
     
  },
  handleGetUserInfo(e){
   
    
  }
})