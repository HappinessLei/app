// pages/detail/detail.js
var WxParse = require('../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    title: '', 
    img: '',
    time:"",
    source:"",
    article:""
  },
  onShow:function(){
    wx.showShareMenu({
      withShareTicket: true
    })
  },
  onLoad: function (options) {
    this.setData({
      id: options.id,
      title: options.title,
      img: options.img,
      time: options.time,
      source: options.source,
      article: options.article
    })
    var article = options.article;
    var that = this;
    console.log(article)
    WxParse.wxParse('article', 'html', article, that, 5);
    wx.setNavigationBarTitle({
      title: that.data.title
    });
    // var id = options.id;
    // var that = this;
    // wx.request({
    //   url: 'https://test.sungohealth.com/wxjson/logo_gh.png',
    //   success:function(res){
    //     var detail = res.data.data;
    //     console.log(detail)
    //     var article = detail.news.content;
    //     WxParse.wxParse('article', 'html', article, that, 5);
    //     that.setData({
    //       detail: detail
    //     });
    //   }
    // })
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: "中国一带一路网",
      imageUrl: "https://test.sungohealth.com/wxjson/logo_gh.png",
      desc: "中国一带一路网第一个微信小程序",
    }
  }
})