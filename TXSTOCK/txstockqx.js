/*
╭┉┉╮╭╮╭╮╭┉┉╮╭┉┉╮╭┉┉╮╭┉┉╮╭╮╭╮
╰╮╭╯┋╰╯┋┋╭┉╯╰╮╭╯┋╭╮┋┋╭┉╯┋╰╯┋
 ┋┋ ╰╮╭╯┋╰┉╮ ┋┋ ┋┋┋┋┋┋  ┋ ╭╯
 ┋┋ ╭╯╰╮╰┉╮┋ ┋┋ ┋┋┋┋┋┋  ┋ ╰╮
 ┋┋ ┋╭╮┋╭┉╯┋ ┋┋ ┋╰╯┋┋╰┉╮┋╭╮┋
 ╰╯ ╰╯╰╯╰┉┉╯ ╰╯ ╰┉┉╯╰┉┉╯╰╯╰╯
// TODO:
# 任务状态确认测试 1/13 股票添加到自选任务暂时手动做
# 猜涨跌任务的前置条件 1/14
# 测试猜涨跌分享奖励 1/14
# 自动提现，票据与提现链接 1月底前
# 签到模块 1/14
# 微信小程序模块 ？？？
# 金币查询 1/15-16

// ？？？:
# 模拟炒股周赛奖励 688 星期天登录模拟炒股(微信/app)
# 签到惊喜奖励

//!!!:
【BOXJS】：https://raw.githubusercontent.com/CenBoMin/GithubSync/main/cenbomin.box.json

#运行脚本前请先下载app,登录。。。手动完成成长任务,有钱
#8.8打卡任务也手动做,建议只打卡4个成功即可,第5个基本拿不到
#微信小程序-腾讯自选股和app的日常任务是分开的,毛比较少,手动做吧！
点以下链接,到微信帮我助力(应该可以)
https://zqact01.tenpay.com/activity/page/200814appInvite/#/new?stat_data=Ovy34p00pn019&invite_code=i02Fvx18dc&nick_name=%E9%99%88%E6%9F%8F%E9%8A%98&head_url=https%3A%2F%2Fthirdwx.qlogo.cn%2Fmmopen%2Fvi_32%2FQ0j4TwGTfTLWqFtqq3JGenAvqEnZhiazoeCicjicAZhEiaCib1LqSCHtC8sPLbG52YiajLZh8VRkY8bWu0uu24AKjgfA%2F132

**** 重写引用 ****
https://raw.githubusercontent.com/CenBoMin/GithubSync/main/TXSTOCK/txs_cookie.conf
**** 定时任务 ****
0 8 * * * https://raw.githubusercontent.com/CenBoMin/GithubSync/main/TXSTOCK/txstockqx.js
**** 食用方法 ****
到[重写]-[引用],启动重写抓取cookie
taskheader：打开app- 立即获取
taskkey：点击左上头像-我的福利-点击获取
务必关闭重写引用执行脚本

#脚本一天只运行一次,本脚本还未加任何防呆机制,避免运行二次以上...
#且用且珍惜,更新无限期。

*/
const jsname = '腾讯自选股'
const $ = Env(jsname)
const logs = $.getdata('logbutton'); //0为关闭日志，1为开启,默认为0
const notifyInterval = 1; //0为关闭通知，1为所有通知,默认为0

let rndtime = Math.round(new Date().getTime())
let signtime = Math.round(new Date() / 1000)
let signday = formatDateTime(new Date());
let tz = '';


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
////////////////////////////////////////////////////////////////////


if ($.isNode()) {

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
      signheaderArr.push(taskheaderVal[item])
    }
  });
  Object.keys(taskkeyVal).forEach((item) => {
    if (taskkeyVal[item]) {
      signkeyArr.push(taskkeyVal[item])
    }
  });


} else {
  signheaderArr.push($.getdata('signheader'));
  signkeyArr.push($.getdata('signkey'));
  taskheaderArr.push($.getdata('taskheader'));
  taskkeyArr.push($.getdata('taskkey'));
}


