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
    ],
    company: [{
        id: 0,
        imagesrc: "../images/阿里巴巴logo.jpg",
        detailhead: "阿里巴巴",
        detailcontent: "中国一家提供电子商务在线交易平台的公司，由马云为首的18人于1999年在浙江杭州创立，是全球最大零售商之一",
      },
      {
        id: 1,
        imagesrc: "../images/碧桂园.jpg",
        detailhead: "碧桂园",
        detailcontent: "控股有限公司是一家房地产公司，创建于1992年，总部位于广东佛山。",
      },
      {
        id: 2,
        imagesrc: "../images/上海汽车集团股份有限公司.jpg",
        detailhead: "上海汽车集团股份有限公司",
        detailcontent: "是一家汽车制造公司，成立于2004年11月29日，总部位于上海。公司主要业务涵盖整车、零部件的研发、生产、销售、汽车金融等。",
      },
      {
        id: 3,
        imagesrc: "../images/中国工商银行.jpg",
        detailhead: "中国工商银行",
        detailcontent: "（INDUSTRIAL AND COMMERCIAL BANK OF CHINA）是一家从事存贷款、结算与现金管理等业务的金融机构，成立于1984年1月1日，总部位于北京。[1]",
      },
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