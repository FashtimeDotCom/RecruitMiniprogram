var app = getApp();
var $ = require('../../libs/conf.js');
var city = require('../../libs/city.js');
var amapFile = require('../../libs/amap-wx.js');
var markersData = {
  latitude: '',//纬度
  longitude: '',//经度
  key: "390d74647314d0a913c31dd3e0d6e199"//申请的高德地图key
};
Page({
  data: {
    //城市下拉
    city: null,
    cityData: {},
    hotCityData: [],
    _py: ["hot", "A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "W", "X", "Y", "Z"],
    hidden: true,
    showPy: '★',
  },
  cityconfirm: function(e) {
    app.globalData.city = this.data.city;
    console.log(app.globalData.city)
    wx.switchTab({
      url: '/pages/Main/Main',
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
        var myAmapFun = new amapFile.AMapWX({ key: markersData.key });
        myAmapFun.getRegeo({
          location: '' + that.data.locationinfo.longitude + ',' + that.data.locationinfo.latitude + '',//location的格式为'经度,纬度'
          success: function (data) {
            console.log(data[0].regeocodeData.addressComponent.city);
            that.setData({
              city: data[0].regeocodeData.addressComponent.city,
              citySelected: data[0].regeocodeData.addressComponent.city
            })
          },
          fail: function (info) { }
        });
      }
    })
    
    this.setData({
      cityData: city.all,
      hotCityData: city.hot
    });
    console.log(this.data.cityData)
  },

  //搜索关键字
  keyword: function(keyword) {
    var that = this;
    $.map.getInputtips({
      keywords: keyword,
      location: that.data.longitude + "," + that.data.latitude,
      success: function(data) {
        if (data && data.tips) {
          var searchList = data.tips.filter((item) => {
            return typeof item.location != 'undefined';
          })
          that.setData({
            searchList: searchList
          });
        }
      }
    });
  },

  //选择城市
  selectCity: function(e) {
    var dataset = e.currentTarget.dataset;
    this.setData({
      citySelected: dataset.fullname,
      thisscanf: dataset.fullname,
    });
    app.globalData.city = this.data.thisscanf;
    console.log(app.globalData.city)
    wx.switchTab({
      url: '/pages/Main/Main',
    })
  },

  //获取文字信息
  getPy: function(e) {
    this.setData({
      hidden: false,
      showPy: e.target.id,
    })
  },

  setPy: function(e) {
    this.setData({
      hidden: true,
      scrollTopId: this.data.showPy
    })
  },

  //滑动选择城市
  tMove: function(e) {
    var y = e.touches[0].clientY,
      offsettop = e.currentTarget.offsetTop;

    //判断选择区域,只有在选择区才会生效
    if (y > offsettop) {
      var num = parseInt((y - offsettop) / 12);
      this.setData({
        showPy: this.data._py[num]
      })
    };
  },

  //触发全部开始选择
  tStart: function() {
    this.setData({
      hidden: false
    })
  },

  //触发结束选择
  tEnd: function() {
    this.setData({
      hidden: true,
      scrollTopId: this.data.showPy
    })
  }
})