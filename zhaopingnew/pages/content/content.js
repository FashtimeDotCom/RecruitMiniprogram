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
    for (var i = 0; i < app.globalData.fair.length; i++) {
      if (app.globalData.fair[i].fair_id == that.data.id) {
        console.log(app.globalData.fair[i].fair_id);
        that.setData({
          fair: app.globalData.fair[i]
        })
      }
    }
  },
  goToDetail: function() {
    wx.showToast({
      title: '地图图片详情',
    })
  }
})