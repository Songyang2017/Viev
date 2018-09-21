Page({
  data:{
    btns:[]
  },
  weather:function(){
    wx.navigateTo({
      url:'../weather/weather'
    })
  },
  apiSetting:function(){
    wx.navigateTo({
      url: '../api/api'
    })
  },
  video:function(){
    wx.navigateTo({
      url: '../video/video'
    })
  },
  gotoMus:function(){
    wx.navigateTo({
      url: '../downLoad/dIndex'
    })
  }
})