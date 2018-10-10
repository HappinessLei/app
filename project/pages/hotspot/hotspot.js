// pages/hotspot/hotspot.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotspotInfo: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'https://test.sungohealth.com/wxjson/hotspot.json',
      success: function (res) {
        var data = res.data.hotspot;
        console.log(data)
        that.setData({
          hotspotInfo: data
        });
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },
  onDetailTap: function (event) {
    var that = this;
    var id = event.currentTarget.dataset.id;
    var link = event.currentTarget.dataset.link;
    var tmid = event.currentTarget.dataset.tmid;
    var catid = event.currentTarget.dataset.catid;
    var infoid = event.currentTarget.dataset.infoid;
    console.log(link);
    console.log(tmid);
    console.log(catid);
    console.log(infoid);
    wx.navigateTo({
      url: 'hotspot-detail/hotspot-detail?id=' + id + "&tmid=" + tmid + "&catid=" + catid + "&infoid=" + infoid + "&link=" + link,
    });
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})