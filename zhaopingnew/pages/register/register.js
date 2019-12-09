var app = getApp();
Page({
  data: {
    p_identity: "",
    companyFlag: false,
    hunterFlag: false,
    company_information: {
      company_name: "",
      company_address: "",
      company_tel: "",
      company_represent: "",
      company_sex: "",
    },
    hunter_information: {
      hunter_name: "",
      hunter_sex: "",
      hunter_phone: "",
      hunter_birthday: "",
      hunter_school: "",
      hunter_specialty: ""
    }
  },

  companySubmit: function(e) {
    console.log('company_information:,submit事件，携带数据为：', e.detail.value)
    var that = this;
    that.setData({
      company_information: e.detail.value
    });
    console.log(e.detail.userInfo)
    if (e.detail) {
      getApp().globalData.userInfo = e.detail.userInfo;
      getApp().globalData.userInfoFlag = true;
      getApp().globalData.modalHidden = true;
    } else console.log(1234);

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        wx.request({
          url: 'https://www.workoline.com/zhaopin/public/index.php/getsessionkeys',
          data: {
            code: res.code
          },
          method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
          header: {
            "content-type": "application/json"
          }, // 设置请求的 header
          success: function(res) {
            var openid = res.data.openid;
            getApp().globalData.openid = openid;
            var company_information = that.data.company_information;
            if (openid) {
              console.log("openid:" + openid);
              // 通过openid 获取改用户的uid
              wx.request({
                url: 'https://www.workoline.com/zhaopin/public/index.php/authlogin1',
                data: {
                  openid: openid,
                  company_name: company_information.company_name,
                  company_address: company_information.company_address,
                  company_tel: company_information.company_tel,
                  company_represent: company_information.company_represent,
                  company_sex: company_information.company_sex,
                },
                method: 'get', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
                header: {
                  "content-type": "application/json"
                }, // 设置请求的 header
                success: function(res) {
                  console.log(res);
                  // getApp().d.userId = res.data.arr.id; //后台没有传输arr.id所以报错
                },
                fail: function() {
                  cosnole.log("错误");
                }
              });
              // 通过openid 获取改用户的uid  end
            }
          }
        });
      }
    })

    wx.switchTab({
      url: '../person/person',
    })
  },

  onGotUserInfo: function(e) {
    console.log(33333);
    console.log(e.detail.userInfo)
    if (e.detail) {
      getApp().globalData.userInfo = e.detail.userInfo;
      getApp().globalData.userInfoFlag = true;
      getApp().globalData.modalHidden = true;
    } else console.log(1234);
  },

  hunterSubmit: function(e) {
    console.log('hunter_information,submit事件，携带数据为：', e.detail.value)
    var that = this;
    that.setData({
      hunter_information: e.detail.value
    });


    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        wx.request({
          url: 'https://www.workoline.com/zhaopin/public/index.php/getsessionkeys',
          data: {
            code: res.code
          },
          method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
          header: {
            "content-type": "application/json"
          }, // 设置请求的 header
          success: function(res) {
            var openid = res.data.openid;
            getApp().globalData.openid = openid;
            var hunter_information = that.data.hunter_information;
            if (openid) {
              console.log("openid:" + openid);
              // 通过openid 获取改用户的uid
              wx.request({
                url: 'https://www.workoline.com/zhaopin/public/index.php/authlogin',
                data: {
                  openid: openid,
                  hunter_name: hunter_information.hunter_name,
                  hunter_sex: hunter_information.hunter_sex,
                  hunter_phone: hunter_information.hunter_phone,
                  hunter_birthday: hunter_information.hunter_birthday,
                  hunter_school: hunter_information.hunter_school,
                  hunter_specialty: hunter_information.hunter_specialty
                },
                method: 'get', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
                header: {
                  "content-type": "application/json"
                }, // 设置请求的 header
                success: function(res) {
                  console.log(res);
                  // getApp().d.userId = res.data.arr.id; //后台没有传输arr.id所以报错
                },
                fail: function() {
                  cosnole.log("错误");
                }
              });
              // 通过openid 获取改用户的uid  end
            }
          }
        });
      }
    })

    wx.switchTab({
      url: '../person/person',
    })
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
})