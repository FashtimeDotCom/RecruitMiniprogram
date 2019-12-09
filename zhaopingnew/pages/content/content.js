Page({
  data: {
    content: {
      title_img: "../../src/images/7.jpg",
      map_img: "https://pic.cnblogs.com/avatar/540671/20171107171321.png",
      title: "温州大学招聘会",
      _title: "2019",
      textContent: "岗位职责: \nPHP工程师岗位职责\n\n1、计算机相关专业，年以上PHP研发经验；2、熟悉Yii2进行开发，熟悉LNMP环境和缓存性能优化；3、熟悉MySQL数据库、数据结构和算法设计；\n4、熟悉git的基本操作岗位职责: \nPHP工程师岗位职责\n\n1、计算机相关专业，年以上PHP研发经验；\n2、熟悉Yii2进行开发，熟悉LNMP环境和缓存性能优化；\n3、熟悉MySQL数据库、数据结构和算法设计；\n4、熟悉git的基本操作岗位职责: \nPHP工程师岗位职责\n\n1、计算机相关专业，年以上PHP研发经验；\n2、熟悉Yii2进行开发，熟悉LNMP环境和缓存性能优化；\n3、熟悉MySQL数据库、数据结构和算法设计；\n4、熟悉git的基本操作岗位职责: \nPHP工程师岗位职责\n\n1、计算机相关专业，年以上PHP研发经验；\n2、熟悉Yii2进行开发，熟悉LNMP环境和缓存性能优化；\n3、熟悉MySQL数据库、数据结构和算法设计；\n4、熟悉git的基本操作"
    }

  },
  onLoad: function(options) {
    var that = this;
    that.setData({
      isIpx: getApp().globalData.isIpx
    });
    // 在这里获取招聘会明细信息
  },
  goToDetail: function() {
    wx.showToast({
      title: '地图图片详情',
    })
  }
})