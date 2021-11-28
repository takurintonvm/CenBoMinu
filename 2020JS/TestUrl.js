const $ = new Env('test')
$.testUrl = 'https://app.kxp.com/video/v1/video/complete'
$.result = []
!(async () => {
  await testgogogo()
  await showMsg()
})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())


function testgogogo() {
    return new Promise((resolve) => {
      const url = {
        url: $.testUrl,
        headers: {"Accept":"*/*","Accept-Encoding":"gzip, deflate, br","Connection":"keep-alive","Content-Type":"application/x-www-form-urlencoded","Host":"app.kxp.com","User-Agent":"cong hua shi pin/1.4.6 (iPhone; iOS 14.1; Scale/2.00)","Content-Length":"1582","Accept-Language":"zh-Hans-CN;q=1"},
        body: `app_name=onion_video&app_version=1.4.6&carrier=%E4%B8%AD%E5%9B%BD%E7%A7%BB%E5%8A%A8&channel=80000000&device_brand=Apple&device_id=23312&device_model=iPhone%206s&device_type=iOS&fp=D2KGQBB0zPI%2B6ZZk0V2qiFTojKN1Y1wLLxt6UZzFTN47wXe4&language=zh-CN&memory=2G&network_type=4G&openudid=AACACC09-FDF0-4314-A4EE-D77275A45BCC&os_api=14.1&os_version=14.1&resolution=750%2A1334&sign=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJmcCI6IkQyS0dRQkIwelBJJTJCNlpaazBWMnFpRlRvaktOMVkxd0xMeHQ2VVp6RlRONDd3WGU0IiwidmVyc2lvbl9jb2RlIjoiMS40LjYiLCJsYW5ndWFnZSI6InpoLUNOIiwidG9rZW5faWQiOiJkN2I0ZDYwYjFhMDQ0MmRiMGU0Njc4NTdlYWU2Njc0ZSIsInN0b3JhZ2UiOiIxMjBHIiwiYXBwX25hbWUiOiJvbmlvbl92aWRlbyIsImFwcF92ZXJzaW9uIjoiMS40LjYiLCJuZXR3b3JrX3R5cGUiOiI0RyIsInZpZGVvX2lkIjoiNzkyMzMzIiwiY2hhbm5lbCI6IjgwMDAwMDAwIiwiZGV2aWNlX2lkIjoiMjMzMTIiLCJyZXNvbHV0aW9uIjoiNzUwJTJBMTMzNCIsIm9wZW51ZGlkIjoiQUFDQUNDMDktRkRGMC00MzE0LUE0RUUtRDc3Mjc1QTQ1QkNDIiwidG9rZW4iOiJNREF3TURBd01EQXdNTHk2bzl5Qm9LZXNncC1CYjM2Z2pLbUtkbjl2eWF2UlpiUFByZC13bkhtWXNxcDF6SUZsZ0dpQ2VhT2lqb21JcElobWlLaklpTGVjczVqUG5LLUdqZHV5cW5uYmY1eDBySUI1cUhJIiwidWlkIjoiMjYxODgwIiwib3NfYXBpIjoiMTQuMSIsImNhcnJpZXIiOiIlRTQlQjglQUQlRTUlOUIlQkQlRTclQTclQkIlRTUlOEElQTgiLCJvc192ZXJzaW9uIjoiMTQuMSIsImRldmljZV9tb2RlbCI6ImlQaG9uZSs2cyIsImRldmljZV90eXBlIjoiaU9TIiwiZGV2aWNlX2JyYW5kIjoiQXBwbGUiLCJtZW1vcnkiOiIyRyJ9.MYFkgVBSc1BN2Mrug7AAIrMJwPbn5lgythsN0rPqLfDUjoYNAPtLdE4TUjMDw2O6HYSHaoA_NvNKcOD3LyJU7w&storage=120G&token=MDAwMDAwMDAwMLy6o9yBoKesgp-Bb36gjKmKdn9vyavRZbPPrd-wnHmYsqp1zIFlgGiCeaOijomIpIhmiKjIiLecs5jPnK-Gjduyqnnbf5x0rIB5qHI&token_id=d7b4d60b1a0442db0e467857eae6674e&uid=261880&version_code=1.4.6&video_id=792333`
       }
      $.get(url, (err, resp, data) => {
        try {
          const obj = JSON.parse(data)
          if (obj.code == 200) {
            $.result.push(obj.msg)
            $.result.push(obj.data.score)
          }
        } catch (e) {
          $.logErr(e, resp)
        } finally {
          resolve()
        }
      })
    })
  }

function showMsg() {
    return new Promise((resolve) => {
      $.msg($.name, "", $.result.join('\n'));
      resolve();
    });
  }


