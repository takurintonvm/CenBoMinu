let K = 0;
   all()
function all(){
      signheaderVal = cookiesArr[K];
   for(var i=0;i<7;i++)
 { (function(i) {
            setTimeout(function() {

     if (i==0)
conghuatask();//任务列表

else if (i==1)
sharevideo();//宝箱

else if (i==4&& task.data&&task.data.tasklist[6].status==1)
QQreadsign();//金币签到

else if (i==5&& task.data&&task.data.tasklist[6].status==0)
QQreadvideo();//视频任务



else if (i == 6 && K < QQreadhdArr.length - 1) {
K += 1;
all();
 } else if (i == 6 && K == QQreadhdArr.length - 1) {
	 showmsg();//通知
	 console.log(tz)
            $.done();
          }
        },

        (i + 1) * dd * 1000
      );
    })(i);
  }
}
