const $ = Env("芝嫲视频");
$.idx = ($.idx = ($.getval('zhimaSuffix') || '1') - 1) > 0 ? ($.idx + 1 + '') : ''; // 账号扩展字符
const notify = $.isNode() ? require("./sendNotify") : ``;
const COOKIE = $.isNode() ? require("./zhimaCOOKIE") : ``;
const logs = 0; // 0为关闭日志，1为开启
const notifyttt = 1 // 0为关闭外部推送，1为12 23 点外部推送
const notifyInterval = 2; // 0为关闭通知，1为所有通知，2为12 23 点通知  ， 3为 6 12 18 23 点通知
$.message = '', COOKIES_SPLIT = '', ddtime = '';

const zhimabodyArr = [];
let zhimabodyVal = ``;
let middlezhimabody = [];


if ($.isNode() && process.env.ZM_zhimabody) {
  COOKIES_SPLIT = process.env.COOKIES_SPLIT || "\n";
  console.log(
    `============ cookies分隔符为：${JSON.stringify(
      COOKIES_SPLIT
    )} =============\n`
  );
  if (
    process.env.ZM_zhimabody &&
    process.env.ZM_zhimabody.indexOf(COOKIES_SPLIT) > -1
  ) {
    middlezhimabody = process.env.ZM_zhimabody.split(COOKIES_SPLIT);
  } else {
    middlezhimabody = process.env.ZM_zhimabody.split();
  }

}




if (COOKIE.zhimabodyVal) {
  ZM_COOKIES = {
    "zhimabodyVal": COOKIE.zhimabodyVal.split('\n'),
  }
  Length = ZM_COOKIES.zhimabodyVal.length;
}


if (!COOKIE.zhimabodyVal) {
  if ($.isNode()) {
    Object.keys(middlezhimabody).forEach((item) => {
      if (middlezhimabody[item]) {
        zhimabodyArr.push(middlezhimabody[item]);
      }
    });

  }


  if (zhimabodyArr == '') {
    Length = 0
  } else Length = zhimabodyArr.length


}



//时间
nowTimes = new Date(
  new Date().getTime() +
  new Date().getTimezoneOffset() * 60 * 1000 +
  8 * 60 * 60 * 1000
);

//今天
Y = nowTimes.getFullYear() + '-';
M = (nowTimes.getMonth() + 1 < 10 ? '0' + (nowTimes.getMonth() + 1) : nowTimes.getMonth() + 1) + '-';
D = (nowTimes.getDate() + 1 < 10 ? '0' + (nowTimes.getDate()) : nowTimes.getMonth());
ddtime = Y + M + D;
console.log(ddtime)

function tts(inputTime) {
  if ($.isNode()) {
    TTS = Math.round(new Date().getTime() +
      new Date().getTimezoneOffset() * 60 * 1000).toString();
  } else TTS = Math.round(new Date().getTime() +
    new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000).toString();
  return TTS;
};


//当前10位时间戳
function ts(inputTime) {
  if ($.isNode()) {
    TS = Math.round((new Date().getTime() +
      new Date().getTimezoneOffset() * 60 * 1000) / 1000).toString();
  } else TS = Math.round((new Date().getTime() +
    new Date().getTimezoneOffset() * 60 * 1000 +
    8 * 60 * 60 * 1000) / 1000).toString();
  return TS;
};
//今天0点时间戳时间戳
function daytime(inputTime) {
  if ($.isNode()) {
    DAYTIME =
      new Date(new Date().toLocaleDateString()).getTime() - 8 * 60 * 60 * 1000;
  } else DAYTIME = new Date(new Date().toLocaleDateString()).getTime();
  return DAYTIME;
};



//通知
function msgShow() {
  return new Promise(async resolve => {
    if (notifyInterval != 1) {
      console.log($.name + '\n' + $.message);
    }
    if (notifyInterval == 1) {
      $.msg($.name, ``, $.message);
    }
    if (notifyInterval == 2 && (nowTimes.getHours() === 12 || nowTimes.getHours() === 23) && (nowTimes.getMinutes() >= 0 && nowTimes.getMinutes() <= 10)) {
      $.msg($.name, ``, $.message);
    }
    if (notifyInterval == 3 && (nowTimes.getHours() === 6 || nowTimes.getHours() === 12 || nowTimes.getHours() === 18 || nowTimes.getHours() === 23) && (nowTimes.getMinutes() >= 0 && nowTimes.getMinutes() <= 10)) {
      $.msg($.name, ``, $.message);
    }
    if (notifyttt == 1 && $.isNode() && (nowTimes.getHours() === 12 || nowTimes.getHours() === 23) && (nowTimes.getMinutes() >= 0 && nowTimes.getMinutes() <= 10))
      await notify.sendNotify($.name, $.message);
    resolve()
  })
}
