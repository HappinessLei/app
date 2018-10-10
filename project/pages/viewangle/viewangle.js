//获取应用实例
const app = getApp()

Page({
  onReady: function (res) {
    this.videoContext = wx.createVideoContext('myVideo')
  },
  data: {
    videos:[],
    currentTabsIndex: 0,
    x: 0,
    y: 0,
    hidden: true,
    toHide: false,
    shareImgSrc: "",
    shareState: "",
    isShow: "",
    qrcode_temp: "",
    qrCodePath:""
  },
  
  onLoad:function(){
    var that = this;
    wx.request({
      url: 'https://test.sungohealth.com/wxjson/video.json',
      header: {
        'Content-Type': 'application/json'
      },
      success:function(res){
        console.log(res.data.videos)
        that.setData({
          videos: res.data.videos,
        })
      }
    })
  },
  
  onShareApp:function(){
    this.onShareAppMessage()
  },
  onShareAppMessage: function (){
    return {
      title:'中国一带一路新闻网',
      imageUrl: "",
      path:''
    }
  }
  // jumpContent: function (e) {
  //   console.log(e)
  //   var that = this;
  //   var id = e.currentTarget.dataset.id;
  //   console.log(id);
  //   wx.navigateTo({
  //     url: "../viewangle/video_detail/video_detail?id=" + id,
  //   });
  // }

  //分享朋友圈代码
  ,canvasIdErrorCallback(e) {
    console.error(e.detail.errMsg)
  },
  downloadHeroImage: function (event) {
    var that = this;
    var myIndex = event.currentTarget.dataset['index'];
    console.log(myIndex)
    that.setData({
      currentTabsIndex: myIndex
    })
    that.setData({ toHide: false })
    wx.showLoading({
      title: '正在生成图片...',
    });
    wx.downloadFile({
      url: app.globalData.userInfo.avatarUrl,
      success: function (res1) {

        //缓存头像图片
        that.setData({
          portrait_temp: res1.tempFilePath
        })
        //缓存canvas绘制小程序二维码
        wx.downloadFile({
          url: 'https://test.sungohealth.com/wxjson/applet.jpg',
          success: function (res) {
            console.log('二维码：' + res.tempFilePath)
            //缓存二维码
            that.setData({
              qrcode_temp: res.tempFilePath
            })
            let mindex = that.data.currentTabsIndex
            console.log(mindex)
            var imgs = that.data.videos[mindex].img;
            //缓存分享图片
            wx.downloadFile({
              url: imgs,
              success: function (res2) {
                console.log('图片' + res2.tempFilePath)
                //缓存二维码
                that.setData({
                  qrCodePath: res2.tempFilePath
                })
                console.log('开始绘制图片')
                that.createDrawImage(myIndex);
                setTimeout(() => {
                  wx.hideLoading();
                  that.canvasToImage()
                }, 200);
              }
            })
          }
        })
      }
    })
  },
  createDrawImage(myIndex) {
    var that = this;
    // 拼图
    const imgCtx = wx.createCanvasContext("imgCanvas")
    imgCtx.clearRect(0, 0, 300, 365)
    imgCtx.setFillStyle('white')
    imgCtx.fillRect(0, 0, 300, 365);
    
    var titles = that.data.videos[myIndex].title;
    var imgPath = that.data.qrCodePath;
    var appLetImgPath = that.data.qrcode_temp;
    imgCtx.drawImage(imgPath, 0, 0, 300, 190);
    
    // 绘入文字和字号
    imgCtx.setFontSize(18)
    imgCtx.setFillStyle('#333')
    let str = titles
    // imgCtx.fillText(str,10,200)
    var lineWidth = 0
    var canvasWidth = 250;//计算canvas的宽度
    var initHeight = 230;//绘制字体距离canvas顶部初始的高度
    var lastSubStrIndex = 0; //每次开始截取的字符串的索引
    for (let i = 0; i < str.length; i++) {
      lineWidth += imgCtx.measureText(str[i]).width;
      if (lineWidth > canvasWidth) {
        imgCtx.fillText(str.substring(lastSubStrIndex, i), 20, initHeight);//绘制截取部分
        initHeight += 22;//22为字体的高度
        lineWidth = 0;
        lastSubStrIndex = i;
      }
      if (i == str.length - 1) {//绘制剩余部分
        imgCtx.fillText(str.substring(lastSubStrIndex, i + 1), 20, initHeight);
      }
    }

    // 画一条线
    imgCtx.moveTo(20, 260)
    imgCtx.lineTo(285, 260)
    imgCtx.setStrokeStyle("#ddd")
    imgCtx.stroke()

    // 绘入小程序码
    imgCtx.drawImage(appLetImgPath, 20, 280, 60, 60);
    // 绘制头像
    var portraitPath = that.data.portrait_temp
    console.log(portraitPath)
    var hostNickname = app.globalData.userInfo.nickName
    console.log(hostNickname)
    imgCtx.save()
    imgCtx.beginPath()
    imgCtx.arc(107, 297, 24, 0, 2 * Math.PI)
    imgCtx.clip()
    imgCtx.drawImage(portraitPath, 95, 285, 24, 24)
    imgCtx.restore()
    imgCtx.font = "normal normal 12px Aril"
    // imgCtx.setFontSize(12)
    imgCtx.setFillStyle('#666')
    imgCtx.fillText(hostNickname+' 正在观看视频', 125, 305)
    imgCtx.setFillStyle('#666')
    imgCtx.fillText('识别小程序码，查看视频详情', 95, 325)
    imgCtx.draw()
  },
  canvasToImage() {
    let that = this;
    that.setData({ isShow: false })
    that.setData({ hidden: false })
    that.setData({ toHide: true })
    // wx.showLoading({
    //   title: '正在保存图片..',
    // });
    wx.canvasToTempFilePath({
      x: 0,
      y: 0,
      width: that.data.windowWidth,
      height: that.data.windowWidth * that.data.scale,
      destWidth: that.data.windowWidth * 4,
      destHeight: that.data.windowWidth * 4 * that.data.scale,
      canvasId: 'imgCanvas',
      success: function (res) {
        console.log('朋友圈分享图生成成功:' + res.tempFilePath)
        that.setData({
          shareImgSrc: res.tempFilePath,
          shareState: '正在保存图片..'
        })
        // wx.previewImage({
        //   current: res.tempFilePath, // 当前显示图片的http链接
        //   urls: [res.tempFilePath] // 需要预览的图片http链接列表
        // })
        var myImg = that.data.shareImgSrc;
        console.log('myImg:' + myImg)
        wx.saveImageToPhotosAlbum({
          filePath: that.data.shareImgSrc,
          success(res) {
            that.setData({ shareState: '已保存到相册，快去分享吧' })
            /*wx.showModal({
              title: '存图成功',
              content: '图片成功保存到相册了，去发圈噻~',
              showCancel: false,
              confirmText: '好哒',
              confirmColor: '#72B9C3',
              success: function (res) {
                
                if (res.confirm) {
                  console.log('用户点击确定');
                }
              }
            })*/
          },
          fail(res) {
            console.log(res)
            wx.showToast({
              title: '保存到相册失败',
              icon: 'fail'
            })
          },
          complete(res) {
            console.log(res)
            // wx.hideLoading();
          }
        })
      },
      fail: function (err) {
        console.log('失败')
        console.log(err)
      }
    })
  },
  closePopup() {
    this.setData({
      isShow: true,
      hidden: true
    })
  }
})