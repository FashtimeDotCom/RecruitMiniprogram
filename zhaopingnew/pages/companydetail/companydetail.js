Page({
  data: {
    id: null,
  },
  gosendresume:function(){
    wx.navigateTo({
      url: '../sendresume/sendresume',
    })
  },
  onLoad: function (options) {
    this.setData({
      id: options.id
    })
    console.log(this.data.id);
  },
})