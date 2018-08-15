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
      url: '../api/api',
    })
  }
})