// pages/identity_verification/identity_verification.js
var app = getApp();
var identity;
Page({

  /**
   * 页面的初始数据
   */
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
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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