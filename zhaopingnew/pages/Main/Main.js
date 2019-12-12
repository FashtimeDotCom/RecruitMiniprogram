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
    company: [{
        id: 0,
        imagesrc: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575954983732&di=816a8f8b150683965bdae5fe5376b7b7&imgtype=0&src=http%3A%2F%2Fi4.hexun.com%2F2018-04-09%2F192792045.jpg",
        detailhead: "阿里巴巴",
        detailcontent: "中国一家提供电子商务在线交易平台的公司，由马云为首的18人于1999年在浙江杭州创立，是全球最大零售商之一",
        salary: "10k-25k",
        job: "UI设计师",
      },
      {
        id: 1,
        imagesrc: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575954994069&di=112a6fa560427eef4e259a2c42b6a8ea&imgtype=0&src=http%3A%2F%2Ft2.focus-img.cn%2Fsh740wsh%2Fzx%2Fwx%2Fce04e5764662fb6e0533b21ab527bf96.jpg",
        detailhead: "碧桂园",
        detailcontent: "控股有限公司是一家房地产公司，创建于1992年，总部位于广东佛山。",
        salary: "12k-23k",
        job: "程序员",
      },
      {
        id: 2,
        imagesrc: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575955014304&di=62c36d05fa1b3e6ad0e2bb19baae7651&imgtype=0&src=http%3A%2F%2Fa4.att.hudong.com%2F11%2F55%2F01200000031945136324556752735.jpg",
        detailhead: "上海汽车集团股份有限公司",
        detailcontent: "是一家汽车制造公司，成立于2004年11月29日，总部位于上海。公司主要业务涵盖整车、零部件的研发、生产、销售、汽车金融等。",
        salary: "22k-27k",
        job: "工程师",
      },
      {
        id: 3,
        imagesrc: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575954854368&di=8b2ec9a3f6cf055d621d14ff8d411c04&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170326%2F8d71a87fefad4016a48c4418cce82686_th.jpeg",
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
  swiperChange: function(e) {
    this.setData({
      current: e.detail.current,
    })
  },
  swiperClick: function(e) {
    let id = e.currentTarget.dataset.id;
    console.log(id);
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

    var that = this;
    wx.request({
      url: 'https://www.workoline.com/zhaopin/public/index.php/fairGet',
      data: {},
      method: 'get', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        "content-type": "application/json"
      }, // 设置请求的 header
      success: function(res) {
        console.log(123);
        console.log(res);
        app.globalData.fair = res.data;
        that.setData({
          fair: res.data,
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
    console.log(tsuerInfo);
    // 页面出现在前台时执行
    that.setData({
      userInfo: tsuerInfo,
      userInfoFlag: tsuserInfoFlag,
      modalHidden: tsmodalHidden
    })

  },
  gohunterlist: function() {
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
  show_jobfair: function() {
    this.setData({
      show_jobfair: false,
      show_company: true
    });
  },
  show_company: function() {
    this.setData({
      show_jobfair: true,
      show_company: false
    });
  },
})