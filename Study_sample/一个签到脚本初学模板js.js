

//以上是配置说明
const $iosrule = iosrule();//声明必须



var xurl="https://appweb.xiangha.com/Cash/getCustomerInfo";

var KEY=`你的ck`;





//++++++++++++++++++++++++++++++++

//3.需要执行的函数都写这里
function main()
{


qx_main();

  

}




main()


//++++++++++++++++++++++++++++++++++++
//4.基础模板





function qx_main()
{
  const llUrl1 = {url:xurl,
  headers:{"Cookie": KEY,"User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 12_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 ;AppDelegate#ios#8.2.3","X-Requested-With":"XMLHttpRequest"}}
   
    
     $iosrule.get(llUrl1, function(error, response, data) {
      console.log("测试"+data)
      
      papa(x,y,"")
      
})


}











//以下不要改动圈叉固定函数
function papa(x,y,z){

 $iosrule.notify(x,y,z);}




function iosrule() {
    const isRequest = typeof $request != "undefined"
    const isSurge = typeof $httpClient != "undefined"
    const isQuanX = typeof $task != "undefined"
    const notify = (title, subtitle, message) => {
        if (isQuanX) $notify(title, subtitle, message)
        if (isSurge) $notification.post(title, subtitle, message)
    }
    const write = (value, key) => {
        if (isQuanX) return $prefs.setValueForKey(value, key)
        if (isSurge) return $persistentStore.write(value, key)
    }
    const read = (key) => {
        if (isQuanX) return $prefs.valueForKey(key)
        if (isSurge) return $persistentStore.read(key)
    }
    const get = (options, callback) => {
        if (isQuanX) {
            if (typeof options == "string") options = { url: options }
            options["method"] = "GET"
            $task.fetch(options).then(response => {
                response["status"] = response.statusCode
                callback(null, response, response.body)
            }, reason => callback(reason.error, null, null))
        }
        if (isSurge) $httpClient.get(options, callback)
    }
    const post = (options, callback) => {
        if (isQuanX) {
            if (typeof options == "string") options = { url: options }
            options["method"] = "POST"
            $task.fetch(options).then(response => {
                response["status"] = response.statusCode
                callback(null, response, response.body)
            }, reason => callback(reason.error, null, null))
        }
        if (isSurge) $httpClient.post(options, callback)
    }
    const end = () => {
        if (isQuanX) isRequest ? $done({}) : ""
        if (isSurge) isRequest ? $done({}) : $done()
    }
    return { isRequest, isQuanX, isSurge, notify, write, read, get, post, end }
};





