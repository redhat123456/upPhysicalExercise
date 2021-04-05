// pages/login3/login3.js
var app = getApp()
Page({
  handleGetUserInfo(e){
    //console.log(e);
    const {userInfo}=e.detail;
   // console.log(userInfo);
    wx.setStorage( {key: 'userinfo', data: userInfo});

    wx.login({
      success(res){
        //console.log("res.code :" +res.code)
        wx.request({
          url: 'https://api.weixin.qq.com/sns/jscode2session',
          data: {
            appid: 'app.globalData.appid',
            secret: 'app.globalData.secret',
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
              url: 'app.globalData.myurl/user/getUserById/'+openId,
              data: {},
              method:'GET',
              success:function(res){
                console.log(res.statusCode);
                //如果没有就添加新用户
                if(res.data.data.user==null){
                  wx.request({
                    url: 'app.globalData.myurl/user/add',
                    data: {
                      "openid": openId,
                    },
                    method:"POST",
                    success:function(res){
                    //  console.log(res);
                    //  添加用户成功，返回主页面
                    wx.navigateBack({
                      url:'/pages/dynamic/dynamic?yid=0'
                    });
                    }
                  })
                }
                else{
                  //如果已经存在该用户了就直接返回
                  wx.navigateBack({
                    url:'/pages/dynamic/dynamic?yid=1'
                  });

                }
              }


            })

          }
        })
      }
    })
    
  }
})