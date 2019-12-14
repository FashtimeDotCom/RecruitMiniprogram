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
  }
})