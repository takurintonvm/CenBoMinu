const $=new Env("UCPIG");var Base64={keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(input){var output="";var chr1,chr2,chr3,enc1,enc2,enc3,enc4;var i=0;input=Base64.utf8encode(input);while(i<input.length){chr1=input.charCodeAt(i++);chr2=input.charCodeAt(i++);chr3=input.charCodeAt(i++);enc1=chr1>>2;enc2=((chr1&3)<<4)|(chr2>>4);enc3=((chr2&15)<<2)|(chr3>>6);enc4=chr3&63;if(isNaN(chr2)){enc3=enc4=64;}else if(isNaN(chr3)){enc4=64;}
output=output+
this.keyStr.charAt(enc1)+this.keyStr.charAt(enc2)+
this.keyStr.charAt(enc3)+this.keyStr.charAt(enc4);}
return output;},decode:function(input){var output="";var chr1,chr2,chr3;var enc1,enc2,enc3,enc4;var i=0;input=input.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(i<input.length){enc1=this.keyStr.indexOf(input.charAt(i++));enc2=this.keyStr.indexOf(input.charAt(i++));enc3=this.keyStr.indexOf(input.charAt(i++));enc4=this.keyStr.indexOf(input.charAt(i++));chr1=(enc1<<2)|(enc2>>4);chr2=((enc2&15)<<4)|(enc3>>2);chr3=((enc3&3)<<6)|enc4;output=output+String.fromCharCode(chr1);if(enc3!=64){output=output+String.fromCharCode(chr2);}
if(enc4!=64){output=output+String.fromCharCode(chr3);}}
output=Base64.utf8decode(output);return output;},utf8encode:function(string){var utftext="";string=string.replace(/\r\n/g,"\n");for(var n=0;n<string.length;n++){var c=string.charCodeAt(n);if(c<128){utftext+=String.fromCharCode(c);}else if((c>127)&&(c<2048)){utftext+=String.fromCharCode((c>>6)|192);utftext+=String.fromCharCode((c&63)|128);}else{utftext+=String.fromCharCode((c>>12)|224);utftext+=String.fromCharCode(((c>>6)&63)|128);utftext+=String.fromCharCode((c&63)|128);}}
return utftext;},utf8decode:function(utftext){var string="";var i=0;var c,c1,c2,c3;c=c1=c2=0;while(i<utftext.length){c=utftext.charCodeAt(i);if(c<128){string+=String.fromCharCode(c);i++;}else if((c>191)&&(c<224)){c2=utftext.charCodeAt(i+1);string+=String.fromCharCode(((c&31)<<6)|(c2&63));i+=2;}else{c2=utftext.charCodeAt(i+1);c3=utftext.charCodeAt(i+2);string+=String.fromCharCode(((c&15)<<12)|((c2&63)<<6)|(c3&63));i+=3;}}
return string;}};const hostcoral2="https://coral2.uc.cn/";const hostucwallet="https://ucwallet.uc.cn/";const hostcoraltask="https://coral-task.uc.cn/";const tgmarkcode="/submitactivitycodes ucpigapp@"
const githubkeyUrl='https://raw.githubusercontent.com/CenBoMin/TGBOTCode/main/ucpigapp.js'
let ucpigapp=$.getjson('ucpigapp',[])
let ucpigappkey=$.getval('ucpigappkey');var _0xodr='jsjiami.com.v6',_0x1c82=[_0xodr,'BMKywrcbTgk=','DjfCvRHClg==','w4tnD3AI','w73DoznDpcOX','ZgF4','w4zDusOfdFw=','w5/DkjvDjQ==','w5525b2G5aWt6aq56K+owoLnlrjmiIk=','U8KTw6hEw4Q=','w5XDocObSFI=','w73Dj8K7dsOe','B8KI5aWS6LWFw5IA5Y+75ZufDFQ=','Xj3CmFs=','wrTCsRw=','LsOuw4o+56ed6ZGB6aih6K635oqz5Yip776i8Y6/lw==','w7nDnxw=','T/CYtprDuQ==','w67Di8OdXA==','HQEAwonCjjR6wq1Zw4rxi7G0BOaLqOigrOiHjOadkcOE5b+W5aWr5omX6KKlX/CSoLZFNDzCkA==','wq/CjsKLRcOF','R8OHBA==','w59qZmU2','YDZJTQ==','w4vCkSrDpOekm+mTu+mqtuivmeWlpui3mO+/qw==','woQxLWvCgsKyw5JhUsKu8LWBlG/lsojorJTmmL3mlKBo6IeR5p6c5L+f55ev5pyj6Zmk56e66ZGaw7bCn0zDow==','w5nDqj7DssOa','w7TDlxpJWQ==','XMKMw6g=','LloTw4w=','wqFtTV8a','XuiEsOacieS9nOeXs+aekemblQXCqTY=','HgHCugvCuQ==','Cn3Dig==','wpRWwoTCm8OI','w6bCtMO3Wg==','w6jDogZz56Wh6ZK66ame6K+05oqS5Ymq77628LGNnQ==','w53DnDE=','w5PwnZWFEA==','w4tfEUI=','w4wDDcOJZg==','w4JXwoJrwpo=','KHDDtMOBwr8=','wpR9BBjCqQ==','JBBq','4p+p55aR5omh','w6pxN0go','R1TDlw==','wozCgyhX56em6ZOC6am96K2z5aan6LSz772J','wq3Ctx8=','G+Kaqe+7jueXvOaIgQ==','w4PDtBxaXg==','w7XDg8OU','woRyXQ==','wrdqPi4=','4pmB77iN55W95omx','HjtqDV4=','ekVe6K2e5Z+157+p5YaM5oyJ5LqY6air6KyT56OHB+WkjeafvOW0pOaOreS5quisoeeqreWQvuWFpOiuquivouOBkBrwrqWj6amu6K6256Ke5o6G5LiA5qGO5b+WUQ==','wpJBwqo=','wobDhDrCoQ==','w5LDkiLDi8OT','wp3Ck+Wlp+i2jcKaZuWMtuWbvB4g','w6UlKMOHWUXChQ==','w4Zfw7bDl39s','w7oWw7/CsEY=','NE5i','M8KWGMKpWA==','wqxiNw==','TMKRw4HDj3YXw5fCnsKp','wrXDisOObCU=','dMOpw5B7Vw==','K8Orw4wYw7U=','fGTCucK3WQ==','wodgV3A=','5Lme5Yqf5oib6KGr6YGh55+p8YOXoA==','wqLCksOU','wo/CrsO/Fnk=','P0RxE0DCm8O8','AEjDvMO0wpg=','wrXDnk0=','wqLDj8OLaQ7DpOivuOWGvuWLiuW8k+iMhOWNryLCoMKRw4kpNvCzs7M=','w7Qxw7o=','w7PwmYeGwpU=','UcOl5byK5aWl5Lm06L6h6IWR5p6u5L+Z55W85p656ZiG56Sl6ZGuw4LDogo=','w7jDkQs=','HcK+wr0=','w5XDmCQEWw==','RMOWw4RJdcKAY0E=','w6wmw7DCmFrDuMKs','RFTDl2PDvxDDjwx8VA==','TPGKpYDCuA==','w78Aw6vCmEhww5x4wqDCk/Cxsrfoh5Lmno7otq/ljb7ml7Tph7/Dog==','a8K7w5M=','4oWc5p+R5q6S5oiH6KGk5YSx','5Lqy6LW45Y2q','jXsjniPpamZi.GlcGoTwmb.Dv6=='];(function(_0x1ea4f2,_0x4aa122,_0x215966){var _0x43d5ff=function(_0xc3529a,_0x1715a2,_0x3c2849,_0x5e9916,_0x258488){_0x1715a2=_0x1715a2>>0x8,_0x258488='po';var _0x4fe25c='shift',_0x4ac2f2='push';if(_0x1715a2<_0xc3529a){while(--_0xc3529a){_0x5e9916=_0x1ea4f2[_0x4fe25c]();if(_0x1715a2===_0xc3529a){_0x1715a2=_0x5e9916;_0x3c2849=_0x1ea4f2[_0x258488+'p']();}else if(_0x1715a2&&_0x3c2849['replace'](/[XnPpZGlGTwbD=]/g,'')===_0x1715a2){_0x1ea4f2[_0x4ac2f2](_0x5e9916);}}_0x1ea4f2[_0x4ac2f2](_0x1ea4f2[_0x4fe25c]());}return 0x8bbb1;};return _0x43d5ff(++_0x4aa122,_0x215966)>>_0x4aa122^_0x215966;}(_0x1c82,0xa1,0xa100));var _0x5618=function(_0x327cd3,_0x3c7f3f){_0x327cd3=~~'0x'['concat'](_0x327cd3);var _0x1f8397=_0x1c82[_0x327cd3];if(_0x5618['bBzOkb']===undefined){(function(){var _0x190024=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x10f0cb='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x190024['atob']||(_0x190024['atob']=function(_0xe100c8){var _0x4fdfe4=String(_0xe100c8)['replace'](/=+$/,'');for(var _0x4c9c27=0x0,_0x17666f,_0x26c608,_0x32dec4=0x0,_0x3cfc17='';_0x26c608=_0x4fdfe4['charAt'](_0x32dec4++);~_0x26c608&&(_0x17666f=_0x4c9c27%0x4?_0x17666f*0x40+_0x26c608:_0x26c608,_0x4c9c27++%0x4)?_0x3cfc17+=String['fromCharCode'](0xff&_0x17666f>>(-0x2*_0x4c9c27&0x6)):0x0){_0x26c608=_0x10f0cb['indexOf'](_0x26c608);}return _0x3cfc17;});}());var _0x31ebc2=function(_0x4b456d,_0x3c7f3f){var _0x3de4e7=[],_0xd937bf=0x0,_0x4e414f,_0x5dbc23='',_0x2cc87d='';_0x4b456d=atob(_0x4b456d);for(var _0x4889b0=0x0,_0x474911=_0x4b456d['length'];_0x4889b0<_0x474911;_0x4889b0++){_0x2cc87d+='%'+('00'+_0x4b456d['charCodeAt'](_0x4889b0)['toString'](0x10))['slice'](-0x2);}_0x4b456d=decodeURIComponent(_0x2cc87d);for(var _0x3ff8ab=0x0;_0x3ff8ab<0x100;_0x3ff8ab++){_0x3de4e7[_0x3ff8ab]=_0x3ff8ab;}for(_0x3ff8ab=0x0;_0x3ff8ab<0x100;_0x3ff8ab++){_0xd937bf=(_0xd937bf+_0x3de4e7[_0x3ff8ab]+_0x3c7f3f['charCodeAt'](_0x3ff8ab%_0x3c7f3f['length']))%0x100;_0x4e414f=_0x3de4e7[_0x3ff8ab];_0x3de4e7[_0x3ff8ab]=_0x3de4e7[_0xd937bf];_0x3de4e7[_0xd937bf]=_0x4e414f;}_0x3ff8ab=0x0;_0xd937bf=0x0;for(var _0x52a393=0x0;_0x52a393<_0x4b456d['length'];_0x52a393++){_0x3ff8ab=(_0x3ff8ab+0x1)%0x100;_0xd937bf=(_0xd937bf+_0x3de4e7[_0x3ff8ab])%0x100;_0x4e414f=_0x3de4e7[_0x3ff8ab];_0x3de4e7[_0x3ff8ab]=_0x3de4e7[_0xd937bf];_0x3de4e7[_0xd937bf]=_0x4e414f;_0x5dbc23+=String['fromCharCode'](_0x4b456d['charCodeAt'](_0x52a393)^_0x3de4e7[(_0x3de4e7[_0x3ff8ab]+_0x3de4e7[_0xd937bf])%0x100]);}return _0x5dbc23;};_0x5618['dceyPh']=_0x31ebc2;_0x5618['zsRmpX']={};_0x5618['bBzOkb']=!![];}var _0x222ae5=_0x5618['zsRmpX'][_0x327cd3];if(_0x222ae5===undefined){if(_0x5618['cRwYdZ']===undefined){_0x5618['cRwYdZ']=!![];}_0x1f8397=_0x5618['dceyPh'](_0x1f8397,_0x3c7f3f);_0x5618['zsRmpX'][_0x327cd3]=_0x1f8397;}else{_0x1f8397=_0x222ae5;}return _0x1f8397;};!(async()=>{var _0x2c86c7={'LPoMl':'[Tips]请先前往获取\x20用户基础数据Uid\x20📲','ASLvQ':'\x0a*\x20Author:CenBoMin\x0a*\x20Github:github.com/CenBoMin/GithubSync\x0a*\x20Telegram:https://t.me/CbScript\x0a*\x20Updatetime:2021.06.01\x0a','EQLKQ':function(_0x2488af,_0x1f128d){return _0x2488af!==_0x1f128d;},'EUpVH':_0x5618('0','GZ@%'),'xCapC':function(_0x57a42d,_0x2dcf45){return _0x57a42d!==_0x2dcf45;},'TcQUJ':_0x5618('1','h!]v'),'nYsWs':'flnFs','cpgIs':function(_0x5a02d2,_0x7c3687){return _0x5a02d2+_0x7c3687;},'UKkqb':function(_0x10ba8c,_0x3ac7aa){return _0x10ba8c===_0x3ac7aa;},'pFfLP':_0x5618('2','JgDZ'),'VjsTo':_0x5618('3','SdaA'),'HlwJy':function(_0x28fb31,_0x318fcc){return _0x28fb31+_0x318fcc;},'hYhZa':function(_0x89bc00,_0x42692b){return _0x89bc00(_0x42692b);},'hufjl':function(_0x4a18c7){return _0x4a18c7();},'mLTUd':function(_0x9f6698,_0x164943){return _0x9f6698+_0x164943;},'OOKoS':function(_0x51d0c8,_0x32ee4f){return _0x51d0c8+_0x32ee4f;},'IKwSR':function(_0x177149,_0x393c12){return _0x177149(_0x393c12);},'MvWSx':_0x5618('4','lsH['),'VDgzi':function(_0x2b04e1,_0x23eece){return _0x2b04e1+_0x23eece;}};cc=$[_0x5618('5','EBn3')]+_0x5618('6','Ds3#');console[_0x5618('7','p*9p')](_0x2c86c7[_0x5618('8','p*9p')]);console['log']('Now\x20login(UTC+8):'+new Date(new Date()[_0x5618('9','XA2#')]())['toLocaleString']());if(_0x2c86c7['EQLKQ'](typeof $request,_0x2c86c7[_0x5618('a','@hbD')])){$[_0x5618('b','u2*!')](_0x5618('c','h!]v'));}else if(!ucpigappkey){$[_0x5618('d','tmww')](_0x5618('e','ugbP')+$['name']+_0x5618('f','#)7%'));await githubkey();}else{let _0x494d0d=ucpigapp['filter'](_0x5f060b=>_0x5f060b['hd'])[_0x5618('10','Lc2c')](_0x116d63=>({'uid':_0x116d63[_0x5618('11','ocG^')],'headers':JSON[_0x5618('12','Tc%v')](_0x116d63['hd']),'exchangebody':_0x116d63[_0x5618('13','JgDZ')],'txmoneybody':_0x116d63[_0x5618('14','tmww')],'pigawardurl':_0x116d63['pigawardurl'],'pigawardbody':_0x116d63['pigawardbody'],'videotask1':_0x116d63[_0x5618('15','60I@')],'videotask2':_0x116d63['videotask2'],'videoaward':_0x116d63['videoaward'],'coinurl':_0x116d63['coinurl']}));console['log'](_0x5618('16','uZhk')+$['name']+_0x5618('17','SZ!p'));console[_0x5618('18','zv1v')](_0x5618('19','p*9p')+_0x494d0d['length']+_0x5618('1a','tmww'));for(let _0x548b67=0x0;_0x548b67<_0x494d0d[_0x5618('1b','ocG^')];_0x548b67++){tkList=_0x494d0d[_0x548b67];if(!tkList['uid']){if(_0x2c86c7[_0x5618('1c','HXz1')](_0x2c86c7['TcQUJ'],_0x2c86c7[_0x5618('1d','Ds3#')])){$['log'](_0x2c86c7[_0x5618('1e','yK8v')]);}else{$[_0x5618('1f','JpJ]')](_0x2c86c7[_0x5618('20','Q1]G')]);}}else{$['log']('\x0a🗝['+$[_0x5618('21','yK8v')]+_0x5618('22','%iP5')+_0x2c86c7[_0x5618('23','pIKQ')](_0x548b67,0x1)+'-脚本使用权限...');if(z(_0x548b67)){if(_0x2c86c7[_0x5618('24','Q1]G')](_0x2c86c7[_0x5618('25','@Wyo')],_0x2c86c7['VjsTo'])){$['log']('','❌\x20'+$['name']+_0x5618('26','xLks')+e+'!','');}else{$['log']('用户'+_0x2c86c7['cpgIs'](_0x548b67,0x1)+_0x5618('27','HXz1')+tkList[_0x5618('28','Od9!')]+_0x5618('29','zv1v'));$[_0x5618('2a','Lc2c')](_0x5618('2b','@hbD')+$[_0x5618('2c','Q1]G')]+_0x5618('2d','Oxo4')+_0x2c86c7[_0x5618('2e','7Zlt')](_0x548b67,0x1)+'的脚本任务');await main(_0x548b67);}}else{$[_0x5618('2f','xLks')]('用户'+_0x2c86c7[_0x5618('30','T4OC')](_0x548b67,0x1)+_0x5618('31','*Z9%')+tkList['uid']+_0x5618('32','dk^7'));$[_0x5618('18','zv1v')]('\x0a🗝['+$['name']+_0x5618('33','Lzvl'));await _0x2c86c7[_0x5618('34','yK8v')](githubkey,_0x5618('35','Lc2c'));$[_0x5618('36','pIKQ')]('\x0a🗝['+$[_0x5618('37','Oxo4')]+']:再次验证~用户'+_0x2c86c7[_0x5618('38','EBn3')](_0x548b67,0x1)+_0x5618('39','Zw!c'));if(_0x2c86c7[_0x5618('3a','HXz1')](z)){$[_0x5618('3b','Ssjn')]('用户'+_0x2c86c7[_0x5618('3c','ugbP')](_0x548b67,0x1)+_0x5618('3d','p*9p')+tkList['uid']+_0x5618('3e','Od9!'));$[_0x5618('3f','yK8v')](_0x5618('40','Lzvl')+$[_0x5618('41','Ds3#')]+']:~\x20System💲/执行脚本\x0a开始执行\x20User'+_0x2c86c7[_0x5618('42','%iP5')](_0x548b67,0x1)+'的脚本任务');await _0x2c86c7[_0x5618('43','S0G[')](main,_0x548b67);}else{if(_0x5618('44','@hbD')===_0x2c86c7[_0x5618('45','Lzvl')]){$[_0x5618('46','*Z9%')](_0x5618('47','Tc%v')+_0x2c86c7[_0x5618('48','Ds3#')](_0x548b67,0x1)+'(ID:'+tkList[_0x5618('49','60I@')]+_0x5618('4a','Tc%v'));$[_0x5618('4b','Od9!')](_0x5618('4c','lsH[')+_0x2c86c7[_0x5618('4d','Lc2c')](_0x548b67,0x1)+':~\x20请在群内提交互助码,如果已提交请稍后再试试。\x0a🔺验证码提交格式:'+tgmarkcode+tkList[_0x5618('4e','Q1]G')]);$[_0x5618('4f','EBn3')]($[_0x5618('50','Lzvl')],'',_0x5618('51','rVqQ')+_0x2c86c7[_0x5618('52','*Z9%')](_0x548b67,0x1)+_0x5618('53','Oxo4')+tgmarkcode+tkList[_0x5618('54','Ekh%')]);}else{$[_0x5618('55','dk^7')]();}}}}}}})()[_0x5618('56','yK8v')](_0x1e729c=>{$[_0x5618('3f','yK8v')]('','❌\x20'+$['name']+_0x5618('57','yK8v')+_0x1e729c+'!','');})[_0x5618('58','%iP5')](()=>{$['done']();});function z(){var _0x240806={'bHbGr':function(_0x2ce002,_0x4faa23){return _0x2ce002>_0x4faa23;},'uBNJu':function(_0x58a106,_0x10d4a9){return _0x58a106(_0x10d4a9);}};const _0x417fdf=decodeURIComponent(Base64[_0x5618('59','SZ!p')](ucpigappkey));function _0x459c21(_0x4aa5b9){try{if(_0x240806[_0x5618('5a','tmww')](_0x417fdf['indexOf'](_0x4aa5b9),-0x1)){return!![];}}catch(_0x1f23fa){$[_0x5618('5b','XA2#')](_0x1f23fa);return![];}}if(_0x240806[_0x5618('5c','uZhk')](_0x459c21,tkList[_0x5618('5d','Lzvl')])){return!![];}else{return![];}};_0xodr='jsjiami.com.v6';function initTaskOptions(url,body){return{url:`${url}`,headers:{'Accept':`*/*`,'Origin':`https://broccoli.uc.cn`,'Connection':`keep-alive`,'Accept-Encoding':`gzip, deflate`,'User-Agent':`Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X; zh-CN) AppleWebKit/537.51.1 (KHTML, like Gecko) Mobile/12H143 UCBrowser/13.3.3.1458 Mobile UCWebARUA`,'Accept-Language':`zh-cn`},body:body};}
async function main(i){console.log(`\n🐷[${$.name}]:~ User${i+1}💲查询元宝数量`)
await getUserInfo();console.log(`\n🐷[${$.name}]:~ User${i+1}💲收小猪扑满的元宝`)
!tkList.pigawardbody?$.log('[Tips]请先前往获取 收元宝cookie 📲'):await pigAward();;console.log(`\n🐷[${$.name}]:~ User${i+1}💲测试执行视频任务`);!tkList.videotask1?$.log('[Tips]请先前往获取 第一天任务数据 📲'):await videoTaskTest1();!tkList.videotask2?$.log('[Tips]请先前往获取 第二天任务数据 📲'):await videoTaskTest2();console.log(`\n🐷[${$.name}]:~ User${i+1}💲测试领取视频奖励`)
await videoAwardTest();if(awardstate===2){for(var m=0;m<tkList.videoaward.length;m++){await videoAward(m)}}else{console.log(`→测试结果:视频奖励已领取🎉`);}
console.log(`\n🐷[${$.name}]:~ User${i+1}💲元宝转换为现金`)
!tkList.exchangebody?$.log('[Tips]请先前往获取 元宝兑换cookie📲'):await exchangeMoney();console.log(`\n🐷[${$.name}]:~ User${i+1}💲提现`)
!tkList.txmoneybody?$.log('[Tips]请先前往获取 提现支付宝cookie📲'):await txMoney();}
async function txMoney(){return new Promise((resolve)=>{const options=initTaskOptions(`${hostucwallet}exchange/submitExchange`,tkList.txmoneybody);$.post(options,async(err,resp,data)=>{try{if(err){console.log("⛔️API查询请求失败，请检查自身设备网络情况");console.log(JSON.stringify(err));$.logErr(err);}else{if(safeGet(data)){data=JSON.parse(data);const code=data.code
switch(code){case"EXCHANGE:INVALID_USER":$.log('[Tips]请先前往获取 提现支付宝cookie📲')
break;default:console.log(`**** sample *****\n`);$.log(`\n‼️${resp.statusCode}[txMoney 调试log]:${resp.body}`);}}}}catch(e){$.logErr(e,resp);}finally{resolve();}});});}
async function exchangeMoney(){return new Promise((resolve)=>{const options=initTaskOptions(`${hostcoral2}piggybank/withdraw/exchange`,tkList.exchangebody);$.post(options,async(err,resp,data)=>{try{if(err){console.log("⛔️API查询请求失败，请检查自身设备网络情况");console.log(JSON.stringify(err));$.logErr(err);}else{if(safeGet(data)){data=JSON.parse(data);const code=data.code
switch(code){case"SCENE_APP_ERROR":$.log('[Tips]请先前往获取 元宝兑换cookie📲')
break;case"NOT_ENOUGH":$.log('→余额不足,明天再来🎉')
break;default:$.log(`\n‼️${resp.statusCode}[exchangeMoney 调试log]:${resp.body}`);}}}}catch(e){$.logErr(e,resp);}finally{resolve();}});});}
async function pigAward(){return new Promise((resolve)=>{const options=initTaskOptions(tkList.pigawardurl,tkList.pigawardbody);$.post(options,async(err,resp,data)=>{try{if(err){console.log("⛔️API查询请求失败，请检查自身设备网络情况");console.log(JSON.stringify(err));$.logErr(err);}else{if(safeGet(data)){data=JSON.parse(data);const state=data.success
switch(state){case false:console.log(`→小猪扑满元宝已收完🎉`);break;case true:console.log(`✔️小猪扑满收取${data.data.piggyData.remainAmount}元宝`);break;default:$.log(`\n‼️${resp.statusCode}[ pigAward 调试log]:${resp.body}`);}}}}catch(e){$.logErr(e,resp);}finally{resolve();}});});}
async function videoAward(m){return new Promise((resolve)=>{const options=initTaskOptions(tkList.videoaward[m]);$.get(options,async(err,resp,data)=>{try{if(err){console.log("⛔️API查询请求失败，请检查自身设备网络情况");console.log(JSON.stringify(err));$.logErr(err);}else{if(safeGet(data)){data=JSON.parse(data);const code=data.code
switch(code){case"REPEAT_REQUEST_ID":console.log(`→执行结果:失败❌`);break;case"OK":console.log(`✔️执行ID${data.data.curTask.id}结果:领取奖励${data.data.prizes[0].rewardItem.amount}元宝成功🎉`);break;default:$.log(`\n‼️${resp.statusCode}[videoAward 调试log]:${resp.body}`);}}}}catch(e){$.logErr(e,resp);}finally{resolve();}});});}
async function videoAwardTest(){let testArrNum=Random(0,tkList.videoaward.length)
console.log(`→随机测试奖励数据:第${testArrNum+1}个数据`);return new Promise((resolve)=>{const options=initTaskOptions(tkList.videoaward[testArrNum]);$.get(options,async(err,resp,data)=>{try{if(err){console.log("⛔️API查询请求失败，请检查自身设备网络情况");console.log(JSON.stringify(err));$.logErr(err);}else{if(safeGet(data)){data=JSON.parse(data);awardtest=data.success
awardstate=data.data.state}}}catch(e){$.logErr(e,resp);}finally{resolve();}});});}
async function videoTaskDay2(h){return new Promise((resolve)=>{const options=initTaskOptions(tkList.videotask2[h]);$.get(options,async(err,resp,data)=>{try{if(err){console.log("⛔️API查询请求失败，请检查自身设备网络情况");console.log(JSON.stringify(err));$.logErr(err);}else{if(safeGet(data)){data=JSON.parse(data);const code=data.code
switch(code){case"REPEAT_REQUEST_ID":console.log(`→执行结果:失败❌`);break;case"OK":console.log(`✔️执行ID${data.data.curTask.id}结果:观看视频任务${data.data.curTask.target}成功🎉`);break;default:$.log(`\n‼️${resp.statusCode}[videoTaskDay2调试log]:${resp.body}`);}}}}catch(e){$.logErr(e,resp);}finally{resolve();}});});}
async function videoTaskDay1(k){return new Promise((resolve)=>{const options=initTaskOptions(tkList.videotask1[k]);$.get(options,async(err,resp,data)=>{try{if(err){console.log("⛔️API查询请求失败，请检查自身设备网络情况");console.log(JSON.stringify(err));$.logErr(err);}else{if(safeGet(data)){data=JSON.parse(data);const code=data.code
switch(code){case"REPEAT_REQUEST_ID":console.log(`→执行结果:失败❌`);break;case"OK":console.log(`✔️执行ID${data.data.curTask.id}结果:观看视频任务${data.data.curTask.target}成功🎉`);break;default:$.log(`\n‼️${resp.statusCode}[videoTaskDay1调试log]:${resp.body}`);}}}}catch(e){$.logErr(e,resp);}finally{resolve();}});});}
async function videoTaskTest1(){return new Promise((resolve)=>{let testArrNum=Random(0,tkList.videotask1.length)
console.log(`→随机测试视频第一组:第${testArrNum+1}个数据`);const options=initTaskOptions(tkList.videotask1[testArrNum]);$.get(options,async(err,resp,data)=>{try{if(err){console.log("⛔️API查询请求失败，请检查自身设备网络情况");console.log(JSON.stringify(err));$.logErr(err);}else{if(safeGet(data)){$.log(data)
data=JSON.parse(data);videotest1=data.success
videotest1?videostate1=data.data.state:videostate1=true
if(videotest1===true&&videostate1){console.log(`→测试结果:使用【第一天】的任务组,开始执行任务\n`);for(let k=0;k<tkList.videotask1.length;k++){await videoTaskDay1(k);await $.wait(1000)};console.log(`[Tips]如果有没执行的任务,请使用第一天的重写引用,前往获取cookie`);}else{console.log(`→测试结果1:可执行任务已完成🎉\n[Tips]如果结果不正确请重新执行脚本\n`)}}}}catch(e){$.logErr(e,resp);}finally{resolve();}});});}
async function videoTaskTest2(){return new Promise((resolve)=>{let testArrNum=Random(0,tkList.videotask2.length)
console.log(`→随机测试视频第二组:第${testArrNum+1}个数据`);const options=initTaskOptions(tkList.videotask2[testArrNum]);$.get(options,async(err,resp,data)=>{try{if(err){console.log("⛔️API查询请求失败，请检查自身设备网络情况");console.log(JSON.stringify(err));$.logErr(err);}else{if(safeGet(data)){$.log(data)
data=JSON.parse(data);videotest2=data.success
videotest2?videostate2=data.data.state:videostate2=true
if(videotest2===true){console.log(`→测试结果:可以执行任务🎉\n`);for(let h=0;h<tkList.videotask2.length;h++){await videoTaskDay2(h);await $.wait(1000);};console.log(`\n[Tips]如果有没执行的任务,请使用第二天的重写引用,前往获取cookie`);}else if(videostate2){console.log(`→测试结果2:可执行任务已完成🎉\n[Tips]如果结果不正确请重新执行脚本`);}else{console.log(`→测试结果2:可执行任务已完成🎉\n[Tips]如果结果不正确请重新执行脚本`);}}}}catch(e){$.logErr(e,resp);}finally{resolve();}});});}
async function getUserInfo(){return new Promise((resolve)=>{const options=initTaskOptions(`${tkList.coinurl}`);$.get(options,async(err,resp,data)=>{try{if(err){console.log("⛔️API查询请求失败，请检查自身设备网络情况");console.log(JSON.stringify(err));$.logErr(err);}else{if(safeGet(data)){data=JSON.parse(data);const code=data.code
mycoin=data.data.longterm.amount
switch(code){case"OK":console.log(`→目前小猪元宝${mycoin}个,大约可换现金${mycoin/10000}元`);break;default:$.log(`\n‼️${resp.statusCode}[getUserInfo 调试log]:${resp.body}`);}}}}catch(e){$.logErr(e,resp);}finally{resolve();}});});}
function formatDateTime(inputTime){var date=new Date(inputTime);var y=date.getFullYear();var m=date.getMonth()+1;m=m<10?('0'+m):m;var d=date.getDate();d=d<10?('0'+d):d;var h=date.getHours();h=h<10?('0'+h):h;var minute=date.getMinutes();var second=date.getSeconds();minute=minute<10?('0'+minute):minute;second=second<10?('0'+second):second;return y+m;};function safeGet(data){try{if(typeof JSON.parse(data)=="object"){return true;}}catch(e){console.log(e);console.log(`⛔️服务器访问数据为空，请检查自身设备网络情况`);return false;}}
async function githubkey(keystate){return new Promise((resolve)=>{let url={url:`${githubkeyUrl}`,};$.get(url,async(err,resp,data)=>{try{if(err){console.log("⛔️API查询请求失败❌ ‼️‼️");console.log(JSON.stringify(err));$.logErr(err);}else{switch(keystate){case"again":ucpigappkey=Base64.encode(data);if(ucpigappkey)$.setdata(ucpigappkey,'ucpigappkey');break;default:ucpigappkey=Base64.encode(data);$.log(ucpigappkey);if(ucpigappkey)$.setdata(ucpigappkey,'ucpigappkey');$.log(`\n🤖[${$.name}]:请重新执行脚本进行秘钥验证`);$.msg($.name,'',`🤖请重新执行脚本进行秘钥验证`);}}}catch(e){$.logErr(e,resp);}finally{resolve();}});});}
function Random(min,max){return Math.round(Math.random()*(max-min))+min;}
function Env(name,opts){class Http{constructor(env){this.env=env}
send(opts,method='GET'){opts=typeof opts==='string'?{url:opts}:opts
let sender=this.get
if(method==='POST'){sender=this.post}
return new Promise((resolve,reject)=>{sender.call(this,opts,(err,resp,body)=>{if(err)reject(err)
else resolve(resp)})})}
get(opts){return this.send.call(this.env,opts)}
post(opts){return this.send.call(this.env,opts,'POST')}}
return new(class{constructor(name,opts){this.name=name
this.http=new Http(this)
this.data=null
this.dataFile='box.dat'
this.logs=[]
this.isMute=false
this.isNeedRewrite=false
this.logSeparator='\n'
this.startTime=new Date().getTime()
Object.assign(this,opts)
this.log('',`🔔${this.name}, 开始!`)}
isNode(){return'undefined'!==typeof module&&!!module.exports}
isQuanX(){return'undefined'!==typeof $task}
isSurge(){return'undefined'!==typeof $httpClient&&'undefined'===typeof $loon}
isLoon(){return'undefined'!==typeof $loon}
isShadowrocket(){return'undefined'!==typeof $rocket}
toObj(str,defaultValue=null){try{return JSON.parse(str)}catch{return defaultValue}}
toStr(obj,defaultValue=null){try{return JSON.stringify(obj)}catch{return defaultValue}}
getjson(key,defaultValue){let json=defaultValue
const val=this.getdata(key)
if(val){try{json=JSON.parse(this.getdata(key))}catch{}}
return json}
setjson(val,key){try{return this.setdata(JSON.stringify(val),key)}catch{return false}}
getScript(url){return new Promise((resolve)=>{this.get({url},(err,resp,body)=>resolve(body))})}
runScript(script,runOpts){return new Promise((resolve)=>{let httpapi=this.getdata('@chavy_boxjs_userCfgs.httpapi')
httpapi=httpapi?httpapi.replace(/\n/g,'').trim():httpapi
let httpapi_timeout=this.getdata('@chavy_boxjs_userCfgs.httpapi_timeout')
httpapi_timeout=httpapi_timeout?httpapi_timeout*1:20
httpapi_timeout=runOpts&&runOpts.timeout?runOpts.timeout:httpapi_timeout
const[key,addr]=httpapi.split('@')
const opts={url:`http://${addr}/v1/scripting/evaluate`,body:{script_text:script,mock_type:'cron',timeout:httpapi_timeout},headers:{'X-Key':key,'Accept':'*/*'}}
this.post(opts,(err,resp,body)=>resolve(body))}).catch((e)=>this.logErr(e))}
loaddata(){if(this.isNode()){this.fs=this.fs?this.fs:require('fs')
this.path=this.path?this.path:require('path')
const curDirDataFilePath=this.path.resolve(this.dataFile)
const rootDirDataFilePath=this.path.resolve(process.cwd(),this.dataFile)
const isCurDirDataFile=this.fs.existsSync(curDirDataFilePath)
const isRootDirDataFile=!isCurDirDataFile&&this.fs.existsSync(rootDirDataFilePath)
if(isCurDirDataFile||isRootDirDataFile){const datPath=isCurDirDataFile?curDirDataFilePath:rootDirDataFilePath
try{return JSON.parse(this.fs.readFileSync(datPath))}catch(e){return{}}}else return{}}else return{}}
writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require('fs')
this.path=this.path?this.path:require('path')
const curDirDataFilePath=this.path.resolve(this.dataFile)
const rootDirDataFilePath=this.path.resolve(process.cwd(),this.dataFile)
const isCurDirDataFile=this.fs.existsSync(curDirDataFilePath)
const isRootDirDataFile=!isCurDirDataFile&&this.fs.existsSync(rootDirDataFilePath)
const jsondata=JSON.stringify(this.data)
if(isCurDirDataFile){this.fs.writeFileSync(curDirDataFilePath,jsondata)}else if(isRootDirDataFile){this.fs.writeFileSync(rootDirDataFilePath,jsondata)}else{this.fs.writeFileSync(curDirDataFilePath,jsondata)}}}
lodash_get(source,path,defaultValue=undefined){const paths=path.replace(/\[(\d+)\]/g,'.$1').split('.')
let result=source
for(const p of paths){result=Object(result)[p]
if(result===undefined){return defaultValue}}
return result}
lodash_set(obj,path,value){if(Object(obj)!==obj)return obj
if(!Array.isArray(path))path=path.toString().match(/[^.[\]]+/g)||[]
path.slice(0,-1).reduce((a,c,i)=>(Object(a[c])===a[c]?a[c]:(a[c]=Math.abs(path[i+1])>>0===+path[i+1]?[]:{})),obj)[path[path.length-1]]=value
return obj}
getdata(key){let val=this.getval(key)
if(/^@/.test(key)){const[,objkey,paths]=/^@(.*?)\.(.*?)$/.exec(key)
const objval=objkey?this.getval(objkey):''
if(objval){try{const objedval=JSON.parse(objval)
val=objedval?this.lodash_get(objedval,paths,''):val}catch(e){val=''}}}
return val}
setdata(val,key){let issuc=false
if(/^@/.test(key)){const[,objkey,paths]=/^@(.*?)\.(.*?)$/.exec(key)
const objdat=this.getval(objkey)
const objval=objkey?(objdat==='null'?null:objdat||'{}'):'{}'
try{const objedval=JSON.parse(objval)
this.lodash_set(objedval,paths,val)
issuc=this.setval(JSON.stringify(objedval),objkey)}catch(e){const objedval={}
this.lodash_set(objedval,paths,val)
issuc=this.setval(JSON.stringify(objedval),objkey)}}else{issuc=this.setval(val,key)}
return issuc}
getval(key){if(this.isSurge()||this.isLoon()){return $persistentStore.read(key)}else if(this.isQuanX()){return $prefs.valueForKey(key)}else if(this.isNode()){this.data=this.loaddata()
return this.data[key]}else{return(this.data&&this.data[key])||null}}
setval(val,key){if(this.isSurge()||this.isLoon()){return $persistentStore.write(val,key)}else if(this.isQuanX()){return $prefs.setValueForKey(val,key)}else if(this.isNode()){this.data=this.loaddata()
this.data[key]=val
this.writedata()
return true}else{return(this.data&&this.data[key])||null}}
initGotEnv(opts){this.got=this.got?this.got:require('got')
this.cktough=this.cktough?this.cktough:require('tough-cookie')
this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar()
if(opts){opts.headers=opts.headers?opts.headers:{}
if(undefined===opts.headers.Cookie&&undefined===opts.cookieJar){opts.cookieJar=this.ckjar}}}
get(opts,callback=()=>{}){if(opts.headers){delete opts.headers['Content-Type']
delete opts.headers['Content-Length']}
if(this.isSurge()||this.isLoon()){if(this.isSurge()&&this.isNeedRewrite){opts.headers=opts.headers||{}
Object.assign(opts.headers,{'X-Surge-Skip-Scripting':false})}
$httpClient.get(opts,(err,resp,body)=>{if(!err&&resp){resp.body=body
resp.statusCode=resp.status}
callback(err,resp,body)})}else if(this.isQuanX()){if(this.isNeedRewrite){opts.opts=opts.opts||{}
Object.assign(opts.opts,{hints:false})}
$task.fetch(opts).then((resp)=>{const{statusCode:status,statusCode,headers,body}=resp
callback(null,{status,statusCode,headers,body},body)},(err)=>callback(err))}else if(this.isNode()){this.initGotEnv(opts)
this.got(opts).on('redirect',(resp,nextOpts)=>{try{if(resp.headers['set-cookie']){const ck=resp.headers['set-cookie'].map(this.cktough.Cookie.parse).toString()
if(ck){this.ckjar.setCookieSync(ck,null)}
nextOpts.cookieJar=this.ckjar}}catch(e){this.logErr(e)}}).then((resp)=>{const{statusCode:status,statusCode,headers,body}=resp
callback(null,{status,statusCode,headers,body},body)},(err)=>{const{message:error,response:resp}=err
callback(error,resp,resp&&resp.body)})}}
post(opts,callback=()=>{}){const method=opts.method?opts.method.toLocaleLowerCase():'post'
if(opts.body&&opts.headers&&!opts.headers['Content-Type']){opts.headers['Content-Type']='application/x-www-form-urlencoded'}
if(opts.headers)delete opts.headers['Content-Length']
if(this.isSurge()||this.isLoon()){if(this.isSurge()&&this.isNeedRewrite){opts.headers=opts.headers||{}
Object.assign(opts.headers,{'X-Surge-Skip-Scripting':false})}
$httpClient[method](opts,(err,resp,body)=>{if(!err&&resp){resp.body=body
resp.statusCode=resp.status}
callback(err,resp,body)})}else if(this.isQuanX()){opts.method=method
if(this.isNeedRewrite){opts.opts=opts.opts||{}
Object.assign(opts.opts,{hints:false})}
$task.fetch(opts).then((resp)=>{const{statusCode:status,statusCode,headers,body}=resp
callback(null,{status,statusCode,headers,body},body)},(err)=>callback(err))}else if(this.isNode()){this.initGotEnv(opts)
const{url,..._opts}=opts
this.got[method](url,_opts).then((resp)=>{const{statusCode:status,statusCode,headers,body}=resp
callback(null,{status,statusCode,headers,body},body)},(err)=>{const{message:error,response:resp}=err
callback(error,resp,resp&&resp.body)})}}
time(fmt,ts=null){const date=ts?new Date(ts):new Date()
let o={'M+':date.getMonth()+1,'d+':date.getDate(),'H+':date.getHours(),'m+':date.getMinutes(),'s+':date.getSeconds(),'q+':Math.floor((date.getMonth()+3)/3),'S':date.getMilliseconds()}
if(/(y+)/.test(fmt))fmt=fmt.replace(RegExp.$1,(date.getFullYear()+'').substr(4-RegExp.$1.length))
for(let k in o)
if(new RegExp('('+k+')').test(fmt))
fmt=fmt.replace(RegExp.$1,RegExp.$1.length==1?o[k]:('00'+o[k]).substr((''+o[k]).length))
return fmt}
msg(title=name,subt='',desc='',opts){const toEnvOpts=(rawopts)=>{if(!rawopts)return rawopts
if(typeof rawopts==='string'){if(this.isLoon())return rawopts
else if(this.isQuanX())return{'open-url':rawopts}
else if(this.isSurge())return{url:rawopts}
else return undefined}else if(typeof rawopts==='object'){if(this.isLoon()){let openUrl=rawopts.openUrl||rawopts.url||rawopts['open-url']
let mediaUrl=rawopts.mediaUrl||rawopts['media-url']
return{openUrl,mediaUrl}}else if(this.isQuanX()){let openUrl=rawopts['open-url']||rawopts.url||rawopts.openUrl
let mediaUrl=rawopts['media-url']||rawopts.mediaUrl
return{'open-url':openUrl,'media-url':mediaUrl}}else if(this.isSurge()){let openUrl=rawopts.url||rawopts.openUrl||rawopts['open-url']
return{url:openUrl}}}else{return undefined}}
if(!this.isMute){if(this.isSurge()||this.isLoon()){$notification.post(title,subt,desc,toEnvOpts(opts))}else if(this.isQuanX()){$notify(title,subt,desc,toEnvOpts(opts))}}
if(!this.isMuteLog){let logs=['','==============📣系统通知📣==============']
logs.push(title)
subt?logs.push(subt):''
desc?logs.push(desc):''
console.log(logs.join('\n'))
this.logs=this.logs.concat(logs)}}
log(...logs){if(logs.length>0){this.logs=[...this.logs,...logs]}
console.log(logs.join(this.logSeparator))}
logErr(err,msg){const isPrintSack=!this.isSurge()&&!this.isQuanX()&&!this.isLoon()
if(!isPrintSack){this.log('',`❗️${this.name}, 错误!`,err)}else{this.log('',`❗️${this.name}, 错误!`,err.stack)}}
wait(time){return new Promise((resolve)=>setTimeout(resolve,time))}
done(val={}){const endTime=new Date().getTime()
const costTime=(endTime-this.startTime)/1000
this.log('',`🔔${this.name}, 结束! 🕛 ${costTime} 秒`)
this.log()
if(this.isSurge()||this.isQuanX()||this.isLoon()){$done(val)}}})(name,opts)}
