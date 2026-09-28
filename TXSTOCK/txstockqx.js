const jsname = '📈腾讯自选股'
const $ = Env(jsname)
const runTestTask = false;//测试任务开关
const logs = 0; //0为关闭日志，1为开启,默认为0
const notifyInterval = 1; //0为关闭通知，1为所有通知,默认为0
const taskIDList = new Array();
const tgmarkcode = "/submitactivitycodes txstock@"
const githubkeyUrl = 'https://raw.githubusercontent.com/CenBoMin/TGBOTCode/main/txstock.js'

let rndtime = Math.round(new Date().getTime()) //毫秒
let signday = formatDateTime(new Date());

let tz = '';
let cash = $.getval('cash') || 0; //0为不自动提现,1为自动提现1元,5为自动提现1元

//time
var hour='';
var minute='';
if ($.isNode()) {
   hour = new Date( new Date().getTime() + 8 * 60 * 60 * 1000 ).getHours();
   minute = new Date( new Date().getTime() + 8 * 60 * 60 * 1000 ).getMinutes();
}else{
   hour = (new Date()).getHours();
   minute = (new Date()).getMinutes();
}

const userheaderArr = [];
let userheaderVal = "";
let USERHEADER = [];

const userkeyArr = [];
let userkeyVal = "";
let USERKEY = [];

const cashheaderArr = [];
let cashheaderVal = "";
let CASHHEADER = [];

const signheaderArr = [];
let signheaderVal = "";
let SINGHEADER = [];

const signkeyArr = [];
let signkeyVal = "";
let SINGKEY = [];

const taskheaderArr = [];
let taskheaderVal = "";
let TASKHEADER = [];

const taskkeyArr = [];
let taskkeyVal = "";
let TASKKEY = [];

const wxtaskkeyArr = [];
let wxtaskkeyVal = "";
let WXTASKKEY = [];

if ($.isNode()) {
  Object.keys(userheaderVal).forEach((item) => {
    if (userheaderVal[item]) {
      userheaderArr.push(cashheaderVal[item])
    }
  });
  Object.keys(userkeyVal).forEach((item) => {
    if (userkeyVal[item]) {
      userkeyArr.push(userkeyVal[item])
    }
  });
  Object.keys(cashheaderVal).forEach((item) => {
    if (cashheaderVal[item]) {
      cashheaderArr.push(cashheaderVal[item])
    }
  });
  Object.keys(signheaderVal).forEach((item) => {
    if (signheaderVal[item]) {
      signheaderArr.push(signheaderVal[item])
    }
  });
  Object.keys(signkeyVal).forEach((item) => {
    if (signkeyVal[item]) {
      signkeyArr.push(signkeyVal[item])
    }
  });
  Object.keys(taskheaderVal).forEach((item) => {
    if (taskheaderVal[item]) {
      taskheaderArr.push(taskheaderVal[item])
    }
  });
  Object.keys(taskkeyVal).forEach((item) => {
    if (taskkeyVal[item]) {
      taskkeyArr.push(taskkeyVal[item])
    }
  });
  Object.keys(wxtaskkeyVal).forEach((item) => {
    if (wxtaskkeyVal[item]) {
      wxtaskkeyArr.push(wxtaskkeyVal[item])
    }
  });


} else {
  userheaderArr.push($.getdata('userheader'));
  userkeyArr.push($.getdata('userkey'));
  cashheaderArr.push($.getdata('cashheader'));
  signheaderArr.push($.getdata('signheader'));
  signkeyArr.push($.getdata('signkey'));
  taskheaderArr.push($.getdata('taskheader'));
  taskkeyArr.push($.getdata('taskkey'));
  wxtaskkeyArr.push($.getdata('wxtaskkey'));
}


///////////////////////////////////////////////////////////////////

!(async () => {
  O = (`${jsname}执行通知🔔`);
  userheaderVal = userheaderArr[0];
  userkeyVal = userkeyArr[0];
  cashheaderVal = cashheaderArr[0];
  signheaderVal = signheaderArr[0];
  signkeyVal = signkeyArr[0];
  taskheaderVal = taskheaderArr[0];
  taskkeyVal = taskkeyArr[0];
  wxtaskkeyVal = wxtaskkeyArr[0];
  ////////////// 测试区///////////////
  if (runTestTask) {
    console.log(`\n🏠 逢9必发活动任务执行开始...\n`)
    await ninethIDCheck();
  } else {
    console.log(`\n🏠 目前设置不参加测试活动任务🙅‍♂️\n`)
  }

  ////////////// 测试区///////////////
  if((hour == 15 && minute >= 15) || (hour == 16) || (hour == 17) || (hour == 18) || (hour == 19) || (hour == 20) || (hour == 21) || (hour == 22) || (hour == 23)){
    console.log(`\n🏠 查询目前账户金币\n`)
    await userhome(); //金币查询
    console.log(`\n🏠 执行【签到】任务\n`)
    await signtask();
    console.log(`\n🏠 执行【猜涨跌】任务\n`)
    await runGuessTask();
    console.log(`\n🏠 老版本任务执行开始...\n`)
    await txstock();
    console.log(`\n🏠 新版本任务执行开始...\n`)
    await newtxstock();
    console.log(`\n🏠 执行【自动提现】任务\n`)
    await cashorder(cash, money);
  }else{
    $.log(`时间未到,请将CRON设置到"PM3:15"之后`);
    tz += `时间未到,请将CRON设置到"PM3:15"之后\n`
  }
  await getWXShareCode1();
  await getWXShareCode2();
  console.log(`\n🔺验证码群内提交:复制以下代码到群里贴上\n\n${tgmarkcode}${tasksharecode1}&${tasksharecode2}`);
  console.log(`\n🔺验证码机器人提交:sb键盘提交助力码,复制以下代码回应提交\n\n${tasksharecode1}&${tasksharecode2}`);

  await showmsg();

})()
.catch((e) => $.logErr(e))
  .finally(() => $.done())

