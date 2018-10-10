// pages/news/news.js
Page({
  data: {
    imgs: [
      {
        url:'https://test.sungohealth.com/wxjson/wximg/news/201807101116047.jpg',
        title:'中阿合作共同打造中东“网上丝路”'
      },
      {
        url:'https://test.sungohealth.com/wxjson/wximg/news/201807080959020.jpg',
        title: '中埃建设者携手落实埃及新首都梦 385米“地标塔”成埃及最高...'
      },
      {
        url:'https://test.sungohealth.com/wxjson/wximg/news/201807040955011.jpg',
        title: '中国援斐斯丁森桥改善首都苏瓦交通状况'
      },
      {
        url:'https://test.sungohealth.com/wxjson/wximg/news/201806271000003.jpg',
        title: '探访中老友谊学校'
      }, 
      {
        url:'https://test.sungohealth.com/wxjson/wximg/news/201806181152034.jpg',
        title: '蒙内铁路累计发送旅客近138万人次 创造近5万个岗位'
      }
    ],
    array: [{
title:"\u0031\u002d\u0036\u6708\u4e2d\u56fd\u5438\u5f15\u5916\u8d44\u589e\u957f\u0031\u002e\u0031\u0025\u0020\u81ea\u8d38\u8bd5\u9a8c\u533a\u5f15\u8d44\u9886\u8dd1\u5168\u56fd",
      viewid: "1",
      img: "https://test.sungohealth.com/wxjson/wximg/news/201807101116047.jpg",
      time: "2018-07-13",
      source: "\u7ecf\u6d4e\u53c2\u8003\u62a5",
      article: "<p>\u5546\u52a1\u90e8\u65b0\u95fb\u53d1\u8a00\u4eba\u9ad8\u5cf0\u6307\u51fa\uff0c\u4e2d\u56fd\u6709\u7a33\u5b9a\u7684\u6295\u8d44\u73af\u5883\uff0c\u8f83\u5f3a\u7684\u4ea7\u4e1a\u914d\u5957\u80fd\u529b\uff0c\u6709\u6f5c\u529b\u5de8\u5927\u3001\u6b63\u5728\u5347\u7ea7\u800c\u4e14\u4e0d\u65ad\u5f00\u653e\u7684\u6d88\u8d39\u5e02\u573a\u3002\u8fd1\u671f\uff0c\u636e\u4e86\u89e3\uff0c\u901a\u7528\u7535\u6c14\u3001\u798f\u7279\u3001\u5b9d\u9a6c\u3001\u7279\u65af\u62c9\u7b49\u5916\u8d44\u4f01\u4e1a\u7eb7\u7eb7\u8fdb\u4e00\u6b65\u6269\u5927\u5728\u4e2d\u56fd\u7684\u4ea7\u80fd\u3001\u89c4\u6a21\u548c\u6295\u8d44\u3002\u6211\u4eec\u5c06\u7ee7\u7eed\u6539\u5584\u8425\u5546\u73af\u5883\uff0c\u4fdd\u62a4\u5916\u8d44\u4f01\u4e1a\u5728\u534e\u7684\u5408\u6cd5\u6743\u76ca\uff0c\u4f7f\u4e2d\u56fd\u7ee7\u7eed\u6210\u4e3a\u5916\u56fd\u4f01\u4e1a\u6295\u8d44\u7684\u9996\u9009\u4e4b\u5730\u3002</p><p>\u9488\u5bf9\u6b64\u6b21\u7f8e\u56fd\u5bf9\u534e\u0033\u0034\u0030\u4ebf\u5173\u7a0e\u6e05\u5355\u4e2d\u5c06\u8fd1\u516d\u6210\u90fd\u6d89\u53ca\u5728\u534e\u5916\u8d44\u4f01\u4e1a\uff0c\u5f81\u7a0e\u4ee5\u540e\u662f\u5426\u5b58\u5728\u5916\u8d44\u4f01\u4e1a\u9009\u62e9\u8f6c\u79fb\u3001\u64a4\u51fa\u5230\u5176\u4ed6\u56fd\u5bb6\u7684\u98ce\u9669\uff0c\u9ad8\u5cf0\u56de\u5e94\u8bf4\uff1a\u201c\u7f8e\u65b9\u7684\u5f81\u7a0e\u63aa\u65bd\uff0c\u786e\u5b9e\u4f1a\u5bf9\u5305\u62ec\u7f8e\u8d44\u4f01\u4e1a\u5728\u5185\u7684\u5728\u534e\u5916\u8d44\u4f01\u4e1a\u9020\u6210\u5f71\u54cd\uff0c\u6211\u4eec\u5bf9\u6b64\u4e5f\u6df1\u611f\u9057\u61be\uff0c\u5e0c\u671b\u7f8e\u8d44\u4f01\u4e1a\u591a\u505a\u7f8e\u56fd\u653f\u5e9c\u7684\u5de5\u4f5c\uff0c\u52aa\u529b\u7ef4\u62a4\u81ea\u8eab\u7684\u5229\u76ca\u3002\u201d</p>"
    },
    {
title:"\u4e2d\u56fd\u4ee3\u8868\u547c\u5401\u6811\u7acb\u4eba\u7c7b\u547d\u8fd0\u5171\u540c\u4f53\u610f\u8bc6\u5e94\u5bf9\u5168\u7403\u6027\u6311\u6218",
      viewid: "2",
      img: "https://test.sungohealth.com/wxjson/wximg/news/201807080959020.jpg",
      time: "2018-07-13",
      source: "\u7ecf\u6d4e\u53c2\u8003\u62a5",
      article: "<p>\u4e2d\u56fd\u5e38\u9a7b\u8054\u5408\u56fd\u4ee3\u8868\u9a6c\u671d\u65ed\u0031\u0031\u65e5\u5728\u6c14\u5019\u53d8\u5316\u4e0e\u5b89\u5168\u95ee\u9898\u5b89\u7406\u4f1a\u8fa9\u8bba\u4f1a\u4e0a\u53d1\u8a00\uff0c\u9610\u8ff0\u4e2d\u56fd\u7acb\u573a\uff0c\u547c\u5401\u56fd\u9645\u793e\u4f1a\u6811\u7acb\u4eba\u7c7b\u547d\u8fd0\u5171\u540c\u4f53\u610f\u8bc6\u5e94\u5bf9\u4e0e\u6c14\u5019\u53d8\u5316\u76f8\u5173\u7684\u5b89\u5168\u95ee\u9898\u3002</p><p>\u4ed6\u8bf4\uff0c\u5168\u7403\u6c14\u5019\u53d8\u5316\u6df1\u523b\u5f71\u54cd\u4eba\u7c7b\u7684\u751f\u5b58\u548c\u53d1\u5c55\uff0c\u662f\u5168\u4e16\u754c\u5171\u540c\u9762\u4e34\u7684\u91cd\u5927\u6311\u6218\u3002\u89e3\u51b3\u6c14\u5019\u53d8\u5316\u95ee\u9898\uff0c\u5b9e\u73b0\u53ef\u6301\u7eed\u53d1\u5c55\u662f\u56fd\u9645\u793e\u4f1a\u9762\u4e34\u7684\u7d27\u8feb\u800c\u957f\u671f\u7684\u4efb\u52a1\u3002\u56fd\u9645\u793e\u4f1a\u8981\u6811\u7acb\u4eba\u7c7b\u547d\u8fd0\u5171\u540c\u4f53\u610f\u8bc6\uff0c\u79ef\u6781\u5e94\u5bf9\u5168\u7403\u6027\u6311\u6218\u3002\u5404\u56fd\u5e94\u5f53\u52a0\u5f3a\u5e94\u5bf9\u6c14\u5019\u53d8\u5316\u95ee\u9898\u7684\u4ea4\u6d41\u5408\u4f5c\uff0c\u901a\u8fc7\u6280\u672f\u8f6c\u8ba9\u548c\u80fd\u529b\u5efa\u8bbe\u5411\u53d1\u5c55\u4e2d\u56fd\u5bb6\u63d0\u4f9b\u5e2e\u52a9\u3002\u8054\u5408\u56fd\u548c\u76f8\u5173\u56fd\u9645\u53ca\u5730\u533a\u7ec4\u7ec7\u5e94\u52a0\u5f3a\u534f\u8c03\uff0c\u4e3a\u5e94\u5bf9\u6c14\u5019\u53d8\u5316\u95ee\u9898\u53d1\u6325\u79ef\u6781\u4f5c\u7528\u3002</p>"
    },
    {
title:"\u591a\u5bb6\u5916\u8d44\u94f6\u884c\u5728\u534e\u8bbe\u7acb\u673a\u6784\u0020\u94f6\u884c\u4e1a\u5bf9\u5916\u5f00\u653e\u52a0\u5feb",
      viewid: "3",
      img: "https://test.sungohealth.com/wxjson/wximg/news/201807040955011.jpg",
      time: "2018-07-13",
      source: "\u7ecf\u6d4e\u53c2\u8003\u62a5",
      article: "<p>\u4f5c\u4e3a\u6539\u9769\u5f00\u653e\u7684\u91cd\u8981\u7ec4\u6210\u90e8\u5206\uff0c\u94f6\u884c\u4e1a\u5bf9\u5916\u5f00\u653e\u6b63\u5448\u73b0\u52a0\u5feb\u6001\u52bf\u3002\u5728\u4f9d\u6cd5\u5408\u89c4\u3001\u4e25\u5b88\u98ce\u9669\u5e95\u7ebf\u57fa\u7840\u4e0a\uff0c\u94f6\u4fdd\u76d1\u4f1a\u8fd1\u65e5\u6279\u51c6\u7ea6\u65e6\u963f\u62c9\u4f2f\u94f6\u884c\u7b79\u5efa\u4e0a\u6d77\u5206\u884c\u3001\u4e2d\u56fd\u4fe1\u6258\u5546\u4e1a\u94f6\u884c\u7b79\u5efa\u6df1\u5733\u5206\u884c\u3001\u4e1c\u4e9a\u94f6\u884c\u0028\u4e2d\u56fd\u0029\u6709\u9650\u516c\u53f8\u6df1\u5733\u524d\u6d77\u652f\u884c\u5347\u683c\u4e3a\u5206\u884c\uff0c\u6279\u51c6\u5f70\u5316\u5546\u4e1a\u94f6\u884c\u5728\u5927\u9646\u7684\u5b50\u884c\u5f00\u4e1a\u3001\u56fd\u6cf0\u4e16\u534e\u5546\u4e1a\u94f6\u884c\u5728\u5927\u9646\u7684\u5b50\u884c\u5f00\u4e1a\u3002</p><p>\u94f6\u4fdd\u76d1\u4f1a\u6570\u636e\u663e\u793a\uff0c\u622a\u81f3\u0032\u0030\u0031\u0037\u5e74\u5e95\uff0c\u5916\u8d44\u94f6\u884c\u5728\u534e\u8425\u4e1a\u6027\u673a\u6784\u603b\u6570\u8fbe\u0031\u0030\u0031\u0033\u5bb6\uff0c\u8fd1\u0031\u0035\u5e74\u589e\u957f\u8fd1\u0035\u500d\uff0c\u5e74\u5747\u589e\u901f\u0031\u0033\u0025\u3002\u5728\u534e\u5916\u8d44\u94f6\u884c\u603b\u8d44\u4ea7\u5df2\u4ece\u52a0\u5165\u4e16\u8d38\u7ec4\u7ec7\u521d\u671f\u0032\u0030\u0030\u0032\u5e74\u672b\u7684\u0033\u0030\u0030\u0030\u591a\u4ebf\u5143\u589e\u52a0\u5230\u0032\u0030\u0031\u0037\u5e74\u672b\u7684\u0033\u002e\u0032\u0034\u4e07\u4ebf\u5143\uff0c\u589e\u957f\u903e\u0039\u500d\uff1b\u0032\u0030\u0031\u0037\u5e74\uff0c\u5728\u534e\u5916\u8d44\u94f6\u884c\u7d2f\u8ba1\u5b9e\u73b0\u51c0\u5229\u6da6\u76f8\u5f53\u4e8e\u0032\u0030\u0030\u0032\u5e74\u7684\u0031\u0030\u500d\uff0c\u0032\u0030\u0031\u0037\u5e74\u672b\uff0c\u5916\u8d44\u94f6\u884c\u6ce8\u518c\u8d44\u672c\u6bd4\u0032\u0030\u0030\u0032\u5e74\u672b\u589e\u957f\u4e86\u0036\u500d\u591a\u3002\u5728\u8fd9\u4e9b\u6570\u636e\u7684\u80cc\u540e\uff0c\u662f\u5916\u8d44\u94f6\u884c\u672c\u571f\u5316\u4e1a\u52a1\u6a21\u5f0f\u7684\u4e0d\u65ad\u521b\u65b0\u548c\u7a81\u7834\u3002</p>"
    },
    {
title:"\u4e2d\u56fd\u2014\u963f\u62c9\u4f2f\u56fd\u5bb6\u94f6\u884c\u8054\u5408\u4f53\u6b63\u5f0f\u6210\u7acb\u0020\u5c06\u914d\u5907\u0033\u0030\u4ebf\u7f8e\u5143\u4e13\u9879\u8d37\u6b3e",
      viewid: "4",
      img: "https://test.sungohealth.com/wxjson/wximg/news/201806271000003.jpg",
      time: "2018-07-12",
      source: "\u4e2d\u56fd\u4e00\u5e26\u4e00\u8def\u7f51",
      article: "<p>\u65e5\u524d\uff0c\u4e60\u8fd1\u5e73\u4e3b\u5e2d\u5728\u4e2d\u963f\u5408\u4f5c\u8bba\u575b\u7b2c\u516b\u5c4a\u90e8\u957f\u7ea7\u4f1a\u8bae\u5f00\u5e55\u5f0f\u4e0a\u5ba3\u5e03\uff0c\u4e2d\u65b9\u5c06\u6210\u7acb\u201c\u4e2d\u56fd\u2014\u963f\u62c9\u4f2f\u56fd\u5bb6\u94f6\u884c\u8054\u5408\u4f53\u201d\uff0c\u914d\u5907\u0033\u0030\u4ebf\u7f8e\u5143\u91d1\u878d\u5408\u4f5c\u4e13\u9879\u8d37\u6b3e\u3002\u0037\u6708\u0031\u0032\u65e5\uff0c\u4e2d\u963f\u94f6\u8054\u4f53\u6210\u7acb\u4eea\u5f0f\u66a8\u9996\u5c4a\u7406\u4e8b\u4f1a\u4f1a\u8bae\u5728\u5317\u4eac\u4e3e\u884c\uff0c\u5404\u6210\u5458\u884c\u5171\u540c\u7b7e\u7f72\u4e86\u300a\u5173\u4e8e\u4e2d\u56fd\u2014\u963f\u62c9\u4f2f\u94f6\u884c\u8054\u5408\u4f53\u6210\u7acb\u5ba3\u8a00\u300b\u3002\u4e2d\u963f\u94f6\u8054\u4f53\u662f\u4e2d\u56fd\u4e0e\u963f\u62c9\u4f2f\u56fd\u5bb6\u4e4b\u95f4\u9996\u4e2a\u591a\u8fb9\u91d1\u878d\u5408\u4f5c\u673a\u5236\uff0c\u7531\u4e2d\u56fd\u56fd\u5bb6\u5f00\u53d1\u94f6\u884c\u7275\u5934\u6210\u7acb\uff0c\u521b\u59cb\u6210\u5458\u884c\u8fd8\u5305\u62ec\u57c3\u53ca\u56fd\u6c11\u94f6\u884c\u3001\u9ece\u5df4\u5ae9\u6cd5\u5170\u8428\u94f6\u884c\u3001\u6469\u6d1b\u54e5\u5916\u8d38\u94f6\u884c\u3001\u963f\u8054\u914b\u963f\u5e03\u624e\u6bd4\u7b2c\u4e00\u94f6\u884c\u7b49\u5177\u6709\u533a\u57df\u4ee3\u8868\u6027\u548c\u5f71\u54cd\u529b\u7684\u963f\u62c9\u4f2f\u56fd\u5bb6\u94f6\u884c\u3002</p>"
    },
    {
title:"\u4e2d\u8001\u94c1\u8def\u8de8\u6e44\u516c\u6cb3\u7279\u5927\u6865\u4e3b\u6865\u57fa\u7840\u65bd\u5de5\u5168\u9762\u5b8c\u6210",
      viewid: "5",
      img: "https://test.sungohealth.com/wxjson/wximg/news/201806181152034.jpg",
      time: "2018-07-12",
      source: "\u65b0\u534e\u793e",
      article: "<p>\u4e2d\u8001\u94c1\u8def\u7405\u52c3\u62c9\u90a6\u6e44\u516c\u6cb3\u7279\u5927\u6865\u4e3b\u6865\u6700\u540e\u4e00\u4e2a\u627f\u53f0\u5f53\u5730\u65f6\u95f4\u0031\u0030\u65e5\u6df1\u591c\u987a\u5229\u6d47\u7b51\u5b8c\u6210\uff0c\u8fd9\u6807\u5fd7\u7740\u4e2d\u8001\u94c1\u8def\u8de8\u6e44\u516c\u6cb3\u7684\u4e24\u5ea7\u7279\u5927\u6865\u4e3b\u6865\u57fa\u7840\u65bd\u5de5\u5168\u9762\u5b8c\u6210\u3002</p><p>\u0031\u0030\u65e5\u591c\uff0c\u4f4d\u4e8e\u8001\u631d\u5317\u90e8\u53e4\u57ce\u7405\u52c3\u62c9\u90a6\u7684\u7279\u5927\u6865\u65bd\u5de5\u5e73\u53f0\u4eae\u5982\u767d\u663c\uff0c\u73b0\u573a\u673a\u5668\u58f0\u8f70\u9e23\uff0c\u6808\u6865\u4e0a\u5f80\u6765\u7a7f\u68ad\u7684\u6c34\u6ce5\u7f50\u8f66\u4e0d\u65ad\u5411\u5927\u6865\u4e3b\u6865\u6700\u540e\u4e00\u4e2a\u627f\u53f0\u3001\u0032\u0031\u53f7\u627f\u53f0\u6d47\u7b51\u8f93\u9001\u6df7\u51dd\u571f\u3002</p><p>\u4e2d\u56fd\u4e2d\u94c1\u516b\u5c40\u4e2d\u8001\u94c1\u8def\u7b2c\u4e09\u6807\u6bb5\u4e09\u5206\u90e8\u627f\u5efa\u4e86\u4e24\u5ea7\u8de8\u6e44\u516c\u6cb3\u7279\u5927\u6865\uff0c\u4e09\u5206\u90e8\u515a\u5de5\u59d4\u4e66\u8bb0\u5510\u9ad8\u4e91\u0031\u0030\u65e5\u5728\u5de5\u5730\u73b0\u573a\u5bf9\u65b0\u534e\u793e\u8bb0\u8005\u4ecb\u7ecd\u8bf4\uff0c\u0032\u0031\u53f7\u5e73\u53f0\u6d47\u6ce8\u7684\u987a\u5229\u5b8c\u6210\uff0c\u6807\u5fd7\u7740\u4e2d\u8001\u94c1\u8def\u4e24\u5ea7\u8de8\u6e44\u516c\u6cb3\u7684\u7279\u5927\u6865\u4e3b\u6865\u57fa\u7840\u65bd\u5de5\u5168\u9762\u5b8c\u6210\uff0c\u201c\u6211\u4eec\u8de8\u8d8a\u4e86\u53c8\u4e00\u4e2a\u91cd\u8981\u5de5\u7a0b\u8282\u70b9\uff0c\u5e73\u53f0\u6d47\u7b51\u5b8c\u6210\u4e3a\u786e\u4fdd\u4eca\u5e74\u6c5b\u671f\u5230\u6765\u4e4b\u524d\u4e3b\u58a9\u5168\u90e8\u51fa\u6c34\u5960\u5b9a\u4e86\u575a\u5b9e\u57fa\u7840\u201d\u3002</p>"
    },
    {
title:"\u0031\u002d\u0036\u6708\u4e2d\u56fd\u5438\u5f15\u5916\u8d44\u589e\u957f\u0031\u002e\u0031\u0025\u0020\u81ea\u8d38\u8bd5\u9a8c\u533a\u5f15\u8d44\u9886\u8dd1\u5168\u56fd",
      viewid: "6",
      img: "https://test.sungohealth.com/wxjson/wximg/news/201807101116047.jpg",
      time: "2018-07-13",
      source: "\u7ecf\u6d4e\u53c2\u8003\u62a5",
      article: "<p>\u5546\u52a1\u90e8\u65b0\u95fb\u53d1\u8a00\u4eba\u9ad8\u5cf0\u6307\u51fa\uff0c\u4e2d\u56fd\u6709\u7a33\u5b9a\u7684\u6295\u8d44\u73af\u5883\uff0c\u8f83\u5f3a\u7684\u4ea7\u4e1a\u914d\u5957\u80fd\u529b\uff0c\u6709\u6f5c\u529b\u5de8\u5927\u3001\u6b63\u5728\u5347\u7ea7\u800c\u4e14\u4e0d\u65ad\u5f00\u653e\u7684\u6d88\u8d39\u5e02\u573a\u3002\u8fd1\u671f\uff0c\u636e\u4e86\u89e3\uff0c\u901a\u7528\u7535\u6c14\u3001\u798f\u7279\u3001\u5b9d\u9a6c\u3001\u7279\u65af\u62c9\u7b49\u5916\u8d44\u4f01\u4e1a\u7eb7\u7eb7\u8fdb\u4e00\u6b65\u6269\u5927\u5728\u4e2d\u56fd\u7684\u4ea7\u80fd\u3001\u89c4\u6a21\u548c\u6295\u8d44\u3002\u6211\u4eec\u5c06\u7ee7\u7eed\u6539\u5584\u8425\u5546\u73af\u5883\uff0c\u4fdd\u62a4\u5916\u8d44\u4f01\u4e1a\u5728\u534e\u7684\u5408\u6cd5\u6743\u76ca\uff0c\u4f7f\u4e2d\u56fd\u7ee7\u7eed\u6210\u4e3a\u5916\u56fd\u4f01\u4e1a\u6295\u8d44\u7684\u9996\u9009\u4e4b\u5730\u3002</p><p>\u9488\u5bf9\u6b64\u6b21\u7f8e\u56fd\u5bf9\u534e\u0033\u0034\u0030\u4ebf\u5173\u7a0e\u6e05\u5355\u4e2d\u5c06\u8fd1\u516d\u6210\u90fd\u6d89\u53ca\u5728\u534e\u5916\u8d44\u4f01\u4e1a\uff0c\u5f81\u7a0e\u4ee5\u540e\u662f\u5426\u5b58\u5728\u5916\u8d44\u4f01\u4e1a\u9009\u62e9\u8f6c\u79fb\u3001\u64a4\u51fa\u5230\u5176\u4ed6\u56fd\u5bb6\u7684\u98ce\u9669\uff0c\u9ad8\u5cf0\u56de\u5e94\u8bf4\uff1a\u201c\u7f8e\u65b9\u7684\u5f81\u7a0e\u63aa\u65bd\uff0c\u786e\u5b9e\u4f1a\u5bf9\u5305\u62ec\u7f8e\u8d44\u4f01\u4e1a\u5728\u5185\u7684\u5728\u534e\u5916\u8d44\u4f01\u4e1a\u9020\u6210\u5f71\u54cd\uff0c\u6211\u4eec\u5bf9\u6b64\u4e5f\u6df1\u611f\u9057\u61be\uff0c\u5e0c\u671b\u7f8e\u8d44\u4f01\u4e1a\u591a\u505a\u7f8e\u56fd\u653f\u5e9c\u7684\u5de5\u4f5c\uff0c\u52aa\u529b\u7ef4\u62a4\u81ea\u8eab\u7684\u5229\u76ca\u3002\u201d</p>"
    },
    {
title:"\u4e2d\u56fd\u4ee3\u8868\u547c\u5401\u6811\u7acb\u4eba\u7c7b\u547d\u8fd0\u5171\u540c\u4f53\u610f\u8bc6\u5e94\u5bf9\u5168\u7403\u6027\u6311\u6218",
      viewid: "7",
      img: "https://test.sungohealth.com/wxjson/wximg/news/201807080959020.jpg",
      time: "2018-07-13",
      source: "\u7ecf\u6d4e\u53c2\u8003\u62a5",
      article: "<p>\u4e2d\u56fd\u5e38\u9a7b\u8054\u5408\u56fd\u4ee3\u8868\u9a6c\u671d\u65ed\u0031\u0031\u65e5\u5728\u6c14\u5019\u53d8\u5316\u4e0e\u5b89\u5168\u95ee\u9898\u5b89\u7406\u4f1a\u8fa9\u8bba\u4f1a\u4e0a\u53d1\u8a00\uff0c\u9610\u8ff0\u4e2d\u56fd\u7acb\u573a\uff0c\u547c\u5401\u56fd\u9645\u793e\u4f1a\u6811\u7acb\u4eba\u7c7b\u547d\u8fd0\u5171\u540c\u4f53\u610f\u8bc6\u5e94\u5bf9\u4e0e\u6c14\u5019\u53d8\u5316\u76f8\u5173\u7684\u5b89\u5168\u95ee\u9898\u3002</p><p>\u4ed6\u8bf4\uff0c\u5168\u7403\u6c14\u5019\u53d8\u5316\u6df1\u523b\u5f71\u54cd\u4eba\u7c7b\u7684\u751f\u5b58\u548c\u53d1\u5c55\uff0c\u662f\u5168\u4e16\u754c\u5171\u540c\u9762\u4e34\u7684\u91cd\u5927\u6311\u6218\u3002\u89e3\u51b3\u6c14\u5019\u53d8\u5316\u95ee\u9898\uff0c\u5b9e\u73b0\u53ef\u6301\u7eed\u53d1\u5c55\u662f\u56fd\u9645\u793e\u4f1a\u9762\u4e34\u7684\u7d27\u8feb\u800c\u957f\u671f\u7684\u4efb\u52a1\u3002\u56fd\u9645\u793e\u4f1a\u8981\u6811\u7acb\u4eba\u7c7b\u547d\u8fd0\u5171\u540c\u4f53\u610f\u8bc6\uff0c\u79ef\u6781\u5e94\u5bf9\u5168\u7403\u6027\u6311\u6218\u3002\u5404\u56fd\u5e94\u5f53\u52a0\u5f3a\u5e94\u5bf9\u6c14\u5019\u53d8\u5316\u95ee\u9898\u7684\u4ea4\u6d41\u5408\u4f5c\uff0c\u901a\u8fc7\u6280\u672f\u8f6c\u8ba9\u548c\u80fd\u529b\u5efa\u8bbe\u5411\u53d1\u5c55\u4e2d\u56fd\u5bb6\u63d0\u4f9b\u5e2e\u52a9\u3002\u8054\u5408\u56fd\u548c\u76f8\u5173\u56fd\u9645\u53ca\u5730\u533a\u7ec4\u7ec7\u5e94\u52a0\u5f3a\u534f\u8c03\uff0c\u4e3a\u5e94\u5bf9\u6c14\u5019\u53d8\u5316\u95ee\u9898\u53d1\u6325\u79ef\u6781\u4f5c\u7528\u3002</p>"
    },
    {
title:"\u591a\u5bb6\u5916\u8d44\u94f6\u884c\u5728\u534e\u8bbe\u7acb\u673a\u6784\u0020\u94f6\u884c\u4e1a\u5bf9\u5916\u5f00\u653e\u52a0\u5feb",
      img: "https://test.sungohealth.com/wxjson/wximg/news/201807040955011.jpg",
      vieid: "8",
      time: "2018-07-13",
      source: "\u7ecf\u6d4e\u53c2\u8003\u62a5",
      article: "<p>\u4f5c\u4e3a\u6539\u9769\u5f00\u653e\u7684\u91cd\u8981\u7ec4\u6210\u90e8\u5206\uff0c\u94f6\u884c\u4e1a\u5bf9\u5916\u5f00\u653e\u6b63\u5448\u73b0\u52a0\u5feb\u6001\u52bf\u3002\u5728\u4f9d\u6cd5\u5408\u89c4\u3001\u4e25\u5b88\u98ce\u9669\u5e95\u7ebf\u57fa\u7840\u4e0a\uff0c\u94f6\u4fdd\u76d1\u4f1a\u8fd1\u65e5\u6279\u51c6\u7ea6\u65e6\u963f\u62c9\u4f2f\u94f6\u884c\u7b79\u5efa\u4e0a\u6d77\u5206\u884c\u3001\u4e2d\u56fd\u4fe1\u6258\u5546\u4e1a\u94f6\u884c\u7b79\u5efa\u6df1\u5733\u5206\u884c\u3001\u4e1c\u4e9a\u94f6\u884c\u0028\u4e2d\u56fd\u0029\u6709\u9650\u516c\u53f8\u6df1\u5733\u524d\u6d77\u652f\u884c\u5347\u683c\u4e3a\u5206\u884c\uff0c\u6279\u51c6\u5f70\u5316\u5546\u4e1a\u94f6\u884c\u5728\u5927\u9646\u7684\u5b50\u884c\u5f00\u4e1a\u3001\u56fd\u6cf0\u4e16\u534e\u5546\u4e1a\u94f6\u884c\u5728\u5927\u9646\u7684\u5b50\u884c\u5f00\u4e1a\u3002</p><p>\u94f6\u4fdd\u76d1\u4f1a\u6570\u636e\u663e\u793a\uff0c\u622a\u81f3\u0032\u0030\u0031\u0037\u5e74\u5e95\uff0c\u5916\u8d44\u94f6\u884c\u5728\u534e\u8425\u4e1a\u6027\u673a\u6784\u603b\u6570\u8fbe\u0031\u0030\u0031\u0033\u5bb6\uff0c\u8fd1\u0031\u0035\u5e74\u589e\u957f\u8fd1\u0035\u500d\uff0c\u5e74\u5747\u589e\u901f\u0031\u0033\u0025\u3002\u5728\u534e\u5916\u8d44\u94f6\u884c\u603b\u8d44\u4ea7\u5df2\u4ece\u52a0\u5165\u4e16\u8d38\u7ec4\u7ec7\u521d\u671f\u0032\u0030\u0030\u0032\u5e74\u672b\u7684\u0033\u0030\u0030\u0030\u591a\u4ebf\u5143\u589e\u52a0\u5230\u0032\u0030\u0031\u0037\u5e74\u672b\u7684\u0033\u002e\u0032\u0034\u4e07\u4ebf\u5143\uff0c\u589e\u957f\u903e\u0039\u500d\uff1b\u0032\u0030\u0031\u0037\u5e74\uff0c\u5728\u534e\u5916\u8d44\u94f6\u884c\u7d2f\u8ba1\u5b9e\u73b0\u51c0\u5229\u6da6\u76f8\u5f53\u4e8e\u0032\u0030\u0030\u0032\u5e74\u7684\u0031\u0030\u500d\uff0c\u0032\u0030\u0031\u0037\u5e74\u672b\uff0c\u5916\u8d44\u94f6\u884c\u6ce8\u518c\u8d44\u672c\u6bd4\u0032\u0030\u0030\u0032\u5e74\u672b\u589e\u957f\u4e86\u0036\u500d\u591a\u3002\u5728\u8fd9\u4e9b\u6570\u636e\u7684\u80cc\u540e\uff0c\u662f\u5916\u8d44\u94f6\u884c\u672c\u571f\u5316\u4e1a\u52a1\u6a21\u5f0f\u7684\u4e0d\u65ad\u521b\u65b0\u548c\u7a81\u7834\u3002</p>"
    },
    {
title:"\u4e2d\u56fd\u2014\u963f\u62c9\u4f2f\u56fd\u5bb6\u94f6\u884c\u8054\u5408\u4f53\u6b63\u5f0f\u6210\u7acb\u0020\u5c06\u914d\u5907\u0033\u0030\u4ebf\u7f8e\u5143\u4e13\u9879\u8d37\u6b3e",
      viewid: "9",
      img: "https://test.sungohealth.com/wxjson/wximg/news/201806271000003.jpg",
      time: "2018-07-12",
      source: "\u4e2d\u56fd\u4e00\u5e26\u4e00\u8def\u7f51",
      article: "<p>\u65e5\u524d\uff0c\u4e60\u8fd1\u5e73\u4e3b\u5e2d\u5728\u4e2d\u963f\u5408\u4f5c\u8bba\u575b\u7b2c\u516b\u5c4a\u90e8\u957f\u7ea7\u4f1a\u8bae\u5f00\u5e55\u5f0f\u4e0a\u5ba3\u5e03\uff0c\u4e2d\u65b9\u5c06\u6210\u7acb\u201c\u4e2d\u56fd\u2014\u963f\u62c9\u4f2f\u56fd\u5bb6\u94f6\u884c\u8054\u5408\u4f53\u201d\uff0c\u914d\u5907\u0033\u0030\u4ebf\u7f8e\u5143\u91d1\u878d\u5408\u4f5c\u4e13\u9879\u8d37\u6b3e\u3002\u0037\u6708\u0031\u0032\u65e5\uff0c\u4e2d\u963f\u94f6\u8054\u4f53\u6210\u7acb\u4eea\u5f0f\u66a8\u9996\u5c4a\u7406\u4e8b\u4f1a\u4f1a\u8bae\u5728\u5317\u4eac\u4e3e\u884c\uff0c\u5404\u6210\u5458\u884c\u5171\u540c\u7b7e\u7f72\u4e86\u300a\u5173\u4e8e\u4e2d\u56fd\u2014\u963f\u62c9\u4f2f\u94f6\u884c\u8054\u5408\u4f53\u6210\u7acb\u5ba3\u8a00\u300b\u3002\u4e2d\u963f\u94f6\u8054\u4f53\u662f\u4e2d\u56fd\u4e0e\u963f\u62c9\u4f2f\u56fd\u5bb6\u4e4b\u95f4\u9996\u4e2a\u591a\u8fb9\u91d1\u878d\u5408\u4f5c\u673a\u5236\uff0c\u7531\u4e2d\u56fd\u56fd\u5bb6\u5f00\u53d1\u94f6\u884c\u7275\u5934\u6210\u7acb\uff0c\u521b\u59cb\u6210\u5458\u884c\u8fd8\u5305\u62ec\u57c3\u53ca\u56fd\u6c11\u94f6\u884c\u3001\u9ece\u5df4\u5ae9\u6cd5\u5170\u8428\u94f6\u884c\u3001\u6469\u6d1b\u54e5\u5916\u8d38\u94f6\u884c\u3001\u963f\u8054\u914b\u963f\u5e03\u624e\u6bd4\u7b2c\u4e00\u94f6\u884c\u7b49\u5177\u6709\u533a\u57df\u4ee3\u8868\u6027\u548c\u5f71\u54cd\u529b\u7684\u963f\u62c9\u4f2f\u56fd\u5bb6\u94f6\u884c\u3002</p>"
    },
    {
title:"\u4e2d\u8001\u94c1\u8def\u8de8\u6e44\u516c\u6cb3\u7279\u5927\u6865\u4e3b\u6865\u57fa\u7840\u65bd\u5de5\u5168\u9762\u5b8c\u6210",
      viewid: "10",
      img: "https://test.sungohealth.com/wxjson/wximg/news/201806181152034.jpg",
      time: "2018-07-12",
      source: "\u65b0\u534e\u793e",
      article: "<p>\u4e2d\u8001\u94c1\u8def\u7405\u52c3\u62c9\u90a6\u6e44\u516c\u6cb3\u7279\u5927\u6865\u4e3b\u6865\u6700\u540e\u4e00\u4e2a\u627f\u53f0\u5f53\u5730\u65f6\u95f4\u0031\u0030\u65e5\u6df1\u591c\u987a\u5229\u6d47\u7b51\u5b8c\u6210\uff0c\u8fd9\u6807\u5fd7\u7740\u4e2d\u8001\u94c1\u8def\u8de8\u6e44\u516c\u6cb3\u7684\u4e24\u5ea7\u7279\u5927\u6865\u4e3b\u6865\u57fa\u7840\u65bd\u5de5\u5168\u9762\u5b8c\u6210\u3002</p><p>\u0031\u0030\u65e5\u591c\uff0c\u4f4d\u4e8e\u8001\u631d\u5317\u90e8\u53e4\u57ce\u7405\u52c3\u62c9\u90a6\u7684\u7279\u5927\u6865\u65bd\u5de5\u5e73\u53f0\u4eae\u5982\u767d\u663c\uff0c\u73b0\u573a\u673a\u5668\u58f0\u8f70\u9e23\uff0c\u6808\u6865\u4e0a\u5f80\u6765\u7a7f\u68ad\u7684\u6c34\u6ce5\u7f50\u8f66\u4e0d\u65ad\u5411\u5927\u6865\u4e3b\u6865\u6700\u540e\u4e00\u4e2a\u627f\u53f0\u3001\u0032\u0031\u53f7\u627f\u53f0\u6d47\u7b51\u8f93\u9001\u6df7\u51dd\u571f\u3002</p><p>\u4e2d\u56fd\u4e2d\u94c1\u516b\u5c40\u4e2d\u8001\u94c1\u8def\u7b2c\u4e09\u6807\u6bb5\u4e09\u5206\u90e8\u627f\u5efa\u4e86\u4e24\u5ea7\u8de8\u6e44\u516c\u6cb3\u7279\u5927\u6865\uff0c\u4e09\u5206\u90e8\u515a\u5de5\u59d4\u4e66\u8bb0\u5510\u9ad8\u4e91\u0031\u0030\u65e5\u5728\u5de5\u5730\u73b0\u573a\u5bf9\u65b0\u534e\u793e\u8bb0\u8005\u4ecb\u7ecd\u8bf4\uff0c\u0032\u0031\u53f7\u5e73\u53f0\u6d47\u6ce8\u7684\u987a\u5229\u5b8c\u6210\uff0c\u6807\u5fd7\u7740\u4e2d\u8001\u94c1\u8def\u4e24\u5ea7\u8de8\u6e44\u516c\u6cb3\u7684\u7279\u5927\u6865\u4e3b\u6865\u57fa\u7840\u65bd\u5de5\u5168\u9762\u5b8c\u6210\uff0c\u201c\u6211\u4eec\u8de8\u8d8a\u4e86\u53c8\u4e00\u4e2a\u91cd\u8981\u5de5\u7a0b\u8282\u70b9\uff0c\u5e73\u53f0\u6d47\u7b51\u5b8c\u6210\u4e3a\u786e\u4fdd\u4eca\u5e74\u6c5b\u671f\u5230\u6765\u4e4b\u524d\u4e3b\u58a9\u5168\u90e8\u51fa\u6c34\u5960\u5b9a\u4e86\u575a\u5b9e\u57fa\u7840\u201d\u3002</p>"
    }],
    indicatorDots: false,
    interval: 3000,
    duration: 500,
    currentSwiper: 0,
    autoplay: true
  },
  swiperChange: function (e) {
    this.setData({
      currentSwiper: e.detail.current
    })
  },
  backhome:function(options){
    wx.switchTab({
      url: '../index/index',
    })
  },
  onReady: function () {
    //获得dialog组件
    this.dialog = this.selectComponent("#dialog");
  },

  showDialog() {
    this.dialog.showDialog();
  },

  //取消事件
  _cancelEvent() {
    console.log('你点击了取消');
    this.dialog.hideDialog();
  },
  //确认事件
  _confirmEvent() {
    console.log('你点击了确定');
    this.dialog.hideDialog();
  }
  // onDetailTap:function(event){
  //   var that = this;
  //   var id = event.currentTarget.dataset.id;
  //   console.log(id)
  //   wx.navigateTo({
  //     url: '../detail/detail?id ='+ id,
  //   });
  // }
})