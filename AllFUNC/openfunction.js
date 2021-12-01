!(async () => {
  if (!qqreadtimehdArr[0]) {
    $.msg($.name, '提示：⚠️请点击前往获取cookie\n');
    return;
  }
  console.log(`------------- 共${qqreadtimehdArr.length}个账号`)
  //openbox number ：4-72
  for (let i = 0; i < qqreadtimehdArr.length; i++) {
    if (qqreadtimehdArr[i]) {
       qqreadbodyVal = qqreadbdArr[i];
       qqreadtimeurlVal = qqreadtimeurlArr[i];
       qqreadtimeheaderVal = qqreadtimehdArr[i];
       $.index = i + 1;
       console.log(`\n\n开始【企鹅阅读刷宝箱${$.index}】`)
      await qqreadinfo();
      await qqreadtask();
      await showmsg();
   if (task.data && task.data.treasureBox.doneFlag == 0){
      await qqreadbox();
      await showmsg();
      await $.wait(1000);

   }
   if (task.data && task.data.treasureBox.videoDoneFlag == 0){
      await qqreadbox2();
      await showmsg();
             }
  }
}

})()

.catch((e) => {
  $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
})
.finally(() => {
  $.done();
})