//通知
function showmsg() {
  if (notifyInterval != 1) {
    console.log(O + '\n' + tz);
  }

  if (notifyInterval == 1) {
    $.msg(O, '\n', tz);
  }
}

////////////// 测试区///////////////


///////////////////////////////////////////
async function txstock(){
  await taskOldIDCheck();
  await wxtaskOldIDCheck();

}
async function newtxstock(){
  await taskIDCheck();
  await wxtaskIDCheck();

}
async function cashorder(cash, money) {
  if (cash == 1 && money.icon_amount > 10000) {
    console.log(`开始申请票据...`)
    await cashticket(); //申请票据
    console.log(`开始申请提现1元...`)
    await getcash1(cashticket);
  } else if (cash == 5 && money.icon_amount > 48000){
    console.log(`开始申请票据...`)
    await cashticket(); //申请票据
    console.log(`开始申请提现5元...`)
    await getcash5(cashticket);
  } else if (cash == 0 ){
    console.log(`请到BOXJS设置,目前设置为0,不自动提现...`)
    tz += `请到BOXJS设置,目前设置为0,不自动提现...\n`
  } else {
    console.log(`准备执行下一个任务...`)
    tz += `【自动提现】:账户提现余额不足🤦‍♀️\n`
  }
}
async function runGuessTask() {
  console.log(`开始验证【猜涨跌活动】任务状态`)
  await statuid3()
  if (statuid3.done == 1) {
    console.log(`检查本次猜涨跌日期...`)
    await guesstime()
    console.log(`开始自动猜涨跌...`)
    await guessop(guessdate)
    await $.wait(5000); //等待5秒
    console.log(`开始申请票据...`)
    await taskticket(); //申请票据
    console.log(`执行【猜涨跌分享】任务`)
    await taskshare(ticket)
    await $.wait(5000); //等待5秒
    console.log(`执行【猜涨跌每日礼包】任务`)
    await guessred()
  } else {
    console.log(`准备执行下一个任务...\n`)
    tz += `【猜涨跌活动】:已执行\n`
  }
}

function TaskOptions(url) {
  return {
    url: `${url}`,
    headers: {
      'Cookie': `${taskkeyVal}`,
      'Accept': `application/json, text/plain, */*`,
      'Connection': `keep-alive`,
      'Referer': `https://wzq.tenpay.com/activity/page/welwareCenter/`,
      'Accept-Encoding': `gzip, deflate, br`,
      'Host': `wzq.tenpay.com`,
      'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 qqstock/8.7.1`,
      'Accept-Language': `zh-cn`
    }
  };
}
function wxTaskOptions(url, body) {
  return {
    url: `${url}`,
    headers: {
    'Accept' : `application/json, text/plain, */*`,
    'Origin' : `https://wzq.tenpay.com`,
    'Accept-Encoding' : `gzip, deflate, br`,
    'Cookie' : `${wxtaskkeyVal}`,
    'Content-Type' : `application/x-www-form-urlencoded`,
    'Host' : `wzq.tenpay.com`,
    'Connection' : `keep-alive`,
    'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.7(0x18000733) NetType/WIFI Language/zh_CN`,
    'Referer' : `https://wzq.tenpay.com/mp/v2/index.html`,
    'Accept-Language' : `zh-cn`
    },
    body: body
  };
}

