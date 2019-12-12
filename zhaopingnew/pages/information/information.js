var app = getApp();
Page({
  data: {
    openid:null,
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
      var openid = getApp().globalData.openid;

      wx.request({
        url: 'https://www.workoline.com/zhaopin/public/index.php/authlogin1',
        data: {
          openid: openid,
        },
        method: 'get', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        header: {
          "content-type": "application/json"
        }, // 设置请求的 header
        success: function (res) {
          console.log(res);
          // getApp().d.userId = res.data.arr.id; //后台没有传输arr.id所以报错
        },
        fail: function () {
          cosnole.log("错误");
        }
      });






    }
    if (this.data.p_identity == "面试者") {
      this.setData({
        companyFlag: true,
        hunterFlag: false,
      });
      wx.setNavigationBarTitle({
        title: '个人信息'
      })
      var openid = getApp().globalData.openid;

      wx.request({
        url: 'https://www.workoline.com/zhaopin/public/index.php/userInfo_get',
        data: {
          user_id: openid,
        },
        method: 'get', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        header: {
          "content-type": "application/json"
        }, // 设置请求的 header
        success: function (res) {
          console.log(res);
          // getApp().d.userId = res.data.arr.id; //后台没有传输arr.id所以报错
        },
        fail: function () {
          cosnole.log("错误");
        }
      });


    }




  },


})