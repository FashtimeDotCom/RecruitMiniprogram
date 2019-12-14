Page({
  data: {
    id: null,
    information_detail: null
  },
  gosendresume:function(){
    wx.navigateTo({
      url: '../sendresume/sendresume',
    })
  },
  onLoad: function (options) {
    var that = this;
    that.setData({
      id: options.id
    })
    var that = this;
    wx.request({
      url: 'https://www.workoline.com/zhaopin/public/index.php/information_detail',
      data: {
        information_id: that.data.id,
      },
      method: 'get', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        "content-type": "application/json"
      }, // 设置请求的 header
      success: function (res) {
        console.log(123);
        console.log(res);
        that.setData({
          information_detail: res.data,
        })
      },
      fail: function () {
        cosnole.log("错误");
      }
    });
  },
  
})