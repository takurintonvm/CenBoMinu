🐷 同程小猪脚本：
可完成 自动签到,看视频,夺宝,收取任务金币

👉👉👉 脚本说明 👈👈👈
❗️❗️本脚本为测试版本(TF),如果你还未取得测试资格,请先关注https://t.me/CbScript,不定时会放出测试资格邀请链接。

👉👉👉 信息 👈👈👈
【BOXJS】: https://raw.githubusercontent.com/CenBoMin/GithubSync/main/cenbomin.test.box.json
【脚本定时cron】: 0 */1 * * * (每个小时执行一次)
【脚本JS】:https://raw.githubusercontent.com/CenBoMin/GithubSync/main/ELONGCASH/elongcash.js
【重写引用】:https://raw.githubusercontent.com/CenBoMin/GithubSync/main/ELONGCASH/cookie.conf

👉👉👉 配置文件 👈👈👈
[详情请见]
https://github.com/CenBoMin/GithubSync/tree/main/ELONGCASH

[task_local]
0 */1 * * * https://raw.githubusercontent.com/CenBoMin/GithubSync/main/ELONGCASH/elongcash.js, tag=同程小猪🐷, img-url=https://raw.githubusercontent.com/CenBoMin/GithubSync/main/ELONGCASH/140.png, enabled=false

[rewrite_local]
https://x.elong.com/feifang/activity/baseapi/treasure/task/receive-reward url script-request-body https://raw.githubusercontent.com/CenBoMin/GithubSync/main/ELONGCASH/elongcashck.js

[MITM]
hostname = x.elong.com

👉👉👉 食用方法 👈👈👈

📌温馨提示1:启动重写引用获取cookie时务必要确认重写引用是不是生效(圈x左上角有红色数字圈圈)，通常会因为raw连接需要代理而出错，所以启用更新的时候不要用直连模式！

📌温馨提示2:视频加载出错,采用全部直连模式,圈x右下角圈圈,改成黄色的就是直连模式了！

📌非常重要！非常重要！非常重要！:
 * 获取完cookie,务必关闭当前重写引用conf！！不然可能cookie会重置。
 * 看广告视频需要开直连。
 * 可能WiFi获取不到cookie，请用流量获取。

⭐️【Cookie】:打开同程旅游小程序，进入到首页右下角有个'天天领现金'的悬浮窗，如果没有的话加微信群，随便call一个人分享链接给你即可,进入小程序页面之后,分享到自己的文件传输助手，然后在点"自己分享的小程序链接",也就是自己助力自己...进入页面之后,会提示不能自己助力自己,就会弹窗提示你获取到cookie，接着执行脚本两次,第一次下载验证key，第二次会打印验证码,然后到群里面提交,根据提示上传成功等待...
