const $ = new Env("🧿多看点2");
let dkdapp2 = $.getjson('dkdapp2', []);
let dkduserck = $.getval('dkduserck') || 1;
//++++++++++++++++++++++++++++++++++++

!(async () => {
  if (typeof $request !== "undefined") {
    await GetCookie();
  }
})()
.catch((e) => {
    $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
  })
  .finally(() => {
    $.done();
  })

//++++++++++++++++++++++++++++++++++++
async function GetCookie() {
  //基础数据
  if ($request.url.match(/\/user\/index/)){
    const userbody = $request.url.split("?")[1];
    const userkey = JSON.stringify($request.headers);
    const userId = await userinfo(userbody, userkey);
    if (userId) {
      let no = dkduserck - 1;
      if (dkdapp2[no]) {
        dkdapp2[no].uid = userId;
        dkdapp2[no].bd = userbody;
        dkdapp2[no].hd = userkey;
      } else {
        dkdapp2[no] = {
            uid: userId,
            bd: userbody,
            hd: userkey,
          };
      }
      $.setdata(JSON.stringify(dkdapp2, null, 2), 'dkdapp2');
      $.log(`获取成功🎉: userbody: ${userbody}`)
      $.log(`获取成功🎉: userkey: ${userkey}`)
      $.log(`获取成功🎉: userid: ${userId}`)
      $.msg($.name,`[账号${no+1}] 获取[UID]数据成功！🎉`);
    } else {
      $.msg($.name,'用户[UID]数据获取失败⚠️');
    }
  }
  //签到&翻倍
  if ($request.url.match(/\/cash\/sign/) || $request.url.match(/\/cash\/sign_double/)) {
     const userbody = $request.body;
     const userkey = JSON.stringify($request.headers);
     let no = dkduserck - 1;
     let videoCoinArr = dkdapp2[no].tasksignbd || [];
     let arrnum = videoCoinArr.length;
     if (arrnum < 2) {
       videoCoinArr.push(userbody);
       dkdapp2[no].tasksignbd = videoCoinArr;
       $.setdata(JSON.stringify(dkdapp2, null, 2), 'dkdapp2');
       $.log(`获取成功🎉: welfarecardbd: ${userbody}`)
       $.msg($.name, `[账号${no+1}] 获取[签到]数据成功！🎉`, `🤳抓2个cookie\n第一次cookie:签到\n第二次cookie:签到翻倍`);
     } else {
       $.msg($.name, '', '用户[签到]获取数据已达上限⚠️');
     }
  }
  //🆕打卡拿现金&翻倍
  if ($request.url.match(/\/welfare\/card_double/) || $request.url.match(/\/welfare\/card/)) {
     const userbody = $request.body;
     const userkey = JSON.stringify($request.headers);
     let no = dkduserck - 1;
     let videoCoinArr = dkdapp2[no].welfarecardbd || [];
     let arrnum = videoCoinArr.length;
     if (arrnum < 2) {
       videoCoinArr.push(userbody);
       dkdapp2[no].welfarecardbd = videoCoinArr;
       $.setdata(JSON.stringify(dkdapp2, null, 2), 'dkdapp2');
       $.log(`获取成功🎉: welfarecardbd: ${userbody}`)
       $.msg($.name, `[账号${no+1}] 获取[打卡拿现金]数据成功！🎉`, `🤳抓2个cookie\n第一次cookie:打卡拿现金\n第二次cookie:打卡拿现金翻倍`);
     } else {
       $.msg($.name, '', '用户[打卡拿现金]获取数据已达上限⚠️');
     }
  }

  //❗️❗️❗️🆕拆红包领现金&翻倍
  if ($request.url.match(/\/welfare\/red_double/) || $request.url.match(/\/welfare\/red/)) {
     const userbody = $request.body;
     const userkey = JSON.stringify($request.headers);
     let no = dkduserck - 1;
     let videoCoinArr = dkdapp2[no].welfareredbd || [];
     let arrnum = videoCoinArr.length;
     if (arrnum < 20) {
       videoCoinArr.push(userbody);
       dkdapp2[no].welfareredbd = videoCoinArr;
       $.setdata(JSON.stringify(dkdapp2, null, 2), 'dkdapp2');
       $.log(`获取成功🎉: welfarecardbd: ${userbody}`)
       $.msg($.name, `[账号${no+1}] 获取[拆红包领现金]数据成功！🎉`, `🤳抓20个cookie\n单数次cookie:拆红包领现金\n双数次cookie:拆红包领现金翻倍`);
     } else {
       $.msg($.name, '', '用户[拆红包领现金]获取数据已达上限⚠️');
     }
  }

  //❗️❗️❗️🆕看专属视频得金币688&领取奖励
  if ($request.url.match(/\/cash\/taskaward/)) {
     const userbody = $request.body;
     const userkey = JSON.stringify($request.headers);
     let no = dkduserck - 1;
     let videoCoinArr = dkdapp2[no].taskawardbd || [];
     let arrnum = videoCoinArr.length;
     if (arrnum < 3) {
       videoCoinArr.push(userbody);
       dkdapp2[no].taskawardbd = videoCoinArr;
       $.setdata(JSON.stringify(dkdapp2, null, 2), 'dkdapp2');
       $.log(`获取成功🎉: taskawardbd: ${userbody}`)
       $.msg($.name, `[账号${no+1}] 获取[任务奖励]数据成功！🎉`, `🤳抓3个cookie\n第一次cookie:看专属视频得金币\n第二次cookie:点赞赚金币\n第三次cookie:看视频领金币`);
     } else {
       $.msg($.name, '', '用户[任务奖励]获取数据已达上限⚠️');
     }
  }

  //🆕点赞&取赞
  if ($request.url.match(/\/comment\/video_like/)) {
     const userurl = $request.url.split("?")[1];
     const userkey = JSON.stringify($request.headers);
     let no = dkduserck - 1;
     let videoCoinArr = dkdapp2[no].videolike || [];
     let arrnum = videoCoinArr.length;
     if (arrnum < 2) {
       videoCoinArr.push(userurl);
       dkdapp2[no].videolike = videoCoinArr;
       $.setdata(JSON.stringify(dkdapp2, null, 2), 'dkdapp2');
       $.log(`获取成功🎉: videolike: ${userurl}`)
       $.msg($.name, `[账号${no+1}] 获取[点赞赚现金]数据成功！🎉`, `🤳抓2个cookie\n第一次cookie:点赞\n第二次cookie:取赞\n`);
     } else {
       $.msg($.name, '', '用户[点赞赚现金]获取数据已达上限⚠️');
     }
  }

  //老版本cookie:转盘&时段奖励&用户信息&视频宝箱&提现
  if ($request.url.match(/\/lotto\/start/)) {
     const userurl = $request.url.split("?")[1];
     const userbody = $request.body;
     const userkey = JSON.stringify($request.headers);
     let no = dkduserck - 1;
       dkdapp2[no].dkdparams = userurl;
       dkdapp2[no].lottobd = userbody;
       dkdapp2[no].lottokey = userkey;
       $.setdata(JSON.stringify(dkdapp2, null, 2), 'dkdapp2');
       $.log(`获取成功🎉: dkdparams: ${userurl}`)
       $.log(`获取成功🎉: lottobd: ${userbody}`)
       $.log(`获取成功🎉: lottokey: ${userkey}`)
       $.msg($.name, `[账号${no+1}] 获取[转盘奖励]数据成功！🎉`);
  }

  //看视频50个ck
  if ($request.url.match(/\/video\/iswatch/)) {
    const userbody = $request.body;
    let no = dkduserck - 1;
    let videoAwardArr = dkdapp2[no].videogetaward || [];
    let arrnum = videoAwardArr.length;
    videoAwardArr.push(userbody);
    dkdapp2[no].videogetaward = videoAwardArr
    $.setdata(JSON.stringify(dkdapp2, null, 2), 'dkdapp2');
    $.log(`获取成功🎉: videogetaward: ${userbody}`)
    $.msg($.name, `[账号${no+1}] 获取[看视频]第${arrnum+1}个数据成功！🎉`, `🤳抓50个cookie左右`);
  }

  //提现
  if ($request.url.match(/\/money\/withdraw_do/)) {
     const userkey = JSON.stringify($request.headers);
     let no = dkduserck - 1;
     dkdapp2[no].txhd = userkey;
     $.setdata(JSON.stringify(dkdapp2, null, 2), 'dkdapp2');
     $.log(`获取成功🎉: txhd: ${userkey}`)
     $.msg($.name, `[账号${no+1}] 获取[提现]数据成功！🎉`);
  }

}

//++++++++++++++++++++++++++++++++++++

function userinfo(userbody, userkey) {
  return new Promise((resolve) => {
    let options = {
      url: `https://dkd-api.dysdk.com/user/index?${userbody}`,
      headers: JSON.parse(userkey),
    }
    $.get(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log(`⛔️API查询请求失败,请检查网络设置‼️‼️ \n ${JSON.stringify(err)}`);
        } else {
            data = JSON.parse(data);
            userId = data.data.uid

        }
      } catch (e) {
        $.log(`=================\nurl: ${options.url}\ndata: ${resp && resp.body}`);
        $.logErr(e, resp);
      } finally {
        resolve(userId)
      }
    })
  })
}
//++++++++++++++++++++++++++++++++++++
function calarrno(l, n) {
  let no = l;
  for (let i = 0, len2 = no; i < len2; i++) {
    let ac = dkdapp2[i] || {};
    if (ac.uid) {
      if (ac.uid == n) {
        no = i;
        break;
      }
    } else if (no == len2) {
      no = i;
    }
  }
  return no
}
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
