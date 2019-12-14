var app = getApp();
Page({
  data: {
    id: null,
    fair: null,
  },
  goParticipantinfo: function() {
    wx.navigateTo({
      url: '../Participantinfo/Participantinfo?fair_id=' + this.data.id,
    })
  },
  onLoad: function(options) {
    var that = this;
    that.setData({
      id: options.fair_id
    })
    wx.request({
      url: app.data.apiUrl + 'fair_detail',
      data: {fair_id:options.fair_id},
      method: 'get', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        "content-type": "application/json"
      }, // 设置请求的 header
      success: function (res) {
        that.setData({
          fair: res.data[0]
        })
      },
      fail: function () {
        cosnole.log("错误");
      }
    });
    
  },
  goToDetail: function() {
    wx.showToast({
      title: '地图图片详情',
    })
  }
})