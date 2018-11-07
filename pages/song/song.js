// pages/song/song.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    query: '',
    list: null
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
  inputVal: function(e){
    this.setData({
      query: e.detail.value
    })
  },
  getData: function() {
    wx.showLoading({
      title: '正在加载...',
    })
    if (!this.data.query) {
      wx.showToast({
        title: '不能为空！',
        icon: 'none'
      })
      return
    }
    wx.request({
      url: 'https://dogappend.com/api/xiamiSearch',
      data:{
        v: 2.0,
        app_key: 1,
        key: this.data.query,
        page: 2,
        limit: 20,
        _ksTS: '1541576367680_91',
        callback: 'jsonp92',
        r: 'search/songs'
      },
      success: res => {
        wx.hideLoading({})
        this.setData({
          list: res.data.data.songs
        })
      }
    })
  },
  down:function(e) {
    var its = e.currentTarget.dataset.item
    wx.downloadFile({
      url: its.listen_file,
      success: res => {
        console.log(res)
      }
    })
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