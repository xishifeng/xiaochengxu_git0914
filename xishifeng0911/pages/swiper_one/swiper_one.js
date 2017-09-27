// pages/swiper_one/swiper_one.js
var _common = require('../../utils/util.js');


Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [],
    imgUrlsTemp: [],
    indicatorDots: true,
    indicatorColor: 'white',
    indicatorActiveColor: 'yellow',
    autoplay: true,
    interval: 3000,
    duration: 1000,
    current: 1
  },

  durationChange: function (e) {
    //
  },
  durationChange: function (e) {
    //
  },
  itemChangeFunc: function (e) {
    // console.log(e.target.dataset.current)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;

    wx.request({
      url: _common.ServerHost + _common.preUrlPath + 'shili0912.php', //仅为示例，并非真实的接口地址
      data: {
        x: 'cc',
        y: 'dd'
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res);
        for(var i = 0;i<res.data.length;i++){
          _this.data.imgUrlsTemp.push(res.data[i]['imgUrl']);
        };
        _this.setData({
          'imgUrls': _this.data.imgUrlsTemp
        });
      }
    });
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
  
  },
  getTxtInfo: function(){
    console.log(_common.formatTime(new Date()));//调用util.js里的方法
    console.log(_common.formatNumber(8));//调用util.js里的方法
    //获取设备信息
    wx.getSystemInfo({
      success: function (res) {
        console.log(res);
      }
    });
    //调用扫一扫功能
    wx.scanCode({
      success: (res) => {
        console.log(res);
      }
    });
    //获取节点元素信息
    var query = wx.createSelectorQuery();
    // query.select('#text1').boundingClientRect(function(ret){
    //   console.log(ret);
    // }).exec();
    query.selectViewport('#text1').boundingClientRect(function (ret) {
      console.log(ret);
    }).exec();
  }
})