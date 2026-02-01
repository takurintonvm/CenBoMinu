const $ = new Env("UCPIG");
var Base64 = {

  // private property
  keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="

    // public method for encoding
    ,
  encode: function(input) {
      var output = "";
      var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
      var i = 0;

      input = Base64.utf8encode(input);

      while (i < input.length) {
        chr1 = input.charCodeAt(i++);
        chr2 = input.charCodeAt(i++);
        chr3 = input.charCodeAt(i++);

        enc1 = chr1 >> 2;
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        enc4 = chr3 & 63;

        if (isNaN(chr2)) {
          enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
          enc4 = 64;
        }

        output = output +
          this.keyStr.charAt(enc1) + this.keyStr.charAt(enc2) +
          this.keyStr.charAt(enc3) + this.keyStr.charAt(enc4);
      } // Whend

      return output;
    } // End Function encode


    // public method for decoding
    ,
  decode: function(input) {
      var output = "";
      var chr1, chr2, chr3;
      var enc1, enc2, enc3, enc4;
      var i = 0;

      input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
      while (i < input.length) {
        enc1 = this.keyStr.indexOf(input.charAt(i++));
        enc2 = this.keyStr.indexOf(input.charAt(i++));
        enc3 = this.keyStr.indexOf(input.charAt(i++));
        enc4 = this.keyStr.indexOf(input.charAt(i++));

        chr1 = (enc1 << 2) | (enc2 >> 4);
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        chr3 = ((enc3 & 3) << 6) | enc4;

        output = output + String.fromCharCode(chr1);

        if (enc3 != 64) {
          output = output + String.fromCharCode(chr2);
        }

        if (enc4 != 64) {
          output = output + String.fromCharCode(chr3);
        }

      } // Whend

      output = Base64.utf8decode(output);

      return output;
    } // End Function decode


    // private method for UTF-8 encoding
    ,
  utf8encode: function(string) {
      var utftext = "";
      string = string.replace(/\r\n/g, "\n");

      for (var n = 0; n < string.length; n++) {
        var c = string.charCodeAt(n);

        if (c < 128) {
          utftext += String.fromCharCode(c);
        } else if ((c > 127) && (c < 2048)) {
          utftext += String.fromCharCode((c >> 6) | 192);
          utftext += String.fromCharCode((c & 63) | 128);
        } else {
          utftext += String.fromCharCode((c >> 12) | 224);
          utftext += String.fromCharCode(((c >> 6) & 63) | 128);
          utftext += String.fromCharCode((c & 63) | 128);
        }

      } // Next n

      return utftext;
    } // End Function utf8encode

    // private method for UTF-8 decoding
    ,
  utf8decode: function(utftext) {
    var string = "";
    var i = 0;
    var c, c1, c2, c3;
    c = c1 = c2 = 0;

    while (i < utftext.length) {
      c = utftext.charCodeAt(i);

      if (c < 128) {
        string += String.fromCharCode(c);
        i++;
      } else if ((c > 191) && (c < 224)) {
        c2 = utftext.charCodeAt(i + 1);
        string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
        i += 2;
      } else {
        c2 = utftext.charCodeAt(i + 1);
        c3 = utftext.charCodeAt(i + 2);
        string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
        i += 3;
      }

    } // Whend

    return string;
  } // End Function utf8decode

};
const hostcoral2 = "https://coral2.uc.cn/";
const hostucwallet = "https://ucwallet.uc.cn/";
const hostcoraltask = "https://coral-task.uc.cn/";
const tgmarkcode = "/submitactivitycodes ucpigapp@"
const githubkeyUrl = 'https://raw.githubusercontent.com/CenBoMin/TGBOTCode/main/ucpigapp.js'
let ucpigapp = $.getjson('ucpigapp', [])
let ucpigappkey = $.getval('ucpigappkey');
//============================
//+++++++++ 执行函数 ++++++++++
//============================
!(async () => {
  cc = (`${$.name}任务执行通知🔔`);
  console.log("\n* Author:CenBoMin\n* Github:github.com/CenBoMin/GithubSync\n* Telegram:https://t.me/CbScript\n* Updatetime:2021.06.01\n");
  console.log(`Now login(UTC+8):${new Date(new Date().getTime()).toLocaleString()}`)
  if (typeof $request !== "undefined") {
    $.log('【提示】请先前往获取cookie📲')
  } else if (!ucpigappkey) {
    $.log(`\n🤖[${$.name}]:开始下载脚本使用权限秘钥...`)
    await githubkey();
  } else {
    let ckList = ucpigapp.filter(ck => ck.hd).map((ck) => ({
      uid: ck.uid,
      headers: JSON.parse(ck.hd),
      exchangebody: ck.exchange,
      txmoneybody: ck.txmoney,
      pigawardurl: ck.pigawardurl,
      pigawardbody: ck.pigawardbody,
      videotask1: ck.videotask1,
      videotask2: ck.videotask2,
      videoaward: ck.videoaward,
      coinurl: ck.coinurl,

      //===================================
    }));
    console.log(`\n🤖[${$.name}]:~ System💲脚本账号数量 `)
    console.log(`→本次执行共${ckList.length}个账号`)
    for (let i = 0; i < ckList.length; i++) {
      tkList = ckList[i];
      if (!tkList.uid) {
        $.log('【提示】请先前往获取 用户基础数据Uid 📲')
      } else {
        // await main(i);
        $.log(`\n🗝[${$.name}]:开始验证~用户${i+1}-脚本使用权限...`)
        if (z(i)) {
          $.log(`用户${i+1}(ID:${tkList.uid}):~ 秘钥验证成功！🎉`);
          $.log(`\n🤖[${$.name}]:~ System💲/执行脚本\n开始执行 👤User${i+1}的脚本任务`)
          await main(i);
        } else {
          $.log(`用户${i+1}(ID:${tkList.uid}):~ 秘钥验证失败！`);
          $.log(`\n🗝[${$.name}]:~ System💲/尝试更新~脚本使用权限秘钥... `)
          await githubkey("again");
          $.log(`\n🗝[${$.name}]:再次验证~用户${i+1}-脚本使用权限...`)
          if (z()) {
            $.log(`用户${i+1}(ID:${tkList.uid}):~ 秘钥验证成功！🎉`);
            $.log(`\n🤖[${$.name}]:~ System💲/执行脚本\n开始执行 User${i+1}的脚本任务`)
            await main(i);
          } else {
            $.log(`❌用户${i+1}(ID:${tkList.uid}):~ 秘钥验证失败！`);
            $.log(`\n⚠️用户${i+1}:~ 请在群内提交互助码,如果已提交请稍后再试试。\n🔺验证码提交格式:${tgmarkcode}${tkList.uid}`);
            $.msg($.name, '', `⚠️用户${i+1}:~ 请在群内提交验证码,如果已提交请稍后再试试。\n🔺验证码提交格式:${tgmarkcode}${tkList.uid}`);
          }
        }
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


async function main(i) {
  console.log(`\n🐷[${$.name}]:~ User${i+1}💲查询元宝数量`)
  await getUserInfo();
  console.log(`\n🐷[${$.name}]:~ User${i+1}💲测试执行视频任务`)
  await videoTaskTest1();
  await videoTaskTest2();
  if (videotest1 === true && videotest2 === false) {
    console.log(`→测试结果:使用【第一天】的视频任务组,开始执行任务\n`);
    // console.log(tkList.videotask1.length);
    for (let k = 0; k < tkList.videotask1.length; k++) {
      await videoTaskDay1(k);
      await $.wait(1000)
    }
  } else if (videotest1 === false && videotest2 === true) {
    console.log(`→测试结果:可以执行任务🎉\n`);
    for (var m = 0; m < tkList.videoaward.length; m++) {
      await videoAward(m);
      await $.wait(1000);
    }
  } else {
    console.log(`→测试结果:视频任务已完成🎉`);
  }

  console.log(`\n🐷[${$.name}]:~ User${i+1}💲测试领取视频奖励`)
  await videoAwardTest();
  if (awardstate === 2) {
    for (var m = 0; m < tkList.videoaward.length; m++) {
      await videoAward(m)
    }
  } else {
    console.log(`→测试结果:视频奖励已领取🎉`);
  }
  console.log(`\n🐷[${$.name}]:~ User${i+1}💲收小猪扑满的元宝`)
  await pigAward();
  console.log(`\n🐷[${$.name}]:~ User${i+1}💲元宝转换为现金`)
  await exchangeMoney();
  console.log(`\n🐷[${$.name}]:~ User${i+1}💲提现`)
  await txMoney();

}
//++++++++++++++++++++++++++++++++++++
function initTaskOptions(url, body) {
  return {
    url: `${url}`,
    headers: {
      'Accept': `*/*`,
      'Origin': `https://broccoli.uc.cn`,
      'Connection': `keep-alive`,
      'Accept-Encoding': `gzip, deflate`,
      'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X; zh-CN) AppleWebKit/537.51.1 (KHTML, like Gecko) Mobile/12H143 UCBrowser/13.3.3.1458 Mobile UCWebARUA`,
      'Accept-Language': `zh-cn`
    },
    body: body
  };
}

function z() {
  const ll = decodeURIComponent(Base64.decode(ucpigappkey))

  function f(id) {
    try {
      if (ll.indexOf(id) > -1) {
        return true;
      }
    } catch (e) {
      $.log(e);
      return false;
    }
  }
  if (f(tkList.uid)) {
    return true;
  } else {
    return false;
  }
}
//============================
//+++++++++ 任务函数 ++++++++++
//============================

async function txMoney() {
  return new Promise((resolve) => {
    const options = initTaskOptions(`${hostucwallet}exchange/submitExchange`,tkList.txmoneybody);
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            // $.log(data)
            data = JSON.parse(data);
            const code = data.code
            switch (code) {
              case "EXCHANGE:INVALID_USER":
                $.log('【提示】请先前往获取 提现支付宝cookie📲')
                break;
              default:
                console.log(`**** sample *****\n`);
                $.log(`\n‼️${resp.statusCode}[txMoney 调试log]:${resp.body}`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//转换现金
async function exchangeMoney() {
  return new Promise((resolve) => {
    const options = initTaskOptions(`${hostcoral2}piggybank/withdraw/exchange`,tkList.exchangebody);
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            // $.log(data)
            data = JSON.parse(data);
            const code = data.code
            switch (code) {
              case "SCENE_APP_ERROR":
                $.log('【提示】请先前往获取 元宝兑换cookie📲')
                break;
              default:
                $.log(`\n‼️${resp.statusCode}[exchangeMoney 调试log]:${resp.body}`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//收元宝
async function pigAward() {
  return new Promise((resolve) => {
    const options = initTaskOptions(tkList.pigawardurl, tkList.pigawardbody);
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            // $.log(data)
            data = JSON.parse(data);
            const state = data.success
            switch (state) {
              case false:
                console.log(`→小猪扑满元宝已收完🎉`);
                break;
              case true:
                console.log(`✔️小猪扑满收取${data.data.prizes[0].rewardItem.amount}元宝`);
                break;
              default:
                $.log(`\n‼️${resp.statusCode}[ pigAward 调试log]:${resp.body}`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//视频奖励
async function videoAward(m) {
  return new Promise((resolve) => {
    const options = initTaskOptions(tkList.videoaward[m]);
    $.get(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            // $.log(data)
            data = JSON.parse(data);
            const code = data.code
            switch (code) {
              case "REPEAT_REQUEST_ID":
                console.log(`→执行结果:失败❌`);
                break;
              case "OK":
                console.log(`✔️执行ID${data.data.curTask.id}结果:领取奖励${data.data.prizes[0].rewardItem.amount}元宝成功🎉`);
                break;
              default:
                $.log(`\n‼️${resp.statusCode}[videoAward 调试log]:${resp.body}`);

            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//视频奖励测试
async function videoAwardTest() {
  let testArrNum = Random(0, tkList.videoaward.length)
  console.log(`→随机测试奖励数据:第${testArrNum+1}个数据`);
  return new Promise((resolve) => {
    const options = initTaskOptions(tkList.videoaward[testArrNum]);
    $.get(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            // $.log(data)
            data = JSON.parse(data);
            awardtest = data.success
            awardstate = data.data.state
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//视频任务2
async function videoTaskDay2(h) {
  return new Promise((resolve) => {
    const options = initTaskOptions(tkList.videotask2[h]);
    $.get(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            // $.log(data)
            data = JSON.parse(data);
            const code = data.code
            switch (code) {
              case "REPEAT_REQUEST_ID":
                console.log(`→执行结果:失败❌`);
                break;
              case "OK":
                console.log(`✔️执行ID${data.data.curTask.id}结果:观看视频任务${data.data.curTask.target}成功🎉`);
                break;
              default:
                $.log(`\n‼️${resp.statusCode}[videoTaskDay2调试log]:${resp.body}`);

            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//视频任务1
async function videoTaskDay1(k) {
  return new Promise((resolve) => {
    const options = initTaskOptions(tkList.videotask1[k]);
    $.get(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            // $.log(data)
            data = JSON.parse(data);
            const code = data.code
            switch (code) {
              case "REPEAT_REQUEST_ID":
                console.log(`→执行结果:失败❌`);
                break;
              case "OK":
                console.log(`✔️执行ID${data.data.curTask.id}结果:观看视频任务${data.data.curTask.target}成功🎉`);
                break;
              default:
                $.log(`\n‼️${resp.statusCode}[videoTaskDay1调试log]:${resp.body}`);

            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//视频任务测试
async function videoTaskTest1() {
  return new Promise((resolve) => {
    let testArrNum = Random(0, tkList.videotask1.length)
    console.log(`→随机测试视频第一组:第${testArrNum+1}个数据`);
    const options = initTaskOptions(tkList.videotask1[testArrNum]);
    $.get(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            // $.log(data)
            data = JSON.parse(data);
            videotest1 = data.success
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
async function videoTaskTest2() {
  return new Promise((resolve) => {
    let testArrNum = Random(0, tkList.videotask2.length)
    console.log(`→随机测试视频第二组:第${testArrNum+1}个数据`);
    const options = initTaskOptions(tkList.videotask2[testArrNum]);
    $.get(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            // $.log(data)
            data = JSON.parse(data);
            videotest2 = data.success
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//查元宝
async function getUserInfo() {
  return new Promise((resolve) => {
    const options = initTaskOptions(`${tkList.coinurl}`);
    $.get(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            // $.log(data)
            data = JSON.parse(data);
            const code = data.code
            mycoin = data.data.longterm.amount
            switch (code) {
              case "OK":
                console.log(`→目前小猪元宝${mycoin}个,大约可换现金${mycoin/10000}元`);
                break;
              default:
                $.log(`\n‼️${resp.statusCode}[getUserInfo 调试log]:${resp.body}`);

            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}

//============================
//++++++++ 自定义函数 ++++++++
//============================
function formatDateTime(inputTime) {
  var date = new Date(inputTime);
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  m = m < 10 ? ('0' + m) : m;
  var d = date.getDate();
  d = d < 10 ? ('0' + d) : d;
  var h = date.getHours();
  h = h < 10 ? ('0' + h) : h;
  var minute = date.getMinutes();
  var second = date.getSeconds();
  minute = minute < 10 ? ('0' + minute) : minute;
  second = second < 10 ? ('0' + second) : second;
  return y + m;
};

function safeGet(data) {
  try {
    if (typeof JSON.parse(data) == "object") {
      return true;
    }
  } catch (e) {
    console.log(e);
    console.log(`⛔️服务器访问数据为空，请检查自身设备网络情况`);
    return false;
  }
}
async function githubkey(keystate) {
  return new Promise((resolve) => {
    let url = {
      url: `${githubkeyUrl}`,
    };
    $.get(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          switch (keystate) {
            case "again":
              ucpigappkey = Base64.encode(data);
              if (ucpigappkey) $.setdata(ucpigappkey, 'ucpigappkey');
              break;
            default:
              ucpigappkey = Base64.encode(data);
              $.log(ucpigappkey);
              if (ucpigappkey) $.setdata(ucpigappkey, 'ucpigappkey');
              $.log(`\n🤖[${$.name}]:请重新执行脚本进行秘钥验证`);
              $.msg($.name, '', `🤖请重新执行脚本进行秘钥验证`);
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}

function Random(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}
//============================
//+++++++++ 环境函数 ++++++++++
//============================
function Env(name, opts) {
  class Http {
    constructor(env) {
      this.env = env
    }
    send(opts, method = 'GET') {
      opts = typeof opts === 'string' ? {
        url: opts
      } : opts
      let sender = this.get
      if (method === 'POST') {
        sender = this.post
      }
      return new Promise((resolve, reject) => {
        sender.call(this, opts, (err, resp, body) => {
          if (err) reject(err)
          else resolve(resp)
        })
      })
    }
    get(opts) {
      return this.send.call(this.env, opts)
    }
    post(opts) {
      return this.send.call(this.env, opts, 'POST')
    }
  }
  return new(class {
    constructor(name, opts) {
      this.name = name
      this.http = new Http(this)
      this.data = null
      this.dataFile = 'box.dat'
      this.logs = []
      this.isMute = false
      this.isNeedRewrite = false
      this.logSeparator = '\n'
      this.startTime = new Date().getTime()
      Object.assign(this, opts)
      this.log('', `🔔${this.name}, 开始!`)
    }
    isNode() {
      return 'undefined' !== typeof module && !!module.exports
    }
    isQuanX() {
      return 'undefined' !== typeof $task
    }
    isSurge() {
      return 'undefined' !== typeof $httpClient && 'undefined' === typeof $loon
    }
    isLoon() {
      return 'undefined' !== typeof $loon
    }
    isShadowrocket() {
      return 'undefined' !== typeof $rocket
    }
    toObj(str, defaultValue = null) {
      try {
        return JSON.parse(str)
      } catch {
        return defaultValue
      }
    }
    toStr(obj, defaultValue = null) {
      try {
        return JSON.stringify(obj)
      } catch {
        return defaultValue
      }
    }
    getjson(key, defaultValue) {
      let json = defaultValue
      const val = this.getdata(key)
      if (val) {
        try {
          json = JSON.parse(this.getdata(key))
        } catch {}
      }
      return json
    }
    setjson(val, key) {
      try {
        return this.setdata(JSON.stringify(val), key)
      } catch {
        return false
      }
    }
    getScript(url) {
      return new Promise((resolve) => {
        this.get({
          url
        }, (err, resp, body) => resolve(body))
      })
    }
    runScript(script, runOpts) {
      return new Promise((resolve) => {
        let httpapi = this.getdata('@chavy_boxjs_userCfgs.httpapi')
        httpapi = httpapi ? httpapi.replace(/\n/g, '').trim() : httpapi
        let httpapi_timeout = this.getdata('@chavy_boxjs_userCfgs.httpapi_timeout')
        httpapi_timeout = httpapi_timeout ? httpapi_timeout * 1 : 20
        httpapi_timeout = runOpts && runOpts.timeout ? runOpts.timeout : httpapi_timeout
        const [key, addr] = httpapi.split('@')
        const opts = {
          url: `http://${addr}/v1/scripting/evaluate`,
          body: {
            script_text: script,
            mock_type: 'cron',
            timeout: httpapi_timeout
          },
          headers: {
            'X-Key': key,
            'Accept': '*/*'
          }
        }
        this.post(opts, (err, resp, body) => resolve(body))
      }).catch((e) => this.logErr(e))
    }
    loaddata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require('fs')
        this.path = this.path ? this.path : require('path')
        const curDirDataFilePath = this.path.resolve(this.dataFile)
        const rootDirDataFilePath = this.path.resolve(process.cwd(), this.dataFile)
        const isCurDirDataFile = this.fs.existsSync(curDirDataFilePath)
        const isRootDirDataFile = !isCurDirDataFile && this.fs.existsSync(rootDirDataFilePath)
        if (isCurDirDataFile || isRootDirDataFile) {
          const datPath = isCurDirDataFile ? curDirDataFilePath : rootDirDataFilePath
          try {
            return JSON.parse(this.fs.readFileSync(datPath))
          } catch (e) {
            return {}
          }
        } else return {}
      } else return {}
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require('fs')
        this.path = this.path ? this.path : require('path')
        const curDirDataFilePath = this.path.resolve(this.dataFile)
        const rootDirDataFilePath = this.path.resolve(process.cwd(), this.dataFile)
        const isCurDirDataFile = this.fs.existsSync(curDirDataFilePath)
        const isRootDirDataFile = !isCurDirDataFile && this.fs.existsSync(rootDirDataFilePath)
        const jsondata = JSON.stringify(this.data)
        if (isCurDirDataFile) {
          this.fs.writeFileSync(curDirDataFilePath, jsondata)
        } else if (isRootDirDataFile) {
          this.fs.writeFileSync(rootDirDataFilePath, jsondata)
        } else {
          this.fs.writeFileSync(curDirDataFilePath, jsondata)
        }
      }
    }
    lodash_get(source, path, defaultValue = undefined) {
      const paths = path.replace(/\[(\d+)\]/g, '.$1').split('.')
      let result = source
      for (const p of paths) {
        result = Object(result)[p]
        if (result === undefined) {
          return defaultValue
        }
      }
      return result
    }
    lodash_set(obj, path, value) {
      if (Object(obj) !== obj) return obj
      if (!Array.isArray(path)) path = path.toString().match(/[^.[\]]+/g) || []
      path.slice(0, -1).reduce((a, c, i) => (Object(a[c]) === a[c] ? a[c] : (a[c] = Math.abs(path[i + 1]) >> 0 === +path[i + 1] ? [] : {})), obj)[path[path.length - 1]] = value
      return obj
    }
    getdata(key) {
      let val = this.getval(key)
      if (/^@/.test(key)) {
        const [, objkey, paths] = /^@(.*?)\.(.*?)$/.exec(key)
        const objval = objkey ? this.getval(objkey) : ''
        if (objval) {
          try {
            const objedval = JSON.parse(objval)
            val = objedval ? this.lodash_get(objedval, paths, '') : val
          } catch (e) {
            val = ''
          }
        }
      }
      return val
    }
    setdata(val, key) {
      let issuc = false
      if (/^@/.test(key)) {
        const [, objkey, paths] = /^@(.*?)\.(.*?)$/.exec(key)
        const objdat = this.getval(objkey)
        const objval = objkey ? (objdat === 'null' ? null : objdat || '{}') : '{}'
        try {
          const objedval = JSON.parse(objval)
          this.lodash_set(objedval, paths, val)
          issuc = this.setval(JSON.stringify(objedval), objkey)
        } catch (e) {
          const objedval = {}
          this.lodash_set(objedval, paths, val)
          issuc = this.setval(JSON.stringify(objedval), objkey)
        }
      } else {
        issuc = this.setval(val, key)
      }
      return issuc
    }
    getval(key) {
      if (this.isSurge() || this.isLoon()) {
        return $persistentStore.read(key)
      } else if (this.isQuanX()) {
        return $prefs.valueForKey(key)
      } else if (this.isNode()) {
        this.data = this.loaddata()
        return this.data[key]
      } else {
        return (this.data && this.data[key]) || null
      }
    }
    setval(val, key) {
      if (this.isSurge() || this.isLoon()) {
        return $persistentStore.write(val, key)
      } else if (this.isQuanX()) {
        return $prefs.setValueForKey(val, key)
      } else if (this.isNode()) {
        this.data = this.loaddata()
        this.data[key] = val
        this.writedata()
        return true
      } else {
        return (this.data && this.data[key]) || null
      }
    }
    initGotEnv(opts) {
      this.got = this.got ? this.got : require('got')
      this.cktough = this.cktough ? this.cktough : require('tough-cookie')
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar()
      if (opts) {
        opts.headers = opts.headers ? opts.headers : {}
        if (undefined === opts.headers.Cookie && undefined === opts.cookieJar) {
          opts.cookieJar = this.ckjar
        }
      }
    }
    get(opts, callback = () => {}) {
      if (opts.headers) {
        delete opts.headers['Content-Type']
        delete opts.headers['Content-Length']
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          opts.headers = opts.headers || {}
          Object.assign(opts.headers, {
            'X-Surge-Skip-Scripting': false
          })
        }
        $httpClient.get(opts, (err, resp, body) => {
          if (!err && resp) {
            resp.body = body
            resp.statusCode = resp.status
          }
          callback(err, resp, body)
        })
      } else if (this.isQuanX()) {
        if (this.isNeedRewrite) {
          opts.opts = opts.opts || {}
          Object.assign(opts.opts, {
            hints: false
          })
        }
        $task.fetch(opts).then((resp) => {
          const {
            statusCode: status,
            statusCode,
            headers,
            body
          } = resp
          callback(null, {
            status,
            statusCode,
            headers,
            body
          }, body)
        }, (err) => callback(err))
      } else if (this.isNode()) {
        this.initGotEnv(opts)
        this.got(opts).on('redirect', (resp, nextOpts) => {
          try {
            if (resp.headers['set-cookie']) {
              const ck = resp.headers['set-cookie'].map(this.cktough.Cookie.parse).toString()
              if (ck) {
                this.ckjar.setCookieSync(ck, null)
              }
              nextOpts.cookieJar = this.ckjar
            }
          } catch (e) {
            this.logErr(e)
          }
        }).then((resp) => {
          const {
            statusCode: status,
            statusCode,
            headers,
            body
          } = resp
          callback(null, {
            status,
            statusCode,
            headers,
            body
          }, body)
        }, (err) => {
          const {
            message: error,
            response: resp
          } = err
          callback(error, resp, resp && resp.body)
        })
      }
    }
    post(opts, callback = () => {}) {
      const method = opts.method ? opts.method.toLocaleLowerCase() : 'post'
      if (opts.body && opts.headers && !opts.headers['Content-Type']) {
        opts.headers['Content-Type'] = 'application/x-www-form-urlencoded'
      }
      if (opts.headers) delete opts.headers['Content-Length']
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          opts.headers = opts.headers || {}
          Object.assign(opts.headers, {
            'X-Surge-Skip-Scripting': false
          })
        }
        $httpClient[method](opts, (err, resp, body) => {
          if (!err && resp) {
            resp.body = body
            resp.statusCode = resp.status
          }
          callback(err, resp, body)
        })
      } else if (this.isQuanX()) {
        opts.method = method
        if (this.isNeedRewrite) {
          opts.opts = opts.opts || {}
          Object.assign(opts.opts, {
            hints: false
          })
        }
        $task.fetch(opts).then((resp) => {
          const {
            statusCode: status,
            statusCode,
            headers,
            body
          } = resp
          callback(null, {
            status,
            statusCode,
            headers,
            body
          }, body)
        }, (err) => callback(err))
      } else if (this.isNode()) {
        this.initGotEnv(opts)
        const {
          url,
          ..._opts
        } = opts
        this.got[method](url, _opts).then((resp) => {
          const {
            statusCode: status,
            statusCode,
            headers,
            body
          } = resp
          callback(null, {
            status,
            statusCode,
            headers,
            body
          }, body)
        }, (err) => {
          const {
            message: error,
            response: resp
          } = err
          callback(error, resp, resp && resp.body)
        })
      }
    }
    time(fmt, ts = null) {
      const date = ts ? new Date(ts) : new Date()
      let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'H+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds(),
        'q+': Math.floor((date.getMonth() + 3) / 3),
        'S': date.getMilliseconds()
      }
      if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
      for (let k in o)
        if (new RegExp('(' + k + ')').test(fmt))
          fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))
      return fmt
    }
    msg(title = name, subt = '', desc = '', opts) {
      const toEnvOpts = (rawopts) => {
        if (!rawopts) return rawopts
        if (typeof rawopts === 'string') {
          if (this.isLoon()) return rawopts
          else if (this.isQuanX()) return {
            'open-url': rawopts
          }
          else if (this.isSurge()) return {
            url: rawopts
          }
          else return undefined
        } else if (typeof rawopts === 'object') {
          if (this.isLoon()) {
            let openUrl = rawopts.openUrl || rawopts.url || rawopts['open-url']
            let mediaUrl = rawopts.mediaUrl || rawopts['media-url']
            return {
              openUrl,
              mediaUrl
            }
          } else if (this.isQuanX()) {
            let openUrl = rawopts['open-url'] || rawopts.url || rawopts.openUrl
            let mediaUrl = rawopts['media-url'] || rawopts.mediaUrl
            return {
              'open-url': openUrl,
              'media-url': mediaUrl
            }
          } else if (this.isSurge()) {
            let openUrl = rawopts.url || rawopts.openUrl || rawopts['open-url']
            return {
              url: openUrl
            }
          }
        } else {
          return undefined
        }
      }
      if (!this.isMute) {
        if (this.isSurge() || this.isLoon()) {
          $notification.post(title, subt, desc, toEnvOpts(opts))
        } else if (this.isQuanX()) {
          $notify(title, subt, desc, toEnvOpts(opts))
        }
      }
      if (!this.isMuteLog) {
        let logs = ['', '==============📣系统通知📣==============']
        logs.push(title)
        subt ? logs.push(subt) : ''
        desc ? logs.push(desc) : ''
        console.log(logs.join('\n'))
        this.logs = this.logs.concat(logs)
      }
    }
    log(...logs) {
      if (logs.length > 0) {
        this.logs = [...this.logs, ...logs]
      }
      console.log(logs.join(this.logSeparator))
    }
    logErr(err, msg) {
      const isPrintSack = !this.isSurge() && !this.isQuanX() && !this.isLoon()
      if (!isPrintSack) {
        this.log('', `❗️${this.name}, 错误!`, err)
      } else {
        this.log('', `❗️${this.name}, 错误!`, err.stack)
      }
    }
    wait(time) {
      return new Promise((resolve) => setTimeout(resolve, time))
    }
    done(val = {}) {
      const endTime = new Date().getTime()
      const costTime = (endTime - this.startTime) / 1000
      this.log('', `🔔${this.name}, 结束! 🕛 ${costTime} 秒`)
      this.log()
      if (this.isSurge() || this.isQuanX() || this.isLoon()) {
        $done(val)
      }
    }
  })(name, opts)
}