///////////////////////////////////////////////////////////////////

!(async () => {
  await Jsname()
  O = (`🥦${jsname}任务执行通知🔔`);
  signheaderVal = signheaderArr[0];
  signkeyVal = signkeyArr[0];
  taskheaderVal = taskheaderArr[0];
  taskkeyVal = taskkeyArr[0];
  //console.log(`\n✅ 执行【签到】任务\n`)
  //await signtask();
  if (!taskheaderArr[0]) {
    console.log($.name, '【提示】请先前往获取任务cookie')
    return;
  }
  console.log(`\n✅ 执行【App】日常任务\n`)
  //await task1(statuid2);//测试任务状态
  await task2();
  await task3();
  await task4();
  await task5();
  await task6();
  //await task7();//猜涨跌任务前置条件测试
  await task8();
  await task9(); //模拟炒股
  //await wxtask();
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
///////////////////////////////////////////////////////////////////

async function signtask() {
  return new Promise((resolve) => {
    let signurl = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_sign_task.fcgi?actid=2002&action=signdone&date=${signday}&_=${signtime}&openid=${signheaderVal}`,
      body: ``,
      headers: JSON.parse(signkeyVal),
    };
    $.get(signurl, async (err, resp, data) => {
      try {
        if (err) {
          console.log("腾讯自选股: API查询请求失败 ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            let {} = JSON.parse(data);
            let singtime = task.done_time
            $.log(`【签到】:获得 ${task.reward_desc}`);
            $.log(`【签到时间】:` + time(singtime));
            tz += `【签到】:获得 ${task.reward_desc}\n`
            await $.wait(5000); //等待5秒
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

async function task1(statuid2) {
  console.log(`\n✅检查任务状态-防呆机制测试,任务无法执行请手动做\n`)
    await statuid2()
  if (statuid2.done === 0) {
    console.log(`\n✅开始申请票据\n`)
    await taskticket(); //申请票据
    console.log(`\n✅ 执行【股票添加到自选】任务\n`)
    await taskid2(ticket);
  } else {
    console.log(`\n✅ 【股票添加到自选】:已完成\n`)
  }
}
async function task2() {
  console.log(`\n✅开始申请票据\n`)
  await taskticket(); //申请票据
  console.log(`\n✅ 执行【阅读资讯】任务\n`)
  await taskid1(ticket);
}
async function task3() {
  console.log(`\n✅开始申请票据\n`)
  await taskticket(); //申请票据
  console.log(`\n✅ 执行【分享股票行情】任务\n`)
  await taskid12(ticket);
}
async function task4() {
  console.log(`\n✅开始申请票据\n`)
  await taskticket(); //申请票据
  console.log(`\n✅ 执行【分享福利中心】任务\n`)
  await taskid11(ticket);
}
async function task5() {
  console.log(`\n✅开始申请票据\n`)
  await taskticket(); //申请票据
  console.log(`\n✅ 执行【分享一篇资讯】任务\n`)
  await taskid14(ticket);
}
async function task6() {
  console.log(`\n✅开始申请票据\n`)
  await taskticket(); //申请票据
  console.log(`\n✅ 执行【分享一篇社区帖子】任务\n`)
  await taskid15(ticket);
}
async function task7() {
  console.log(`\n✅开始申请票据\n`)
  await taskticket(); //申请票据
  console.log(`\n✅ 执行【完成猜涨跌】任务\n`)
  await taskid3(ticket);
  console.log(`\n✅开始申请票据\n`)
  await taskticket(); //申请票据
  console.log(`\n✅ 执行【猜涨跌分享】任务\n`)
  await taskshare(ticket)
}
async function task8() {
  console.log(`\n✅开始申请票据\n`)
  await taskticket(); //申请票据
  console.log(`\n✅ 执行【点赞一条社区评论】任务\n`)
  await taskid4(ticket);
}
async function task9() {
  console.log(`\n✅开始申请票据\n`)
  await taskticket(); //申请票据
  console.log(`\n✅ 执行【模拟炒股交易一笔】任务\n`)
  await taskid6(ticket);
}


async function wxtask() {}


//猜涨跌分享奖励
function taskshare(ticket) {
  return new Promise((resolve, reject) => {
    let testurl = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?action=taskdone&channel=1&actid=1101&tid=18&id=1&task_ticket=${ticket}&_appName=ios${taskheader}`,
      body: ``,
      headers: {
        'Cookie': `${taskkey}`,
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
      let task = JSON.parse(data)
      $.log(`【猜涨跌分享】:获得 ${task.reward_desc}`);
      tz += `【猜涨跌分享】:获得 ${task.reward_desc}\n`
      await $.wait(10000); //等待10秒
      resolve()
    })
  })
}
//添加股票到自选
function taskid2(ticket) {
  return new Promise((resolve, reject) => {
    let testurl = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?action=taskdone&channel=1&actid=1101&tid=2&id=2&task_ticket=${ticket}&_appName=ios${taskheaderVal}`,
      body: ``,
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
      let task = JSON.parse(data)
      $.log(`【添加自选股】:获得 ${task.reward_desc}`);
      tz += `【添加自选股】:获得 ${task.reward_desc}\n`
      await $.wait(10000); //等待10秒
      resolve()
    })
  })
}
function statuid2() {
  return new Promise((resolve, reject) => {
    let testurl = {
      url: `https://zqact.tenpay.com/cgi-bin/activity_task.fcgi?action=taskstatus&actid=1101&id=2&tid=2&_appName=ios${taskheaderVal}`,
      body: ``,
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
      let statuid2 = JSON.parse(data)
      if(statuid2.done===1){
        $.log(`验证状态失败`);
      }else{
        $.log(`验证状态成功`);
      }
      resolve()
    })
  })
}
//阅读一篇资讯
function taskid1(ticket) {
  return new Promise((resolve, reject) => {
    let testurl = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?action=taskdone&channel=1&actid=1101&tid=5&id=1&task_ticket=${ticket}&_appName=ios${taskheaderVal}`,
      body: ``,
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
      let task = JSON.parse(data)
      $.log(`【阅读资讯】:获得 ${task.reward_desc}`);
      tz += `【阅读资讯】:获得 ${task.reward_desc}\n`
      await $.wait(10000); //等待10秒
      resolve()
    })
  })
}
//分享股票行情
function taskid12(ticket) {
  return new Promise((resolve, reject) => {
    let testurl = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?action=taskdone&channel=1&actid=1101&tid=22&id=12&task_ticket=${ticket}&_appName=ios${taskheaderVal}`,
      body: ``,
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
      let task = JSON.parse(data)
      $.log(`【分享行情】:获得 ${task.reward_desc}`);
      tz += `【分享行情】:获得 ${task.reward_desc}\n`
      await $.wait(10000); //等待10秒
      resolve()
    })
  })
}
//分享福利中心
function taskid11(ticket) {
  return new Promise((resolve, reject) => {
    let testurl = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?action=taskdone&channel=1&actid=1101&tid=7&id=11&task_ticket=${ticket}&_appName=ios${taskheaderVal}`,
      body: ``,
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
      let task = JSON.parse(data)
      $.log(`【分享福利中心】:获得 ${task.reward_desc}`);
      tz += `【分享福利中心】:获得 ${task.reward_desc}\n`
      await $.wait(10000); //等待10秒
      resolve()
    })
  })
}
//分享一篇资讯
function taskid14(ticket) {
  return new Promise((resolve, reject) => {
    let testurl = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?action=taskdone&channel=1&actid=1101&tid=28&id=14&task_ticket=${ticket}&_appName=ios${taskheaderVal}`,
      body: ``,
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
      let task = JSON.parse(data)
      $.log(`【分享资讯】:获得 ${task.reward_desc}`);
      tz += `【分享资讯】:获得 ${task.reward_desc}\n`
      await $.wait(10000); //等待10秒
      resolve()
    })
  })
}
//分享一篇社区帖子
function taskid15(ticket) {
  return new Promise((resolve, reject) => {
    let testurl = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?action=taskdone&channel=1&actid=1101&tid=29&id=15&task_ticket=${ticket}&_appName=ios${taskheaderVal}`,
      body: ``,
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
      let task = JSON.parse(data)
      $.log(`【分享社区帖子】:获得 ${task.reward_desc}`);
      tz += `【分享社区帖子】:获得 ${task.reward_desc}\n`
      await $.wait(10000); //等待10秒
      resolve()
    })
  })
}
//完成一次猜涨跌游戏
function taskid3(ticket) {
  return new Promise((resolve, reject) => {
    let testurl = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?action=taskdone&channel=1&actid=1101&tid=9&id=3&task_ticket=${ticket}&_appName=ios${taskheaderVal}`,
      body: ``,
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
      let task = JSON.parse(data)
      $.log(`【猜涨跌】:获得 ${task.reward_desc}`);
      tz += `【猜涨跌】:获得 ${task.reward_desc}\n`
      await $.wait(10000); //等待10秒
      resolve()
    })
  })
}
//点赞
function taskid4(ticket) {
  return new Promise((resolve, reject) => {
    let testurl = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?action=taskdone&channel=1&actid=1101&tid=4&id=4&task_ticket=${ticket}&_appName=ios${taskheaderVal}`,
      body: ``,
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
      let task = JSON.parse(data)
      $.log(`【点赞评论】:获得 ${task.reward_desc}`);
      tz += `【点赞评论】:获得 ${task.reward_desc}\n`
      await $.wait(10000); //等待10秒
      resolve()
    })
  })
}
//模拟炒股
function taskid6(ticket) {
  return new Promise((resolve, reject) => {
    let testurl = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?action=taskdone&channel=1&actid=1101&tid=13&id=6&task_ticket=${ticket}&_appName=ios${taskheaderVal}`,
      body: ``,
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
      let task = JSON.parse(data)
      $.log(`【模拟炒股】:获得 ${task.reward_desc}`);
      tz += `【模拟炒股】:获得 ${task.reward_desc}\n`
      await $.wait(10000); //等待10秒
      resolve()
    })
  })
}

