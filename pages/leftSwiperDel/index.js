// pages/leftSwiperDel/index.js
Page({
  data:{
    delBtnWidth:180//删除按钮宽度单位（rpx）
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    this.initEleWidth();
    this.tempData();
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  touchS:function(e){
    if(e.touches.length==1){
      this.setData({
        //设置触摸起始点水平方向位置
        startX:e.touches[0].clientX
      });
    }
  },
  touchM:function(e){
    if(e.touches.length==1){
      //手指移动时水平方向位置
      var moveX = e.touches[0].clientX;
      //手指起始点位置与移动期间的差值
      var disX = this.data.startX - moveX;
      var delBtnWidth = this.data.delBtnWidth;
      var txtStyle = "";
      if(disX == 0 || disX < 0){//如果移动距离小于等于0，文本层位置不变
        txtStyle = "left:0px";
      }else if(disX > 0 ){//移动距离大于0，文本层left值等于手指移动距离
        txtStyle = "left:-"+disX+"px";
        if(disX>=delBtnWidth){
          //控制手指移动距离最大值为删除按钮的宽度
          txtStyle = "left:-"+delBtnWidth+"px";
        }
      }
      //获取手指触摸的是哪一项
      var index = e.target.dataset.index;
      var list = this.data.list;
      list[index].txtStyle = txtStyle; 
      //更新列表的状态
      this.setData({
        list:list
      });
    }
  },

  touchE:function(e){
    if(e.changedTouches.length==1){
      //手指移动结束后水平位置
      var endX = e.changedTouches[0].clientX;
      //触摸开始与结束，手指移动的距离
      var disX = this.data.startX - endX;
      var delBtnWidth = this.data.delBtnWidth;
      //如果距离小于删除按钮的1/2，不显示删除按钮
      var txtStyle = disX > delBtnWidth/2 ? "left:-"+delBtnWidth+"px":"left:0px";
      //获取手指触摸的是哪一项
      var index = e.target.dataset.index;
      var list = this.data.list;
      list[index].txtStyle = txtStyle;
      //更新列表的状态
      this.setData({
        list:list
      });
    }
  },
  //获取元素自适应后的实际宽度
  getEleWidth:function(w){
    var real = 0;
    try {
      var res = wx.getSystemInfoSync().windowWidth;
      var scale = (750/2)/(w/2);//以宽度750px设计稿做宽度的自适应
      // console.log(scale);
      real = Math.floor(res/scale);
      return real;
    } catch (e) {
      return false;
     // Do something when catch error
    }
  },
  initEleWidth:function(){
    var delBtnWidth = this.getEleWidth(this.data.delBtnWidth);
    this.setData({
      delBtnWidth:delBtnWidth
    });
  },
  //点击删除按钮事件
  delItem:function(e){
    //获取列表中要删除项的下标
    var index = e.target.dataset.index;
    var list = this.data.list;
    //移除列表中下标为index的项
    list.splice(index,1);
    //更新列表的状态
    this.setData({
      list:list
    });
  },
  //测试临时数据
  tempData:function(){
    var list = [
        {
          txtStyle:"",
          icon:"/images/icon0.png",
          txt:"向左滑动可以删除"
        },
        {
          txtStyle:"",
          icon:"/images/icon6.png",
          txt:"微信小程序|联盟（wxapp-union.com）"
        },
        {
          txtStyle:"",
          icon:"/images/icon1.png",
          txt:"圣诞老人是爸爸，顺着烟囱往下爬，礼物塞满圣诞袜，平安糖果一大把"
        },
        {
          txtStyle:"",
          icon:"/images/icon2.png",
          txt:"圣诞到来，元旦还会远吗？在圣诞这个日子里"
        },
        {
          txtStyle:"",
          icon:"/images/icon3.png",
          txt:"圣诞节(Christmas或Cristo Messa ),译名为“基督弥撒”。"
        },
        {
          txtStyle:"",
          icon:"/images/icon4.png",
          txt:"一年一度的圣诞节即将到来,姑娘们也纷纷开始跑趴了吧!"
        },
        {
          txtStyle:"",
          icon:"/images/icon5.png",
          txt:"圣诞节(Christmas或Cristo Messa ),译名为“基督弥撒”。"
        },
        {
          txtStyle:"",
          icon:"/images/icon2.png",
          txt:"你的圣诞节礼物准备好了吗?"
        },
        {
          txtStyle:"",
          icon:"/images/icon3.png",
          txt:"一年一度的圣诞节即将到来,姑娘们也纷纷开始跑趴了吧!"
        },
        {
          txtStyle:"",
          icon:"/images/icon4.png",
          txt:"圣诞到来，元旦还会远吗？"
        },
        {
          txtStyle:"",
          icon:"/images/icon5.png",
          txt:"记下这一刻的心情"
        },

      ];
    
    this.setData({
      list:list
    });
  }
  
})
