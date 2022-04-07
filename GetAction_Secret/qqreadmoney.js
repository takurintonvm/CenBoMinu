




const jsname = "企鹅通知提现";
const $ = Env(jsname);
$.idx = ($.idx = ($.getval("qeSuffix") || "1") - 1) > 0 ? `${$.idx + 1}` : ""; // 账号扩展字符
const notify = $.isNode() ? require("./sendNotify") : "";
let info = "";
let tz = "";
let kz = "";
let task = "";
let CASH = 10;
let config = "";
let K = 0;



const logs = 0; // 0为关闭日志，1为开启
const notifyInterval = 1;
// 0为关闭通知，1为所有通知，2为宝箱领取成功通知，3为宝箱每15次通知一次

const dd = 1; // 单次任务延迟,默认1秒
const nowTimes = new Date(
  new Date().getTime() +
    new Date().getTimezoneOffset() * 60 * 1000 +
    8 * 60 * 60 * 1000
);
let wktime;

const qqreadbdArr = [];
let qqreadbodyVal = "";
const qqreadtimeurlArr = [];
let qqreadtimeurlVal = "";
const qqreadtimehdArr = [];
let qqreadtimeheaderVal = "";

if ($.isNode()) {
  Object.keys(qqreadBD).forEach((item) => {
    if (qqreadBD[item]) {
      qqreadbdArr.push(qqreadBD[item]);
    }
  });
  Object.keys(qqreadtimeURL).forEach((item) => {
    if (qqreadtimeURL[item]) {
      qqreadtimeurlArr.push(qqreadtimeURL[item]);
    }
  });
  Object.keys(qqreadtimeHD).forEach((item) => {
    if (qqreadtimeHD[item]) {
      qqreadtimehdArr.push(qqreadtimeHD[item]);
    }
  });
} else {
  qqreadbdArr.push($.getdata("qqreadbd"));
  qqreadtimeurlArr.push($.getdata("qqreadtimeurl"));
  qqreadtimehdArr.push($.getdata("qqreadtimehd"));
  // 根据boxjs中设置的额外账号数，添加存在的账号数据进行任务处理

  const qeCount = ($.getval("qeCount") || "1") - 0;
  for (let i = 2; i <= qeCount; i++) {
    if ($.getdata(`qqreadbd${i}`)) {
      qqreadbdArr.push($.getdata(`qqreadbd${i}`));
      qqreadtimeurlArr.push($.getdata(`qqreadtimeurl${i}`));
      qqreadtimehdArr.push($.getdata(`qqreadtimehd${i}`));
    }
  }
}

if ($.isNode()) {
  daytime =
    new Date(new Date().toLocaleDateString()).getTime() - 8 * 60 * 60 * 1000;
} else {
  daytime = new Date(new Date().toLocaleDateString()).getTime();
}


console.log(
  `\n北京时间(UTC+8)：${new Date(
    new Date().getTime() +
      new Date().getTimezoneOffset() * 60 * 1000 +
      8 * 60 * 60 * 1000
  ).toLocaleString()}\n`
);

console.log(
  `共 ${qqreadbdArr.length} 个${jsname}账号,提现标准为：${CASH} \n`);