function taskticket() {
  return new Promise((resolve, reject) => {
    let testurl = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?action=taskticket&channel=1&actid=1101&_rndtime=${rndtime}&_appName=ios${taskheaderVal}`,
      body: ``,
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
      $.log(`本次验证时间🕐：` + time(rndtime));
      $.log(`本次验证票据🎫：${test2.task_ticket}\n`);
      ticket = test2.task_ticket
      //tz += `【现金余额】：¥ ${task.data.activity_money.money}元\n`

      resolve()
    })
  })
}

////////////////////////////////////////////////////////////////////
function Jsname() {
  $.log(`╭┉┉╮╭╮╭╮╭┉┉╮╭┉┉╮╭┉┉╮╭┉┉╮╭╮╭╮`)
  $.log(`╰╮╭╯┋╰╯┋┋╭┉╯╰╮╭╯┋╭╮┋┋╭┉╯┋╰╯┋`)
  $.log(` ┋┋ ╰╮╭╯┋╰┉╮ ┋┋ ┋┋┋┋┋┋  ┋ ╭╯`)
  $.log(` ┋┋ ╭╯╰╮╰┉╮┋ ┋┋ ┋┋┋┋┋┋  ┋ ╰╮`)
  $.log(` ┋┋ ┋╭╮┋╭┉╯┋ ┋┋ ┋╰╯┋┋╰┉╮┋╭╮┋`)
  $.log(` ╰╯ ╰╯╰╯╰┉┉╯ ╰╯ ╰┉┉╯╰┉┉╯╰╯╰╯`)
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
