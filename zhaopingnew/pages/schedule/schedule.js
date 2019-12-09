var app = getApp();
Page({
  data: {
    p_identity: "",
    companyFlag: false,
    hunterFlag: false,
    color: [{
        top: "#e4c4b6",
        round: "#e1916d",
      },
      {
        top: "#E8D18D",
        round: "#D9A20B",
      },
      {
        top: "#75C1D5",
        round: "#4C94B9",
      },
    ],
    person: [{
        id: 0,
        color: {
          top: null,
          round: null,
        },
        picture: "../../src/images/头像小集/头像女.png",
        name: "江琳娜",
        sex: "女",
        ident: "学生",
        detail: "我是个活泼开朗的孩子。我是个活泼开朗的孩子。我是个活泼开朗的孩子。我是个活泼开朗的孩子。我是个活泼开朗的孩子。我是个活泼开朗的孩子。我是个活泼开朗的孩子。我是个活泼开朗的孩子。我是个活泼开朗的孩子。我是个活泼开朗的孩子。我是个活泼开朗的孩子。我是个活泼开朗的孩子。我是个活泼开朗的孩子。我是个活泼开朗的孩子。我是个活泼开朗的孩子。我是个活泼开朗的孩子。"
      },
      {
        id: 1,
        color: {
          top: null,
          round: null,
        },
        picture: "../../src/images/头像小集/头像男.png",
        name: "程瑞",
        sex: "男",
        ident: "学生",
        detail: "我也是个活泼开朗的孩子。我是个活泼开朗的孩子。我是个活泼开朗的孩子。我是个活泼开朗的孩子。我是个活泼开朗的孩子。我是个活泼开朗的孩子。我是个活泼开朗的孩子。我是个活泼开朗的孩子。我是个活泼开朗的孩子。我是个活泼开朗的孩子。我是个活泼开朗的孩子。我是个活泼开朗的孩子。我是个活泼开朗的孩子。我是个活泼开朗的孩子。我是个活泼开朗的孩子。我是个活泼开朗的孩子。"
      },
      {
        id: 2,
        color: {
          top: null,
          round: null,
        },
        picture: "../../src/images/头像小集/微信图片_20191126191155.jpg",
        name: "西瓜",
        sex: "男",
        ident: "学生",
        detail: "我不是个活泼开朗的孩子。我是个活泼开朗的孩子。我是个活泼开朗的孩子。我是个活泼开朗的孩子。我是个活泼开朗的孩子。我是个活泼开朗的孩子。我是个活泼开朗的孩子。我是个活泼开朗的孩子。我是个活泼开朗的孩子。我是个活泼开朗的孩子。我是个活泼开朗的孩子。我是个活泼开朗的孩子。我是个活泼开朗的孩子。我是个活泼开朗的孩子。我是个活泼开朗的孩子。我是个活泼开朗的孩子。"
      }
    ],
    company: [{
        id: 0,
        color: {
          top: null,
          round: null,
        },
      imagesrc: "../../src/images/阿里巴巴logo.jpg",
        detailhead: "阿里巴巴",
        detailcontent: "中国一家提供电子商务在线交易平台的公司，由马云为首的18人于1999年在浙江杭州创立，是全球最大零售商之一",
      },
      {
        id: 1,
        color: {
          top: null,
          round: null,
        },
        imagesrc: "../../src/images/碧桂园.jpg",
        detailhead: "碧桂园",
        detailcontent: "控股有限公司是一家房地产公司，创建于1992年，总部位于广东佛山。",
      },
      {
        id: 2,
        color: {
          top: null,
          round: null,
        },
        imagesrc: "../../src/images/上海汽车集团股份有限公司.jpg",
        detailhead: "上海汽车集团股份有限公司",
        detailcontent: "是一家汽车制造公司，成立于2004年11月29日，总部位于上海。公司主要业务涵盖整车、零部件的研发、生产、销售、汽车金融等。",
      },
      {
        id: 3,
        color: {
          top: null,
          round: null,
        },
        imagesrc: "../../src/images/中国工商银行.jpg",
        detailhead: "中国工商银行",
        detailcontent: "（INDUSTRIAL AND COMMERCIAL BANK OF CHINA）是一家从事存贷款、结算与现金管理等业务的金融机构，成立于1984年1月1日，总部位于北京。[1]",
      },
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
    };
    var that = this;
    for (var i = 0; i < that.data.person.length; i++) {
      var pst = "person[" + i + "].color.top";
      var colort = that.data.color[i % 3].top;
      that.setData({
        [pst]: colort,
      });
      var psr = "person[" + i + "].color.round";
      var colorr = that.data.color[i % 3].round;
      that.setData({
        [psr]: colorr,
      });
    }

    for (var i = 0; i < that.data.company.length; i++) {

      var cst = "company[" + i + "].color.top";
      var colort = that.data.color[i % 3].top;
      that.setData({
        [cst]: colort,
      });
      var csr = "company[" + i + "].color.round";
      var colorr = that.data.color[i % 3].round;
      that.setData({
        [csr]: colorr,
      });
    }
  },
})