// prettier-ignore
  function Env(t,s){return new class{constructor(t,s){this.name=t,this.data=null,this.dataFile="box.dat",this.logs=[],this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,s),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient}isLoon(){return"undefined"!=typeof $loon}loaddata(){if(!this.isNode)return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),s=this.path.resolve(process.cwd(),this.dataFile),e=this.fs.existsSync(t),i=!e&&this.fs.existsSync(s);if(!e&&!i)return{};{const i=e?t:s;try{return JSON.parse(this.fs.readFileSync(i))}catch{return{}}}}}writedata(){if(this.isNode){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),s=this.path.resolve(process.cwd(),this.dataFile),e=this.fs.existsSync(t),i=!e&&this.fs.existsSync(s),o=JSON.stringify(this.data);e?this.fs.writeFileSync(t,o):i?this.fs.writeFileSync(s,o):this.fs.writeFileSync(t,o)}}lodash_get(t,s,e){const i=s.replace(/\[(\d+)\]/g,".$1").split(".");let o=t;for(const t of i)if(o=Object(o)[t],void 0===o)return e;return o}lodash_set(t,s,e){return Object(t)!==t?t:(Array.isArray(s)||(s=s.toString().match(/[^.[\]]+/g)||[]),s.slice(0,-1).reduce((t,e,i)=>Object(t[e])===t[e]?t[e]:t[e]=Math.abs(s[i+1])>>0==+s[i+1]?[]:{},t)[s[s.length-1]]=e,t)}getdata(t){let s=this.getval(t);if(/^@/.test(t)){const[,e,i]=/^@(.*?)\.(.*?)$/.exec(t),o=e?this.getval(e):"";if(o)try{const t=JSON.parse(o);s=t?this.lodash_get(t,i,""):s}catch(t){s=""}}return s}setdata(t,s){let e=!1;if(/^@/.test(s)){const[,i,o]=/^@(.*?)\.(.*?)$/.exec(s),h=this.getval(i),a=i?"null"===h?null:h||"{}":"{}";try{const s=JSON.parse(a);this.lodash_set(s,o,t),e=this.setval(JSON.stringify(s),i),console.log(`${i}: ${JSON.stringify(s)}`)}catch{const s={};this.lodash_set(s,o,t),e=this.setval(JSON.stringify(s),i),console.log(`${i}: ${JSON.stringify(s)}`)}}else e=$.setval(t,s);return e}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,s){return this.isSurge()||this.isLoon()?$persistentStore.write(t,s):this.isQuanX()?$prefs.setValueForKey(t,s):this.isNode()?(this.data=this.loaddata(),this.data[s]=t,this.writedata(),!0):this.data&&this.data[s]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,s=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?$httpClient.get(t,(t,e,i)=>{!t&&e&&(e.body=i,e.statusCode=e.status,s(t,e,i))}):this.isQuanX()?$task.fetch(t).then(t=>{const{statusCode:e,statusCode:i,headers:o,body:h}=t;s(null,{status:e,statusCode:i,headers:o,body:h},h)},t=>s(t)):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,s)=>{try{const e=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(e,null),s.cookieJar=this.ckjar}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:e,statusCode:i,headers:o,body:h}=t;s(null,{status:e,statusCode:i,headers:o,body:h},h)},t=>s(t)))}post(t,s=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),delete t.headers["Content-Length"],this.isSurge()||this.isLoon())$httpClient.post(t,(t,e,i)=>{!t&&e&&(e.body=i,e.statusCode=e.status,s(t,e,i))});else if(this.isQuanX())t.method="POST",$task.fetch(t).then(t=>{const{statusCode:e,statusCode:i,headers:o,body:h}=t;s(null,{status:e,statusCode:i,headers:o,body:h},h)},t=>s(t));else if(this.isNode()){this.initGotEnv(t);const{url:e,...i}=t;this.got.post(e,i).then(t=>{const{statusCode:e,statusCode:i,headers:o,body:h}=t;s(null,{status:e,statusCode:i,headers:o,body:h},h)},t=>s(t))}}msg(s=t,e="",i="",o){this.isSurge()||this.isLoon()?$notification.post(s,e,i):this.isQuanX()&&$notify(s,e,i),this.logs.push("","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="),this.logs.push(s),e&&this.logs.push(e),i&&this.logs.push(i)}log(...t){t.length>0?this.logs=[...this.logs,...t]:console.log(this.logs.join(this.logSeparator))}logErr(t,s){const e=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();e?$.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):$.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.message)}wait(t){return new Promise(s=>setTimeout(s,t))}done(t=null){const s=(new Date).getTime(),e=(s-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${e} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,s)}
