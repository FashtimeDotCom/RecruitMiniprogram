Page({
  data: {
    p_identity: null,
    companyFlag: true,
    hunterFlag: true,
    title: "已收简历",
    information_list:null,
    array: [{
      'name': 'ui设计师/20人',
      'time': '11-22 19:30:01'
    }, {
      'name': '电子商务工程师/15人',
      'time': '11-22 19:30:01'
    }, {
      'name': '。。。',
      'time': '11-22 19:30:01'
    }],
    isSend: true,
  },
  onLoad: function(options) {
    var that=this;
    wx.request({
      url: 'https://www.workoline.com/zhaopin/public/index.php/information_list',
      data: {
        hr_id:1,
      },
      method: 'get', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        "content-type": "application/json"
      }, // 设置请求的 header
      success: function(res) {
        console.log(123);
        console.log(res);
        that.setData({
          information_list: res.data,
        })
        // getApp().d.userId = res.data.arr.id; //后台没有传输arr.id所以报错
      },
      fail: function() {
        cosnole.log("错误");
      }
    });
  }
})