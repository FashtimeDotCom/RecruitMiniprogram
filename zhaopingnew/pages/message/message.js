// pages/message/message.js
//var app = getApp()
const app = getApp();
const GenerateTestUserSig = require("../video_call_footage/debug/GenerateTestUserSig.js");
const friends = require('./list-mock-data.js')
import TIM from 'tim-wx-sdk';
import COS from "cos-wx-sdk-v5";
let options = {
  SDKAppID: 1400286118 // 接入时需要将0替换为您的即时通信应用的 SDKAppID
};
// 创建 SDK 实例，TIM.create() 方法对于同一个 SDKAppID 只会返回同一份实例
let tim = TIM.create(options); // SDK 实例通常用 tim 表示
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tapTime: '',
    roomID: '', // [必选]房间号，可以由您的服务指定
    userID: '', // [必选]用户 ID，可以由您的服务指定，或者使用小程序的 openid
    // userSig: '', // [必选]身份签名，需要从自行搭建的签名服务获取
    // sdkAppID: '', // [必选]开通实时音视频服务创建应用后分配的 sdkAppID
    template: 'bigsmall', // [必选]标识组件使用的界面模版，组件内置了 bigsmall，float，grid 三种布局

    message: "",
    data: [],
    send_message: "",
    send_object: "",
    login_object: "",
    filepath:null,
    filename:null,
    friends: friends.list
  },
  gotoChat(event) {
    const currentUser = event.currentTarget.dataset.user;
    wx.navigateTo({
      url: '../chat/chat?nickname=' + currentUser.nickname
    })
  },
  go_video_call: function(e) {
    //先从服务端获取一个房间号getedroomid
    // wx.request({
    //   url: 'test.php', //仅为示例，并非真实的接口地址
    //   data: {
    //     create_room: app.globalData.openid,//向服务器发送创建房间者的用户id
    //   },
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   method: 'get',
    //   success(res) {
    //     console.log(res.data.getedroomid)//从服务器返回创建的roomid
    //     app.globalData.getedroomid=res.data.getedroomid
    //   }
    // })
    // wx.navigateTo({
    //   url: '../video_call_footage/video_call/video_call',
    // })

    var self = this;
    var nowTime = new Date();
    self.data.userID = new Date().getTime().toString(16);
    var userSig = GenerateTestUserSig.genTestUserSig(self.data.userID);
    console.log("获取getedroomid" + app.globalData.getedroomid); //从服务器上获取的getedroomid在此替换掉
    var url = `../video_call_footage/room/room?roomID=${app.globalData.getedroomid}&template=${self.data.template}&sdkAppID=${userSig.sdkAppID}&userId=${self.data.userID}&userSig=${userSig.userSig}`; //self.data.roomNo

    wx.navigateTo({
      url: url
    });

    wx.showToast({
      title: '进入房间',
      icon: 'success',
      duration: 1000
    })

    self.setData({
      'tapTime': nowTime
    });
  },

  input_message: function(e) {
    this.setData({
      send_message: e.detail.value
    });
  },
  input_send_object: function(e) {
    this.setData({
      send_object: e.detail.value
    });
  },
  send_payload: function(e) {
    // 发送文本消息，Web 端与小程序端相同
    // 1. 创建消息实例，接口返回的实例可以上屏
    var ms = this.data.send_message
    var tobj = this.data.send_object
    let message = tim.createTextMessage({
      to: tobj,
      conversationType: TIM.TYPES.CONV_C2C,
      payload: {
        text: ms
      }
    });
    // 2. 发送消息
    let promise = tim.sendMessage(message);
    promise.then(function(imResponse) {
      // 发送成功
      console.log("send success!");
      console.log(imResponse);
    }).catch(function(imError) {
      // 发送失败
      console.warn('sendMessage error:', imError);
    });
  },


  flogout: function(e) {
    let promise = tim.logout();
    promise.then(function(imResponse) {
      console.log("logoutsuccess"); // 登出成功
      console.log(imResponse.data); // 登出成功
    }).catch(function(imError) {
      console.warn('logout error:', imError);
    });
    this.setData({
      data: null
    })
  },

  upLoadAction:function(e) {
    var that=this;
    wx.chooseMessageFile({
      count: 1,
      type: 'file',
      success(res) {
        const tempFilePaths = res.tempFiles
        console.log('选择', res)
        console.log(tempFilePaths[0].name)
        that.setData({
          filename: tempFilePaths[0].name,
          filepath: tempFilePaths[0].path
        })
      }
    })
  },
  
  upLoadConfirm:function(e){
    const tempFilePaths = this.data.filepath;
    wx.uploadFile({
      url: 'https://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
      filePath: tempFilePaths[0],
      name: 'file',
      formData: {
        'user': app.globalData.userid
      },
      success(res) {
        console.log("success"+res.data)
        //do something
      }
    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      data: app.globalData.data
    });
    var that = this;
    let onMessageReceived = function(event) {
      // var data = app.globalData.data.data;
      // event.data - 存储 Message 对象的数组 - [Message]
      console.log("收到即时消息！");
      console.log(event.data);
      console.log(event.data[0].payload.text);
      app.globalData.data.push(event.data[0].payload.text);
      that.setData({
        data: app.globalData.data
      });
    };
    tim.on(TIM.EVENT.MESSAGE_RECEIVED, onMessageReceived);
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