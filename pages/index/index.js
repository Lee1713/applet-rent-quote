//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    quote:"",
    floorArray: [{
      "name": "lower",
      "value": "低层",
      "checked":true,
    }, {
      "name": "middle",
      "value": "中层"
    }, {
      "name": "high",
      "value": "高层"
    }],
    decorationArray: [{
      "name": "simple",
      "value": "\u7b80\u88c5"
    }, {
      "name": "hardcover",
      "value": "\u7cbe\u88c5"
    }, {
      "name": "luxury",
      "value": "\u8c6a\u534e\u88c5"
    }],
    publishDate:'2019-08-12',
    infomation:[],
    selFloor:0,
    selDecoration:0,
    modalHidden:true,
  },

  

  //事件处理函数

  bindFloorPickerChange(e){
    console.log(e.detail.value);
    this.setData({
      selFloor:e.detail.value
    })
  },

  bindDecorationPickerChange(e) {
    console.log(this.data.decorationArray);
    console.log("select is:", e.detail.value);
    this.setData({
      selDecoration: e.detail.value
    })
  },

  bindDateChange: function (e) {
    console.log(e.detail.value);
    this.setData({
      date: e.detail.value
    })
  },

  //submit form
  formSubmit(e){
    console.log("submit data:",e.detail.value);
    var selFloor=this.data.selFloor;
    var selDecoration = this.data.selDecoration;
    var information=e.detail.value;
    var publishDate=this.data.publishDate;
    this.setData({
      infomation:e.detail.value,
      selFloor,
      selDecoration,
      publishDate,
      modalHidden:false
    })
  },

  modalCancel(){
    wx.showToast({
      title: '取消提交',
      icon:'none'
    })
    console.log("cancel ok");
    this.setData({modalHidden:true})
  },

  modalConfirm(){
    wx.showToast({
      title: '提交成功',
      icon:'success'
    })
    console.log("confirm ok");
    this.setData({modalHidden:true})
  },

  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
