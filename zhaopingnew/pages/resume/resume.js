// pages/resume/resume.js
Page({

  /**
   * 页面的初始数据
   */
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

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})