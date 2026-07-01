🧸#UC小猪测试脚本

🏦 领元宝 /自动做任务领取奖励/自动元宝转换现金/自动提现
🔑 自动做任务除了游戏和领大奖的任务外，都可以自动做和领取

👉👉👉 脚本说明 👈👈👈
❗️❗️本脚本为测试学习版本(TF),如果你还未取得测试资格,请先关注https://t.me/CbScript,不定时会放出测试资格邀请链接。
特别注意有两个重写，视频cookie只能用一天，因此要抓两天视频的cookie，一天20个视频总共40个
其他的可以做的任务看图，一般来说游戏🎮和领大奖手动做不能用脚本，其他应该都可以抓到任务cookie
奖励🎁 cookie可以一直用没有时间限制，领取抓cookie就对，包括限时累计任务也要抓
再次强调注意视频抓取cookie，用了第一天，明天就用第二天的重写，其他cookie部分两个重写都可以用没差别


👉👉👉 信息 👈👈👈
【BOXJS】: https://raw.githubusercontent.com/CenBoMin/GithubSync/main/cenbomin.test.box.json
【脚本定时cron】: 15 */4 * * * (每4小时执行一次)
【脚本JS】:https://raw.githubusercontent.com/CenBoMin/GithubSync/main/UCPIG/ucpigapp.js
【重写引用第一天】: https://raw.githubusercontent.com/CenBoMin/GithubSync/main/UCPIG/cookie2.conf
【重写引用第一天】: https://raw.githubusercontent.com/CenBoMin/GithubSync/main/UCPIG/cookie1.conf


👉👉👉 配置文件 👈👈👈
[详情请见]
https://github.com/CenBoMin/GithubSync/tree/main/UCPIG

[task_local]
15 */4 * * * https://raw.githubusercontent.com/CenBoMin/GithubSync/main/UCPIG/ucpigapp.js, tag=UC小猪, img-url=https://raw.githubusercontent.com/CenBoMin/GithubSync/main/UCPIG/140.png, enabled=false

[rewrite_local]
建议使用重写conf,避免抓cookie错误

[MITM]
建议使用重写conf,避免抓cookie错误

👉👉👉 食用方法 👈👈👈

📌温馨提示1:启动重写引用获取cookie时务必要确认重写引用是不是生效(圈x左上角有红色数字圈圈)，通常会因为raw连接需要代理而出错，所以启用更新的时候不要用直连模式！

📌温馨提示2:视频加载出错,采用全部直连模式,圈x右下角圈圈,改成黄色的就是直连模式了！

📌非常重要！非常重要！非常重要！:
 * 看广告视频可能需要开直连。
 * 可能WiFi获取不到cookie，请用流量获取。

⭐️【Cookie】:
UC浏览器=>右上角招财猪送现金
1.用户基础数据：页面中间上方点击→元宝和累计兑换现金页面
2.元宝兑换:点击兑现金→选择一个兑现选项
3.提现支付宝:点击提现→在下午6点提现
4.收元宝:回到主页面→点击中间的收元宝
5.任务请求：做任务领元宝页面→看视频领元宝/一些10-50元宝的任务
6.任务奖励领取：做完任务领取即可,一般任务/累计任务领取
