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
    ],
    company: [{
        id: 0,
      imagesrc: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575954420581&di=1bf813f3c4d8ddd1fa048c4a9d54dbe8&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20191119%2F9e3830c7ced54d41ac6dee2e0dfe1269.jpeg",
        detailhead: "阿里巴巴",
        detailcontent: "中国一家提供电子商务在线交易平台的公司，由马云为首的18人于1999年在浙江杭州创立，是全球最大零售商之一",
      },
      {
        id: 1,
        imagesrc: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575954450980&di=64f49c5332a9f87bd0e54f457c23357d&imgtype=0&src=http%3A%2F%2Fimg1.gtimg.com%2Fhouse%2Fpics%2Fhv1%2F243%2F247%2F2085%2F135640353.jpg",
        detailhead: "碧桂园",
        detailcontent: "控股有限公司是一家房地产公司，创建于1992年，总部位于广东佛山。",
      },
      {
        id: 2,
        imagesrc: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575954519814&di=cbe02bd228c65b0b9b9e4fa2cfaf10e8&imgtype=jpg&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180607%2Fcaef566c46474ceab93438e03cb09249.jpeg",
        detailhead: "上海汽车集团股份有限公司",
        detailcontent: "是一家汽车制造公司，成立于2004年11月29日，总部位于上海。公司主要业务涵盖整车、零部件的研发、生产、销售、汽车金融等。",
      },
      {
        id: 3,
        imagesrc: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575954538248&di=be1a0fd95577a69e060f5411787ca82e&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170326%2F8d71a87fefad4016a48c4418cce82686_th.jpeg",
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
    }
  },
})