// pages/Participantinfo/Participantinfo.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    company_list:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options)
    var that = this;
    wx.request({
      url: 'https://www.workoline.com/zhaopin/public/index.php/company_list',
      data: {
        fair_id:options.fair_id
      },
      method: 'get', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        "content-type": "application/json"
      }, // 设置请求的 header
      success: function(res) {
        that.setData({
          company_list: res.data,
        })
        // getApp().d.userId = res.data.arr.id; //后台没有传输arr.id所以报错
      },
      fail: function() {
        cosnole.log("错误");
      }
    });
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