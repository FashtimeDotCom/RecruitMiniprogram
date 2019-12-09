// pages/Main/Main.js
var amapFile = require('../../libs/amap-wx.js');
var app = getApp();
var markersData = {
  latitude: '', //纬度
  longitude: '', //经度
  key: "390d74647314d0a913c31dd3e0d6e199" //申请的高德地图key
};
Page({

  /**
   * 页面的初始数据
   */
  data: {
    locationinfo: null,
    city: '获取地理位置',
    company: [{
        id: 0,
        imagesrc: "../images/阿里巴巴logo.jpg",
        detailhead: "阿里巴巴",
        detailcontent: "中国一家提供电子商务在线交易平台的公司，由马云为首的18人于1999年在浙江杭州创立，是全球最大零售商之一",
        salary: "10k-25k",
        job: "UI设计师",
      },
      {
        id: 1,
        imagesrc: "../images/碧桂园.jpg",
        detailhead: "碧桂园",
        detailcontent: "控股有限公司是一家房地产公司，创建于1992年，总部位于广东佛山。",
        salary: "12k-23k",
        job: "程序员",
      },
      {
        id: 2,
        imagesrc: "../images/上海汽车集团股份有限公司.jpg",
        detailhead: "上海汽车集团股份有限公司",
        detailcontent: "是一家汽车制造公司，成立于2004年11月29日，总部位于上海。公司主要业务涵盖整车、零部件的研发、生产、销售、汽车金融等。",
        salary: "22k-27k",
        job: "工程师",
      },
      {
        id: 3,
        imagesrc: "../images/中国工商银行.jpg",
        detailhead: "中国工商银行",
        detailcontent: "（INDUSTRIAL AND COMMERCIAL BANK OF CHINA）是一家从事存贷款、结算与现金管理等业务的金融机构，成立于1984年1月1日，总部位于北京。[1]",
        salary: "13k-19k",
        job: "会计",
      },
    ]
  },
  getcity: function(e) {
    wx.navigateTo({
      url: '/pages/choosecity/choosecity',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    wx.getLocation({
      type: 'wgs84',
      success(res) {
        that.setData({
          locationinfo: res
        })
        var myAmapFun = new amapFile.AMapWX({
          key: markersData.key
        });
        myAmapFun.getRegeo({
          location: '' + that.data.locationinfo.longitude + ',' + that.data.locationinfo.latitude + '', //location的格式为'经度,纬度'
          success: function(data) {
            console.log(data[0].regeocodeData.addressComponent.city);
            app.globalData.city = data[0].regeocodeData.addressComponent.city;
            that.setData({
              city: app.globalData.city
            })
          },
          fail: function(info) {}
        });
      }
    })


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
    this.setData({
      city: app.globalData.city
    })

    var that = this;
    var tsuerInfo = app.globalData.userInfo;
    var tsuserInfoFlag = app.globalData.userInfoFlag;
    var tsmodalHidden = app.globalData.modalHidden
    console.log(tsuerInfo);
    // 页面出现在前台时执行
    that.setData({
      userInfo: tsuerInfo,
      userInfoFlag: tsuserInfoFlag,
      modalHidden: tsmodalHidden
    })

  },
  gohunterlist:function(){
    wx.navigateTo({
      url: '../hunterlist/hunterlist',
    })
  },
  goperson: function() {
    console.log(111);
    wx.switchTab({
      url: '../person/person',
    })
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