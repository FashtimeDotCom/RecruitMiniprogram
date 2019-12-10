Page({
  data: {
    content: {
      title_img: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3956403670,3117837895&fm=26&gp=0.jpg",
      map_img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575954644305&di=1ba672a04b28a1a6ab6af2a64c463b1c&imgtype=0&src=http%3A%2F%2Fwww.xit.edu.cn%2Fzsw%2Fjypd%2FUploadFiles_6594%2F201710%2F2017102008330928.png",
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