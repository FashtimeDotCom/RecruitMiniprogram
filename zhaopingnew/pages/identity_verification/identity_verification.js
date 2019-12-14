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
  go_login: function(e) {
    var identity = app.globalData.identity;
    if (e.detail.value.radio_identity) {
      app.globalData.identity = e.detail.value.radio_identity
      wx.switchTab({
        url: '../main/main',
      })
    } else {
      wx.showToast({
        title: '请先选择身份',
        icon:'none'
      });
    }
  },
})