Page({
  data: {
    p_identity:null,
    companyFlag: true,
    hunterFlag: true,
    title: "已收简历",
    array: [{
      'image': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575953012838&di=7b74e34cd1a30a149a24041894a2ba0c&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201711%2F09%2F20171109200813_2vtKE.thumb.700_0.jpeg',
      'name': 'gxc',
      'time': '11-22 19:30:01'
    }, {
        'image': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575953012838&di=7b74e34cd1a30a149a24041894a2ba0c&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201711%2F09%2F20171109200813_2vtKE.thumb.700_0.jpeg',
      'name': 'gxc',
      'time': '11-22 19:30:01'
    }, {
        'image': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575953012838&di=7b74e34cd1a30a149a24041894a2ba0c&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201711%2F09%2F20171109200813_2vtKE.thumb.700_0.jpeg',
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