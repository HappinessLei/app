
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onLoad: function () {
    var that = this;
    wx.request({
      url: 'https://test.sungohealth.com/wxjson/bgImage.json',
      success: function (res) {
        var data = res.data;
        // 取一个随机数，让图片动态显示
        var n = Math.round(Math.random() * 8);
        // 处理获取的url
        data.images[n].url = data.images[n].url.replace('1920x1080', '1080x1920');
        var url = 'https://test.sungohealth.com' + data.images[n].url;
        console.log(data.images[n].url)
        // 处理获取的版权信息
        var copyright = '© ' + data.images[n].copyright.split('，')[0];
        that.setData({
          url: url,
          copyright: copyright
        });
      }
    });
    wx.login({
      success: function (res) {
        if (res.code) {
          wx.getUserInfo({
            success: function (res) {
              var userInfo = res.userInfo
              var nickName = userInfo.nickName
              var avatarUrl = userInfo.avatarUrl
              that.setData({
                nickName: nickName,
                avatarUrl: avatarUrl
              });
            }
          })
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    });
  },
  onTap: function () {
    wx.switchTab({
      url: '../news/news',
    });
  },
  onshow: function () {
    var that = this;
    wx.request({
      url: 'https://test.sungohealth.com/wxjson/bgImage.json',
      success: function (res) {
        var data = res.data;
        // 取一个随机数，让图片动态显示
        var n = Math.floor(Math.random() * 8);
        // 处理获取的url
        data.images[n].url = data.images[n].url.replace('1920x1080', '1080x1920');
        var url = 'https://test.sungohealth.com' + data.images[n].url;
        // 处理获取的版权信息
        var copyright = '© ' + data.images[n].copyright.split('，')[0];
        that.setData({
          url: url,
          copyright: copyright
        });
      }
    });
  },
})
