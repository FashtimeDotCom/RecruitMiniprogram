Page({
  data: {
    p_identity:null,
    companyFlag: true,
    hunterFlag: true,
    title: "已收简历",
    array: [{
      'image': '../images/头像小集/微信图片_20191126191155.jpg',
      'name': 'gxc',
      'time': '11-22 19:30:01'
    }, {
      'image': '../images/头像小集/微信图片_20191126191210.jpg',
      'name': 'gxc',
      'time': '11-22 19:30:01'
    }, {
      'image': '../images/头像小集/微信图片_20191125213441.png',
      'name': 'gxc',
      'time': '11-22 19:30:01'
    }],
    isSend: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      p_identity: getApp().globalData.identity
    });
    if (this.data.p_identity == "面试官") {
      this.setData({
        companyFlag: false,
        hunterFlag: true,
      });
      wx.setNavigationBarTitle({
        title: '已收简历'
      })
    };
    if (this.data.p_identity == "面试者") {
      this.setData({
        companyFlag: true,
        hunterFlag: false,
      });
      wx.setNavigationBarTitle({
        title: '已发简历'
      })
    }
  },
})