///////////////////////////////////////
//任务LIST
async function taskOldIDCheck() {
  return new Promise((resolve) => {
    const options = TaskOptions(`https://wzq.tenpay.com/cgi-bin/activity_task_daily.fcgi?action=home&type=routine&actid=1101&_=${rndtime}&openid=${signheaderVal}`);
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
            const code = data.retcode
            const txTaskList = data.task_pkg[0].tasks
            switch (code) {
              case "0":
                const taskSetIDList = txTaskList.map(item => item.id);
                const taskSetTIDList = txTaskList.map(item => item.tid);
                const taskSetDescList = txTaskList.map(item => item.reward_desc);
                const taskSetStatusList = txTaskList.map(item => item.status);
                for (let j = 0; j < taskSetIDList.length; j++) {
                  let id = taskSetIDList[j]
                  let tid = taskSetTIDList[j]
                  let desc = taskSetDescList[j]
                  let status = taskSetStatusList[j]

                  console.log(`检查-APP老任务id${id}状态`)
                  if (status == "0") {
                    console.log(`→去做APP老任务id${id}:${desc}`)
                    await appoldtaskticket()
                    await runAppOldTask(id,tid,ticket)
                    console.log(`⏳ 等待10sec...\n`);
                    await $.wait(10000); //等待10秒
                  } else {
                    console.log(`APP老任务id${id}已完成 🎉\n`)
                  }
                }
                break;
              default:
                $.log(`\n‼️${resp.statusCode}[调试log]:${resp.body}`);
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
async function taskIDCheck() {
  return new Promise((resolve) => {
    const options = TaskOptions(`https://wzq.tenpay.com/cgi-bin/activity_task_daily.fcgi?action=home&type=routine&actid=1111&_=${rndtime}&openid=${signheaderVal}`);
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
            const code = data.retcode
            const txTaskList = data.task_pkg[0].tasks
            switch (code) {
              case "0":
                const taskSetIDList = txTaskList.map(item => item.id);
                const taskSetTIDList = txTaskList.map(item => item.tid);
                const taskSetDescList = txTaskList.map(item => item.reward_desc);
                const taskSetStatusList = txTaskList.map(item => item.status);
                for (let j = 0; j < taskSetIDList.length; j++) {
                  let id = taskSetIDList[j]
                  let tid = taskSetTIDList[j]
                  let desc = taskSetDescList[j]
                  let status = taskSetStatusList[j]

                  console.log(`检查-APP新任务id${id}状态`)
                  if (status == "0") {
                    console.log(`→去做APP新任务id${id}:${desc}`)
                    await apptaskticket()
                    await runAppTask(id,tid,ticket)
                    console.log(`⏳ 等待10sec...\n`);
                    await $.wait(10000); //等待10秒
                  } else {
                    console.log(`APP新任务id${id}已完成 🎉\n`)
                  }
                }
                break;
              default:
                $.log(`\n‼️${resp.statusCode}[调试log]:${resp.body}`);
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
async function wxtaskOldIDCheck() {
  return new Promise((resolve) => {
    const options = wxTaskOptions(`https://wzq.tenpay.com/cgi-bin/activity_task_daily.fcgi?t=${rndtime}`,`action=home&type=routine&actid=1100`);
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
            const code = data.retcode
            const txTaskList = data.task_pkg[0].tasks
            switch (code) {
              case "0":
                const taskSetIDList = txTaskList.map(item => item.id);
                const taskSetTIDList = txTaskList.map(item => item.tid);
                const taskSetDescList = txTaskList.map(item => item.reward_desc);
                const taskSetStatusList = txTaskList.map(item => item.status);
                for (let j = 0; j < taskSetIDList.length; j++) {
                  let id = taskSetIDList[j]
                  let tid = taskSetTIDList[j]
                  let desc = taskSetDescList[j]
                  let status = taskSetStatusList[j]

                  console.log(`检查-WX老任务id${id}状态`)
                  if (status == "0") {
                    console.log(`→去做WX老任务id${id}:${desc}`)
                    await WXoldtaskticket();
                    await $.wait(2000);
                    await runWXOldTask(id,tid,ticket)
                    console.log(`⏳ 等待10sec...\n`);
                    await $.wait(10000); //等待10秒
                  } else {
                    console.log(`WX老任务id${id}已完成 🎉\n`)
                  }
                }
                break;
              default:
                $.log(`\n‼️${resp.statusCode}[调试log]:${resp.body}`);
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
async function wxtaskIDCheck() {
  return new Promise((resolve) => {
    const options = wxTaskOptions(`https://wzq.tenpay.com/cgi-bin/activity_task_daily.fcgi?t=${rndtime}`,`action=home&type=routine&actid=1110`);
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
            const code = data.retcode
            const txTaskList = data.task_pkg[0].tasks
            switch (code) {
              case "0":
                const taskSetIDList = txTaskList.map(item => item.id);
                const taskSetTIDList = txTaskList.map(item => item.tid);
                const taskSetDescList = txTaskList.map(item => item.reward_desc);
                const taskSetStatusList = txTaskList.map(item => item.status);
                for (let j = 0; j < taskSetIDList.length; j++) {
                  let id = taskSetIDList[j]
                  let tid = taskSetTIDList[j]
                  let desc = taskSetDescList[j]
                  let status = taskSetStatusList[j]

                  console.log(`检查-WX新任务id${id}状态`)
                  if (status == "0") {
                    console.log(`→去做WX新任务id${id}:${desc}`)
                    await WXtaskticket();
                    await $.wait(2000);
                    await runWXTask(id,tid,ticket)
                    console.log(`⏳ 等待10sec...\n`);
                    await $.wait(10000); //等待10秒
                  } else {
                    console.log(`WX新任务id${id}已完成 🎉\n`)
                  }
                }
                break;
              default:
                $.log(`\n‼️${resp.statusCode}[调试log]:${resp.body}`);
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
//做任务
async function runAppTask(id,tid,ticket) {
  return new Promise((resolve) => {
    const options = TaskOptions(`https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?action=taskdone&channel=1&actid=1111&tid=${tid}&id=${id}&task_ticket=${ticket}&_appName=ios${taskheaderVal}`);
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
            const code = data.retcode
            switch (code) {
              case "0":
                $.log(`🆕 APP任务ID${id}:获得 ${data.reward_desc}\n`);
                tz += `【APP新任务ID${id}】:${data.reward_desc}\n`
                break;
              default:
                // $.log(data.retmsg);
                console.log("🚌 本任务需要邀请助力,请复制你的邀请码提交上车");
                await getWXShareCode1();
                await getWXShareCode2();
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
async function runAppOldTask(id,tid,ticket) {
  return new Promise((resolve) => {
    const options = TaskOptions(`https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?action=taskdone&channel=1&actid=1101&tid=${tid}&id=${id}&task_ticket=${ticket}&_appName=ios${taskheaderVal}`);
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
            const code = data.retcode
            switch (code) {
              case "0":
                $.log(`🌟 APP任务ID${id}:获得 ${data.reward_desc}\n`);
                tz += `【APP老任务ID${id}】:${data.reward_desc}\n`
                break;
              default:
                $.log(`\n‼️${resp.statusCode}[调试log]:${resp.body}`);
                // console.log("🚌 本任务需要邀请助力,请复制你的邀请码提交上车");
                // await getWXShareCode1();
                // await getWXShareCode2();
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
async function runWXTask(id,tid,ticket) {
  return new Promise((resolve) => {
    const options = wxTaskOptions(`https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?t=${rndtime}`,`_h5ver=2.0.1&actid=1110&tid=${tid}&id=${id}&task_ticket=${ticket}&action=taskdone`);
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
            const code = data.retcode
            switch (code) {
              case "0":
                $.log(`🆕 WX任务ID${id}:获得${data.reward_desc}\n`);
                tz += `【WX新任务ID${id}】:${data.reward_desc}\n`
                break;
              default:
                // $.log(`\n‼️${resp.statusCode}[调试log]:${resp.body}`);
                console.log("🚌 本任务需要邀请助力,请复制你的邀请码提交上车");
                await getWXShareCode1();
                await getWXShareCode2();
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
async function runWXOldTask(id,tid,ticket) {
  return new Promise((resolve) => {
    const options = wxTaskOptions(`https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?t=${rndtime}`,`_h5ver=2.0.1&actid=1100&tid=${tid}&id=${id}&task_ticket=${ticket}&action=taskdone`);
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
            const code = data.retcode
            switch (code) {
              case "0":
                $.log(`🌟 WX任务ID${id}:获得 ${data.reward_desc}\n`);
                tz += `【WX老任务ID${id}】:${data.reward_desc}\n`
                break;
              default:
                // $.log(`\n‼️${resp.statusCode}[调试log]:${resp.body}`);
                $.log(`‼️执行任务失败:${data.retmsg}`);
                // console.log("🚌 本任务需要邀请助力,请复制你的邀请码提交上车");
                // await getWXShareCode1();
                // await getWXShareCode2();
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
//票据验证
async function apptaskticket() {
  return new Promise((resolve) => {
    const options = TaskOptions(`https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?action=taskticket&channel=1&actid=1111&_rndtime=${rndtime}&_appName=ios${taskheaderVal}`);
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
            $.log(`🕐 ` + time(rndtime));
            $.log(`🎫 ${data.task_ticket}`);
            ticket = data.task_ticket
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
async function appoldtaskticket() {
  return new Promise((resolve) => {
    const options = TaskOptions(`https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?action=taskticket&channel=1&actid=1101&_rndtime=${rndtime}&_appName=ios${taskheaderVal}`);
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
            $.log(`🕐 ` + time(rndtime));
            $.log(`🎫 ${data.task_ticket}`);
            ticket = data.task_ticket
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
async function WXtaskticket() {
  return new Promise((resolve) => {
    const options = wxTaskOptions(`https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?`,`_h5ver=2.0.1&actid=1110&action=taskticket`);
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
            $.log(`🕐 ` + time(rndtime));
            $.log(`🎫 ${data.task_ticket}`);
            ticket = data.task_ticket
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
async function WXoldtaskticket() {
  return new Promise((resolve) => {
    const options = wxTaskOptions(`https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?`,`_h5ver=2.0.1&actid=1100&action=taskticket`);
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
            $.log(`🕐 ` + time(rndtime));
            $.log(`🎫 ${data.task_ticket}`);
            ticket = data.task_ticket
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
// APP分享code获取
async function getShareCode1() {
  return new Promise((resolve) => {
    const options = TaskOptions(`https://wzq.tenpay.com/cgi-bin/activity/activity_share.fcgi?channel=1&action=query_share_code&share_type=task_51_1111&_=${rndtime}&openid=${signheaderVal}`);
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
            const code = data.retcode
            switch (code) {
              case "0":
                tasksharecode = data.share_code
                console.log(`🌀APP分享个股sharecode:${tasksharecode}`);
                break;
              default:
                $.log(`\n‼️${resp.statusCode}[调试log]:${resp.body}`);
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
async function getShareCode2() {
  return new Promise((resolve) => {
    const options = TaskOptions(`https://wzq.tenpay.com/cgi-bin/activity/activity_share.fcgi?channel=1&action=query_share_code&share_type=news_share&_=${rndtime}&openid=${signheaderVal}`);
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
            const code = data.retcode
            switch (code) {
              case "0":
                tasksharecode = data.share_code
                console.log(`🌀APP分享资讯sharecode:${tasksharecode}`);
                break;
              default:
                $.log(`\n‼️${resp.statusCode}[调试log]:${resp.body}`);
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
// WX分享code获取
async function getWXShareCode1() {
  return new Promise((resolve) => {
    const options = wxTaskOptions(`https://wzq.tenpay.com/cgi-bin/activity/activity_share.fcgi?`,`_h5ver=2.0.1&action=query_share_code&share_type=task_51_1110`);
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
            const code = data.retcode
            switch (code) {
              case "0":
                tasksharecode1 = data.share_code
                console.log(`🌀分享个股sharecode:${tasksharecode1}`);
                break;
              default:
                $.log(`\n‼️${resp.statusCode}[调试log]:${resp.body}`);
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
async function getWXShareCode2() {
  return new Promise((resolve) => {
    const options = wxTaskOptions(`https://wzq.tenpay.com/cgi-bin/activity/activity_share.fcgi?`,`_h5ver=2.0.1&action=query_share_code&share_type=news_share`);
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
            const code = data.retcode
            switch (code) {
              case "0":
                tasksharecode2 = data.share_code
                console.log(`🌀分享资讯sharecode:${tasksharecode2}`);
                break;
              default:
                $.log(`\n‼️${resp.statusCode}[调试log]:${resp.body}`);
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
//分享助力
async function runShareTask1(tasksharecode) {
  return new Promise((resolve) => {
    const options = wxTaskOptions(`https://wzq.tenpay.com/cgi-bin/activity/activity_share.fcgi?`,`_h5ver=2.0.1&action=share_code_info&share_type=task_51_1111&share_code=${tasksharecode}`);
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
            const code = data.retcode
            const status = data.share_code_info.status
            switch (code) {
              case "0":
                shareman = data.share_code_info.nickname
                if (status) {
                  console.log(`→${shareman}:谢谢你的分享个股助力！🎉`);
                } else {
                  console.log(`→分享个股助力他人失败！❌`);
                  let randomNum = Random(0,shareCodeSum)
                  let runsharecode = sharecodeArr[randomNum]
                  console.log(`\n🎲 随机挑选一个码助力:\n${runsharecode}`);
                  await $.wait(3000)
                  let runsharetaskcode1 = runsharecode.split("&")[0]
                  // let runsharetaskcode2 = runsharecode.split("&")[1]
                  await runShareTask1(runsharetaskcode1);
                  // await runShareTask2(runsharetaskcode2);

                }
                break;
              default:
                $.log(`\n‼️${resp.statusCode}[调试log]:${resp.body}`);
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
async function runShareTask2(tasksharecode) {
  return new Promise((resolve) => {
    const options = wxTaskOptions(`https://wzq.tenpay.com/cgi-bin/activity/activity_share.fcgi?`,`_h5ver=2.0.1&action=share_code_info&share_type=task_50_1111&share_code=${tasksharecode}`);
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
            const code = data.retcode
            const status = data.share_code_info.status
            switch (code) {
              case "0":
                shareman = data.share_code_info.nickname
                if (status) {
                  console.log(`→${shareman}:谢谢你的分享资讯助力！🎉`);
                } else {
                  console.log(`→分享资讯助力他人失败！❌`);
                  let randomNum = Random(0,shareCodeSum)
                  let runsharecode = sharecodeArr[randomNum]
                  console.log(`\n🎲 随机挑选一个码助力:\n${runsharecode}`);
                  await $.wait(3000)
                  // let runsharetaskcode1 = runsharecode.split("&")[0]
                  let runsharetaskcode2 = runsharecode.split("&")[1]
                  // await runShareTask1(runsharetaskcode1);
                  await runShareTask2(runsharetaskcode2);
                }
                break;
              default:
                $.log(`\n‼️${resp.statusCode}[调试log]:${resp.body}`);
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
async function runShareTask() {
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
          const shareGroupCodeData = JSON.parse(data)
          console.log(`\n🚌 参与任务助力码共有${shareGroupCodeData.length}人,你上车了吗？`);
          const sharecodeList = shareGroupCodeData.map(i => i.code)
          //转换成一个码的数组
          sharecodeArr =  new Array()
          for (let i = 0; i < sharecodeList.length; i++) {
              for (let k = 0; k < sharecodeList[i].length; k++) {
                sharecodeArr.push(sharecodeList[i][k])
              }
          }

          const findMyCode = sharecodeArr.findIndex(i => i.indexOf(tasksharecode1) > -1)
          shareCodeSum = sharecodeArr.length
          if (findMyCode == -1) {
            console.log(`→Oh抱歉,你没有在参与助力的车队里`);
          }else if (findMyCode == 0) {
            console.log(`→Hey!恭喜,你在参与助力的车队里`);
            console.log(`\n🙋 你是头码,将助力最后一位,开始助力任务`);
            let runsharecode = sharecodeArr[shareCodeSum]
            const runsharetaskcode1 = runsharecode.split("&")[0]
            const runsharetaskcode2 = runsharecode.split("&")[1]
            await runShareTask1(runsharetaskcode1);
            await runShareTask2(runsharetaskcode2);

          } else {
            console.log(`→Hey!恭喜,你在参与助力的车队里`);
            console.log(`\n🙋 你的车码:LSBx${findMyCode},开始助力任务`);
            let sharecodeindex = findMyCode - 1
            let runsharecode = sharecodeArr[sharecodeindex]
            const runsharetaskcode1 = runsharecode.split("&")[0]
            const runsharetaskcode2 = runsharecode.split("&")[1]
            await runShareTask1(runsharetaskcode1);
            await runShareTask2(runsharetaskcode2);

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
async function sample() {
  return new Promise((resolve) => {
    const options = TaskOptions(`https://wzq.tenpay.com/cgi-bin/activity_task_daily.fcgi?action=home&type=routine&actid=1111&_=${rndtime}&openid=${signheaderVal}`);
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
            const code = data.retcode
            switch (code) {
              default:
                $.log(`\n‼️${resp.statusCode}[调试log]:${resp.body}`);
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

//////////////////////////////////////////////////////////////////
//签到
async function signtask() {
  return new Promise((resolve) => {
    let signurl = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_sign_task.fcgi?actid=2002&action=signdone&date=${signday}&_=${rndtime}&openid=${signheaderVal}`,

      headers: {
        'Cookie': `${taskkeyVal}`,
        'Accept': `application/json, text/plain, */*`,
        'Connection': `keep-alive`,
        'Referer': `https://wzq.tenpay.com/activity/page/welwareCenter/`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Host': `wzq.tenpay.com`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 qqstock/8.7.1`,
        'Accept-Language': `zh-cn`
      },
    };
    $.get(signurl, async (err, resp, data) => {
      try {
        if (err) {
          console.log("腾讯自选股: API查询请求失败 ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            //问题
            $.log(data)
            data = JSON.parse(data);
            if (data.retcode == 51091020) {
              $.log(`【签到】:${data.retmsg}\n`);
              tz += `【签到】:${data.retmsg}\n`
            } else {
              $.log(`【签到】:获得${data.amount}金币`);
              $.log(`【签到时间】:` + time(rndtime));
              tz += `【签到】:获得${data.amount}金币\n`
              await $.wait(5000); //等待5秒
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
//猜涨跌时间
function guesstime() {
  return new Promise((resolve) => {
    let url = {
      url: `https://zqact.tenpay.com/cgi-bin/guess_home.fcgi?channel=1&source=2&new_version=2&_=${rndtime}&_appName=ios${taskheaderVal}`,

      headers: {
        'Cookie': `${signkeyVal}`,
        'Accept': `application/json, text/plain, */*`,
        'Connection': `keep-alive`,
        'Referer': `https://zqact.tenpay.com/activity/page/guessRiseFall/`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Host': `zqact.tenpay.com`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 qqstock/8.7.1`,
        'Accept-Language': `zh-cn`
      },
    };
    $.get(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("腾讯自选股: API查询请求失败 ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            data = JSON.parse(data);
            guessnum = (data.T_info[0].T_endts)*1000
            nextguessnum = (data.T_info[0].next_T)*1000
            $.log(`本次猜涨跌日期：`+ formatDateTime(guessnum));
            $.log(`下次猜涨跌日期：`+ formatDateTime(nextguessnum));
            guessdate = formatDateTime(guessnum);

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
//提现票据
function cashticket() {
  return new Promise((resolve) => {
    let url = {
      url: `https://zqact.tenpay.com/cgi-bin/shop.fcgi?action=order_ticket&channel=1&type=2&_=${rndtime}&openid=${cashheaderVal}`,

      headers: {
        'Cookie': `${signkeyVal}`,
        'Accept': `application/json, text/plain, */*`,
        'Connection': `keep-alive`,
        'Referer': `https://zqact.tenpay.com/activity/page/guessRiseFall/`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Host': `zqact.tenpay.com`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 qqstock/8.7.1`,
        'Accept-Language': `zh-cn`
      },
    };
    $.get(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("腾讯自选股: API查询请求失败 ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            data = JSON.parse(data);
            $.log(`本次验证时间🕐：` + time(rndtime));
            $.log(`本次验证票据🎫：${data.ticket}\n`);
            cashticket = data.ticket
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
//提现请求
function getcash1(cashticket) {
  return new Promise((resolve) => {
    let url = {
      url: `https://zqact.tenpay.com/cgi-bin/shop.fcgi?action=order&type=2&channel=1&ticket=${cashticket}&item_id=202003102146152a9e8885&_=${rndtime}&openid=${cashheaderVal}`,

      headers: {
        'Cookie': `${signkeyVal}`,
        'Accept': `application/json, text/plain, */*`,
        'Connection': `keep-alive`,
        'Referer': `https://zqact.tenpay.com/activity/page/guessRiseFall/`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Host': `zqact.tenpay.com`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 qqstock/8.7.1`,
        'Accept-Language': `zh-cn`
      },
    };
    $.get(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("腾讯自选股: API查询请求失败 ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            data = JSON.parse(data);
            $.log(`【提现1元结果】:${data.retmsg}🎉`);
            tz += `【提现1元结果】:${data.retmsg}🎉\n`
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
function getcash5(cashticket) {
  return new Promise((resolve) => {
    let url = {
      url: `https://zqact.tenpay.com/cgi-bin/shop.fcgi?action=order&type=2&channel=1&ticket=${cashticket}&item_id=202003102147152ecaa605&_=${rndtime}&openid=${cashheaderVal}`,

      headers: {
        'Cookie': `${signkeyVal}`,
        'Accept': `application/json, text/plain, */*`,
        'Connection': `keep-alive`,
        'Referer': `https://zqact.tenpay.com/activity/page/guessRiseFall/`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Host': `zqact.tenpay.com`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 qqstock/8.7.1`,
        'Accept-Language': `zh-cn`
      },
    };
    $.get(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("腾讯自选股: API查询请求失败 ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            data = JSON.parse(data);
            $.log(`【提现5元结果】:${data.retmsg}🎉`);
            tz += `【提现5元结果】:${data.retmsg}🎉\n`
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
//猜涨跌
function guessop(guessdate) {
  return new Promise((resolve) => {
    let url = {
      url: `https://zqact.tenpay.com/cgi-bin/guess_op.fcgi?action=2&act_id=3&user_answer=1&date=${guessdate}&channel=1&_=${rndtime}&_appName=ios${taskheaderVal}`,

      headers: {
        'Cookie': `${signkeyVal}`,
        'Accept': `application/json, text/plain, */*`,
        'Connection': `keep-alive`,
        'Referer': `https://zqact.tenpay.com/activity/page/guessRiseFall/`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Host': `zqact.tenpay.com`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 qqstock/8.7.1`,
        'Accept-Language': `zh-cn`
      },
    };
    $.get(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("腾讯自选股: API查询请求失败 ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            data = JSON.parse(data);
            if (data.retcode == 0) {
              $.log(`【自动猜涨跌】:成功🎉\n`);
              tz += `【自动猜涨跌】:成功🎉\n`
            } else {
              console.log(`任务完成失败，错误信息：${JSON.stringify(data)}\n`)
              tz += `【自动猜涨跌】:${data.retmsg}\n`
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
//猜涨跌每日礼包
function guessred() {
  return new Promise((resolve) => {
    let guessredurl = {
      url: `https://zqact.tenpay.com/cgi-bin/activity.fcgi?channel=1&activity=guess_new&guess_act_id=3&guess_date=${signday}&guess_reward_type=1&_=${rndtime}&_appName=ios${taskheaderVal}`,

      headers: {
        'Cookie': `${signkeyVal}`,
        'Accept': `application/json, text/plain, */*`,
        'Connection': `keep-alive`,
        'Referer': `https://wzq.tenpay.com/activity/page/welwareCenter/`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Host': `wzq.tenpay.com`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 qqstock/8.7.1`,
        'Accept-Language': `zh-cn`
      },
    };
    $.get(guessredurl, async (err, resp, data) => {
      try {
        if (err) {
          console.log("腾讯自选股: API查询请求失败 ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            data = JSON.parse(data);
            if (data.retcode == 0) {
              $.log(`【猜涨跌每日礼包】:获得 ${data.reward_value}金币`);
              tz += `【猜涨跌每日礼包】:获得 ${data.reward_value}金币\n`
            } else {
              console.log(`任务完成失败，错误信息：${JSON.stringify(data)}`)
              tz += `【猜涨跌每日礼包】:${data.retmsg}\n`
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
//猜涨跌分享奖励
function taskshare(ticket) {
  return new Promise((resolve, reject) => {
    let testurl = {
      url: `https://zqact.tenpay.com/cgi-bin/activity_task.fcgi?actid=1103&tid=18&id=1&channel=1&task_ticket=${ticket}&action=taskdone&_=${rndtime}&_appName=ios${taskheaderVal}`,

      headers: {
        'Cookie': `${signkeyVal}`,
        'Accept': `application/json, text/plain, */*`,
        'Connection': `keep-alive`,
        'Referer': `https://zqact.tenpay.com/activity/page/guessRiseFall/`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Host': `zqact.tenpay.com`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 qqstock/8.7.1`,
        'Accept-Language': `zh-cn`
      },
    }
    $.get(testurl, async (error, resp, data) => {
      if (logs == 1) $.log(data)
        data = JSON.parse(data)
      if (data.retcode == 0) {
        $.log(`【猜涨跌分享】:获得 ${data.reward_desc}\n`);
        tz += `【猜涨跌分享】:获得 ${data.reward_desc}\n`
        await $.wait(10000); //等待10秒
      } else {
        console.log(`任务完成失败，错误信息：${JSON.stringify(data)}\n`)
        tz += `【猜涨跌分享】:${data.retmsg}\n`
      }
      resolve()
    })
  })
}
//金币查询
async function userhome() {
  return new Promise((resolve) => {
    let signurl = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_usercenter.fcgi?channel=1&g_openid=${userheaderVal}`,

      headers: {
        'Cookie': `${userkeyVal}`,
        'Accept': `*/*`,
        'Connection': `keep-alive`,
        'Content-Type': `application/x-www-form-urlencoded`,
        'Referer': `http://zixuanguapp.finance.qq.com`,
        'Host': `wzq.tenpay.com`,
        'User-Agent': `QQStock/8.7.1 (iPhone; iOS 14.1; Scale/2.00)`,
        'Accept-Encoding': `gzip,deflate`,
        'Accept-Language': `zh-Hans-CN;q=1`
      },
    };
    $.get(signurl, async (err, resp, data) => {
      try {
        if (err) {
          console.log("腾讯自选股: API查询请求失败 ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            money = JSON.parse(data);
            $.log(`【账户金币】:${money.icon_amount}金币\n`);
            tz += `【账户金币】:${money.icon_amount}金币\n`;
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

//票据申请
function taskticket() {
  return new Promise((resolve, reject) => {
    let testurl = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?action=taskticket&channel=1&actid=1101&_rndtime=${rndtime}&_appName=ios${taskheaderVal}`,

      headers: {
        'Cookie': `${taskkeyVal}`,
        'Accept': `*/*`,
        'Connection': `keep-alive`,
        'Referer': `http://zixuanguapp.finance.qq.com`,
        'Accept-Encoding': `gzip,deflate`,
        'Host': `wzq.tenpay.com`,
        'User-Agent': `QQStock/8.7.0 (iPhone; iOS 14.1; Scale/2.00)`,
        'Accept-Language': `zh-Hans-CN;q=1, en-CN;q=0.9`
      },
    }
    $.get(testurl, async (error, resp, data) => {
      if (logs == 1) $.log(data)
      let test2 = JSON.parse(data)
      $.log(`🕐 ` + time(rndtime));
      $.log(`🎫 ${test2.task_ticket}`);
      ticket = test2.task_ticket
      //tz += `【现金余额】：¥ ${task.data.activity_money.money}元\n`

      resolve()
    })
  })
}
function wxtaskticket() {
  return new Promise((resolve) => {
    let url = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?t=${rndtime}`,
      body: `_h5ver=2.0.1&actid=1100&action=taskticket`,
      headers: {
        'Accept': `application/json, text/plain, */*`,
        'Origin': `https://wzq.tenpay.com`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Cookie': `${wxtaskkeyVal}`,
        'Content-Type': `application/x-www-form-urlencoded`,
        'Host': `wzq.tenpay.com`,
        'Connection': `keep-alive`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.20(0x1700142b) NetType/4G Language/zh_CN`,
        'Referer': `https://wzq.tenpay.com/mp/v2/index.html`,
        'Accept-Language': `zh-cn`
      },
    };
    $.post(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("腾讯自选股: API查询请求失败 ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            data = JSON.parse(data);
            $.log(`🕐 ` + time(rndtime));
            $.log(`🎫 ${data.task_ticket}`);
            wxticket = data.task_ticket
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

function statuid3() {
  return new Promise((resolve, reject) => {
    let testurl = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?action=taskstatus&channel=1&actid=1101&id=3&tid=9&_appName=ios${taskheaderVal}`,

      headers: {
        'Cookie': `${taskkeyVal}`,
        'Accept': `*/*`,
        'Connection': `keep-alive`,
        'Referer': `http://zixuanguapp.finance.qq.com`,
        'Accept-Encoding': `gzip,deflate`,
        'Host': `wzq.tenpay.com`,
        'User-Agent': `QQStock/8.7.0 (iPhone; iOS 14.1; Scale/2.00)`,
        'Accept-Language': `zh-Hans-CN;q=1, en-CN;q=0.9`
      },
    }
    $.get(testurl, async (error, resp, data) => {
      if (logs == 1) $.log(data)
      statuid3 = JSON.parse(data)
      if (statuid3.done == 1) {
        $.log(`验证状态失败,任务已执行🚫`);
      } else {
        $.log(`验证状态成功,可执行任务🎉`);
      }
      resolve()
    })
  })
}

////////////////////////////////////////////////////////////////////
function Random(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}

function time(time) {
  var date = new Date(time + 8 * 3600 * 1000);
  return date.toJSON().substr(0, 19).replace('T', ' ').replace(/-/g, '.');
}

function safeGet(data) {
  try {
    if (typeof JSON.parse(data) == "object") {
      return true;
    }
  } catch (e) {
    console.log(e);
    console.log(`服务器访问数据为空，请检查自身设备网络情况`);
    return false;
  }
}

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
  return y + m + d;
};

function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      return "POST" === e && (s = this.post), new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s)
        })
      })
    }
    get(t) {
      return this.send.call(this.env, t)
    }
    post(t) {
      return this.send.call(this.env, t, "POST")
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`)
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports
    }
    isQuanX() {
      return "undefined" != typeof $task
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon
    }
    isLoon() {
      return "undefined" != typeof $loon
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t)
      } catch {
        return e
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t)
      } catch {
        return e
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) try {
        s = JSON.parse(this.getdata(t))
      } catch {}
      return s
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e)
      } catch {
        return !1
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i))
      })
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"), a = {
          url: `http://${h}/v1/scripting/evaluate`,
          body: {
            script_text: t,
            mock_type: "cron",
            timeout: r
          },
          headers: {
            "X-Key": o,
            Accept: "*/*"
          }
        };
        this.post(a, (t, e, i) => s(i))
      }).catch(t => this.logErr(t))
    }
    loaddata() {
      if (!this.isNode()) return {}; {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) return {}; {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i))
          } catch (t) {
            return {}
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i)
        if (r = Object(r)[t], void 0 === r) return s;
      return r
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
        if (r) try {
          const t = JSON.parse(r);
          e = t ? this.lodash_get(t, i, "") : e
        } catch (t) {
          e = ""
        }
      }
      return e
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
        }
      } else s = this.setval(t, e);
      return s
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
    }
    get(t, e = (() => {})) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
          }
        } catch (t) {
          this.logErr(t)
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body)
      }))
    }
    post(t, e = (() => {})) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.post(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
      });
      else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => e(t));
      else if (this.isNode()) {
        this.initGotEnv(t);
        const {
          url: s,
          ...i
        } = t;
        this.got.post(s, i).then(t => {
          const {
            statusCode: s,
            statusCode: i,
            headers: r,
            body: o
          } = t;
          e(null, {
            status: s,
            statusCode: i,
            headers: r,
            body: o
          }, o)
        }, t => {
          const {
            message: s,
            response: i
          } = t;
          e(s, i, i && i.body)
        })
      }
    }
    time(t) {
      let e = {
        "M+": (new Date).getMonth() + 1,
        "d+": (new Date).getDate(),
        "H+": (new Date).getHours(),
        "m+": (new Date).getMinutes(),
        "s+": (new Date).getSeconds(),
        "q+": Math.floor(((new Date).getMonth() + 3) / 3),
        S: (new Date).getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
      return t
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) return t;
        if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
          "open-url": t
        } : this.isSurge() ? {
          url: t
        } : void 0;
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            }
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            }
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            }
          }
        }
      };
      this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
      let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
      h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h)
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t))
    }
    done(t = {}) {
      const e = (new Date).getTime(),
        s = (e - this.startTime) / 1e3;
      this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
    }
  }(t, e)
}
