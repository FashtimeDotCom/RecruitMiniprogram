var app = getApp();
Page({
  data: {
    openid: null,
    name: "阿里巴巴网络技术有限公司",
    telephone: "13122222222",
    type: "网络技术",
    sex: "女",
    age: "18",
    school: "温州大学",
    major: "信息与计算科学"
  },
  submit: function(e) {
    console.log('submit事件，携带数据为：', e.detail.value)
    wx.request({
      url: app.data.apiUrl + 'info_updatae',
      data: {
        openid: app.globalData.openid,
        identity: app.globalData.identity,
        ...e.detail.value
      },
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        if (res.data.result == 1) {
          wx.showToast({
            title: '修改成功',
            duration: 2000,
            icon: "none",
            success:function(){
              wx.switchTab({
                url: './personal/personal',
              })
            }
          })
        }
        else{
          wx.showToast({
            title: '修改失败',
            duration: 1500,
            icon:"none"
          })
        }
      },
      fail: function(res) {},
    })
  },
  onLoad: function(options) {
    var that = this;
    let identity = app.globalData.identity;
    if (identity == "面试官") {
      that.setData({
        companyFlag: true
      });
    } else if (identity == "面试者") {
      that.setData({
        companyFlag: false
      });
    }
    wx.request({
      url: app.data.apiUrl + 'userInfo_get',
      data: {
        openid: app.globalData.openid,
        identity: identity
      },
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        console.log(res.data);
        that.setData({
          info: res.data.data
        })
      },
      fail: function(res) {},
    })
  },


})