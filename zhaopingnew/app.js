//app.js

App({
  globalData: {
    identity: '游客',
    userInfo: "",
    getedroomid: "111",
    userInfo: null,
    openid: null,
    userInfoFlag: false,
    modalHidden: false,
    usersig: null,
    userid: null,
    city: '获取地理位置',
    data: [],
    sceneNum: '',
    isIpx: false
  },
  onLaunch: function(options) {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    let that = this;
    // 将获取的场景值保存到全局变量
    that.globalData.sceneNum = options.scene;
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // 获取手机信息
    wx.getSystemInfo({
      success: function (res) {
        let model = res.model.substring(0, res.model.indexOf("X")) + "X";
        if (model == 'iPhone X') {
          that.globalData.isIpx = true //判断是否为iPhone X 默认为值false，iPhone X 值为true
        }
      }
    })

    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['globalData.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        } else if (res.authSetting['globalData.userInfo'] === false) { // 授权弹窗被拒绝
          wx.openSetting({
            success: res => {
              console.log(res)
            },
            fail: res => {
              console.log(res)
            }
          })
        } else { // 没有弹出过授权弹窗
          wx.getUserInfo({
            success: res => {
              console.log(res)
              console.log(res.userInfo)
              this.globalData.userInfo = res.userInfo
              this.globalData.userInfoFlag = true;
              this.globalData.modalHidden = true;
              // this.setUserInfoAndNext(res)
            },
            fail: res => {
              console.log(res)
              wx.openSetting({
                success: res => {
                  console.log(res)
                },
                fail: res => {
                  console.log(res)
                }
              })
            }
          })
        }
      }
    })
  },


  onShow: function() {

  },

});

import TIM from 'tim-wx-sdk';
import COS from "cos-wx-sdk-v5";

let options = {
  SDKAppID: 1400286118 // 接入时需要将0替换为您的即时通信应用的 SDKAppID
};
// 创建 SDK 实例，TIM.create() 方法对于同一个 SDKAppID 只会返回同一份实例
let tim = TIM.create(options); // SDK 实例通常用 tim 表示
tim.setLogLevel(1);
// 注册 COS SDK 插件
tim.registerPlugin({
  'cos-wx-sdk': COS
});

// 监听事件，例如：
tim.on(TIM.EVENT.MESSAGE_RECEIVED, function(event) {
  // 收到推送的单聊、群聊、群提示以及群系统通知的新消息，可通过遍历 event.data 获取消息列表数据并渲染到页面
  // event.name - TIM.EVENT.MESSAGE_RECEIVED
  // event.data - 存储 Message 对象的数组 - [Message]
});

tim.on(TIM.EVENT.CONVERSATION_LIST_UPDATED, function(event) {
  // 收到会话列表更新通知，可通过遍历 event.data 获取会话列表数据并渲染到页面
  // event.name - TIM.EVENT.CONVERSATION_LIST_UPDATED
  // event.data - 存储 Conversation 对象的数组 - [Conversation]
});

tim.on(TIM.EVENT.GROUP_LIST_UPDATED, function(event) {
  // 收到群组列表更新通知，可通过遍历 event.data 获取群组列表数据并渲染到页面
  // event.name - TIM.EVENT.GROUP_LIST_UPDATED
  // event.data - 存储 Group 对象的数组 - [Group]
});

tim.on(TIM.EVENT.GROUP_SYSTEM_NOTICE_RECEIVED, function(event) {
  // 收到新的群系统通知
  // event.name - TIM.EVENT.GROUP_SYSTEM_NOTICE_RECEIVED
  // event.data.type - 群系统通知的类型，详情请参见 GroupSystemNoticePayload 的 operationType 枚举值说明
  // event.data.message - Message 对象，可将 event.data.message.content 渲染到到页面
});

tim.on(TIM.EVENT.PROFILE_UPDATED, function(event) {
  // 收到自己或好友的资料变更通知
  // event.name - TIM.EVENT.PROFILE_UPDATED
  // event.data - 存储 Profile 对象的数组 - [Profile]
});

tim.on(TIM.EVENT.BLACKLIST_UPDATED, function(event) {
  // 收到黑名单列表更新通知
  // event.name - TIM.EVENT.BLACKLIST_UPDATED
  // event.data - 存储 userID 的数组 - [userID]
});

tim.on(TIM.EVENT.ERROR, function(event) {
  // 收到 SDK 发生错误通知，可以获取错误码和错误信息
  // event.name - TIM.EVENT.ERROR
  // event.data.code - 错误码
  // event.data.message - 错误信息
});

tim.on(TIM.EVENT.SDK_READY, function(event) {
  // 收到离线消息和会话列表同步完毕通知，接入侧可以调用 login 等 API
  // event.name - TIM.EVENT.SDK_READY
});

tim.on(TIM.EVENT.SDK_NOT_READY, function(event) {
  // 收到 SDK 进入 not ready 状态通知，此时 SDK 无法正常工作
  // event.name - TIM.EVENT.SDK_NOT_READY
});

tim.on(TIM.EVENT.KICKED_OUT, function(event) {
  // 收到被踢下线通知
  // event.name - TIM.EVENT.KICKED_OUT
  // event.data.type - 被踢下线的原因，例如 TIM.TYPES.KICKED_OUT_MULT_ACCOUNT 多账号登录被踢
});