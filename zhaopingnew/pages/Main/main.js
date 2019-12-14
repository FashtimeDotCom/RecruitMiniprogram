var amapFile = require('../../libs/amap-wx.js');
var app = getApp();
var markersData = {
  latitude: '', //纬度
  longitude: '', //经度
  key: "390d74647314d0a913c31dd3e0d6e199" //申请的高德地图key
};
Page({
  data: {
    locationinfo: null,
    city: '获取地理位置',
    show_jobfair: false,
    show_company: true,
    current: 0,
    fair: null, //招聘会信息
    informationGet: null, //公司列表 
    indexCurrent:1
  },
  getcity: function(e) {
    wx.navigateTo({
      url: '/pages/choosecity/choosecity',
    })
  },
  swiperChange: function(e) {
    this.setData({
      current: e.detail.current,
    })
  },
  swiperClick: function(e) {
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../content/content?fair_id=' + id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    let identity = getApp().globalData.identity;
    var is_interviewer = identity == "面试官" ? true : false;
    that.setData({
      is_interviewer
    });
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
            app.globalData.city = data[0].regeocodeData.addressComponent.city;
            that.setData({
              city: app.globalData.city
            })
          },
          fail: function(info) {}
        });
      }
    })

    var that = this;
    wx.request({
      url: app.data.apiUrl+'fairGet',
      data: {},
      method: 'get', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        "content-type": "application/json"
      }, // 设置请求的 header
      success: function(res) {
        that.setData({
          fair: res.data,
        })
        // getApp().d.userId = res.data.arr.id; //后台没有传输arr.id所以报错
      },
      fail: function() {
        cosnole.log("错误");
      }
    });


    wx.request({
      url: app.data.apiUrl+'informationGet',
      data: {},
      method: 'get', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        "content-type": "application/json"
      }, // 设置请求的 header
      success: function(res) {
        that.setData({
          informationGet: res.data,
        })
        // getApp().d.userId = res.data.arr.id; //后台没有传输arr.id所以报错
      },
      fail: function() {
        cosnole.log("错误");
      }
    });
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
    // 页面出现在前台时执行
    that.setData({
      userInfo: tsuerInfo,
      userInfoFlag: tsuserInfoFlag,
      modalHidden: tsmodalHidden
    })

  },
  gohunterlist: function() {
    var that = this;
    that.setData({indexCurrent:3})
    wx.navigateTo({
      url: '../hunterlist/hunterlist',
    })
  },
  goperson: function() {
    wx.switchTab({
      url: '../person/person',
    })
  },
  show_jobfair: function() {
    this.setData({
      show_jobfair: false,
      show_company: true,
      indexCurrent:1,
    });
  },
  show_company: function() {
    this.setData({
      show_jobfair: true,
      show_company: false,
      indexCurrent:2,
    });
  },
})
