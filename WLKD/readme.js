#文旅看点测试脚本

👉👉👉 脚本说明 👈👈👈
1.本脚本为测试学习版本
2.定时请半小时执行一次,不然有些任务会没做到,建议使用v2p服务器测试脚本


👉👉👉 信息 👈👈👈
【BOXJS】: https://raw.githubusercontent.com/CenBoMin/GithubSync/main/cenbomin.test.box.json
【脚本定时cron】: */30 */1 * * * (每30min执行一次)
【脚本JS】:https://raw.githubusercontent.com/CenBoMin/GithubSync/main/WLKD/wlkdapp.js
【重写引用】: https://raw.githubusercontent.com/CenBoMin/GithubSync/main/WLKD/cookie.conf


👉👉👉 配置文件 👈👈👈
[详情请见]
https://github.com/CenBoMin/GithubSync/tree/main/WLKD

[task_local]
*/30 */1 * * * https://raw.githubusercontent.com/CenBoMin/GithubSync/main/WLKD/wlkdapp.js, tag=文旅看点

[rewrite_local]
//基础验证信息
https://wlkdapi.zhongchuanjukan.com/login/appOpen url script-request-body https://raw.githubusercontent.com/CenBoMin/GithubSync/main/WLKD/cookie.js
//清单
https://wlkdapi.zhongchuanjukan.com/article/list url script-request-body https://raw.githubusercontent.com/CenBoMin/GithubSync/main/WLKD/cookie.js
//定时分享
https://wlkdapi.zhongchuanjukan.com/share/info url script-request-body https://raw.githubusercontent.com/CenBoMin/GithubSync/main/WLKD/cookie.js

[MITM]
hostname = wlkdapi.zhongchuanjukan.com

👉👉👉 食用方法 👈👈👈

📌温馨提示1:启动重写引用获取cookie时务必要确认重写引用是不是生效(圈x左上角有红色数字圈圈)，通常会因为raw连接需要代理而出错，所以启用更新的时候不要用直连模式！

📌温馨提示2:视频加载出错,采用全部直连模式,圈x右下角圈圈,改成黄色的就是直连模式了！

📌非常重要！非常重要！非常重要！:
 * 看广告视频可能需要开直连。
 * 可能WiFi获取不到cookie，请用流量获取。

⭐️【Cookie】:
1.基础数据：App => 打开app进入就获取
2.阅读清单：App => 打开app进入就获取
3.视频清单：App => 视频 => 进入就获取
4.分享请求：App => 随便点开一篇文章 => 微信转发立即获取