all();
function all() {
  if (!qqreadbdArr[0]) {
    $.msg(
      jsname,
      "⚠️提示：您还未获取cookie,请点击前往获取cookie\n",
      "https://m.q.qq.com/a/s/d3eacc70120b9a37e46bad408c0c4c2a",
      { "open-url": "https://m.q.qq.com/a/s/d3eacc70120b9a37e46bad408c0c4c2a" }
    );
    $.done();
  }

  qqreadbodyVal = qqreadbdArr[K];
  qqreadtimeurlVal = qqreadtimeurlArr[K];
  qqreadtimeheaderVal = qqreadtimehdArr[K];
  O = `${jsname + (K + 1)}🔔`;
for (let i = 0; i < 13; i++) {
    (function (i) {
      setTimeout(
        function () {
          if (i == 0) qqreadinfo(); // 用户名
          if (i == 1) {
            if (nowTimes.getHours() === 0 && (nowTimes.getMinutes() >= 0 && nowTimes.getMinutes() <= 40))
          {qqreadtrack()};//更新
            qqreadprint(info)
            qqreadtask(); //任务列表
          } else if (
            i == 8 &&
            CASH >= 1 &&
            task.data.user.amount >= CASH * 10000
          ) {
            qqreadwithdraw(); // 现金提现
          } else if (i == 12) {
            if (K < qqreadbdArr.length - 1) {
              K += 1;
              all();
            } else if (K == qqreadbdArr.length - 1) {
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

function showmsg() {
  console.log(
    `脚本执行 - 北京时间(UTC+8)：${new Date(
      new Date().getTime() +
        new Date().getTimezoneOffset() * 60 * 1000 +
        8 * 60 * 60 * 1000
    ).toLocaleString()}\n`
  );
  if (
    $.isNode() &&
    (nowTimes.getHours() === 12 || nowTimes.getHours() === 23) &&
    nowTimes.getMinutes() >= 0 &&
    nowTimes.getMinutes() <= 30
  ) {
    notify.sendNotify(jsname, kz);
  }
  if (notifyInterval != 1) console.log(tz); // 无通知时，打印通知
  if (notifyInterval == 1) $.msg(jsname, "", tz);
  // 显示所有通知
  else if (
    notifyInterval == 2 &&
    task.data &&
    task.data.treasureBox.doneFlag == 0
  )
    $.msg(jsname, "", tz);
  // 宝箱领取成功通知
  else if (
    (notifyInterval == 3 && task.data && task.data.treasureBox.count == 0) ||
    task.data.treasureBox.count == 15 ||
    task.data.treasureBox.count == 30 ||
    task.data.treasureBox.count == 45 ||
    task.data.treasureBox.count == 60
  )
    $.msg(jsname, "", tz); // 宝箱每15次通知一次
}
// 任务列表
function qqreadtask() {
  return new Promise((resolve, reject) => {
    const toqqreadtaskurl = {
      url: "https://mqqapi.reader.qq.com/mqq/red_packet/user/page?fromGuid=",
      headers: JSON.parse(qqreadtimeheaderVal),

      timeout: 60000,
    };
    $.get(toqqreadtaskurl, (error, response, data) => {
      if (logs) $.log(`${jsname}, 任务列表: ${data}`);
      task = JSON.parse(data);
      tz +=
          `【现金余额】:${(task.data.user.amount / 10000).toFixed(2)}元\n` +
          `【宝箱任务${task.data.treasureBox.count + 1}】:${
            task.data.treasureBox.timeInterval/1000
        }秒后领取\n` +
          `【已开宝箱】:${task.data.treasureBox.count}个\n`;
      resolve();
    });
  });
}
// 更新
function qqreadtrack() {
  return new Promise((resolve, reject) => {
    const body = qqreadbodyVal.replace(new RegExp(/"dis":[0-9]{13}/), `"dis":${new Date().getTime()}`)
    const toqqreadtrackurl = {
      url: "https://mqqapi.reader.qq.com/log/v4/mqq/track",
      headers: JSON.parse(qqreadtimeheaderVal),
      body: body,
      timeout: 60000,
    };
    $.post(toqqreadtrackurl, (error, response, data) => {
      if (logs) $.log(`${jsname}, 更新: ${data}`);
      let track = JSON.parse(data);
      tz += `【数据更新】:更新${track.msg}\n`;
      resolve();
    });
  });
}
// 提现
function qqreadwithdraw() {
  return new Promise((resolve, reject) => {
    const toqqreadwithdrawurl = {
      url: `https://mqqapi.reader.qq.com/mqq/red_packet/user/withdraw?amount=${
        CASH * 10000
      }`,
      headers: JSON.parse(qqreadtimeheaderVal),
      timeout: 60000,
    };
    $.post(toqqreadwithdrawurl, (error, response, data) => {
      if (logs) $.log(`${O}, 提现: ${data}`);
      const withdraw = JSON.parse(data);
      if (withdraw.data.code == 0) {
        tz += `【现金提现】:成功提现${CASH}元\n`;
        kz += `【现金提现】:成功提现${CASH}元\n`;
      }
      resolve();
    });
  });
}
// 用户名
function qqreadinfo() {
  return new Promise((resolve, reject) => {
    const toqqreadinfourl = {
      url: "https://mqqapi.reader.qq.com/mqq/user/init",
      headers: JSON.parse(qqreadtimeheaderVal),
      timeout: 60000,
    };
    $.get(toqqreadinfourl, (error, response, data) => {
      if (logs) $.log(`${O}, 用户名: ${data}`);
      info = JSON.parse(data);
      if (!info.data.user)
        $.msg(
          `【${O}】`,
          "COOKE失效：❌❌❌请点击前往获取cookie\n",
          "https://m.q.qq.com/a/s/d3eacc70120b9a37e46bad408c0c4c2a",
          {
            "open-url":
              "https://m.q.qq.com/a/s/d3eacc70120b9a37e46bad408c0c4c2a",
          }
        );
      if (info.data.user.nickName) {
        kz += `\n========== 【${info.data.user.nickName}】 ==========\n`;
        tz += `\n========== 【${info.data.user.nickName}】 ==========\n`;
      }
      resolve();
    });
  });
}

function qqreadprint(info){
  console.log(`\n========== 【${info.data.user.nickName}】 ==========\n`+'\n\n'+'QQREAD_BODY copy下面的值:'+'\n\n'+qqreadbodyVal+'\n\n'+'QQREAD_TIMEURL copy下面的值'+'\n\n'+qqreadtimeurlVal+'\n\n'+'QQREAD_TIMEHD copy下面的值'+'\n\n'+qqreadtimeheaderVal+'\n\n')
}



// prettier-ignore
function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
