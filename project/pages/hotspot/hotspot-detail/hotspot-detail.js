// pages/hotspot/hotspot-detail/hotspot-detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    link:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    console.log(options)
    var tmid = options.tmid;
    var catid = options.catid;
    var infoid = options.infoid;
    var jumplink = options.link;
    console.log(tmid)
    console.log(catid)
    console.log(infoid)
    console.log(jumplink)
    if (catid != ""){
      jumplink = jumplink + "?tm_id=" + tmid + "&cat_id=" + catid + "&info_id=" + infoid;
    } else if (catid == "" && tmid != ""){
      jumplink = jumplink + "?tm_id=" + tmid;
    }
    if (catid == "" && tmid == ""){
      jumplink = jumplink;
    }
    console.log(jumplink)
    that.setData({
      link: jumplink,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
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