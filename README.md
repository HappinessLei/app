## 小程序开发学习总结

#### 1、如何创建新页面
    答：app.json中，pages数组下创建新的路径如“pages/文件夹名/文件名” 这样会自动在项目的pages文件夹下创建起的文件夹名，
    此文件夹下也会自动创建.js,.json,.wxml,.wxss四个文件，这四个文件是自动关联的，wxml文件就是我们创建的新页面。
#### 2、如何修改tabbar选中后字体的颜色
    答：app.json中，tabbar选项，添加selectedColor选项
#### 3、Canvas绘图以及分享截图，正式测试时，图片不显示问题
    答：需要使用wx.downloadFile()方法将图片缓存到本地（如下图）
![](https://github.com/HappinessLei/applet/blob/master/artical_img/1.jpg)
#### 4、授权不自动弹出授权窗口问题
    答：新版本不再支持自动弹出授权窗口，需要手动按钮触发，以示友好交互(如下图)
![](https://github.com/HappinessLei/applet/blob/master/artical_img/2.jpg)
#### 5、wx:if使用时，如果内部嵌套了label标签，使用<view wx:else></view>加载时候，将会出现小黑块。
    答：解决方法wx:else都换用wx:elif
#### 6、列表页跳转接收参数的内容页（带有参数）
    答：第一种：使用WXML<navigator url=””></navigator>标签
        第二种：wx.navigateTo({
 	                url: 'test?id=1'
                })
    建议使用第一种(如下图)，因为html，逻辑相对简单一些，传多个参数时，使用js时，数据接收是个问题。
![](https://github.com/HappinessLei/applet/blob/master/artical_img/3.jpg)
#### 7、小程序内跳转到外部链接，不是正确地址问题
    答：外部链接必须是和小程序域名信息是同域名下，才能实现正确跳转

    注意：如果跳转的外部链接是以json获取的，且跳转的链接地址含有参数，这样获取到的链接地址问号（？）后的参数时获取不到的
    (如下图)
![](https://github.com/HappinessLei/applet/blob/master/artical_img/4.jpg) 

    正确获取方法：需要把json数据的每一个对应的参数值获取到，再拼接到地址后面(如下图)
![](https://github.com/HappinessLei/applet/blob/master/artical_img/5.jpg)
#### 8、分享微信朋友使用open-type=”share”就能实现
#### 9、分享微信朋友圈动态截图，缓存到本地后也不能显示图片问题
    答：必须有一个image标签来接收图片才能显示(如下图)
![](https://github.com/HappinessLei/applet/blob/master/artical_img/6.jpg)
#### 10、fixed定位的video, 在切换到全屏, 再切到普通大小时, iOS上全屏的按钮会消失
    答：view组件不要用fixed定位
#### 11、获取的json数据，需要手动转换成json对象
    答：JSON.parse()
#### 12、如果需要异步调用wx.showLoading()或隐藏wx.hideLoading()
    答：使用setTimeout()（如下图）
![](https://github.com/HappinessLei/applet/blob/master/artical_img/7.jpg)
