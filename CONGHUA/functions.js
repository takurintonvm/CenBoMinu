






//每天领金币（30min一次） //开启时段宝箱
function everydaycoin() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const url = {
                url: `${CONGHUA_HOST}task/v1/task_center/red`,
                headers: JSON.parse(signheaderVal),
            }
            $.post(url, async(error, response, data) => {
                boxres = JSON.parse(data)
                if (boxres.code == 1) {
                  boxretime = boxres.data.time
                  $.setdata(boxretime, 'opbox')
                    detail += `【领金币】+${boxres.data.score}金币 下次奖励${boxres.data.time / 30}分钟\n`
                      await boxshare();
                }else{
                    //detail += `【开启宝箱】${boxres.msg}\n`
                   // $.log(`${boxres.msg}`)
                }
                resolve()
            })
        },s)
    })
}



//分享视频赚钱（每天三次）
function Cardshare() {
    return new Promise((resolve, reject) => {
        const starturl = {
            url: `${CONGHUA_HOST}video/v1/video/share`,
            headers: JSON.parse(signheaderVal),
        }
        $.post(starturl, (error, response, data) => {
            sharestart = JSON.parse(data)
            //detail += `【打卡分享】${sharestart.msg}\n`
            if (sharestart.code == 1) {
                setTimeout(() => {
                    let endurl = {
                        url: `${CONGHUA_HOST}task/v1/task_center/share_video_reward`,
                        headers: JSON.parse(signheaderVal)
                    }
                    $.post(endurl, (error, response, data) => {
                        shareres = JSON.parse(data)
                        if (shareres.code == 1) {
                            detail += `+${shareres.data.score}金币\n`
                        } else {
                            //detail += `【打卡分享】${shareres.msg}\n`
                         //$.log(`${shareres.msg}`)
                        }
                        resolve()
                    })
                  },s*2);
            }
        })
    })
}
