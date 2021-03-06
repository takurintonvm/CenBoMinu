
if (isGetCookie = typeof $request !== 'undefined') {
   GetCookie();
   $.done()
}

 !(async () => {
  if (!cookiesArr[0]) {
    $.msg($.name, '【提示】请先获取中青看点一cookie')
    return;
  }
  for (let i = 0; i < cookiesArr.length; i++) {
    if (cookiesArr[i]) {
      signheaderVal = cookiesArr[i];
      articlebodyVal = readArr[i];
      timebodyVal = timeArr[i];
      redpbodyVal = redpArr[i];
      $.index = i + 1;
      console.log(`-------------------------\n\n开始【中青看点${$.index}】`)
    }
  await sign();
  await signInfo();
  await friendsign();
if($.time('HH')>12){
  await punchCard()
};
if ($.isNode()&& $.time('HH')>20&&$.time('HH')<22){
  await endCard();
  }
else if ($.time('HH')>4&&$.time('HH')<8){
  await endCard();
  }
  await SevCont();
  await ArticleShare();
  await openbox();
  await getAdVideo();
  await gameVideo();
  await readArticle();
  await Articlered();
  await readTime();
  await rotary();
  await rotaryCheck();
  await earningsInfo();
  await showmsg();
  if ($.isNode()&&rotaryres.code !== '10010')
    if( rotarytimes && rotarytimes%50 == 0 && cash >= 10){
       await notify.sendNotify($.name + " " + nick, "您的余额约为"+cash+"元，已可以提现"+'\n'+`【收益总计】${signinfo.data.user.score}青豆  现金约${cash}元\n${detail}`)
    }
 }
})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())


function GetCookie() {
     if ($request && $request.method != `OPTIONS`&& $request.url.match(/\/TaskCenter\/(sign|getSign)/)) {
     const signheaderVal = JSON.stringify($request.headers)
      if (signheaderVal)        $.setdata(signheaderVal,'youthheader_zq')
      $.log(`${$.name} 获取Cookie: 成功,signheaderVal: ${signheaderVal}`)
      $.msg($.name, `获取Cookie: 成功🎉`, ``)
    }
  else if ($request && $request.method != `OPTIONS`&& $request.url.match(/\/article\/complete/)) {
     const articlebodyVal = $request.body
      if (articlebodyVal)        $.setdata(articlebodyVal,'read_zq')
      $.log(`${$.name} 获取阅读: 成功,articlebodyVal: ${articlebodyVal}`)
      $.msg($.name, `获取阅读请求: 成功🎉`, ``)
    }
  else if ($request && $request.method != `OPTIONS`&& $request.url.match(/\/v5\/user\/app_stay/)) {
     const timebodyVal = $request.body
      if (timebodyVal)        $.setdata(timebodyVal,'readtime_zq')
      $.log(`${$.name} 获取阅读: 成功,timebodyVal: ${timebodyVal}`)
      $.msg($.name, `获取阅读时长: 成功🎉`, ``)
    }
  else if ($request && $request.method != `OPTIONS`&& $request.url.match(/\/article\/red_packet/)) {
     const redpbodyVal = $request.body
      if (redpbodyVal)        $.setdata(redpbodyVal, 'red_zq')
      $.log(`${$.name} 获取惊喜红包: 成功,redpbodyVal: ${redpbodyVal}`)
      $.msg($.name, `获取惊喜红包请求: 成功🎉`, ``)
    }
   }
