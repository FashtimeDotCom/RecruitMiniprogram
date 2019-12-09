var app = getApp();
var identity;
Page({
  data: {
    radio_identity: "",
    hunter_select: false,
    interviewer_select: false,
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
    identity = app.globalData.identity;
    console.log(identity);
    if (e.detail.value.radio_identity == "面试官") {
      app.globalData.identity = e.detail.value.radio_identity
      console.log('form发生了submit事件，携带数据为：', app.globalData.identity)
      wx.switchTab({
        url: '../Main/Main',
      })
    } else if (e.detail.value.radio_identity == "面试者") {
      app.globalData.identity = e.detail.value.radio_identity
      console.log('form发生了submit事件，携带数据为：', app.globalData.identity)
      wx.switchTab({
        url: '../Main/Main',
      })
    } else {
      console.log('请选择身份')
    }
  }
})