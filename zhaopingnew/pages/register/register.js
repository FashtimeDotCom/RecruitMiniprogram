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

  submit: function(e) {
    var that = this;
    var identity = getApp().globalData.identity=="面试官"?1:0;
    wx.request({
      url: app.data.apiUrl +'authlogin',
      data: {openid:getApp().globalData.openid,identity:identity,...e.detail.value},
      method: 'get', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        "content-type": "application/json"
      }, // 设置请求的 header
      success: function (res) {
        wx.showToast({
          title: '注册成功',
          icon: 'success',
          duration: 2000,
          mask: true,
        })
        getApp().globalData.userInfo = e.detail.userInfo;
        getApp().globalData.userInfoFlag = true;
        getApp().globalData.modalHidden = true;
        setTimeout(function(){
          wx.switchTab({
            url: '../person/person',
          })
        }, 2000);
        
      },
      fail: function () {
        cosnole.log("错误");
      }
    });
   
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