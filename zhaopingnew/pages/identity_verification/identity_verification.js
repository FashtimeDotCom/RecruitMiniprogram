var app = getApp();
Page({
  data: {
    radio_identity: "",
    hunter_select: false,
    interviewer_select: false,
  },
  onLoad:function(){
    let openid = getApp().globalData.openid;
    if(openid){
      wx.request({
        url: app.data.apiUrl+'isUser',
        data: { openid: openid},
        header: {
          'content-type': 'application/json' // 默认值
        },
        success(res) {
          if(res.data.result == 1){
            app.globalData.identity = "面试者"
          }
          else if (res.data.result == 2){
            app.globalData.identity = "面试官"
          }
          if(res.data.result!=0){
            wx.switchTab({
              url: '../main/main',
            })
          }
        }
      })
    }
  },
  select_hunter: function(e) {
    var that = this;
    that.setData({
      hunter_select: true,
      interviewer_select: false,
    });
  },
  select_interviewer: function(e) {
    var that = this;
    that.setData({
      hunter_select: false,
      interviewer_select: true,
    });
  },
  go_login: function(e) {
    var identity = app.globalData.identity;
    console.log(identity);
    if (e.detail.value.radio_identity) {
      app.globalData.identity = e.detail.value.radio_identity
      console.log('form发生了submit事件，携带数据为：', app.globalData.identity)
      wx.switchTab({
        url: '../main/main',
      })
    } else {
      console.log('请选择身份')
    }
  },
  onLoad: function(options) {
    var that = this;
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        wx.request({
          url: 'https://www.workoline.com/zhaopin/public/index.php/getsessionkeys',
          data: {
            code: res.code
          },
          method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
          header: {
            "content-type": "application/json"
          }, // 设置请求的 header
          success: function(res) {
            console.log("!");
            console.log(res);
            var openid = res.data.openid;
            getApp().globalData.openid = openid;
            var company_information = that.data.company_information;
            if (openid) {
              console.log("openid:" + openid);
              // 通过openid 获取改用户的uid
              // wx.request({
              //   url: 'https://www.workoline.com/zhaopin/public/index.php/authlogin1',
              //   data: {
              //     openid: openid,
              //   },
              //   method: 'get', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
              //   header: {
              //     "content-type": "application/json"
              //   }, // 设置请求的 header
              //   success: function(res) {
              //     console.log(res);
              //     // getApp().d.userId = res.data.arr.id; //后台没有传输arr.id所以报错
              //   },
              //   fail: function() {
              //     cosnole.log("错误");
              //   }
              // });
              // 通过openid 获取改用户的uid  end
            }
          }
        });
      }
    })
  }
})