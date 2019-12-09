Page({
  data: {
    username: "",
    password: ""
  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    if (e.detail.value.username=="qzz"&&e.detail.value.password=="qzz") {
      wx.navigateTo({
        url: '../Main/Main',
      })
    }
  },
  go_register:function(e){
    wx.navigateTo({
      url: '../register/register',
    })
  },
})