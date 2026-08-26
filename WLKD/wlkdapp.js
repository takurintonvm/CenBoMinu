const $ = new Env("WLKDAPP");
const host = "https://wlkdapi.zhongchuanjukan.com";
const tgmarkcode = "/submitactivitycodes wlkdapp@"
const githubkeyUrl = 'https://ghproxy.com/https://raw.githubusercontent.com/CenBoMin/TGBOTCode/main/wlkdapp.js'
let wlkdapp = $.isNode() ? require('./v2pcookie') : $.getjson('wlkdapp', []);
console.log(typeof wlkdapp);
let wlkdappkey = $.getval('wlkdappkey');
const notify = $.isNode() ? require('./sendNotify') : '';
$.tz = "";
$.hour = (new Date()).getHours();
$.minute = (new Date()).getMinutes();
//============================
//+++++++++ 执行函数 ++++++++++
//============================
var _0xodb='jsjiami.com.v6',_0x597c=[_0xodb,'dMOPOsOHY1LDojI3wrjDg2I=','w6bClsOUfAA=','w5PCisKOwohW','wrXDnWXDoE3ChsKIK8KHQynCiQ==','QMKOcMO7Aw==','bE41S8Ob','w6rCv8KLwrpj','C8OAwq7ClH0=','GiYow4zChg==','PsOxw6DDjh8=','BRXCihYnL8KHwrdXwos=','W8KuQ8KxYg==','UsKXwpvCvhEEw6lKbcO3wqtV','ESJAeE9kw4Atw7M+','HsOUwq3CiXPDpw==','NXTCjxTDgsKDwoJ0wp7DmA==','FMKWwovDlzNWw7dfw5LDjQ==','QMK6Y13Duw==','w7XCl8KJwo9B','aRg8w6jCpw==','WsO6A8OAZA==','asK0UVzDtQ==','FzTDgMOzwrU=','w7FXwo8Cw4I=','wrxuWj/Drg==','CcK7A8K3wo0=','bsOBw41eaQ==','GQNhw6sNDA==','AMKBDMKGwr0X','c2IlWsOXwp4=','a8K3dWLDrAQ=','wo/CpkIMKAE=','NBbDr8OKwoUG','Bz5HMmt+','w5MCwq8xwoM=','wpYaw6zCtwfCsXs6dTE=','w4TCtsOyUHU=','w7TCoMOSTmdOwqnCnsKqw5EIw4w=','VMKyY8KTZA==','ccOVNMOYY1XDpyU1wqM=','w7fCnMKRwpBf','ScKnw6tkwrPDsRRTBSQ=','ZCTDigrDv8OUw7Jcw6HDoMO9w54=','AMK5B8KwwpU=','Vm41R8OH','WsK1YX/DuA==','LBFwKm4=','wrDDvhtVwrY=','Jw0Ow6pU','w5zCosONYnU=','GMKXdcOrVU7Dqy8Gw63DpGJQw7fCusKtG2o5UlXCnMOawoVLwp/CuGgafsOtEW3Do1zDrsOgwptSf8OUwqNGw7HDjivDoMOWNMO3w6rCmcKGTno4TkAUTMKQwoHCqMKnXnUWwpLDuEPDmMKcW0pqf3HDqkLDoXTCqcKXMsOtF3wgw6k6Qi9xHzjCtAwWw4/CrWlswoHCqMO2YDTCjsKgw7PDg8K/FMOVEsO7','w73ClMOcdlI=','wrjDpztIwqs=','44KW5oy056aZ44GI6KyJ5YWw5Ymw5b+K6I+r5Y+Ww7bClXXCrsK4w6XCqjXCjcOlRvGDkb8=','wrbCpkgZDw==','U8KIwqTCmDY=','wpg0w6TCjy4=','w4LCvsOKew==','5Lqf5Yuv5ouT6KGJ6YCP55yN8Yy0jA==','ZMKwcw==','wpM5w4vCkg0=','G8KRwo0=','UcKOw6/CjcKYOMOsJSMawoYLbBDCvhhp','wpwJIEF6','w4DCmMKIwrR9w6HCtg==','w5/CvMOCbR8=','woErJF5k','wq9EwpzDrcOr','woR2fA7DksOKwrk7eA==','wpMGHcKVw7k=','woUZFcKCw7s=','44Cx5o6t56Wx44K06KyG5YSt5YuL5b+N6I+A5Y+Nw6LDvF7Dm8KxXfCysZE=','wrx8bcKEfHo2P2oH','wpzCm3UNKw==','VMOOI8ONcQ==','woAJDlpUEMKYV8KQBcONwpk=','w67Cq8ONaMK8','w4HCj8KTwo1Xw6TCssObw6/Dp8KgwqQ=','w6HCjsKKwodF','wohFwonDtsOMwo/CpMKrwrdIZ8O4','woHCrH4sMw==','WsOaDcOEQw==','fnUzZMOgwoTDvsKdEEzCsMOn','T8Kgw49lwp8=','wqssDsKhw6k=','wpxQTDvDtQ==','wooUBg==','wo/jg6bvuphO','worColY6','RT3lvZzlp4LkuqjovpHohoXmn4PkvKznlIvmnpfpm5Lnpo/pk7rDgh7Djw==','wpwswr3DmQs=','woASDUNyCg==','w6vChcOT','w6fCu8OZ','wp5WwpTDqMOq','w6kXwp0Xwpd1wpQxfMKUw73CvcKk','cjfDlxTDmQ==','wpbCplo7HQEtWSfCijjCl2k=','dD/DgQLDk8O9w6Faw47DpsOqw4/Dg8KD','wrnDqFrCvBk=','PcKjcMKHFw==','CCHDkw==','FeODnO+6l8O2','QsOqw6VY','C8Kdw6hLwq0iwofDtsOne/GGgI3ohLzmnoTot4DljIHmlJbphIRR','wp13fw==','wqcQIMK/w68=','fsKFw4NCwoE=','ESfDkA==','wr/DgG0=','Fwhew7o4','d0kNQ8Ou','TjMaw6/CvA==','AyU/','wogaDFI=','EMO45byC5aS/6au+6K+MwqrnlYnmi7w=','wrolw4DCnT4=','w6nCtMOw','wqPCjcOMIQ==','w5giZkvnpazpkIbpqZvorp/miIzli5LvvZfwtZyV','wrDjgbzvu4HDog==','UR0MwqM=','w5vDnsOdecKtQU4+OW3xirGUMuaKqOiihuiGmuafpVDlv6nlpYvmiIHoorzCrfCws67CsxHCrRg=','w4jCksKOwrh2','55mU6IWH5p6T5LqA5YqJ','Dzge','wq7CrcOnYw==','w7DCssOz','w6zwoaa8bA==','w5QgwqPDnA==','RT0iKcOwwpXDrMKbNk7xipCweOWxguisueabhOaVkcO36ISk5pyQ5LyB55SS5pyA6ZuD56aQ6ZOSw7nDt2w9','w7HDpeWEquasv+mrguivo8OX55aK5omf','wr8yw40jSg==','DCUuw4hy','w6tvwqs=','ZcKoccOBLw==','FzUlw7w=','bW44','w49BHxfnp4/pk53pqbXor6Tmi4Pli7XvvqjxgI+d','buOBq++4qRs=','w5o6wrJKw4F+w43CkCLCr/GFs4xy5ou96KOf6IaX5p2hwrLlvIXlpYHmiaXoo5MGwqDChzXCug==','Ux3DhUR9','R8KIWUjDlw==','wrZOwrDDmcOl','OnPCiQ==','4p+J55ez5oqg','wq3CksOTLw==','asKIw7w=','wrvDqMODA+envOmSg+mphOisreWnmOi2m++9rQ==','d2guUcOB','JcKfwrjorZrln5znv7PlhI7mjpzku6nkuqDlibrnoZ4D5aa55pya5beD5o6D5Lug6Ky656mL5ZO65Ye+6K+s6K6z44Gvw5Hwvray6amz6K2I56CU5o2G5Lq15qGV5byTcQ==','I8OOw7I=','HxV/','4pq477iI55W05oi+','CyHDhl13','XAPDi+iuk+WdjOe/pOWFpuaMguS6sumps+isuOejl1PlpZLmnrzltqvmjL3ku5HorIjnq43lk4Plh4LorarorqnjgqnCqvCzlabpqLborZjno6jmj6jkubDmo7LlvLjDrw==','bsKte33DrhhFworCmBRGwq0=','WMKKwpM=','44KL5o6i56eG44Gi6Kyh5YWP5Yqt5b+d6I6i5YyxwqnCrMKowqo4SQvCgnnCncKP8LySkA==','BzdSI0I=','wojCrFw=','OH3CgwM=','w47CtOWln+i0n8OCVuWMu+WbtMKgw5A=','FA92w5kVElU=','bMKwenU=','WUUfTcOmwqrDmMKnGmnCn8OOGhHCo2DCsMObbWgrbBTDixEtwrbCuyF5w60Iw7PCtWHDm8Kyw6pCworCqWbDjMKow7IdwpUbwo3Cs3fDv8Kaw7smCcKHVsOHbsKEfsOVw5cr','w6xoOMKKDWliJh4PKQ==','wqbDuBpLwpA=','YcONOcODVA==','w5nCq8OBJitMw4rDjQzCgQ==','a8K1UkDDiw==','TRglw4LChQ0=','wpHDpAJTwpc=','T8Ojw6lPQ8KCHQbDtVo=','woYlw7IWeA==','w4HCu8OxUz8=','wqAUw6fCjCI=','wpUkw7MxXA==','wrALw4HCjzA=','wpPCp23CrMOA','Ii8hw5TCpg==','FsOiw7TDrAHDjw==','BybDlXdUwpw=','CMKMFMKnwogR','woUTAEVWDA==','w6DCocOxSMKnwqk=','w4zCmMKFwrNgw74=','wpJweRnDtcOX','eDzDoQ/DjQ==','CMOIwpbCg2M=','wqXCrk3Cj8OA','w7TCgcOTNcKfW1g=','ZcOVOMOCcQ==','ZMK6enfDmRg=','wrPDsH3Cohg=','w4LCmcOmdlo=','woE6DcKEw7nDsA==','Cjkdw4HCr2xH','FMKWwovDlzFN','P3LCigPDucKjwoA=','w7nCt8OEcFBU','DThCJVJFw4U=','YcKiesOKOXY=','wrkzw5seUMKDwoM=','w5kpwq/DizjCvA==','wrvDoQpdwo0=','woBgwq/DsMOq','PxRow6gh','TMK9w6V7wrPDthFEBz9OwqU=','Hx4Cw7Zx','wrLCuXTCtsOG','UMKMw7TDqsKZ','EgHDpsOJwqk=','w6DClsOMNMK9UFw4H2/CssKD','woLCsVQyHxs4Rw3ClijCmg==','TWEYYMOP','wrlmY8KbfH0zKGgcfCI=','wrHCpX82MA==','JMOTw5cuwos=','ecKTw7fDgMK3P8OqPg5dwrc6','Ch7DpsOtwp8=','WMK7w4tTwoU=','w7XCj8ONY3U=','w5oAwogBwq4=','EsONw4ERwrk=','SsO5w6dQQ8KFGBHDt0FqOw==','w6IJwp/DgwM=','XMOqw5k=','wqQswow=','woYwEw==','w5zimb7vuK7nl47mioM=','ZQ3CtuitruWfmee/kOWGmOaNmeS6lOS5ieWKueehvHnlpr/mnqDltazmjYDkur/or7bnqLrlkZ7lhZ3orL3orrDjgqXDpPC7tZPpqonoroHno4HmjKXkurXmo5vlvIHCiQ==','f8OOMg==','4piy77ud55aV5oiU','wokNwrnDsjc=','bGLDjuiukeWeqee9iOWFo+aPgeS5u+mooOiukueglmblpKXmnYHlt57mjrPkuKHorJ3nq7LlkbHlhr/orrforLHjgJXDsvGDh5HpqKjorpTnoYPmj4TkupXmoojlvpbCgA==','K8OEwqfCiWk=','bivDtFJ1','HG3CuQ/DmQ==','P8OEw6XDlQw=','IDkjw6nCrg==','wqc5JcKOw4Q=','fsOSMg==','44OA5o6N56aF44Gq6K+f5YaE5Yqo5bys6Iyp5Y6JR8KnWMO0Oi3wv7Kg','wo1fwofDqcOMwojCocK8wrVT','NhvDn8O1wp8=','w6Vmwqcow70=','RsKgw60=','ZsK+eXU=','GMOF5aeF6Le2c0zljJflm5gUwrg=','wpMAw6LCqAfCtn4tdyrDiMOR','ZMKzwr/Cqwo=','KsKTIMKjwqo=','JjAVw5dG','fBEzwoPCgg==','AiRJLWliw4Iww5Q0wqbDmQ==','wp01wqvDois=','ejcvwqrCrQ==','wpPClW/CisOd','A8KRwq3Dnz0=','dsOew7l8ag==','aw8Iw7TCuQ==','fjdspjxkVNiaUrmif.cyoPPmfNh.v6=='];(function(_0x25f6e2,_0x4998f0,_0x1862ca){var _0x373a3d=function(_0x39cc6b,_0x4907ca,_0x2db7da,_0x20ad06,_0x5efd17){_0x4907ca=_0x4907ca>>0x8,_0x5efd17='po';var _0x207f70='shift',_0x2c74e3='push';if(_0x4907ca<_0x39cc6b){while(--_0x39cc6b){_0x20ad06=_0x25f6e2[_0x207f70]();if(_0x4907ca===_0x39cc6b){_0x4907ca=_0x20ad06;_0x2db7da=_0x25f6e2[_0x5efd17+'p']();}else if(_0x4907ca&&_0x2db7da['replace'](/[fdpxkVNUrfyPPfNh=]/g,'')===_0x4907ca){_0x25f6e2[_0x2c74e3](_0x20ad06);}}_0x25f6e2[_0x2c74e3](_0x25f6e2[_0x207f70]());}return 0x98583;};return _0x373a3d(++_0x4998f0,_0x1862ca)>>_0x4998f0^_0x1862ca;}(_0x597c,0xa5,0xa500));var _0x33b4=function(_0x1aa70b,_0x430de7){_0x1aa70b=~~'0x'['concat'](_0x1aa70b);var _0x1849de=_0x597c[_0x1aa70b];if(_0x33b4['PZODuo']===undefined){(function(){var _0x5aa504=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x2bedd8='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x5aa504['atob']||(_0x5aa504['atob']=function(_0x40e9b6){var _0x45ae30=String(_0x40e9b6)['replace'](/=+$/,'');for(var _0x183b9d=0x0,_0x1eaa94,_0x12ea1c,_0x1782c3=0x0,_0x5115e7='';_0x12ea1c=_0x45ae30['charAt'](_0x1782c3++);~_0x12ea1c&&(_0x1eaa94=_0x183b9d%0x4?_0x1eaa94*0x40+_0x12ea1c:_0x12ea1c,_0x183b9d++%0x4)?_0x5115e7+=String['fromCharCode'](0xff&_0x1eaa94>>(-0x2*_0x183b9d&0x6)):0x0){_0x12ea1c=_0x2bedd8['indexOf'](_0x12ea1c);}return _0x5115e7;});}());var _0x24ef19=function(_0x41705e,_0x430de7){var _0x96458e=[],_0x44dc0e=0x0,_0x210b32,_0x53bfcc='',_0x5b78fa='';_0x41705e=atob(_0x41705e);for(var _0x28de2e=0x0,_0x28614b=_0x41705e['length'];_0x28de2e<_0x28614b;_0x28de2e++){_0x5b78fa+='%'+('00'+_0x41705e['charCodeAt'](_0x28de2e)['toString'](0x10))['slice'](-0x2);}_0x41705e=decodeURIComponent(_0x5b78fa);for(var _0xe1b63b=0x0;_0xe1b63b<0x100;_0xe1b63b++){_0x96458e[_0xe1b63b]=_0xe1b63b;}for(_0xe1b63b=0x0;_0xe1b63b<0x100;_0xe1b63b++){_0x44dc0e=(_0x44dc0e+_0x96458e[_0xe1b63b]+_0x430de7['charCodeAt'](_0xe1b63b%_0x430de7['length']))%0x100;_0x210b32=_0x96458e[_0xe1b63b];_0x96458e[_0xe1b63b]=_0x96458e[_0x44dc0e];_0x96458e[_0x44dc0e]=_0x210b32;}_0xe1b63b=0x0;_0x44dc0e=0x0;for(var _0x2096b7=0x0;_0x2096b7<_0x41705e['length'];_0x2096b7++){_0xe1b63b=(_0xe1b63b+0x1)%0x100;_0x44dc0e=(_0x44dc0e+_0x96458e[_0xe1b63b])%0x100;_0x210b32=_0x96458e[_0xe1b63b];_0x96458e[_0xe1b63b]=_0x96458e[_0x44dc0e];_0x96458e[_0x44dc0e]=_0x210b32;_0x53bfcc+=String['fromCharCode'](_0x41705e['charCodeAt'](_0x2096b7)^_0x96458e[(_0x96458e[_0xe1b63b]+_0x96458e[_0x44dc0e])%0x100]);}return _0x53bfcc;};_0x33b4['WTgrnl']=_0x24ef19;_0x33b4['tJAExt']={};_0x33b4['PZODuo']=!![];}var _0x441d84=_0x33b4['tJAExt'][_0x1aa70b];if(_0x441d84===undefined){if(_0x33b4['JNihee']===undefined){_0x33b4['JNihee']=!![];}_0x1849de=_0x33b4['WTgrnl'](_0x1849de,_0x430de7);_0x33b4['tJAExt'][_0x1aa70b]=_0x1849de;}else{_0x1849de=_0x441d84;}return _0x1849de;};var Base64={'keyStr':_0x33b4('0','0Zh5'),'encode':function(_0x13cb38){var _0x360565={'Dltqs':_0x33b4('1','bO#0'),'cjFPf':function(_0x564253,_0x281796){return _0x564253<_0x281796;},'VxMmP':function(_0x5f5bc2,_0x235364){return _0x5f5bc2&_0x235364;},'mdVMq':function(_0x9d5c1d,_0x56a014){return _0x9d5c1d>>_0x56a014;},'UfjIf':function(_0x453c1d,_0x3eba2f){return _0x453c1d&_0x3eba2f;},'EyLJt':function(_0x332550,_0x3f5340){return _0x332550+_0x3f5340;},'AxXpq':function(_0x2ef8a3,_0x30f014){return _0x2ef8a3+_0x30f014;},'ygVTy':function(_0x3cc639,_0x2f44f3){return _0x3cc639<<_0x2f44f3;},'zjDhq':function(_0x1bb857,_0x42a534){return _0x1bb857&_0x42a534;},'cCyJR':function(_0x23ff3c,_0xd1f56d){return _0x23ff3c>>_0xd1f56d;},'VYxXW':function(_0x4e1e0a,_0x4fc376){return _0x4e1e0a(_0x4fc376);},'fFlvV':function(_0xaaaf36,_0x2774ac){return _0xaaaf36(_0x2774ac);}};var _0x1112bc=_0x360565[_0x33b4('2','!zQ!')][_0x33b4('3','7A#b')]('|'),_0x2cacc5=0x0;while(!![]){switch(_0x1112bc[_0x2cacc5++]){case'0':_0x13cb38=Base64[_0x33b4('4','VH8F')](_0x13cb38);continue;case'1':return _0x279c1e;case'2':var _0x147d7d=0x0;continue;case'3':var _0x279c1e='';continue;case'4':var _0x3c52a9,_0x5ae939,_0x20c938,_0x1a79a7,_0x502313,_0x4f5634,_0x52e414;continue;case'5':while(_0x360565[_0x33b4('5','@sBy')](_0x147d7d,_0x13cb38[_0x33b4('6','mXEx')])){var _0x59f8c8='4|8|0|2|6|3|1|7|5'[_0x33b4('7','!zQ!')]('|'),_0x51f537=0x0;while(!![]){switch(_0x59f8c8[_0x51f537++]){case'0':_0x20c938=_0x13cb38[_0x33b4('8','n(EV')](_0x147d7d++);continue;case'1':_0x52e414=_0x360565[_0x33b4('9',']zUK')](_0x20c938,0x3f);continue;case'2':_0x1a79a7=_0x360565[_0x33b4('a','VH8F')](_0x3c52a9,0x2);continue;case'3':_0x4f5634=_0x360565[_0x33b4('b','%sOW')](_0x5ae939,0xf)<<0x2|_0x20c938>>0x6;continue;case'4':_0x3c52a9=_0x13cb38['charCodeAt'](_0x147d7d++);continue;case'5':_0x279c1e=_0x360565[_0x33b4('c',']zUK')](_0x360565[_0x33b4('d','%sOW')](_0x360565[_0x33b4('e','PWSh')](_0x360565[_0x33b4('f','lcVQ')](_0x279c1e,this[_0x33b4('10','^@^W')][_0x33b4('11','MWTW')](_0x1a79a7)),this[_0x33b4('12','o2FI')][_0x33b4('13','$^hB')](_0x502313)),this[_0x33b4('14','%Tje')]['charAt'](_0x4f5634)),this[_0x33b4('15','6I[[')][_0x33b4('16','X^6a')](_0x52e414));continue;case'6':_0x502313=_0x360565['ygVTy'](_0x360565[_0x33b4('17','pKme')](_0x3c52a9,0x3),0x4)|_0x360565['cCyJR'](_0x5ae939,0x4);continue;case'7':if(_0x360565['VYxXW'](isNaN,_0x5ae939)){_0x4f5634=_0x52e414=0x40;}else if(_0x360565['fFlvV'](isNaN,_0x20c938)){_0x52e414=0x40;}continue;case'8':_0x5ae939=_0x13cb38['charCodeAt'](_0x147d7d++);continue;}break;}}continue;}break;}},'decode':function(_0xef4c73){var _0x361307={'USdWJ':'8|2|1|0|5|3|6|4|7','whmhQ':function(_0xf0c876,_0x415fe7){return _0xf0c876<_0x415fe7;},'IAzqL':function(_0x587e77,_0x444ab1){return _0x587e77===_0x444ab1;},'GBqcN':_0x33b4('18','Gpu1'),'Yudgn':function(_0x330cbd,_0x42821f){return _0x330cbd|_0x42821f;},'nWIke':function(_0x296bdb,_0x5255e1){return _0x296bdb<<_0x5255e1;},'wZaKA':function(_0x36817d,_0x2caacf){return _0x36817d>>_0x2caacf;},'Wmxgk':function(_0x541815,_0x7464bf){return _0x541815&_0x7464bf;},'gLUhh':function(_0x3984b6,_0x41521a){return _0x3984b6<<_0x41521a;},'MrpPX':function(_0x56f4e5,_0x11a571){return _0x56f4e5+_0x11a571;},'pTZva':function(_0x3688ac,_0x2fea77){return _0x3688ac!=_0x2fea77;},'dgUPr':'OmlGm','Artrx':'jaBSp','DjWzG':function(_0x457e23,_0x566b3f){return _0x457e23+_0x566b3f;}};var _0xab65fc=_0x361307['USdWJ'][_0x33b4('19','PWSh')]('|'),_0x15286c=0x0;while(!![]){switch(_0xab65fc[_0x15286c++]){case'0':var _0xc3c57f,_0x17f3d7,_0x372afe,_0x2377bf;continue;case'1':var _0x300cff,_0x41e87e,_0x4da48f;continue;case'2':var _0xfb9f88='';continue;case'3':_0xef4c73=_0xef4c73[_0x33b4('1a','B#o*')](/[^A-Za-z0-9\+\/\=]/g,'');continue;case'4':_0xfb9f88=Base64['utf8decode'](_0xfb9f88);continue;case'5':var _0x2298a2=0x0;continue;case'6':while(_0x361307[_0x33b4('1b','7A#b')](_0x2298a2,_0xef4c73[_0x33b4('1c','@sBy')])){if(_0x361307['IAzqL'](_0x33b4('1d','!o*5'),_0x361307[_0x33b4('1e','Q!0^')])){_0xc3c57f=this[_0x33b4('1f','%oK@')][_0x33b4('20','lcVQ')](_0xef4c73[_0x33b4('21','B#%T')](_0x2298a2++));_0x17f3d7=this['keyStr'][_0x33b4('22','q6R(')](_0xef4c73['charAt'](_0x2298a2++));_0x372afe=this[_0x33b4('23','Dxxt')][_0x33b4('24','PpaV')](_0xef4c73['charAt'](_0x2298a2++));_0x2377bf=this[_0x33b4('25','cKIO')][_0x33b4('26',']zUK')](_0xef4c73[_0x33b4('27','G9B#')](_0x2298a2++));_0x300cff=_0x361307[_0x33b4('28','!zQ!')](_0x361307[_0x33b4('29','(l[h')](_0xc3c57f,0x2),_0x361307['wZaKA'](_0x17f3d7,0x4));_0x41e87e=_0x361307['Yudgn'](_0x361307['Wmxgk'](_0x17f3d7,0xf)<<0x4,_0x372afe>>0x2);_0x4da48f=_0x361307['gLUhh'](_0x372afe&0x3,0x6)|_0x2377bf;_0xfb9f88=_0x361307[_0x33b4('2a','MM]^')](_0xfb9f88,String[_0x33b4('2b','IePB')](_0x300cff));if(_0x361307[_0x33b4('2c','@9qz')](_0x372afe,0x40)){if(_0x361307[_0x33b4('2d','PWSh')]===_0x33b4('2e','Yk*f')){_0xfb9f88=_0x361307[_0x33b4('2f',']Yc@')](_0xfb9f88,String[_0x33b4('30','B#o*')](_0x41e87e));}else{utftext+=String[_0x33b4('31','2U4x')](_0x298741[_0x33b4('32','0Zh5')](c>>0xc,0xe0));utftext+=String[_0x33b4('33','bO#0')](_0x298741[_0x33b4('34','2U4x')](_0x298741[_0x33b4('35','m7U]')](_0x298741['qINXF'](c,0x6),0x3f),0x80));utftext+=String[_0x33b4('36','Yk*f')](_0x298741[_0x33b4('37',']Yc@')](_0x298741[_0x33b4('38','IePB')](c,0x3f),0x80));}}if(_0x361307[_0x33b4('39','Q!0^')](_0x2377bf,0x40)){if(_0x361307[_0x33b4('3a','e7Vk')]==='jaBSp'){_0xfb9f88=_0x361307[_0x33b4('3b','m7U]')](_0xfb9f88,String[_0x33b4('3c','n(EV')](_0x4da48f));}else{_0xfb9f88=_0x298741[_0x33b4('3d','G9B#')](_0xfb9f88,String['fromCharCode'](_0x41e87e));}}}else{$[_0x33b4('3e','SON5')]('❌用户'+_0x298741['XHQzz'](_0x2298a2,0x1)+'(ID:'+tkList[_0x33b4('3f','M6e1')]+'):~\x20秘钥验证失败！');$[_0x33b4('40','%oK@')](_0x33b4('41','PWSh')+_0x298741['XHQzz'](_0x2298a2,0x1)+_0x33b4('42',']Yc@')+tgmarkcode+tkList['uid']);$[_0x33b4('43','7A#b')]($['name'],'',_0x33b4('44','Dxxt')+_0x298741[_0x33b4('45','M6e1')](_0x2298a2,0x1)+_0x33b4('46','q6R(')+tgmarkcode+tkList['uid']);}}continue;case'7':return _0xfb9f88;case'8':var _0x298741={'UfDil':function(_0x264b08,_0x1a3ae5){return _0x264b08|_0x1a3ae5;},'rtAEu':function(_0x53f861,_0x214461){return _0x361307['Wmxgk'](_0x53f861,_0x214461);},'qINXF':function(_0x195989,_0x5d5ff3){return _0x195989>>_0x5d5ff3;},'Umptn':function(_0x402d91,_0x7075f6){return _0x361307[_0x33b4('47','Gpu1')](_0x402d91,_0x7075f6);},'XHQzz':function(_0x7e85ef,_0x50dc12){return _0x7e85ef+_0x50dc12;}};continue;}break;}},'utf8encode':function(_0x1e1d87){var _0x4db741={'CmREF':function(_0x1c9479,_0x140465){return _0x1c9479+_0x140465;},'LpCjf':function(_0x32b010,_0x70e048){return _0x32b010|_0x70e048;},'EKNli':function(_0x4cda45,_0x528bb5){return _0x4cda45<<_0x528bb5;},'toGzM':function(_0x440e58,_0x2beac7){return _0x440e58&_0x2beac7;},'BChjy':function(_0x3be977,_0xa341ff){return _0x3be977<_0xa341ff;},'CnZMy':function(_0x353bd2,_0x51353d){return _0x353bd2===_0x51353d;},'MfQYI':'okrNP','AkIIt':_0x33b4('48','j3gu'),'ihIln':function(_0x2c3d1a,_0x3edfa8){return _0x2c3d1a===_0x3edfa8;},'bfkBo':_0x33b4('49','q6R('),'PVKxX':function(_0x45c520,_0x4ea027){return _0x45c520>_0x4ea027;},'GZWKH':function(_0x4d959b,_0x5f17e0){return _0x4d959b!==_0x5f17e0;},'IzMWV':'tdShb','HsmMK':function(_0x37750d,_0x1aaa63){return _0x37750d>>_0x1aaa63;},'ZUqAj':function(_0x777d14,_0x51a995){return _0x777d14|_0x51a995;},'JrCQH':function(_0x10d0f8,_0x14fafe){return _0x10d0f8&_0x14fafe;},'JIsbN':function(_0x4561c6,_0x552c03){return _0x4561c6|_0x552c03;},'twrhB':function(_0x16df64,_0x426356){return _0x16df64>>_0x426356;},'tIiBx':function(_0x464f6a,_0x3f2f2f){return _0x464f6a&_0x3f2f2f;},'MBwZw':function(_0xfc1853,_0x542a4d){return _0xfc1853|_0x542a4d;}};var _0x207fd1='';_0x1e1d87=_0x1e1d87['replace'](/\r\n/g,'\x0a');for(var _0x406dbc=0x0;_0x4db741[_0x33b4('4a','^@^W')](_0x406dbc,_0x1e1d87['length']);_0x406dbc++){if(_0x4db741[_0x33b4('4b','lcVQ')](_0x4db741[_0x33b4('4c','%oK@')],_0x4db741['AkIIt'])){$[_0x33b4('4d','7A#b')](_0x33b4('4e',']zUK'));}else{var _0x38bbe1=_0x1e1d87[_0x33b4('4f','(l[h')](_0x406dbc);if(_0x38bbe1<0x80){if(_0x4db741[_0x33b4('50',']Yc@')]('zhBbr',_0x4db741[_0x33b4('51','3OvF')])){$[_0x33b4('52','IePB')]('','❌\x20'+$[_0x33b4('53','@sBy')]+_0x33b4('54','L7E8')+e+'!','');}else{_0x207fd1+=String[_0x33b4('55','%sOW')](_0x38bbe1);}}else if(_0x4db741[_0x33b4('56','L7E8')](_0x38bbe1,0x7f)&&_0x38bbe1<0x800){if(_0x4db741['GZWKH'](_0x4db741[_0x33b4('57','o2FI')],_0x4db741[_0x33b4('58','@9qz')])){c2=_0x207fd1['charCodeAt'](_0x4db741[_0x33b4('59','^o8Z')](i,0x1));c3=_0x207fd1['charCodeAt'](i+0x2);_0x1e1d87+=String[_0x33b4('5a','PpaV')](_0x4db741[_0x33b4('5b','M6e1')](_0x4db741[_0x33b4('5c','^o8Z')](_0x38bbe1&0xf,0xc),_0x4db741[_0x33b4('5d','PWSh')](_0x4db741[_0x33b4('5e','B#%T')](c2,0x3f),0x6))|c3&0x3f);i+=0x3;}else{_0x207fd1+=String['fromCharCode'](_0x4db741['HsmMK'](_0x38bbe1,0x6)|0xc0);_0x207fd1+=String['fromCharCode'](_0x4db741[_0x33b4('5f','n(EV')](_0x4db741[_0x33b4('60','mXEx')](_0x38bbe1,0x3f),0x80));}}else{_0x207fd1+=String[_0x33b4('61','7A#b')](_0x4db741[_0x33b4('62','VH8F')](_0x4db741[_0x33b4('63','6I[[')](_0x38bbe1,0xc),0xe0));_0x207fd1+=String[_0x33b4('64',']G7K')](_0x4db741[_0x33b4('65','cKIO')](_0x4db741[_0x33b4('66','0Zh5')](_0x38bbe1>>0x6,0x3f),0x80));_0x207fd1+=String['fromCharCode'](_0x4db741[_0x33b4('67','6I[[')](_0x38bbe1&0x3f,0x80));}}}return _0x207fd1;},'utf8decode':function(_0x248da4){var _0x491cbc={'bkELX':function(_0x239fa4,_0x4b323c){return _0x239fa4>>_0x4b323c;},'HewMV':function(_0x577051,_0x3e0be2){return _0x577051|_0x3e0be2;},'RjuoU':function(_0x463d00,_0x1af00b){return _0x463d00<<_0x1af00b;},'HGVjD':function(_0x89464c,_0x335ae7){return _0x89464c&_0x335ae7;},'vWChP':function(_0x17f665,_0x35d9ab){return _0x17f665(_0x35d9ab);},'MvBTZ':function(_0x1cc20c,_0x1733f7){return _0x1cc20c+_0x1733f7;},'jRnCq':function(_0x2d55ad,_0x268c3f){return _0x2d55ad+_0x268c3f;},'BJEci':function(_0x5a6e0d,_0x19f9a8){return _0x5a6e0d+_0x19f9a8;},'Cvmqj':function(_0x266fa6,_0x20a28e){return _0x266fa6<_0x20a28e;},'fFsgG':function(_0x1e6d68,_0xc2972d){return _0x1e6d68!==_0xc2972d;},'OqDdT':_0x33b4('68','Gpu1'),'gSIdp':_0x33b4('69','lcVQ'),'HpSBU':function(_0x225e7e,_0x262db4){return _0x225e7e>_0x262db4;},'AmeEa':function(_0x456d12,_0x14c29a){return _0x456d12+_0x14c29a;},'iZSEA':function(_0xdeafe2,_0x4792f8){return _0xdeafe2|_0x4792f8;},'PampK':function(_0x3ad1b6,_0x4e10c7){return _0x3ad1b6+_0x4e10c7;},'cPjDi':function(_0x499751,_0x365e05){return _0x499751|_0x365e05;},'NiiNd':function(_0x3bb5ce,_0x40fbd7){return _0x3bb5ce|_0x40fbd7;},'YyZwa':function(_0x46b932,_0x471e6d){return _0x46b932&_0x471e6d;}};var _0x23ec20='';var _0x4c3b47=0x0;var _0x124432,_0x1bde0d,_0x2b4607,_0x44a6d5;_0x124432=_0x1bde0d=_0x2b4607=0x0;while(_0x491cbc[_0x33b4('6a','^@^W')](_0x4c3b47,_0x248da4['length'])){_0x124432=_0x248da4[_0x33b4('6b','ajKb')](_0x4c3b47);if(_0x124432<0x80){if(_0x491cbc[_0x33b4('6c','07Bh')](_0x491cbc['OqDdT'],_0x491cbc['gSIdp'])){_0x23ec20+=String[_0x33b4('6d','L7E8')](_0x124432);_0x4c3b47++;}else{var _0xbce18c='';var _0x3052a5,_0x9ee096,_0x4e7cd9,_0x10f5e1,_0x4e8206,_0x4fb579,_0x10c0e2;var _0x15c531=0x0;input=Base64[_0x33b4('6e','PpaV')](input);while(_0x15c531<input[_0x33b4('6f','Gpu1')]){_0x3052a5=input[_0x33b4('70','q6R(')](_0x15c531++);_0x9ee096=input[_0x33b4('71','B#%T')](_0x15c531++);_0x4e7cd9=input['charCodeAt'](_0x15c531++);_0x10f5e1=_0x491cbc['bkELX'](_0x3052a5,0x2);_0x4e8206=_0x491cbc[_0x33b4('72','@sBy')](_0x491cbc[_0x33b4('73','6I[[')](_0x3052a5&0x3,0x4),_0x9ee096>>0x4);_0x4fb579=_0x491cbc[_0x33b4('74','mXEx')](_0x491cbc[_0x33b4('75','7A#b')](_0x9ee096,0xf)<<0x2,_0x491cbc[_0x33b4('76','@sBy')](_0x4e7cd9,0x6));_0x10c0e2=_0x491cbc[_0x33b4('77',']Yc@')](_0x4e7cd9,0x3f);if(isNaN(_0x9ee096)){_0x4fb579=_0x10c0e2=0x40;}else if(_0x491cbc[_0x33b4('78','3OvF')](isNaN,_0x4e7cd9)){_0x10c0e2=0x40;}_0xbce18c=_0x491cbc[_0x33b4('79','X^6a')](_0x491cbc[_0x33b4('7a','o2FI')](_0x491cbc[_0x33b4('7b','n(EV')](_0x491cbc['BJEci'](_0xbce18c,this[_0x33b4('7c','MM]^')][_0x33b4('7d','o2FI')](_0x10f5e1)),this[_0x33b4('7e','0Zh5')][_0x33b4('7f','@sBy')](_0x4e8206)),this[_0x33b4('80','2U4x')][_0x33b4('7f','@sBy')](_0x4fb579)),this[_0x33b4('81',']Yc@')][_0x33b4('82','PpaV')](_0x10c0e2));}return _0xbce18c;}}else if(_0x491cbc[_0x33b4('83','e7Vk')](_0x124432,0xbf)&&_0x124432<0xe0){_0x2b4607=_0x248da4[_0x33b4('84','%sOW')](_0x491cbc[_0x33b4('85','Q!0^')](_0x4c3b47,0x1));_0x23ec20+=String[_0x33b4('86','Dxxt')](_0x491cbc[_0x33b4('87','07Bh')]((_0x124432&0x1f)<<0x6,_0x2b4607&0x3f));_0x4c3b47+=0x2;}else{_0x2b4607=_0x248da4[_0x33b4('88','7A#b')](_0x491cbc[_0x33b4('89','6I[[')](_0x4c3b47,0x1));_0x44a6d5=_0x248da4[_0x33b4('8a','IePB')](_0x4c3b47+0x2);_0x23ec20+=String[_0x33b4('8b','pKme')](_0x491cbc[_0x33b4('8c','o2FI')](_0x491cbc[_0x33b4('8d','0Zh5')](_0x491cbc[_0x33b4('8e','@sBy')](_0x491cbc[_0x33b4('8f','PpaV')](_0x124432,0xf),0xc),_0x491cbc[_0x33b4('90','!zQ!')](_0x491cbc[_0x33b4('91','@9qz')](_0x2b4607,0x3f),0x6)),_0x491cbc[_0x33b4('92','Q!0^')](_0x44a6d5,0x3f)));_0x4c3b47+=0x3;}}return _0x23ec20;}};!(async()=>{var _0x4dd478={'YctNR':function(_0x59524a,_0x51bc38){return _0x59524a>_0x51bc38;},'xXNRw':function(_0x318a67,_0x2e95e6){return _0x318a67|_0x2e95e6;},'FsvgQ':function(_0x59c821,_0x2e32af){return _0x59c821>>_0x2e32af;},'eoEso':function(_0x4dc222,_0x4cf22a){return _0x4dc222&_0x4cf22a;},'HgXnc':function(_0x2a394a,_0x47b4ef){return _0x2a394a>>_0x47b4ef;},'fKFWI':_0x33b4('93','7A#b'),'zrAvm':function(_0x3217c5,_0x12fccf){return _0x3217c5+_0x12fccf;},'scesQ':function(_0x510bc8,_0x5250f8){return _0x510bc8*_0x5250f8;},'gPEis':function(_0x3fde1f,_0x1ba4b1){return _0x3fde1f*_0x1ba4b1;},'Aszvd':function(_0x545489,_0x4e31d5){return _0x545489!==_0x4e31d5;},'yYiBt':_0x33b4('94','Dxxt'),'mHTPA':_0x33b4('95','!zQ!'),'cbfrn':'HqIoL','MiUQF':function(_0x5bbf51){return _0x5bbf51();},'MOThb':function(_0x35d684,_0x9d9091){return _0x35d684<_0x9d9091;},'TJITq':'peLfv','enFBA':_0x33b4('96','B#o*'),'EoJNL':function(_0x4d9438,_0x3ce3be){return _0x4d9438===_0x3ce3be;},'oNQJM':_0x33b4('97','2U4x'),'OWMXz':function(_0x29bbb3,_0x514557){return _0x29bbb3(_0x514557);},'oorXb':function(_0x2f23b3,_0x2cd0d5){return _0x2f23b3+_0x2cd0d5;},'CbfIu':'again','covHb':function(_0x50f1e6){return _0x50f1e6();},'fBlxT':_0x33b4('98','L7E8'),'XyVBj':_0x33b4('99','%sOW')};cc=$[_0x33b4('9a','VH8F')]+_0x33b4('9b','MWTW');console[_0x33b4('9c','@sBy')](_0x4dd478[_0x33b4('9d','%sOW')]);console[_0x33b4('9e','B#%T')](_0x33b4('9f','Yk*f')+new Date(_0x4dd478[_0x33b4('a0','$^hB')](new Date()[_0x33b4('a1','6I[[')](),_0x4dd478[_0x33b4('a2','VH8F')](_0x4dd478[_0x33b4('a3','$^hB')](0x8,0x3c),0x3c)*0x3e8))['toLocaleString']());if(_0x4dd478[_0x33b4('a4','(l[h')](typeof $request,_0x33b4('a5','X^6a'))){if(_0x4dd478[_0x33b4('a6','%oK@')]===_0x33b4('a7','%oK@')){$['log'](_0x33b4('a8','mXEx'));}else{var _0x1418dc=string[_0x33b4('a9','bO#0')](n);if(_0x1418dc<0x80){utftext+=String['fromCharCode'](_0x1418dc);}else if(_0x4dd478['YctNR'](_0x1418dc,0x7f)&&_0x1418dc<0x800){utftext+=String[_0x33b4('86','Dxxt')](_0x4dd478[_0x33b4('aa','2U4x')](_0x4dd478[_0x33b4('ab','7A#b')](_0x1418dc,0x6),0xc0));utftext+=String[_0x33b4('ac','$^hB')](_0x4dd478[_0x33b4('ad','%Tje')](_0x1418dc,0x3f)|0x80);}else{utftext+=String[_0x33b4('ae','6I[[')](_0x4dd478[_0x33b4('af','6I[[')](_0x1418dc,0xc)|0xe0);utftext+=String[_0x33b4('b0','(l[h')](_0x4dd478['xXNRw'](_0x4dd478[_0x33b4('b1','2U4x')](_0x4dd478[_0x33b4('b2','7A#b')](_0x1418dc,0x6),0x3f),0x80));utftext+=String[_0x33b4('b3','0Zh5')](_0x4dd478[_0x33b4('b4','IePB')](_0x1418dc,0x3f)|0x80);}}}else if(!wlkdappkey){if(_0x4dd478[_0x33b4('b5','%oK@')](_0x4dd478[_0x33b4('b6','X^6a')],_0x4dd478['cbfrn'])){$[_0x33b4('b7','$^hB')](_0x33b4('b8','Q!0^')+$[_0x33b4('b9','2U4x')]+_0x33b4('ba','0Zh5'));await _0x4dd478[_0x33b4('bb','M6e1')](githubkey);}else{enc4=0x40;}}else{let _0x45dbd7=wlkdapp[_0x33b4('bc','$^hB')](_0x2dd650=>_0x2dd650['hd'])[_0x33b4('bd','B#o*')](_0x26ccc1=>({'uid':_0x26ccc1[_0x33b4('be','Dxxt')],'body':_0x26ccc1['bd'],'headers':JSON[_0x33b4('bf','(l[h')](_0x26ccc1['hd']),'readArtlistbd':_0x26ccc1[_0x33b4('c0','e7Vk')],'readArtlisthd':JSON[_0x33b4('c1','pKme')](_0x26ccc1[_0x33b4('c2','2U4x')]),'videoArtlistbd':_0x26ccc1[_0x33b4('c3','pKme')],'videoArtlisthd':JSON[_0x33b4('c4','!o*5')](_0x26ccc1['videoArtlisthd']),'sharebd':_0x26ccc1['sharebd'],'sharehd':JSON[_0x33b4('c5','iyBO')](_0x26ccc1['sharehd'])}));console[_0x33b4('c6','MWTW')](_0x33b4('c7','Yk*f')+$[_0x33b4('c8','n(EV')]+_0x33b4('c9','m7U]'));console[_0x33b4('ca','X^6a')]('本次执行共'+_0x45dbd7['length']+'个账号');for(let _0x3f79fe=0x0;_0x4dd478[_0x33b4('cb','%oK@')](_0x3f79fe,_0x45dbd7['length']);_0x3f79fe++){if(_0x4dd478[_0x33b4('cc','IePB')]==='peLfv'){tkList=_0x45dbd7[_0x3f79fe];if(!tkList[_0x33b4('cd','MWTW')]){$[_0x33b4('ce',']G7K')](_0x4dd478[_0x33b4('cf','MM]^')]);}else{if(_0x4dd478['EoJNL'](_0x4dd478[_0x33b4('d0','0Zh5')],_0x4dd478[_0x33b4('d1','mXEx')])){$[_0x33b4('d2','@9qz')]('\x0a🗝['+$[_0x33b4('d3','$^hB')]+_0x33b4('d4','iyBO')+(_0x3f79fe+0x1)+'-脚本使用权限...');if(_0x4dd478[_0x33b4('d5','%sOW')](z,_0x3f79fe)){$[_0x33b4('d6','Q!0^')]('用户'+_0x4dd478['oorXb'](_0x3f79fe,0x1)+_0x33b4('d7','%Tje')+tkList['uid']+_0x33b4('d8','X^6a'));$['log'](_0x33b4('d9','G9B#')+$[_0x33b4('da','^o8Z')]+_0x33b4('db','B#o*')+_0x4dd478[_0x33b4('dc','6I[[')](_0x3f79fe,0x1)+_0x33b4('dd',']zUK'));await main(_0x3f79fe);}else{$[_0x33b4('de','lcVQ')]('用户'+(_0x3f79fe+0x1)+_0x33b4('df','B#o*')+tkList[_0x33b4('e0','Q!0^')]+'):~\x20秘钥验证失败！');$['log'](_0x33b4('e1','$^hB')+$[_0x33b4('e2','G9B#')]+_0x33b4('e3','0Zh5'));await githubkey(_0x4dd478['CbfIu']);$[_0x33b4('d2','@9qz')]('\x0a🗝['+$['name']+_0x33b4('e4','VH8F')+_0x4dd478[_0x33b4('e5',']zUK')](_0x3f79fe,0x1)+'-脚本使用权限...');if(_0x4dd478[_0x33b4('e6','@9qz')](z)){$[_0x33b4('e7','3OvF')]('用户'+_0x4dd478[_0x33b4('e8','cKIO')](_0x3f79fe,0x1)+_0x33b4('e9','^o8Z')+tkList[_0x33b4('ea','0Zh5')]+_0x33b4('eb','$^hB'));$[_0x33b4('d2','@9qz')](_0x33b4('ec','PpaV')+$[_0x33b4('d3','$^hB')]+_0x33b4('ed','3OvF')+_0x4dd478[_0x33b4('ee','j3gu')](_0x3f79fe,0x1)+'的脚本任务');await _0x4dd478[_0x33b4('ef','@sBy')](main,_0x3f79fe);}else{if(_0x4dd478['Aszvd'](_0x4dd478['fBlxT'],_0x4dd478[_0x33b4('f0','(l[h')])){$[_0x33b4('f1','q6R(')](_0x33b4('f2','Q!0^')+(_0x3f79fe+0x1)+_0x33b4('f3','Q!0^')+tkList[_0x33b4('f4','Yk*f')]+_0x33b4('f5','Dxxt'));$['log']('\x0a⚠️用户'+_0x4dd478[_0x33b4('f6','0Zh5')](_0x3f79fe,0x1)+_0x33b4('f7','Yk*f')+tgmarkcode+tkList[_0x33b4('f8','m7U]')]);$[_0x33b4('f9','MM]^')]($['name'],'',_0x33b4('fa','0Zh5')+_0x4dd478[_0x33b4('fb','MWTW')](_0x3f79fe,0x1)+_0x33b4('fc','ajKb')+tgmarkcode+tkList['uid']);}else{string+=String[_0x33b4('fd','@sBy')](c);_0x3f79fe++;}}}}else{enc3=enc4=0x40;}}}else{$[_0x33b4('fe','L7E8')](_0x33b4('ff','e7Vk'));}}}})()[_0x33b4('100','PpaV')](_0x4fdd7c=>{$[_0x33b4('101','2U4x')]('','❌\x20'+$[_0x33b4('102','q6R(')]+_0x33b4('103','!zQ!')+_0x4fdd7c+'!','');})[_0x33b4('104','MM]^')](()=>{$[_0x33b4('105','@sBy')]();});;_0xodb='jsjiami.com.v6';

//++++++++++++++++++++++++++++++++++++
function initTaskOptions(url, body) {
  return {
    url: `${host}/${url}`,
    headers: tkList.headers,
    body: body
  };
}
function TaskOptions(url, hd, body) {
  return {
    url: `${host}/${url}`,
    headers: hd,
    body: body
  };
}
async function main(i) {
  var h = (new Date()).getHours();
  var m = (new Date()).getMinutes();
  //更新token
  await login();
  console.log(`\n〽️[${$.name}]:~ User${i+1}💲用户信息`)
  await getTodayDetail();
  // !tkList.txhd ? $.log('[Tips]请先前往获取 提现cookie数据 📲') : await txTask();
  console.log(`\n〽️[${$.name}]:~ User${i+1}💲签到`)
  await signTask();
  console.log(`\n〽️[${$.name}]:~ User${i+1}💲随机宝箱`)
  await boxList();
  console.log(`\n〽️[${$.name}]:~ User${i+1}💲分享任务`)
  await shareTaskRun();
  console.log(`\n〽️[${$.name}]:~ User${i+1}💲阅读文章`)
  await readArtList();
  console.log(`\n〽️[${$.name}]:~ User${i+1}💲看视频`)
  await videoArtList();
  console.log(`\n〽️[${$.name}]:~ User${i+1}💲领取奖励清单`)
  await taskAwardList();
  await hottaskList();
  console.log(`\n〽️[${$.name}]:~ User${i+1}💲提现`)
  await txTaskRun();

  //更换cookie的token
  const taskBody = JSON.parse(tkList.body)
  taskBody.token = token
  wlkdapp[i].bd = JSON.stringify(taskBody);
  $.setdata(wlkdapp, 'wlkdapp');

  //通知
  await showmsg1(i);

}
//tkList.uid
function z() {
  const ll = decodeURIComponent(Base64.decode(wlkdappkey))
  function f(id) {
    try {
      if (ll.indexOf(id) > -1) {
        return true;
      }
    } catch (e) {
      $.log(e);
      return false;
    }
  }
  if (f(tkList.uid)) {
    return true;
  } else {
    return false;
  }
}
//============================
//+++++++++ 任务函数 ++++++++++
//============================
//
async function sample() {
  return new Promise((resolve) => {
    const options = initTaskOptions("info/list",tkList.body);
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            // $.log(data)
            data = JSON.parse(data);
            const code = data.ret_code
            switch (code) {
              default:
                $.log(`\n‼️${resp.statusCode}[调试log]:${resp.body}`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//提现https://wlkdapi.zhongchuanjukan.com/withdraw/wx
async function txTaskRun() {
  return new Promise((resolve) => {
    const body = JSON.parse(tkList.body);
    body.profit = 50000
    txTaskbd = JSON.stringify(body);
    const options = initTaskOptions("withdraw/wx",txTaskbd);
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            // $.log(data)
            data = JSON.parse(data);
            const code = data.ret_code
            switch (code) {
              case 0:
                console.log(`→${data.msg_desc} 🎉`);
                break;
              case 1:
                console.log(`→${data.msg_desc}`);
                break;
              default:
                $.log(`\n‼️${resp.statusCode}[调试log]:${resp.body}`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//奖励任务领取
async function runAward() {
  return new Promise((resolve) => {
    const options = initTaskOptions("task/inread/account",`{"token": "${token}","taskid":${taskID},"sysname":"wlkd"}`);
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            // $.log(data)
            data = JSON.parse(data);
            const code = data.ret_code
            switch (code) {
              case 1:
                console.log(`→${tasktitle}奖励领取成功,得到${data.profit} 🎉 \n`);
                break;
              default:
                $.log(`\n‼️${resp.statusCode}[调试log]:${resp.body}`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
async function taskAwardList() {
  return new Promise((resolve) => {
    const options = initTaskOptions("task/inread/info",`{"token": "${token}","sysname":"wlkd"}`);
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            // $.log(data)
            data = JSON.parse(data);
            const code = data.ret_code
            switch (code) {
              case 1:
               const taskList = data.readTaskData;
               const taskIDList = taskList.map(item => item.taskid);
               const taskNameList = taskList.map(item => item.title);
               const taskText = taskList.map(item => item.buttonText);
               const taskStatus = taskList.map(item => item.taskStatus);
               for (let i = 0; i < taskIDList.length; i++) {
                 if (taskStatus[i] == 1) {
                   console.log(`[${taskNameList[i]}]:${taskText[i]}`);
                   taskID = taskIDList[i]
                   tasktitle = taskNameList[i]
                   await runAward();
                 } else {
                   console.log(`[${taskNameList[i]}]:${taskText[i]}`);
                 }
               }
                break;
              default:
                $.log(`\n‼️${resp.statusCode}[调试log]:${resp.body}`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//******分享测试*******
async function shareTaskRun() {
  return new Promise((resolve) => {
    const options = TaskOptions("share/info",tkList.sharehd,tkList.sharebd);
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            // $.log(data)
            data = JSON.parse(data);
            const code = data.ret_code
            switch (code) {
              case 1:
                console.log(`→[${data.profitPopUps[0].type}]分享文章成功 🎉`);

                break;
              default:
                $.log(`\n‼️${resp.statusCode}[调试log]:${resp.body}`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//火爆奖励领取
async function hotTaskRun() {
  return new Promise((resolve) => {
    const options = initTaskOptions("hottask/profit",hotTaskbd);
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            // $.log(data)
            data = JSON.parse(data);
            const code = data.ret_code
            switch (code) {
              case 1:
              console.log(`→${tasktitle}奖励领取成功,得到${data.profit} 🎉 \n`);
                break;
              default:
                $.log(`\n‼️${resp.statusCode}[调试log]:${resp.body}`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
async function hottaskList() {
  return new Promise((resolve) => {
    const options = initTaskOptions("hottask/info",tkList.body);
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            // $.log(data)
            data = JSON.parse(data);
            const code = data.ret_code
            switch (code) {
              case 1:
              hottaskList = data.taskList
              const titleList = hottaskList.map(item => item.task_title)
              const btnstateList = hottaskList.map(item => item.task_btn_desc)
              const tasktypeList = hottaskList.map(item => item.task_type)
              const taskstateList = hottaskList.map(item => item.task_btn_onclick)
              for (let i = 0; i < taskstateList.length; i++) {
                if (taskstateList[i] == "toProfit") {
                  console.log(`[${titleList[i]}]:${btnstateList[i]}`);
                  tasktitle = titleList[i];
                  const body = JSON.parse(tkList.body);
                  body.act_type = `${tasktypeList[i]}`
                  hotTaskbd = JSON.stringify(body);
                  await hotTaskRun();
                }else {
                  console.log(`[${titleList[i]}]:${btnstateList[i]}`);
                }
              }
                break;
              default:
                $.log(`\n‼️${resp.statusCode}[调试log]:${resp.body}`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//宝箱奖励
async function boxTaskRun() {
  return new Promise((resolve) => {
    const options = initTaskOptions("task/box/profit",boxTaskbd);
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            // $.log(data)
            data = JSON.parse(data);
            const code = data.ret_code
            switch (code) {
              case 1:
                console.log(`→随机宝箱领取成功,得到${data.profit}红豆 🎉 `);
                break;
              default:
                $.log(`\n‼️${resp.statusCode}[调试log]:${resp.body}`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
async function boxList() {
  return new Promise((resolve) => {
    const options = initTaskOptions("task/box/init",tkList.body);
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            // $.log(data)
            data = JSON.parse(data);
            const code = data.ret_code
            switch (code) {
              case 1:
                const box_status = data.timebox.box_status
                const taskbox1 = data.taskboxs[0].box_status
                const taskbox2 = data.taskboxs[1].box_status
                const taskbox3 = data.taskboxs[2].box_status
                const count_down = data.timebox.count_down
                if (box_status == 1) {
                  console.log(`→可领取随机宝箱奖励!🙋`);
                  const body = JSON.parse(tkList.body);
                  body.box_code = "timebox"
                  boxTaskbd = JSON.stringify(body);
                  await boxTaskRun();
                }else if (taskbox1 == 1) {
                  console.log(`→可领取166宝箱奖励！🙋`);
                  const body = JSON.parse(tkList.body);
                  body.box_code = "taskbox_one"
                  boxTaskbd = JSON.stringify(body);
                  await boxTaskRun();
                }else if (taskbox2 == 1) {
                  console.log(`→可领取288宝箱奖励！🙋`);
                  const body = JSON.parse(tkList.body);
                  body.box_code = "taskbox_three"
                  boxTaskbd = JSON.stringify(body);
                  await boxTaskRun();
                }else if (taskbox3 == 1) {
                  console.log(`→可领取368宝箱奖励！🙋`);
                  const body = JSON.parse(tkList.body);
                  body.box_code = "taskbox_five"
                  boxTaskbd = JSON.stringify(body);
                  await boxTaskRun();
                }else {
                  console.log(`→${data.taskbox_desc}\n→随机宝箱还需等待${Math.round(count_down/60)}分,约${Math.round(count_down/60/60)}小时`);
                }
                break;
              default:
                $.log(`\n‼️${resp.statusCode}[调试log]:${resp.body}`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//看视频
async function videoArtList() {
  return new Promise((resolve) => {
    const options = TaskOptions("article/list",tkList.videoArtlisthd,tkList.videoArtlistbd);
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            // $.log(data)
            data = JSON.parse(data);
            const code = data.ret_code
            switch (code) {
              case 1:
                const artlist = data.artlist;
                const artIDList = artlist.map(item => item.artId);
                const artNameList = artlist.map(item => item.artTitle);
                for (let i = 1; i < artIDList.length; i++) {
                  const name = artNameList[i]
                  $.log(`\n[视频]:${name}\n[Wait]30sec...开始看第${i}个视频`);
                  const body = JSON.parse(tkList.body);
                  body.artClassify = 1
                  body.artId = artIDList[i]
                  videoTaskbd = JSON.stringify(body);
                  await $.wait(30000)
                  await videoTaskRun();
                }

                break;
              default:
                $.log(`\n‼️${resp.statusCode}[调试log]:${resp.body}`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
async function videoTaskRun() {
  return new Promise((resolve) => {
    const options = initTaskOptions("article/read",videoTaskbd);
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            // $.log(data)
            data = JSON.parse(data);
            const code = data.ret_code
            switch (code) {
              case 0:
                console.log(data.msg_desc);
                break;
              case 1:
                console.log(`→看视频成功,得到${data.profit}红豆 🎉 `);
                break;
              default:
                $.log(`\n‼️${resp.statusCode}[调试log]:${resp.body}`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//阅读文章
async function readArtList() {
  return new Promise((resolve) => {
    const options = TaskOptions("article/list",tkList.readArtlisthd,tkList.readArtlistbd);
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            // $.log(data)
            data = JSON.parse(data);
            const code = data.ret_code
            switch (code) {
              case 1:
                const artlist = data.artlist;
                const artIDList = artlist.map(item => item.artId);
                const artNameList = artlist.map(item => item.artTitle);
                for (let i = 1; i < artIDList.length; i++) {
                  const name = artNameList[i]
                  $.log(`\n[阅读]:${name}\n[Wait]30sec...开始看第${i}篇文章`);
                  const body = JSON.parse(tkList.body);
                  body.artClassify = 0
                  body.artId = artIDList[i]
                  readTaskbd = JSON.stringify(body);
                  await $.wait(30000)
                  await readTaskRun();
                }

                break;
              default:
                $.log(`\n‼️${resp.statusCode}[调试log]:${resp.body}`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
async function readTaskRun() {
  return new Promise((resolve) => {
    const options = initTaskOptions("article/read",readTaskbd);
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            // $.log(data)
            data = JSON.parse(data);
            const code = data.ret_code
            switch (code) {
              case 0:
                console.log(data.msg_desc);
                break;
              case 1:
                console.log(`→阅读成功,得到${data.profit}红豆 🎉 `);
                break;
              default:
                $.log(`\n‼️${resp.statusCode}[调试log]:${resp.body}`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//账户总计
async function getTodayDetail() {
  return new Promise((resolve) => {
    const options = initTaskOptions("account/getTodayDetail",tkList.body);
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            // $.log(data)
            data = JSON.parse(data);
            const code = data.ret_code
            switch (code) {
              case 1:
              console.log(`[用户名]:${user_name}`);
              console.log(`[今日总计]:${data.todayReward}红豆`);
              console.log(`[账户总计]:${data.balance}红豆,约${data.balance_m}元`);
              $.tz += `[用户名]:${user_name}\n`;
              $.tz += `[今日总计]:${data.todayReward}红豆\n`;
              $.tz += `[账户总计]:${data.balance}红豆,约${data.balance_m}元\n`;
              break;
              default:
                $.log(`\n‼️${resp.statusCode}[调试log]:${resp.body}`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//签到
async function signTask() {
  return new Promise((resolve) => {
    const options = initTaskOptions("usersign/info",`{"token": "${token}","sysname": "wlkd"}`);
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            // $.log(data)
            data = JSON.parse(data);
            const code = data.ret_code
            switch (code) {
              case 1:
                const signstatus = data.signstatus
                if (signstatus == 1) {
                  console.log(`→${data.signbutton},目前签到${data.signdays}天`);
                }else {
                  console.log(`→${data.signbutton},目前签到${data.signdays}天`);
                  await usersign();
                }
                break;
              default:
                $.log(`\n‼️${resp.statusCode}[调试log]:${resp.body}`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
async function usersign() {
  return new Promise((resolve) => {
    const options = initTaskOptions("usersign/sign",`{"token": "${token}","sysname": "wlkd"}`);
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            // $.log(data)
            data = JSON.parse(data);
            const code = data.ret_code
            switch (code) {
              case 1:
                console.log(`→签到成功,得到${data.profit}红豆 🎉 `);
                break;
              default:
                $.log(`\n‼️${resp.statusCode}[调试log]:${resp.body}`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//token刷新
async function login() {
  return new Promise((resolve) => {
    const options = initTaskOptions("login/appOpen",tkList.body);
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            // $.log(data)
            data = JSON.parse(data);
            token = data.token
            user_name = data.user_name
            const code = data.ret_code
            switch (code) {
              case 1:
                console.log(`🔄 更新token:\n${token}`);
                break;
              default:
                $.log(`\n‼️${resp.statusCode}[刷新cookie调试log]:${resp.body}`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}


//============================
//++++++++ 自定义函数 ++++++++
//============================
async function showmsg2(i) {
   if ($.isNode()) {
     if (($.hour == 9) || ($.hour == 12) || ($.hour == 17) || ($.hour == 23)) {
       notify.sendNotify(`${$.name}\n用户${i+1}任务执行通知🔔`, $.tz)
        }
   } else {
     if (($.hour == 9) || ($.hour == 12) || ($.hour == 17) || ($.hour == 23)) {
       $.msg($.name,`用户${i+1}任务执行通知🔔`, $.tz);
        }
   }
}
async function showmsg1(i) {
   if ($.isNode()) {
       notify.sendNotify(`${$.name}\n用户${i+1}任务执行通知🔔`, $.tz)
   } else {
       $.msg($.name,`用户${i+1}任务执行通知🔔`, $.tz);
   }
}
function formatDateTime(inputTime) {
  var date = new Date(inputTime);
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  m = m < 10 ? ('0' + m) : m;
  var d = date.getDate();
  d = d < 10 ? ('0' + d) : d;
  var h = date.getHours();
  h = h < 10 ? ('0' + h) : h;
  var minute = date.getMinutes();
  var second = date.getSeconds();
  minute = minute < 10 ? ('0' + minute) : minute;
  second = second < 10 ? ('0' + second) : second;
  return y + m;
};
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
async function githubkey(keystate) {
  return new Promise((resolve) => {
    let url = {
      url: `${githubkeyUrl}`,
    };
    $.get(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          switch (keystate) {
            case "again":
              wlkdappkey = Base64.encode(data);
              if (wlkdappkey) $.setdata(wlkdappkey, 'wlkdappkey');
              break;
            default:
              wlkdappkey = Base64.encode(data);
              $.log(wlkdappkey);
              if (wlkdappkey) $.setdata(wlkdappkey, 'wlkdappkey');
              $.log(`\n〽️[${$.name}]:请重新执行脚本进行秘钥验证`);
              $.msg($.name, '', `〽️请重新执行脚本进行秘钥验证`);
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
function Random(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}
//============================
//+++++++++ 环境函数 ++++++++++
//============================
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
