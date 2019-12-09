var app = getApp();
const httputil = require("./httputil.js")
Page({
  data: {
    name: "",
    sex: "",
    photos: "../../src/images/plus.png",
    photos2: "../../src/pages/images/plus.png",
    photos3: "../../src/pages/images/plus.png"
  },


  information_submit: function(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)

    var photo = [this.data.photos, this.data.photos2, this.data.photos3,this.data.name,this.data.sex]
    httputil.send_photo(photo, function (res) {
      //成功回调函数  你随便做操作
    })

    wx.switchTab({
      url: '../person/person',
    })
  },


  touchphoto: function(e) {
    var that = this
    var no = e.currentTarget.id;
    if (no == "1") {
      wx.chooseImage({
        count: 1, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function(res) {
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          var tempFilePaths = res.tempFilePaths
          that.setData({
            photos: tempFilePaths
          })
          console.log(that.data.photos)
        }
      })
    } else if (no == "2") {
      wx.chooseImage({
        count: 1, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function(res) {
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          var tempFilePaths = res.tempFilePaths
          that.setData({
            photos2: tempFilePaths
          })
          console.log(that.data.photos)
        }
      })
    } else if (no == "3") {
      wx.chooseImage({
        count: 1, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function(res) {
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          var tempFilePaths = res.tempFilePaths
          that.setData({
            photos3: tempFilePaths
          })
          console.log(that.data.photos)
        }
      })
    }
  }
})