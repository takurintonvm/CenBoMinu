var retcode = 0
var level_up_status = 2
var bullish = 400


if (retcode == 0) {
  while(retcode == 0){
    if(level_up_status == 0){
      console.log(`开始执行【自动喂牛气】日常任务`)
    }else{
      break;
    }
  }
  while(retcode == 0){
    if(level_up_status == 1){
      console.log(`开始执行【自动喂牛气】升级任务`)
    }else{
      break;
    }
  }
} else {
  console.log(`已没有牛气,本次任务已完成 🎉\n`)
}

if (bullish >= 500) {
  while(bullish >= 500){
      console.log(`执行 🎉\n`)
  }
} else {
  console.log(`已没有牛气,本次任务已完成 🎉\n`)
}
