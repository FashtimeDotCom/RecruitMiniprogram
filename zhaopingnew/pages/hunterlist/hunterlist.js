var app = getApp();
Page({
  data: {
    p_identity: "",
    companyFlag: false,
    hunterFlag: false,
    person: [{
        id: 0,
        picture: "../../src/images/头像小集/头像女.png",
        name: "江琳娜",
        sex: "女",
        ident: "学生",
        phone: "15067865",
        school: "温州大学",
        specialty: "计算机科学与技术"
      },
      {
        id: 1,
        picture: "../../src/images/头像小集/头像男.png",
        name: "程瑞",
        sex: "男",
        ident: "学生",
        phone: "15067865",
        school: "温州大学",
        specialty: "计算机科学与技术"
      },
      {
        id: 2,
        picture: "../../src/images/头像小集/微信图片_20191126191155.jpg",
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