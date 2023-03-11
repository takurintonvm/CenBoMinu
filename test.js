async function delaytime(x,y){
  var x = mintime
  var y = maxtime
  function Randomtime(mintime, maxtime) {
      return Math.round(Math.random() * (maxtime - mintime)) + mintime;
  }
  let randomtime = Randomtime(mintime,maxtime) / 1000
  await $.wait(Randomtime(mintime,maxtime));
  console.log(`【随机延迟🕑】:${randomtime}秒...`);
}

!(async () => {
  await delaytime(1000,5000)
})()
.catch((e) => $.logErr(e))
  .finally(() => $.done())
