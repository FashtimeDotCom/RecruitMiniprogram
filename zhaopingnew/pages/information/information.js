// pages/information/information.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    companyFlag: false,
    hunterFlag: false,
    name: "阿里巴巴网络技术有限公司",
    telephone: "13122222222",
    type: "网络技术",
    sex: "女",
    age: "18",
    school: "温州大学",
    major: "信息与计算科学"
  },
  companySubmit:function(e){
    console.log('submit事件，携带数据为：', e.detail.value)
  },
  hunterSubmit: function (e) {
    console.log('submit事件，携带数据为：', e.detail.value)
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
        title: '公司信息'
      })
    }
    if (this.data.p_identity == "面试者") {
      this.setData({
        companyFlag: true,
        hunterFlag: false,
      });
      wx.setNavigationBarTitle({
        title: '个人信息'
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