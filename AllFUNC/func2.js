
all();
function all() {
  qqreadbodyVal = qqreadbdArr[K];
  qqreadtimeurlVal = qqreadtimeurlArr[K];
  qqreadtimeheaderVal = qqreadtimehdArr[K];
  for (let i = 0; i < 13; i++) {
    (function (i) {
      setTimeout(
        function () {
          if (i == 0)
              qqreadinfo(); // 用户名
          if (i == 1) {
              qqreadwktime(); // 周时长查询
              qqreadconfig(); // 时长查询
              qqreadtrack();//更新
   } else if (i == 2){
        qqreadtask();// 任务列表
          if (config.data &&config.data.pageParams.todayReadSeconds / 3600 <= maxtime)qqreadtime();   // 上传时长
}
     else if (i == 3 ){
              qqreadpick();// 领周时长奖励
    if (task.data && task.data.taskList[0].doneFlag == 0)
        qqreaddayread();// 阅读任务
          if (task.data && task.data.taskList[1].doneFlag == 0)
              qqreadssr1();// 阅读金币1
          if (task.data && task.data.taskList[2].doneFlag == 0) {
              qqreadsign(); // 金币签到
              qqreadtake(); // 阅豆签到
}
          if (task.data && task.data.taskList[3].doneFlag == 0)
              qqreadvideo();// 视频任务
}
     else if (i == 7 ){
       if (task.data && task.data.treasureBox.doneFlag == 0)
              qqreadbox();// 宝箱
          if (task.data && task.data.taskList[1].doneFlag == 0)
              qqreadssr2();// 阅读金币2
          if (task.data && task.data.taskList[2].doneFlag == 0)
              qqreadsign2();// 签到翻倍
}
     else if (i == 8&&task.data &&
task.data.user.amount >= 100000){
          if ($.isNode()&&d.getHours() == 23)
              qqreadwithdraw();//现金提现
     else if (b.getHours() == 23)
              qqreadwithdraw();//现金提现
}

     else if (i == 9){
          if ($.isNode()&&d.getHours() == 23 && d.getMinutes() >= 40)
              qqreadtrans();//今日收益累计
    else  if (b.getHours() == 23 && b.getMinutes() >= 40)
              qqreadtrans();//今日收益累计
}
     else if (i == 11 ){
          if (task.data && task.data.treasureBox.videoDoneFlag == 0)
              qqreadbox2();// 宝箱翻倍
    if (task.data && task.data.taskList[1].doneFlag == 0)
              qqreadssr3();// 阅读金币3
}
     else if (i == 12){
       if ( K < qqreadbdArr.length - 1) {
              K += 1;
              all();
}    else if (K == qqreadbdArr.length - 1) {
              showmsg(); // 通知
              $.done();
  }
 }
},

        (i + 1) * dd * 1000
      );
    })(i);
  }
}
