Page({
  data:{
    url: ''
  },
  onLoad:function(){
    
  }, 
  onReady: function (e) {
    this.audioCtx = wx.createAudioContext('myAudio');
  },
  audioPlay: function () {
    
  },
  bindFormSubmit: function (e) {
    var val = e.detail.value.textarea;
    this.loadAudo(val)
    var _this = this;
    wx.request({
      url: 'https://openapi.baidu.com/oauth/2.0/token',
      data: {
        grant_type: 'client_credentials',
        client_id: 'cWcdOjUChBxhSPonUbZ6MqrD',
        client_secret: 'dvbo9SG2q8DwODgfwUIWdUZpsFxgBGvW'
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        var access_token = res.data.access_token;
        console.log('token', access_token)
        var url = 'http://tsn.baidu.com/text2audio?lan=zh&ctp=1&cuid=abcdxxx&tok=' + access_token + '&tex=' + val + '&vol=9&per=0&spd=5&pit=5&aue=3'
        console.log(res)
        _this.setData({
          url: url
        })
        console.log('url',url)
        // 使用 wx.createAudioContext 获取 audio 上下文 context
        console.log('success', val)
        setTimeout(function () {
          _this.audioCtx.play();
        }, 0)
      },
      // success: function () {
        
      // }
    })
  },
  loadAudo:function(){
    
    
  }
  
})