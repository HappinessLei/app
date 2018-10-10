## 小程序开发学习总结

#### 1、如何创建新页面
    答：app.json中，pages数组下创建新的路径如“pages/文件夹名/文件名” 这样会自动在项目的pages文件夹下创建起的文件夹名，
    此文件夹下也会自动创建.js,.json,.wxml,.wxss四个文件，这四个文件是自动关联的，wxml文件就是我们创建的新页面。
#### 2、如何修改tabbar选中后字体的颜色
    答：app.json中，tabbar选项，添加selectedColor选项
#### 3、Canvas绘图以及分享截图，正式测试时，图片不显示问题
    答：需要使用wx.downloadFile()方法将图片缓存到本地(如下图)
