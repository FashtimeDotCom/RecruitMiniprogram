// pages/attention/attention.js
var app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    p_identity: "",
    companyFlag: false,
    hunterFlag: false,
    person: [{
        id: 0,
        picture: "../images/头像小集/头像女.png",
        name: "江琳娜",
        sex: "女",
        ident: "学生",
        phone: "15067865",
        school: "温州大学",
        specialty: "计算机科学与技术"
      },
      {
        id: 1,
        picture: "../images/头像小集/头像男.png",
        name: "程瑞",
        sex: "男",
        ident: "学生",
        phone: "15067865",
        school: "温州大学",
        specialty: "计算机科学与技术"
      },
      {
        id: 2,
        picture: "../images/头像小集/微信图片_20191126191155.jpg",
        name: "西瓜",
        sex: "男",
        ident: "学生",
        phone: "15067865",
        school: "温州大学",
        specialty: "计算机科学与技术"
      }
    ]
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
    }
    if (this.data.p_identity == "面试者") {
      this.setData({
        companyFlag: true,
        hunterFlag: false,
      });
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