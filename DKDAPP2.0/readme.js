#多看点测试脚本

👉👉👉 脚本说明 👈👈👈
❗️❗️本脚本为测试学习版本(TF),如果你还未取得测试资格,请先关注https://t.me/CbScript,不定时会放出测试资格邀请链接。
定时请半小时执行一次,不然有些任务会没做到,建议使用v2p服务器测试脚本。


👉👉👉 信息 👈👈👈
【BOXJS】: https://raw.githubusercontent.com/CenBoMin/GithubSync/main/cenbomin.test.box.json
【脚本定时cron】: */30 */1 * * * (每30min执行一次)
【脚本JS】:https://raw.githubusercontent.com/CenBoMin/GithubSync/main/DKDAPP2.0/dkd2.js
【重写引用第一天】: https://raw.githubusercontent.com/CenBoMin/GithubSync/main/DKDAPP2.0/cookie.conf


👉👉👉 配置文件 👈👈👈
[详情请见]
https://github.com/CenBoMin/GithubSync/tree/main/DKDAPP2.0

[task_local]
*/30 */1 * * * https://raw.githubusercontent.com/CenBoMin/GithubSync/main/DKDAPP2.0/dkd2.js, tag=多看点2, img-url=https://raw.githubusercontent.com/CenBoMin/GithubSync/main/DKDAPP2.0/140.png, enabled=false

[rewrite_local]
https://dkd-api.dysdk.com/info/list url script-request-body https://raw.githubusercontent.com/CenBoMin/GithubSync/main/DKDAPP2.0/cookie.js
https://dkd-api.dysdk.com/cash/sign url script-request-body https://raw.githubusercontent.com/CenBoMin/GithubSync/main/DKDAPP2.0/cookie.js
https://dkd-api.dysdk.com/cash/sign_double url script-request-body https://raw.githubusercontent.com/CenBoMin/GithubSync/main/DKDAPP2.0/cookie.js
https://dkd-api.dysdk.com/cash/taskaward url script-request-body https://raw.githubusercontent.com/CenBoMin/GithubSync/main/DKDAPP2.0/cookie.js
https://dkd-api.dysdk.com/comment/video_like url script-request-header https://raw.githubusercontent.com/CenBoMin/GithubSync/main/DKDAPP2.0/cookie.js
https://dkd-api.dysdk.com/welfare/card url script-request-body https://raw.githubusercontent.com/CenBoMin/GithubSync/main/DKDAPP2.0/cookie.js
https://dkd-api.dysdk.com/welfare/card_double url script-request-body https://raw.githubusercontent.com/CenBoMin/GithubSync/main/DKDAPP2.0/cookie.js
https://dkd-api.dysdk.com/welfare/red url script-request-body https://raw.githubusercontent.com/CenBoMin/GithubSync/main/DKDAPP2.0/cookie.js
https://dkd-api.dysdk.com/welfare/red_double url script-request-body https://raw.githubusercontent.com/CenBoMin/GithubSync/main/DKDAPP2.0/cookie.js
https://dkd-api.dysdk.com/lotto/start url script-request-body https://raw.githubusercontent.com/CenBoMin/GithubSync/main/DKDAPP2.0/cookie.js
https://dkd-api.dysdk.com/android_video/getaward url script-request-body https://raw.githubusercontent.com/CenBoMin/GithubSync/main/DKDAPP2.0/cookie.js
https://dkd-api.dysdk.com/money/withdraw_do url script-request-body https://raw.githubusercontent.com/CenBoMin/GithubSync/main/DKDAPP2.0/cookie.js

[MITM]
hostname = dkd-api.dysdk.com

👉👉👉 食用方法 👈👈👈

📌温馨提示1:启动重写引用获取cookie时务必要确认重写引用是不是生效(圈x左上角有红色数字圈圈)，通常会因为raw连接需要代理而出错，所以启用更新的时候不要用直连模式！

📌温馨提示2:视频加载出错,采用全部直连模式,圈x右下角圈圈,改成黄色的就是直连模式了！

📌非常重要！非常重要！非常重要！:
 * 看广告视频可能需要开直连。
 * 可能WiFi获取不到cookie，请用流量获取。

⭐️【Cookie】:
1.基础数据：App => 我的
2.签到&翻倍：App => 领现金 => 🤳抓2个cookie,第一次cookie:签到,第二次cookie:签到翻倍
3.打卡拿现金&翻倍：App => 福利 => 🤳抓2个cookie,第一次cookie:打卡拿现金,第二次cookie:打卡拿现金翻倍
4.拆红包领现金&翻倍：App => 福利 => 🤳抓20个cookie,奇数次cookie:拆红包领现金,偶数次cookie:拆红包领现金翻倍
5.看专属视频得金币688&领取奖励：App => 领现金  => 🤳抓3个cookie,第一次cookie:看专属视频得金币,第二次cookie:点赞赚金币,第三次cookie:看视频领金币
6.点赞&取赞：App => 小视频 => 🤳抓2个cookie,第一次cookie:点赞,第二次cookie:取赞
7.转盘：App => 福利 => 抽奖 => 🤳成功看视频一次
8.看转圈视频：App => 小视频 => 🤳抓50个cookie左右
9.提现：App => 我的  => 提现 => 提现成功一次
