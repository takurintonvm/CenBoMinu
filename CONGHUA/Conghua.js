/*

# 葱花视频 时段奖励 分享奖励
==============================================
成功的话请打开App-我的，帮我填下邀请码助力下：261880
==============================================

QX 1.0. 7+ :
[task_local]
0 9 * * * https://raw.githubusercontent.com/CenBoMin/GithubSync/main/CONGHUA/Conghua.js

[rewrite_local]

https:\/\/app\.kxp\.com\/task\/v1\/task_center\/data url script-request-header https://raw.githubusercontent.com/CenBoMin/GithubSync/main/CONGHUA/Conghua.js

https:\/\/app\.kxp\.com\/task\/v1\/task_center\/data url script-request-body https://raw.githubusercontent.com/CenBoMin/GithubSync/main/CONGHUA/Conghua.js
~~~~~~~~~~~~~~~~
[MITM]
hostname = app.kxp.com
~~~~~~~~~~~~~~~~
*/



let s = 200 //各数据接口延迟
const $ = new Env("葱花视频")
const notify = $.isNode() ? require("./sendNotify") : "";

var tz='';
var kz='';
var task='';

const logs = 1;   //0为关闭日志，1为开启
const notifyInterval=1
//0为关闭通知，1为所有通知，2为宝箱领取成功通知，

const dd=1//单次任务延迟,默认1秒


let cookiesArr = [], signheaderVal = '';
let bodyArr = [], signbodyVal = '';
let CookieConghua = [], BodyConghua = [];

if ($.isNode()) {
  if (process.env.CONGHUA_HEADER && process.env.CONGHUA_HEADER.indexOf('#') > -1) {
  CookieConghua = process.env.CONGHUA_HEADER.split('#');
  } else {
      CookieConghua = process.env.CONGHUA_HEADER.split()
  };

  if (process.env.BodyConghua && process.env.BodyConghua.indexOf('#') > -1) {
  BodyConghua = process.env.BodyConghua.split('#');
  } else {
      BodyConghua = process.env.BodyConghua.split()
  };
}

if ($.isNode()) {
    Object.keys(CookieConghua).forEach((item) => {
        if (CookieConghua[item]) {
          cookiesArr.push(CookieConghua[item])
        }
      })

      Object.keys(BodyConghua).forEach((item) => {
          if (BodyConghua[item]) {
            bodyArr.push(BodyConghua[item])
          }
        })

      console.log(`============ 共${cookiesArr.length}个葱花账号  =============\n`)
      console.log(`============ 脚本执行-国际标准时间(UTC)：${new Date().toLocaleString()}  =============\n`)
      console.log(`============ 脚本执行-北京时间(UTC+8)：${new Date(new Date().getTime() + 8 * 60 * 60 * 1000).toLocaleString()}  =============\n`)
    } else {
    cookiesArr.push($.getdata('conghuaheader_zq'));
    bodyArr.push($.getdata('conghuaheader_bd'));
}

if (isGetCookie = typeof $request !== 'undefined') {
  GetCookie();
  $.done();
}

//cookies提示
!(async () => {
 if (!cookiesArr[0]) {
   $.msg($.name, '【提示】请先获取葱花视频一cookie')
   return;
 }
})()


//GetCookie 函数
function GetCookie() {
     if ($request && $request.method != `OPTIONS`&& $request.url.match(/\/task_center\/data/)) {
     const signheaderVal = JSON.stringify($request.headers)
      if (signheaderVal)        $.setdata(signheaderVal,'conghuaheader_zq')
      $.msg(`获取head: 成功🎉`, ``)
    }

    if ($request && $request.method != `OPTIONS`&& $request.url.match(/\/task_center\/data/)) {
    const signbodyVal = JSON.stringify($request.body)
     if (signbodyVal)        $.setdata(signbodyVal,'conghuaheader_bd')
     $.msg(`获取body: 成功🎉`, ``)
   }
   }

//Allfunction
function all(){
         signheaderVal = cookiesArr[K];
         signbodyVal = bodyArr[K];
      for(var i=0;i<4;i++)
    { (function(i) {
               setTimeout(function() {

        if (i==0)
   conghuatask();//任务列表

   else if (i==1&& task.data&&task.data.tasklist[0].status==2)
   everdaycoin();//每天领金币

   else if (i==2&& task.data&&task.data.tasklist[6].status==0)
   sharevideo();//分享任务

   else if (i == 3 && K < cookiesArr.length - 1) {
   K += 1;
   all();
   } else if (i == 3 && K == cookiesArr.length - 1) {
   	 showmsg();//通知
   	 console.log(tz)
               $.done();
             }
           },

           (i + 1) * dd * 1000
         );
       })(i);
     }
   }

