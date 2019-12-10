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
      picture: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575954710685&di=da53055c84c24245fcb92b63ebb441ed&imgtype=0&src=http%3A%2F%2Fpic2.zhimg.com%2F50%2Fv2-1c3bd9fe6c6a28c5ca3a678549dfde28_hd.jpg",
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
        picture: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575954710684&di=d050a3c5ffd31df2da09d4e403c90b7a&imgtype=0&src=http%3A%2F%2Fpic1.zhimg.com%2F50%2Fv2-bf96fb79c5290318bfb4b3f70c8f88e4_hd.jpg",
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
        picture: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=166011432,2730618898&fm=26&gp=0.jpg",
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
      imagesrc: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575954823059&di=50449a9efd1d98ba4ece9f1d42e99f33&imgtype=0&src=http%3A%2F%2Fi4.hexun.com%2F2018-04-09%2F192792045.jpg",
        detailhead: "阿里巴巴",
        detailcontent: "中国一家提供电子商务在线交易平台的公司，由马云为首的18人于1999年在浙江杭州创立，是全球最大零售商之一",
      },
      {
        id: 1,
        color: {
          top: null,
          round: null,
        },
        imagesrc: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575954804827&di=47815bd5b8deebffa81506b6e599b016&imgtype=0&src=http%3A%2F%2Ft2.focus-img.cn%2Fsh740wsh%2Fzx%2Fwx%2Fce04e5764662fb6e0533b21ab527bf96.jpg",
        detailhead: "碧桂园",
        detailcontent: "控股有限公司是一家房地产公司，创建于1992年，总部位于广东佛山。",
      },
      {
        id: 2,
        color: {
          top: null,
          round: null,
        },
        imagesrc: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576549561&di=2ccce7083d9a8f1d9aea27ec0d818877&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.boruisz.com%2Fimages%2Foa2s44linfwwoltdn5wq%2Ft012686099c9bca3ebe.jpg",
        detailhead: "上海汽车集团股份有限公司",
        detailcontent: "是一家汽车制造公司，成立于2004年11月29日，总部位于上海。公司主要业务涵盖整车、零部件的研发、生产、销售、汽车金融等。",
      },
      {
        id: 3,
        color: {
          top: null,
          round: null,
        },
        imagesrc: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575954854368&di=8b2ec9a3f6cf055d621d14ff8d411c04&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170326%2F8d71a87fefad4016a48c4418cce82686_th.jpeg",
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