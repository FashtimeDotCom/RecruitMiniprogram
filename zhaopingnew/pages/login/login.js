Page({
  data: {
    username: "",
    password: ""
  },
  onLoad:function(){
    var identity = getApp().globalData.identity;
    this.setData({identity});
  },
  formSubmit: function (e) {
    console.log('form发生了sdubmit事件，携带数据为：', e.detail.value)
    if (e.detail.value.username &&e.detail.value.password) {
    wx.switchTab({
        url: '../main/main',
      })
    }
  },
  go_register:function(e){
    wx.redirectTo({
      url: '../register/register',
    })
  },
})