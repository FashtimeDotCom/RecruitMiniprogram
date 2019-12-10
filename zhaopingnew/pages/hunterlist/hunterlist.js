var app = getApp();
Page({
  data: {
    p_identity: "",
    companyFlag: false,
    hunterFlag: false,
    person: [{
        id: 0,
      picture: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575954140366&di=3c69f9a565c5c3d9fa3060ba5ca6e41f&imgtype=0&src=http%3A%2F%2Fpic2.zhimg.com%2F50%2Fv2-1c3bd9fe6c6a28c5ca3a678549dfde28_hd.jpg",
        name: "江琳娜",
        sex: "女",
        ident: "学生",
        phone: "15067865",
        school: "温州大学",
        specialty: "计算机科学与技术"
      },
      {
        id: 1,
        picture: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575954151817&di=41b9bf6c2d81e67a96840fc09aae04e5&imgtype=0&src=http%3A%2F%2Fpic4.zhimg.com%2F50%2Fv2-2a62bc350375166e53cc9d7cbaeed73e_hd.jpg",
        name: "程瑞",
        sex: "男",
        ident: "学生",
        phone: "15067865",
        school: "温州大学",
        specialty: "计算机科学与技术"
      },
      {
        id: 2,
        picture: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575954151814&di=1ddc109e101e244781ad22ce2371f672&imgtype=0&src=http%3A%2F%2Fpic3.zhimg.com%2F50%2Fv2-5b0251b83cd145e2d6231cefd9865413_hd.jpg",
        name: "西瓜",
        sex: "男",
        ident: "学生",
        phone: "15067865",
        school: "温州大学",
        specialty: "计算机科学与技术"
      }
    ]
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