var app = getApp();
var i = 0;
import TIM from 'tim-wx-sdk';
import COS from "cos-wx-sdk-v5";
let options = {
  SDKAppID: 1400286118 // 接入时需要将0替换为您的即时通信应用的 SDKAppID
};
// 创建 SDK 实例，TIM.create() 方法对于同一个 SDKAppID 只会返回同一份实例
let tim = TIM.create(options); // SDK 实例通常用 tim 表示
Page({
  data: {
    // data: [],
    p_identity: "",
    companyFlag: false,
    hunterFlag: false,
  },
  onGotUserInfo: function(e) {
    console.log(e.detail.userInfo)
    if (e.detail.userInfo) {
      getApp().globalData.userInfo = e.detail.userInfo;
      getApp().globalData.userInfoFlag = true;
      getApp().globalData.modalHidden = true;
      wx.navigateTo({
        url: '../register/register',
      })
    }
  },
  input: function(e) {
    app.globalData.userid = e.detail.value;
  },
  goto_upload_ps_info: function(e) {
    wx.navigateTo({
      url: '../Upload_personal_information/Upload_personal_information',
    })
  },
  tim_login: function(e) {
    wx.request({
      url: 'https://www.workoline.com/zhaopin/public/index.php/index', //仅为示例，并非真实的接口地址
      data: {
        id: app.globalData.userid
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: 'get',
      success(res) {
        console.log(res) //从服务器返回
        console.log("你好！" + app.globalData.userid);
        app.globalData.usersig = res.data.split("verify ")[0];
        let promise = tim.login({
          userID: app.globalData.userid,
          userSig: app.globalData.usersig
        });
        promise.then(function(imResponse) {
          console.log(imResponse.data); // 登录成功


          var that = this;
          // var data = app.globalData.data.data;
          let onConversationListUpdated = function(event) {
            console.log("收到离线消息！");
            console.log(event.data.length);
            for (i = 0; i < event.data.length; i++) {
              console.log(event.data[i]);
              console.log(event.data[i].lastMessage.messageForShow); // 包含 Conversation 实例的数组
              app.globalData.data.push(event.data[i].lastMessage.messageForShow);
              // app.globalData.data.data=data;
              // that.setData({
              //   data: app.globalData.data
              // });
            }
          };
          tim.on(TIM.EVENT.CONVERSATION_LIST_UPDATED, onConversationListUpdated);
          tim.on(TIM.EVENT.SDK_READY, function(event) {
            if (event.name == 'sdkStateReady') {
              console.log("sdkStateReady");
              tim.off(TIM.EVENT.CONVERSATION_LIST_UPDATED)
            }
          });
        }).catch(function(imError) {
          console.warn('login error:', imError); // 登录失败的相关信息
        });
      }
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

  onShow: function(options) {
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
  }
})