//任务列表
function conghuatask() {
   return new Promise((resolve, reject) => {

     const taskurl ={
       url: 'https://app.kxp.com/task/v1/task_center/data',
       headers: JSON.parse(signheaderVal),
       body: JSON.parse(signbodyVal),
    timeout:60000};
      $.get(taskurl,(error, response, data) =>{
        if(logs) $.log(`${jsname}, 任务列表: ${data}`)
        task =JSON.parse(data)
   kz+=
       '【现金余额】:'+
       task.data.activity_money.money+
   	'元\n'+
       '【今日收益】:'+
       (task.data.score/10000).toFixed(2)+
   	'元\n';

   tz+=
       '【现金余额】:'+
       task.data.activity_money.money+
   	'元\n'+
       '【今日收益】:'+
       (task.data.score/10000).toFixed(2)+
   	'元\n'+
       '【已看视频】:'+
       task.data.tasklist[6].status+
       '/3次\n'

   resolve()

       })
      })
     }

//分享视频赚钱（每天三次）
function sharevideo() {
return new Promise((resolve, reject) => {
  const sharevideourl ={
    url: 'https://app.kxp.com/task/v1/task_center/share_video_reward',
    headers: JSON.parse(signheaderVal),
    body: JSON.parse(signbodyVal),
   timeout:60000};
   $.get(sharevideourl,(error, response, data) =>{
     if(logs) $.log(`${jsname}, 视频奖励: ${data}`)
     video =JSON.parse(data)
if (video.code==200)
 {
tz+=
'【视频任务'+video.data.score+'】:获得100金币\n'
}

resolve()
    })
   })
  }

//每天领金币（30min一次）
function everdaycoin() {
    return new Promise((resolve, reject) => {
       const toQQreadboxinfourl ={
         url: 'https://app.kxp.com/task/v1/task_center/red',
         headers: JSON.parse(signheaderVal),
         body: JSON.parse(signbodyVal),
       timeout:60000};
         $.get(toQQreadboxinfourl,(error, response, data) =>{
            if(logs) $.log(`${jsname}, 宝箱奖励详情: ${data}`)
               boxinfo =JSON.parse(data)
      var nowtime=Math.round(new Date() / 1000)
      var cz=boxinfo.remain_time
      var CZ=cz.toFixed(0)-nowtime.toFixed(0)
   if (CZ>=1){
       tz+=
       '【每天领金币】:差'+CZ+'秒\n';
	   kz+=
       '【每天领金币】:差'+CZ+'秒\n';
      }

    else if(CZ<=0) {
       const toQQreadboxurl ={
         url: 'https://app.kxp.com/task/v1/task_center/red',
         headers: JSON.parse(signheaderVal),
         body: JSON.parse(signbodyVal),
       timeout:60000};
        $.get(toQQreadboxurl,(error, response, data) =>{
            if(logs) $.log(`${jsname}, 宝箱奖励: ${data}`)
               box =JSON.parse(data)
   if (box.code==200){
       tz+=
       '获得'+box.data.score+'金币\n'
	   kz+=
       '获得'+box.data.score+'金币\n'
      }

                  })

	        }
          })
    resolve()

    })
 }

function showmsg() {
 tz += `\n\n========= 脚本执行-北京时间(UTC+8)：${new Date(new Date().getTime() + 8 * 60 * 60 * 1000).toLocaleString()} \n\n`;

 let d = new Date(new Date().getTime() + 8 * 60 * 60 * 1000);
 if (d.getHours()==12 && d.getMinutes()<=20 ||d.getHours()==23 && d.getMinutes()>=40 ) {
          notify.sendNotify(jsname,kz)
  }

 if (notifyInterval==1)
 $.msg(jsname,'',tz)//显示所有通知

 else if (notifyInterval==2&&CZ<=0&&boxinfo.data.openNum>0)
 $.msg(jsname,'',tz)//宝箱领取成功通知



 }

// prettier-ignore
function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
