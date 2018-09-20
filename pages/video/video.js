Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoSrc: 'https://partybuild-jsk.oss-cn-hangzhou.aliyuncs.com/ELLV1549.mp4'
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
  userList: function () {
    wx.addPhoneContact({
      fileName: '锦毛鼠',
      nickName: '锦毛鼠',
      mobilePhoneNumber:'13453235465',
      photoFilePath: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537420040891&di=739a45d6c09068a1ac02a6d2a11316c3&imgtype=0&src=http%3A%2F%2Fs2.sinaimg.cn%2Fmw690%2F003zeDt1zy72R1iPIl371'
    })
  },
  ScanQr:function(){
    var _this = this;
    wx.scanCode({
      success:function(res){
        _this.setData({
          "res": res
        })
        console.log("result", result)
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