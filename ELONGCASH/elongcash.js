const $ = new Env("ELONGCASH");
const host = "https://x.elong.com/feifang/activity/baseapi/treasure";
const logs = true;
const notifyInterval = 1;
const tgmarkcode = "/submitactivitycodes elongcash@"
const githubkeyUrl = 'https://raw.githubusercontent.com/CenBoMin/TGBOTCode/main/elongcash.js'
const taskChannel = "26170";
const blackCodeList = ["0E9737244AB86BB6468BADD05D990E4DCECE8971CD4920B6F963CDB9F1950953", "400FC8D6CC0AC558880B38960B16ABBB631EBD85BCD91F1BE7FD463E3936CC01","5286DB310E42AA8CBF0C14E2B95D4720ED8CCF6C261AA100706BEE38C3E2AD11"]
let tz = "";
let elongcash = $.getjson('elongcash', []);
let elongcashkey = $.getval('elongcashkey');
let shareRandomNumber = Random(0,blackCodeList.length - 1);
let shareRandomId = blackCodeList[shareRandomNumber];
let todaytimems = Math.round(Date.now());
const nowmouth = formatDateTime(todaytimems)
var hour = '';
var minute = '';
  //++++++++++++++++++++++++++++++++++++
  !(async () => {
    cc = (`${$.name}任务执行通知🔔`);
    console.log("\n* Author:CenBoMin\n* Github:github.com/CenBoMin/GithubSync\n* Telegram:https://t.me/CbScript\n* Updatetime:2021.05.22\n");
    console.log(`Now login(UTC+8):${new Date(new Date().getTime() + 8 * 60 * 60 * 1000).toLocaleString()}`)
    if (typeof $request !== "undefined") {
      $.log('【提示】请先前往获取cookie📲')
    } else if (!elongcashkey) {
      $.log(`\n🤖[${$.name}]:开始下载脚本使用权限秘钥...`)
      await githubkey();
    } else {
      await githubkey("again");
      let ckList = elongcash.filter(ck => ck.hd).map((ck) => ({
        uid: ck.uid,
        sharecode: ck.sharecode,
        headers: JSON.parse(ck.hd)
        //===================================
      }));
      console.log(`\n🤖[${$.name}]:~ System💲脚本账号数量 `)
      console.log(`本次执行共${ckList.length}个账号`)
      for (let i = 0; i < ckList.length; i++) {
        tkList = ckList[i];
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
            $.log(`\n⚠️用户${i+1}:~ 请在群内提交互助码,如果已提交请稍后再试试。\n🔺验证码提交格式:${tgmarkcode}${tkList.sharecode}`);
            $.msg($.name, '', `⚠️用户${i+1}:~ 请在群内提交验证码,如果已提交请稍后再试试。\n🔺验证码提交格式:${tgmarkcode}${tkList.sharecode}`);
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

//++++++++++++++++++++++++++++++++++++
function initTaskOptions(url, body) {
  return {
    url: `${host}/${url}`,
    headers: {
      'Accept': `application/json, text/plain, */*`,
      'Origin': `https://x.elong.com`,
      'Accept-Encoding': `gzip, deflate, br`,
      'Cookie': tkList.headers,
      'Content-Type': `application/json;charset=utf-8`,
      'Host': `x.elong.com`,
      'Connection': `keep-alive`,
      'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.5(0x18000528) NetType/4G Language/zh_CN miniProgram`,
      'Accept-Language': `zh-cn`
    },
    body: body
  };
}
async function main(i) {
  // console.log(Base64.decode(elongcashkey));
  console.log(`\n🤖[${$.name}]:~ User${i+1}💲用户资讯`)
  await userAccount();
  console.log(`\n🤖[${$.name}]:~ User${i+1}💲用户任务`)
  await userTaskList();
  console.log(`🤖[${$.name}]:~ User${i+1}💲小猪扑满`)
  await pigInfo();
  console.log(`\n🤖[${$.name}]:~ User${i+1}💲签到任务`)
  if (taskSignState) {
    console.log(`→签到任务已完成🎉`);
  } else {
    await runsign();
  }
  console.log(`\n🤖[${$.name}]:~ User${i+1}💲视频任务`)
  if (taskVideoState) {
    console.log(`→视频任务已完成🎉`);
  } else {
    const num = 10 - taskVideoTimes
    for (let i = 0; i < num; i++) {
      await runvideo(i);
      await $.wait(3000);
    }
  }
  console.log(`\n🤖[${$.name}]:~ User${i+1}💲金币气泡`)
  await goldList();
  // console.log(`\n🤖[${$.name}]:~ User${i+1}💲提现0.3元`)
  // mycoin >= 3000 ? await txcash() : console.log("→账户余额不够提现0.3元");
  console.log(`\n🤖[${$.name}]:~ User${i+1}💲夺宝任务`)
  await guessResultList();

  if ((hour == 8 && minute <= 15) || (hour == 12 && minute <= 15) || (hour == 23 && minute <= 15)) {
    console.log(`\n🤖[${$.name}]:~ User${i+1}💲助力测试 `)
    await sharecheck();
    if (sharecode == 0) {
      await runshare();
    } else {
      console.log(`❌助力失败 `)
    }
  }

  if ((hour == 8 && minute <= 15) || (hour == 12 && minute <= 15) || (hour == 23 && minute <= 15)) {
    console.log(`\n🤖[${$.name}]:~💲 正在准备礼物 🎁`)
    await guessFinishList();
    await surprisedTask();
  }
}

//++++++++++++++++++++++++++++++++++++
async function surprisedTask() {
  return new Promise((resolve) => {
    const options = initTaskOptions("receive-prize", `{"periodNumber":"${SurprisedNumber}","treasureId":"${SurprisedId}","mobile":"","contactsName":"","idCardNo":"","address":"","cityName":"","activityCode":"treasure","tcMemberId":"","platFrom":1,"channel":"0"}`);
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
            const code = data.businesscode
            switch (code) {
              case 0:
                console.log("\n🎁 送你一个惊喜大礼物哟!!!");
                $.msg(cc, '', "🎁 送你一个惊喜大礼物哟!!!10秒内送到...");
                break;
              case 8:
                console.log("\n🎁 你的礼物掉在路上了...");
                break;
              default:
                console.log(`Businesscode:${data.businesscode}\nMessages:${data.retdesc}`);
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
async function guessFinishList() {
  return new Promise((resolve) => {
    const options = initTaskOptions("my-hunt/period/list/paging?pageIndex=1&pageSize=10&month=202105&lotteryStatus=2&activityCode=treasure");
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
            const code = data.businesscode
            const taskidArr = data.body.elements
            SurprisedId = taskidArr[0].treasureId
            SurprisedNumber = taskidArr[0].periodNumber
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
//++++++++++++++++++++++++++++++++++++
async function guessResultList() {
  return new Promise((resolve) => {
    const options = initTaskOptions(`my-hunt/period/list/paging?pageIndex=1&pageSize=10&month=${nowmouth}&lotteryStatus=1&activityCode=treasure`);
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
            const code = data.businesscode
            const taskidArr = data.body.elements
            switch (code) {
              case 0:
                if (taskidArr === null && mycoin >= 1200) {
                  console.log("→还未参与任何夺宝任务");
                  await guessTask();
                  await runguess(oneCoinid);
                } else if (taskidArr !== null) {
                  const taskOnecoin = taskidArr.filter(name => name.treasureId === 4);
                  oneCoinResultid = taskOnecoin[0].periodNumber
                  console.log(`→已报名1元现金${oneCoinResultid}场次`);
                } else {
                  console.log("→账户余额不够参与1元夺宝任务❌");
                }
                break;
              default:
                console.log(`**** guessResultList ****\nBusinesscode:${data.businesscode}\nMessages:${data.retdesc}`);
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
async function runguess(oneCoinid) {
  return new Promise((resolve) => {
    const options = initTaskOptions("exchange-coupon-code", `{"buyCount":2,"periodNumber":${oneCoinid},"treasureId":4,"activityCode":"treasure","tcMemberId":"","platFrom":1,"channel":${taskChannel}}`);
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            data = JSON.parse(data);
            const code = data.businesscode
            switch (code) {
              case 1007:
                console.log(`\n🔐请先成功解锁1元夺宝任务,手动参加夺宝解锁`);
                break;
              case 0:
                console.log(`→ 成功报名一元现金${oneCoinid}场`);
                break;
              default:
                console.log(`**** runguess ****\nBusinesscode:${data.businesscode}\nMessages:${data.retdesc}`);
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
async function guessTask() {
  return new Promise((resolve) => {
    const options = initTaskOptions("period/list/paging?pageIndex=1&pageSize=10&searchType=2&activityCode=treasure");
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
            const code = data.businesscode
            const taskidArr = data.body.elements
            switch (code) {
              case 0:
                console.log("→夺宝任务清单:");
                taskidArr.forEach(info => console.log(`[ID${info.treasureId}]${info.treasureName}:第${info.periodNumber}场`))
                const taskOnecoin = taskidArr.filter(name => name.treasureId === 4);
                oneCoinid = taskOnecoin[0].periodNumber
                break;
              default:
                console.log(`**** guessTask ****\nBusinesscode:${data.businesscode}\nMessages:${data.retdesc}`);
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
async function txcash() {
  return new Promise((resolve) => {
    const options = initTaskOptions("common/withdrawal/apply", `{"amount":0.3,"activityCode":"treasure","tcMemberId":"","platFrom":1,"channel":${taskChannel}}`);
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
            const code = data.businesscode
            switch (code) {
              case 0:
                console.log("→成功提现0.3元");
                break;
              default:
                console.log(`Businesscode:${data.businesscode}\nMessages:${data.retdesc}`);
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
async function runPigCoin(pigValue) {
  return new Promise((resolve) => {
    const options = initTaskOptions("main-page/receive-gold", `{"treasureValue":${pigValue},"frontType":1,"activityCode":"treasure","tcMemberId":"","platFrom":1,"channel":${taskChannel}}`);
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
            const code = data.businesscode
            switch (code) {
              case 0:
                console.log(`→成功收取小猪扑满${pigValue}金币`);
                break;
              default:
                console.log(`Businesscode:${data.businesscode}\nMessages:${data.retdesc}`);
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
async function pigInfo() {
  return new Promise((resolve) => {
    const options = initTaskOptions("main-page?activityCode=treasure");
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
            const code = data.businesscode
            pigValue = data.body.piggyBankValue
            switch (code) {
              case 0:
                if (pigValue === 0) {
                  console.log(`→小猪扑满没有金币,今天已收完 🎉`);
                } else {
                  console.log(`→小猪扑满有${pigValue}金币,开始收取金币`);
                  await runPigCoin(pigValue);
                }

                break;
              default:
                console.log(`Businesscode:${data.businesscode}\nMessages:${data.retdesc}`);
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
async function rungold(rewardId, i) {
  return new Promise((resolve) => {
    const options = initTaskOptions("task/gold-collection", `{"rewardId":"${rewardId}","activityCode":"treasure","tcMemberId":"","platFrom":1,"channel":${taskChannel}}`);
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
            const code = data.businesscode
            switch (code) {
              case 0:
                console.log(`→收取第${i+1}个气泡成功🎉`);
                break;
              default:
                console.log(`Businesscode:${data.businesscode}\nMessages:${data.retdesc}`);
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
async function goldList() {
  return new Promise((resolve) => {
    const options = initTaskOptions("task/gold/list?activityCode=treasure");
    $.get(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            data = JSON.parse(data);
            const code = data.businesscode
            switch (code) {
              case 0:
                data.body.forEach((info) => console.log(`→${info.remark}:${info.rewardId}`));
                rewardIdList = data.body.map(id => id.rewardId);
                if (rewardIdList.length !== 0) {
                  console.log(`→小计:共有${rewardIdList.length}个任务金币未收取`);
                  for (let i = 0; i < rewardIdList.length; i++) {
                    let rewardId = rewardIdList[i]
                    console.log(rewardId);
                    await rungold(rewardId, i);
                    await $.wait(2000);
                  }
                } else {
                  console.log(`→没有任务金币可收取 🎉`);
                }
                break;
              default:
                console.log(`Businesscode:${data.businesscode}\nMessages:${data.retdesc}`);
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
async function runvideo(i) {
  return new Promise((resolve) => {
    const options = initTaskOptions("task/receive-reward", `{"taskCode":"10004","activityCode":"treasure","tcMemberId":"","platFrom":1,"channel":${taskChannel}}`);
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
            const code = data.businesscode
            switch (code) {
              case 100:
                console.log(`🗣${data.retdesc}`);
                break;
              case 0:
                $.log(`→领取视频第${i+1}次奖励:${data.body.treasureValue}金币`)
                break;
              default:
                console.log(`Businesscode:${data.businesscode}\nMessages:${data.retdesc}`);
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
async function runsign() {
  return new Promise((resolve) => {
    const options = initTaskOptions("task/receive-reward", `{"taskCode":"10000","activityCode":"treasure","tcMemberId":"","platFrom":1,"channel":${taskChannel}}`);
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
            const code = data.businesscode
            switch (code) {
              case 100:
                console.log(`🗣${data.retdesc}`);
                break;
              case 0:
                $.log(`→领取签到奖励:${data.body.treasureValue}金币`)
                break;
              default:
                console.log(`Businesscode:${data.businesscode}\nMessages:${data.retdesc}`);
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
async function sharecheck() {
  return new Promise((resolve) => {
    const options = initTaskOptions("task/receive-reward", `{"fromUnionId":"${shareRandomId}","taskCode":"10001","helpPreValid":1,"activityCode":"treasure","tcMemberId":"","platFrom":1,"channel":${taskChannel}}`);
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
            sharecode = data.businesscode
            switch (sharecode) {
              case 2:
                console.log("→你的账号已黑号,不能提现可以玩夺宝~");
                break;
              case 6:
                console.log("→你的账号已黑号,不能提现可以玩夺宝~");
                break;
              case 101:
                console.log("→亲,请不要助力自己欧~~");
                break;
              case 101:
                console.log("→今天助力次数已经用完~~");
                break;
              case 100:
                console.log("→七天只可以助力同一个号两次呢~");
                break;
              case 0:
                console.log("→可以助力,开始尝试助力~");
                break;
              default:
                console.log(`Businesscode:${data.businesscode}\nMessages:${data.retdesc}`);
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
async function runshare() {
  return new Promise((resolve) => {
    const options = initTaskOptions("task/receive-reward", `{"fromUnionId":"${shareRandomId}","taskCode":"10001","activityCode":"treasure","tcMemberId":"","platFrom":1`);
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
            console.log(`Businesscode:${data.businesscode}\nMessages:${data.retdesc}\nCoins:${data.body.treasureValue}`);
            $.log(`\n‼️${resp.statusCode}[调试log]:${resp.body}`);
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
async function userAccount() {
  return new Promise((resolve) => {
    const options = initTaskOptions("account?activityCode=treasure");
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
            mycoin = data.body.accountAmount
            // for (let body of Object.keys(data.body)) {
            //   console.log(`${body}:${data.body[body]}`);
            // }
            $.log(`→你的助力码为:${data.body.unionId}\n→目前金币${data.body.accountAmount},约${data.body.canWithdrawalAmount}元,好友助力${data.body.riskLevel}位`)
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
async function userTaskList() {
  return new Promise((resolve) => {
    const options = initTaskOptions("task?activityCode=treasure");
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
            taskinfoList = data.body
            taskinfoList.forEach((task) => console.log(`→任务ID${task.taskCode}-${task.taskTitle}:${task.state ? "任务结束\n🔚" : "任务未完成\n🔜"}任务情况:${task.completedTimes}/${task.dayLimit}${task.unit}\n`));
            //签到任务状态
            taskSignState = taskinfoList.filter(state => state.taskCode == 10000)[0].state
            //视频任务状态
            taskVideoState = taskinfoList.filter(state => state.taskCode == 10004)[0].state
            //视频任务次数
            taskVideoTimes = taskinfoList.filter(state => state.taskCode == 10004)[0].completedTimes
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

//++++++++++++++++++++++++++++++++++++
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
  return y + m ;
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
          if (logs == false) $.log(data)
          switch (keystate) {
            case "again":
              elongcashkey = Base64.encode(data);
              if (elongcashkey) $.setdata(elongcashkey, 'elongcashkey');
              break;
            default:
              elongcashkey = Base64.encode(data);
              $.log(elongcashkey);
              if (elongcashkey) $.setdata(elongcashkey, 'elongcashkey');
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
function z() {
  const ll = decodeURIComponent(Base64.encode(elongcashkey))
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
  if (f(tkList.sharecode)) {
    return true;
  } else {
    return true;
  }
}
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
      path
        .slice(0, -1)
        .reduce((a, c, i) => (Object(a[c]) === a[c] ? a[c] : (a[c] = Math.abs(path[i + 1]) >> 0 === +path[i + 1] ? [] : {})), obj)[
          path[path.length - 1]
        ] = value
      return obj
    }

    getdata(key) {
      let val = this.getval(key)
      // 如果以 @
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
        $task.fetch(opts).then(
          (resp) => {
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
          },
          (err) => callback(err)
        )
      } else if (this.isNode()) {
        this.initGotEnv(opts)
        this.got(opts)
          .on('redirect', (resp, nextOpts) => {
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
            // this.ckjar.setCookieSync(resp.headers['set-cookie'].map(Cookie.parse).toString())
          })
          .then(
            (resp) => {
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
            },
            (err) => {
              const {
                message: error,
                response: resp
              } = err
              callback(error, resp, resp && resp.body)
            }
          )
      }
    }

    post(opts, callback = () => {}) {
      const method = opts.method ? opts.method.toLocaleLowerCase() : 'post'
      // 如果指定了请求体, 但没指定`Content-Type`, 则自动生成
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
        $task.fetch(opts).then(
          (resp) => {
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
          },
          (err) => callback(err)
        )
      } else if (this.isNode()) {
        this.initGotEnv(opts)
        const {
          url,
          ..._opts
        } = opts
        this.got[method](url, _opts).then(
          (resp) => {
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
          },
          (err) => {
            const {
              message: error,
              response: resp
            } = err
            callback(error, resp, resp && resp.body)
          }
        )
      }
    }
    /**
     *
     * 示例:$.time('yyyy-MM-dd qq HH:mm:ss.S')
     *    :$.time('yyyyMMddHHmmssS')
     *    y:年 M:月 d:日 q:季 H:时 m:分 s:秒 S:毫秒
     *    其中y可选0-4位占位符、S可选0-1位占位符，其余可选0-2位占位符
     * @param {string} fmt 格式化参数
     * @param {number} 可选: 根据指定时间戳返回格式化日期
     *
     */
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

    /**
     * 系统通知
     *
     * > 通知参数: 同时支持 QuanX 和 Loon 两种格式, EnvJs根据运行环境自动转换, Surge 环境不支持多媒体通知
     *
     * 示例:
     * $.msg(title, subt, desc, 'twitter://')
     * $.msg(title, subt, desc, { 'open-url': 'twitter://', 'media-url': 'https://github.githubassets.com/images/modules/open_graph/github-mark.png' })
     * $.msg(title, subt, desc, { 'open-url': 'https://bing.com', 'media-url': 'https://github.githubassets.com/images/modules/open_graph/github-mark.png' })
     *
     * @param {*} title 标题
     * @param {*} subt 副标题
     * @param {*} desc 通知详情
     * @param {*} opts 通知参数
     *
     */
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
