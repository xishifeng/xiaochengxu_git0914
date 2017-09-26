// pages/input/input.js
const _common = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    logoOri: 'https://web.fujuhaofang.com/houseImg/small_fba86fef8cf2c8d091c233ce537ae738.jpg',
    inputContent: {}
  },
  bindChange: function (e) {
    this.data.inputContent[e.currentTarget.id] = e.detail.value;
    console.log(this.data.inputContent);
  },
  clickOk: function(){
    console.log(_common.ServerHost);
    console.log(_common.preUrlPath);
    var _this = this;
    _this.callBackClickOk(function(e){
      wx.request({
        url: _common.ServerHost + _common.preUrlPath + 'input_cs_one.php', //仅为示例，并非真实的接口地址
        method: 'POST',
        dataType: 'json',
        data: _this.data.inputContent,
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          wx.showActionSheet({
            itemList: ['A', 'B', 'C'],
            success: function (res) {
              console.log(res.tapIndex)
            },
            fail: function (res) {
              console.log(res.errMsg)
            }
          });
          console.log(res.data);//开发者服务器返回的数据
          console.log(res.statusCode);//开发者服务器返回的 HTTP 状态码
          console.log(res.header);//开发者服务器返回的 HTTP Response Header
        }
      });
    });
    
  },
  callBackClickOk:function(fn1,fn2){
    wx.showModal({
      title: '提示',
      content: '这是内容',
      success: function (res) {
        if (res.confirm) {
          fn1();
        } else if (res.cancel) {
          //
        }
      }
    });
  },
  chooseImageTap: function(){
    let _this = this;
    wx.showActionSheet({
      itemList: ['从相册中选择', '拍照'],
      itemColor: "#f7982a",
      success: function (res) {
        if (!res.cancel) {
          if (res.tapIndex == 0) {
            _this.chooseWxImage('album')
          } else if (res.tapIndex == 1) {
            _this.chooseWxImage('camera')
          }
        }
      }
    })
  },
  chooseWxImage: function (type) {
    let _this = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'],
      sourceType: [type],
      success: function (res) {
        console.log(res);
        _this.setData({
          logoOri: res.tempFilePaths[0],
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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