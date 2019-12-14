var app = getApp();
Page({
  data: {
    companyFlag: false,
    hunterFlag: false,
    title: "已收简历",
    array: [],
    isSend: true,
  },
  onLoad: function(options) {
    var that = this;
    if (app.globalData.identity == "面试官") {
      this.setData({
        companyFlag: false,
        hunterFlag: true,
      });
      wx.setNavigationBarTitle({
        title: '已收简历'
      })
    }
    else if (app.globalData.identity == "面试者") {
      this.setData({
        companyFlag: true,
        hunterFlag: false,
      });
      wx.setNavigationBarTitle({
        title: '已发简历'
      })
    }
  //已发简历/已收简历数据获取
    wx.request({
      url: app.data.apiUrl + 'resume_user',
      data: {
        openid: app.globalData.openid,
        identity:app.globalData.identity
      },
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        console.log(res.data);
        that.setData({
          array:res.data.resume
        });
      },
      fail: function (res) { },
    })


    
  },
})