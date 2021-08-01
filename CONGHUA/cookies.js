
!(async () => {
 if (!cookiesArr[0]) {
   $.msg($.name, '【提示】请先获取葱花视频一cookie')
   return;
 }
 for (let i = 0; i < cookiesArr.length; i++) {
   if (cookiesArr[i]) {
     signheaderVal = cookiesArr[i];
     $.index = i + 1;
     console.log(`-------------------------\n\n开始【葱花视频${$.index}】`)
   }
 await signInfo();
 await everydaycoin();
 await videoshare();
 await showmsg();
 await notify.sendNotify(`【收益总计】${signinfo.data.score}金币  现金约${signinfo.data.money}元\n`)

}
})()
 .catch((e) => $.logErr(e))
 .finally(() => $.done())
