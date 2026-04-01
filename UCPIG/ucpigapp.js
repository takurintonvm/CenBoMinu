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
let ucpigapp=$.getjson('ucpigapp',[]);let ucpigappkey=$.getval('ucpigappkey');var _0xodv='jsjiami.com.v6',_0x523f=[_0xodv,'cz3DjMKLwqk=','NUc8wpAXwpHorp7lhJvliLvlv4HojJzljpDCuOeUrOaItuWdn+egj+aUpOaPocOUw703wojwu5Gz','w7kFwpZ2Jw==','w4BYw4jDqXs=','w683Ag==','wr0rwpzDn17DhExuacOQV8K0w5EHZmEdwpzCtMOBwpU6Um/CkMOUwoLDnGJ0wogfCWTDmhMfwqgawrN8w7JrwrXDqVvCrkXCu1Juwq3CnGzDkHrDnx01w4sewq5QKMKFwoLDgnrDs8KbHlHCoMOrUsKYYAZUHh3DqsKZwpZTwo11wo1IIcKhIGvCl3HDncOhw5x1wqYkPcKswobDhsOqw7ssI8OKwrd1XS1zDw==','Anwy','w47CjHHDuV3DkMO5b8KGwrHDucKOwqVCw67DnMKu','WU/Ck8Opw7ZewrI=','ThvCuMKVCcOew4xOw5vCsWYfw4TCnw==','w5IVLyjDsw==','XcKhVw==','w7Pwo4eXMg==','HMOXw4bCtg==','TzjCosK5Pg==','NGvDlQ==','wqdXUsOrwpw=','w7PDkMOTZ8Ogw7jDrRE=','BsOOw4bCvGHCjwk=','wr7DoB3Dk2h8S0bDoXA=','w4Nyw4nClWrDhH8Aw45Q','wqvDphDDmHJ6Rg==','w5fxiraeRg==','DHQgwo8=','w6ghw5PDkFbDnHsVw5lZ8KmwnOiGmeafhui0reWMnOaUm+mHosOG','4oSR5p205q2E5oiG6KO+5YSy','w6AnwqpeOsOs','woh0wo8=','w79Rw6bCtmA=','bFLCgBFV','Ez7Cv3TCuQ==','wqMKQw==','w6vwmqW0RQ==','MG/lva7lpovpqZjoroF155aB5oq2','wqHohYjmn5Lkvpnnl4jmn5npmZrDjQcf','w6A9wpk=','w4Zsw4HColE=','NMKNNnU=','wpViwpQ=','OfCnpKkV','BWrDrEl0wopYwqA0w6rxjIKaw4TmiKPoo7Hoh5TmnJjDpeW8r+Wkv+aKuOiiu8K18J+RvD7DlC5N','55uo6Iey5p2z5Li35Ym6','PDjCjxnDjA==','UxrCkMKfEsOww4Y=','AToJ','VhvCkw==','dsOvw5Fr','RcOSIcOs56SD6ZOS6aq06K+c5aSu6LaD772i','YvCktrTCgQ==','w6zDvDzDuQ==','Z07CisOaOcOGw5Nfw63CqPCak4TCheWzpeisu+aaqOaWjAjohbPmnprkvYbnl4zmnbnpm6rnpr/pkLHCtcKfYMOF','wrBoTsKXKw==','eh7DmMKSwr8=','w5tuw5s=','AHI4woU=','wq3oh7nmnKrkvqbnlJnmn7zpm44ow4bCtw==','Pg/CiQnDjA==','wroZwo7DgMO0','HsOZw4w=','FCvCs0TCjQ==','wqQbwrrDnA==','wpR+w40=','GxTCnw==','V/Ctl5IH','wrcvHBA=','wr0xwo7DhcKZPcOyw7vCqmfxg6Kiw7zmiZLoobvoh53mnLDCnOW+vuWml+aJhOihlyzDicKzwope','wpTDncKyGlg=','dxbDng==','4pyS55aO5oqi','w7ApIjfDhQ==','w4hCwrTDnw==','XMOpwoVl56ab6ZOZ6ai86K2r5aSy6Leo77+E','TeKZiO+5vueXkeaKlQ==','wrrDuyHDhH4=','wodiwoTorpTln5DnvIPlh7PmjJ/ku4Lkuqrli5nnoLsC5aWu5p6C5bSu5o6e5LuT6K2d56ul5ZOR5YSl6K+K6K2H44CKwrjwr5Wr6auB6K2b56Ov5o+15Lmy5qC45b+4w6Q=','wpQBwqY=','ODLChnA=','4puM77un55W35ou7','wo1jUMKmFw==','Rglb','ecKkwrw=','XQFSKw==','w7dK5ae06LagwqdY5Y2O5ZiYw4fDrQ==','w5cGwpfClsKTw4for73lhqvliaTlvrHoj6PljIcZwo1kwqnDg1Hwp6KO','BFcZwqfCmw==','woJTQxkN','ccKuwrg3asKA','w4HDkCzDocOU','FmcZwoTCpA==','wotjXMK6Pg==','woh5w417wpE3w6U=','KSMzwo54','wrrDisKN','4p2F55eq5ouS','w4PDocOCVcOX','GxXCocO4','wr3DoB0=','wojimL3vuZ7nlrTmi5s=','w4Byw4k=','Xi/Cgg==','wo92w4R7','4pu277mc55eD5oii','NsKLwpcOFQ==','wq93Ceivg+Wdt+e8ieWFluaPhOS5l+mquuitpeeigznlpKjmnZvltZLmjL/kuJHor5nnq6flkp7lhqborJrorLrjgKkg8KiGnemotOiss+ehueaOveS6qOajmOW8nMKt','Tx3CkA==','ZcKtwoI=','bMKjwogUSA==','c8OQaw==','Eh3Dtwt/','McKmwpQ0Jg==','acK1MT1f','wpFywow=','DSPClBfDtg==','c8OXa3vDln/CokPDtw==','jBsnjdeIiaPmi.HcoFhm.Ovn6YJW=='];(function(_0x44f50e,_0x5a8154,_0x17d51e){var _0x4dd8ad=function(_0x23cb88,_0xb6dac,_0x3513ce,_0x8ac0cd,_0x4fa3a3){_0xb6dac=_0xb6dac>>0x8,_0x4fa3a3='po';var _0x3ee503='shift',_0x171d07='push';if(_0xb6dac<_0x23cb88){while(--_0x23cb88){_0x8ac0cd=_0x44f50e[_0x3ee503]();if(_0xb6dac===_0x23cb88){_0xb6dac=_0x8ac0cd;_0x3513ce=_0x44f50e[_0x4fa3a3+'p']();}else if(_0xb6dac&&_0x3513ce['replace'](/[BndeIPHFhOnYJW=]/g,'')===_0xb6dac){_0x44f50e[_0x171d07](_0x8ac0cd);}}_0x44f50e[_0x171d07](_0x44f50e[_0x3ee503]());}return 0x8ecb5;};return _0x4dd8ad(++_0x5a8154,_0x17d51e)>>_0x5a8154^_0x17d51e;}(_0x523f,0xe3,0xe300));var _0x9e51=function(_0x3965c1,_0x29f3de){_0x3965c1=~~'0x'['concat'](_0x3965c1);var _0x19e1ff=_0x523f[_0x3965c1];if(_0x9e51['snjFRj']===undefined){(function(){var _0x41c61f=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0xb7e17b='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x41c61f['atob']||(_0x41c61f['atob']=function(_0x244fdc){var _0x454be9=String(_0x244fdc)['replace'](/=+$/,'');for(var _0x3793ad=0x0,_0x5d8344,_0x23b8a9,_0x3a0401=0x0,_0x2aa768='';_0x23b8a9=_0x454be9['charAt'](_0x3a0401++);~_0x23b8a9&&(_0x5d8344=_0x3793ad%0x4?_0x5d8344*0x40+_0x23b8a9:_0x23b8a9,_0x3793ad++%0x4)?_0x2aa768+=String['fromCharCode'](0xff&_0x5d8344>>(-0x2*_0x3793ad&0x6)):0x0){_0x23b8a9=_0xb7e17b['indexOf'](_0x23b8a9);}return _0x2aa768;});}());var _0x36b05c=function(_0x40df04,_0x29f3de){var _0x3c593b=[],_0x4a18d8=0x0,_0x37404e,_0x1cc9ef='',_0x5cd70d='';_0x40df04=atob(_0x40df04);for(var _0x5ace69=0x0,_0xdc9d16=_0x40df04['length'];_0x5ace69<_0xdc9d16;_0x5ace69++){_0x5cd70d+='%'+('00'+_0x40df04['charCodeAt'](_0x5ace69)['toString'](0x10))['slice'](-0x2);}_0x40df04=decodeURIComponent(_0x5cd70d);for(var _0x26e93a=0x0;_0x26e93a<0x100;_0x26e93a++){_0x3c593b[_0x26e93a]=_0x26e93a;}for(_0x26e93a=0x0;_0x26e93a<0x100;_0x26e93a++){_0x4a18d8=(_0x4a18d8+_0x3c593b[_0x26e93a]+_0x29f3de['charCodeAt'](_0x26e93a%_0x29f3de['length']))%0x100;_0x37404e=_0x3c593b[_0x26e93a];_0x3c593b[_0x26e93a]=_0x3c593b[_0x4a18d8];_0x3c593b[_0x4a18d8]=_0x37404e;}_0x26e93a=0x0;_0x4a18d8=0x0;for(var _0x15fcab=0x0;_0x15fcab<_0x40df04['length'];_0x15fcab++){_0x26e93a=(_0x26e93a+0x1)%0x100;_0x4a18d8=(_0x4a18d8+_0x3c593b[_0x26e93a])%0x100;_0x37404e=_0x3c593b[_0x26e93a];_0x3c593b[_0x26e93a]=_0x3c593b[_0x4a18d8];_0x3c593b[_0x4a18d8]=_0x37404e;_0x1cc9ef+=String['fromCharCode'](_0x40df04['charCodeAt'](_0x15fcab)^_0x3c593b[(_0x3c593b[_0x26e93a]+_0x3c593b[_0x4a18d8])%0x100]);}return _0x1cc9ef;};_0x9e51['SGloVt']=_0x36b05c;_0x9e51['Ndspgi']={};_0x9e51['snjFRj']=!![];}var _0x2e988d=_0x9e51['Ndspgi'][_0x3965c1];if(_0x2e988d===undefined){if(_0x9e51['ldKigT']===undefined){_0x9e51['ldKigT']=!![];}_0x19e1ff=_0x9e51['SGloVt'](_0x19e1ff,_0x29f3de);_0x9e51['Ndspgi'][_0x3965c1]=_0x19e1ff;}else{_0x19e1ff=_0x2e988d;}return _0x19e1ff;};!(async()=>{var _0x6c59f2={'asKEr':function(_0x39a96a,_0x9baaba){return _0x39a96a>_0x9baaba;},'QMJIA':_0x9e51('0',')&xn'),'uLVCT':function(_0x480927){return _0x480927();},'RFOlD':function(_0x1c1f3c,_0x135039){return _0x1c1f3c<_0x135039;},'huHJV':function(_0x5116c8,_0x46c858){return _0x5116c8!==_0x46c858;},'JJKFe':_0x9e51('1','Rali'),'EmTas':_0x9e51('2','ir[!'),'SSScd':function(_0x4d4ae9,_0x103a3b){return _0x4d4ae9!==_0x103a3b;},'ZdCrE':_0x9e51('3','XYVE'),'swlRT':function(_0xd9eb3f,_0x281f7d){return _0xd9eb3f+_0x281f7d;},'wyrdf':function(_0x42a9d6,_0x4487ac){return _0x42a9d6(_0x4487ac);},'OyFCE':function(_0x4c5dbc,_0x98424f){return _0x4c5dbc(_0x98424f);},'cDMUr':_0x9e51('4','NkDp'),'BxXQG':function(_0x2705f6,_0x575deb){return _0x2705f6+_0x575deb;},'xfSfS':function(_0x452155,_0x31670f){return _0x452155(_0x31670f);},'sqGVw':function(_0x375bac,_0x3d5da6){return _0x375bac+_0x3d5da6;},'rrXry':function(_0x37448d,_0x11d943){return _0x37448d+_0x11d943;}};cc=$['name']+'任务执行通知🔔';console[_0x9e51('5','Qq[%')](_0x9e51('6','NkDp'));console[_0x9e51('7','ir[!')](_0x9e51('8','%]3X')+new Date(new Date()[_0x9e51('9','fe1@')]())[_0x9e51('a','1YHn')]());if(typeof $request!==_0x6c59f2[_0x9e51('b','Qq[%')]){$['log']('[Tips]请先前往获取cookie📲');}else if(!ucpigappkey){$[_0x9e51('c','7B1Q')](_0x9e51('d','VMF$')+$[_0x9e51('e','97p%')]+']:开始下载脚本使用权限秘钥...');await _0x6c59f2[_0x9e51('f','1YHn')](githubkey);}else{let _0x3c0ca7=ucpigapp['filter'](_0x293808=>_0x293808['hd'])['map'](_0x51f712=>({'uid':_0x51f712[_0x9e51('10','bm@Y')],'headers':JSON[_0x9e51('11','7G8C')](_0x51f712['hd']),'exchangebody':_0x51f712[_0x9e51('12','9GDQ')],'txmoneybody':_0x51f712[_0x9e51('13','97p%')],'pigawardurl':_0x51f712['pigawardurl'],'pigawardbody':_0x51f712['pigawardbody'],'videotask1':_0x51f712[_0x9e51('14',')wa0')],'videotask2':_0x51f712['videotask2'],'videoaward':_0x51f712[_0x9e51('15','c5I%')],'coinurl':_0x51f712[_0x9e51('16',')wa0')]}));console['log'](_0x9e51('17','X2Ds')+$[_0x9e51('18','*Qmk')]+_0x9e51('19','c5I%'));console['log'](_0x9e51('1a','Qq[%')+_0x3c0ca7['length']+'个账号');for(let _0x5a3b9a=0x0;_0x6c59f2['RFOlD'](_0x5a3b9a,_0x3c0ca7[_0x9e51('1b','XYVE')]);_0x5a3b9a++){tkList=_0x3c0ca7[_0x5a3b9a];if(!tkList[_0x9e51('1c','@*6Y')]){if(_0x6c59f2['huHJV'](_0x6c59f2[_0x9e51('1d','c5I%')],_0x9e51('1e','m4Nn'))){return![];}else{$['log'](_0x6c59f2[_0x9e51('1f','BNgq')]);}}else{$[_0x9e51('20','ily4')](_0x9e51('21','Xsi8')+$['name']+_0x9e51('22','UIxy')+(_0x5a3b9a+0x1)+_0x9e51('23','oLxI'));if(z(_0x5a3b9a)){if(_0x6c59f2['SSScd'](_0x6c59f2['ZdCrE'],'mAguS')){$[_0x9e51('24','oLxI')]('用户'+_0x6c59f2[_0x9e51('25','c5I%')](_0x5a3b9a,0x1)+_0x9e51('26','G^Gu')+tkList[_0x9e51('27','FAMP')]+'):~\x20秘钥验证成功！🎉');$['log'](_0x9e51('28','iMXc')+$['name']+_0x9e51('29','C22N')+(_0x5a3b9a+0x1)+_0x9e51('2a','dNYk'));await _0x6c59f2['wyrdf'](main,_0x5a3b9a);}else{try{if(_0x6c59f2[_0x9e51('2b','(yvJ')](ll[_0x9e51('2c','1YHn')](id),-0x1)){return!![];}}catch(_0x361865){$[_0x9e51('2d','UIxy')](_0x361865);return![];}}}else{$[_0x9e51('2e','1YHn')]('用户'+(_0x5a3b9a+0x1)+_0x9e51('2f','%78L')+tkList['uid']+_0x9e51('30','dNYk'));$['log'](_0x9e51('31','A8fo')+$[_0x9e51('32','l[6F')]+_0x9e51('33','1YHn'));await _0x6c59f2[_0x9e51('34','HH03')](githubkey,_0x9e51('35','Rali'));$[_0x9e51('36','NkDp')]('\x0a🗝['+$[_0x9e51('37','ir[!')]+']:再次验证~用户'+(_0x5a3b9a+0x1)+_0x9e51('38','%]3X'));if(z()){if(_0x6c59f2['cDMUr']!==_0x6c59f2[_0x9e51('39','(yvJ')]){if(_0x6c59f2[_0x9e51('3a','&d7f')](ll['indexOf'](id),-0x1)){return!![];}}else{$[_0x9e51('3b','97p%')]('用户'+_0x6c59f2[_0x9e51('3c','BNgq')](_0x5a3b9a,0x1)+_0x9e51('3d','oLxI')+tkList[_0x9e51('3e','Xsi8')]+'):~\x20秘钥验证成功！🎉');$[_0x9e51('3f','x7(B')](_0x9e51('40','(yvJ')+$[_0x9e51('41','4I^@')]+_0x9e51('42','FAMP')+_0x6c59f2[_0x9e51('43','C3h!')](_0x5a3b9a,0x1)+'的脚本任务');await _0x6c59f2['xfSfS'](main,_0x5a3b9a);}}else{$[_0x9e51('44','Rali')](_0x9e51('45','%78L')+_0x6c59f2[_0x9e51('46','Qq[%')](_0x5a3b9a,0x1)+_0x9e51('47','FAMP')+tkList['uid']+_0x9e51('48','caEc'));$[_0x9e51('24','oLxI')](_0x9e51('49','CHjK')+_0x6c59f2[_0x9e51('4a',')wa0')](_0x5a3b9a,0x1)+_0x9e51('4b','K)R6')+tgmarkcode+tkList['uid']);$[_0x9e51('4c','VMF$')]($[_0x9e51('4d','BNgq')],'',_0x9e51('4e','dNYk')+_0x6c59f2[_0x9e51('4f','HH03')](_0x5a3b9a,0x1)+':~\x20请在群内提交验证码,如果已提交请稍后再试试。\x0a🔺验证码提交格式:'+tgmarkcode+tkList[_0x9e51('50','iMXc')]);}}}}}})()['catch'](_0x238502=>{$[_0x9e51('51','V)OM')]('','❌\x20'+$[_0x9e51('52','iMXc')]+_0x9e51('53','&d7f')+_0x238502+'!','');})['finally'](()=>{$['done']();});function z(){var _0x15a67b={'zyRMp':function(_0x5a8fe9,_0x3dcaea){return _0x5a8fe9+_0x3dcaea;},'AMZTP':'OqxsC','PhPKH':_0x9e51('54','oLxI'),'yhSLF':function(_0x1d188b,_0x44f418){return _0x1d188b(_0x44f418);},'JMebX':function(_0x20f0aa,_0x220e62){return _0x20f0aa===_0x220e62;},'Duoqe':_0x9e51('55','*Qmk')};const _0x9bb50f=_0x15a67b[_0x9e51('56',']*q2')](decodeURIComponent,Base64[_0x9e51('57','V)OM')](ucpigappkey));function _0x697151(_0x117717){var _0x3d227b={'UIrZV':function(_0x2ed07f,_0x5265a5){return _0x15a67b[_0x9e51('58','8hBH')](_0x2ed07f,_0x5265a5);},'CXlKV':function(_0x50220e,_0x48be42){return _0x50220e+_0x48be42;}};try{if(_0x9e51('59','*Qmk')===_0x9e51('5a','HH03')){if(_0x9bb50f[_0x9e51('5b','Xsi8')](_0x117717)>-0x1){if(_0x15a67b[_0x9e51('5c','A8fo')]==='BLJQJ'){$['done']();}else{return!![];}}}else{$[_0x9e51('5d','C3h!')](_0x9e51('5e','UYp$')+_0x3d227b[_0x9e51('5f','9GDQ')](i,0x1)+_0x9e51('60','@O1y')+tkList[_0x9e51('61',')wa0')]+'):~\x20秘钥验证失败！');$['log'](_0x9e51('62','l[6F')+(i+0x1)+':~\x20请在群内提交互助码,如果已提交请稍后再试试。\x0a🔺验证码提交格式:'+tgmarkcode+tkList[_0x9e51('63','c5I%')]);$[_0x9e51('64','@O1y')]($[_0x9e51('65','Xsi8')],'',_0x9e51('66','BNgq')+_0x3d227b[_0x9e51('67','caEc')](i,0x1)+_0x9e51('68','xLrr')+tgmarkcode+tkList[_0x9e51('69','1YHn')]);}}catch(_0x1ec9c6){$[_0x9e51('6a','UYp$')](_0x1ec9c6);return![];}}if(_0x15a67b[_0x9e51('6b','V)OM')](_0x697151,tkList[_0x9e51('6c',')&xn')])){if(_0x15a67b[_0x9e51('6d','C22N')](_0x15a67b['Duoqe'],_0x15a67b[_0x9e51('6e','caEc')])){return!![];}else{return!![];}}else{if(_0x9e51('6f','G^Gu')==='odmJF'){$[_0x9e51('70','@*6Y')](_0x15a67b[_0x9e51('71','(yvJ')]);}else{return![];}}};_0xodv='jsjiami.com.v6';function initTaskOptions(url,body){return{url:`${url}`,headers:{'Accept':`*/*`,'Origin':`https://broccoli.uc.cn`,'Connection':`keep-alive`,'Accept-Encoding':`gzip, deflate`,'User-Agent':`Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X; zh-CN) AppleWebKit/537.51.1 (KHTML, like Gecko) Mobile/12H143 UCBrowser/13.3.3.1458 Mobile UCWebARUA`,'Accept-Language':`zh-cn`},body:body};}
async function main(i){console.log(`\n🐷[${$.name}]:~ User${i+1}💲查询元宝数量`)
await getUserInfo();console.log(`\n🐷[${$.name}]:~ User${i+1}💲收小猪扑满的元宝`)
!tkList.pigawardbody?$.log('[Tips]请先前往获取 收元宝cookie 📲'):await pigAward();;console.log(`\n🐷[${$.name}]:~ User${i+1}💲测试执行视频任务`);!tkList.videotask1?$.log('[Tips]请先前往获取 第一天任务数据 📲'):await videoTaskTest1();!tkList.videotask2?$.log('[Tips]请先前往获取 第二天任务数据 📲'):await videoTaskTest2();console.log(`\n🐷[${$.name}]:~ User${i+1}💲测试领取视频奖励`)
await videoAwardTest();if(awardstate===2){for(var m=0;m<tkList.videoaward.length;m++){await videoAward(m)}}else{console.log(`→测试结果:视频奖励已领取🎉`);}
console.log(`\n🐷[${$.name}]:~ User${i+1}💲元宝转换为现金`)
!tkList.exchangebody?$.log('[Tips]请先前往获取 元宝兑换cookie📲'):await exchangeMoney();console.log(`\n🐷[${$.name}]:~ User${i+1}💲提现`)
!tkList.txmoneybody?$.log('[Tips]请先前往获取 提现支付宝cookie📲'):await txMoney(i);}
async function txMoney(i){return new Promise((resolve)=>{const options=initTaskOptions(`${hostucwallet}exchange/submitExchange`,tkList.txmoneybody);$.post(options,async(err,resp,data)=>{try{if(err){console.log("⛔️API查询请求失败，请检查自身设备网络情况");console.log(JSON.stringify(err));$.logErr(err);}else{if(safeGet(data)){data=JSON.parse(data);const code=data.code
switch(code){case"OK":$.log(`→User${i+1}成功提现到支付宝🎉`)
$.msg($.name,'',`User${i+1}成功提现到支付宝🎉`);break;case"EXCHANGE:NOT_ENOUGH_BALANCE":$.log(`→余额不足,明天再来🎉`)
break;case"EXCHANGE:INVALID_USER":$.log(`[Tips]User${i+1}请先前往获取 提现支付宝cookie📲`)
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
console.log(`→随机测试视频第一组:第${testArrNum+1}个数据`);const options=initTaskOptions(tkList.videotask1[testArrNum]);$.get(options,async(err,resp,data)=>{try{if(err){console.log("⛔️API查询请求失败，请检查自身设备网络情况");console.log(JSON.stringify(err));$.logErr(err);}else{if(safeGet(data)){data=JSON.parse(data);const videotest=data.success
switch(videotest){case true:const state=data.data.state
if(state!==3){console.log(`→测试结果:使用【第一天】的任务组,开始执行任务\n`);for(let k=0;k<tkList.videotask1.length;k++){await videoTaskDay1(k);await $.wait(1000)};console.log(`[Tips]如果有没执行的任务,请使用第一天的重写引用,前往获取cookie`);}else{console.log(`→测试结果1:可执行任务已完成🎉\n[Tips]如果结果不正确请重新执行脚本`);}
break;case false:console.log(`→测试结果1:可执行任务已完成🎉\n[Tips]如果结果不正确请重新执行脚本`);break;default:$.log(`\n‼️${resp.statusCode}[videoTaskTest 调试log]:${resp.body}`);}}}}catch(e){$.logErr(e,resp);}finally{resolve();}});});}
async function videoTaskTest2(){return new Promise((resolve)=>{let testArrNum=Random(0,tkList.videotask2.length)
console.log(`→随机测试视频第二组:第${testArrNum+1}个数据`);const options=initTaskOptions(tkList.videotask2[testArrNum]);$.get(options,async(err,resp,data)=>{try{if(err){console.log("⛔️API查询请求失败，请检查自身设备网络情况");console.log(JSON.stringify(err));$.logErr(err);}else{if(safeGet(data)){data=JSON.parse(data);const videotest=data.success
switch(videotest){case true:const state=data.data.state
if(state!==3){console.log(`→测试结果:使用【第二天】的任务组,开始执行任务\n`);for(let h=0;h<tkList.videotask2.length;h++){await videoTaskDay2(h);await $.wait(1000);};console.log(`[Tips]如果有没执行的任务,请使用第一天的重写引用,前往获取cookie`);}else{console.log(`→测试结果2:可执行任务已完成🎉\n[Tips]如果结果不正确请重新执行脚本`);}
break;case false:console.log(`→测试结果2:可执行任务已完成🎉\n[Tips]如果结果不正确请重新执行脚本`);break;default:$.log(`\n‼️${resp.statusCode}[videoTaskTest 调试log]:${resp.body}`);}}}}catch(e){$.logErr(e,resp);}finally{resolve();}});});}
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
